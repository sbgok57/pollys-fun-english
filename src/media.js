/* ============================================================
   🔊 SES & GÖRSEL EFEKT MOTORU (Web Audio API + TTS + FX)
   Offline çalışır, harici dosya/CDN gerektirmez.
   ============================================================ */

const MEDIA = {
  ctx: null,
  voice: null,
  muted: false,

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      try {
        this.ctx = new AudioCtx();
      } catch (e) {
        // AudioContext fallback for restricted environments
      }
    }
    this.muted = !!store.get('muted');
  },

  toggleMute() {
    this.muted = !this.muted;
    store.set('muted', this.muted);
    if (this.muted) {
      this.stopSpeak();
    }
    return this.muted;
  },

  tone(freq, delay, dur, type = 'sine', gain = 0.1) {
    if (this.muted || !this.ctx) return;
    try {
      const t0 = this.ctx.currentTime + (delay || 0);
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      g.gain.setValueAtTime(gain, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur);
    } catch (e) {}
  },

  slide(startFreq, endFreq, dur, type = 'sine', gain = 0.1) {
    if (this.muted || !this.ctx) return;
    try {
      const t0 = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(startFreq, t0);
      osc.frequency.exponentialRampToValueAtTime(Math.max(10, endFreq), t0 + dur);
      g.gain.setValueAtTime(gain, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(t0);
      osc.stop(t0 + dur);
    } catch (e) {}
  },

  noise(dur, gain = 0.08) {
    if (this.muted || !this.ctx) return;
    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * dur);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const g = this.ctx.createGain();
      g.gain.setValueAtTime(gain, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + dur);
      noise.connect(g);
      g.connect(this.ctx.destination);
      noise.start();
    } catch (e) {}
  },

  fx(name) {
    if (this.muted) return;
    this.init();
    const T = (f, d, l, tp = 'sine', gn = 0.1) => this.tone(f, d, l, tp, gn);

    switch (name) {
      case 'click':
        T(800, 0, 0.03, 'triangle', 0.08);
        break;
      case 'pop':
        this.slide(400, 1100, 0.08, 'sine', 0.15);
        break;
      case 'correct':
        T(523.25, 0, 0.1, 'triangle', 0.12);
        T(659.25, 0.08, 0.1, 'triangle', 0.12);
        T(783.99, 0.16, 0.22, 'triangle', 0.14);
        break;
      case 'wrong':
        T(220, 0, 0.12, 'sawtooth', 0.1);
        T(185, 0.12, 0.25, 'sawtooth', 0.1);
        break;
      case 'hop':
        this.slide(300, 700, 0.08, 'sine', 0.12);
        break;
      case 'whoosh':
        this.noise(0.12, 0.07);
        break;
      case 'win':
        [523, 659, 784, 1047, 1319].forEach((f, i) => T(f, i * 0.09, 0.22, 'triangle', 0.12));
        break;
      case 'levelup':
        [440, 554, 659, 880].forEach((f, i) => T(f, i * 0.08, 0.2, 'sine', 0.12));
        break;
      case 'team':
        T(440, 0, 0.1, 'square', 0.1);
        T(554, 0.1, 0.1, 'square', 0.1);
        T(659, 0.2, 0.1, 'square', 0.1);
        break;
      case 'catch':
        this.slide(500, 1200, 0.14, 'triangle');
        T(1500, 0.1, 0.08);
        break;
      case 'race':
        this.slide(150, 900, 0.5, 'sawtooth', 0.09);
        this.slide(200, 1100, 0.5, 'sawtooth', 0.07);
        break;
      case 'magic':
        [1047, 1319, 1568, 2093].forEach((f, i) => T(f, i * 0.07, 0.18, 'sine', 0.14));
        break;
      case 'cheer':
        [523, 659, 784, 1047].forEach((f) => T(f, 0, 0.5, 'triangle', 0.09));
        break;
      case 'boing':
        this.slide(500, 150, 0.35, 'sine', 0.2);
        this.slide(300, 90, 0.3, 'sine', 0.12);
        break;
      case 'drip':
        T(1200, 0, 0.06, 'sine', 0.15);
        T(800, 0.05, 0.08, 'sine', 0.12);
        break;
      case 'zoom':
        this.slide(200, 2000, 0.4, 'sawtooth', 0.08);
        break;
      case 'tada':
        [392, 523, 659, 784, 1047].forEach((f, i) => T(f, i * 0.08, 0.25, 'square', 0.1));
        break;
    }
  },

  getVoice() {
    if (!window.speechSynthesis) return null;
    if (this.voice) return this.voice;
    const voices = speechSynthesis.getVoices();
    if (!voices || !voices.length) return null;
    // Prefer English voices: Google, Samantha, Daniel, or en-US/en-GB
    const en = voices.filter((v) => /^en/i.test(v.lang));
    const preferred =
      en.find((v) => /natural|samantha|karen|daniel|google/i.test(v.name)) ||
      en[0] ||
      voices[0];
    this.voice = preferred;
    return preferred;
  },

  speak(text, rate = 0.88, onEnd = null) {
    if (this.muted || !window.speechSynthesis) {
      if (onEnd) setTimeout(onEnd, 300);
      return;
    }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = this.getVoice();
      if (v) u.voice = v;
      u.rate = rate;
      u.pitch = 1.05;
      u.lang = 'en-US';
      if (onEnd) {
        u.onend = () => onEnd();
        u.onerror = () => onEnd();
      }
      speechSynthesis.speak(u);
    } catch (e) {
      if (onEnd) setTimeout(onEnd, 300);
    }
  },

  stopSpeak() {
    if (window.speechSynthesis) {
      try {
        speechSynthesis.cancel();
      } catch (e) {}
    }
  }
};

/* ============================================================
   ✨ GÖRSEL EFEKT SİSTEMİ (Parçacık, Rozet, Bildirimler)
   P1: Sınırlı bellek ve CPU tüketimi (maks 35 parçacık)
   ============================================================ */

const FX = {
  confetti(count = 45) {
    const L = document.getElementById('fxlayer');
    if (!L) return;
    const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
    const total = Math.min(60, count); // Bounded particle count
    for (let i = 0; i < total; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = rnd(100) + 'vw';
      p.style.backgroundColor = pick(colors);
      p.style.animationDuration = 1.2 + Math.random() * 1.5 + 's';
      p.style.animationDelay = Math.random() * 0.2 + 's';
      L.appendChild(p);
      setTimeout(() => p.remove(), 3000);
    }
  },

  stars(x, y) {
    const L = document.getElementById('fxlayer');
    if (!L) return;
    for (let i = 0; i < 6; i++) {
      const s = document.createElement('span');
      s.className = 'pop-star';
      s.textContent = pick(['⭐', '✨', '🌟', '💫']);
      s.style.left = (x || innerWidth / 2) + (rnd(50) - 25) + 'px';
      s.style.top = (y || innerHeight / 2) + (rnd(50) - 25) + 'px';
      L.appendChild(s);
      setTimeout(() => s.remove(), 750);
    }
  },

  notes(x, y) {
    const L = document.getElementById('fxlayer');
    if (!L) return;
    for (let i = 0; i < 4; i++) {
      const n = document.createElement('span');
      n.className = 'pop-star';
      n.textContent = pick(['🎵', '🎶', '🎼']);
      n.style.left = (x || innerWidth / 2) + (rnd(60) - 30) + 'px';
      n.style.top = (y || innerHeight / 2) + (rnd(40) - 20) + 'px';
      L.appendChild(n);
      setTimeout(() => n.remove(), 800);
    }
  },

  shake(el) {
    if (!el) return;
    el.classList.add('shake-anim');
    setTimeout(() => el.classList.remove('shake-anim'), 450);
  },

  fb(ok) {
    const flash = document.createElement('div');
    flash.className = ok ? 'fb-flash ok' : 'fb-flash no';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
  },

  mascotSay(msg, dur = 3200) {
    const m = document.getElementById('mas');
    let b = document.getElementById('mas-bubble');
    if (!b) {
      b = document.createElement('div');
      b.id = 'mas-bubble';
      b.className = 'mascot-bubble';
      document.body.appendChild(b);
    }
    b.textContent = msg;
    b.classList.add('show');
    if (this._mt) clearTimeout(this._mt);
    this._mt = setTimeout(() => {
      b.classList.remove('show');
    }, dur);
  },

  toast(msg, dur = 2200) {
    let t = document.getElementById('app-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'app-toast';
      t.className = 'app-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    if (this._tt) clearTimeout(this._tt);
    this._tt = setTimeout(() => {
      t.classList.remove('show');
    }, dur);
  }
};
