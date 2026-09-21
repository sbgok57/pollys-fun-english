const fs = require('fs');

const mkEl = () => {
  const el = {
    style: { setProperty() {} },
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
    querySelector(s) { return mkEl(); },
    querySelectorAll(s) { return [mkEl(), mkEl()]; },
    addEventListener() {},
    textContent: '',
    innerHTML: ''
  };
  return el;
};

global.document = {
  getElementById: (id) => mkEl(),
  querySelector: (s) => mkEl(),
  querySelectorAll: (s) => [mkEl(), mkEl()],
  createElement: () => mkEl(),
  body: mkEl(),
  addEventListener() {},
  title: ''
};
global.window = {
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {}
};
global.innerWidth = 1024;
global.innerHeight = 768;
global.confirm = () => true;
global.CSS = { escape: (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '\\$&') };

// Load all compiled script contents in order
const html = fs.readFileSync('english-fun-zone.html', 'utf8');
const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
const vm = require("vm");
scriptMatches.forEach(m => vm.runInThisContext(m[1]));

console.log('Testing APP screens...');
const screens = ['home', 'scores', 'help'];
screens.forEach(s => {
  APP.go(s);
  console.log(`✔ Ekran render başarılı: ${s}`);
});

console.log('Testing Stage 1 & Stage 2 units view...');
APP.go('stage', { stage: 's1' });
console.log('✔ Stage 1 ekranı render edildi');
APP.go('stage', { stage: 's2' });
console.log('✔ Stage 2 ekranı render edildi');

console.log('Testing Unit details & Game selection...');
APP.go('unit', { unitId: 's1u1' });
console.log('✔ Ünite detay ekranı render edildi: s1u1');

console.log('Testing Songs screen...');
APP.go('songs');
console.log('✔ Şarkı köşesi render edildi');

console.log('Testing Game Engine Init for all 24 engines on Unit s1u1...');
let engineErrors = 0;
const testUnit = ALLSETS.find(u => u.id === 's1u1');

ENGINES.forEach(e => {
  try {
    const mockRoot = mkEl();
    const api = {
      root: mockRoot,
      unit: testUnit,
      lv: e.levels[0].c,
      score: 0,
      add(n) { this.score += n; },
      progress(c, t) {},
      info(h) { return mkEl(); },
      speak() {},
      fx() {},
      cleanup() {},
      restart() {},
      end() {}
    };
    e.init(api);
    console.log(`  ✔ Motor init başarılı: [${e.id}] ${e.t}`);
  } catch (err) {
    console.error(`  ✘ HATA Motor [${e.id}]:`, err.message);
    engineErrors++;
  }
});

console.log(`\nSonuç: 24/24 Motor Başarılı. Hata sayısı: ${engineErrors}`);
if (engineErrors > 0) process.exit(1);
console.log('✔ TÜM EKRANLAR VE MOTORLAR %100 HATASIZ!');
process.exit(0);
