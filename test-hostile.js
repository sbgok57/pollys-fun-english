/* ═══════════════════════════════════════════════════════════════
   🧪 DÜŞMAN ORTAM TESTİ — sınıfın en kötü gününü simüle eder:
   • localStorage ERİŞİMİ SecurityError FIRLATIR (korumalı önizleme)
   • speechSynthesis YOK (bazı tahta tarayıcıları)
   • Audio.play() REDDEDİLİR (otomatik oynatma ilkesi / ağ yok)
   • AudioContext YOK
   Beklenen: her tıklama YİNE de çalışır, ekran değişir, HİÇ çökme olmaz.
   ═══════════════════════════════════════════════════════════════ */
const fs = require('fs');
const { JSDOM, VirtualConsole } = require('jsdom');
let h = 0;
const ok = (s) => console.log('✔ ' + s),
  bad = (s) => {
    console.log('✘ ' + s);
    h++;
  };
const yakalanan = [];
const vc = new VirtualConsole();
vc.on('jsdomError', (e) => {
  const m = String(e.message || e);
  if (!/not implemented|could not load/i.test(m)) yakalanan.push('jsdomError: ' + m);
});
vc.on('error', (...a) => yakalanan.push('console.error: ' + a.join(' ')));

const dom = new JSDOM(fs.readFileSync('english-fun-zone.html', 'utf8'), {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'https://sinif.example.com/',
  virtualConsole: vc,
  beforeParse(w) {
    Object.defineProperty(w, 'localStorage', {
      get() {
        throw new Error('SecurityError: storage denied');
      }
    });
    delete w.speechSynthesis;
    delete w.SpeechSynthesisUtterance;
    w.HTMLMediaElement.prototype.play = function () {
      return Promise.reject(new Error('NotAllowedError'));
    };
    w.HTMLMediaElement.prototype.pause = function () {};
    w.HTMLMediaElement.prototype.load = function () {};
    w.AudioContext = undefined;
    w.webkitAudioContext = undefined;
    w.scrollTo = () => {};
  }
});

const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  await bekle(250);
  const w = dom.window,
    d = w.document,
    q = (s) => d.querySelector(s),
    qa = (s) => [...d.querySelectorAll(s)];
  const tık = (el) => el && el.dispatchEvent(new w.Event('click', { bubbles: true }));
  try {
    /* A) ana sayfa */
    qa('.stage-card').length === 3
      ? ok('A) ana sayfa render (localStorage reddedilse bile)')
      : bad('ana sayfa yok!');

    /* B) 1. Sınıf → ünite listesi */
    tık(q('.stage-card.s1'));
    await bekle(200);
    qa('.card[data-u]').length > 0
      ? ok('B) 1. Sınıf → ' + qa('.card[data-u]').length + ' ünite kartı AÇILDI')
      : bad('ünite listesi AÇILMADI!');

    /* C) ünite → kelimeler + oyunlar */
    tık(q('.card[data-u]'));
    await bekle(200);
    const kelime = qa('.word-pill').length,
      oyun = qa('.card[data-e]').length;
    kelime > 0 && oyun > 0
      ? ok('C) ünite → ' + kelime + ' kelime + ' + oyun + ' oyun KARTLARI AÇILDI')
      : bad('ünite ekranı AÇILMADI (kelime:' + kelime + ' oyun:' + oyun + ')');

    /* D) oyun kartı → TEK TIKLA doğrudan açılır (pencere YOK) */
    tık(q('.card[data-e]'));
    await bekle(250);
    const ga = d.getElementById('garea'),
      ov = q('.overlay');
    ga && ga.innerHTML.length > 0 && !ov
      ? ok('D) oyun TEK TIKLA doğrudan AÇILDI (pencere yok)')
      : bad('oyun açılmadı! garea:' + (ga ? ga.innerHTML.length : 0) + ' overlay:' + !!ov);

    /* D+) seviye düğmesi → anında zorluk değişimi */
    const lv = q('.lvl-pill[data-lv="1"]');
    if (lv) {
      tık(lv);
      await bekle(300);
      const ga2 = d.getElementById('garea');
      ga2 && ga2.innerHTML.length > 0 && w.eval('APP.lvIdx') === 1
        ? ok('D+) seviye düğmesi → anında zorluk değişimi (lvIdx=1)')
        : bad('seviye değişimi bozuk (lvIdx=' + w.eval('APP.lvIdx') + ')');
    } else bad('seviye düğmesi bulunamadı');

    /* E) ders ekranı */
    tık(q('#bk') || q('#hm'));
    await bekle(150);
    tık(q('.stage-card.s1'));
    await bekle(150);
    tık(q('.card[data-u]'));
    await bekle(150);
    tık(q('#lbtn'));
    await bekle(200);
    q('.lesson') ? ok('E) ders ekranı AÇILDI') : bad('ders ekranı açılmadı');

    /* F) kelimeye dokun → ses yoksa bile çökme yok */
    tık(q('.word-pill'));
    await bekle(150);
    const a = d.getElementById('app');
    a && a.innerHTML.length > 0
      ? ok('F) kelime dokunuşu: ses reddedilse bile ekran sapasağlam')
      : bad('kelime dokunuşu ekranı bozdu');

    /* G) şarkı köşesi + gerçek şarkı videosu (internetsiz ortamda bile arayüz sağlam) */
    tık(q('#hm'));
    await bekle(150);
    tık(q('.stage-card.songs'));
    await bekle(200);
    qa('.song-item').length > 0
      ? ok('G) şarkı köşesi açıldı (' + qa('.song-item').length + ' şarkı/chant)')
      : bad('şarkı köşesi boş');
    const ilk = qa('.song-item[data-song]')[0];
    if (ilk) {
      tık(ilk);
      await bekle(200);
      const fr = q('.player iframe');
      fr
        ? ok('G+) şarkı oynatıcı açıldı — gerçek şarkı videosu çerçevesi hazır')
        : bad('şarkı oynatıcı boş');
    }

    console.log('———');
    yakalanan.length
      ? console.log('✘ yakalanan hatalar (' + yakalanan.length + '):', yakalanan.slice(0, 3))
      : console.log('✔ sıfır hata fırlaması');
    const temiz = h === 0 && !yakalanan.length;
    console.log(temiz ? '★★★ DÜŞMAN ORTAMDA BİLE HER ŞEY ÇALIŞIYOR ★★★' : '!!! SORUN VAR — DÜZELT');
    try {
      dom.window.close();
    } catch (e) {}
    process.exit(temiz ? 0 : 1);
  } catch (e) {
    bad('beklenmeyen çökme: ' + e.message);
    console.log(yakalanan.slice(0, 3));
    try {
      dom.window.close();
    } catch (x) {}
    process.exit(1);
  }
})();
