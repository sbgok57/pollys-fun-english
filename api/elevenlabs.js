const { createElevenLabsService } = require('../lib/elevenlabs-service.cjs');
const handle = createElevenLabsService();
module.exports = async (req, res) => {
  try {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const url = `https://${host}${req.url}`;
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) if (typeof value === 'string') headers.set(key, value);
    const request = new Request(url, { method: req.method, headers, ...(req.method === 'POST' ? { body: typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {}) } : {}) });
    const response = await handle(request, String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0]);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch {
    res.statusCode = 500; res.setHeader('Content-Type', 'application/json'); res.setHeader('Cache-Control','no-store');
    res.end(JSON.stringify({ok:false,error:'Ses servisi şu anda kullanılamıyor. Tekrar deneyin.'}));
  }
};
