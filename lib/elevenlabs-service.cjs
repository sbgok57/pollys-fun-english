// Server-only ElevenLabs bridge. Never import this module into a browser bundle.
const { createHash } = require('node:crypto');

function createElevenLabsService({ fetchImpl = fetch, getKey = () => process.env.ELEVENLABS_API_KEY, now = Date.now } = {}) {
  let catalog = null;
  let pending = null;
  const windows = new Map();
  const audioCache = new Map();
  let audioBytes = 0;
  const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' } });
  function fail(status, error, code) { return json(status, { ok: false, error, code }); }
  function providerError(status) {
    if (status === 401) return fail(503, 'ElevenLabs anahtarı kabul edilmedi. Anahtarı ve Voices: Read / Text to Speech izinlerini kontrol edin.', 'INVALID_API_KEY');
    if (status === 403) return fail(503, 'ElevenLabs anahtarına Voices: Read ve Text to Speech izinleri verin.', 'PROVIDER_PERMISSION');
    if (status === 429) return fail(429, 'ElevenLabs kullanım sınırına ulaşıldı. Bir süre sonra tekrar deneyin.', 'PROVIDER_LIMIT');
    return fail(502, 'ElevenLabs şu anda yanıt veremiyor. Tekrar deneyin.', 'PROVIDER_UNAVAILABLE');
  }
  async function voices(key, refresh = false) {
    const keyHash = createHash('sha256').update(key).digest('hex');
    if (!refresh && catalog && catalog.keyHash === keyHash && catalog.expires > now()) return catalog;
    if (pending && pending.keyHash === keyHash) return pending.promise;
    const promise = (async () => {
      const result = new Map();
      const tokens = new Set();
      let token = '';
      for (let page = 0; page < 20; page++) {
        const url = new URL('https://api.elevenlabs.io/v2/voices');
        url.searchParams.set('voice_type', 'saved');
        url.searchParams.set('page_size', '100');
        url.searchParams.set('include_total_count', 'false');
        if (token) url.searchParams.set('next_page_token', token);
        const response = await fetchImpl(url, { headers: { 'xi-api-key': key, Accept: 'application/json' }, cache: 'no-store', signal: AbortSignal.timeout(10000) });
        if (!response.ok) throw { providerStatus: response.status };
        const data = await response.json();
        if (!data || !Array.isArray(data.voices)) throw new Error('Invalid catalog');
        for (const v of data.voices) {
          if (!v || typeof v.voice_id !== 'string' || !/^[a-zA-Z0-9_-]{1,128}$/.test(v.voice_id)) continue;
          let previewUrl = null;
          try { const u = new URL(v.preview_url); if (u.protocol === 'https:') previewUrl = u.href; } catch {}
          result.set(v.voice_id, { id: v.voice_id, name: typeof v.name === 'string' ? v.name.slice(0, 200) : v.voice_id, category: typeof v.category === 'string' ? v.category : '', previewUrl,
            labels: Object.fromEntries(Object.entries(v.labels || {}).filter(([k, val]) => ['gender','accent','language','age','use_case'].includes(k) && typeof val === 'string')) });
        }
        if (data.has_more !== true) {
          const complete = { voices: Array.from(result.values()).sort((a,b) => a.name.localeCompare(b.name)), syncedAt: new Date(now()).toISOString(), keyHash, expires: now() + 60000 };
          catalog = complete;
          return complete;
        }
        if (typeof data.next_page_token !== 'string' || !data.next_page_token || tokens.has(data.next_page_token)) throw new Error('Invalid pagination');
        token = data.next_page_token;
        tokens.add(token);
      }
      throw new Error('Catalog too large');
    })();
    pending = { keyHash, promise };
    try { return await promise; } finally { if (pending?.promise === promise) pending = null; }
  }
  return async function handle(request, ip = 'unknown') {
    const key = getKey()?.trim();
    if (!['GET','POST'].includes(request.method)) return fail(405, 'Bu işlem desteklenmiyor.', 'METHOD_NOT_ALLOWED');
    if (!key) return fail(503, 'ElevenLabs bağlantısı hazır değil. Vercel’de ELEVENLABS_API_KEY gizli ayarını ekleyip yeniden yayımlayın.', 'NOT_CONFIGURED');
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) return fail(403, 'İstek bu siteden gönderilmelidir.', 'ORIGIN_MISMATCH');
    // Bounded per-instance guard; deployment-level firewall limits may also apply.
    const stamp = now();
    const limit = request.method === 'POST' ? 12 : 30;
    const windowKey = `${request.method}:${ip}`;
    let slot = windows.get(windowKey);
    if (!slot || stamp - slot.start > 60000) { slot = { start: stamp, count: 0 }; windows.set(windowKey, slot); }
    if (slot.count++ >= limit) return fail(429, 'Çok sık istek gönderildi. Bir dakika sonra tekrar deneyin.', 'RATE_LIMITED');
    if (windows.size > 1000) { for (const [k,v] of windows) if (stamp-v.start > 60000) windows.delete(k); if (windows.size > 2000) return fail(429, 'Servis meşgul. Biraz sonra tekrar deneyin.', 'RATE_LIMITED'); }
    try {
      if (request.method === 'GET') {
        const list = await voices(key, new URL(request.url).searchParams.get('refresh') === '1');
        return json(200, { ok: true, voices: list.voices, syncedAt: list.syncedAt });
      }
      if (Number(request.headers.get('content-length')) > 12000) return fail(413, 'İstek çok büyük.', 'BODY_TOO_LARGE');
      const raw = await request.text();
      if (raw.length > 12000) return fail(413, 'İstek çok büyük.', 'BODY_TOO_LARGE');
      let body; try { body = JSON.parse(raw); } catch { return fail(400, 'İstek biçimi geçersiz.', 'INVALID_JSON'); }
      const text = typeof body?.text === 'string' ? body.text.trim() : '';
      if (!text || text.length > 2500) return fail(400, 'Metin 1–2500 karakter arasında olmalıdır.', 'INVALID_TEXT');
      const list = await voices(key);
      const chosen = list.voices.find(v => v.id === body.voiceId);
      if (!chosen) return fail(400, 'Bu ses My Voices listenizde bulunmuyor. Listeyi yenileyip tekrar seçin.', 'VOICE_NOT_SAVED');
      const cacheKey = createHash('sha256').update(key).update(chosen.id).update(text).digest('hex');
      let audio = audioCache.get(cacheKey);
      if (!audio) {
        const response = await fetchImpl(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(chosen.id)}?output_format=mp3_44100_128`, {
          method: 'POST', headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
          body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2' }), signal: AbortSignal.timeout(25000)
        });
        if (!response.ok) return providerError(response.status);
        if (!/^audio\//i.test(response.headers.get('content-type') || '')) return fail(502, 'Sağlayıcı geçerli bir ses dosyası döndürmedi.', 'INVALID_AUDIO');
        audio = new Uint8Array(await response.arrayBuffer());
        if (audio.byteLength < 128 || audio.byteLength > 8*1024*1024 || !((audio[0] === 0x49 && audio[1] === 0x44 && audio[2] === 0x33) || (audio[0] === 0xff && (audio[1] & 0xe0) === 0xe0))) return fail(502, 'Ses dosyası boş veya çok büyük.', 'INVALID_AUDIO');
        while (audioCache.size && audioBytes + audio.byteLength > 20*1024*1024) { const first = audioCache.keys().next().value; audioBytes -= audioCache.get(first).byteLength; audioCache.delete(first); }
        audioCache.set(cacheKey, audio); audioBytes += audio.byteLength;
      }
      return new Response(audio, { headers: { 'Content-Type': 'audio/mpeg', 'Cache-Control': 'private, no-store', 'X-TTS-Provider': 'elevenlabs', 'X-TTS-Provider-Voice': chosen.id, 'X-Content-Type-Options': 'nosniff' } });
    } catch (error) {
      if (error?.providerStatus) return providerError(error.providerStatus);
      return fail(502, 'Ses servisine ulaşılamadı. Bağlantınızı kontrol edip tekrar deneyin.', 'CONNECTION_FAILED');
    }
  };
}
module.exports = { createElevenLabsService };
