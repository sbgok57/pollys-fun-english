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
     .map(
       (u) => `
     <div class="card" data-u="${u.id}">
       ${u.mix ? '<div class="ribbon">TEKRAR</div>' : ''}
       <span class="big">${u.emoji}</span>
       <h3>${u.no === '⭐' || u.no === '🔁' ? '' : 'Ünite ' + u.no + ' · '}${u.title}</h3>
       <div class="sub">${u.tr} · ${u.w.length} kelime</div>
       <div style="margin-top:8px"><span class="badge">${'⭐'.repeat(Math.min(3, this.unitStars(u.id))) || '☆ başla!'}</span></div>
     </div>`
     )
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
     <div><h2>${u.title}</h2><div class="sub">${u.tr} · ${u.w.length} kelime · ${u.cats.length} kategori</div></div></div>
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
       <button class="btn white" id="pa">🛑 Dur</button>
     </div>
     <div class="muted" style="margin-top:10px">💡 Polly satırları okur (konuşma sesi) — çocuklar sizinle birlikte söylesin! 🎤</div>
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
     <p><b>2) Sesler:</b> Tüm sesler tarayıcıda üretilir. 🔊 düğmesiyle açıp kapatabilirsiniz. İngilizce telaffuzlar tarayıcının konuşma motoruyla (TTS) okunur — Chrome/Edge/Safari’de en iyi sonucu verir.</p>
     <p><b>3) Akıllı tahta için:</b> <b>⚔️ Takım Yarışı</b> oyununu seçin — sınıfı iki takıma bölün! 🎱 Bingo ve 🎈 Balon Patlat da sınıfça oynanabilir.</p>
     <p><b>4) Nasıl ilerlenir?</b> Sınıfınızı seçin → üniteyi seçin → oyunu seçin (Kolay/Orta/Zor). Her oyunda ⭐ toplanır, skorlar cihaza kaydedilir.</p>
     <p><b>5) Şarkılar:</b> TTS konuşur, şarkı söyletir. Çocuklara sözleri gösterir, ritimle birlikte okutur.</p>
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
    const stop = () => {
      running = false;
      clearTimeout(timer);
      MEDIA.stopSpeak();
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
        MEDIA.speak(txt, slow ? 0.7 : 0.85, () => {
          if (!running) return;
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
        setTimeout(step, 150);
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
    const pa = document.getElementById('pa');
    if (pa) {
      pa.onclick = () => {
        MEDIA.fx('click');
        stop();
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
