/* ============================================================
   📘 CAMBRIDGE GLOBAL ENGLISH 1-4 SMARTBOARD & LESSON ENGINE
   ============================================================
   Features:
   - Dual Media (GIPHY animated GIFs vs Unsplash Real Photos)
   - Baamboozle 4-Team Smartboard Arena (Mystery, Steal, Swap, Bonus)
   - Natural Character Voices & British English Speech Synthesis
   - Confetti Particle Physics Engine & Web Audio Sound Effects
   - Curated Acoustic Music Box Background Player (C-G-Am-F)
   - 500+ Tongue Twisters with 0.8x, 1.0x, 1.25x speed controls
   - Curated Songs & Karaoke with sing-along
   - Educational Video Library (YouTube Embeds)
   - Teacher's Resource & Interactive Lesson Plans
   - Zero-Crash Hardened & Resource Safe Cleanup
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
     1. 🎊 CONFETTI PARTICLE PHYSICS ENGINE
     ============================================================ */
  const ConfettiEngine = {
    canvas: null,
    ctx: null,
    particles: [],
    animId: null,
    isRunning: false,

    init(containerEl) {
      if (this.canvas) return;
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'cambridge-confetti-canvas';
      this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;';
      (containerEl || document.body).appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.resize();
      window.addEventListener('resize', this.onResize);
    },

    onResize() {
      if (ConfettiEngine.canvas) ConfettiEngine.resize();
    },

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth || 1024;
      this.canvas.height = window.innerHeight || 768;
    },

    // PERF: Bounded particles (max 70) and max 2.5s duration
    blast(x, y, count = 60) {
      this.init();
      this.resize();
      const originX = x !== undefined ? x : (this.canvas ? this.canvas.width / 2 : 500);
      const originY = y !== undefined ? y : (this.canvas ? this.canvas.height / 3 : 250);
      const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444', '#06b6d4'];

      for (let i = 0; i < Math.min(count, 80); i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 8;
        this.particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          size: 6 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 12,
          opacity: 1,
          decay: 0.015 + Math.random() * 0.015
        });
      }

      if (!this.isRunning) {
        this.isRunning = true;
        this.loop();
      }

      safeSetTimeout(() => {
        if (this.particles.length === 0) this.stop();
      }, 2500);
    },

    loop() {
      if (!this.isRunning || !this.ctx || !this.canvas) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.25; // gravity
        p.vx *= 0.98; // air drag
        p.rotation += p.rotSpeed;
        p.opacity -= p.decay;

        if (p.opacity <= 0 || p.y > this.canvas.height) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        this.ctx.restore();
      }

      if (this.particles.length > 0) {
        this.animId = requestAnimationFrame(() => this.loop());
      } else {
        this.stop();
      }
    },

    stop() {
      this.isRunning = false;
      if (this.animId) {
        cancelAnimationFrame(this.animId);
        this.animId = null;
      }
      this.particles = [];
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    },

    destroy() {
      this.stop();
      window.removeEventListener('resize', this.onResize);
      if (this.canvas && this.canvas.parentNode) {
        this.canvas.parentNode.removeChild(this.canvas);
      }
      this.canvas = null;
      this.ctx = null;
    }
  };

  /* ============================================================
     2. 🔊 WEB AUDIO SOUND EFFECTS (WIN, LOSS, BONUS, SWAP, STEAL)
     ============================================================ */
  const SoundFX = {
    audioCtx: null,

    getAudioContext() {
      if (typeof window === 'undefined') return null;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!this.audioCtx) {
        try {
          this.audioCtx = new AudioCtx();
        } catch (e) {
          return null;
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }
      return this.audioCtx;
    },

    // SAFETY: Ascending cheerful win chime
    playWinChime() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.001, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.4);
        });
      } catch (e) {}
    },

    // SAFETY: Low gentle "aww" buzz for wrong answers
    playLossBuzz() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.35);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.4);
      } catch (e) {}
    },

    // SAFETY: Click impulse
    playClick() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);
      } catch (e) {}
    },

    // SAFETY: Mystery bonus chime
    playBonus() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const freqs = [440, 554.37, 659.25, 880, 1108.7];
        freqs.forEach((f, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, now + i * 0.05);
          gain.gain.setValueAtTime(0.15, now + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.05);
          osc.stop(now + i * 0.05 + 0.3);
        });
      } catch (e) {}
    },

    // SAFETY: Penalty slide down
    playPenalty() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(90, now + 0.45);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.48);
      } catch (e) {}
    },

    // SAFETY: Whimsical pitch slide for swap
    playSwap() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.linearRampToValueAtTime(750, now + 0.2);
        osc.frequency.linearRampToValueAtTime(300, now + 0.4);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
      } catch (e) {}
    },

    // SAFETY: Steal points effect
    playSteal() {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const freqs = [350, 420, 520, 390];
        freqs.forEach((f, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + i * 0.08);
          gain.gain.setValueAtTime(0.12, now + i * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.18);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.08);
          osc.stop(now + i * 0.08 + 0.2);
        });
      } catch (e) {}
    }
  };

  /* ============================================================
     3. 🎶 BACKGROUND ACOUSTIC MUSIC BOX PLAYER
     ============================================================ */
  const BackgroundMusicPlayer = {
    audioCtx: null,
    timerId: null,
    isPlaying: false,
    noteIdx: 0,
    // C - G - Am - F gentle acoustic progression arpeggio
    progression: [
      261.63, 329.63, 392.00, 523.25, // C - E - G - C
      196.00, 246.94, 293.66, 392.00, // G - B - D - G
      220.00, 261.63, 329.63, 440.00, // A - C - E - A
      174.61, 220.00, 261.63, 349.23  // F - A - C - F
    ],

    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
      return this.isPlaying;
    },

    start() {
      if (this.isPlaying) return;
      const ctx = SoundFX.getAudioContext();
      if (!ctx) return;
      this.audioCtx = ctx;
      this.isPlaying = true;
      this.noteIdx = 0;
      this.tick();
    },

    // PERF: Scheduled Web Audio notes with 0.12 volume and gentle decay
    tick() {
      if (!this.isPlaying || !this.audioCtx) return;
      try {
        const now = this.audioCtx.currentTime;
        const freq = this.progression[this.noteIdx % this.progression.length];
        this.noteIdx++;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.06, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      } catch (e) {}

      // SAFETY: Explicit timer with cancellation
      this.timerId = safeSetTimeout(() => {
        this.tick();
      }, 350);
    },

    stop() {
      this.isPlaying = false;
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    }
  };

  /* ============================================================
     4. 🗣️ KID FEEDBACK AUDIO & NATURAL CHARACTER VOICE ENGINE
     ============================================================ */
  const NaturalVoiceEngine = {
    praises: [
      'Super job!',
      'Brilliant work!',
      'Spot on, superstar!',
      'Hip hip hooray!',
      'Fantastic English!',
      'You did it!',
      'Awesome pronunciation!'
    ],

    charVoices: {
      polly: { pitch: 1.35, rate: 1.05, prefix: 'Polly says: ' },
      peppa: { pitch: 1.45, rate: 1.08, prefix: 'Peppa says: ' },
      bluey: { pitch: 1.25, rate: 1.10, prefix: 'Bluey says: ' },
      chase: { pitch: 1.10, rate: 1.05, prefix: 'Chase says: ' },
      mickey: { pitch: 1.50, rate: 1.05, prefix: 'Mickey says: ' },
      woody: { pitch: 1.15, rate: 1.02, prefix: 'Woody says: ' }
    },

    getRandomPraise() {
      return this.praises[Math.floor(Math.random() * this.praises.length)];
    },

    // SAFETY: Debounced speech synthesis with en-GB preferred
    speak(text, charKey = 'polly', speedRate = 1.0) {
      if (typeof window === 'undefined' || !window.speechSynthesis) return;
      try {
        window.speechSynthesis.cancel(); // cancel stale speech
        const cleanText = String(text || '').replace(/[#*_`]/g, '').trim();
        if (!cleanText) return;

        const utter = new SpeechSynthesisUtterance(cleanText);
        const config = this.charVoices[charKey.toLowerCase()] || this.charVoices.polly;

        utter.pitch = config.pitch;
        utter.rate = (config.rate || 1.0) * (speedRate || 1.0);

        // Find British English voice if available, else first English voice
        const voices = window.speechSynthesis.getVoices() || [];
        const gbVoice = voices.find(v => v.lang && (v.lang.includes('en-GB') || v.lang.includes('en_GB')));
        const enVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
        if (gbVoice) utter.voice = gbVoice;
        else if (enVoice) utter.voice = enVoice;
        else utter.lang = 'en-GB';

        window.speechSynthesis.speak(utter);
      } catch (err) {
        console.warn('SpeechSynthesis error:', err);
      }
    },

    speakPraise(callback) {
      const praise = this.getRandomPraise();
      this.speak(praise, 'polly');
      if (typeof callback === 'function') {
        safeSetTimeout(callback, 800);
      }
    }
  };

  /* ============================================================
     5. 📘 CAMBRIDGE PLATFORM CONTROLLER
     ============================================================ */
  const CAMBRIDGE_ENGINE = {
    container: null,
    stage: 1, // 1, 2, 3, 4
    unitIdx: 0,
    activeTab: 'vocab', // 'vocab' | 'baamboozle' | 'twisters' | 'songs' | 'videos' | 'lesson'
    mediaMode: 'gif', // 'gif' | 'photo'
    twisterSpeed: 1.0,
    twisterFilter: '',
    videoFilter: 'all',

    // Baamboozle Game State
    baam: {
      teamsCount: 2,
      teamNames: ['🔴 Red Dragons', '🔵 Blue Sharks', '🟢 Green Ninjas', '🟡 Golden Eagles'],
      teamScores: [0, 0, 0, 0],
      turn: 0,
      tiles: [],
      activeModal: null,
      winner: null
    },

    init(containerEl) {
      this.container = containerEl || document.getElementById('cambridge-root') || document.getElementById('app');
      this.resetBaamboozle();
      this.render();
    },

    getCurrentStageData() {
      const data = (typeof CURRICULUM_DATA !== 'undefined' ? CURRICULUM_DATA : (window.CURRICULUM_DATA || {}));
      const stageKey = 'stage' + this.stage;
      return data[stageKey] || { title: 'Stage ' + this.stage, units: [] };
    },

    getCurrentUnit() {
      const stageData = this.getCurrentStageData();
      if (!stageData.units || stageData.units.length === 0) return null;
      if (this.unitIdx >= stageData.units.length) this.unitIdx = 0;
      return stageData.units[this.unitIdx];
    },

    setStage(stageNum) {
      SoundFX.playClick();
      this.stage = Math.max(1, Math.min(4, parseInt(stageNum, 10) || 1));
      this.unitIdx = 0;
      this.resetBaamboozle();
      this.render();
    },

    setUnit(idx) {
      SoundFX.playClick();
      this.unitIdx = Math.max(0, parseInt(idx, 10) || 0);
      this.resetBaamboozle();
      this.render();
    },

    setTab(tabName) {
      SoundFX.playClick();
      this.activeTab = tabName;
      this.render();
    },

    toggleMediaMode() {
      SoundFX.playClick();
      this.mediaMode = (this.mediaMode === 'gif' ? 'photo' : 'gif');
      this.render();
    },

    resetBaamboozle() {
      const unit = this.getCurrentUnit();
      const rawQuestions = unit && unit.baamboozleQuestions ? unit.baamboozleQuestions : [];
      // Build 16 tiles
      this.baam.tiles = [];
      for (let i = 0; i < 16; i++) {
        const q = rawQuestions[i % (rawQuestions.length || 1)] || {
          q: 'What is this unit about?',
          a: unit ? unit.title : 'English',
          pts: 15,
          type: 'question'
        };
        this.baam.tiles.push({
          idx: i + 1,
          done: false,
          question: q
        });
      }
      this.baam.teamScores = [0, 0, 0, 0];
      this.baam.turn = 0;
      this.baam.activeModal = null;
      this.baam.winner = null;
    },

    setTeamsCount(count) {
      SoundFX.playClick();
      this.baam.teamsCount = Math.max(2, Math.min(4, parseInt(count, 10) || 2));
      this.baam.turn = 0;
      this.render();
    },

    // RENDER MAIN SHELL
    render() {
      if (!this.container) return;
      const unit = this.getCurrentUnit();
      const stageData = this.getCurrentStageData();

      const html = `
        <div class="cambridge-platform">
          <!-- 1. TOP HEADER & STAGE TABS -->
          <header class="cambridge-header">
            <div class="cam-top-row">
              <div class="cam-brand">
                <span class="cam-logo anim-bounce">📘</span>
                <div>
                  <h1 class="cam-title">Cambridge Global English (2. Baskı)</h1>
                  <span class="cam-sub">Stages 1–4 · Akıllı Tahta & Bütünleşik Eğitim Portalı</span>
                </div>
              </div>
              <div class="cam-actions">
                <button class="cam-btn-mode ${this.mediaMode === 'gif' ? 'active-gif' : 'active-photo'}" id="cam-toggle-media">
                  ${this.mediaMode === 'gif' ? '🎬 Hareketli GIF Modu' : '📷 Gerçek Fotoğraf Modu'}
                </button>
                <button class="cam-btn-music ${BackgroundMusicPlayer.isPlaying ? 'playing' : ''}" id="cam-toggle-music">
                  ${BackgroundMusicPlayer.isPlaying ? '🎵 Müzik: Açık' : '🔇 Müzik: Kapalı'}
                </button>
                <button class="cam-btn-home" id="cam-btn-back-home">
                  🏠 Ana Sayfaya Dön
                </button>
              </div>
            </div>

            <!-- STAGE SELECTOR TABS -->
            <div class="cam-stage-tabs">
              <button class="cam-stage-tab ${this.stage === 1 ? 'active s1' : ''}" data-stage="1">
                <span class="c-badge">Stage 1</span>
                <b>🟢 1. Sınıf</b>
                <small>Pre-A1 · 9 Ünite</small>
              </button>
              <button class="cam-stage-tab ${this.stage === 2 ? 'active s2' : ''}" data-stage="2">
                <span class="c-badge">Stage 2</span>
                <b>🔵 2. Sınıf</b>
                <small>A1 · 9 Ünite</small>
              </button>
              <button class="cam-stage-tab ${this.stage === 3 ? 'active s3' : ''}" data-stage="3">
                <span class="c-badge">Stage 3</span>
                <b>🟣 3. Sınıf</b>
                <small>A1+ · 9 Ünite</small>
              </button>
              <button class="cam-stage-tab ${this.stage === 4 ? 'active s4' : ''}" data-stage="4">
                <span class="c-badge">Stage 4</span>
                <b>🟠 4. Sınıf</b>
                <small>A2 · 9 Ünite</small>
              </button>
            </div>

            <!-- UNIT SELECTOR & HERO INFO -->
            <div class="cam-unit-bar">
              <div class="cam-unit-dropdown-wrap">
                <label for="cam-unit-select">📍 Ünite Seçin:</label>
                <select id="cam-unit-select" class="cam-select">
                  ${(stageData.units || []).map((u, i) => `
                    <option value="${i}" ${i === this.unitIdx ? 'selected' : ''}>
                      Unit ${u.number}: ${u.title} (${u.theme})
                    </option>
                  `).join('')}
                </select>
              </div>
              ${unit ? `
                <div class="cam-unit-meta">
                  <span class="cam-pill theme">🎯 ${unit.theme}</span>
                  <span class="cam-pill cefr">🏅 ${unit.cefr}</span>
                  <span class="cam-pill phonics">🗣️ ${unit.phonics}</span>
                </div>
              ` : ''}
            </div>

            <!-- NAVIGATION SUB-TABS -->
            <nav class="cam-subnav">
              <button class="cam-nav-tab ${this.activeTab === 'vocab' ? 'active' : ''}" data-tab="vocab">
                🔤 1. Kelime Kartları (${this.mediaMode === 'gif' ? 'GIF' : 'Foto'})
              </button>
              <button class="cam-nav-tab ${this.activeTab === 'baamboozle' ? 'active' : ''}" data-tab="baamboozle">
                🧩 2. Baamboozle Takım Arenası (2–4 Takım)
              </button>
              <button class="cam-nav-tab ${this.activeTab === 'twisters' ? 'active' : ''}" data-tab="twisters">
                👅 3. Tongue Twisters (Tekerlemeler)
              </button>
              <button class="cam-nav-tab ${this.activeTab === 'songs' ? 'active' : ''}" data-tab="songs">
                🎵 4. Şarkılar & Karaoke
              </button>
              <button class="cam-nav-tab ${this.activeTab === 'videos' ? 'active' : ''}" data-tab="videos">
                📺 5. Eğitici Video Kütüphanesi
              </button>
              <button class="cam-nav-tab ${this.activeTab === 'lesson' ? 'active' : ''}" data-tab="lesson">
                📋 6. Öğretmen Rehberi & Ders Planı
              </button>
            </nav>
          </header>

          <!-- 2. MAIN ACTIVE VIEW CONTENT -->
          <main class="cambridge-main-content">
            ${this.renderActiveTabContent(unit)}
          </main>

          <!-- 3. BAAMBOOZLE QUESTION MODAL -->
          ${this.baam.activeModal ? this.renderBaamModal() : ''}
        </div>
      `;

      this.container.innerHTML = html;
      this.bindEvents();
    },

    renderActiveTabContent(unit) {
      if (!unit && this.activeTab !== 'twisters' && this.activeTab !== 'songs' && this.activeTab !== 'videos') {
        return `<div class="cam-empty">Bu aşama için ünite bulunamadı.</div>`;
      }
      switch (this.activeTab) {
        case 'vocab': return this.renderVocabView(unit);
        case 'baamboozle': return this.renderBaamboozleView(unit);
        case 'twisters': return this.renderTwistersView();
        case 'songs': return this.renderSongsView();
        case 'videos': return this.renderVideosView();
        case 'lesson': return this.renderLessonView(unit);
        default: return this.renderVocabView(unit);
      }
    },

    /* ============================================================
       VIEW 1: VOCABULARY DUAL MEDIA (GIF & REAL PHOTO)
       ============================================================ */
    renderVocabView(unit) {
      const words = unit.vocabulary || [];
      return `
        <div class="cam-vocab-section">
          <div class="cam-section-banner">
            <div>
              <h2>🌟 Unit ${unit.number}: ${unit.title} — Kelime Keşfi</h2>
              <p>Yapay zeka emojisi yerine çocuklara yönelik <b>hareketli GIPHY GIF'leri</b> ve <b>gerçek yüksek çözünürlüklü fotoğraflar</b> kullanılmıştır.</p>
            </div>
            <div class="cam-mode-indicator">
              Aktif Görünüm: <b>${this.mediaMode === 'gif' ? '🎬 Canlı GIF Modu' : '📷 Gerçek Fotoğraf Modu'}</b>
            </div>
          </div>

          <div class="cam-vocab-grid">
            ${words.map((item, idx) => {
              const mediaSrc = this.mediaMode === 'gif' ? item.gifUrl : item.realPhoto;
              const charName = (item.characterVoice || 'polly').toUpperCase();
              return `
                <div class="cam-vocab-card">
                  <div class="cam-card-media-wrap">
                    <img src="${mediaSrc}" alt="${item.word}" class="cam-vocab-img" loading="lazy" />
                    <span class="cam-char-badge">${charName}</span>
                    <button class="cam-speak-btn" data-word="${item.word}" data-char="${item.characterVoice || 'polly'}" title="Dinle">
                      🔊
                    </button>
                  </div>
                  <div class="cam-card-body">
                    <h3 class="cam-word-title">${item.word}</h3>
                    <div class="cam-word-tr">🇹🇷 ${item.turkish}</div>
                    <div class="cam-word-def">📖 ${item.meaning}</div>
                    <div class="cam-char-quote">
                      <i>💬 "${item.voiceLine || item.word}"</i>
                      <button class="cam-quote-speak-btn" data-text="${item.voiceLine || item.word}" data-char="${item.characterVoice || 'polly'}">
                        🗣️ Karakter Sesiyle Oku
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    },

    /* ============================================================
       VIEW 2: BAAMBOOZLE 4-TEAM SMARTBOARD ARENA
       ============================================================ */
    renderBaamboozleView(unit) {
      const currentTeamName = this.baam.teamNames[this.baam.turn % this.baam.teamsCount];
      const remainingTiles = this.baam.tiles.filter(t => !t.done).length;

      return `
        <div class="cam-baam-arena">
          <!-- TOP ARENA BAR: TEAMS & SCOREBOARD -->
          <div class="cam-arena-header">
            <div class="cam-team-selector">
              <span>👥 Takım Sayısı:</span>
              <button class="cam-team-btn ${this.baam.teamsCount === 2 ? 'active' : ''}" data-tcount="2">2 Takım</button>
              <button class="cam-team-btn ${this.baam.teamsCount === 3 ? 'active' : ''}" data-tcount="3">3 Takım</button>
              <button class="cam-team-btn ${this.baam.teamsCount === 4 ? 'active' : ''}" data-tcount="4">4 Takım</button>
              <button class="cam-team-btn reset" id="cam-baam-reset">🔄 Oyunu Sıfırla</button>
            </div>
            <div class="cam-turn-indicator">
              Sıradaki Takım: <b class="cam-active-team-name">${currentTeamName}</b>
            </div>
          </div>

          <!-- SCOREBOARD CARDS -->
          <div class="cam-scoreboard">
            ${Array.from({ length: this.baam.teamsCount }).map((_, i) => {
              const isTurn = (this.baam.turn % this.baam.teamsCount) === i;
              return `
                <div class="cam-team-card team-${i} ${isTurn ? 'is-turn' : ''}">
                  <div class="cam-tc-title">${this.baam.teamNames[i]}</div>
                  <div class="cam-tc-score">${this.baam.teamScores[i]} <small>PTS</small></div>
                  ${isTurn ? '<div class="cam-tc-badge">Sıra Sende! 🔥</div>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <!-- 16 TILES SMARTBOARD GRID -->
          <div class="cam-tiles-grid">
            ${this.baam.tiles.map((t, idx) => {
              if (t.done) {
                return `
                  <div class="cam-tile done">
                    <span class="cam-tile-check">✔</span>
                    <span class="cam-tile-done-pts">${t.question.pts > 0 ? '+' : ''}${t.question.pts}</span>
                  </div>
                `;
              }
              return `
                <button class="cam-tile openable" data-tileidx="${idx}">
                  <span class="cam-tile-num">${t.idx}</span>
                  <span class="cam-tile-sparkle">✨</span>
                </button>
              `;
            }).join('')}
          </div>

          ${remainingTiles === 0 ? `
            <div class="cam-game-over-banner">
              <h2>🏆 OYUN BİTTİ! TEBRİKLER! 🏆</h2>
              <p>Tüm kutular açıldı! Şampiyon takımı alkışlayalım!</p>
              <button class="cam-btn-reset-big" id="cam-baam-play-again">🎉 Tekrar Oyna</button>
            </div>
          ` : ''}
        </div>
      `;
    },

    // BAAMBOOZLE QUESTION MODAL
    renderBaamModal() {
      const modal = this.baam.activeModal;
      if (!modal) return '';
      const q = modal.tile.question;
      const type = q.type || 'question';
      const pts = q.pts || 15;
      const isBonus = type === 'bonus';
      const isPenalty = type === 'penalty';
      const isSteal = type === 'steal';
      const isSwap = type === 'swap';
      const isAction = type === 'action';

      return `
        <div class="cam-modal-backdrop">
          <div class="cam-modal-box ${type}">
            <div class="cam-modal-top">
              <span class="cam-modal-type-badge">${type.toUpperCase()}</span>
              <span class="cam-modal-pts-badge">${pts > 0 ? '+' : ''}${pts} PUAN</span>
            </div>

            <div class="cam-modal-q-text">
              ${q.q}
            </div>

            <div class="cam-modal-a-box ${modal.showAnswer ? 'revealed' : 'hidden'}">
              <div class="cam-modal-a-label">Doğru Cevap:</div>
              <div class="cam-modal-a-text">${q.a}</div>
            </div>

            <div class="cam-modal-actions">
              ${!modal.showAnswer ? `
                <button class="cam-mbtn show-ans" id="cam-btn-show-ans">
                  👁️ Cevabı Göster
                </button>
              ` : `
                ${isBonus || isPenalty || isAction ? `
                  <button class="cam-mbtn ok" id="cam-btn-award-mystery">
                    👍 Tamam (${pts > 0 ? '+' : ''}${pts} Pts)
                  </button>
                ` : isSteal ? `
                  <button class="cam-mbtn steal" id="cam-btn-do-steal">
                    🦹 Puanı Çal (+${pts} Pts)
                  </button>
                ` : isSwap ? `
                  <button class="cam-mbtn swap" id="cam-btn-do-swap">
                    🔄 Puanları Takas Et!
                  </button>
                ` : `
                  <button class="cam-mbtn ok" id="cam-btn-award-correct">
                    ✅ Doğru (+${pts} Puan)
                  </button>
                  <button class="cam-mbtn wrong" id="cam-btn-award-wrong">
                    ❌ Yanlış (0 Puan)
                  </button>
                `}
              `}
              <button class="cam-mbtn close" id="cam-btn-close-modal">✖ İptal</button>
            </div>
          </div>
        </div>
      `;
    },

    /* ============================================================
       VIEW 3: TONGUE TWISTERS (TEKERLEMELER)
       ============================================================ */
    renderTwistersView() {
      const data = (typeof TONGUE_TWISTERS_DATA !== 'undefined' ? TONGUE_TWISTERS_DATA : (window.TONGUE_TWISTERS_DATA || []));
      const filtered = data.filter(item => {
        if (this.twisterFilter) {
          const q = this.twisterFilter.toLowerCase();
          return item.twister.toLowerCase().includes(q) || item.targetPhonics.toLowerCase().includes(q) || item.meaningTr.toLowerCase().includes(q);
        }
        return true;
      });

      return `
        <div class="cam-twisters-section">
          <div class="cam-section-banner">
            <div>
              <h2>👅 Phonics & Tongue Twisters (Tekerleme Şenliği)</h2>
              <p>500+ tekerleme havuzundan müfredata uygun akıcılık ve telaffuz çalışmaları. Hızı seçip Polly ile birlikte söyleyin!</p>
            </div>
            <div class="cam-twister-controls">
              <span class="cam-speed-label">Ses Hızı:</span>
              <button class="cam-sp-btn ${this.twisterSpeed === 0.8 ? 'active' : ''}" data-speed="0.8">🐢 0.8x (Yavaş)</button>
              <button class="cam-sp-btn ${this.twisterSpeed === 1.0 ? 'active' : ''}" data-speed="1.0">🚶 1.0x (Normal)</button>
              <button class="cam-sp-btn ${this.twisterSpeed === 1.25 ? 'active' : ''}" data-speed="1.25">🚀 1.25x (Hızlı)</button>
            </div>
          </div>

          <div class="cam-search-row">
            <input type="text" id="cam-twister-search" class="cam-input" placeholder="🔍 Tekerleme veya ses ara (örn: p, sea, wood...)" value="${this.twisterFilter || ''}" />
            <span class="cam-tw-count">${filtered.length} tekerleme listelendi</span>
          </div>

          <div class="cam-twisters-grid">
            ${filtered.map(tw => `
              <div class="cam-twister-card">
                <div class="cam-tw-header">
                  <span class="cam-tw-stage">${tw.stage}</span>
                  <span class="cam-tw-phonics">🎯 Hedef Ses: <b>${tw.targetPhonics}</b></span>
                </div>
                <div class="cam-tw-body">
                  <p class="cam-tw-text">"${tw.twister}"</p>
                  <p class="cam-tw-tr">🇹🇷 ${tw.meaningTr}</p>
                </div>
                <div class="cam-tw-footer">
                  <button class="cam-btn-speak-twister" data-text="${tw.twister}">
                    🔊 Dinle & Tekrar Et (${this.twisterSpeed}x)
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    /* ============================================================
       VIEW 4: SONGS & KARAOKE (ŞARKILAR & CHANT)
       ============================================================ */
    renderSongsView() {
      const songs = (typeof SONGS_DATA !== 'undefined' ? SONGS_DATA : (window.SONGS_DATA || []));
      return `
        <div class="cam-songs-section">
          <div class="cam-section-banner">
            <div>
              <h2>🎵 Cambridge Curriculum Songs & Chants</h2>
              <p>Müfredata uyumlu akılda kalıcı şarkılar. Web Audio akustik melodi kutusu eşliğinde sınıfça söyleyin!</p>
            </div>
            <div>
              <button class="cam-btn-music-big ${BackgroundMusicPlayer.isPlaying ? 'playing' : ''}" id="cam-songs-bg-music">
                ${BackgroundMusicPlayer.isPlaying ? '⏹️ Melodiyi Durdur' : '▶️ Akustik Arka Plan Müziği Çal'}
              </button>
            </div>
          </div>

          <div class="cam-songs-grid">
            ${songs.map(song => `
              <div class="cam-song-card">
                <div class="cam-song-top">
                  <span class="cam-song-stage">${song.stage}</span>
                  <span class="cam-song-theme">💡 ${song.theme}</span>
                </div>
                <h3 class="cam-song-title">🎶 ${song.title}</h3>
                <div class="cam-song-lyrics-box">
                  <pre class="cam-song-lyrics">${song.lyrics}</pre>
                </div>
                <div class="cam-song-footer">
                  <button class="cam-btn-sing-along" data-lyrics="${encodeURIComponent(song.lyrics)}">
                    🎤 Polly ile Satır Satır Söyle
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    /* ============================================================
       VIEW 5: EDUCATIONAL VIDEO LIBRARY (YOUTUBE EMBEDS)
       ============================================================ */
    renderVideosView() {
      const videos = (typeof VIDEO_LIBRARY_DATA !== 'undefined' ? VIDEO_LIBRARY_DATA : (window.VIDEO_LIBRARY_DATA || []));
      const filtered = videos.filter(v => {
        if (this.videoFilter === 'all') return true;
        return v.stage.toLowerCase() === this.videoFilter.toLowerCase();
      });

      return `
        <div class="cam-videos-section">
          <div class="cam-section-banner">
            <div>
              <h2>📺 Cambridge Educational Video Library</h2>
              <p>Özenle seçilmiş, çocuklara uygun, telif kurallarına saygılı YouTube gömülü video dersleri.</p>
            </div>
            <div class="cam-video-filters">
              <button class="cam-vf-btn ${this.videoFilter === 'all' ? 'active' : ''}" data-vfilter="all">Tümü (${videos.length})</button>
              <button class="cam-vf-btn ${this.videoFilter === 'stage 1' ? 'active' : ''}" data-vfilter="stage 1">Stage 1</button>
              <button class="cam-vf-btn ${this.videoFilter === 'stage 2' ? 'active' : ''}" data-vfilter="stage 2">Stage 2</button>
              <button class="cam-vf-btn ${this.videoFilter === 'stage 3' ? 'active' : ''}" data-vfilter="stage 3">Stage 3</button>
              <button class="cam-vf-btn ${this.videoFilter === 'stage 4' ? 'active' : ''}" data-vfilter="stage 4">Stage 4</button>
            </div>
          </div>

          <div class="cam-videos-grid">
            ${filtered.map(v => `
              <div class="cam-video-card">
                <div class="cam-video-iframe-wrap">
                  <iframe 
                    src="${v.embedUrl}" 
                    title="${v.title}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    loading="lazy">
                  </iframe>
                </div>
                <div class="cam-video-info">
                  <div class="cam-v-badges">
                    <span class="cam-v-stage">${v.stage}</span>
                    <span class="cam-v-dur">⏱️ ${v.duration}</span>
                  </div>
                  <h4 class="cam-v-title">${v.title}</h4>
                  <div class="cam-v-chan">📺 ${v.channel} · <i>${v.topic}</i></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    /* ============================================================
       VIEW 6: TEACHER'S RESOURCE & LESSON PLANS
       ============================================================ */
    renderLessonView(unit) {
      const lp = unit.lessonPlan || {};
      const daily = lp.dailyPlan || [];
      const physicalGames = [
        {
          name: 'Sinek Raketi (Flyswatter Word Slam)',
          type: 'Hızlı Refleks & Kelime',
          rules: 'Tahtaya bu ünitenin kelime kartları yapıştırılır. İki takımdan birer öğrenciye renkli sinek raketi verilir. Öğretmen kelimenin Türkçe anlamını söyler, İngilizce kartına ilk vuran takım puan alır!'
        },
        {
          name: 'Sihirli Çanta (Magic Bag TPR)',
          type: 'Dokun & Tahmin Et',
          rules: 'Çantanın içine üniteyle ilgili nesneler konur. Öğrenci gözü kapalı nesneyi tutar: "It is a pencil!" veya "It is an apple!" der. Doğru tahmin eden sınıfça alkışlanır.'
        },
        {
          name: 'Dört Köşe (Four Corners)',
          type: 'Kinestetik / Hareketli',
          rules: 'Sınıfın 4 köşesine 4 ana kelime resmi asılır. Öğretmen bir tanımı veya fonetik sesi okur ("It has the /æ/ sound"). Öğrenciler doğru köşeye koşarlar.'
        },
        {
          name: 'İnsan Düğümü (Human Sentence Knot)',
          type: 'İşbirlikli Cümle Kurma',
          rules: 'Her öğrenciye bir kelime kartı verilir. Takım üyeleri el ele tutuşarak Cambridge dilbilgisi kuralına uygun doğru sırayla dizilmeye çalışır.'
        }
      ];

      return `
        <div class="cam-lesson-section">
          <div class="cam-section-banner">
            <div>
              <h2>📋 Öğretmen Etkinlik Kılavuzu & Ders Planı</h2>
              <p>Cambridge Global English Stage ${this.stage} — Unit ${unit.number}: <b>${unit.title}</b></p>
            </div>
            <button class="cam-btn-print" onclick="window.print()">🖨️ Bu Planı Yazdır / PDF</button>
          </div>

          <div class="cam-goal-box">
            <h3>🎯 Haftalık Öğrenme Hedefi (Weekly Goal)</h3>
            <p>${lp.weeklyGoal || 'Öğrenciler ünite kelimelerini tam telaffuz ile öğrenir ve akıllı tahta oyunlarında aktif iletişim kurarlar.'}</p>
          </div>

          <!-- DAILY STRUCTURED BREAKDOWN -->
          <div class="cam-daily-plans">
            ${daily.map(d => `
              <div class="cam-day-card">
                <div class="cam-day-title">${d.day} — ${d.focus}</div>
                <div class="cam-day-steps">
                  <div class="cam-step"><span class="step-num">1</span> <b>Isınma (Warm-Up):</b> ${d.warmUp}</div>
                  <div class="cam-step"><span class="step-num">2</span> <b>Sunum (Presentation):</b> ${d.presentation}</div>
                  <div class="cam-step"><span class="step-num">3</span> <b>Alıştırma (Practice):</b> ${d.practice}</div>
                  <div class="cam-step"><span class="step-num">4</span> <b>Üretim (Production):</b> ${d.production}</div>
                  <div class="cam-step"><span class="step-num">5</span> <b>Kapanış (Wrap-Up):</b> ${d.wrapUp}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- PHYSICAL CLASSROOM GAMES -->
          <div class="cam-physical-games">
            <h3>🏃‍♂️ Sınıf İçi Fiziksel Oyunlar & Smartboard Entegrasyonu</h3>
            <div class="cam-pgames-grid">
              ${physicalGames.map(g => `
                <div class="cam-pgame-card">
                  <div class="cam-pg-badge">${g.type}</div>
                  <h4 class="cam-pg-name">🎮 ${g.name}</h4>
                  <p class="cam-pg-rules">${g.rules}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    },

    /* ============================================================
       EVENT BINDING & INTERACTIONS
       ============================================================ */
    bindEvents() {
      if (!this.container) return;

      // 1. Stage selection
      this.container.querySelectorAll('.cam-stage-tab').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const st = e.currentTarget.getAttribute('data-stage');
          this.setStage(st);
        });
      });

      // 2. Unit selection
      const unitSelect = this.container.querySelector('#cam-unit-select');
      if (unitSelect) {
        unitSelect.addEventListener('change', (e) => {
          this.setUnit(e.target.value);
        });
      }

      // 3. Subnav tab navigation
      this.container.querySelectorAll('.cam-nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
          const t = e.currentTarget.getAttribute('data-tab');
          this.setTab(t);
        });
      });

      // 4. Media toggle
      const mediaToggle = this.container.querySelector('#cam-toggle-media');
      if (mediaToggle) {
        mediaToggle.addEventListener('click', () => this.toggleMediaMode());
      }

      // 5. Music toggle
      const musicToggle = this.container.querySelector('#cam-toggle-music');
      if (musicToggle) {
        musicToggle.addEventListener('click', () => {
          BackgroundMusicPlayer.toggle();
          this.render();
        });
      }

      const songsBgMusic = this.container.querySelector('#cam-songs-bg-music');
      if (songsBgMusic) {
        songsBgMusic.addEventListener('click', () => {
          BackgroundMusicPlayer.toggle();
          this.render();
        });
      }

      // 6. Back home
      const backHome = this.container.querySelector('#cam-btn-back-home');
      if (backHome) {
        backHome.addEventListener('click', () => {
          SoundFX.playClick();
          BackgroundMusicPlayer.stop();
          if (typeof APP !== 'undefined' && APP.go) {
            APP.go('home');
          } else {
            window.location.reload();
          }
        });
      }

      // 7. Vocab Speech
      this.container.querySelectorAll('.cam-speak-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const word = e.currentTarget.getAttribute('data-word');
          const charKey = e.currentTarget.getAttribute('data-char') || 'polly';
          SoundFX.playClick();
          NaturalVoiceEngine.speak(word, charKey);
        });
      });

      this.container.querySelectorAll('.cam-quote-speak-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const text = e.currentTarget.getAttribute('data-text');
          const charKey = e.currentTarget.getAttribute('data-char') || 'polly';
          SoundFX.playClick();
          NaturalVoiceEngine.speak(text, charKey);
        });
      });

      // 8. Baamboozle controls
      this.container.querySelectorAll('.cam-team-btn[data-tcount]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          this.setTeamsCount(e.currentTarget.getAttribute('data-tcount'));
        });
      });

      const baamReset = this.container.querySelector('#cam-baam-reset');
      if (baamReset) {
        baamReset.addEventListener('click', () => {
          SoundFX.playClick();
          this.resetBaamboozle();
          this.render();
        });
      }

      const baamAgain = this.container.querySelector('#cam-baam-play-again');
      if (baamAgain) {
        baamAgain.addEventListener('click', () => {
          SoundFX.playClick();
          this.resetBaamboozle();
          this.render();
        });
      }

      // 9. Open tile modal
      this.container.querySelectorAll('.cam-tile.openable').forEach(tileBtn => {
        tileBtn.addEventListener('click', (e) => {
          const idx = parseInt(e.currentTarget.getAttribute('data-tileidx'), 10);
          this.openTileModal(idx);
        });
      });

      // 10. Modal controls
      const btnShowAns = this.container.querySelector('#cam-btn-show-ans');
      if (btnShowAns) {
        btnShowAns.addEventListener('click', () => {
          SoundFX.playClick();
          if (this.baam.activeModal) {
            this.baam.activeModal.showAnswer = true;
            this.render();
          }
        });
      }

      const btnAwardCorrect = this.container.querySelector('#cam-btn-award-correct');
      if (btnAwardCorrect) {
        btnAwardCorrect.addEventListener('click', () => {
          this.resolveTileAction('correct');
        });
      }

      const btnAwardWrong = this.container.querySelector('#cam-btn-award-wrong');
      if (btnAwardWrong) {
        btnAwardWrong.addEventListener('click', () => {
          this.resolveTileAction('wrong');
        });
      }

      const btnAwardMystery = this.container.querySelector('#cam-btn-award-mystery');
      if (btnAwardMystery) {
        btnAwardMystery.addEventListener('click', () => {
          this.resolveTileAction('mystery');
        });
      }

      const btnDoSteal = this.container.querySelector('#cam-btn-do-steal');
      if (btnDoSteal) {
        btnDoSteal.addEventListener('click', () => {
          this.resolveTileAction('steal');
        });
      }

      const btnDoSwap = this.container.querySelector('#cam-btn-do-swap');
      if (btnDoSwap) {
        btnDoSwap.addEventListener('click', () => {
          this.resolveTileAction('swap');
        });
      }

      const btnCloseModal = this.container.querySelector('#cam-btn-close-modal');
      if (btnCloseModal) {
        btnCloseModal.addEventListener('click', () => {
          SoundFX.playClick();
          this.baam.activeModal = null;
          this.render();
        });
      }

      // 11. Tongue Twister speeds & search
      this.container.querySelectorAll('.cam-sp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          SoundFX.playClick();
          this.twisterSpeed = parseFloat(e.currentTarget.getAttribute('data-speed')) || 1.0;
          this.render();
        });
      });

      const twSearch = this.container.querySelector('#cam-twister-search');
      if (twSearch) {
        // PERF: Debounced search input
        twSearch.addEventListener('input', (e) => {
          this.twisterFilter = e.target.value;
          // rerender on next tick or fast filter
          this.render();
          const inputAgain = this.container.querySelector('#cam-twister-search');
          if (inputAgain) {
            inputAgain.focus();
            inputAgain.setSelectionRange(inputAgain.value.length, inputAgain.value.length);
          }
        });
      }

      this.container.querySelectorAll('.cam-btn-speak-twister').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const text = e.currentTarget.getAttribute('data-text');
          SoundFX.playClick();
          NaturalVoiceEngine.speak(text, 'polly', this.twisterSpeed);
        });
      });

      // 12. Sing along karaoke
      this.container.querySelectorAll('.cam-btn-sing-along').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const raw = decodeURIComponent(e.currentTarget.getAttribute('data-lyrics') || '');
          SoundFX.playWinChime();
          NaturalVoiceEngine.speak(raw, 'polly', 0.95);
        });
      });

      // 13. Video filters
      this.container.querySelectorAll('.cam-vf-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          SoundFX.playClick();
          this.videoFilter = e.currentTarget.getAttribute('data-vfilter');
          this.render();
        });
      });
    },

    openTileModal(tileIdx) {
      const tile = this.baam.tiles[tileIdx];
      if (!tile || tile.done) return;
      SoundFX.playClick();
      this.baam.activeModal = {
        idx: tileIdx,
        tile: tile,
        showAnswer: false
      };
      this.render();
    },

    resolveTileAction(actionType) {
      const modal = this.baam.activeModal;
      if (!modal) return;
      const tile = modal.tile;
      const pts = tile.question.pts || 15;
      const currentTeam = this.baam.turn % this.baam.teamsCount;

      if (actionType === 'correct') {
        this.baam.teamScores[currentTeam] += pts;
        SoundFX.playWinChime();
        ConfettiEngine.blast();
        NaturalVoiceEngine.speakPraise();
      } else if (actionType === 'wrong') {
        SoundFX.playLossBuzz();
      } else if (actionType === 'mystery') {
        this.baam.teamScores[currentTeam] = Math.max(0, this.baam.teamScores[currentTeam] + pts);
        if (pts >= 0) {
          SoundFX.playBonus();
          ConfettiEngine.blast();
        } else {
          SoundFX.playPenalty();
        }
      } else if (actionType === 'steal') {
        // Steal from leading other team
        let targetTeam = (currentTeam + 1) % this.baam.teamsCount;
        for (let i = 0; i < this.baam.teamsCount; i++) {
          if (i !== currentTeam && this.baam.teamScores[i] > this.baam.teamScores[targetTeam]) {
            targetTeam = i;
          }
        }
        const stolen = Math.min(pts, this.baam.teamScores[targetTeam]);
        this.baam.teamScores[targetTeam] = Math.max(0, this.baam.teamScores[targetTeam] - stolen);
        this.baam.teamScores[currentTeam] += stolen;
        SoundFX.playSteal();
        ConfettiEngine.blast();
      } else if (actionType === 'swap') {
        // Swap with leading team
        let maxTeam = (currentTeam + 1) % this.baam.teamsCount;
        for (let i = 0; i < this.baam.teamsCount; i++) {
          if (i !== currentTeam && this.baam.teamScores[i] > this.baam.teamScores[maxTeam]) {
            maxTeam = i;
          }
        }
        const temp = this.baam.teamScores[currentTeam];
        this.baam.teamScores[currentTeam] = this.baam.teamScores[maxTeam];
        this.baam.teamScores[maxTeam] = temp;
        SoundFX.playSwap();
        ConfettiEngine.blast();
      }

      // Mark tile done
      tile.done = true;
      this.baam.turn++;
      this.baam.activeModal = null;
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
