// test-voice-engine.js — behavioural tests for VoiceEngine in src/media.js (real code, mocked browser APIs)
'use strict';
const fs = require('fs');
const vm = require('vm');

let fails = 0;
const ok = (c, m) => { if (c) console.log('  ✔ ' + m); else { console.error('  ✘ ' + m); fails++; } };

function makeEnv({ manifest = [], fetchPlan = {} } = {}) {
  const log = { fetches: {}, started: [], stopped: 0, spoken: [], speechCancels: 0 };
  class FakeSource {
    constructor() { this.onended = null; }
    connect() {}
    disconnect() {}
    start() { log.started.push(this.buffer.url); }
    stop() { log.stopped++; }
  }
  class FakeCtx {
    constructor() { this.state = 'running'; this.destination = {}; }
    resume() { return Promise.resolve(); }
    createBufferSource() { return new FakeSource(); }
    decodeAudioData(data, ok) { const b = { url: data.url }; if (ok) ok(b); return Promise.resolve(b); }
  }
  const fetch = (url) => {
    log.fetches[url] = (log.fetches[url] || 0) + 1;
    const plan = fetchPlan[url] || 'ok';
    const n = log.fetches[url];
    const fail = plan === 'fail' || (typeof plan === 'number' && n <= plan);
    if (fail) return Promise.resolve({ ok: false, status: 503 });
    return Promise.resolve({ ok: true, arrayBuffer: () => Promise.resolve({ url }) });
  };
  const window = {
    AudioContext: FakeCtx,
    addEventListener() {}, removeEventListener() {},
    speechSynthesis: { cancel() { log.speechCancels++; } },
    localStorage: { getItem() { return null; }, setItem() {} }
  };
  const ctx = {
    window, fetch, console: { log() {}, warn() {}, error() {} },
    setTimeout: (fn, ms) => setTimeout(fn, Math.min(ms, 5)), // fast-forward backoff
    clearTimeout, AbortController, Promise, Map, Set, Math, Date, JSON, Object, Array, String,
    document: { getElementById() { return null; } }
  };
  window.window = window;
  vm.createContext(ctx);
  const src = fs.readFileSync(__dirname + '/src/media.js', 'utf8');
  vm.runInContext(
    'const CHARACTER_VOICE_MANIFEST = new Set(' + JSON.stringify(manifest) + ');\n' + src +
    '\n;this.__VE = VoiceEngine; this.__CSM = CharacterSoundManager; this.__MEDIA = MEDIA;', ctx);
  ctx.__MEDIA.speak = (text, rate, cb) => { log.spoken.push(text); if (typeof rate === 'function') rate(); else if (cb) cb(); };
  return { VE: ctx.__VE.getInstance(), CSM: ctx.__CSM, MEDIA: ctx.__MEDIA, log };
}

const tick = (ms = 60) => new Promise((r) => setTimeout(r, ms));

(async () => {
  console.log('════ 🎙️ VOICE ENGINE TESTS ════');

  // 1. Unverified clip → no network, speech fallback with correct text
  {
    const { VE, log } = makeEnv();
    VE.playVoice('audio/characters/polly/greeting.mp3', null, 'Hello from Polly', 'polly');
    await tick();
    ok(!log.fetches['audio/characters/polly/greeting.mp3'], 'unverified clip is never fetched');
    ok(log.spoken[0] === 'Hello from Polly', 'unverified clip falls back to speech with exact text');
  }

  // 2. Verified clip → fetched once, played from buffer, cached for zero-latency replay
  {
    const u = 'audio/characters/leo/greeting.mp3';
    const { VE, log } = makeEnv({ manifest: [u] });
    VE.playVoice(u, null, 'x', 'leo');
    await tick();
    VE.playVoice(u, null, 'x', 'leo');
    ok(log.fetches[u] === 1, 'verified clip fetched exactly once (RAM cache hit on replay)');
    ok(log.started.length === 2 && log.spoken.length === 0, 'both plays used AudioBuffer, no speech');
  }

  // 3. Exponential backoff recovers transient failures
  {
    const u = 'audio/characters/mia/praise.mp3';
    const { VE, log } = makeEnv({ manifest: [u], fetchPlan: { [u]: 2 } });
    const res = await VE.preloadVoice(u);
    ok(res === true && log.fetches[u] === 3, 'recovers after 2 transient failures (3 attempts)');
  }

  // 4. Circuit breaker: permanent failure → max 4 attempts, then instant fallback, no more fetches
  {
    const u = 'audio/characters/sam/cheer.mp3';
    const { VE, log } = makeEnv({ manifest: [u], fetchPlan: { [u]: 'fail' } });
    const res = await VE.preloadVoice(u);
    ok(res === false && log.fetches[u] === 4, 'gives up after 1 + 3 retries (bounded)');
    VE.playVoice(u, null, 'Sam fallback', 'sam');
    await tick();
    ok(log.fetches[u] === 4, 'open circuit blocks further network attempts');
    ok(log.spoken.includes('Sam fallback'), 'open circuit → speech fallback');
    ok(VE.stats().openCircuits === 1, 'circuit recorded as open');
  }

  // 5. Single active voice: new play stops current buffer AND speech
  {
    const a = 'audio/characters/polly/praise.mp3', b = 'audio/characters/elsa/praise.mp3';
    const { VE, log } = makeEnv({ manifest: [a, b] });
    await VE.preloadVoice(a); await VE.preloadVoice(b);
    VE.playVoice(a); const cancelsBefore = log.speechCancels;
    VE.playVoice(b);
    ok(log.stopped === 1, 'previous buffer source stopped before next voice');
    ok(log.speechCancels > cancelsBefore, 'pending speech cancelled before next voice (no overlap)');
  }

  // 6. Stale async play is dropped if user triggered another voice meanwhile
  {
    const slow = 'audio/characters/buzz/greeting.mp3';
    const { VE, log } = makeEnv({ manifest: [slow] });
    VE.playVoice(slow, null, 'buzz', 'buzz');   // starts async preload
    VE.stopCurrent();                            // user stops / switches before it loads
    await tick();
    ok(log.started.length === 0 && log.spoken.length === 0, 'stale play never starts after stop');
  }

  // 7. LRU cap keeps RAM bounded
  {
    const urls = Array.from({ length: 45 }, (_, i) => `audio/characters/c${i}/greeting.mp3`);
    const { VE } = makeEnv({ manifest: urls });
    for (const u of urls) await VE.preloadVoice(u);
    ok(VE.stats().cached === 40, 'cache bounded at 40 buffers (LRU)');
  }

  // 8. Muted → nothing plays, callback still fires
  {
    const { CSM, MEDIA, log } = makeEnv();
    MEDIA.muted = true; let called = false;
    CSM.play('audio/characters/polly/greeting.mp3', () => { called = true; }, 'hi', 'polly');
    ok(called && log.spoken.length === 0, 'muted: silent but onEnd callback fires');
  }

  console.log(fails ? `\n✘ ${fails} VOICE ENGINE TEST(S) FAILED` : '\n★★★ VOICE ENGINE: ALL TESTS PASSED ★★★');
  process.exit(fails ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
