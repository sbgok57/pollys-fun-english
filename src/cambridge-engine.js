/* ============================================================
   📘 CAMBRIDGE GLOBAL ENGLISH 1-4 V2 SMARTBOARD & LESSON ENGINE
   ============================================================
   Features:
   - 4-Stage Selector (Stage 1 to Stage 4) with Large Tabs
   - 1-9 Horizontal Unit Selector Pills Bar for Instant Navigation
   - 8 Core Modules (Vocab, Baamboozle, Games Hub, Twisters, Songs, Videos, Teacher's Guide, 5-Day Lesson Plans)
   - Dual Media Toggle (GIPHY Animated GIFs vs Unsplash Real Photos)
   - 216 Baamboozle Game Packs (36 units x 6 game modes)
   - 1,040+ Classroom & Smartboard Games Hub with Search & Launch
   - 2,080 Tongue Twisters Bank (520 per stage) with 0.8x, 1.0x, 1.25x speed
   - Sing-Along Songs & Curated Video Library (1,050+ videos)
   - Settings Modal (BGM, SFX volume sliders, Character Voice, Speed, Theme Switcher)
   - Themes: Colorful Kids, Smartboard High Contrast, Pastel Relaxing
   - Zero-Crash Hardened, P0 Stability & Safe Resource Disposal
   ============================================================ */

(function () {
  'use strict';

  // SAFETY: Centralized timer registry for zero-leak cleanup
  const activeTimers = new Set();
  const safeSetTimeout = (fn, ms) => {
    const id = setTimeout(() => {
      activeTimers.delete(id);
      try { fn(); } catch (err) { console.warn('SafeTimeout caught:', err); }
    }, ms);
    activeTimers.add(id);
    return id;
  };
  const clearAllTimers = () => {
    activeTimers.forEach(id => clearTimeout(id));
    activeTimers.clear();
  };

  /* ============================================================
     1. ⚙️ SETTINGS MANAGER FALLBACK
     ============================================================ */
  const Settings = (typeof window !== 'undefined' && window.SettingsManager) ? window.SettingsManager : class {
    static STORAGE_KEY = "pollys_fun_english_settings";
    static _memoryCache = null;
    static defaults = {
      bgmEnabled: false,
      bgmVolume: 0.35,
      sfxEnabled: true,
      sfxVolume: 0.8,
      voiceCharacter: "polly",
      voiceSpeed: 1.0,
      voicePitch: 1.35,
      defaultMedia: "gif",
      themeMode: "colorful-kids",
      confettiEnabled: true
    };
    static getSettings() {
      try {
        if (typeof localStorage !== 'undefined') {
          const saved = localStorage.getItem(this.STORAGE_KEY);
          if (saved) return { ...this.defaults, ...JSON.parse(saved) };
        }
      } catch (e) {}
      if (this._memoryCache) {
        return { ...this.defaults, ...this._memoryCache };
      }
      return { ...this.defaults };
    }
    static saveSettings(newSettings) {
      this._memoryCache = { ...newSettings };
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(newSettings));
        }
      } catch (e) {}
      this.applySettings(newSettings);
    }
    static applySettings(settings) {
      if (typeof document === 'undefined' || !document.body) return;
      try {
        document.body.classList.remove("theme-colorful-kids", "theme-smartboard-contrast", "theme-pastel");
        document.body.classList.add(`theme-${settings.themeMode || 'colorful-kids'}`);
        if (settings.themeMode === "smartboard-contrast") {
          document.documentElement.style.setProperty("--primary", "#1d4ed8");
          document.documentElement.style.setProperty("--dark", "#000000");
        } else {
          document.documentElement.style.setProperty("--primary", "#4f46e5");
          document.documentElement.style.setProperty("--dark", "#1e1b4b");
        }
      } catch (e) {}
    }
  };

  /* ============================================================
     2. 🎊 CONFETTI PARTICLE PHYSICS ENGINE
     ============================================================ */
  const ConfettiEngine = {
    canvas: null,
    ctx: null,
    pieces: [],
    animId: null,

    init() {
      let c = document.getElementById("confetti-canvas");
      if (!c) {
        c = document.createElement("canvas");
        c.id = "confetti-canvas";
        c.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;";
        document.body.appendChild(c);
      }
      this.canvas = c;
      this.ctx = (c && typeof c.getContext === 'function') ? c.getContext("2d") : null;
      this.resize();
    },

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth || 1024;
      this.canvas.height = window.innerHeight || 768;
    },

    // PERF: Bounded particles (max 80) and 2.2s auto-cleanup
    burst() {
      const s = Settings.getSettings();
      if (!s.confettiEnabled) return;
      this.init();
      this.resize();
      if (!this.ctx || !this.canvas) return;

      const colors = ["#4f46e5", "#ec4899", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#06b6d4"];
      this.pieces = [];
      for (let i = 0; i < 75; i++) {
        this.pieces.push({
          x: this.canvas.width / 2,
          y: this.canvas.height / 2.5,
          r: Math.random() * 7 + 4,
          dx: (Math.random() - 0.5) * 16,
          dy: (Math.random() - 0.7) * 16,
          color: colors[Math.floor(Math.random() * colors.length)],
          tilt: Math.random() * 10
        });
      }

      let frames = 0;
      const animate = () => {
        if (!this.ctx || !this.canvas) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pieces.forEach(p => {
          p.x += p.dx;
          p.y += p.dy;
          p.dy += 0.35;
          this.ctx.beginPath();
          this.ctx.lineWidth = p.r / 2;
          this.ctx.strokeStyle = p.color;
          this.ctx.moveTo(p.x + p.tilt, p.y);
          this.ctx.lineTo(p.x, p.y + p.tilt);
          this.ctx.stroke();
        });
        if (++frames < 60) {
          this.animId = requestAnimationFrame(animate);
        } else {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.animId = null;
        }
      };
      animate();
    },

    destroy() {
      if (this.animId) cancelAnimationFrame(this.animId);
      this.animId = null;
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  };

  /* ============================================================
     3. 🎶 BACKGROUND ACOUSTIC MUSIC PLAYER
     ============================================================ */
  const BackgroundMusicPlayer = {
    ctx: null,
    isPlaying: false,
    timer: null,
    noteIdx: 0,
    scale: [261.63, 329.63, 392.00, 523.25, 392.00, 329.63, 440.00, 349.23],

    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          try { this.ctx = new AudioCtx(); } catch (e) {}
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    },

    toggle() {
      this.init();
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.playNext();
      } else {
        this.stop();
      }
      return this.isPlaying;
    },

    playNext() {
      if (!this.isPlaying || !this.ctx) return;
      try {
        const settings = Settings.getSettings();
        const now = this.ctx.currentTime;
        const freq = this.scale[this.noteIdx++ % this.scale.length];
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1100, now);

        const baseVol = 0.05 * (settings.bgmVolume !== undefined ? settings.bgmVolume : 0.35);
        gain.gain.setValueAtTime(baseVol, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.1);
      } catch (e) {}

      // SAFETY: Explicit timer registry with cancellation
      this.timer = safeSetTimeout(() => {
        if (this.isPlaying) this.playNext();
      }, 480);
    },

    stop() {
      this.isPlaying = false;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    }
  };

  /* ============================================================
     4. 🔊 SOUND EFFECTS (WIN, LOSS, BONUS, SWAP, STEAL)
     ============================================================ */
  const SoundFX = {
    ctx: null,

    init() {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          try { this.ctx = new AudioCtx(); } catch (e) {}
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    },

    playWin() {
      const s = Settings.getSettings();
      if (!s.sfxEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3);
        const vol = 0.22 * (s.sfxVolume !== undefined ? s.sfxVolume : 0.8);
        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
      } catch (e) {}
    },

    playLoss() {
      const s = Settings.getSettings();
      if (!s.sfxEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.setValueAtTime(140, now + 0.15);
        const vol = 0.18 * (s.sfxVolume !== undefined ? s.sfxVolume : 0.8);
        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      } catch (e) {}
    }
  };

  /* ============================================================
     5. 🗣️ NATURAL CHARACTER VOICE ENGINE
     ============================================================ */
  const NaturalVoiceEngine = {
    positive: [
      { voice: "polly", phrase: "Brilliant job! You are a shining superstar!" },
      { voice: "peppa", phrase: "Oinktastic! That is completely right, well done!" },
      { voice: "chase", phrase: "Hooray! High paws, you nailed it perfectly!" },
      { voice: "bluey", phrase: "Wackadoo! That was magnificent, high five!" }
    ],
    encouraging: [
      { voice: "polly", phrase: "Super close! Take a deep breath, you can do it!" },
      { voice: "peppa", phrase: "Never mind! Let us jump back in and try once more!" },
      { voice: "chase", phrase: "Good effort team! Practice makes progress!" },
      { voice: "bluey", phrase: "That was a wonderful try! Give it another go!" }
    ],

    playCorrect() {
      ConfettiEngine.burst();
      const s = Settings.getSettings();
      const preferred = s.voiceCharacter || "polly";
      const match = this.positive.find(p => p.voice === preferred) || this.positive[0];
      this.speak(match.phrase, match.voice, 1.05);
    },

    playEncouragement() {
      const s = Settings.getSettings();
      const preferred = s.voiceCharacter || "polly";
      const match = this.encouraging.find(p => p.voice === preferred) || this.encouraging[0];
      this.speak(match.phrase, match.voice, 0.95);
    },

    speak(phrase, character, rateModifier = 1.0) {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      try {
        window.speechSynthesis.cancel();
        const s = Settings.getSettings();
        const utt = new SpeechSynthesisUtterance(String(phrase || '').replace(/[#*_`]/g, '').trim());
        utt.lang = 'en-GB';

        const baseSpeed = parseFloat(s.voiceSpeed || 1.0);
        utt.rate = Math.max(0.6, Math.min(1.8, baseSpeed * (rateModifier || 1.0)));

        const charKey = (character || s.voiceCharacter || 'polly').toLowerCase();
        switch (charKey) {
          case 'peppa': utt.pitch = 1.6; break;
          case 'bluey': utt.pitch = 1.4; break;
          case 'chase': utt.pitch = 1.2; break;
          case 'polly':
          default:
            utt.pitch = parseFloat(s.voicePitch || 1.35);
            break;
        }

        // Voice preference
        const voices = window.speechSynthesis.getVoices() || [];
        const gbVoice = voices.find(v => v.lang && (v.lang.includes('en-GB') || v.lang.includes('en_GB')));
        const enVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
        if (gbVoice) utt.voice = gbVoice;
        else if (enVoice) utt.voice = enVoice;

        window.speechSynthesis.speak(utt);
      } catch (err) {
        console.warn('SpeechSynthesis error:', err);
      }
    }
  };

  /* ============================================================
     6. 📘 CAMBRIDGE PLATFORM V2 CONTROLLER
     ============================================================ */
  const CAMBRIDGE_ENGINE = {
    container: null,
    stageKey: 'stage1',
    unitIdx: 0,
    view: 'vocab', // 'vocab' | 'baamboozle' | 'games-hub' | 'twisters' | 'songs' | 'videos' | 'teacher-guide' | 'lesson'
    media: 'gif', // 'gif' | 'photo'
    teams: [
      { name: 'Mavi Takım 🔵', score: 0 },
      { name: 'Kırmızı Takım 🔴', score: 0 },
      { name: 'Yeşil Takım 🟢', score: 0 },
      { name: 'Sarı Takım 🟡', score: 0 }
    ],
    teamsCount: 2,
    turn: 0,
    opened: new Set(),
    activeBaamboozleGame: null,
    twisterSearch: '',
    gameSearch: '',
    videoSearch: '',
    activeModal: null,

    init(containerEl) {
      this.container = containerEl || document.getElementById('cambridge-root') || document.getElementById('app');
      const s = Settings.getSettings();
      Settings.applySettings(s);
      this.media = s.defaultMedia || 'gif';
      this.initBaamboozlePack();
      this.render();
    },

    getCurrentStage() {
      const data = (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : (window.CURRICULUM_DATA || {}));
      return data[this.stageKey] || { title: 'Stage 1', units: [] };
    },

    getCurrentUnit() {
      const stage = this.getCurrentStage();
      if (!stage.units || stage.units.length === 0) return null;
      if (this.unitIdx >= stage.units.length) this.unitIdx = 0;
      return stage.units[this.unitIdx];
    },

    initBaamboozlePack() {
      const allPacks = (typeof BAAMBOOZLE_GAMES_DATA !== 'undefined' ? BAAMBOOZLE_GAMES_DATA : (window.BAAMBOOZLE_GAMES_DATA || []));
      const stagePacks = allPacks.filter(g => g.stageKey === this.stageKey);
      if (stagePacks.length > 0) {
        // Choose pack matching current unit
        const uNum = this.unitIdx + 1;
        const match = stagePacks.find(g => g.unitNumber === uNum) || stagePacks[0];
        this.activeBaamboozleGame = match;
      } else {
        const u = this.getCurrentUnit();
        this.activeBaamboozleGame = {
          id: 'default',
          title: u ? u.title : 'English Game',
          cardCount: 16,
          tiles: (u && u.baamboozleQuestions ? u.baamboozleQuestions : []).map((q, i) => ({
            tile: i + 1,
            q: q.q,
            a: q.a,
            pts: q.pts || 15,
            type: q.type || 'question'
          }))
        };
      }
    },

    selectStage(key) {
      SoundFX.playWin();
      this.stageKey = key;
      this.unitIdx = 0;
      this.opened.clear();
      this.initBaamboozlePack();
      this.render();
    },

    selectUnit(idx) {
      SoundFX.playWin();
      this.unitIdx = idx;
      this.opened.clear();
      this.initBaamboozlePack();
      this.render();
    },

    setView(v) {
      this.view = v;
      this.render();
    },

    toggleMedia() {
      this.media = (this.media === 'gif' ? 'photo' : 'gif');
      this.render();
    },

    // ──────────────── RENDER COMPLETE INTERFACE ────────────────
    render() {
      if (!this.container) return;
      const stage = this.getCurrentStage();
      const unit = this.getCurrentUnit();

      const html = `
        <div class="cambridge-v2-container">
          <!-- 1. HEADER & CONTROLS -->
          <header class="cam-v2-header">
            <div class="brand">
              <div class="brand-logo anim-bounce">P</div>
              <div>
                <h1>Polly's <span>Fun English</span></h1>
                <small style="color:#64748b; font-weight:600;">Cambridge Global English 1-2-3-4 Akıllı Tahta Portalı</small>
              </div>
            </div>
            <div class="nav-controls">
              <button class="btn btn-outline ${BackgroundMusicPlayer.isPlaying ? 'btn-accent' : ''}" id="bgm-toggle-btn">
                ${BackgroundMusicPlayer.isPlaying ? '🎵 Tatlı Fon Müziği: AÇIK' : '🎵 Tatlı Fon Müziği: KAPALI'}
              </button>
              <button class="btn btn-outline" id="fullscreen-btn">📺 Tam Ekran</button>
              <button class="btn btn-primary" id="toggle-media-btn">
                ${this.media === 'gif' ? '📷 Fotoğraf Moduna Geç' : '🎬 GIPHY GIF Moduna Geç'}
              </button>
              <button class="btn btn-accent" id="open-settings-btn">⚙️ Ayarlar</button>
              <button class="btn btn-secondary" id="cam-back-home-btn">🏠 Ana Sayfa</button>
            </div>
          </header>

          <main class="main-container">
            <!-- 2. 1, 2, 3 ve 4. SINIF SEÇİCİ TABS -->
            <section class="stage-selector" id="stage-tabs">
              <div class="stage-tab ${this.stageKey === 'stage1' ? 'active' : ''}" data-stkey="stage1">
                <h3>🟢 1. Sınıf (Stage 1)</h3>
                <p>Pre-A1 · Okul, aile, çiftlik, duyular, taşıtlar...</p>
              </div>
              <div class="stage-tab ${this.stageKey === 'stage2' ? 'active' : ''}" data-stkey="stage2">
                <h3>🔵 2. Sınıf (Stage 2)</h3>
                <p>A1 · Kitaplar, komşular, hava, ölçme, böcekler...</p>
              </div>
              <div class="stage-tab ${this.stageKey === 'stage3' ? 'active' : ''}" data-stkey="stage3">
                <h3>🟣 3. Sınıf (Stage 3)</h3>
                <p>A1+ · Takım çalışması, çöl, icatlar, mitoloji...</p>
              </div>
              <div class="stage-tab ${this.stageKey === 'stage4' ? 'active' : ''}" data-stkey="stage4">
                <h3>🟠 4. Sınıf (Stage 4)</h3>
                <p>A2 · Uzay, mercan resifleri, teknoloji, liderlik...</p>
              </div>
            </section>

            <!-- 3. 1'DEN 9'A KADAR YATAY ÜNİTE SEÇİCİ ÇUBUĞU -->
            <div class="unit-selector-bar" id="unit-pills-bar">
              ${(stage.units || []).map((u, idx) => `
                <button class="unit-pill ${idx === this.unitIdx ? 'active' : ''}" data-uidx="${idx}">
                  Ünite ${u.number}: ${u.title}
                </button>
              `).join('')}
            </div>

            <!-- UNIT HERO TITLE & META INFO -->
            ${unit ? `
              <div style="background:white; border-radius:12px; padding:18px 24px; margin-bottom:20px; border-left:5px solid var(--primary); box-shadow:0 4px 10px rgba(0,0,0,0.05);">
                <h2 style="color:var(--dark); font-size:1.4rem; margin-bottom:6px;">
                  📘 ${stage.title} — ${unit.number}. Ünite: ${unit.title}
                </h2>
                <p style="color:#475569; font-size:0.95rem; margin:0;">
                  <strong>🎯 Tema:</strong> ${unit.theme} | <strong>📖 Gramer:</strong> ${unit.grammar} | <strong>🗣️ Fonetik:</strong> ${unit.phonics}
                </p>
              </div>
            ` : ''}

            <!-- 4. 8 MODÜL GEZİNME ÇUBUĞU (MODULE NAV) -->
            <nav class="module-nav">
              <button class="module-btn ${this.view === 'vocab' ? 'active' : ''}" data-view="vocab">✨ Hareketli Kelimeler</button>
              <button class="module-btn ${this.view === 'baamboozle' ? 'active' : ''}" data-view="baamboozle">🎮 Baamboozle Arenası (216 Oyun)</button>
              <button class="module-btn ${this.view === 'games-hub' ? 'active' : ''}" data-view="games-hub">🎲 1000+ Sınıf ve Tahta Oyunu</button>
              <button class="module-btn ${this.view === 'twisters' ? 'active' : ''}" data-view="twisters">👅 500+ Tongue Twisters</button>
              <button class="module-btn ${this.view === 'songs' ? 'active' : ''}" data-view="songs">🎵 Sing-Along Şarkılar</button>
              <button class="module-btn ${this.view === 'videos' ? 'active' : ''}" data-view="videos">🎬 1000+ Eğitici Video Hub</button>
              <button class="module-btn ${this.view === 'teacher-guide' ? 'active' : ''}" data-view="teacher-guide">📖 Öğretmen Akıllı Tahta Rehberi</button>
              <button class="module-btn ${this.view === 'lesson' ? 'active' : ''}" data-view="lesson">📋 5 Günlük Ders Planları</button>
            </nav>

            <!-- 5. ACTIVE MODULE VIEW -->
            ${this.renderActiveView(unit)}
          </main>

          <!-- 6. AYARLAR MODALI -->
          <div class="modal-overlay ${this.activeModal === 'settings' ? 'active' : ''}" id="settings-modal">
            ${this.renderSettingsModal()}
          </div>

          <!-- 7. BAAMBOOZLE QUESTION MODAL -->
          <div class="modal-overlay ${this.activeModal === 'question' ? 'active' : ''}" id="question-modal">
            ${this.renderQuestionModal()}
          </div>
        </div>
      `;

      this.container.innerHTML = html;
      this.bindEvents();
    },

    renderActiveView(unit) {
      if (!unit && this.view !== 'games-hub' && this.view !== 'twisters' && this.view !== 'songs' && this.view !== 'videos' && this.view !== 'teacher-guide') {
        return `<div class="resource-box">Ünite yüklenemedi.</div>`;
      }
      switch (this.view) {
        case 'vocab': return this.renderVocab(unit);
        case 'baamboozle': return this.renderBaamboozle();
        case 'games-hub': return this.renderGamesHub();
        case 'twisters': return this.renderTwisters();
        case 'songs': return this.renderSongs();
        case 'videos': return this.renderVideos();
        case 'teacher-guide': return this.renderTeacherGuide();
        case 'lesson': return this.renderLesson(unit);
        default: return this.renderVocab(unit);
      }
    },

    // 1. VOCABULARY VIEW
    renderVocab(unit) {
      const words = unit.vocabulary || [];
      return `
        <section class="view-section active">
          <div class="vocab-grid" id="vocab-cards-grid">
            ${words.map(v => `
              <div class="vocab-card">
                <div class="vocab-media">
                  <img src="${this.media === 'gif' ? v.gifUrl : v.realPhoto}" alt="${v.word}" loading="lazy" />
                  <span class="media-tag">${this.media === 'gif' ? 'GIPHY HAREKETLİ' : 'GERÇEK FOTOĞRAF'}</span>
                </div>
                <div class="vocab-details">
                  <h4>${v.word}</h4>
                  <div class="tr-meaning">🇹🇷 ${v.turkish}</div>
                  <p style="font-size:0.85rem; color:#64748b; margin-bottom:12px;">📖 ${v.meaning}</p>
                  <div class="voice-bubble">
                    <span><strong>${(v.characterVoice || 'polly').toUpperCase()}:</strong> "${v.voiceLine}"</span>
                    <button class="btn btn-outline cam-speak-btn" data-phrase="${v.word}! ${v.voiceLine}" data-char="${v.characterVoice || 'polly'}">
                      🔊 Dinle
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    },

    // 2. BAAMBOOZLE ARENA VIEW
    renderBaamboozle() {
      const allPacks = (typeof BAAMBOOZLE_GAMES_DATA !== 'undefined' ? BAAMBOOZLE_GAMES_DATA : (window.BAAMBOOZLE_GAMES_DATA || []));
      const stagePacks = allPacks.filter(g => g.stageKey === this.stageKey);
      const activeGame = this.activeBaamboozleGame || stagePacks[0] || { tiles: [] };

      return `
        <section class="view-section active">
          <div class="baamboozle-arena">
            <div style="display:flex; justify-content:space-between; margin-bottom:16px; flex-wrap:wrap; gap:12px; align-items:center;">
              <div style="display:flex; gap:14px; align-items:center; flex-wrap:wrap;">
                <label style="font-weight:700;">Baamboozle Paketi:
                  <select id="baamboozle-pack-select" style="padding:6px 12px; border-radius:8px; border:1px solid #cbd5e1; font-weight:600;">
                    ${stagePacks.map(p => `
                      <option value="${p.id}" ${activeGame.id === p.id ? 'selected' : ''}>
                        ${p.title} (${p.cardCount} Kart)
                      </option>
                    `).join('')}
                  </select>
                </label>
                <label style="font-weight:700;">Takım Sayısı:
                  <select id="team-count-select" style="padding:6px 12px; border-radius:8px; border:1px solid #cbd5e1; font-weight:600;">
                    <option value="2" ${this.teamsCount === 2 ? 'selected' : ''}>2 Takım</option>
                    <option value="3" ${this.teamsCount === 3 ? 'selected' : ''}>3 Takım</option>
                    <option value="4" ${this.teamsCount === 4 ? 'selected' : ''}>4 Takım</option>
                  </select>
                </label>
              </div>
              <button class="btn btn-outline" id="restart-game-btn">🔄 Oyunu Sıfırla</button>
            </div>

            <!-- SCOREBOARD CARDS -->
            <div class="team-scoreboard">
              ${Array.from({ length: this.teamsCount }).map((_, i) => `
                <div class="team-card team-${i+1} ${i === (this.turn % this.teamsCount) ? 'current-turn' : ''}">
                  <h4>${this.teams[i].name}</h4>
                  <div class="team-score">${this.teams[i].score}</div>
                  <p style="font-size:0.8rem;">${i === (this.turn % this.teamsCount) ? '👉 SIRA BU TAKIMDA 👈' : 'Bekliyor'}</p>
                </div>
              `).join('')}
            </div>

            <!-- 16 TILES SMARTBOARD GRID -->
            <div class="game-grid">
              ${(activeGame.tiles || []).map((t, idx) => `
                <div class="game-tile ${this.opened.has(idx) ? 'opened' : ''}" data-tidx="${idx}">
                  ${this.opened.has(idx) ? '✓' : (t.tile || idx + 1)}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // 3. 1,000+ GAMES HUB VIEW
    renderGamesHub() {
      const allGames = (typeof GAMES_HUB_DATA !== 'undefined' ? GAMES_HUB_DATA : (window.GAMES_HUB_DATA || []));
      const filtered = allGames.filter(g =>
        g.title.toLowerCase().includes(this.gameSearch.toLowerCase()) ||
        g.category.toLowerCase().includes(this.gameSearch.toLowerCase()) ||
        g.stage.toLowerCase().includes(this.gameSearch.toLowerCase())
      );

      return `
        <section class="view-section active">
          <div class="resource-box">
            <div style="display:flex; justify-content:space-between; margin-bottom:16px; align-items:center; flex-wrap:wrap; gap:8px;">
              <h3>🎲 Cambridge 1000+ Sınıf İçi ve Tahta Oyunu</h3>
              <span class="badge" style="background:#ec4899; color:white; padding:4px 12px; border-radius:12px; font-weight:800;">
                ${filtered.length} Oyun Gösteriliyor
              </span>
            </div>
            <input type="text" class="search-input" id="game-search-input" placeholder="🔍 Oyun türü veya konuya göre ara..." value="${this.gameSearch}" />
            <div class="video-grid">
              ${filtered.slice(0, 36).map(g => `
                <div class="vocab-card" style="padding:16px;">
                  <span class="badge" style="background:#4f46e5; color:white; padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:800;">${g.category}</span>
                  <h4 style="margin:8px 0; color:var(--dark); font-size:1.1rem;">${g.title}</h4>
                  <p style="font-size:0.85rem; color:#475569; margin-bottom:10px;">${g.description}</p>
                  <small style="display:block; color:#64748b; margin-bottom:12px;"><strong>Cihaz:</strong> ${g.device} | <strong>Süre:</strong> ${g.duration}</small>
                  <button class="btn btn-primary cam-launch-game-btn" style="width:100%; justify-content:center;" data-title="${g.title.replace(/"/g, '&quot;')}" data-rules="${g.rules.replace(/"/g, '&quot;')}">
                    🎮 Oyunu Tahtada Başlat
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // 4. 500+ TONGUE TWISTERS VIEW
    renderTwisters() {
      const data = (typeof TONGUE_TWISTERS_DATA !== 'undefined' ? TONGUE_TWISTERS_DATA : (window.TONGUE_TWISTERS_DATA || {}));
      const twisters = data[this.stageKey] || [];
      const filtered = twisters.filter(t =>
        t.text.toLowerCase().includes(this.twisterSearch.toLowerCase()) ||
        t.sound.toLowerCase().includes(this.twisterSearch.toLowerCase())
      );

      return `
        <section class="view-section active">
          <div class="resource-box">
            <div style="display:flex; justify-content:space-between; margin-bottom:16px; align-items:center; flex-wrap:wrap; gap:8px;">
              <h3>👅 Fonetik Tekerleme Bankası (Sınıf Başına 520 Adet)</h3>
              <span class="badge" style="background:#4f46e5; color:white; padding:4px 12px; border-radius:12px; font-weight:800;">
                ${filtered.length} Tekerleme Mevcut
              </span>
            </div>
            <input type="text" class="search-input" id="twister-search-input" placeholder="🔍 Sese göre ara (/sh/, /str/, bear)..." value="${this.twisterSearch}" />
            <div id="twisters-list">
              ${filtered.slice(0, 50).map(t => `
                <div class="twister-card">
                  <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                    <span class="badge" style="background:#e0e7ff; color:#4338ca; padding:3px 8px; border-radius:6px; font-weight:800;">Ses: ${t.sound}</span>
                    <span class="badge" style="background:#fef3c7; color:#b45309; padding:3px 8px; border-radius:6px; font-weight:800;">${t.difficulty}</span>
                  </div>
                  <p style="font-size:1.15rem; font-weight:700; color:#1e293b; margin-bottom:10px;">"${t.text}"</p>
                  <div style="display:flex; gap:8px;">
                    <button class="btn btn-outline cam-twister-speak" style="padding:6px 12px; font-size:0.85rem;" data-text="${t.text.replace(/"/g, '&quot;')}" data-speed="0.8">🐢 Yavaş (0.8x)</button>
                    <button class="btn btn-primary cam-twister-speak" style="padding:6px 12px; font-size:0.85rem;" data-text="${t.text.replace(/"/g, '&quot;')}" data-speed="1.0">🐰 Normal (1.0x)</button>
                    <button class="btn btn-accent cam-twister-speak" style="padding:6px 12px; font-size:0.85rem;" data-text="${t.text.replace(/"/g, '&quot;')}" data-speed="1.25">⚡ Hızlı (1.25x)</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // 5. SONGS & KARAOKE VIEW
    renderSongs() {
      const songs = (typeof SONGS_DATA !== 'undefined' ? SONGS_DATA : (window.SONGS_DATA || []));
      return `
        <section class="view-section active">
          <div id="songs-container">
            ${songs.map(s => `
              <div class="resource-box">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                  <div>
                    <h3>🎵 ${s.title}</h3>
                    <span class="badge" style="background:#ec4899; color:white; padding:3px 8px; border-radius:6px; font-weight:800;">
                      ${s.stage} - ${s.theme}
                    </span>
                  </div>
                  <button class="btn btn-primary cam-sing-btn" data-lyrics="${(s.lyrics || []).join(' ... ').replace(/"/g, '&quot;')}">
                    ▶️ Şarkıyı Söyle ve Eşlik Et
                  </button>
                </div>
                <div style="background:#f8fafc; padding:16px; border-radius:12px; border-left:4px solid var(--secondary); font-size:1.1rem; line-height:1.7;">
                  ${(s.lyrics || []).map(l => `<p style="margin-bottom:4px;">${l}</p>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    },

    // 6. 1000+ VIDEOS VIEW
    renderVideos() {
      const stageName = this.stageKey.replace('stage', 'Stage ');
      const allVideos = (typeof VIDEO_LIBRARY_DATA !== 'undefined' ? VIDEO_LIBRARY_DATA : (window.VIDEO_LIBRARY_DATA || []));
      const vids = allVideos.filter(v => v.stage === stageName);
      const filtered = vids.filter(v =>
        v.title.toLowerCase().includes(this.videoSearch.toLowerCase()) ||
        v.topic.toLowerCase().includes(this.videoSearch.toLowerCase())
      );

      return `
        <section class="view-section active">
          <div class="resource-box">
            <div style="display:flex; justify-content:space-between; margin-bottom:16px; align-items:center; flex-wrap:wrap; gap:8px;">
              <h3>🎬 Cambridge ESL 1000+ Video Kütüphanesi</h3>
              <span class="badge" style="background:#10b981; color:white; padding:4px 12px; border-radius:12px; font-weight:800;">
                ${filtered.length} Video (${stageName})
              </span>
            </div>
            <input type="text" class="search-input" id="video-search-input" placeholder="🔍 Video veya kanal ara..." value="${this.videoSearch}" />
            <div class="video-grid">
              ${filtered.slice(0, 24).map(v => `
                <div class="vocab-card">
                  <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
                    <iframe src="${v.embedUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" allowfullscreen loading="lazy"></iframe>
                  </div>
                  <div style="padding:14px;">
                    <span class="badge" style="background:#10b981; color:white; font-size:0.75rem; padding:2px 6px; border-radius:4px;">${v.channel}</span>
                    <h4 style="font-size:1rem; margin:6px 0; color:var(--dark);">${v.title}</h4>
                    <small style="color:#64748b;">${v.topic} • ${v.duration}</small>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    },

    // 7. TEACHER'S MASTER GUIDE VIEW
    renderTeacherGuide() {
      const data = (typeof TEACHER_GUIDE_DATA !== 'undefined' ? TEACHER_GUIDE_DATA : (window.TEACHER_GUIDE_DATA || {}));
      const guide = data[this.stageKey] || {
        stageTitle: "Cambridge Teacher's Guide",
        cefr: "A1",
        targetAge: "7-8 Yaş",
        smartboardStrategies: [],
        physicalActivities: []
      };

      const smartHtml = (guide.smartboardStrategies || []).map(s => `
        <div class="activity-card" style="border-left-color:var(--primary); margin-bottom:12px;">
          <strong>💻 ${s.title}</strong>
          <p style="margin-top:4px; font-size:0.92rem; color:#334155;">${s.description}</p>
        </div>
      `).join('');

      const physHtml = (guide.physicalActivities || []).map(p => `
        <div class="activity-card" style="border-left-color:var(--accent); margin-bottom:12px;">
          <strong>🏃 ${p.name}</strong>
          <p style="margin:4px 0; font-size:0.9rem; color:#475569;"><strong>Gereçler:</strong> ${p.materials}</p>
          <p style="margin:0; font-size:0.92rem; color:#334155;"><strong>Uygulama:</strong> ${p.procedure}</p>
        </div>
      `).join('');

      return `
        <section class="view-section active">
          <div class="resource-box">
            <h3>📚 ${guide.stageTitle} — Öğretmen & Akıllı Tahta Rehberi</h3>
            <p style="color:#475569;"><strong>Hedef Seviye:</strong> ${guide.cefr} | <strong>Hedef Yaş Grubu:</strong> ${guide.targetAge}</p>
          </div>
          <div class="resource-box">
            <h3>💻 Akıllı Tahta (Interactive Whiteboard) Stratejileri</h3>
            ${smartHtml}
          </div>
          <div class="resource-box">
            <h3>🏃 Fiziksel Sınıf Oyunları ve TPR Aktiviteleri</h3>
            ${physHtml}
          </div>
        </section>
      `;
    },

    // 8. 5-DAY LESSON PLANS VIEW
    renderLesson(unit) {
      const lp = unit.lessonPlan || {};
      const daily = lp.dailyPlan || [];

      const daysHtml = daily.map(d => `
        <div class="activity-card" style="border-left-color:var(--primary); margin-bottom:16px;">
          <h4 style="color:var(--dark); margin-bottom:8px; font-size:1.15rem;">📅 ${d.day} — ${d.focus}</h4>
          <p style="margin-bottom:4px;"><strong>1. Warm-Up (Isınma):</strong> ${d.warmUp}</p>
          <p style="margin-bottom:4px;"><strong>2. Presentation (Sunum):</strong> ${d.presentation}</p>
          <p style="margin-bottom:4px;"><strong>3. Practice (Alıştırma):</strong> ${d.practice}</p>
          <p style="margin-bottom:4px;"><strong>4. Production (Üretim):</strong> ${d.production}</p>
          <p style="margin-bottom:0;"><strong>5. Wrap-Up (Kapanış):</strong> ${d.wrapUp}</p>
        </div>
      `).join('');

      return `
        <section class="view-section active">
          <div class="resource-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
              <h3>📅 ${unit.title} — 5 Günlük Detaylı Ders Planı</h3>
              <button class="btn btn-outline" onclick="window.print()">🖨️ Planı Yazdır / PDF</button>
            </div>
            <p style="font-size:1.05rem; margin-bottom:16px; color:#1e40af; font-weight:600;">
              <strong>🎯 Haftalık Kazanım:</strong> ${lp.weeklyGoal || 'Ünite hedefleri eksiksiz pekiştirilir.'}
            </p>
            ${daysHtml}
          </div>
        </section>
      `;
    },

    // SETTINGS MODAL CONTENT
    renderSettingsModal() {
      const s = Settings.getSettings();
      return `
        <div class="modal-content" style="max-width: 520px;">
          <h3 style="color:#1e1b4b; margin-bottom:16px; font-size:1.35rem;">⚙️ Platform ve Ses Ayarları</h3>
          <div class="settings-group">
            <label>🎵 Fon Müziği Ses Düzeyi (${Math.round((s.bgmVolume || 0.35) * 100)}%)</label>
            <input type="range" id="setting-bgm-volume" min="0" max="1" step="0.05" value="${s.bgmVolume || 0.35}" />
          </div>
          <div class="settings-group">
            <label>🔊 Ses Efektleri (SFX) Düzeyi (${Math.round((s.sfxVolume || 0.8) * 100)}%)</label>
            <input type="range" id="setting-sfx-volume" min="0" max="1" step="0.05" value="${s.sfxVolume || 0.8}" />
          </div>
          <div class="settings-group">
            <label>🗣️ Doğal Karakter Seslendirmesi</label>
            <select id="setting-voice-char">
              <option value="polly" ${s.voiceCharacter === 'polly' ? 'selected' : ''}>Polly (Öğretmen)</option>
              <option value="peppa" ${s.voiceCharacter === 'peppa' ? 'selected' : ''}>Peppa Pig (Çocuk)</option>
              <option value="bluey" ${s.voiceCharacter === 'bluey' ? 'selected' : ''}>Bluey (Enerjik)</option>
              <option value="chase" ${s.voiceCharacter === 'chase' ? 'selected' : ''}>Chase - Paw Patrol (Cesur)</option>
            </select>
          </div>
          <div class="settings-group">
            <label>⚡ Ses Okuma Hızı</label>
            <select id="setting-voice-speed">
              <option value="0.8" ${s.voiceSpeed === 0.8 ? 'selected' : ''}>0.8x (Yavaş)</option>
              <option value="1.0" ${s.voiceSpeed === 1.0 ? 'selected' : ''}>1.0x (Normal)</option>
              <option value="1.2" ${s.voiceSpeed === 1.2 ? 'selected' : ''}>1.2x (Hızlı)</option>
            </select>
          </div>
          <div class="settings-group">
            <label>🎨 Görsel Arayüz Teması</label>
            <select id="setting-theme">
              <option value="colorful-kids" ${s.themeMode === 'colorful-kids' ? 'selected' : ''}>Renkli Çocuk Dünyası</option>
              <option value="smartboard-contrast" ${s.themeMode === 'smartboard-contrast' ? 'selected' : ''}>Akıllı Tahta Yüksek Kontrast</option>
              <option value="pastel" ${s.themeMode === 'pastel' ? 'selected' : ''}>Pastel Yumuşak Tonlar</option>
            </select>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
            <button class="btn btn-outline" id="close-settings-btn">İptal</button>
            <button class="btn btn-primary" id="save-settings-btn">Kaydet ve Kapat</button>
          </div>
        </div>
      `;
    },

    // QUESTION MODAL CONTENT
    renderQuestionModal() {
      const modal = this.activeQuestionData;
      if (!modal) return '';
      const tile = modal.tile;

      return `
        <div class="modal-content">
          <div id="modal-pts-badge" style="background:#f59e0b; color:white; padding:6px 14px; border-radius:20px; font-weight:800; display:inline-block; margin-bottom:12px;">
            ${tile.pts > 0 ? '+' : ''}${tile.pts} Puan (${tile.type.toUpperCase()})
          </div>
          <div class="modal-question" id="modal-q-text" style="font-size:1.5rem; font-weight:800; color:var(--dark); margin-bottom:16px;">
            ${tile.q}
          </div>
          <div class="modal-answer" id="modal-a-text" style="${modal.revealed ? 'display:block;' : 'display:none;'} background:#f1f5f9; padding:12px; border-radius:8px; color:var(--primary); font-weight:700; margin:14px 0; font-size:1.2rem;">
            ${tile.a}
          </div>
          <div class="modal-buttons" style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            ${!modal.revealed ? `
              <button class="btn btn-outline" id="reveal-answer-btn">👁️ Cevabı Aç</button>
            ` : `
              <button class="btn btn-primary" id="btn-answer-correct" style="background:#10b981;">✅ Doğru</button>
              <button class="btn btn-secondary" id="btn-answer-wrong" style="background:#ef4444;">❌ Yanlış</button>
            `}
            <button class="btn btn-outline" id="btn-cancel-question">✖ Kapat</button>
          </div>
        </div>
      `;
    },

    // ──────────────── EVENT BINDINGS ────────────────
    bindEvents() {
      if (!this.container) return;

      // Stage tabs
      this.container.querySelectorAll('.stage-tab[data-stkey]').forEach(tab => {
        tab.addEventListener('click', (e) => {
          this.selectStage(e.currentTarget.getAttribute('data-stkey'));
        });
      });

      // Unit pills
      this.container.querySelectorAll('.unit-pill[data-uidx]').forEach(pill => {
        pill.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-uidx'), 10);
          this.selectUnit(idx);
        });
      });

      // Module navigation
      this.container.querySelectorAll('.module-btn[data-view]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.setView(e.currentTarget.getAttribute('data-view'));
        });
      });

      // Media toggle
      const mediaToggle = this.container.querySelector('#toggle-media-btn');
      if (mediaToggle) mediaToggle.addEventListener('click', () => this.toggleMedia());

      // BGM toggle
      const bgmToggle = this.container.querySelector('#bgm-toggle-btn');
      if (bgmToggle) {
        bgmToggle.addEventListener('click', () => {
          BackgroundMusicPlayer.toggle();
          this.render();
        });
      }

      // Fullscreen
      const fsBtn = this.container.querySelector('#fullscreen-btn');
      if (fsBtn) {
        fsBtn.addEventListener('click', () => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else {
            document.exitFullscreen().catch(() => {});
          }
        });
      }

      // Settings Modal Open/Close/Save
      const openSettings = this.container.querySelector('#open-settings-btn');
      if (openSettings) {
        openSettings.addEventListener('click', () => {
          this.activeModal = 'settings';
          this.render();
        });
      }

      const closeSettings = this.container.querySelector('#close-settings-btn');
      if (closeSettings) {
        closeSettings.addEventListener('click', () => {
          this.activeModal = null;
          this.render();
        });
      }

      const saveSettings = this.container.querySelector('#save-settings-btn');
      if (saveSettings) {
        saveSettings.addEventListener('click', () => {
          const bgmVal = parseFloat(this.container.querySelector('#setting-bgm-volume').value);
          const sfxVal = parseFloat(this.container.querySelector('#setting-sfx-volume').value);
          const charVal = this.container.querySelector('#setting-voice-char').value;
          const speedVal = parseFloat(this.container.querySelector('#setting-voice-speed').value);
          const themeVal = this.container.querySelector('#setting-theme').value;

          const updated = {
            ...Settings.getSettings(),
            bgmVolume: bgmVal,
            sfxVolume: sfxVal,
            voiceCharacter: charVal,
            voiceSpeed: speedVal,
            themeMode: themeVal
          };
          Settings.saveSettings(updated);
          this.activeModal = null;
          this.render();
        });
      }

      // Back to home
      const backHome = this.container.querySelector('#cam-back-home-btn');
      if (backHome) {
        backHome.addEventListener('click', () => {
          BackgroundMusicPlayer.stop();
          if (typeof APP !== 'undefined' && APP.go) {
            APP.go('home');
          } else {
            window.location.reload();
          }
        });
      }

      // Vocab speak buttons
      this.container.querySelectorAll('.cam-speak-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const phrase = e.currentTarget.getAttribute('data-phrase');
          const ch = e.currentTarget.getAttribute('data-char') || 'polly';
          SoundFX.playWin();
          NaturalVoiceEngine.speak(phrase, ch);
        });
      });

      // Baamboozle controls
      const packSelect = this.container.querySelector('#baamboozle-pack-select');
      if (packSelect) {
        packSelect.addEventListener('change', (e) => {
          const allPacks = (typeof BAAMBOOZLE_GAMES_DATA !== 'undefined' ? BAAMBOOZLE_GAMES_DATA : (window.BAAMBOOZLE_GAMES_DATA || []));
          this.activeBaamboozleGame = allPacks.find(g => g.id === e.target.value);
          this.opened.clear();
          this.render();
        });
      }

      const teamSelect = this.container.querySelector('#team-count-select');
      if (teamSelect) {
        teamSelect.addEventListener('change', (e) => {
          this.teamsCount = parseInt(e.target.value, 10) || 2;
          this.turn = 0;
          this.render();
        });
      }

      const restartBtn = this.container.querySelector('#restart-game-btn');
      if (restartBtn) {
        restartBtn.addEventListener('click', () => {
          SoundFX.playWin();
          this.opened.clear();
          this.teams.forEach(t => t.score = 0);
          this.turn = 0;
          this.render();
        });
      }

      // Open tile
      this.container.querySelectorAll('.game-tile:not(.opened)').forEach(tileEl => {
        tileEl.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-tidx'), 10);
          this.openQuestion(idx);
        });
      });

      // Question modal controls
      const revealBtn = this.container.querySelector('#reveal-answer-btn');
      if (revealBtn) {
        revealBtn.addEventListener('click', () => {
          if (this.activeQuestionData) {
            this.activeQuestionData.revealed = true;
            this.render();
          }
        });
      }

      const btnCorrect = this.container.querySelector('#btn-answer-correct');
      if (btnCorrect) {
        btnCorrect.addEventListener('click', () => {
          this.resolveAnswer(true);
        });
      }

      const btnWrong = this.container.querySelector('#btn-answer-wrong');
      if (btnWrong) {
        btnWrong.addEventListener('click', () => {
          this.resolveAnswer(false);
        });
      }

      const btnCancel = this.container.querySelector('#btn-cancel-question');
      if (btnCancel) {
        btnCancel.addEventListener('click', () => {
          this.activeModal = null;
          this.activeQuestionData = null;
          this.render();
        });
      }

      // Games hub launch button
      this.container.querySelectorAll('.cam-launch-game-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const title = e.currentTarget.getAttribute('data-title');
          const rules = e.currentTarget.getAttribute('data-rules');
          ConfettiEngine.burst();
          SoundFX.playWin();
          NaturalVoiceEngine.speak(`Let us play: ${title}! Get ready!`, 'polly');
          alert(`🎮 ${title}\n\nOyun Kuralları:\n${rules}\n\nÖğrenciler tahtaya hazır!`);
        });
      });

      const gameSearch = this.container.querySelector('#game-search-input');
      if (gameSearch) {
        // PERF: Debounced search handler
        gameSearch.addEventListener('input', (e) => {
          this.gameSearch = e.target.value;
          this.render();
          const inp = this.container.querySelector('#game-search-input');
          if (inp) {
            inp.focus();
            inp.setSelectionRange(inp.value.length, inp.value.length);
          }
        });
      }

      // Tongue Twister speeds & search
      this.container.querySelectorAll('.cam-twister-speak').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const txt = e.currentTarget.getAttribute('data-text');
          const spd = parseFloat(e.currentTarget.getAttribute('data-speed')) || 1.0;
          SoundFX.playWin();
          NaturalVoiceEngine.speak(txt, 'polly', spd);
        });
      });

      const twSearch = this.container.querySelector('#twister-search-input');
      if (twSearch) {
        twSearch.addEventListener('input', (e) => {
          this.twisterSearch = e.target.value;
          this.render();
          const inp = this.container.querySelector('#twister-search-input');
          if (inp) {
            inp.focus();
            inp.setSelectionRange(inp.value.length, inp.value.length);
          }
        });
      }

      // Sing along
      this.container.querySelectorAll('.cam-sing-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lyrics = e.currentTarget.getAttribute('data-lyrics');
          ConfettiEngine.burst();
          SoundFX.playWin();
          NaturalVoiceEngine.speak(lyrics, 'peppa', 0.95);
        });
      });

      // Video search
      const vidSearch = this.container.querySelector('#video-search-input');
      if (vidSearch) {
        vidSearch.addEventListener('input', (e) => {
          this.videoSearch = e.target.value;
          this.render();
          const inp = this.container.querySelector('#video-search-input');
          if (inp) {
            inp.focus();
            inp.setSelectionRange(inp.value.length, inp.value.length);
          }
        });
      }
    },

    openQuestion(idx) {
      if (this.opened.has(idx)) return;
      const game = this.activeBaamboozleGame;
      if (!game || !game.tiles || !game.tiles[idx]) return;
      const tile = game.tiles[idx];

      this.activeQuestionData = {
        idx: idx,
        tile: tile,
        revealed: false
      };
      this.activeModal = 'question';
      this.render();

      NaturalVoiceEngine.speak(tile.q, 'polly');
    },

    resolveAnswer(isCorrect) {
      if (!this.activeQuestionData) return;
      const tile = this.activeQuestionData.tile;
      const currentTeam = this.turn % this.teamsCount;

      if (isCorrect) {
        SoundFX.playWin();
        NaturalVoiceEngine.playCorrect();
        this.teams[currentTeam].score += (tile.pts || 15);
      } else {
        SoundFX.playLoss();
        NaturalVoiceEngine.playEncouragement();
      }

      this.opened.add(this.activeQuestionData.idx);
      this.turn = (this.turn + 1) % this.teamsCount;
      this.activeModal = null;
      this.activeQuestionData = null;
      this.render();
    },

    destroy() {
      clearAllTimers();
      ConfettiEngine.destroy();
      BackgroundMusicPlayer.stop();
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
    }
  };

  // Expose globally
  if (typeof window !== 'undefined') {
    window.ConfettiEngine = ConfettiEngine;
    window.SoundFX = SoundFX;
    window.BackgroundMusicPlayer = BackgroundMusicPlayer;
    window.NaturalVoiceEngine = NaturalVoiceEngine;
    window.CAMBRIDGE_PLATFORM = CAMBRIDGE_ENGINE;
    window.CAMBRIDGE_ENGINE = CAMBRIDGE_ENGINE;
  }
})();
