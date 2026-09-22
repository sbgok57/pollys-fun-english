/* ============================================================
   🛡️ DAYANIKLILIK & ANTI-CRASH TESTLERİ (P0 & P1 Doğrulama)
   ============================================================ */
const fs = require('fs');

const elementRegistry = new Map();

const mkEl = (tag = 'div', id = '') => {
  const el = {
    tagName: tag.toUpperCase(),
    id: id,
    style: { setProperty() {}, display: '' },
    classList: {
      _classes: new Set(),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      toggle(c) { if (this._classes.has(c)) this._classes.delete(c); else this._classes.add(c); },
      contains(c) { return this._classes.has(c); }
    },
    dataset: {},
    appendChild(c) { return c; },
    remove() {},
    insertAdjacentHTML() {},
    scrollIntoView() {},
    setAttribute() {},
    getAttribute() { return null; },
    querySelector(s) {
      if (s && s.startsWith('#')) return getOrCreate(s.slice(1));
      return mkEl('div');
    },
    querySelectorAll() { return [mkEl('div'), mkEl('div')]; },
    addEventListener(ev, fn) { this['on' + ev] = fn; },
    dispatchEvent(ev) { if (this.onclick) this.onclick(ev); },
    textContent: '',
    innerHTML: ''
  };
  return el;
};

const getOrCreate = (id, tag = 'div') => {
  if (!elementRegistry.has(id)) {
    const el = mkEl(tag, id);
    elementRegistry.set(id, el);
  }
  return elementRegistry.get(id);
};

// Temel DOM elemanlarını önceden oluştur
getOrCreate('crash-banner', 'div');
getOrCreate('crash-msg', 'div');
getOrCreate('crash-diag', 'pre');
getOrCreate('crash-resume', 'button');
getOrCreate('crash-home', 'button');
getOrCreate('crash-toggle-diag', 'button');
getOrCreate('app', 'main');
getOrCreate('fxlayer', 'div');
getOrCreate('floaties', 'div');
getOrCreate('garea', 'div');
getOrCreate('gsc', 'span');
getOrCreate('ginfo', 'div');
getOrCreate('gtbi', 'i');
getOrCreate('gpc', 'span');

const dom = {
  window: {
    innerWidth: 1024,
    innerHeight: 768,
    scrollTo() {},
    addEventListener(ev, fn) { dom.window['on' + ev] = fn; },
    removeEventListener() {},
    confirm: () => true,
    localStorage: {
      _d: {},
      getItem(k) { return this._d[k] || null; },
      setItem(k, v) { this._d[k] = String(v); },
      removeItem(k) { delete this._d[k]; }
    },
    CSS: { escape: (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '\\$&') },
    speechSynthesis: {
      speak() {},
      cancel() {},
      getVoices: () => []
    },
    SpeechSynthesisUtterance: class {
      constructor(t) { this.text = t; }
    },
    Audio: class {
      constructor(src) {
        this.src = src;
        this.volume = 1;
        this.paused = false;
      }
      play() { return Promise.resolve(); }
      pause() { this.paused = true; }
    },
    AudioContext: class {
      constructor() { this.state = 'suspended'; }
      resume() { this.state = 'running'; return Promise.resolve(); }
      createOscillator() { return { type: '', frequency: { setValueAtTime() {} }, connect() {}, start() {}, stop() {} }; }
      createGain() { return { gain: { setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} }, connect() {} }; }
    }
  }
};

global.window = dom.window;
global.document = {
  getElementById: (id) => getOrCreate(id),
  querySelector: (s) => {
    if (s && s.startsWith('#')) return getOrCreate(s.slice(1));
    return mkEl('div');
  },
  querySelectorAll: () => [mkEl('div'), mkEl('div')],
  createElement: (tag) => mkEl(tag),
  body: getOrCreate('body', 'body'),
  addEventListener() {},
  title: ''
};
global.localStorage = dom.window.localStorage;
global.CSS = dom.window.CSS;
global.confirm = () => true;
global.innerWidth = 1024;
global.innerHeight = 768;
global.speechSynthesis = dom.window.speechSynthesis;
global.SpeechSynthesisUtterance = dom.window.SpeechSynthesisUtterance;
global.Audio = dom.window.Audio;
global.AudioContext = dom.window.AudioContext;

// Kaynak kodları yükle
const code = [
  'data.js',
  'songs.js',
  'songs-extra.js',
  'songs-mel.js',
  'lessons.js',
  'voice-map.js',
  'media.js',
  'engines-a.js',
  'engines-b.js',
  'engines-c.js',
  'app.js'
]
  .map((f) => fs.readFileSync('src/' + f, 'utf8'))
  .join('\n');

const vm = require('vm');
vm.runInThisContext(code);

let failed = 0;
const assert = (cond, msg) => {
  if (cond) {
    console.log('  ✔ ' + msg);
  } else {
    console.error('  ✘ HATA: ' + msg);
    failed++;
  }
};

console.log('════ 🛡️ RESILIENCE & ANTI-CRASH TESTLERİ ════');

// 1. Ring-buffer test
console.log('\n[1] Ring-buffer İşlem Geçmişi (Max 20 Kayıt):');
for (let i = 1; i <= 35; i++) {
  store.pushHistory({ action: 'test-event-' + i });
}
const hist = store.getHistory();
assert(hist.length === 20, 'İşlem geçmişi 20 ile sınırlandırıldı (şu an: ' + hist.length + ')');
assert(hist[hist.length - 1].action === 'test-event-35', 'En son olay başarıyla en sonda tutuluyor');
assert(hist[0].action === 'test-event-16', 'İlk 15 eski olay bellekten temizlendi');

// 2. Checkpoint & Restore test
console.log('\n[2] Checkpoint Kaydı & Kaldığı Yerden Devam (Restore):');
const checkpointSample = {
  scr: 'game',
  stage: 's1',
  unitId: 's1u1',
  engineId: 'flash',
  lvIdx: 0,
  score: 45,
  timestamp: Date.now()
};
store.saveCheckpoint(checkpointSample);
const retrievedCp = store.getCheckpoint();
assert(retrievedCp.engineId === 'flash' && retrievedCp.score === 45, 'Checkpoint eksiksiz okundu');

const restored = APP.restoreLastState();
assert(restored === true, 'restoreLastState başarıyla tetiklendi');
assert(APP.scr === 'game' && APP.engineId === 'flash' && APP.unitId === 's1u1', 'Oyun durumu tam olarak geri yüklendi');

// 3. Audio & Media Cleanup
console.log('\n[3] Ses & Bellek Temizleme (MEDIA.disposeAll):');
try {
  MEDIA.playFile('beat0', 0.8);
  MEDIA.disposeAll();
  assert(true, 'MEDIA.disposeAll() sessizce ve hatasız tüm kaynakları serbest bıraktı');
} catch (err) {
  assert(false, 'MEDIA.disposeAll() hata fırlattı: ' + err.message);
}

// 4. Global Crash Shield
console.log('\n[4] Global Crash Shield (handleGlobalCrash):');
const crashBanner = getOrCreate('crash-banner');
crashBanner.classList.remove('show');

try {
  handleGlobalCrash(new Error('Simulated runtime error'), 'test-error');
  assert(crashBanner.classList.contains('show'), 'Çökme durumunda kurtarma bannerı .show sınıfı aldı');
  const lastHist = store.getHistory().pop();
  assert(lastHist.type === 'crash' && lastHist.error.includes('Simulated runtime error'), 'Çökme hatası hafıza geçmişine işlendi');
} catch (err) {
  assert(false, 'handleGlobalCrash beklenmedik hata fırlattı: ' + err.message);
}

// 5. Engine Crash Isolation
console.log('\n[5] Motor İzolasyon Kalkanı (Tekil oyun çökmesi ana uygulamayı durduramaz):');
const badEngine = {
  id: 'broken-engine',
  stages: [1],
  levels: [{ n: 'Bozuk', c: {} }],
  init() {
    throw new Error('Explosion inside game engine!');
  }
};
const prevEngines = [...ENGINES];
ENGINES.push(badEngine);

try {
  APP.go('game', { stage: 's1', unitId: 's1u1', engineId: 'broken-engine', lvIdx: 0, restoredScore: 30 });
  const areaHtml = getOrCreate('garea').innerHTML;
  assert(areaHtml.includes('Polly bir aksilik yakaladı ve çözdü'), 'Bozulan motorda güvenli kurtarma kartı gösterildi');
  assert(areaHtml.includes('30 ⭐'), 'Önceden kazanılmış puanlar korundu');
} catch (err) {
  assert(false, 'Motor hatası izolasyon kalkanını deldi: ' + err.message);
} finally {
  ENGINES.length = 0;
  ENGINES.push(...prevEngines);
}

// 6. Responsive & Performance CSS kontrolü
console.log('\n[6] CSS Performans & Dokunmatik Kontrolü:');
const cssContent = fs.readFileSync('src/styles.css', 'utf8');
assert(cssContent.includes('touch-action: manipulation'), 'Tüm butonlarda 300ms dokunma gecikmesi engellendi (touch-action: manipulation)');
assert(cssContent.includes('100dvh'), 'Mobil dinamik tarayıcı çubuğu için 100dvh desteği eklendi');
assert(cssContent.includes('safe-area-inset'), 'iOS çentik ve home bar için safe-area-inset eklendi');
assert(cssContent.includes('#crash-banner'), 'Crash banner CSS stilleri mevcut');

console.log('\n════ SONUÇ: ' + (failed === 0 ? 'TÜM DAYANIKLILIK TESTLERİ GEÇTİ (0 HATA) ★★★' : failed + ' HATA OLUŞTU') + ' ════');
process.exit(failed === 0 ? 0 : 1);
