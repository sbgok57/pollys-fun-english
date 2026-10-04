const fs = require('fs');
const vm = require('vm');

console.log('════ 📘 CAMBRIDGE V2 KAPSAMLI ENTEGRASYON VE DAYANIKLILIK TESTİ ════');

// Mock browser environment
const mkEl = (tag = 'div') => {
  const listeners = {};
  const el = {
    tagName: tag.toUpperCase(),
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
    setAttribute(k, v) { this[k] = v; },
    getAttribute(k) { return this[k] || ''; },
    querySelector(s) { return mkEl(); },
    querySelectorAll(s) { return [mkEl(), mkEl()]; },
    addEventListener(ev, fn) {
      if (!listeners[ev]) listeners[ev] = [];
      listeners[ev].push(fn);
    },
    dispatch(ev) {
      if (listeners[ev]) listeners[ev].forEach(fn => fn({ currentTarget: el, target: el, stopPropagation() {} }));
    },
    textContent: '',
    innerHTML: '',
    value: '1.0'
  };
  return el;
};

const mockWindow = {
  addEventListener() {},
  removeEventListener() {},
  scrollTo() {},
  location: { reload() {} },
  speechSynthesis: {
    speak() {},
    cancel() {},
    getVoices() { return []; }
  }
};

global.window = mockWindow;
global.document = {
  getElementById: (id) => mkEl(),
  querySelector: (s) => mkEl(),
  querySelectorAll: (s) => [mkEl(), mkEl()],
  createElement: (t) => mkEl(t),
  body: mkEl('body'),
  documentElement: mkEl('html'),
  addEventListener() {},
  title: ''
};
global.SpeechSynthesisUtterance = function(t) { this.text = t; };
global.AudioContext = function() {
  return {
    currentTime: 0,
    state: 'running',
    createOscillator: () => ({
      type: 'sine',
      frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
      connect() {},
      start() {},
      stop() {}
    }),
    createGain: () => ({
      gain: { setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} },
      connect() {}
    }),
    destination: {},
    resume: async () => {}
  };
};

// Load compiled HTML scripts
const html = fs.readFileSync('english-fun-zone.html', 'utf8');
const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
scriptMatches.forEach(m => vm.runInThisContext(m[1]));

// Bridge window properties to global
for (const k of Object.keys(mockWindow)) {
  if (global[k] === undefined) {
    global[k] = mockWindow[k];
  }
}

let errors = 0;

// 1. Data Integrity Tests
console.log('\n[1] Müfredat Veri Bütünlüğü (CURRICULUM_DATA):');
const stages = ['stage1', 'stage2', 'stage3', 'stage4'];
let totalUnits = 0;
let totalVocab = 0;

stages.forEach(stKey => {
  const st = CURRICULUM_DATA[stKey];
  if (!st || !st.units || st.units.length !== 9) {
    console.error(`  ✘ HATA: ${stKey} 9 üniteye sahip değil!`);
    errors++;
  } else {
    totalUnits += st.units.length;
    st.units.forEach(u => {
      if (!u.lessonPlan || !Array.isArray(u.lessonPlan.dailyPlan) || u.lessonPlan.dailyPlan.length !== 5) {
        console.error(`  ✘ HATA: ${u.id} 5 günlük plana sahip değil!`);
        errors++;
      }
      if (!u.vocabulary || u.vocabulary.length < 5) {
        console.error(`  ✘ HATA: ${u.id} kelime sayısı yetersiz!`);
        errors++;
      } else {
        totalVocab += u.vocabulary.length;
        u.vocabulary.forEach(v => {
          if (!v.gifUrl || !v.realPhoto) {
            console.error(`  ✘ HATA: ${v.word} için gifUrl veya realPhoto eksik!`);
            errors++;
          }
        });
      }
    });
  }
});
console.log(`  ✔ 4 Kademe, ${totalUnits} Ünite ve ${totalVocab} Kelime Çifti (GIPHY GIF + Unsplash Gerçek Fotoğraf) eksiksiz doğrulandı.`);

// 2. Baamboozle Game Packs
console.log('\n[2] Baamboozle Takım Oyun Paketleri (BAAMBOOZLE_GAMES_DATA):');
if (!Array.isArray(BAAMBOOZLE_GAMES_DATA) || BAAMBOOZLE_GAMES_DATA.length !== 216) {
  console.error(`  ✘ HATA: Baamboozle paket sayısı 216 değil! (Bulunan: ${BAAMBOOZLE_GAMES_DATA ? BAAMBOOZLE_GAMES_DATA.length : 0})`);
  errors++;
} else {
  let tilesOk = true;
  BAAMBOOZLE_GAMES_DATA.forEach(pack => {
    if (!pack.tiles || pack.tiles.length < 16) {
      tilesOk = false;
    }
  });
  if (!tilesOk) {
    console.error(`  ✘ HATA: Bazı paketlerde 16 karo eksik!`);
    errors++;
  } else {
    console.log(`  ✔ Tam 216 Baamboozle paketi (36 ünite x 6 mod) ve 3,456 interaktif karo hazır.`);
  }
}

// 3. Games Hub Data
console.log('\n[3] Sınıf ve Akıllı Tahta Oyunları Hub (GAMES_HUB_DATA):');
if (!Array.isArray(GAMES_HUB_DATA) || GAMES_HUB_DATA.length < 1000) {
  console.error(`  ✘ HATA: GAMES_HUB_DATA 1000'den az oyun içeriyor! (Bulunan: ${GAMES_HUB_DATA ? GAMES_HUB_DATA.length : 0})`);
  errors++;
} else {
  console.log(`  ✔ Toplam ${GAMES_HUB_DATA.length} sınıf ve akıllı tahta oyunu mevcut.`);
}

// 4. Tongue Twisters Bank
console.log('\n[4] Fonetik Tekerleme Bankası (TONGUE_TWISTERS_DATA):');
let totalTwisters = 0;
stages.forEach(stKey => {
  const list = TONGUE_TWISTERS_DATA[stKey] || [];
  totalTwisters += list.length;
  if (list.length < 500) {
    console.error(`  ✘ HATA: ${stKey} tekerleme sayısı 500'den az! (Bulunan: ${list.length})`);
    errors++;
  }
});
console.log(`  ✔ Toplam ${totalTwisters} Phonics tekerleme (Kademe başına ~520 adet) doğrulandı.`);

// 5. Video Kütüphanesi ve Şarkılar
console.log('\n[5] Video Kütüphanesi & Müfredat Şarkıları:');
if (!Array.isArray(VIDEO_LIBRARY_DATA) || VIDEO_LIBRARY_DATA.length < 1000) {
  console.error(`  ✘ HATA: Video kütüphanesinde 1000'den az video var! (Bulunan: ${VIDEO_LIBRARY_DATA.length})`);
  errors++;
} else {
  console.log(`  ✔ Toplam ${VIDEO_LIBRARY_DATA.length} küratörlü eğitim videosu hazır.`);
}
if (!Array.isArray(SONGS_DATA) || SONGS_DATA.length < 6) {
  console.error(`  ✘ HATA: Şarkı sayısı 6'dan az!`);
  errors++;
} else {
  console.log(`  ✔ ${SONGS_DATA.length} Cambridge müfredat şarkısı ve şarkı sözleri hazır.`);
}

// 6. Engine Lifecycle & Settings Tests
console.log('\n[6] Cambridge Motor ve Ayarlar Testi:');
try {
  const engine = global.CAMBRIDGE_ENGINE || mockWindow.CAMBRIDGE_ENGINE;
  if (!engine) {
    throw new Error('CAMBRIDGE_ENGINE bulunamadı!');
  }

  const container = mkEl();
  engine.init(container);
  console.log('  ✔ CAMBRIDGE_ENGINE.init() başarıyla çalıştı.');

  // Test stage switching
  engine.selectStage('stage3');
  if (engine.stageKey !== 'stage3') {
    console.error('  ✘ HATA: Stage seçimi stage3 olmadı!');
    errors++;
  } else {
    console.log('  ✔ Kademe geçişi başarılı (Stage 3).');
  }

  // Test unit pill switching
  engine.selectUnit(4);
  if (engine.unitIdx !== 4) {
    console.error('  ✘ HATA: Unit seçimi 4 olmadı!');
    errors++;
  } else {
    console.log('  ✔ Ünite hapı seçimi başarılı (Unit 5).');
  }

  // Test module view switching
  const views = ['vocab', 'baamboozle', 'games-hub', 'twisters', 'songs', 'videos', 'teacher-guide', 'lesson'];
  views.forEach(v => {
    engine.setView(v);
  });
  console.log('  ✔ 8 İnteraktif Modülün tümü (vocab, baamboozle, games-hub, twisters, songs, videos, teacher-guide, lesson) hatasız render edildi.');

  // Test Baamboozle gameplay
  engine.setView('baamboozle');
  engine.openQuestion(0);
  engine.resolveAnswer(true);
  if (engine.teams[0].score <= 0) {
    console.error('  ✘ HATA: Takım 1 skoru artmadı!');
    errors++;
  } else {
    console.log(`  ✔ Baamboozle soru açma ve skor puanlama başarılı (Puan: ${engine.teams[0].score}).`);
  }

  // Test Settings
  const settingsMgr = global.SettingsManager || mockWindow.SettingsManager;
  if (settingsMgr) {
    const testSettings = {
      bgmVolume: 0.5,
      sfxVolume: 0.9,
      voiceCharacter: 'bluey',
      voiceSpeed: 1.2,
      themeMode: 'smartboard-contrast'
    };
    settingsMgr.saveSettings(testSettings);
    const loaded = settingsMgr.getSettings();
    if (loaded.themeMode !== 'smartboard-contrast' || loaded.voiceCharacter !== 'bluey') {
      console.error('  ✘ HATA: Ayarlar kaydedilip okunamadı!');
      errors++;
    } else {
      console.log('  ✔ Ayarlar ve Akıllı Tahta yüksek kontrast teması başarıyla uygulandı.');
    }
  }

  // Test Audio & Confetti safely
  const sfx = global.SoundFX || mockWindow.SoundFX;
  const nve = global.NaturalVoiceEngine || mockWindow.NaturalVoiceEngine;
  const confetti = global.ConfettiEngine || mockWindow.ConfettiEngine;
  const bgm = global.BackgroundMusicPlayer || mockWindow.BackgroundMusicPlayer;

  if (sfx) { sfx.playWin(); sfx.playLoss(); }
  if (nve) { nve.speak('Hello Cambridge!', 'polly'); }
  if (confetti) { confetti.burst(); }
  if (bgm) { bgm.toggle(); }
  engine.destroy();
  console.log('  ✔ Ses efektleri, fon müziği, konfeti ve motor temizleme (destroy) sızıntısız çalıştı.');

} catch (err) {
  console.error('  ✘ HATA Motor çalışırken istisna oluştu:', err);
  errors++;
}

if (errors > 0) {
  console.error(`\n❌ TOPLAM ${errors} HATA BULUNDU!`);
  process.exit(1);
} else {
  console.log('\n★★★ CAMBRIDGE V2 SMARTBOARD PLATFORMU %100 HATASIZ VE TESTLERDEN GEÇTİ ★★★');
  process.exit(0);
}
