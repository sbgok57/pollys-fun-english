/* ============================================================
   🔊 SES & GÖRSEL EFEKT MOTORU (Web Audio API + TTS + FX)
   Offline çalışır, harici dosya/CDN gerektirmez.
   ============================================================ */

/* 🎵 Bilinen mevcut ses dosyaları (404 kalkanı — diskte olmayan dosya ağdan istenmez) */
const AVAILABLE_AUDIO = new Set([
  'beat0', 'beat1', 'beat2', 'beat3', 'beat4', 'beat5',
  'mel-frere', 'mel-happy', 'mel-head', 'mel-hotcross',
  'mel-london', 'mel-mary', 'mel-oldmac', 'mel-rain',
  'mel-row', 'mel-ten', 'mel-twinkle', 'mel-wheels'
]);

const MEDIA = {
  ctx: null,
  voice: null,
  muted: false,

  init() {
    if (this.ctx) {
      try {
        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
      } catch (e) {}
      return;
    }
    try {
      const AudioCtx = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    } catch (e) {
      // AudioContext fallback for restricted environments
    }
    try {
      this.muted = !!store.get('muted');
    } catch (e) {}
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

  /* 🎵 Gömülü ses dosyaları (audio/ klasörü — yoksa sessizce TTS'e döner) */
  ac: {},
  playFile(name, vol, loop) {
    try {
      vol = vol == null ? 1 : vol;
      if (this.muted) return null;

      // // SAFETY: Prevent network 404s by verifying file exists in bundled audio or VOICESET
      const isBundleAudio = typeof AVAILABLE_AUDIO !== 'undefined' && AVAILABLE_AUDIO.has(name);
      const isVoiceWord = typeof VOICESET !== 'undefined' && VOICESET.has(name);
      if (!isBundleAudio && !isVoiceWord) {
        return null;
      }

      let a = this.ac[name];
      if (!a) {
        // // PERF: Bellek sınırlandırması (Maksimum 35 eşzamanlı ses nesnesi)
        const keys = Object.keys(this.ac);
        if (keys.length >= 35) {
          const pruneKey = keys.find((k) => this.ac[k] && this.ac[k].paused && !this.ac[k].loop) || keys[0];
          try {
            this.ac[pruneKey].pause();
            this.ac[pruneKey].src = '';
          } catch (e) {}
          delete this.ac[pruneKey];
        }
        a = new Audio('audio/' + name + '.mp3');
        this.ac[name] = a;
        try { a.addEventListener('error', () => { this.ac[name] = false; }, { once: true }); } catch (e) {}
      }
      try { a.currentTime = 0; } catch (e) {}
      try { a.volume = vol; a.loop = !!loop; } catch (e) {}
      try { a.addEventListener('error', () => { a.__pfe = 1; }, { once: true }); } catch (e) {} /* doğal error bayrağı */
      const pr = a.play();
      if (pr && pr.catch) {
        pr.catch(() => {
          /* 🛡️ çalma reddedilirse (otomatik oynatma ilkesi / dosya yok / ağ yok)
             ve 80 ms içinde doğal 'error' olayı gelmezse: bir KEZ yapay error tetikle
             → onended/onerror zincirlerine bağlanan motorlar ASLA takılı kalmaz */
          setTimeout(() => {
            try {
              if (!a.__pfe) {
                a.__pfe = 1;
                a.dispatchEvent(new Event('error'));
              }
            } catch (e) {}
          }, 80);
        });
      }
      return a;
    } catch (e) {
      return null;
    }
  },
  stopMusic(a) {
    try {
      if (a) {
        a.pause();
        a.currentTime = 0;
      }
    } catch (e) {}
  },
  praise() {
    const cheers = [
      { char: 'mickey', quote: 'Hot dog! You did it, pal! Outstanding!', fx: 'win' },
      { char: 'buzz', quote: 'To infinity and beyond! Brilliant work, Space Ranger!', fx: 'magic' },
      { char: 'elsa', quote: 'Sparkling brilliance! Magical answer!', fx: 'magic' },
      { char: 'woody', quote: 'Yee-haw! You are my favorite deputy! Great job!', fx: 'win' },
      { char: 'olaf', quote: 'Warm hugs for that wonderful answer!', fx: 'pop' },
      { char: 'bluey', quote: 'For real life?! Hooray! That was super duper!', fx: 'cheer' },
      { char: 'peppa', quote: 'Brilliant! Splish splash, absolutely fantastic!', fx: 'pop' },
      { char: 'chase', quote: 'Chase is on the case! Perfect solve, team!', fx: 'tada' },
      { char: 'simba', quote: 'Roar! Hakuna Matata! You are the king of words!', fx: 'win' },
      { char: 'polly', quote: 'Squawk! Superstar! You are learning so fast!', fx: 'win' }
    ];
    const item = cheers[Math.floor(Math.random() * cheers.length)];
    this.fx(item.fx);
    if (typeof FX !== 'undefined' && FX.mascotSay) {
      const prof = (this.disneyProfiles && this.disneyProfiles[item.char]) || {};
      FX.mascotSay((prof.label || 'Mascot') + ': "' + item.quote + '"');
    }
    this.speakCharacter(item.char, item.quote, null, 0.95);
    return null;
  },

  /* 🚫 Robotik, mekanik, fısıltılı veya eski sistem seslerini filtreleme */
  isRoboticVoice(v) {
    if (!v) return true;
    const name = String(v.name || '').toLowerCase();
    const lang = String(v.lang || '').toLowerCase();
    if (!/^en/i.test(lang)) return true;
    const robotPattern = /(albert|fred|ralph|junior|kathy|victoria|vicki|bruce|bad news|good news|bahh|bells|boing|bubbles|cellos|deranged|hysterical|jester|organ|superstar|trinoids|whisper|wobble|zarvox|david|zira|mark|hazel|george|desktop|espeak|festival|mbrola|sample|compact|mechanical|robot)/i;
    return robotPattern.test(name);
  },

  /* 🌟 Neşeli, doğal ve çocuklara uygun insan sesi puanlama motoru */
  getVoiceScore(v) {
    if (!v || this.isRoboticVoice(v)) return -1000;
    const name = String(v.name || '');
    const lang = String(v.lang || '');
    let score = 50;

    // 🏆 En neşeli, doğal çocuk ve öğretmen sesleri (Polly için mükemmel insan sesleri)
    if (/maisie/i.test(name)) score += 130; // Neşeli İngiliz çocuk sesi
    else if (/ana\b/i.test(name) && /natural/i.test(name)) score += 125; // Neşeli ABD çocuk sesi
    else if (/flo\b/i.test(name)) score += 120; // Canlı, neşeli Apple insan sesi
    else if (/sandy\b/i.test(name)) score += 115; // Sıcak & neşeli Apple insan sesi
    else if (/samantha\b/i.test(name)) score += 110; // Doğal ve neşeli Apple sesi
    else if (/shelley\b/i.test(name)) score += 105; // Neşeli Apple sesi
    else if (/serena\b/i.test(name)) score += 100; // Doğal İngiliz öğretmen sesi
    else if (/sonia\b/i.test(name)) score += 96; // Güler yüzlü İngiliz sesi
    else if (/libby\b/i.test(name)) score += 94; // Sevimli İngiliz sesi
    else if (/jenny\b/i.test(name)) score += 92; // Doğal ve neşeli ABD sesi
    else if (/aria\b/i.test(name)) score += 90; // Canlı ve neşeli ABD sesi
    else if (/ava\b/i.test(name)) score += 88; // Doğal akıcı ses
    else if (/zoe\b/i.test(name)) score += 86; // Canlı ve enerjik ses
    else if (/karen\b/i.test(name)) score += 82; // Sıcak Avustralya sesi
    else if (/moira\b/i.test(name)) score += 80; // Neşeli İrlanda sesi
    else if (/daniel\b/i.test(name)) score += 78; // Net İngiliz sesi
    else if (/eddy\b/i.test(name)) score += 74; // Genç & samimi ses

    // Doğal/Nöral ses belirteçleri
    if (/online \(natural\)/i.test(name)) score += 60;
    if (/\bnatural\b/i.test(name)) score += 50;
    if (/\bneural\b/i.test(name)) score += 50;
    if (/\bpremium\b/i.test(name)) score += 40;
    if (/\benhanced\b/i.test(name)) score += 35;

    // Cambridge müfredatı için aksan önceliği: BK ve ABD
    if (/en[-_]GB/i.test(lang)) score += 20;
    else if (/en[-_]US/i.test(lang)) score += 15;
    else if (/en[-_](AU|CA|IE|NZ)/i.test(lang)) score += 10;

    // Kadın veya çocuk ses tonları ilkokul öğrencileri için daha neşeli ve samimi algılanır
    if (/female|girl|child|kid/i.test(name)) score += 10;

    return score;
  },

  /* 🎙️ Mevcut insan seslerini listeleme (filtreli ve sıralı) */
  getHumanVoices() {
    try {
      const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
      if (!synth || !synth.getVoices) return [];
      const vs = synth.getVoices() || [];
      return vs
        .filter((v) => !this.isRoboticVoice(v))
        .sort((a, b) => this.getVoiceScore(b) - this.getVoiceScore(a));
    } catch (e) {
      return [];
    }
  },

  pickVoice() {
    try {
      const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
      if (!synth || !synth.getVoices) return null;
      const vs = synth.getVoices() || [];
      if (!vs.length) return null;

      // Kullanıcı daha önce geçerli bir ses seçtiyse onu koru
      try {
        const saved = store.get('voice');
        if (saved) {
          const match = vs.find((v) => v.name === saved && !this.isRoboticVoice(v));
          if (match) {
            this.voice = match;
            return match;
          }
        }
      } catch (e) {}

      // Sadece neşeli insan seslerini al ve puanlarına göre sırala
      const humanVoices = this.getHumanVoices();
      if (humanVoices.length > 0) {
        this.voice = humanVoices[0];
        return humanVoices[0];
      }

      // Güvenlik yedeği: robotik filtreyi geçen ilk İngilizce ses
      const fallback = vs.find((v) => /^en/i.test(v.lang) && !this.isRoboticVoice(v));
      if (fallback) {
        this.voice = fallback;
        return fallback;
      }

      // Son çare: robotik filtreyi geçen herhangi bir ses
      const anyNonRobot = vs.find((v) => !this.isRoboticVoice(v));
      this.voice = anyNonRobot || null;
      return this.voice;
    } catch (e) {
      return null;
    }
  },
  setVoice(name) {
    try {
      const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
      if (!synth) return;
      const vs = synth.getVoices ? synth.getVoices() : [];
      const v = vs.find((x) => x.name === name);
      if (v) {
        this.voice = v;
        store.set('voice', name);
      }
    } catch (e) {}
  },

  /* 🎙️ Disney & Cartoon Character Profiles (Real Characters & Authentic Voice Lines) */
  disneyProfiles: {
    polly:    { pitch: 1.35, rate: 1.05, label: "Polly The Mascot", show: "Polly's Fun English", soundFx: 'win', quote: "Squawk! Hello pals! I am Polly! Welcome to Cambridge English fun!" },
    mickey:   { pitch: 1.50, rate: 1.05, label: 'Mickey Mouse', show: 'Disney Mickey & Friends', soundFx: 'win', quote: "Hot dog! Oh boy, welcome to our English Clubhouse! Let's have fun together!" },
    minnie:   { pitch: 1.45, rate: 1.02, label: 'Minnie Mouse', show: 'Disney Mickey & Friends', soundFx: 'magic', quote: "Yoo-hoo! Hello there! You are doing so wonderful today!" },
    donald:   { pitch: 1.35, rate: 1.15, label: 'Donald Duck', show: 'Disney Mickey & Friends', soundFx: 'pop', quote: "Quack, quack! What's the big idea? Let's practice English words right now!" },
    goofy:    { pitch: 0.74, rate: 0.85, label: 'Goofy', show: 'Disney Mickey & Friends', soundFx: 'boing', quote: "Gawrsh! A-hyuck! Learning English with friends is super duper fun!" },
    elsa:     { pitch: 1.25, rate: 0.94, label: 'Elsa', show: 'Disney Frozen', soundFx: 'magic', quote: "The cold never bothered me anyway! Step into the magic of English!" },
    anna:     { pitch: 1.28, rate: 1.04, label: 'Anna', show: 'Disney Frozen', soundFx: 'pop', quote: "For the first time in forever, we're having the best English lesson!" },
    olaf:     { pitch: 1.42, rate: 1.10, label: 'Olaf', show: 'Disney Frozen', soundFx: 'pop', quote: "Hi! I'm Olaf, and I love warm hugs and sunny English words!" },
    simba:    { pitch: 1.32, rate: 1.05, label: 'Simba', show: 'Disney The Lion King', soundFx: 'win', quote: "I just can't wait to be king of English words! Hakuna Matata!" },
    buzz:     { pitch: 0.85, rate: 0.98, label: 'Buzz Lightyear', show: 'Pixar Toy Story', soundFx: 'whoosh', quote: "To infinity and beyond! Space Rangers, report for English mission!" },
    woody:    { pitch: 1.08, rate: 1.02, label: 'Woody', show: 'Pixar Toy Story', soundFx: 'win', quote: "Reach for the sky, partner! You're my favorite deputy in class today!" },
    stitch:   { pitch: 1.52, rate: 1.14, label: 'Stitch', show: 'Disney Lilo & Stitch', soundFx: 'zoom', quote: "Ih! Mega nala kweesta! English is fun! Ha-ha-ha!" },
    pooh:     { pitch: 0.82, rate: 0.85, label: 'Winnie the Pooh', show: 'Disney Winnie the Pooh', soundFx: 'pop', quote: "Think, think, think... English words are sweeter than a pot of honey!" },
    mcqueen:  { pitch: 1.12, rate: 1.18, label: 'Lightning McQueen', show: 'Pixar Cars', soundFx: 'race', quote: "Ka-chow! Speed into English with the fastest words on the track!" },
    moana:    { pitch: 1.18, rate: 1.00, label: 'Moana', show: 'Disney Moana', soundFx: 'whoosh', quote: "I am Moana of Motunui! The ocean calls us to explore new words!" },
    ariel:    { pitch: 1.28, rate: 0.96, label: 'Ariel', show: 'Disney The Little Mermaid', soundFx: 'magic', quote: "Under the sea, we discover treasures of words and magical songs!" },
    aladdin:  { pitch: 1.15, rate: 1.08, label: 'Aladdin & Genie', show: 'Disney Aladdin', soundFx: 'magic', quote: "You ain't never had a friend like me! Let's make three English wishes!" },
    peterpan: { pitch: 1.30, rate: 1.08, label: 'Peter Pan', show: 'Disney Peter Pan', soundFx: 'magic', quote: "All you need is faith, trust, and pixie dust! Never grow up!" },
    dory:     { pitch: 1.38, rate: 1.12, label: 'Dory & Nemo', show: 'Disney Finding Nemo', soundFx: 'drip', quote: "Just keep swimming, just keep swimming! What do we do? We learn English!" },
    judy:     { pitch: 1.24, rate: 1.08, label: 'Judy Hopps', show: 'Disney Zootopia', soundFx: 'tada', quote: "Ready to make the world a better place! Let's solve this English puzzle!" },
    baloo:    { pitch: 0.76, rate: 0.86, label: 'Baloo', show: 'Disney The Jungle Book', soundFx: 'boing', quote: "Look for the bare necessities, the simple bare necessities of English!" },
    dash:     { pitch: 1.42, rate: 1.22, label: 'Dash', show: 'Pixar The Incredibles', soundFx: 'zoom', quote: "Whoa, that was fast! Bet you can't say this word faster than me!" },
    peppa:    { pitch: 1.38, rate: 1.05, label: 'Peppa Pig', show: 'Peppa Pig Official', soundFx: 'pop', quote: "I'm Peppa Pig! *snort* Splish splash, let's jump into learning!" },
    bluey:    { pitch: 1.36, rate: 1.12, label: 'Bluey', show: 'Bluey Official', soundFx: 'cheer', quote: "For real life?! Hooray! This is going to be the best game ever!" },
    chase:    { pitch: 1.10, rate: 1.05, label: 'Chase (PAW Patrol)', show: 'PAW Patrol Official', soundFx: 'tada', quote: "Chase is on the case! Paw Patrol is ready for English action, sir!" }
  },

  speakCharacter(charKey, text, cb, vol) {
    const prof = this.disneyProfiles[charKey] || this.disneyProfiles.polly || this.disneyProfiles.mickey;
    if (prof.soundFx) this.fx(prof.soundFx);
    this.tts(text, prof.rate || 1.0, cb, vol, prof.pitch || 1.0);
  },

  speakDisney(charKey, text, cb, vol) {
    return this.speakCharacter(charKey, text, cb, vol);
  },

  welcomeGreeting(cb) {
    this.fx('win');
    const msg = "Hiya pals! Welcome to Polly's Fun English! Together with all our Disney and cartoon friends, let us explore exciting games, songs, and Baamboozle!";
    this.speakCharacter('mickey', msg, cb);
  },

  /* 🎶 Melodic Sing-Along Synthesizer (Harmonic Scale + Vocal Singing) */
  singLine(text, tuneKey, cb) {
    if (this.muted) { if (cb) cb(); return; }
    this.init();
    const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 523.25];
    const words = String(text || '').split(/\s+/).filter(Boolean);
    const count = Math.max(3, Math.min(words.length, 7));
    for (let i = 0; i < count; i++) {
      const freq = notes[i % notes.length];
      this.tone(freq, i * 0.28, 0.35, 'triangle', 0.12);
    }
    this.tts(text, 0.88, cb, 0.95, 1.35);
  },

  /* 🎙️ ANA KONUŞMA — DOĞAL İNSAN SESİ & DİSNEY DESTEĞİ */
  speak(text, rate = 0.9, cb, vol, charKey = null) {
    if (charKey && this.disneyProfiles[charKey]) {
      return this.speakDisney(charKey, text, cb, vol);
    }
    try {
      if (!(typeof window !== 'undefined' && window.__TESTMODE)) {
        const t = String(text || '');
        const slug = 'w-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        if (typeof VOICESET !== 'undefined' && VOICESET.has(slug)) {
          let a = null;
          try {
            a = this.playFile(slug, vol == null ? 1 : vol);
          } catch (e) {}
          if (a) {
            this.stopSpeak();
            let done = false,
              to = null;
            try {
              a.playbackRate = rate >= 0.8 ? 1 : 0.88;
            } catch (e) {}
            const fall = () => {
              if (done) return;
              done = true;
              if (to) clearTimeout(to);
              this.tts(text, rate, cb, vol);
            };
            const fin = () => {
              if (done) return;
              done = true;
              if (to) clearTimeout(to);
              cb && cb();
            };
            if (cb)
              to = setTimeout(() => {
                if (!done) {
                  done = true;
                  cb();
                }
              }, 4000);
            a.onended = fin;
            a.onerror = fall;
            const pr = a.play && a.play();
            if (pr && pr.catch) pr.catch(fall);
            return;
          }
        }
      }
    } catch (e) {}
    this.tts(text, rate, cb, vol);
  },

  /* 🎙️ Tarayıcı TTS — Neşeli, sıcak ve doğal insan sesleri */
  tts(text, rate = 0.9, cb, vol, customPitch = 1.0) {
    if (this.muted) {
      cb && cb();
      return;
    }
    try {
      const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
      if (!synth) {
        cb && cb();
        return;
      }
      // // SAFETY: Tarayıcı askıda kalmasını (paused) engelle
      if (synth.paused) {
        try { synth.resume(); } catch (e) {}
      }
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      this._currUtt = u; // // SAFETY: V8 Garbage collection erken temizlemesini önle
      if (!this.voice) this.pickVoice();
      if (this.voice) {
        u.voice = this.voice;
        u.lang = this.voice.lang || 'en-GB';
      } else {
        u.lang = 'en-GB';
      }
      u.pitch = customPitch || 1.0;
      const safeRate = Math.max(0.75, Math.min(1.25, rate || 0.9));
      u.rate = safeRate;
      if (vol != null) u.volume = vol;
      
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        if (this._currUtt === u) this._currUtt = null;
        if (cb) cb();
      };
      u.onend = finish;
      u.onerror = finish;
      synth.speak(u);
    } catch (e) {
      cb && cb();
    }
  },

  stopSpeak() {
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
  },

  /* // SAFETY: Cross-OS Audio & TTS Isıtıcı (iOS / Safari / Android kuralı) */
  warmUp() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    try {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(' ');
        u.volume = 0.01;
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  },

  /* // PERF: Ekran geçişlerinde bellek ve ses kaynaklarını temizle */
  disposeAll() {
    this.stopSpeak();
    if (this.ac) {
      Object.values(this.ac).forEach((a) => {
        try {
          if (a && a.pause) {
            a.pause();
            a.currentTime = 0;
          }
        } catch (e) {}
      });
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
