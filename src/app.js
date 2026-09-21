/* ============================================================
   🦜 ANA UYGULAMA MOTORU — Polly's Fun English (v2)
   Ekranlar, katalog, skorlar, şarkı oynatıcı ve Anti-Crash Kalkanı
   ============================================================ */

const PRAISE = [
  'Great job!',
  'Well done!',
  'You are a star!',
  'Amazing work!',
  'Super!',
  'Fantastic!',
  'Brilliant!',
  'Keep going!'
];

const APP = {
  scr: 'home',
  stage: null,
  unitId: null,
  engineId: null,
  lvIdx: 0,
  songFilter: { stage: 's1', unit: null },
  playing: null,
  cleanups: [],

  /* ---------- Navigasyon & Durum Yönetimi ---------- */
  go(scr, p = {}) {
    this.cleanup();
    MEDIA.stopSpeak();
    Object.assign(this, { scr, ...p });
    this.saveState(); // // SAFETY: Her geçişte otomatik durum kaydı
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo(0, 0);
    }
    this.render();
  },

  cleanup() {
    this.cleanups.forEach((f) => {
      try {
        f();
      } catch (e) {}
    });
    this.cleanups = [];
  },

  /* // SAFETY: Çökme / Yenilenme Durumunda Kaldığı Yerden Devam */
  saveState() {
    try {
      store.set('last_state', {
        scr: this.scr,
        stage: this.stage,
        unitId: this.unitId,
        engineId: this.engineId,
        lvIdx: this.lvIdx,
        timestamp: Date.now()
      });
    } catch (e) {}
  },

  restoreLastState() {
    const s = store.get('last_state');
    if (s && s.scr && s.scr !== 'home') {
      this.go(s.scr, {
        stage: s.stage,
        unitId: s.unitId,
        engineId: s.engineId,
        lvIdx: s.lvIdx || 0
      });
      FX.toast('Kaldığınız yerden devam ediliyor! 🔄');
      return true;
    }
    return false;
  },

  /* ---------- Katalog Sayıları ---------- */
  countGames() {
    let n = 0;
    ALLSETS.forEach((u) => {
      const st = u.stage === 's1' ? 1 : 2;
      ENGINES.forEach((e) => {
        if (e.stages.includes(st)) n += e.levels.length;
      });
    });
    return n;
  },

  unitStars(uid) {
    const b = store.get('best') || {};
    let s = 0;
    Object.keys(b).forEach((k) => {
      if (k.split('|')[1] === uid) s += b[k].st;
    });
    return s;
  },

  /* ---------- Render ---------- */
  render() {
    const app = document.getElementById('app');
    if (!app) return;
    document.body.className = this.stage
      ? (STAGES.find((s) => s.id === this.stage) || {}).cls || ''
      : '';
    const R = {
      home: () => this.vHome(),
      stage: () => this.vStage(),
      unit: () => this.vUnit(),
      lesson: () => this.vLesson(),
      game: () => this.vGame(),
      songs: () => this.vSongs(),
      player: () => this.vPlayer(),
      scores: () => this.vScores(),
      help: () => this.vHelp()
    };
    app.innerHTML = `<div class="screen">${(R[this.scr] || R.home)()}</div>`;
    this.bind();
  },

  bar(title) {
    const stars = Object.values(store.get('best') || {}).reduce((a, b) => a + (b.st || 0), 0);
    return `<div class="topbar">
      ${this.scr !== 'home' ? '<button class="btn small white" id="bk">⬅️ Geri</button>' : ''}
      <div class="brand">🦜 Polly’s Fun English</div><div class="spacer"></div>
      <div class="badge gold">⭐ ${stars}</div>
      <button class="btn small white" id="hm">🏠</button>
      <button class="btn small white" id="mu">${MEDIA.muted ? '🔇' : '🔊'}</button></div>`;
  },

  /* ---------- 🏠 ANA SAYFA ---------- */
  vHome() {
    return (
      this.bar() +
      `
   <div class="hero">
     <div class="mascot" id="mas">🦜</div>
     <h1 class="brand" style="font-size:clamp(30px,6vw,54px);justify-content:center">Polly’s Fun English</h1>
     <div class="tag">🎉 Oyna · Öğren · Söyle! 🎵 — Cambridge Global English 1 & 2 (2. Baskı) ile uyumlu</div>
   </div>
   <div class="stats-bar">
     <div class="stat">🎮 <b>${this.countGames()}</b>farklı oyun</div>
     <div class="stat">🎵 <b>${TOTALSONGS}</b>şarkı & chant</div>
     <div class="stat">🔤 <b>${totalWords}</b>İngilizce kelime</div>
     <div class="stat">🕹️ <b>${ENGINES.length}</b>oyun türü · 25 set</div>
   </div>
   <div class="stage-cards">
     <div class="stage-card s1" data-st="s1"><span class="sc-emoji">🐣</span>
       <h2>🟢 1. Sınıf</h2><p>Global English 1 · Starter + 9 ünite<br>Renkler, aile, çiftlik, taşıtlar, su...</p></div>
     <div class="stage-card s2" data-st="s2"><span class="sc-emoji">🚀</span>
       <h2>🔵 2. Sınıf</h2><p>Global English 2 · 9 ünite<br>Meslekler, geçmiş zaman, ölçme, şehir...</p></div>
     <div class="stage-card songs" data-go="songs"><span class="sc-emoji">🎵</span>
       <h2>🎶 Şarkı Köşesi</h2><p>${TOTALSONGS} şarkı & chant · Klasikler + kelime chant'leri<br>Sınıfta birlikte söyleyin!</p></div>
   </div>
   <div class="quick-row">
     <button class="btn purple wobble" id="rndG">🎲 Rastgele Oyun</button>
     <button class="btn white" id="sc">🏆 Skorlar</button>
     <button class="btn white" id="vbtn">🎤 Polly’nin Sesi</button>
     <button class="btn white" id="hp">❓ Nasıl Oynanır?</button>
   </div>`
    );
  },

  /* ---------- 📚 ÜNİTE LİSTESİ ---------- */
  vStage() {
    const st = STAGES.find((s) => s.id === this.stage) || STAGES[0],
      us = unitsOfStage(this.stage);
    return (
      this.bar() +
      `
   <div class="unit-head ${st.id}"><span class="ue">${st.emoji}</span>
     <div><h2>${st.name} — ${st.book}</h2><div class="sub">${st.desc}</div></div></div>
   <div class="unit-grid">${us
     .map((u) => {
       const b = this.unitStars(u.id);
       return `<div class="unit-card ${u.stage}" data-u="${u.id}">
       <span class="ue">${u.emoji}</span>
       <h3>${u.title}</h3>
       <div class="sub">${u.tr} · ${u.w.length} kelime</div>
       <div class="u-meta">
         <span class="badge ${u.stage === 's1' ? 'green' : 'blue'}">${u.stage.toUpperCase()}</span>
         ${b > 0 ? `<span class="badge gold">⭐ ${b}</span>` : ''}
       </div>
     </div>`;
     })
     .join('')}</div>`
    );
  },

  /* ---------- 🎮 OYUN SEÇİMİ ---------- */
  vUnit() {
    const u = unitById(this.unitId);
    if (!u) return this.vHome();
    const stn = u.stage === 's1' ? 1 : 2;
    const eng = ENGINES.filter((e) => e.stages.includes(stn));
    return (
      this.bar() +
      `
   <div class="unit-head ${u.stage}"><span class="ue">${u.emoji}</span>
     <div><h2>${u.title}</h2><div class="sub">${u.tr} · ${u.w.length} kelime · ${u.cats.length} kategori</div></div>
     ${typeof LESSONS !== 'undefined' && LESSONS[u.id] ? '<button class="btn gold" id="lbtn" style="margin-left:auto;font-size:1.05em;padding:12px 18px">📚 Konu Anlatımı</button>' : ''}</div>
   <div class="word-wall">${u.w
     .map(
       (w) =>
         `<span class="word-pill" data-w="${esc(w[0])}"><span class="pe">${w[1] || '🔤'}</span>${esc(w[0])}</span>`
     )
     .join('')}</div>
   <div class="muted" style="margin-bottom:10px">👆 Kelimelere dokun, Polly söylesin! · Bir oyun seç:</div>
   <div class="game-grid">${eng
     .map((e) => {
       const b = (store.get('best') || {})[e.id + '|' + u.id];
       return `<div class="card" data-e="${e.id}">
       <span class="big">${e.e}</span><h3>${e.t}</h3>
       <div class="sub">${e.d}</div>
       <div style="margin-top:8px">${
         b
           ? `<span class="badge gold">En iyi: ${b.s} ${'⭐'.repeat(b.st)}</span>`
           : '<span class="badge blue">Yeni!</span>'
       }</div>
     </div>`;
     })
     .join('')}</div>`
    );
  },

  /* ---------- 🕹️ OYUN EKRANI ---------- */
  vGame() {
    const u = unitById(this.unitId),
      e = ENGINES.find((x) => x.id === this.engineId);
    if (!u || !e) return this.vHome();
    const lvName = e.levels[this.lvIdx] ? e.levels[this.lvIdx].n : 'Standart';
    return (
      this.bar() +
      `
   <div class="game-head">
     <div class="gscore">${e.e} ${e.t} <span class="badge">${esc(u.title)} · ${lvName}</span></div>
     <div class="spacer"></div>
     <div class="gscore">⭐ <span class="v" id="gsc">0</span></div>
     ${e.id === 'team' ? '' : '<div class="gscore">📊 <span id="gpc" style="color:#b45309;font-weight:900">0%</span></div>'}
   </div>
   <div class="timerbar" id="gtb" style="margin-bottom:12px"><i id="gtbi" style="width:0%"></i></div>
   <div id="ginfo"></div>
   <div class="game-area" id="garea"></div>`
    );
  },

  /* ---------- 🎵 ŞARKI KÖŞESİ ---------- */
  vSongs() {
    const st = this.songFilter.stage;
    const us = unitsOfStage(st);
    const sel = this.songFilter.unit || us[0].id;
    const classics = SONGS.filter((s) => s.u === sel);
    const chants = ALLCHANTS.filter((c) => c.u === sel);
    return (
      this.bar() +
      `
   <div class="unit-head songs" style="background:linear-gradient(120deg,#db2777,#f59e0b);color:#fff">
     <span class="ue">🎵</span><div><h2 style="color:#fff">Şarkı & Chant Köşesi</h2>
     <div class="sub" style="color:#ffe4e6">Toplam ${TOTALSONGS} şarkı & chant · ${SONGS.length} klasik + ${ALLCHANTS.length} ünite chant'i</div></div></div>
   <div class="song-tabs">
     ${STAGES.map(
       (s) =>
         `<button class="lvl-pill ${this.songFilter.stage === s.id ? 'active' : ''}" data-st="${s.id}">${s.emoji} ${s.name}</button>`
     ).join('')}
   </div>
   <div class="word-wall">${us
     .map(
       (u) =>
         `<span class="word-pill" data-sunit="${u.id}" style="${u.id === sel ? 'background:#fde68a;transform:scale(1.06);border-color:#f59e0b' : ''}">${u.emoji} ${u.tr}</span>`
     )
     .join('')}</div>
   <h3 style="margin:16px 0 8px">🎶 Klasik Şarkılar</h3>
   <div class="song-list">${
     classics.length
       ? classics
           .map(
             (s) => `
     <div class="song-item" data-song="${SONGS.indexOf(s)}"><span class="se">${s.e}</span>
       <h4>${s.t}</h4><div class="tune">🎼 ${s.tune}</div></div>`
           )
           .join('')
       : '<div class="muted">Bu ünitede klasik şarkı yok — chant’lere göz at! 👇</div>'
   }</div>
   <h3 style="margin:16px 0 8px">🗣️ Kelime Chant’leri <span class="badge">${chants.length}</span></h3>
   <div class="song-list">${chants
     .map(
       (c) => `
     <div class="song-item" data-chant="${ALLCHANTS.indexOf(c)}"><span class="se">${c.e}</span>
       <h4>${c.t}</h4><div class="tune">🥁 Ritmik chant</div></div>`
     )
     .join('')}</div>`
    );
  },

  /* ---------- 🎼 ŞARKI OYNATICI ---------- */
  vPlayer() {
    const s = this.playing;
    if (!s) return this.vSongs();
    return (
      this.bar() +
      `
   <div class="player">
     <div class="big-emoji" style="font-size:72px">${s.e}</div>
     <h2 style="margin:4px 0">${s.t}</h2>
     <div class="row" style="display:flex;justify-content:center;gap:8px;margin:8px 0">
       <span class="badge purple">🎼 ${s.tune}</span>
       ${s.a ? `<span class="badge gold">🕺 ${s.a}</span>` : ''}
     </div>
     <div class="lyrics" id="ly">${s.l.map((l, i) => `<div class="line" data-i="${i}">${esc(l)}</div>`).join('')}</div>
      <div class="controls">
        <button class="btn green pulse" id="pp">▶️ Başlat</button>
        <button class="btn blue" id="pr">🔁 Baştan</button>
        <button class="btn white" id="ps">🐢 Yavaş</button>
        <button class="btn white" id="pm">🎵 Müzik: Açık</button>
        <button class="btn white" id="pa">🛑 Dur</button>
      </div>
      <div class="muted" style="margin-top:10px">🎵 Gerçek melodi çalar · Polly satırları söyler — çocuklar birlikte söylesin! 🎤</div>
    </div>`
    );
  },

  /* ---------- 🏆 SKORLAR ---------- */
  vScores() {
    const b = store.get('best') || {};
    const rows = Object.keys(b)
      .map((k) => {
        const [eid, uid, lv] = k.split('|');
        const u = unitById(uid),
          e = ENGINES.find((x) => x.id === eid);
        return u && e ? { u, e, lv: +lv, s: b[k].s, st: b[k].st } : null;
      })
      .filter(Boolean)
      .sort((a, c) => c.s - a.s)
      .slice(0, 40);
    const tot = Object.values(b).reduce((a, x) => a + (x.st || 0), 0);
    return (
      this.bar() +
      `
   <div class="center" style="min-height:120px">
     <div class="big-emoji" style="font-size:64px">🏆</div>
     <div class="pw" style="font-size:1.6em;margin:6px 0">Toplam ${tot} ⭐ toplanmış!</div>
     <button class="btn small white" id="rst">🗑️ Skorları Sıfırla</button>
   </div>
   <table class="score-table"><tr><th>Oyun</th><th>Ünite</th><th>Seviye</th><th>Puan</th><th>Yıldız</th></tr>
   ${
     rows
       .map(
         (r) => `<tr><td>${r.e.e} ${r.e.t}</td><td>${r.u.emoji} ${esc(r.u.tr)}</td>
     <td>${r.e.levels[r.lv] ? r.e.levels[r.lv].n : '1'}</td><td><b>${r.s}</b></td><td>${'⭐'.repeat(r.st)}</td></tr>`
       )
       .join('') ||
     '<tr><td colspan="5" class="muted" style="text-align:center;padding:18px">Henüz skor yok — haydi oyna! 🎮</td></tr>'
   }</table>`
    );
  },

  /* ---------- ❓ YARDIM ---------- */
  vHelp() {
    return (
      this.bar() +
      `
   <div class="card" style="max-width:760px;margin:0 auto;text-align:left;line-height:1.6">
     <h3 style="font-size:1.3em;margin-bottom:10px">👩‍🏫 Öğretmen Rehberi</h3>
     <p><b>1) Site nasıl kullanılır?</b><br>Tek bir HTML dosyasıdır — internet gerekmez! USB’ye kopyalayıp okul bilgisayarında/akıllı tahtada açabilirsiniz. Tablet ve telefonda da çalışır.</p>
     <p><b>2) Sesler:</b> Polly’nin <b>tüm kelimeleri ve ders cümleleri (500+ kayıt) gerçek insan sesiyle</b> kayıtlıdır (audio/ klasörü — nöral ses teknolojisi, robotik TTS değil!). Şarkı melodileri de gömülüdür. Kaydı olmayan az sayıdaki metin tarayıcı sesine düşer (Microsoft Edge’te daha gerçekçi). 🔊 düğmesiyle açıp kapatabilirsiniz.</p>
     <p><b>3) Akıllı tahta için:</b> <b>⚔️ Takım Yarışı</b> oyununu seçin — sınıfı iki takıma bölün! 🎱 Bingo ve 🎈 Balon Patlat da sınıfça oynanabilir.</p>
     <p><b>4) Nasıl ilerlenir?</b> Sınıfınızı seçin → üniteyi seçin → oyunu seçin (Kolay/Orta/Zor). Her oyunda ⭐ toplanır, skorlar cihaza kaydedilir.</p>
     <p><b>5) Şarkılar:</b> 15 klasik şarkının gerçek melodisi çalar (müzik kutusu tınısı), diğerlerinde neşeli bir ritim eşlik eder — Polly satırları seslendirir, sınıfça söyleyin! 🎵 Ana ekrandaki <b>🎤 Polly’nin Sesi</b> düğmesinden tarayıcının en gerçekçi sesini seçebilirsiniz (en iyileri Microsoft Edge’teki “Natural” sesler).</p>
     <p><b>6) Anti-Crash Koruması:</b> Herhangi bir aksilikte sayfa çökmeyi engeller ve kaldığınız skordan devam ettirir.</p>
     <p class="muted" style="margin-top:14px">Cambridge Global English 1 & 2 (Second Edition) üniteleriyle uyumludur. Bağımsız eğitsel yardımcı materyaldir.</p>
   </div>`
    );
  },

  /* ---------- Event Bağlama ---------- */
  bind() {
    const $ = (s) => document.querySelector(s),
      $$ = (s) => [...document.querySelectorAll(s)];
    const on = (sel, ev, fn) => {
      const e = $(sel);
      if (e) e.addEventListener(ev, fn);
    };
    const backMap = {
      lesson: 'unit',
      game: 'unit',
      unit: 'stage',
      stage: 'home',
      player: 'songs',
      songs: 'home',
      scores: 'home',
      help: 'home'
    };

    on('#bk', 'click', () => {
      MEDIA.fx('click');
      this.go(backMap[this.scr] || 'home');
    });
    on('#hm', 'click', () => {
      MEDIA.fx('click');
      this.stage = null;
      this.go('home');
    });
    on('#mu', 'click', (e) => {
      MEDIA.toggleMute();
      e.target.textContent = MEDIA.muted ? '🔇' : '🔊';
      FX.toast(MEDIA.muted ? 'Sesler kapalı 🔇' : 'Sesler açık 🔊');
    });
    on('#vbtn', 'click', () => this.showVoices());
    on('#lbtn', 'click', () => {
      MEDIA.fx('magic');
      this.lesIdx = 0;
      this.go('lesson', { unitId: this.unitId });
    });
    on('#mas', 'click', () => {
      const ps = [
        'Hello! I’m Polly! 🦜',
        'Let’s play a game! 🎮',
        'Can you say it? 🗣️',
        'You can do it! 💪',
        'Sing with me! 🎵'
      ];
      const p = pick(ps);
      FX.mascotSay(p);
      MEDIA.speak(p.replace(/[🦜🎮🗣️💪🎵]/g, ''));
    });
    on('#rndG', 'click', () => {
      MEDIA.fx('whoosh');
      const st = pick(STAGES);
      const us = unitsOfStage(st.id);
      const u = pick(us);
      const stn = st.id === 's1' ? 1 : 2;
      const e = pick(ENGINES.filter((x) => x.stages.includes(stn)));
      const lv = rnd(e.levels.length);
      this.stage = st.id;
      this.go('game', { unitId: u.id, engineId: e.id, lvIdx: lv });
    });
    on('#sc', 'click', () => this.go('scores'));
    on('#hp', 'click', () => this.go('help'));

    $$('.stage-card').forEach((c) =>
      c.addEventListener('click', () => {
        MEDIA.fx('whoosh');
        if (c.dataset.go) return this.go('songs');
        this.stage = c.dataset.st;
        this.go('stage');
      })
    );

    $$('.card[data-u]').forEach((c) =>
      c.addEventListener('click', () => {
        MEDIA.fx('pop');
        this.go('unit', { unitId: c.dataset.u });
      })
    );

    $$('.word-pill[data-w]').forEach((p) =>
      p.addEventListener('click', () => {
        MEDIA.speak(p.dataset.w);
        FX.notes(innerWidth / 2, innerHeight - 140);
      })
    );

    $$('.card[data-e]').forEach((c) =>
      c.addEventListener('click', () => {
        MEDIA.fx('pop');
        this.pickLevel(c.dataset.e);
      })
    );

    $$('.lvl-pill[data-st]').forEach((b) =>
      b.addEventListener('click', () => {
        this.songFilter = { stage: b.dataset.st, unit: null };
        this.go('songs');
      })
    );

    $$('.word-pill[data-sunit]').forEach((b) =>
      b.addEventListener('click', () => {
        this.songFilter.unit = b.dataset.sunit;
        this.go('songs');
      })
    );

    $$('.song-item[data-song]').forEach((s) =>
      s.addEventListener('click', () => {
        MEDIA.fx('click');
        this.playing = SONGS[+s.dataset.song];
        this.go('player');
      })
    );

    $$('.song-item[data-chant]').forEach((s) =>
      s.addEventListener('click', () => {
        MEDIA.fx('click');
        this.playing = ALLCHANTS[+s.dataset.chant];
        this.go('player');
      })
    );

    on('#rst', 'click', () => {
      if (confirm('Tüm skorlar silinsin mi?')) {
        store.set('best', {});
        this.go('scores');
      }
    });

    if (this.scr === 'game') this.mountGame();
    if (this.scr === 'player') this.mountPlayer();
    if (this.scr === 'lesson') this.mountLesson();
  },

  /* ---------- Seviye Seçme Modalı ---------- */
  pickLevel(eid) {
    const e = ENGINES.find((x) => x.id === eid);
    if (!e) return;
    const ov = el(`<div class="overlay"><div class="modal">
     <h3>${e.e} ${e.t}</h3><div class="muted" style="margin-bottom:10px">${e.d}</div>
     <div class="lvl-row" style="justify-content:center">${e.levels
       .map(
         (l, i) =>
           `<button class="lvl-pill" data-l="${i}">${'🟢🟡🔴'[i] || '🎯'} ${l.n}</button>`
       )
       .join('')}</div></div></div>`);
    document.body.appendChild(ov);
    ov.addEventListener('click', (ev) => {
      if (ev.target === ov) ov.remove();
      const b = ev.target.closest('[data-l]');
      if (b) {
        ov.remove();
        MEDIA.fx('whoosh');
        this.go('game', { engineId: eid, unitId: this.unitId, lvIdx: +b.dataset.l });
      }
    });
  },

  /* ---------- Oyunu Başlat ---------- */
  mountGame() {
    const area = document.getElementById('garea');
    if (!area) return;
    const u = unitById(this.unitId),
      e = ENGINES.find((x) => x.id === this.engineId);
    if (!u || !e) return;
    const self = this;
    let score = 0;

    const upd = () => {
      const s = document.getElementById('gsc');
      if (s) {
        s.textContent = score;
        s.classList.remove('bump');
        void s.offsetWidth;
        s.classList.add('bump');
      }
    };

    const api = {
      root: area,
      unit: u,
      lv: e.levels[this.lvIdx] ? e.levels[this.lvIdx].c : {},
      score: 0,
      add(n) {
        score += n;
        this.score = score;
        upd();
        if (score > 0 && score % 60 === 0) {
          const p = pick(PRAISE);
          FX.mascotSay(p + ' 🦜');
          MEDIA.speak(p);
          FX.confetti(30);
          MEDIA.fx('cheer');
        }
      },
      progress(c, t) {
        const p = Math.min(100, Math.round((c / t) * 100));
        const b = document.getElementById('gtbi');
        if (b) b.style.width = p + '%';
        const pc = document.getElementById('gpc');
        if (pc) pc.textContent = p + '%';
      },
      info(html) {
        const i = document.getElementById('ginfo');
        if (i) {
          i.innerHTML = html;
          return i.firstElementChild || i;
        }
        return null;
      },
      speak: (t, r, cb) => MEDIA.speak(t, r, cb),
      fx: (n) => MEDIA.fx(n),
      cleanup(f) {
        self.cleanups.push(f);
      },
      restart() {
        self.go('game', {
          engineId: self.engineId,
          unitId: self.unitId,
          lvIdx: self.lvIdx
        });
      },
      end(res) {
        self.cleanup();
        MEDIA.stopSpeak();
        const pct = res.max ? res.score / res.max : 1;
        const st = pct >= 0.85 ? 3 : pct >= 0.55 ? 2 : 1;
        const key = e.id + '|' + u.id + '|' + self.lvIdx,
          b = store.get('best') || {};
        if (!b[key] || b[key].s < res.score) {
          b[key] = { s: res.score, st: Math.max(st, b[key] ? b[key].st : 0) };
          store.set('best', b);
        } else if (b[key].st < st) {
          b[key].st = st;
          store.set('best', b);
        }
        FX.confetti(st * 50);
        MEDIA.fx(st >= 2 ? 'win' : 'levelup');
        area.innerHTML = `<div class="center">
         <div class="result-stars">${'⭐'.repeat(st) + '<span>☆</span>'.repeat(3 - st)}</div>
         <div class="pw" style="font-size:1.5em">Puan: ${res.score}</div>
         <div class="muted">${res.note || ''}</div>
         <div class="row" style="display:flex;gap:10px;margin-top:16px"><button class="btn green" id="rag">🔁 Tekrar Oyna</button>
           <button class="btn blue" id="run">➡️ Diğer Oyunlar</button></div></div>`;
        const rag = area.querySelector('#rag');
        if (rag) rag.onclick = () => api.restart();
        const run = area.querySelector('#run');
        if (run) run.onclick = () => self.go('unit', { unitId: u.id });
      }
    };

    upd();
    try {
      e.init(api);
    } catch (err) {
      // // SAFETY: Motor hata verse dahi beyaz ekran olmasını engelle
      area.innerHTML = `<div class="center"><div class="big-emoji">🙈</div>
     <div>Bu oyunda bir aksilik oldu. Diğer oyunları deneyin!</div><div class="muted">${esc(err.message)}</div></div>`;
    }
  },

  /* ---------- Şarkı Oynatıcı ---------- */
  mountPlayer() {
    const s = this.playing;
    if (!s) return;
    let idx = 0,
      slow = false,
      running = false,
      timer = null;
    const lines = [...document.querySelectorAll('#ly .line')];
    const mel = typeof melodyFor === 'function' ? melodyFor(s) : null;
    const bt = 'beat' + ([...(s.t || 'x')].reduce((a, c) => a + c.codePointAt(0), 0) % (typeof BEATN !== 'undefined' ? BEATN : 6));
    let mus = null,
      music = true;
    const musStop = () => {
      if (mus) {
        MEDIA.stopMusic(mus);
        mus = null;
      }
    };
    const musStart = () => {
      musStop();
      if (!music) return;
      if (mel) {
        MEDIA.playFile('sing', 0.9);
        mus = MEDIA.playFile(mel, 0.8, true) || MEDIA.playFile(bt, 0.4, true);
      } else {
        mus = MEDIA.playFile(bt, 0.4, true);
      }
    };
    const duck = (v) => {
      if (mus) {
        try {
          mus.volume = v;
        } catch (e) {}
      }
    };
    const stop = () => {
      running = false;
      clearTimeout(timer);
      MEDIA.stopSpeak();
      musStop();
      lines.forEach((l) => l.classList.remove('active'));
    };
    this.cleanups.push(stop);

    const step = () => {
      if (!running) return;
      if (idx >= lines.length) {
        stop();
        FX.mascotSay('Bravo! 🎉 Bir daha söyleyelim mi?');
        return;
      }
      lines.forEach((l) => l.classList.remove('active'));
      const ln = lines[idx];
      if (ln) {
        ln.classList.add('active');
        if (ln.scrollIntoView) {
          try {
            ln.scrollIntoView({ block: 'center', behavior: 'smooth' });
          } catch (e) {}
        }
        FX.notes(innerWidth / 2, innerHeight - 160);
        const txt = ln.textContent.replace(/[^\w\s'’,.!?-]/g, '').trim() || 'la la la';
        duck(0.22);
        MEDIA.speak(txt, slow ? 0.7 : 0.85, () => {
          if (!running) return;
          duck(0.8);
          timer = setTimeout(() => {
            idx++;
            step();
          }, 550);
        });
      }
    };

    const pp = document.getElementById('pp');
    if (pp) {
      pp.onclick = () => {
        MEDIA.fx('click');
        running = true;
        idx = 0;
        musStart();
        step();
      };
    }
    const pr = document.getElementById('pr');
    if (pr) {
      pr.onclick = () => {
        MEDIA.fx('click');
        stop();
        running = true;
        idx = 0;
        setTimeout(() => {
          musStart();
          step();
        }, 150);
      };
    }
    const ps = document.getElementById('ps');
    if (ps) {
      ps.onclick = (e) => {
        slow = !slow;
        e.target.textContent = slow ? '🐇 Normal' : '🐢 Yavaş';
        MEDIA.fx('click');
      };
    }
    const pm = document.getElementById('pm');
    if (pm) {
      pm.onclick = (e) => {
        music = !music;
        e.target.textContent = music ? '🎵 Müzik: Açık' : '🎵 Müzik: Kapalı';
        MEDIA.fx('click');
        if (music && running) musStart();
        else musStop();
      };
    }
    const pa = document.getElementById('pa');
    if (pa) {
      pa.onclick = () => {
        MEDIA.fx('click');
        stop();
      };
    }
  },

  /* ---------- 🎤 Polly Ses Seçimi Modalı ---------- */
  showVoices() {
    const vs = (window.speechSynthesis ? speechSynthesis.getVoices() : [])
      .filter((v) => /^en/i.test(v.lang));
    const cur = (MEDIA.voice && MEDIA.voice.name) || '';
    const d = document.createElement('div');
    d.id = 'vmodal';
    d.innerHTML = `<div class="vmbox">
      <h3>🎤 Polly’nin Sesini Seçin</h3>
      <div class="muted">Microsoft Edge tarayıcısında "Natural" sesler çok daha gerçekçidir.</div>
      <div class="vlist">${
        vs
          .map(
            (v) => `<div class="vitem ${v.name === cur ? 'sel' : ''}" data-v="${esc(v.name)}">
          ${/natural/i.test(v.name) ? '🌟 ' : ''}${esc(v.name)} <span class="muted">${v.lang}</span>
        </div>`
          )
          .join('') || '<div class="vitem">Tarayıcı sesi bulunamadı</div>'
      }</div>
      <button class="btn white" id="vmclose">✅ Kapat</button></div>`;
    document.body.appendChild(d);
    d.querySelectorAll('.vitem').forEach(
      (it) =>
        (it.onclick = () => {
          const n = it.dataset.v;
          MEDIA.setVoice(n);
          MEDIA.speak('Hello! I am Polly! Let us learn English!');
          d.querySelectorAll('.vitem').forEach((x) => x.classList.remove('sel'));
          it.classList.add('sel');
          FX.toast('✔ ' + n);
        })
    );
    const vmclose = d.querySelector('#vmclose');
    if (vmclose) vmclose.onclick = () => d.remove();
  },

  /* ---------- 📚 KONU ANLATIMI (v4 & v5) ---------- */
  vLesson() {
    const u = unitById(this.unitId);
    if (!u || !LESSONS[u.id]) return this.vUnit();
    const L = LESSONS[u.id],
      n = this.lesIdx || 0,
      total = L.length + 4;
    let body = '';
    if (n < L.length) {
      const s = L[n];
      body = `<div class="lslide"><div class="lscene f">${s[0]}</div>
        <div class="len">${esc(s[1])}</div><div class="ltr">${esc(s[2])}</div>
        <div class="lbtns">
          <button class="btn green" id="lL">🎧 Dinle</button>
          <button class="btn blue" id="lS">🐢 Yavaş Dinle</button>
          <button class="btn white" id="lR">🗣️ Tekrar!</button>
        </div>
        <div class="ldrill">
          <button class="btn small white" data-d="tog">👥 Birlikte</button>
          <button class="btn small white" data-d="boys">👦 Erkekler</button>
          <button class="btn small white" data-d="girls">👧 Kızlar</button>
          <button class="btn small white" data-d="loud">📢 Yüksek</button>
          <button class="btn small white" data-d="whis">🤫 Fısıltı</button>
          <button class="btn small white" data-d="clap">👏 El Çırp</button>
          <button class="btn small white" data-d="once">🔁 Bir Daha</button>
        </div></div>`;
    } else if (n === L.length) {
      body = `<div class="lslide"><img class="lwscene" src="images/w-${u.id}.jpg" alt="" onerror="this.style.display='none'"><div class="lscene f" style="font-size:44px">📚</div>
        <div class="len">Our New Words! 🌟</div>
        <div class="ltr">Dokun, dinle ve birlikte söyle!</div>
        <div class="lwords">${u.w
          .map(
            (w, i) =>
              `<button class="lword" data-i="${i}"><span class="lwe">${w[1] || '🔤'}</span><b>${esc(w[0])}</b><span class="lwt">${esc(w[2])}</span></button>`
          )
          .join('')}</div></div>`;
    } else if (n === L.length + 1) {
      body = `<div class="lslide"><div class="lscene w">🎯</div>
        <div class="len">Show Me! 🎯</div>
        <div class="ltr">Polly hangisi? Doğru resme dokun!</div>
        <div id="lquiz" class="lquiz"></div></div>`;
    } else if (n === L.length + 2) {
      const vs = LVID[u.id] || [],
        q = LQ[u.id] || 'english for kids ' + u.title;
      body = `<div class="lslide"><div class="lscene">🎬</div>
        <div class="len">Sing & Watch! 🎵</div>
        <div class="ltr">Super Simple Songs ile şarkı söyleyelim</div>
        ${
          vs.length
            ? vs
                .map(
                  (v) =>
                    `<div class="lvideo"><iframe src="https://www.youtube-nocookie.com/embed/${v[0]}?rel=0" title="${esc(v[1])}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div style="font-weight:700">${v[1]}</div>`
                )
                .join('')
            : '<div class="muted">Bu ünite için önerilen şarkıyı YouTube üzerinden arayabilirsiniz:</div>'
        }
        <a class="btn purple" href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}" target="_blank" rel="noopener">🔎 YouTube’da Şarkı Ara</a>
      </div>`;
    } else {
      body = `<div class="lslide"><div class="lscene f">🎉</div>
        <div class="len">Great Job! You are ready to play! 🌟</div>
        <div class="ltr">Harika bir ders oldu! Şimdi oyunlarla pekiştirelim.</div>
        <div class="lbtns" style="margin-top:14px">
          <button class="btn green big" id="lP">🎮 Oyunlara Başla!</button>
          <button class="btn white" id="lB">🔁 Dersi Baştan Al</button>
        </div></div>`;
    }
    const dots = Array.from(
      { length: total },
      (_, i) => `<span class="ldot ${i === n ? 'on' : ''}"></span>`
    ).join('');
    return (
      this.bar() +
      `
    <div class="lesson">
      <div class="lhead ${u.stage}"><span class="ue">${u.emoji}</span>
        <div><h2>${u.title} · Ders</h2><div class="sub">${u.tr} · Slayt ${n + 1} / ${total}</div></div>
        <div class="lhero"><img src="images/${u.id}.jpg" alt="" onerror="this.style.display='none'"></div>
      </div>
      <div class="lbody g${n % 6}">${body}</div>
      <div class="lnav">
        <button class="btn white" id="lprev" ${n === 0 ? 'disabled' : ''}>⬅️ Geri</button>
        <div class="ldots">${dots}</div>
        <button class="btn green" id="lnext">${n >= total - 1 ? '🏁 Bitir' : 'İleri ➡️'}</button>
      </div>
      <div class="muted" style="text-align:center;margin-top:10px">💡 <b>🎧 Dinle</b>: Polly söyler · <b>🗣️ Tekrar</b>: çocuklarla birlikte söyleyin · <b>🐢 Yavaş</b>: ağır çekim</div>
    </div>`
    );
  },

  mountLesson() {
    const u = unitById(this.unitId);
    if (!u || !LESSONS[u.id]) return;
    const L = LESSONS[u.id],
      total = L.length + 4,
      n = this.lesIdx || 0;
    if (n === 0) MEDIA.playFile('les-ready', 0.9);
    if (n === L.length) MEDIA.playFile('les-words', 0.9);
    if (n === L.length + 1) MEDIA.playFile('les-point', 0.9);
    if (n === L.length + 2) MEDIA.playFile('les-video', 0.9);
    if (n === L.length + 3) {
      MEDIA.playFile('les-welldone', 0.95);
      FX.confetti(70);
      MEDIA.fx('win');
    }
    const say = (t, r) => MEDIA.speak(t, r || 0.72);
    const prev = document.getElementById('lprev'),
      next = document.getElementById('lnext');
    if (prev)
      prev.onclick = () => {
        MEDIA.fx('click');
        this.lesIdx = Math.max(0, n - 1);
        this.render();
      };
    if (next)
      next.onclick = () => {
        MEDIA.fx('pop');
        if (n >= total - 1) this.go('unit', { unitId: u.id });
        else {
          this.lesIdx = n + 1;
          this.render();
        }
      };
    if (n < L.length) {
      const s = L[n];
      const b1 = document.getElementById('lL'),
        b2 = document.getElementById('lS'),
        b3 = document.getElementById('lR');
      if (b1)
        b1.onclick = () => {
          MEDIA.fx('click');
          say(s[1]);
        };
      if (b2)
        b2.onclick = () => {
          MEDIA.fx('click');
          say(s[1], 0.55);
        };
      if (b3)
        b3.onclick = () => {
          MEDIA.fx('magic');
          const a = MEDIA.playFile('les-repeat', 0.95);
          if (a) {
            a.onended = () => say(s[1]);
            a.onerror = () => say(s[1]);
          } else say(s[1]);
        };
      document.querySelectorAll('.ldrill [data-d]').forEach(
        (b) =>
          (b.onclick = () => {
            const d = b.dataset.d;
            MEDIA.fx('click');
            const clip = {
              tog: 'les-drill-tog',
              boys: 'les-drill-boys',
              girls: 'les-drill-girls',
              loud: 'les-drill-loud',
              whis: 'les-drill-whis',
              clap: 'les-drill-clap',
              once: 'les-drill-once'
            }[d];
            const after = () => {
              if (d === 'loud') MEDIA.speak(s[1], 0.92, null, 1);
              else if (d === 'whis') MEDIA.speak(s[1], 0.6, null, 0.3);
              else if (d === 'clap') {
                FX.confetti(14);
                MEDIA.speak(s[1], 0.8);
              } else say(s[1]);
            };
            const a = MEDIA.playFile(clip, 0.95);
            if (a) {
              a.onended = after;
              a.onerror = after;
            } else after();
          })
      );
    }
    if (n === L.length) {
      document.querySelectorAll('.lword').forEach(
        (b) =>
          (b.onclick = () => {
            const w = u.w[+b.dataset.i];
            MEDIA.fx('pop');
            b.classList.add('lit');
            setTimeout(() => b.classList.remove('lit'), 700);
            MEDIA.speak(w[0], 0.68);
            FX.notes(innerWidth / 2, innerHeight - 140);
          })
      );
    }
    if (n === L.length + 1) {
      /* 🎯 mini quiz */
      const qw = shuffle(u.w.filter((w) => w[1])).slice(0, 4);
      const box = document.getElementById('lquiz');
      if (box && qw.length) {
        let qi = 0;
        const drawQ = () => {
          if (qi >= qw.length) {
            box.innerHTML = `<div class="lqdone">🎉🌟🎉<div class="len" style="margin-top:8px">You know the words!</div><div class="ltr">Kelime şampiyonusunuz!</div></div>`;
            MEDIA.playFile('les-welldone', 0.95);
            FX.confetti(60);
            return;
          }
          const cur = qw[qi];
          const opts = shuffle([cur, ...sample(u.w.filter((w) => w[1] && w[0] !== cur[0]), 2)]);
          box.innerHTML = `<div class="lqq">Show me the <b>${esc(cur[0])}</b>!</div>
            <div class="lqopts">${opts.map((o) => `<button class="lqopt" data-ok="${o[0] === cur[0] ? 1 : 0}"><span>${o[1]}</span></button>`).join('')}</div>
            <div class="lqstars">${'⭐'.repeat(qi)}${'☆'.repeat(qw.length - qi)}</div>`;
          MEDIA.speak(cur[0], 0.72);
          box.querySelectorAll('.lqopt').forEach((ob) => (ob.onclick = () => {
            if (ob.dataset.ok === '1') {
              ob.classList.add('ok');
              MEDIA.fx('correct');
              FX.confetti(24);
              MEDIA.playFile('les-yes', 0.95);
              setTimeout(() => {
                qi++;
                drawQ();
              }, 1100);
            } else {
              ob.classList.add('no');
              FX.shake(ob);
              MEDIA.fx('wrong');
              MEDIA.playFile('les-no', 0.9);
            }
          }));
        };
        drawQ();
      }
    }
    if (n === L.length + 3) {
      const p = document.getElementById('lP'),
        b = document.getElementById('lB');
      if (p)
        p.onclick = () => {
          MEDIA.fx('whoosh');
          MEDIA.playFile('les-bye', 0.9);
          setTimeout(() => this.go('unit', { unitId: u.id }), 500);
        };
      if (b)
        b.onclick = () => {
          MEDIA.fx('click');
          this.lesIdx = 0;
          this.render();
        };
    }
  },

  /* ---------- Gökyüzü Dekoru (P1: Düşük CPU / RAM) ---------- */
  floaties() {
    const f = document.getElementById('floaties');
    if (!f) return;
    const em = ['☁️', '🎈', '⭐', '🦋', '🪁', '🌸', '🍃', '💫', '🐝', '☁️'];
    for (let i = 0; i < 12; i++) {
      const s = document.createElement('span');
      s.textContent = em[i % em.length];
      s.style.left = Math.random() * 96 + '%';
      s.style.fontSize = 24 + Math.random() * 24 + 'px';
      s.style.animationDuration = 14 + Math.random() * 14 + 's';
      s.style.animationDelay = -Math.random() * 18 + 's';
      f.appendChild(s);
    }
  }
};

/* ---------- ANTİ-CRASH SHIELD (Global Hata Yakalayıcı) ---------- */
window.addEventListener('error', (event) => {
  const banner = document.getElementById('crash-banner');
  if (banner) {
    banner.classList.add('show');
    const resBtn = document.getElementById('crash-resume');
    if (resBtn) {
      resBtn.onclick = () => {
        banner.classList.remove('show');
        APP.restoreLastState();
      };
    }
    const hmBtn = document.getElementById('crash-home');
    if (hmBtn) {
      hmBtn.onclick = () => {
        banner.classList.remove('show');
        APP.go('home');
      };
    }
  }
});

window.addEventListener('unhandledrejection', () => {
  // Promise rejection fail-safe
});

/* ---------- DOKUNMA DALGASI & UÇAN SÜRPRİZLER ---------- */
document.addEventListener(
  'pointerdown',
  (ev) => {
    // // PERF: Sadece görünür ekranlarda hafif dalga efekti
    if (ev.clientY < 60) return; // Topbar tıklamalarını rahatlat
    const r = document.createElement('i');
    r.className = 'ripple';
    r.style.left = ev.clientX + 'px';
    r.style.top = ev.clientY + 'px';
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 700);
  },
  { passive: true }
);

// // PERF: Uçan maskotlar arka planda çalışmaz, maksimum 2 eleman sınırı
setInterval(() => {
  const L = document.getElementById('fxlayer');
  if (L && Math.random() < 0.35 && !document.hidden && L.querySelectorAll('.flyby').length < 2) {
    const b = document.createElement('span');
    b.className = 'flyby';
    b.textContent = pick(['🕊️', '🦋', '🎈', '🦜', '🚀', '🐝', '🪁']);
    const dur = 6 + Math.random() * 5;
    b.style.top = 8 + rnd(38) + 'vh';
    b.style.animationDuration = dur + 's';
    b.style.setProperty('--fly', window.innerWidth + 160 + 'px');
    L.appendChild(b);
    setTimeout(() => b.remove(), dur * 1000 + 500);
  }
}, 9000);

/* ---------- UYGULAMAYI BAŞLAT ---------- */
if (typeof document !== 'undefined') {
  APP.floaties();
  APP.render();
  document.addEventListener('click', () => MEDIA.init(), { once: true });
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      speechSynthesis.onvoiceschanged = () => {
        MEDIA.voice = null;
      };
    } catch (e) {}
  }
  FX.mascotSay('Merhaba! Ben Polly 🦜 Bir sınıf seç ve başlayalım!', 4500);
}
