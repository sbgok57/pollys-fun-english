/* Duman testi: DOM taklidiyle tüm kodu yükler, verileri ve sayıları doğrular */
const fs = require('fs');
const mkEl = () => ({
  style: { setProperty() {} },
  classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  dataset: {},
  appendChild() {},
  remove() {},
  insertAdjacentHTML() {},
  scrollIntoView() {},
  setAttribute() {},
  querySelector: () => null,
  querySelectorAll: () => [],
  addEventListener() {},
  textContent: '',
  innerHTML: ''
});

global.document = {
  getElementById: () => mkEl(),
  querySelector: () => null,
  querySelectorAll: () => [],
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
global.innerWidth = 800;
global.innerHeight = 600;
global.confirm = () => true;
global.CSS = { escape: (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '\\$&') };
global.speechSynthesis = undefined;

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
;(function(){
  console.log('════ SMOKE TEST ════');
  console.log('Ünite seti sayısı     :', ALLSETS.length);
  console.log('Oyun motoru sayısı    :', ENGINES.length);
  console.log('TOPLAM OYUN           :', APP.countGames());
  console.log('Klasik şarkı          :', SONGS.length);
  console.log('Otomatik chant        :', ALLCHANTS.length);
  console.log('TOPLAM ŞARKI & CHANT  :', TOTALSONGS);
  console.log('TOPLAM KELİME         :', totalWords);
  let hata = 0;
  ALLSETS.forEach(u => {
    if(!u.cats || !u.cats.length){ console.log('✘ KATEGORİ YOK:', u.id); hata++; }
    if(!u.w || !u.w.length){ console.log('✘ KELİME YOK:', u.id); hata++; }
    u.w.forEach(t => {
      if(t.length !== 4){ console.log('✘ FORMAT:', u.id, JSON.stringify(t)); hata++; }
      else if(t[3] < 0 || t[3] >= u.cats.length){ console.log('✘ KATEGORİ TAŞMA:', u.id, t[0]); hata++; }
      if(!t[0] || !t[2]){ console.log('✘ BOŞ ALAN:', u.id, JSON.stringify(t)); hata++; }
    });
    const em = u.w.map(t => t[1]).filter(Boolean);
    const dup = em.filter((e, i) => em.indexOf(e) !== i);
    if(dup.length) console.log('⚠ EMOJİ TEKRAR (' + u.id + '):', [...new Set(dup)].join(' '));
    if(!u.s || u.s.length < 5){ console.log('✘ CÜMLE AZ:', u.id, u.s && u.s.length); hata++; }
    u.s.forEach(s => { if(!s[0] || !s[1] || !s[2]){ console.log('✘ CÜMLE HATA:', u.id, JSON.stringify(s)); hata++; } });
  });
  const ids = new Set();
  ENGINES.forEach(e => {
    if(!e.id || !e.e || !e.t || !e.d || !e.levels.length || !e.init || !e.stages.length){ console.log('✘ MOTOR EKSİK:', e.id); hata++; }
    if(ids.has(e.id)){ console.log('✘ MOTOR TEKRAR:', e.id); hata++; }
    ids.add(e.id);
  });
  STAGES.forEach(s => { const n = unitsOfStage(s.id).length; console.log(s.name + ':', n, 'set'); });
  ALLSETS.forEach(u => {
    const stn = u.stage === 's1' ? 1 : 2;
    ENGINES.filter(e => e.stages.includes(stn)).forEach(e => {
      if(!e.levels.every(l => l.n && l.c)){ console.log('✘ SEVİYE HATA:', e.id); hata++; }
    });
  });
  console.log(hata ? ('!!! ' + hata + ' HATA BULUNDU') : '✔ VERİ TAMAMEN TEMİZ');
  if(hata > 0) process.exit(1);
})();
`;

try {
  eval(code);
} catch (e) {
  console.error('ÇALIŞTIRMA HATASI:', e.message);
  process.exit(1);
}
process.exit(0);
