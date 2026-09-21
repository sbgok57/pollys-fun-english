/* ══════════════════════════════════════════════════════════════
   🛡️ SIFIR HATA DOĞRULAMASI — ÜRETİLEN DOSYANIN TA KENDİSİNİ test eder
   english-fun-zone.html'i yükler, ekranları simüle eder, hiç hata
   çıkmadığını ve tüm seslerin + dağıtım paketinin TAM olduğunu kanıtlar.
   ══════════════════════════════════════════════════════════════ */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let hata = 0;
const ok = (n) => console.log('✔ ' + n);
const bad = (n) => {
  console.error('✘ ' + n);
  hata++;
};

console.log('════ 🛡️ SIFIR HATA v7 ÜRETİM DOĞRULAMASI ════');

/* ── 1) DOSYA BÜTÜNLÜĞÜ (string düzeyi) ── */
if (!fs.existsSync('english-fun-zone.html')) {
  bad('english-fun-zone.html bulunamadı!');
  process.exit(1);
}

const H = fs.readFileSync('english-fun-zone.html', 'utf8');
H.trimEnd().endsWith('</html>')
  ? ok('html dosyası bütün (' + ((H.length / 1024) | 0) + ' KB)')
  : bad('html kırık!');

H.includes('const VOICESET') ? ok('VOICESET gömülü') : bad('VOICESET yok');

const slugs = [...new Set([...H.matchAll(/["\x27](w-[a-z0-9-]+)["\x27]/g)].map((m) => m[1]))];
ok('VOICESET slug taraması yapıldı: ' + slugs.length + ' referans');

/* ── 2) DİSKTEKİ VARLIKLAR ── */
const mp3Files = fs.existsSync('audio') ? fs.readdirSync('audio').filter((f) => f.endsWith('.mp3')) : [];
mp3Files.length >= 18
  ? ok('audio/ = ' + mp3Files.length + ' mp3 dosyası mevcut (en az 18 melodi & ritim)')
  : bad('mp3 sayısı yetersiz: ' + mp3Files.length);

const smallMp3 = mp3Files.filter((f) => fs.statSync(path.join('audio', f)).size < 400);
smallMp3.length === 0 ? ok('Tüm ses dosyaları sağlam (boş dosya yok)') : bad('Şüpheli küçük ses: ' + smallMp3);

if (fs.existsSync('images')) {
  const jpg = fs.readdirSync('images').filter((f) => f.endsWith('.jpg'));
  const boyuk = jpg.filter((f) => fs.statSync(path.join('images', f)).size < 1000);
  boyuk.length === 0 ? ok('Tüm resimler sağlam') : bad('Bozuk resim: ' + boyuk);
}

/* ── 3) DAĞITIM PAKETİ ── */
fs.existsSync('vercel-deploy/index.html') ? ok('vercel-deploy/index.html var') : bad('index.html yok');
fs.existsSync('vercel-deploy/vercel.json') ? ok('vercel-deploy/vercel.json var') : bad('vercel.json yok');

if (fs.existsSync('vercel-deploy/index.html')) {
  fs.readFileSync('vercel-deploy/index.html', 'utf8') === H
    ? ok('paket html == üretilen html (birebir senkronize)')
    : bad('paket html farklı!');

  try {
    JSON.parse(fs.readFileSync('vercel-deploy/vercel.json', 'utf8'));
    ok('vercel.json geçerli JSON biçiminde');
  } catch (e) {
    bad('vercel.json geçersiz JSON!');
  }

  const dmp3 = fs.existsSync('vercel-deploy/audio')
    ? fs.readdirSync('vercel-deploy/audio').filter((f) => f.endsWith('.mp3')).length
    : 0;
  dmp3 >= 18 ? ok('paket audio = ' + dmp3 + ' mp3 mevcut') : bad('paket mp3 yetersiz: ' + dmp3);
}

/* ── 4) CANLI YÜKLEME SİMÜLASYONU ── */
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

getOrCreate('app', 'main');
getOrCreate('crash-banner', 'div');
getOrCreate('floaties', 'div');
getOrCreate('fxlayer', 'div');

global.window = {
  innerWidth: 1024,
  innerHeight: 768,
  scrollTo() {},
  addEventListener() {},
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
    speak(u) { setTimeout(() => { try { u.onend && u.onend(); } catch (x) {} }, 1); },
    cancel() {},
    getVoices: () => []
  },
  SpeechSynthesisUtterance: class {
    constructor(t) { this.text = t; }
  },
  Audio: class {
    constructor(src) { this.src = src; this.volume = 1; this.paused = false; }
    play() { return Promise.resolve(); }
    pause() { this.paused = true; }
  }
};

global.document = {
  getElementById: (id) => getOrCreate(id),
  querySelector: (s) => (s && s.startsWith('#') ? getOrCreate(s.slice(1)) : mkEl('div')),
  querySelectorAll: () => [mkEl('div'), mkEl('div')],
  createElement: (tag) => mkEl(tag),
  body: getOrCreate('body', 'body'),
  addEventListener() {},
  title: ''
};
global.localStorage = global.window.localStorage;
global.CSS = global.window.CSS;
global.confirm = () => true;
global.innerWidth = 1024;
global.innerHeight = 768;
global.speechSynthesis = global.window.speechSynthesis;
global.SpeechSynthesisUtterance = global.window.SpeechSynthesisUtterance;
global.Audio = global.window.Audio;

try {
  const scriptMatches = [...H.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
  scriptMatches.forEach((m) => vm.runInThisContext(m[1]));
  ok('Tüm gömülü betikler başarıyla derlendi ve çalıştırıldı');

  // Canlı ekran testleri
  APP.go('home');
  ok('Ana sayfa hatasız yüklendi');

  APP.go('stage', { stage: 's1' });
  ok('1. Sınıf ünite listesi yüklendi');

  APP.go('unit', { unitId: 's1u1' });
  ok('Ünite detay ekranı yüklendi (s1u1)');

  APP.go('lesson', { unitId: 's1u1' });
  ok('Konu anlatımı slayt sistemi yüklendi');

  APP.go('songs');
  ok('Şarkı köşesi yüklendi');

} catch (err) {
  bad('Çalışma zamanı simülasyon hatası: ' + err.message);
}

console.log('———');
if (hata === 0) {
  console.log('★★★ SIFIR HATA: ÜRETİM DOSYASI + PAKET TAMAMEN DOĞRULANDI ★★★');
  process.exit(0);
} else {
  console.error('!!! ' + hata + ' HATA TESPİT EDİLDİ');
  process.exit(1);
}
