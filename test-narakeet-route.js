const assert = require('node:assert/strict');
const handler = require('./api/narakeet-tts');

function mockResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    end(body) { this.body = body; }
  };
}

async function call(req) {
  const res = mockResponse();
  await handler(req, res);
  return res;
}

(async () => {
  const saved = {
    enabled: process.env.NARAKEET_TTS_ENABLED,
    key: process.env.NARAKEET_API_KEY,
    voice: process.env.NARAKEET_TTS_VOICE,
    fetch: global.fetch
  };
  let providerCalls = 0;
  try {
    delete process.env.NARAKEET_TTS_ENABLED;
    delete process.env.NARAKEET_API_KEY;
    const health = await call({ method: 'GET', headers: {} });
    assert.equal(health.statusCode, 200);
    assert.deepEqual(JSON.parse(health.body), { enabled: false });

    const disabled = await call({ method: 'POST', headers: {}, body: { text: 'Hello' } });
    assert.equal(disabled.statusCode, 503);
    assert.equal(providerCalls, 0, 'disabled provider never calls Narakeet');

    process.env.NARAKEET_TTS_ENABLED = 'true';
    process.env.NARAKEET_API_KEY = 'test-only-key';
    process.env.NARAKEET_TTS_VOICE = 'test-voice';
    global.fetch = async (url, options) => {
      providerCalls += 1;
      assert.match(String(url), /voice=test-voice/);
      assert.match(String(url), /voice-speed=1\.25/);
      assert.equal(options.headers['x-api-key'], 'test-only-key');
      assert.equal(options.body, 'Hello, Polly!');
      return {
        ok: true,
        headers: { get: (key) => key.toLowerCase() === 'content-type' ? 'application/octet-stream' : null },
        arrayBuffer: async () => Uint8Array.from([73, 68, 51]).buffer
      };
    };
    const originRejected = await call({
      method: 'POST', headers: { origin: 'https://attacker.example', host: 'polly.example' },
      body: { text: 'Hello, Polly!' }
    });
    assert.equal(originRejected.statusCode, 403);
    assert.equal(providerCalls, 0, 'cross-origin request never reaches Narakeet');

    const tooLong = await call({
      method: 'POST', headers: { origin: 'https://polly.example', host: 'polly.example' },
      body: { text: 'a'.repeat(1201) }
    });
    assert.equal(tooLong.statusCode, 400);
    assert.equal(providerCalls, 0, 'oversized text never reaches Narakeet');

    const audio = await call({
      method: 'POST', headers: { origin: 'https://polly.example', host: 'polly.example' },
      body: { text: 'Hello, Polly!', rate: 2 }
    });
    assert.equal(audio.statusCode, 200);
    assert.equal(audio.headers['content-type'], 'audio/mpeg');
    assert.deepEqual([...audio.body], [73, 68, 51]);
    assert.equal(providerCalls, 1, 'valid request makes exactly one provider request');
    console.log('★★★ NARAKEET VERCEL ROUTE CHECKS PASSED (provider mocked; no paid call) ★★★');
  } finally {
    if (saved.enabled === undefined) delete process.env.NARAKEET_TTS_ENABLED; else process.env.NARAKEET_TTS_ENABLED = saved.enabled;
    if (saved.key === undefined) delete process.env.NARAKEET_API_KEY; else process.env.NARAKEET_API_KEY = saved.key;
    if (saved.voice === undefined) delete process.env.NARAKEET_TTS_VOICE; else process.env.NARAKEET_TTS_VOICE = saved.voice;
    global.fetch = saved.fetch;
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
