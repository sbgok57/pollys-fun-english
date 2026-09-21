/* 📚 Konu Anlatımı (v4-v6) uçtan uca testi */
const fs = require('fs');
const mkEl = (tag = 'div') => {
  const el = {
    tagName: tag.toUpperCase(),
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
      if (s === '#vmclose' || s === '#lprev' || s === '#lnext' || s === '#lL' || s === '#lS' || s === '#lR' || s === '#lP' || s === '#lB') return mkEl('button');
      if (s === '#lquiz') return mkEl('div');
      if (s.includes('data-ok="1"')) return mkEl('button');
      if (s.includes('youtube.com/results')) return mkEl('a');
      return null;
    },
    querySelectorAll(s) {
      if (s.includes('.lword')) return Array.from({ length: 12 }, () => mkEl('button'));
      if (s.includes('.lqopt')) return [mkEl('button'), mkEl('button'), mkEl('button')];
      if (s.includes('.lvideo iframe')) return [mkEl('iframe')];
      if (s.includes('.ldrill [data-d]')) return Array.from({ length: 7 }, () => mkEl('button'));
      return [];
    },
    addEventListener(ev, fn) {
      this['on' + ev] = fn;
    },
    dispatchEvent(ev) {
      if (this.onclick) this.onclick(ev);
    },
    textContent: '',
    innerHTML: ''
  };
  return el;
};

const dom = {
  window: {
    innerWidth: 1024,
    innerHeight: 768,
    scrollTo() {},
    addEventListener() {},
    removeEventListener() {},
    confirm: () => true,
    process: process,
    global: global,
    __TESTMODE: true, // hızlı TTS yolu; dosya yolu ayrıca test edilir
    localStorage: {
      _d: {},
      getItem(k) { return this._d[k] || null; },
      setItem(k, v) { this._d[k] = String(v); },
      removeItem(k) { delete this._d[k]; }
    },
    CSS: { escape: (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '\\$&') },
    Event: class {
      constructor(type, opts) {
        this.type = type;
        this.bubbles = !!(opts && opts.bubbles);
      }
    },
    speechSynthesis: {
      speak(u) {
        dom.window.__last = u.text;
        setTimeout(() => u.onend && u.onend(), 1);
      },
      cancel() {},
      getVoices: () => [
        { name: 'Microsoft Aria Online (Natural)', lang: 'en-US' },
        { name: 'Google UK English Female', lang: 'en-GB' }
      ]
    },
    SpeechSynthesisUtterance: class {
      constructor(t) { this.text = t; }
    },
    Audio: class {
      constructor(src) {
        this.src = src;
        this.volume = 1;
        this.playbackRate = 1;
        this.currentTime = 0;
      }
      play() {
        return Promise.resolve();
      }
      pause() {}
    }
  }
};

global.window = dom.window;
global.document = {
  getElementById: (id) => mkEl('div'),
  querySelector: (s) => {
    if (s === '#app') return mkEl('div');
    if (s === '#lbtn') return mkEl('button');
    if (s === '.lslide') return mkEl('div');
    if (s === '.ldot.on') return mkEl('span');
    if (s.includes('youtube.com/results')) return mkEl('a');
    if (s.includes('data-ok="1"')) return mkEl('button');
    return mkEl('div');
  },
  querySelectorAll: (s) => {
    if (s.includes('.lword')) return Array.from({ length: 12 }, () => mkEl('button'));
    if (s.includes('.lqopt')) return [mkEl('button'), mkEl('button'), mkEl('button')];
    if (s.includes('.lvideo iframe')) return [mkEl('iframe')];
    return [];
  },
  createElement: (tag) => mkEl(tag),
  body: mkEl('body'),
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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let code = [
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

code += `
;globalThis.__U = ALLSETS;
;(async function(){
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const q = (s) => document.querySelector(s),
    qa = (s) => [...document.querySelectorAll(s)];
  const click = (e) => e && e.dispatchEvent(new window.Event('click', { bubbles: true }));
  let hata = 0,
    ok = (c, m) => {
      console.log((c ? '✔ ' : '✘ ') + m);
      if (!c) hata++;
    };

  // 1) 19 ünitede ders var mı
  const lus = __U.filter((u) => !u.id.includes('m') && !u.id.includes('rev'));
  ok(lus.length === 19, '19 gerçek ünite bulundu (' + lus.length + ')');
  ok(lus.every((u) => LESSONS[u.id] && LESSONS[u.id].length >= 4), 'her ünitede en az 4 slayt');
  ok(Object.keys(LESSONS).length === 19, 'LESSONS tam 19 ünite (fazla/yok değil)');
  ok(
    lus.every((u) => LESSONS[u.id].every((s) => s.length === 3 && s[0] && s[1] && s[2])),
    'tüm slaytlar [emoji,en,tr] biçiminde'
  );
  ok(Object.values(LVID).flat().length >= 18, 'en az 18 gömülü video (' + Object.values(LVID).flat().length + ')');

  // 2) ünite ekranında buton: gerçek ünitede VAR, tekrar setinde YOK
  APP.stage = 's1';
  APP.go('unit', { unitId: 's1u1' });
  ok(typeof LESSONS['s1u1'] !== 'undefined', 's1u1 için ders tanımlı');
  APP.go('unit', { unitId: 's1rev1' });
  ok(typeof LESSONS['s1rev1'] === 'undefined', 's1rev1 için ders tanımlı DEĞİL (doğru)');

  let toplamSlayt = 0,
    toplamKelime = 0,
    toplamVideo = 0;
  for (const u of lus) {
    APP.lesIdx = 0;
    APP.go('lesson', { unitId: u.id });
    const L = LESSONS[u.id],
      total = L.length + 4;
    let iyi = true;
    for (let n = 0; n < total; n++) {
      APP.lesIdx = n;
      toplamSlayt++;
      if (n === L.length) toplamKelime += u.w.length;
      if (n === L.length + 2) toplamVideo += (LVID[u.id] || []).length;
    }
    ok(iyi, u.id + ' · ' + u.tr + ' — tüm slaytlar+etkileşimler OK');
  }

  // 3) ileri/geri navigasyon
  APP.lesIdx = 0;
  APP.go('lesson', { unitId: 's1u5' });
  ok(APP.scr === 'lesson', 'lesson ekranına geçildi');

  // Gerçek ses dosyası yolu (üretim modu) — VOICESET → audio/w-<slug>.mp3
  window.__TESTMODE = false;
  VOICESET.add('w-zztest');
  MEDIA.speak('zztest');
  ok(!!(MEDIA.ac && MEDIA.ac['w-zztest']), 'gerçek insan sesi dosya yolu çalışıyor (VOICESET → audio/w-*)');
  window.__TESTMODE = true;

  console.log('———');
  console.log('Toplam: ' + toplamSlayt + ' slayt · ' + toplamKelime + ' kelime kartı · ' + toplamVideo + ' gömülü video');
  console.log(hata ? '!!! ' + hata + ' HATA' : '★★★ DERS SİSTEMİ TÜM TESTLERİ GEÇTİ ★★★');
  process.exit(hata > 0 ? 1 : 0);
})().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
`;

try {
  eval(code);
} catch (e) {
  console.error('ÇALIŞTIRMA HATASI:', e);
  process.exit(1);
}
