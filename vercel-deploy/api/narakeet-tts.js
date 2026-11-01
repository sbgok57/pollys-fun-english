// Vercel Node Function: optional Narakeet speech proxy.
// It deliberately returns disabled until both NARAKEET_TTS_ENABLED=true and
// a server-side NARAKEET_API_KEY exist. Never expose that key to browser code.
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;
const MAX_TEXT_LENGTH = 1200;
const requestWindows = new Map();

function reply(res, status, body, contentType = 'application/json; charset=utf-8') {
  res.statusCode = status;
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (contentType.startsWith('application/json')) return res.end(JSON.stringify(body));
  return res.end(body);
}

function sameOrigin(req) {
  const origin = req.headers && req.headers.origin;
  if (!origin) return true; // Non-browser health checks may omit Origin.
  try {
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').toLowerCase();
    return new URL(origin).host.toLowerCase() === host;
  } catch (e) {
    return false;
  }
}

function withinBestEffortRateLimit(req) {
  const forwarded = String((req.headers && req.headers['x-forwarded-for']) || '');
  const ip = (forwarded.split(',')[0] || req.socket && req.socket.remoteAddress || 'unknown').trim();
  const now = Date.now();
  const entry = requestWindows.get(ip);
  if (!entry || now - entry.start >= WINDOW_MS) {
    requestWindows.set(ip, { start: now, count: 1 });
    // Keep this per-instance guard bounded; it is a soft guard, not a durable billing limit.
    if (requestWindows.size > 500) {
      for (const [key, value] of requestWindows) if (now - value.start >= WINDOW_MS) requestWindows.delete(key);
    }
    return true;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) return false;
  entry.count += 1;
  return true;
}

module.exports = async function narakeetTts(req, res) {
  const enabled = process.env.NARAKEET_TTS_ENABLED === 'true' && !!process.env.NARAKEET_API_KEY;
  if (req.method === 'GET') return reply(res, 200, { enabled });
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return reply(res, 405, { error: 'Method not allowed.' });
  }
  if (!sameOrigin(req)) return reply(res, 403, { error: 'Cross-origin requests are not allowed.' });
  if (!enabled) return reply(res, 503, { error: 'Online speech is not configured.' });
  if (!withinBestEffortRateLimit(req)) return reply(res, 429, { error: 'Speech request limit reached. Please wait a moment.' });

  const input = req.body && typeof req.body === 'object' ? req.body : {};
  const text = typeof input.text === 'string' ? input.text.trim() : '';
  if (!text || text.length > MAX_TEXT_LENGTH) {
    return reply(res, 400, { error: `Text must contain 1–${MAX_TEXT_LENGTH} characters.` });
  }

  const voice = String(process.env.NARAKEET_TTS_VOICE || '').trim();
  const rate = Number(input.rate);
  const safeRate = Number.isFinite(rate) ? Math.max(0.75, Math.min(1.25, rate)) : 0.9;
  const query = new URLSearchParams();
  if (voice) query.set('voice', voice);
  query.set('voice-speed', String(safeRate));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const response = await fetch(`https://api.narakeet.com/text-to-speech/mp3?${query}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Accept': 'application/octet-stream',
        'x-api-key': process.env.NARAKEET_API_KEY
      },
      body: text,
      signal: controller.signal
    });
    if (!response.ok) {
      console.error('Narakeet TTS request failed with status', response.status);
      return reply(res, 502, { error: 'The speech provider could not create audio.' });
    }
    const contentType = response.headers.get('content-type') || '';
    if (!/^audio\/(mpeg|mp3|mp4|x-m4a)/i.test(contentType) && contentType.toLowerCase() !== 'application/octet-stream') {
      console.error('Narakeet TTS returned an unexpected content type');
      return reply(res, 502, { error: 'The speech provider returned an unsupported audio format.' });
    }
    const audio = Buffer.from(await response.arrayBuffer());
    if (!audio.length || audio.length > 8 * 1024 * 1024) {
      return reply(res, 502, { error: 'The speech provider returned an invalid audio file.' });
    }
    return reply(res, 200, audio, 'audio/mpeg');
  } catch (error) {
    console.error('Narakeet TTS request failed:', error && error.name === 'AbortError' ? 'timeout' : 'network error');
    return reply(res, 502, { error: 'Online speech is temporarily unavailable.' });
  } finally {
    clearTimeout(timeout);
  }
};
