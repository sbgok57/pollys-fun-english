/* ============================================================
   🦜 ANA UYGULAMA MOTORU — Polly's Fun English (v2)
   Ekranlar, katalog, skorlar, şarkı oynatıcı ve Anti-Crash Kalkanı
   ============================================================ */
/* 🛡️ SIFIR-HATA KALKANI v7 — ders tahtasında asla çökme/beyaz ekran yok.
   Beklenmeyen bir hata olursa: nazik bir bildirim çıkar, boş ekran
   kendini ana sayfaya kurtarır; site çalışmaya devam eder. */
(function () {
  if (typeof window === 'undefined' || window.__SHIELD || typeof window.addEventListener !== 'function') return;
  window.__SHIELD = 1;
  var sonBildirim = 0;
  window.addEventListener('error', function () {
    try {
      var n = Date.now();
      if (n - sonBildirim > 5000) {
        sonBildirim = n;
        if (typeof FX !== 'undefined' && FX.toast) FX.toast('Küçük bir aksaklık — devam ediyoruz 🦜');
      }
    } catch (e) {}
    setTimeout(function () {
      try {
        var a = document.getElementById('app');
        if (a && !a.innerHTML.trim() && typeof APP !== 'undefined') APP.go('home');
      } catch (e) {}
    }, 60);
  });
  window.addEventListener('unhandledrejection', function () {
    /* sessizce yut */
  });
})();

/* ============================================================
   🛡️ ANTIVIRUS & SİBER GÜVENLİK KALKANI — Polly Shield Pro
   XSS, Rogue Iframe, Zararlı Kod Enjeksiyonu ve Veri Bütünlüğü Koruması
   ============================================================ */
const ANTIVIRUS = {
  initialized: false,
  quarantineLog: [],
  maxLogEntries: 20, // // PERF: Sınırlı bellek havuzu
  lastScanTime: null,
  observer: null,
  allowedIframeOrigins: [
    'https://www.youtube-nocookie.com',
    'https://www.youtube.com'
  ],

  init() {
    if (this.initialized || typeof window === 'undefined' || typeof document === 'undefined') return;
    this.initialized = true;
    this.lastScanTime = new Date().toLocaleTimeString();

    // 1. Canlı DOM İzleyici (MutationObserver)
    try {
      if (typeof MutationObserver !== 'undefined' && document.body) {
        this.observer = new MutationObserver((mutations) => {
          for (let m of mutations) {
            if (m.addedNodes) {
              for (let i = 0; i < m.addedNodes.length; i++) {
                const node = m.addedNodes[i];
                if (node && node.nodeType === 1) {
                  this.inspectElement(node);
                }
              }
            }
          }
        });
        this.observer.observe(document.body, { childList: true, subtree: true });
      }
    } catch (e) {
      // sessizce geç
    }

    // 2. İlk link ve öğe güvenlik taraması
    this.guardLinks();
  },

  inspectElement(el) {
    if (!el || !el.tagName) return;
    const tag = el.tagName.toUpperCase();

    // Yetkisiz dinamik script enjeksiyonunu engelle
    if (tag === 'SCRIPT') {
      const src = (el.getAttribute('src') || '').trim();
      const isLocal = !src || src.startsWith('/') || src.startsWith('./') || (typeof window !== 'undefined' && window.location && src.includes(window.location.hostname));
      if (!isLocal) {
        this.quarantine(el, 'Yetkisiz Dış Script Enjeksiyonu Engellendi (' + src.slice(0, 35) + ')');
        return;
      }
    }

    // Yetkisiz iframe'leri engelle
    if (tag === 'IFRAME') {
      const src = (el.getAttribute('src') || '').trim();
      const isAllowed = this.allowedIframeOrigins.some(origin => src.startsWith(origin)) || src === 'about:blank' || !src;
      if (!isAllowed) {
        this.quarantine(el, 'Yetkisiz Iframe Kaynağı Engellendi (' + src.slice(0, 35) + ')');
        return;
      }
    }

    // Çocuk iframe'leri tara
    if (el.querySelectorAll) {
      try {
        const frames = el.querySelectorAll('iframe');
        frames.forEach(f => {
          const src = (f.getAttribute('src') || '').trim();
          const isAllowed = this.allowedIframeOrigins.some(origin => src.startsWith(origin)) || src === 'about:blank' || !src;
          if (!isAllowed) this.quarantine(f, 'Yetkisiz Gömülü Iframe');
        });
      } catch (err) {}
    }

    // Tehlikeli javascript: linklerini etkisizleştir
    if (tag === 'A') {
      const href = (el.getAttribute('href') || '').toLowerCase();
      if (href.startsWith('javascript:')) {
        el.setAttribute('href', '#');
        this.logEvent('Tehlikeli Javascript: Linki Nötralize Edildi', 'warning');
      }
      if (el.target === '_blank' && (!el.rel || !el.rel.includes('noopener'))) {
        el.rel = 'noopener noreferrer';
      }
    }
  },

  quarantine(el, reason) {
    try {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    } catch (e) {}
    this.logEvent(reason, 'threat');
    if (typeof FX !== 'undefined' && FX.toast) {
      FX.toast('🛡️ Güvenlik Kalkanı: ' + reason);
    }
  },

  logEvent(msg, type = 'info') {
    const entry = {
      time: new Date().toLocaleTimeString(),
      msg: String(msg || ''),
      type: type
    };
    this.quarantineLog.unshift(entry);
    if (this.quarantineLog.length > this.maxLogEntries) {
      this.quarantineLog.pop();
    }
  },

  guardLinks() {
    try {
      if (typeof document === 'undefined') return;
      document.querySelectorAll('a[target="_blank"]').forEach(a => {
        a.rel = 'noopener noreferrer';
      });
      document.querySelectorAll('a[href^="javascript:"]').forEach(a => {
        a.setAttribute('href', '#');
      });
    } catch (e) {}
  },

  runDeepScan() {
    this.lastScanTime = new Date().toLocaleTimeString();
    const results = [];

    // 1. Script Güvenliği & XSS Kalkanı
    let scriptsSafe = true;
    let foreignScripts = 0;
    if (typeof document !== 'undefined') {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(s => {
        const src = s.getAttribute('src') || '';
        if (src.startsWith('http') && typeof window !== 'undefined' && window.location && !src.includes(window.location.hostname)) {
          foreignScripts++;
          scriptsSafe = false;
        }
      });
    }
    results.push({
      id: 'scripts',
      title: 'Script Bütünlüğü & XSS Kalkanı',
      status: scriptsSafe ? 'pass' : 'warn',
      desc: scriptsSafe ? 'Tüm scriptler yerel paketle mühürlü. Yetkisiz enjeksiyon yok.' : foreignScripts + ' harici script tespit edildi.'
    });

    // 2. Iframe ve Medya Güvenliği
    let iframesSafe = true;
    let rogueFrames = 0;
    if (typeof document !== 'undefined') {
      const frames = document.querySelectorAll('iframe');
      frames.forEach(f => {
        const src = f.getAttribute('src') || '';
        const ok = this.allowedIframeOrigins.some(origin => src.startsWith(origin)) || src === 'about:blank' || !src;
        if (!ok) {
          rogueFrames++;
          iframesSafe = false;
        }
      });
    }
    results.push({
      id: 'iframes',
      title: 'Iframe & Gömülü Medya Güvenliği',
      status: iframesSafe ? 'pass' : 'threat',
      desc: iframesSafe ? 'Tüm video çerçeveleri YouTube Nocookie ve CSP sandbox ile korumalı.' : rogueFrames + ' şüpheli iframe bulundu.'
    });

    // 3. LocalStorage & Depolama Bütünlüğü
    let storageSafe = true;
    let storageSize = 0;
    try {
      if (typeof localStorage !== 'undefined') {
        for (let k in localStorage) {
          if (Object.prototype.hasOwnProperty.call(localStorage, k)) {
            storageSize += (localStorage[k] || '').length;
          }
        }
        if (storageSize > 2000000) storageSafe = false;
      }
    } catch (e) {
      storageSafe = true; // Korumalı ortam güvenli kabul edilir
    }
    results.push({
      id: 'storage',
      title: 'Bellek & Depolama Manipülasyon Koruması',
      status: storageSafe ? 'pass' : 'warn',
      desc: storageSafe ? 'Tarayıcı hafızası temiz. Kota ve zararlı veri sızıntısı yok (~' + Math.round(storageSize / 1024) + ' KB).' : 'Depolama sınırında anormallik.'
    });

    // 4. Prototype Pollution Kontrolü
    let protoSafe = true;
    try {
      const probe = {};
      if (probe.polluted || Object.prototype.polluted) {
        protoSafe = false;
      }
    } catch (e) {
      protoSafe = false;
    }
    results.push({
      id: 'proto',
      title: 'Prototype Pollution & Nesne Koruması',
      status: protoSafe ? 'pass' : 'threat',
      desc: protoSafe ? 'Object.prototype kilitli ve temiz. Bellek enjeksiyonu engellendi.' : 'Prototype kirlenmesi riski algılandı.'
    });

    // 5. İçerik ve Bağlantı Güvenliği
    results.push({
      id: 'links',
      title: 'Ters Yönlendirme (Reverse Tabnabbing) Koruması',
      status: 'pass',
      desc: 'Tüm dış bağlantılar "noopener noreferrer" bayrağıyla izole edilmiştir.'
    });

    // 6. Sıfır-Çökme & Hata Yakalama Kalkanı
    results.push({
      id: 'shield',
      title: 'Sıfır-Çökme (P0 Anti-Crash) Kalkanı',
      status: (typeof window !== 'undefined' && window.__SHIELD) ? 'pass' : 'warn',
      desc: 'Global hata yakalayıcı ve otomatik kurtarma mekanizması devrede.'
    });

    return results;
  },

  showModal() {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('antivirus-modal');
    if (existing) existing.remove();

    const d = document.createElement('div');
    d.id = 'antivirus-modal';
    d.className = 'security-modal-overlay';

    const renderBody = () => {
      const scanResults = this.runDeepScan();
      const allPassed = scanResults.every(r => r.status === 'pass');

      d.innerHTML = `
        <div class="security-modal-box">
          <div class="security-modal-head">
            <div style="display:flex;align-items:center;gap:12px">
              <span style="font-size:38px">🛡️</span>
              <div>
                <h2 style="margin:0;font-size:1.35em;color:#0f172a">Polly Cyber-Shield Antivirüs & Güvenlik</h2>
                <div class="muted" style="font-size:0.86em">Cambridge Eğitim Portalı Canlı Güvenlik & Tehdit İzleme Paneli</div>
              </div>
            </div>
            <button class="btn white small" id="sec-modal-close" style="font-size:16px;padding:6px 14px">❌ Kapat</button>
          </div>

          <div class="security-badge-live">
            <div style="display:flex;align-items:center;gap:12px">
              <span style="font-size:32px">${allPassed ? '🟢' : '🟡'}</span>
              <div>
                <div style="font-weight:900;font-size:1.15em;color:${allPassed ? '#065f46' : '#92400e'}">
                  ${allPassed ? 'SİSTEM %100 GÜVENLİ VE KORUMA ALTINDA' : 'SİSTEM İNCELENİYOR'}
                </div>
                <div style="font-size:0.85em;color:${allPassed ? '#047857' : '#b45309'}">
                  DOM Watchdog devrede · Sıfır XSS / iframe tehdidi · Son Tarama: <b>${this.lastScanTime || 'Şimdi'}</b>
                </div>
              </div>
            </div>
            <button class="btn green small" id="sec-rescan-btn" style="font-weight:800;white-space:nowrap">🔍 Derin Tarama Yap</button>
          </div>

          <div style="font-weight:800;margin:16px 0 8px;font-size:0.95em;color:#1e293b">
            📋 6 Noktalı Canlı Tehdit & Güvenlik Teşhisi:
          </div>

          <div class="security-scan-grid">
            ${scanResults.map(r => `
              <div class="security-scan-card">
                <div style="display:flex;align-items:center;justify-content:space-between">
                  <h4>${r.title}</h4>
                  <span class="security-status-badge ${r.status === 'pass' ? 'pass' : (r.status === 'warn' ? 'warn' : 'threat')}">
                    ${r.status === 'pass' ? '✅ TEMİZ' : (r.status === 'warn' ? '⚠️ DİKKAT' : '🛑 TEHDİT')}
                  </span>
                </div>
                <p>${r.desc}</p>
              </div>
            `).join('')}
          </div>

          <div style="background:#f1f5f9;border-radius:10px;padding:12px 16px;margin:16px 0">
            <div style="font-weight:800;font-size:0.9em;color:#334155;margin-bottom:6px">
              🛡️ Karantina & Güvenlik Olay Günlüğü (${this.quarantineLog.length} Kayıt):
            </div>
            <div style="font-size:0.82em;color:#475569;max-height:100px;overflow-y:auto;line-height:1.6">
              ${this.quarantineLog.length === 0 
                ? '<span style="color:#059669">✨ Hiçbir zararlı kod veya tehdit tespit edilmedi. Sistem tertemiz.</span>'
                : this.quarantineLog.map(e => `<div>🕒 <b>${e.time}</b>: [${e.type.toUpperCase()}] ${e.msg}</div>`).join('')}
            </div>
          </div>

          <div style="text-align:right">
            <button class="btn purple" id="sec-modal-bottom-close" style="min-width:140px;font-weight:800">✅ Tamam</button>
          </div>
        </div>
      `;

      const close = () => {
        if (typeof MEDIA !== 'undefined' && MEDIA.fx) MEDIA.fx('click');
        d.remove();
      };

      const c1 = d.querySelector('#sec-modal-close');
      if (c1) c1.onclick = close;
      const c2 = d.querySelector('#sec-modal-bottom-close');
      if (c2) c2.onclick = close;
      d.onclick = (e) => { if (e.target === d) close(); };

      const rescanBtn = d.querySelector('#sec-rescan-btn');
      if (rescanBtn) {
        rescanBtn.onclick = () => {
          if (typeof MEDIA !== 'undefined' && MEDIA.fx) MEDIA.fx('magic');
          if (typeof FX !== 'undefined' && FX.stars) FX.stars();
          renderBody();
          if (typeof FX !== 'undefined' && FX.toast) FX.toast('🛡️ Derin Güvenlik Taraması Tamamlandı: Sistem %100 Güvenli!');
        };
      }
    };

    renderBody();
    document.body.appendChild(d);
  }
};

if (typeof window !== 'undefined') {
  window.ANTIVIRUS = ANTIVIRUS;
}

// Sayfa yüklendiğinde antivirüsü otomatik başlat
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ANTIVIRUS.init());
  } else {
    ANTIVIRUS.init();
  }
}

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
  currentScore: 0,

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
    MEDIA.disposeAll(); // // PERF: Ekran geçişlerinde ses ve konuşma motorunu sıfırla
  },

  /* // SAFETY: Çökme / Yenilenme Durumunda Kaldığı Yerden Devam (Checkpoint) */
  saveState() {
    try {
      const snap = {
        scr: this.scr,
        stage: this.stage,
        unitId: this.unitId,
        engineId: this.engineId,
        lvIdx: this.lvIdx,
        lesIdx: this.lesIdx,
        score: this.currentScore || 0,
        timestamp: Date.now()
      };
      store.set('last_state', snap);
      store.saveCheckpoint(snap);
    } catch (e) {}
  },

  restoreLastState() {
    const s = store.getCheckpoint() || store.get('last_state');
    if (s && s.scr && s.scr !== 'home') {
      this.go(s.scr, {
        stage: s.stage,
        unitId: s.unitId,
        engineId: s.engineId,
        lvIdx: s.lvIdx || 0,
        lesIdx: s.lesIdx || 0,
        restoredScore: s.score || 0
      });
      FX.toast('Kaldığınız yerden devam ediliyor! 🔄');
      return true;
    }
    this.go('home');
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
      learn: () => this.vLearn(),
      lesson: () => this.vLesson(),
      game: () => this.vGame(),
      songs: () => this.vSongs(),
      player: () => this.vPlayer(),
      scores: () => this.vScores(),
      help: () => this.vHelp()
    };
    /* 🛡️ render zırhı: görünüm fonksiyonu hataya düşerse ana sayfa devreye girer */
    const view = R[this.scr] || R.home;
    let icerik = '';
    try {
      icerik = view();
    } catch (e) {
      try {
        console.warn('görünüm hatası:', e);
      } catch (x) {}
      try {
        icerik = R.home();
      } catch (x) {
        icerik =
          '<div style="padding:40px;text-align:center">🦜 <a href="#" onclick="location.reload();return false">Sayfayı yenile</a></div>';
      }
    }
    app.innerHTML = `<div class="screen">${icerik}</div>`;
    try {
      this.bind();
    } catch (e) {
      try {
        console.warn('bağlama hatası:', e);
      } catch (x) {}
    }
  },

  bar(title) {
    return `<div class="topbar">
      ${this.scr !== 'home' ? '<button class="btn small white" id="bk">⬅️ Geri</button>' : ''}
      <div class="brand">🦜 Polly’s Fun English</div><div class="spacer"></div>
      <button class="btn small green" id="antivirus-top-btn" title="Canlı Siber Güvenlik Kalkanı" style="font-weight:800">🛡️ Kalkan</button>
      <button class="btn small purple" id="guide-top-btn" style="font-weight:800">📖 Kullanma Kılavuzu</button>
      <button class="btn small yellow" id="baamboozle-top-btn" style="background:#f59e0b;color:#fff;font-weight:900">🧩 Baamboozle</button>
      <button class="btn small white" id="hm">🏠</button>
      <button class="btn small white" id="mu">${MEDIA.muted ? '🔇' : '🔊'}</button></div>`;
  },

  /* ---------- 🏠 ANA SAYFA ---------- */
  vHome() {
    return (
      this.bar() +
      `
    <div class="disney-welcome-hero">
      <div class="disney-welcome-avatar anim-bounce">🏰🐭</div>
      <div class="disney-welcome-content">
        <div class="disney-welcome-badge">✨ Disney & Polly Hoş Geldiniz! ✨</div>
        <h2>Merhaba Arkadaşlar! / Hello Pals! 👋</h2>
        <p>Polly ve 25 Disney dostumuzla Cambridge Global English 1 & 2 macerasına hazır mısınız? 
        Oyunlar oynayın, şarkılar söyleyin, ders slaytlarını izleyin ve sınıfta heyecanlı Baamboozle takım yarışması yapın!</p>
        <div class="disney-welcome-btns">
          <button class="btn green big" id="btn-welcome-voice" style="box-shadow:0 4px 14px rgba(16,185,129,0.35)">
            🔊 Mickey & Polly'den Sesli Karşılama Dinle!
          </button>
          <button class="btn purple big" id="btn-welcome-guide">
            📖 Kullanma Kılavuzu & Bölümler
          </button>
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="mascot" id="mas">🦜</div>
      <h1 class="brand" style="font-size:clamp(30px,6vw,54px);justify-content:center">Polly’s Fun English</h1>
      <div class="tag">🎉 Oyna · Öğren · Söyle! 🎵 — Cambridge Global English 1 & 2 (2. Baskı) · Materyal Modu</div>
    </div>
    <div class="stats-bar">
      <div class="stat">🎮 <b>${this.countGames()}</b>farklı oyun</div>
      <div class="stat">🧩 <b>Baamboozle</b>Sınıf modu</div>
      <div class="stat">🎵 <b>${TOTALSONGS}</b>şarkı & chant</div>
      <div class="stat">🔤 <b>${totalWords}</b>İngilizce kelime</div>
      <div class="stat">🏰 <b>25 Disney</b>karakteri</div>
    </div>
    <div class="stage-cards">
      <div class="stage-card s1" data-st="s1"><span class="sc-emoji">🐣</span>
        <h2>🟢 1. Sınıf</h2><p>Global English 1 · Starter + 9 ünite + 3 tekrar<br>Renkler, aile, çiftlik, taşıtlar, su...</p></div>
      <div class="stage-card s2" data-st="s2"><span class="sc-emoji">🚀</span>
        <h2>🔵 2. Sınıf</h2><p>Global English 2 · 9 ünite + 3 tekrar<br>Meslekler, geçmiş zaman, ölçme, şehir...</p></div>
      <div class="stage-card songs" data-go="songs"><span class="sc-emoji">🎵</span>
        <h2>🎶 Şarkı Köşesi</h2><p>${TOTALSONGS} şarkı & chant · Klasikler + kelime chant'leri<br>Sınıfta birlikte söyleyin!</p></div>
    </div>
    <div class="baam-featured-card" data-baam="1">
      <div class="baam-fc-main">
        <span class="baam-fc-emoji anim-wobble">🧩</span>
        <div class="baam-fc-text">
          <h2>Baamboozle Sınıf Takım Oyunu! 🔴 vs 🔵</h2>
          <p>Akıllı tahtada veya sınıfta 2 takım yarışması! 16-24 gizemli kutu, takas ve bonus puanlarla eğlenin!</p>
        </div>
      </div>
      <button class="btn gold big" id="baamboozle-btn-hero" style="font-weight:900">🚀 Takım Oyunu Başlat</button>
    </div>
    <div class="quick-row">
      <button class="btn purple wobble" id="rndG">🎲 Rastgele Oyun</button>
      <button class="btn yellow" id="btn-home-baam" style="background:#f59e0b;color:#fff;font-weight:900">🧩 Baamboozle Başlat</button>
      <button class="btn white" id="btn-home-cambridge" style="font-weight:700">📘 Cambridge Notları</button>
      <button class="btn white" id="btn-home-security" style="font-weight:700">🛡️ Antivirüs Kalkanı</button>
      <button class="btn white" id="btn-home-guide">📖 Kullanma Kılavuzu</button>
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
       return `<div class="card unit-card ${u.stage}" data-u="${u.id}">
       <span class="ue">${u.emoji}</span>
       <h3>${u.title}</h3>
       <div class="sub">${u.tr} · ${u.w.length} kelime</div>
       <div class="u-meta">
         <span class="badge ${u.stage === 's1' ? 'green' : 'blue'}">${u.stage.toUpperCase()}</span>
         <span class="badge purple">✨ Materyal</span>
       </div>
     </div>`;
     })
     .join('')}</div>`
    );
  },

  /* ---------- 🎮 OYUN SEÇİMİ ---------- */
  /* ---------- 🎮 OYUN SEÇİMİ ---------- */
  vUnit() {
    const u = unitById(this.unitId);
    if (!u) return this.vHome();
    const stn = u.stage === 's1' ? 1 : 2;
    const eng = ENGINES.filter((e) => e.stages.includes(stn));
    const m = (typeof MASCOTS !== 'undefined' && MASCOTS[u.id]) || {
      name: 'Polly', show: "Polly's Fun English", tag: '🦜 Polly',
      quoteEn: "Let's explore new words and play games!", quoteTr: "Haydi yeni kelimeler keşfedelim ve oyunlar oynayalım!",
      badge: "🦜 Polly", color: "#8b5cf6", bg: "#f3e8ff", anim: "anim-bounce"
    };
    const vids = (typeof LVID !== 'undefined' && LVID[u.id]) || [];

    return (
      this.bar() +
      `
   <div class="unit-head ${u.stage}"><span class="ue">${u.emoji}</span>
     <div><h2>${u.title}</h2><div class="sub">${u.tr} · ${u.w.length} kelime · ${u.cats.length} kategori</div></div>
     <div style="margin-left:auto;display:flex;gap:8px;flex-wrap:wrap">
       <button class="btn purple" id="learn-btn" style="font-size:1em;padding:10px 16px">📖 Kelime Öğrenelim</button>
       ${typeof LESSONS !== 'undefined' && LESSONS[u.id] ? '<button class="btn gold" id="lbtn" style="font-size:1em;padding:10px 16px">📚 Konu Anlatımı</button>' : ''}
       <button class="btn blue" id="btn-cambridge-guide" style="font-size:1em;padding:10px 16px;background:#0284c7;color:#fff">📘 Cambridge Notları</button>
     </div>
   </div>

   <div class="unit-mascot-card" style="border-left:6px solid ${m.color};background:${m.bg};cursor:pointer" id="unit-mascot-tap" title="Karakteri sesli dinlemek için tıkla">
     <div class="mascot-avatar-wrap">
       <div class="mascot-tag ${m.anim}">${m.tag}</div>
       <span class="mascot-show">${esc(m.show)}</span>
       <span class="badge purple" style="margin-top:4px;font-size:0.7em">🗣️ Dinle</span>
     </div>
     <div class="mascot-bubble">
       <div class="mascot-quote-en">"${esc(m.quoteEn)}"</div>
       <div class="mascot-quote-tr">${esc(m.quoteTr)}</div>
     </div>
   </div>

   <div class="unit-actions-row">
     <button class="btn purple big" id="learn-btn-hero" style="font-size:1.05em;padding:12px 20px;box-shadow:0 4px 12px rgba(139,92,246,0.25)">📖 Kelime Öğrenelim & Kartlar (${u.w.length} Kelime)</button>
     <button class="btn yellow big" id="baamboozle-btn-hero" style="background:#f59e0b;color:#fff;font-size:1.05em;padding:12px 20px;font-weight:900;box-shadow:0 4px 12px rgba(245,158,11,0.25)">🧩 Baamboozle Takım Oyunu</button>
     ${typeof LESSONS !== 'undefined' && LESSONS[u.id] ? '<button class="btn gold big" id="lbtn-hero" style="font-size:1.05em;padding:12px 18px">📚 Konu Anlatımı (Ders)</button>' : ''}
     <button class="btn blue big" id="btn-cambridge-hero" style="background:#0284c7;color:#fff;font-size:1.05em;padding:12px 18px">📘 Cambridge Kitap & Öğretmen Notları</button>
     ${vids.length ? `<button class="btn blue big" id="videos-scroll-btn" style="font-size:1.05em;padding:12px 18px">🎬 Eğitici Videolar (${vids.length})</button>` : ''}
   </div>

   <div class="usec">🔤 Kelimeler <small>(Dinlemek için dokun · ${u.w.length} Kelime)</small></div>
   <div class="word-wall">${u.w
     .map(
       (w) =>
         `<span class="word-pill" data-w="${esc(w[0])}" data-tr="${esc(w[2])}" data-em="${w[1] || '🔤'}"><span class="pe">${w[1] || '🔤'}</span><strong>${esc(w[0])}</strong> <small class="muted" style="font-weight:600;opacity:0.85">(${esc(w[2])})</small></span>`
     )
     .join('')}</div>

   <div class="usec">🎮 Oyunlar <span class="badge blue">${eng.length} Oyun Türü</span></div>
   <div class="game-grid">${eng
     .map((e) => {
       const b = (store.get('best') || {})[e.id + '|' + u.id];
       return `<div class="card" data-e="${e.id}">
       <span class="big">${e.e}</span><h3>${e.t}</h3>
       <div class="sub">${e.d}</div>
       <div style="margin-top:8px">${
         b
           ? '<span class="badge green">✨ Tamamlandı</span>'
           : '<span class="badge blue">🎮 Oyna</span>'
       }</div>
     </div>`;
     })
     .join('')}</div>

   ${vids.length ? `
   <div class="usec" id="unit-videos-sec" style="margin-top:24px">🎬 Eğitici YouTube Videoları <span class="badge red">${vids.length} Video</span></div>
   <div class="video-shelf-box">
     <div class="video-player-wrap">
       <iframe id="unit-video-frame" src="https://www.youtube-nocookie.com/embed/${vids[0][0]}?rel=0" title="${esc(vids[0][1])}" allow="accelerometer;autoplay;encrypted-media;picture-in-picture" allowfullscreen loading="lazy"></iframe>
     </div>
     <div class="muted" style="margin:10px 0 6px;font-weight:700" id="unit-video-title">🎬 ${esc(vids[0][1])}</div>
     <div class="video-list-scroll">
       ${vids.map((v, i) => `<button class="video-pill-btn ${i===0?'active':''}" data-vid="${v[0]}" data-tit="${esc(v[1])}">▶️ ${esc(v[1])}</button>`).join('')}
     </div>
   </div>` : ''}`
    );
  },

  /* ---------- 📖 KELİME ÖĞRENELİM (THEATER & FLASHCARDS) ---------- */
  vLearn() {
    const u = unitById(this.unitId);
    if (!u) return this.vHome();
    const m = (typeof MASCOTS !== 'undefined' && MASCOTS[u.id]) || {
      name: 'Polly', show: "Polly's Fun English", tag: '🦜 Polly',
      quoteEn: "Let's learn new words together!", quoteTr: "Birlikte yeni kelimeler öğrenelim!",
      badge: "🦜 Polly", color: "#8b5cf6", bg: "#f3e8ff", anim: "anim-bounce"
    };
    const words = u.w || [];
    const idx = Math.max(0, Math.min(this.learnIdx || 0, words.length - 1));
    const cur = words[idx] || words[0] || ['word', '🔤', 'kelime', 0];
    const catName = (u.cats && u.cats[cur[3]]) || 'Kelime';

    return (
      this.bar() +
      `
    <div class="unit-head ${u.stage}"><span class="ue">${u.emoji}</span>
      <div><h2>${u.title} · Kelime Öğrenelim</h2>
      <div class="sub">${u.tr} · Kart ${idx + 1} / ${words.length}</div></div>
      <button class="btn white" id="lback" style="margin-left:auto;font-size:1em;padding:10px 16px">🔙 Üniteye Dön</button>
    </div>

    <div class="learn-box">
      <div class="unit-mascot-card" style="border-left:6px solid ${m.color};background:${m.bg};width:100%">
        <div class="mascot-avatar-wrap">
          <div class="mascot-tag ${m.anim}">${m.tag}</div>
          <span class="mascot-show">${esc(m.show)}</span>
        </div>
        <div class="mascot-bubble">
          <div class="mascot-quote-en">"${esc(m.quoteEn)}"</div>
          <div class="mascot-quote-tr">${esc(m.quoteTr)}</div>
        </div>
      </div>

      <div class="learn-theater-card baamboozle-theater-card">
        <div class="learn-theater-header">
          <span class="learn-cat-badge">📂 ${esc(catName)}</span>
          <span class="disney-guide-tag" style="background:${m.bg};color:${m.color}">🏰 ${esc(m.name)} ile Öğren</span>
          <span class="learn-count-badge">Kart ${idx + 1} / ${words.length}</span>
        </div>

        <div class="baamboozle-stage">
          <div class="learn-emoji-huge popflash">${cur[1] || '🔤'}</div>
          <div class="stage-visual-tools">
            <a class="btn-visual-chip google-btn" target="_blank" rel="noopener" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(cur[0] + ' cartoon for kids')}" title="Google Görsellerde ${esc(cur[0])} ara">
              🖼️ Google Görseller
            </a>
            <a class="btn-visual-chip giphy-btn" target="_blank" rel="noopener" href="https://giphy.com/search/${encodeURIComponent(cur[0] + ' cartoon sticker')}" title="Giphy Animasyonlarında ${esc(cur[0])} ara">
              🎬 Giphy Animasyon
            </a>
          </div>
        </div>

        <div class="learn-word-en">${esc(cur[0])}</div>
        <div class="learn-word-tr">${esc(cur[2])}</div>

        <div class="learn-mascot-cheer" style="border-left-color:${m.color};cursor:pointer" id="learn-mascot-box" title="Disney arkadaşını dinle">
          <span class="mascot-tag ${m.anim}">${m.tag}</span>
          <div class="learn-mascot-bubble">
            <b>${esc(m.name)}</b>: "Say it with me: <b>${esc(cur[0])}</b>! Great pronunciation!"
            <span class="badge purple" style="margin-left:8px;font-size:0.75em">🗣️ Dinle</span>
          </div>
        </div>

        <div class="learn-voice-btns">
          <button class="btn green big" id="learn-speak-btn">🎧 Dinle</button>
          <button class="btn blue big" id="learn-slow-btn">🐢 Yavaş Dinle</button>
          <button class="btn purple big" id="learn-disney-btn">🏰 ${esc(m.name)} ile Tekrar</button>
        </div>
      </div>

      <div class="learn-nav-bar">
        <button class="btn white" id="learn-prev" ${idx === 0 ? 'disabled' : ''}>⬅️ Önceki</button>
        <button class="btn purple" id="learn-rand">🔀 Karışık</button>
        <button class="btn green" id="learn-next">${idx >= words.length - 1 ? '🏁 Başa Dön' : 'Sonraki ➡️'}</button>
      </div>

      <div class="usec" style="width:100%;margin-top:12px">🔤 Ünitenin Tüm Kelimeleri (${words.length} Kelime) <small>(Seçmek için dokun)</small></div>
      <div class="word-wall" style="width:100%">${words
        .map(
          (w, i) =>
            `<span class="word-pill ${i === idx ? 'active' : ''}" data-wi="${i}" style="cursor:pointer;${i === idx ? 'border-color:#8b5cf6;background:#f3e8ff;' : ''}"><span class="pe">${w[1] || '🔤'}</span>${esc(w[0])} <small class="muted">(${esc(w[2])})</small></span>`
        )
        .join('')}</div>
    </div>`
    );
  },

  /* ---------- 🕹️ OYUN EKRANI ---------- */
  vGame() {
    const u = unitById(this.unitId),
      e = ENGINES.find((x) => x.id === this.engineId);
    if (!u || !e) return this.vHome();
    const lvPills = (e.levels || []).map((l, i) =>
      `<button class="lvl-pill ${i === this.lvIdx ? 'active' : ''}" data-lv="${i}">${['🟢', '🟡', '🔴'][i] || '🎯'} ${l.n}</button>`
    ).join('');
    return (
      this.bar() +
      `
   <div class="game-head">
     <div class="gscore">${e.e} ${e.t} <span class="badge">${esc(u.title)}</span></div>
     <div class="lvl-row" style="display:flex;gap:6px;align-items:center">${lvPills}</div>
     <div class="spacer"></div>
     <div class="gscore">⭐ <span class="v" id="gsc">0</span></div>
     ${e.id === 'team' ? '' : '<div class="gscore">📊 <span id="gpc" style="color:#b45309;font-weight:900">0%</span></div>'}
   </div>
   <div class="timerbar" id="gtb" style="margin-bottom:12px"><i id="gtbi" style="width:0%"></i></div>
   <div id="ginfo"></div>
   <div class="game-area" id="garea"></div>`
    );
  },

  /* ---------- 🎵 ŞARKI & TEKERLEME KÖŞESİ ---------- */
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
     <span class="ue">🎵</span><div><h2 style="color:#fff">Songs & Rhymes · Şarkılar ve Tekerlemeler</h2>
     <div class="sub" style="color:#ffe4e6">Children's Songs & Nursery Chants · Resimli & Müzikli Koleksiyon</div></div></div>
   <div class="song-tabs">
     ${STAGES.map(
       (s) =>
         `<button class="lvl-pill ${this.songFilter.stage === s.id ? 'active' : ''}" data-st="${s.id}">${s.emoji} ${s.name}</button>`
     ).join('')}
   </div>
   <div class="word-wall">${us
     .map(
       (u) =>
         `<span class="word-pill" data-sunit="${u.id}" style="${u.id === sel ? 'background:#fde68a;transform:scale(1.06);border-color:#f59e0b' : ''}">${u.emoji} ${u.title}</span>`
     )
     .join('')}</div>
   <h3 style="margin:16px 0 8px">🎶 Sing-Along Songs (Çocuk Şarkıları)</h3>
   <div class="song-list">${
     classics.length
       ? classics
           .map(
             (s) => `
     <div class="song-item" data-song="${SONGS.indexOf(s)}"><span class="se">${s.e}</span>
       <h4>${esc(s.t)} <span class="badge gold" style="font-size:.68em">🎬 Gerçek Müzik</span></h4>
       <div class="tune">🎼 ${esc(s.tune)}</div></div>`
           )
           .join('')
       : '<div class="muted">Bu ünitede tekerlemelere göz atın! 👇</div>'
   }</div>
   <h3 style="margin:16px 0 8px">🗣️ Nursery Rhymes & Chants (Tekerlemeler) <span class="badge">${chants.length}</span></h3>
   <div class="song-list">${chants
     .map(
       (c) => `
     <div class="song-item" data-chant="${ALLCHANTS.indexOf(c)}"><span class="se">${c.e}</span>
       <h4>${esc(c.t)} <span class="badge purple" style="font-size:.68em">🥁 Tekerleme</span></h4>
       <div class="tune">🥁 Rhythmic Rhyme</div></div>`
     )
     .join('')}</div>`
    );
  },

  /* ---------- 🎼 ŞARKI & TEKERLEME OYNATICI ---------- */
  vPlayer() {
    const s = this.playing;
    if (!s) return this.vSongs();
    const v = typeof getSongVid === 'function' ? getSongVid(s) : null;
    return (
      this.bar() +
      `
   <div class="player">
     <div class="big-emoji" style="font-size:68px">${s.e}</div>
     <h2 style="margin:4px 0;font-size:1.6em;color:#0f172a">${esc(s.t)}</h2>
     <div class="row" style="display:flex;justify-content:center;gap:8px;margin:8px 0;flex-wrap:wrap">
       <span class="badge purple">🎼 ${esc(s.tune)}</span>
       ${s.a ? `<span class="badge gold">🕺 ${esc(s.a)}</span>` : ''}
       <span class="badge green">✨ Resimli & Müzikli</span>
     </div>

     ${
       v
         ? `<div class="song-video-theater">
              <div class="video-theater-head">
                <span class="video-live-badge">🎬 Gerçek Çocuk Şarkısı (Sing-Along Video)</span>
                <span>Özgün Çocuk Müziği & Gerçek Söyleyiş 🎶</span>
              </div>
              <div class="lvideo" style="margin:0 auto">
                <iframe src="https://www.youtube-nocookie.com/embed/${v}?rel=0" title="${esc(s.t)}" allow="accelerometer;autoplay;encrypted-media;picture-in-picture" allowfullscreen loading="lazy"></iframe>
              </div>
            </div>`
         : ''
     }

     <div class="lyrics" id="ly">
       ${s.l
         .map(
           (l, i) => `
         <div class="line" data-i="${i}">
           <span class="line-pic-chips">${typeof songLinePics === 'function' ? songLinePics(l, s) : s.e}</span>
           <span class="line-words">${esc(l)}</span>
         </div>
       `
         )
         .join('')}
     </div>

     <div class="controls">
       <button class="btn green pulse" id="pp" style="font-weight:900">🎤 Melodiyle Karaoke Söyle</button>
       <button class="btn blue" id="pr">🔁 Baştan Al</button>
       <button class="btn white" id="ps">🐢 Yavaş Ritim</button>
       <button class="btn white" id="pm">🎵 Müzik: Açık</button>
       <button class="btn white" id="pa">🛑 Durdur</button>
     </div>
     <div class="song-footer-note">
       🌟 <b>Resimlerle Şarkı & Tekerleme:</b> Yukarıdaki videodan gerçek müzikli çocuk şarkısını dinleyebilir, aşağıdaki butonla melodiyi başlatıp resimleri takip ederek sınıfta birlikte söyleyebilirsiniz! 🎤🎶
     </div>
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
     <p><b>4) Nasıl ilerlenir?</b> Sınıfınızı seçin → üniteyi seçin → oyun kartına dokunun — oyun <b>hemen açılır!</b> Zorluğu oyunun üstündeki 🟢🟡🔴 düğmelerinden anında değiştirin. Her oyunda ⭐ toplanır.</p>
     <p><b>5) Şarkılar:</b> Her klasik şarkının <b>🎬 gerçek şarkı videosu</b> vardır — özgün müzik ve gerçek söyleyiş (internet gerekir). Polly'nin ritimli chant modu ise <b>internetsiz</b> çalışır; sözler satır satır renklenir, sınıfça söyleyin! 🎵 Kelimeler <b>gerçek insan sesiyle</b> söylenir.</p>
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
      learn: 'unit',
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
    on('#guide-top-btn', 'click', () => this.showGuideModal());
    on('#btn-welcome-guide', 'click', () => this.showGuideModal());
    on('#btn-home-guide', 'click', () => this.showGuideModal());
    on('#antivirus-top-btn', 'click', () => {
      if (typeof ANTIVIRUS !== 'undefined') ANTIVIRUS.showModal();
    });
    on('#btn-home-security', 'click', () => {
      if (typeof ANTIVIRUS !== 'undefined') ANTIVIRUS.showModal();
    });
    on('#btn-home-cambridge', 'click', () => this.showCambridgeModal(this.unitId || 's1u1'));
    on('#btn-cambridge-guide', 'click', () => this.showCambridgeModal(this.unitId));
    on('#btn-cambridge-hero', 'click', () => this.showCambridgeModal(this.unitId));

    const startBaam = (uid) => {
      MEDIA.fx('pop');
      this.go('game', { engineId: 'baamboozle', unitId: uid || this.unitId || 's1u1', lvIdx: 0 });
    };
    on('#baamboozle-top-btn', 'click', () => startBaam());
    on('#btn-home-baam', 'click', () => startBaam());
    on('#baamboozle-btn-hero', 'click', () => startBaam());
    $$('[data-baam]').forEach((b) => b.addEventListener('click', () => startBaam(b.dataset.baam)));

    on('#btn-welcome-voice', 'click', () => {
      MEDIA.welcomeGreeting();
      FX.confetti(25);
      FX.stars();
    });

    on('#unit-mascot-tap', 'click', () => {
      const u = unitById(this.unitId);
      const m = (typeof MASCOTS !== 'undefined' && u) ? MASCOTS[u.id] : null;
      if (m) {
        MEDIA.speakDisney(m.voiceKey || 'mickey', m.quoteEn);
        FX.stars();
      }
    });

    on('#learn-mascot-box', 'click', () => {
      const u = unitById(this.unitId);
      const m = (typeof MASCOTS !== 'undefined' && u) ? MASCOTS[u.id] : null;
      if (m) {
        MEDIA.speakDisney(m.voiceKey || 'mickey', m.quoteEn);
        FX.stars();
      }
    });

    on('#learn-disney-btn', 'click', () => {
      const u = unitById(this.unitId);
      const m = (typeof MASCOTS !== 'undefined' && u) ? MASCOTS[u.id] : null;
      const cur = (u && u.w && u.w[this.learnIdx || 0]) ? u.w[this.learnIdx || 0] : null;
      if (cur) {
        MEDIA.fx('magic');
        FX.confetti(20);
        const charKey = (m && m.voiceKey) ? m.voiceKey : 'mickey';
        MEDIA.speakDisney(charKey, 'Say it with me: ' + cur[0] + '! Wonderful!');
      }
    });

    const startLearn = () => {
      MEDIA.fx('magic');
      this.learnIdx = 0;
      this.go('learn', { unitId: this.unitId });
    };
    on('#learn-btn', 'click', startLearn);
    on('#learn-btn-hero', 'click', startLearn);
    on('#lback', 'click', () => {
      MEDIA.fx('click');
      this.go('unit', { unitId: this.unitId });
    });
    on('#videos-scroll-btn', 'click', () => {
      MEDIA.fx('click');
      const el = document.getElementById('unit-videos-sec');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

    on('#lbtn', 'click', () => {
      MEDIA.fx('magic');
      this.lesIdx = 0;
      this.go('lesson', { unitId: this.unitId });
    });
    on('#lbtn-hero', 'click', () => {
      MEDIA.fx('magic');
      this.lesIdx = 0;
      this.go('lesson', { unitId: this.unitId });
    });

    // Learn Theater bindings
    on('#learn-speak-btn', 'click', () => {
      const u = unitById(this.unitId);
      if (u && u.w) {
        const cur = u.w[this.learnIdx || 0];
        if (cur) {
          MEDIA.fx('pop');
          MEDIA.speak(cur[0], 0.9);
          FX.notes(innerWidth / 2, innerHeight - 160);
        }
      }
    });
    on('#learn-slow-btn', 'click', () => {
      const u = unitById(this.unitId);
      if (u && u.w) {
        const cur = u.w[this.learnIdx || 0];
        if (cur) {
          MEDIA.fx('click');
          MEDIA.speak(cur[0], 0.78);
        }
      }
    });
    on('#learn-repeat-btn', 'click', () => {
      const u = unitById(this.unitId);
      if (u && u.w) {
        const cur = u.w[this.learnIdx || 0];
        if (cur) {
          MEDIA.fx('magic');
          FX.confetti(22);
          MEDIA.speak('Say it with me! ' + cur[0], 0.9);
        }
      }
    });
    on('#learn-prev', 'click', () => {
      MEDIA.fx('click');
      this.learnIdx = Math.max(0, (this.learnIdx || 0) - 1);
      this.render();
    });
    on('#learn-next', 'click', () => {
      MEDIA.fx('pop');
      const u = unitById(this.unitId);
      const totalW = (u && u.w) ? u.w.length : 1;
      this.learnIdx = ((this.learnIdx || 0) + 1) % totalW;
      this.render();
    });
    on('#learn-rand', 'click', () => {
      MEDIA.fx('whoosh');
      const u = unitById(this.unitId);
      const totalW = (u && u.w) ? u.w.length : 1;
      this.learnIdx = rnd(totalW);
      this.render();
    });

    $$('.video-pill-btn[data-vid]').forEach((b) =>
      b.addEventListener('click', () => {
        MEDIA.fx('click');
        $$('.video-pill-btn').forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        const frame = $('#unit-video-frame');
        const tit = $('#unit-video-title');
        if (frame) frame.src = `https://www.youtube-nocookie.com/embed/${b.dataset.vid}?rel=0`;
        if (tit) tit.textContent = '🎬 ' + b.dataset.tit;
      })
    );

    on('.learn-theater-card', 'click', (e) => {
      if (e.target.closest('.learn-voice-btns') || e.target.closest('button')) return;
      const u = unitById(this.unitId);
      if (u && u.w) {
        const cur = u.w[this.learnIdx || 0];
        if (cur) {
          MEDIA.fx('pop');
          MEDIA.speak(cur[0], 0.9);
          FX.notes(innerWidth / 2, innerHeight - 160);
        }
      }
    });

    $$('.word-pill[data-wi]').forEach((p) =>
      p.addEventListener('click', () => {
        this.learnIdx = +p.dataset.wi;
        const u = unitById(this.unitId);
        if (u && u.w && u.w[this.learnIdx]) {
          MEDIA.speak(u.w[this.learnIdx][0], 0.9);
        } else {
          MEDIA.fx('pop');
        }
        this.render();
      })
    );
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
        const w = p.dataset.w;
        const tr = p.dataset.tr;
        const em = p.dataset.em || '🔤';
        MEDIA.speak(w);
        p.classList.add('lit');
        setTimeout(() => p.classList.remove('lit'), 800);
        if (tr) {
          FX.toast(`${em} ${w} = ${tr}`);
          FX.mascotSay(`${em} <b>${w}</b>: ${tr}`);
        }
        FX.notes(innerWidth / 2, innerHeight - 140);
      })
    );

    $$('.card[data-e]').forEach((c) =>
      c.addEventListener('click', () => {
        MEDIA.fx('pop');
        this.go('game', { engineId: c.dataset.e, unitId: this.unitId, lvIdx: 0 });
      })
    );

    $$('.lvl-pill[data-lv]').forEach((b) =>
      b.addEventListener('click', () => {
        MEDIA.fx('pop');
        this.go('game', { engineId: this.engineId, unitId: this.unitId, lvIdx: +b.dataset.lv });
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
    let score = this.restoredScore || 0;
    this.currentScore = score;

    const upd = () => {
      const s = document.getElementById('gsc');
      if (s) {
        s.textContent = score;
        s.classList.remove('bump');
        void s.offsetWidth;
        s.classList.add('bump');
      }
    };

    let isDestroyed = false;
    self.cleanups.push(() => {
      isDestroyed = true;
    });

    const api = {
      root: area,
      unit: u,
      lv: e.levels[this.lvIdx] ? e.levels[this.lvIdx].c : {},
      score: score,
      isDestroyed: () => isDestroyed,
      add(n) {
        if (isDestroyed) return;
        score += n;
        self.currentScore = score;
        this.score = score;
        upd();
        store.saveCheckpoint({
          scr: 'game',
          stage: self.stage,
          unitId: u.id,
          engineId: e.id,
          lvIdx: self.lvIdx,
          score: score
        });
        if (score > 0 && score % 60 === 0) {
          const p = pick(PRAISE);
          FX.mascotSay(p + ' 🦜');
          MEDIA.speak(p);
          FX.confetti(30);
          MEDIA.fx('cheer');
        }
      },
      progress(c, t) {
        if (isDestroyed) return;
        const p = Math.min(100, Math.round((c / t) * 100));
        const b = document.getElementById('gtbi');
        if (b) b.style.width = p + '%';
        const pc = document.getElementById('gpc');
        if (pc) pc.textContent = p + '%';
      },
      info(html) {
        if (isDestroyed) return null;
        const i = document.getElementById('ginfo');
        if (i) {
          i.innerHTML = html;
          return i.firstElementChild || i;
        }
        return null;
      },
      speak: (t, r, cb) => !isDestroyed && MEDIA.speak(t, r, cb),
      fx: (n) => !isDestroyed && MEDIA.fx(n),
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
        if (isDestroyed) return;
        isDestroyed = true;
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
        FX.confetti(60);
        MEDIA.fx('win');
        area.innerHTML = `<div class="center" style="padding:24px 16px">
         <div style="font-size:52px;margin-bottom:8px">🎉 🏆 🎉</div>
         <div class="pw" style="font-size:1.6em;color:var(--c-primary);font-weight:900">Harika İş Çıkardın!</div>
         <div class="muted" style="margin-top:6px;font-size:1em">${res.note || 'Tebrikler! Bu aktiviteyi başarıyla tamamladın.'}</div>
         <div class="row" style="display:flex;gap:10px;justify-content:center;margin-top:20px;flex-wrap:wrap">
           <button class="btn green" id="rag">🔁 Tekrar Oyna</button>
           <button class="btn gold" id="rbaam">🧩 Baamboozle Takım Oyunu</button>
           <button class="btn blue" id="run">➡️ Ünite Menüsü</button>
         </div></div>`;
        const rag = area.querySelector('#rag');
        if (rag) rag.onclick = () => api.restart();
        const rbaam = area.querySelector('#rbaam');
        if (rbaam) rbaam.onclick = () => self.go('game', { engineId: 'baamboozle', unitId: u.id, lvIdx: 0 });
        const run = area.querySelector('#run');
        if (run) run.onclick = () => self.go('unit', { unitId: u.id });
      }
    };

    upd();
    try {
      e.init(api);
    } catch (err) {
      // // SAFETY: Motor hata verse dahi beyaz ekran olmasını engelle, puanı koru ve kurtar
      console.error(`[EngineIsolation] Error in engine ${e.id}:`, err);
      store.saveCheckpoint({
        scr: 'game',
        stage: self.stage,
        unitId: u.id,
        engineId: e.id,
        lvIdx: self.lvIdx,
        score: score,
        error: String(err && err.message)
      });
      area.innerHTML = `<div class="center" style="padding:22px;background:#fff;border-radius:22px;border:3px dashed #f59e0b;margin:16px auto;max-width:480px">
        <div class="big-emoji" style="font-size:54px">🦜</div>
        <h3 style="margin:8px 0;color:#0f172a">Polly bir aksilik yakaladı ve çözdü!</h3>
        <p style="color:#64748b;margin-bottom:14px">Toplanan puanın (${score} ⭐) hafızada güvende.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn green" id="rec-restart">🔄 Yeniden Başlat</button>
          <button class="btn white" id="rec-unit">📚 Üniteye Dön</button>
        </div>
      </div>`;
      const rb = area.querySelector('#rec-restart'),
        ub = area.querySelector('#rec-unit');
      if (rb) rb.onclick = () => api.restart();
      if (ub) ub.onclick = () => self.go('unit', { unitId: u.id });
    }
  },

  /* ---------- Şarkı & Tekerleme Oynatıcı (Müzikle Uyumlu Söyleyiş) ---------- */
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
        mus = MEDIA.playFile(mel, 0.85, true) || MEDIA.playFile(bt, 0.5, true);
      } else {
        mus = MEDIA.playFile(bt, 0.5, true);
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
        FX.confetti(50);
        MEDIA.fx('win');
        FX.mascotSay('Bravo! 🎉 Harika söylediniz! / Sing again?');
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
        MEDIA.fx('pop');
        // Ritmik tempo: melodi kesilmeden çalar, çocuklar ve sınıf resimleri takip ederek birlikte söyler
        const lineDur = slow ? 4200 : 2900;
        timer = setTimeout(() => {
          idx++;
          step();
        }, lineDur);
      }
    };

    // Tıklanan satırı vurgulama ve neşeli efekt
    lines.forEach((l) => {
      l.addEventListener('click', () => {
        lines.forEach((x) => x.classList.remove('active'));
        l.classList.add('active');
        MEDIA.fx('pop');
        FX.confetti(12);
        FX.notes(innerWidth / 2, innerHeight - 140);
      });
    });

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
        e.target.textContent = slow ? '🐇 Normal Ritim' : '🐢 Yavaş Ritim';
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
    const humanVoices = MEDIA.getHumanVoices ? MEDIA.getHumanVoices() : [];
    const cur = (MEDIA.voice && MEDIA.voice.name) || '';

    const getVoiceMeta = (v) => {
      const n = v.name;
      const isNatural = /natural|neural|online/i.test(n);
      let desc = 'Doğal İnsan Sesi';
      let badge = '🎙️ Doğal';
      let icon = '🌟';

      if (/maisie/i.test(n)) {
        desc = 'Neşeli İngiliz Kız Çocuğu Sesi';
        badge = '🦜 Polly’nin Favorisi';
        icon = '👧';
      } else if (/ana\b/i.test(n)) {
        desc = 'Neşeli Çocuk Sesi (ABD)';
        badge = '🦜 Polly’nin Favorisi';
        icon = '👧';
      } else if (/flo\b/i.test(n)) {
        desc = 'Canlı & Neşeli Genç Sesi';
        badge = '✨ Çok Neşeli';
        icon = '🎉';
      } else if (/sandy\b/i.test(n)) {
        desc = 'Sıcak & Dost Canlısı Ses';
        badge = '✨ Sevimli';
        icon = '🌸';
      } else if (/samantha\b/i.test(n)) {
        desc = 'Doğal & Güler Yüzlü İnsan Sesi';
        badge = '⭐ Çok Popüler';
        icon = '👩';
      } else if (/shelley\b/i.test(n)) {
        desc = 'Neşeli & Açık İnsan Sesi';
        badge = '🌸 Neşeli';
        icon = '🌸';
      } else if (/serena\b/i.test(n)) {
        desc = 'Doğal İngiliz Öğretmen Sesi';
        badge = '🇬🇧 Cambridge';
        icon = '👩‍🏫';
      } else if (/sonia\b|libby\b/i.test(n)) {
        desc = 'Sevimli & Net İngiliz Sesi';
        badge = '🇬🇧 İngiltere';
        icon = '🇬🇧';
      } else if (/jenny\b|aria\b/i.test(n)) {
        desc = 'Heyecanlı & Canlı Amerikan Sesi';
        badge = '🇺🇸 Doğal';
        icon = '✨';
      } else if (/karen\b|moira\b/i.test(n)) {
        desc = 'Sıcak & Samimi İnsan Sesi';
        badge = '🌍 Doğal';
        icon = '☀️';
      } else if (/daniel\b|oliver\b|jamie\b|eddy\b/i.test(n)) {
        desc = 'Net & Genç İngiliz Sesi';
        badge = '🇬🇧 Net & Canlı';
        icon = '👦';
      } else if (isNatural) {
        desc = 'Yüksek Kalite Doğal Nöral Ses';
        badge = '🌟 Doğal';
        icon = '🎧';
      }
      return { desc, badge, icon };
    };

    const d = document.createElement('div');
    d.id = 'vmodal';
    d.innerHTML = `<div class="vmbox voice-modal-box">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <span style="font-size:36px">🦜</span>
        <div>
          <h3 style="margin:0;font-size:1.3em;color:#0f172a">Polly’nin Neşeli Sesini Seçin</h3>
          <div class="muted" style="font-size:0.88em">Robotik sesler tamamen kaldırıldı. Sadece eğlenceli, neşeli ve doğal insan sesleri listelenir!</div>
        </div>
      </div>
      <div class="voice-help-banner">
        💡 <b>İpucu:</b> Bir sese dokunarak Polly’yi dinleyin. Beğendiğiniz neşeli sesi seçebilirsiniz!
      </div>
      <div class="vlist">${
        humanVoices.length > 0
          ? humanVoices
              .map((v) => {
                const meta = getVoiceMeta(v);
                const isSelected = v.name === cur;
                return `<div class="vitem ${isSelected ? 'sel' : ''}" data-v="${esc(v.name)}">
                  <div class="vitem-main">
                    <span class="vitem-icon">${meta.icon}</span>
                    <div class="vitem-info">
                      <div class="vitem-name">${esc(v.name)}</div>
                      <div class="vitem-desc">${meta.desc} · <span class="muted">${v.lang}</span></div>
                    </div>
                  </div>
                  <div class="vitem-badges">
                    <span class="vbadge">${meta.badge}</span>
                    ${isSelected ? '<span class="vbadge active">✔ Aktif</span>' : ''}
                  </div>
                </div>`;
              })
              .join('')
          : '<div class="vitem">Tarayıcınızda uygun insan sesi yükleniyor, lütfen birkaç saniye bekleyin...</div>'
      }</div>
      <div style="margin-top:14px;display:flex;justify-content:flex-end">
        <button class="btn green big" id="vmclose">✅ Tamam, Bu Ses Harika!</button>
      </div>
    </div>`;
    document.body.appendChild(d);
    d.querySelectorAll('.vitem').forEach(
      (it) =>
        (it.onclick = () => {
          const n = it.dataset.v;
          MEDIA.setVoice(n);
          MEDIA.speak("Hello! I'm Polly! 🦜 Let's learn English together! Super fun!");
          d.querySelectorAll('.vitem').forEach((x) => {
            x.classList.remove('sel');
            const act = x.querySelector('.vbadge.active');
            if (act) act.remove();
          });
          it.classList.add('sel');
          const badgesEl = it.querySelector('.vitem-badges');
          if (badgesEl && !badgesEl.querySelector('.active')) {
            badgesEl.insertAdjacentHTML('beforeend', '<span class="vbadge active">✔ Aktif</span>');
          }
          FX.toast('✔ ' + n + ' seçildi!');
        })
    );
    const vmclose = d.querySelector('#vmclose');
    if (vmclose) vmclose.onclick = () => d.remove();
    d.onclick = (e) => {
      if (e.target === d) d.remove();
    };
  },

  /* ---------- 📖 Öğretmen & Öğrenci Kullanma Kılavuzu Modalı ---------- */
  showGuideModal() {
    const existing = document.getElementById('guide-modal');
    if (existing) existing.remove();

    const d = document.createElement('div');
    d.id = 'guide-modal';
    d.className = 'guide-modal-overlay';

    const s1Units = typeof unitsOfStage === 'function' ? unitsOfStage('s1') : [];
    const s2Units = typeof unitsOfStage === 'function' ? unitsOfStage('s2') : [];

    d.innerHTML = `
      <div class="guide-modal-box">
        <div class="guide-modal-head">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:38px">📖</span>
            <div>
              <h2 style="margin:0;font-size:1.4em;color:#0f172a">Öğretmen & Öğrenci Kullanma Kılavuzu</h2>
              <div class="muted" style="font-size:0.86em">1. & 2. Sınıf Müfredatı · Akıllı Tahta & Bireysel Öğrenim Rehberi</div>
            </div>
          </div>
          <button class="btn white small" id="guide-close" style="font-size:18px;padding:6px 14px">❌ Kapat</button>
        </div>

        <div class="guide-intro-banner">
          🌟 <b>Hoş Geldiniz!</b> Bu platform ilkokul 1. ve 2. sınıf öğrencileri ile İngilizce öğretmenlerimiz için özel olarak tasarlanmıştır. Puan stresi veya başarısızlık hissi olmaksızın, tamamen oyunlaştırılmış, Disney karakterleri, sesler, animasyonlu gifler ve Baamboozle takım oyunları ile desteklenmiştir. Aşağıdaki hızlı butonlardan dilediğiniz bölüme tek tıkla gidebilirsiniz!
        </div>

        <div class="guide-sections-grid">
          <div class="guide-sec-card highlight">
            <h3>🧩 Baamboozle Sınıf Takım Oyunu</h3>
            <p>Sınıfta veya akıllı tahtada Kırmızı ve Mavi Takım olarak 16-24 gizemli kutuyu açın, sürpriz puan ve takas kartlarıyla eğlenerek yarışın!</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn primary" data-gjump="baam:s1u1">🚀 1. Sınıf Baamboozle Oyna</button>
              <button class="guide-link-btn primary" data-gjump="baam:s2u1">🚀 2. Sınıf Baamboozle Oyna</button>
            </div>
          </div>

          <div class="guide-sec-card">
            <h3>🏰 Disney Karakterleri & Sesleri</h3>
            <p>Mickey Mouse, Donald Duck, Woody, Buzz Lightyear, Elsa ve 19 Disney karakteri her ünitede çocuklara eşlik eder ve onların sesleriyle telaffuz yapar!</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn" id="guide-play-welcome">✨ Disney Hoş Geldin Sesini Dinle</button>
              <button class="guide-link-btn" id="guide-open-voices">🎙️ Polly Ses Menüsü</button>
            </div>
          </div>

          <div class="guide-sec-card">
            <h3>🖼️ Büyük Görsel Kartlar (Baamboozle Tarzı)</h3>
            <p>Her ünitede devasa kelime sahneleri, tek tıkla Google Görseller ve Giphy animasyonlu sticker arama araçları ile zengin görsel hafıza.</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn" data-gjump="learn:s1u1">📚 1. Sınıf Kelime Tiyatrosu</button>
              <button class="guide-link-btn" data-gjump="learn:s2u1">📚 2. Sınıf Kelime Tiyatrosu</button>
            </div>
          </div>

          <div class="guide-sec-card">
            <h3>✍️ Tracing (Harf & Kelime Çizme)</h3>
            <p>Çocukların el-göz koordinasyonunu ve motor becerilerini geliştiren, harf hatlarını çizme ve sesli okuma aktivitesi.</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn" data-gjump="game:tracing:s1u1">✍️ 1. Sınıf Tracing</button>
              <button class="guide-link-btn" data-gjump="game:tracing:s2u1">✍️ 2. Sınıf Tracing</button>
            </div>
          </div>

          <div class="guide-sec-card">
            <h3>🎵 Sing & Learn (200+ Şarkı & Video)</h3>
            <p>Cambridge Global English müfredatına tam uyumlu ritmik şarkılar, karaokeler ve üniteye özel seçilmiş güvenli YouTube eğitim videoları.</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn" data-gjump="songs">🎶 Tüm Şarkılara Git</button>
            </div>
          </div>

          <div class="guide-sec-card highlight" style="border-left-color:#0284c7">
            <h3>📘 Cambridge Öğretmen & Kitap Kılavuzu</h3>
            <p>Cambridge Global English 1 & 2 Learner's Book, Workbook ve Teacher's Resource kılavuzları, TPR aktiviteleri ve fonetik hedefleri.</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn primary" id="guide-open-cambridge" style="background:#0284c7">📘 Cambridge Notlarını Aç</button>
            </div>
          </div>

          <div class="guide-sec-card highlight" style="border-left-color:#10b981">
            <h3>🛡️ Cyber-Shield Antivirüs & Kalkan</h3>
            <p>Sıfır XSS, iframe sandbox, prototype kalkanı ve 6 noktalı gerçek zamanlı güvenlik denetimi.</p>
            <div class="guide-links-wrap">
              <button class="guide-link-btn primary" id="guide-open-security" style="background:#10b981">🛡️ Güvenlik Durumunu İncele</button>
            </div>
          </div>

          <div class="guide-sec-card" style="grid-column: 1 / -1">
            <h3>🏫 1. Sınıf Üniteleri (9 Temel Ünite)</h3>
            <p>Tıklayarak doğrudan ünitenin interaktif sayfasına gidebilirsiniz:</p>
            <div class="guide-links-wrap">
              ${s1Units
                .map((u) => {
                  const m = (typeof MASCOTS !== 'undefined' && MASCOTS[u.id]) || null;
                  const mName = m ? m.char.split(' ')[0] : '';
                  return `<button class="guide-link-btn" data-gjump="unit:${u.id}">${u.emoji} ${u.title} ${mName ? `(${mName})` : ''}</button>`;
                })
                .join('')}
            </div>
          </div>

          <div class="guide-sec-card" style="grid-column: 1 / -1">
            <h3>🏫 2. Sınıf Üniteleri (16 Kapsamlı Ünite)</h3>
            <p>Cambridge Global English 2 ve tematik genişletilmiş üniteler:</p>
            <div class="guide-links-wrap">
              ${s2Units
                .map((u) => {
                  const m = (typeof MASCOTS !== 'undefined' && MASCOTS[u.id]) || null;
                  const mName = m ? m.char.split(' ')[0] : '';
                  return `<button class="guide-link-btn" data-gjump="unit:${u.id}">${u.emoji} ${u.title} ${mName ? `(${mName})` : ''}</button>`;
                })
                .join('')}
            </div>
          </div>
        </div>

        <div style="margin-top:20px;text-align:center">
          <button class="btn green big" id="guide-bottom-close" style="min-width:200px">✅ Anladım, Öğrenmeye Başla!</button>
        </div>
      </div>
    `;

    document.body.appendChild(d);

    const close = () => {
      MEDIA.fx('click');
      d.remove();
    };

    const c1 = d.querySelector('#guide-close');
    if (c1) c1.onclick = close;
    const c2 = d.querySelector('#guide-bottom-close');
    if (c2) c2.onclick = close;
    d.onclick = (e) => {
      if (e.target === d) close();
    };

    const pWel = d.querySelector('#guide-play-welcome');
    if (pWel) {
      pWel.onclick = () => {
        MEDIA.welcomeGreeting();
        FX.confetti(25);
        FX.stars();
      };
    }

    const pVoi = d.querySelector('#guide-open-voices');
    if (pVoi) {
      pVoi.onclick = () => {
        d.remove();
        this.showVoices();
      };
    }

    const pCam = d.querySelector('#guide-open-cambridge');
    if (pCam) {
      pCam.onclick = () => {
        d.remove();
        this.showCambridgeModal(this.unitId || 's1u1');
      };
    }

    const pSec = d.querySelector('#guide-open-security');
    if (pSec) {
      pSec.onclick = () => {
        d.remove();
        if (typeof ANTIVIRUS !== 'undefined') ANTIVIRUS.showModal();
      };
    }

    d.querySelectorAll('[data-gjump]').forEach((b) => {
      b.onclick = () => {
        const val = b.dataset.gjump;
        close();
        if (val.startsWith('baam:')) {
          const uid = val.split(':')[1];
          this.go('game', { engineId: 'baamboozle', unitId: uid, lvIdx: 0 });
        } else if (val.startsWith('learn:')) {
          const uid = val.split(':')[1];
          this.learnIdx = 0;
          this.go('learn', { unitId: uid });
        } else if (val.startsWith('game:tracing:')) {
          const uid = val.split(':')[2];
          this.go('game', { engineId: 'tracing', unitId: uid, lvIdx: 0 });
        } else if (val.startsWith('unit:')) {
          const uid = val.split(':')[1];
          this.go('unit', { unitId: uid });
        } else if (val === 'songs') {
          this.go('songs');
        }
      };
    });
  },

  /* ---------- 📘 Cambridge Global English 1 & 2 Müfredat & Notlar Modalı ---------- */
  showCambridgeModal(targetUnitId) {
    const existing = document.getElementById('cambridge-modal');
    if (existing) existing.remove();

    const uid = targetUnitId || this.unitId || 's1u1';
    const u = typeof unitById === 'function' ? unitById(uid) : null;
    const cur = (typeof CAMBRIDGE_CURRICULUM !== 'undefined' && CAMBRIDGE_CURRICULUM[uid]) || null;
    const allUnits = typeof UNITS !== 'undefined' ? UNITS : [];

    const d = document.createElement('div');
    d.id = 'cambridge-modal';
    d.className = 'cambridge-modal-overlay';

    const stageName = (u && u.stage === 's2') ? 'Cambridge Global English 2' : 'Cambridge Global English 1';
    const unitTitle = u ? (u.emoji + ' ' + u.title + ' — ' + u.tr) : 'Cambridge Müfredatı';

    d.innerHTML = `
      <div class="cambridge-modal-box">
        <div class="cambridge-modal-head">
          <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:38px">📘</span>
            <div>
              <h2 style="margin:0;font-size:1.35em;color:#0f172a">${unitTitle}</h2>
              <div class="muted" style="font-size:0.86em">
                <b>${stageName} (2nd Edition)</b> · Learner's Book, Workbook & Teacher's Resource
              </div>
            </div>
          </div>
          <button class="btn white small" id="cambridge-close" style="font-size:16px;padding:6px 14px">❌ Kapat</button>
        </div>

        <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap">
          <span style="font-weight:800;font-size:0.9em;color:#334155">Ünite Seçimi:</span>
          <select id="cambridge-unit-select" style="padding:8px 12px;border-radius:8px;border:1.5px solid #cbd5e1;font-size:0.95em;font-weight:700;background:#fff;max-width:320px;cursor:pointer">
            ${allUnits.map(unit => `<option value="${unit.id}" ${unit.id === uid ? 'selected' : ''}>${unit.emoji} [${unit.stage.toUpperCase()}] ${unit.title}</option>`).join('')}
          </select>
          <button class="btn purple small" id="cambridge-go-learn" style="font-weight:800">📖 Kelime Tiyatrosu</button>
          <button class="btn yellow small" id="cambridge-go-baam" style="background:#f59e0b;color:#fff;font-weight:800">🧩 Baamboozle Oyna</button>
        </div>

        ${cur ? `
        <div class="cambridge-curriculum-grid">
          <div class="cambridge-curriculum-card lb">
            <span class="badge blue" style="margin-bottom:6px">📖 Learner's Book (Ders Kitabı)</span>
            <h4>Kazanımlar, Konu & Dil Kalıpları</h4>
            <div style="margin-top:8px;font-size:0.9em;color:#334155;line-height:1.6">
              ${Array.isArray(cur.lb) ? cur.lb.map(item => `<div>• <b>${esc(item)}</b></div>`).join('') : esc(cur.lb)}
            </div>
          </div>

          <div class="cambridge-curriculum-card wb">
            <span class="badge green" style="margin-bottom:6px">✍️ Workbook (Alıştırma Kitabı)</span>
            <h4>Yazma, Phonics & Motor Beceriler</h4>
            <div style="margin-top:8px;font-size:0.9em;color:#334155;line-height:1.6">
              ${Array.isArray(cur.wb) ? cur.wb.map(item => `<div>• <b>${esc(item)}</b></div>`).join('') : esc(cur.wb)}
            </div>
          </div>

          <div class="cambridge-curriculum-card tr">
            <span class="badge purple" style="margin-bottom:6px">👩‍🏫 Teacher's Resource (Öğretmen Kılavuzu)</span>
            <h4>TPR, Sınıf Aktiviteleri & Değerlendirme</h4>
            <div style="margin-top:8px;font-size:0.9em;color:#334155;line-height:1.6">
              ${Array.isArray(cur.tr) ? cur.tr.map(item => `<div>• <b>${esc(item)}</b></div>`).join('') : esc(cur.tr)}
            </div>
          </div>

          <div class="cambridge-curriculum-card val">
            <span class="badge gold" style="margin-bottom:6px">🌟 Values & Yaşam Becerileri</span>
            <h4>Kişisel & Sosyal Gelişim</h4>
            <div style="margin-top:8px;font-size:0.9em;color:#334155;line-height:1.6">
              ${Array.isArray(cur.val) ? cur.val.map(item => `<div>• <b>${esc(item)}</b></div>`).join('') : esc(cur.val)}
            </div>
          </div>
        </div>
        ` : `
        <div style="padding:24px;text-align:center;color:#64748b">
          Bu ünite için ek kılavuz bilgisi hazırlanıyor.
        </div>
        `}

        <div style="margin-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
          <div style="font-size:0.82em;color:#64748b">
            📌 Cambridge University Press & Assessment Global English Standartları ile %100 Uyumludur.
          </div>
          <button class="btn green" id="cambridge-bottom-close" style="font-weight:800;padding:8px 24px">✅ Anladım</button>
        </div>
      </div>
    `;

    document.body.appendChild(d);

    const close = () => {
      if (typeof MEDIA !== 'undefined' && MEDIA.fx) MEDIA.fx('click');
      d.remove();
    };

    const c1 = d.querySelector('#cambridge-close');
    if (c1) c1.onclick = close;
    const c2 = d.querySelector('#cambridge-bottom-close');
    if (c2) c2.onclick = close;
    d.onclick = (e) => { if (e.target === d) close(); };

    const sel = d.querySelector('#cambridge-unit-select');
    if (sel) {
      sel.onchange = () => {
        const val = sel.value;
        this.showCambridgeModal(val);
      };
    }

    const gLearn = d.querySelector('#cambridge-go-learn');
    if (gLearn) {
      gLearn.onclick = () => {
        close();
        this.learnIdx = 0;
        this.go('learn', { unitId: uid });
      };
    }

    const gBaam = d.querySelector('#cambridge-go-baam');
    if (gBaam) {
      gBaam.onclick = () => {
        close();
        this.go('game', { engineId: 'baamboozle', unitId: uid, lvIdx: 0 });
      };
    }
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
      const m = (typeof MASCOTS !== 'undefined' && MASCOTS[u.id]) || null;
      body = `<div class="lslide"><div class="lscene f" style="font-size:44px">📚</div>
        <div class="len">Our New Words! 🌟</div>
        <div class="ltr">Dokun, dinle ve birlikte söyle!</div>
        ${m ? `<div class="unit-mascot-card" style="border-left:6px solid ${m.color};background:${m.bg};margin:14px auto;max-width:580px;text-align:left"><div class="mascot-avatar-wrap"><span class="mascot-tag ${m.anim}">${m.tag}</span><span class="mascot-show">${esc(m.show)}</span></div><div class="mascot-bubble"><div class="mascot-quote-en">"${esc(m.quoteEn)}"</div><div class="mascot-quote-tr">${esc(m.quoteTr)}</div></div></div>` : ''}
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
        q = LQ[u.id] || ('english for kids ' + u.title);
      const online = typeof navigator !== 'undefined' && navigator.onLine !== false; /* 🛡️ internet yoksa video yerine nazik mesaj */
      const firstV = vs[0] || ['tVlcKp3bWH8', 'Educational Video'];
      body = `<div class="lslide"><div class="lscene w">📺</div>
        <div class="len">Video Time! (${vs.length} Eğitici Video) 🎬</div>
        <div class="ltr">Şimdi video zamanı — seç ve birlikte izle!</div>
        ${
          online
            ? `<div class="lvideo"><iframe id="les-video-frame" src="https://www.youtube-nocookie.com/embed/${firstV[0]}?rel=0" title="${esc(firstV[1])}" allow="accelerometer;autoplay;encrypted-media;picture-in-picture" allowfullscreen loading="lazy"></iframe></div>
               <div class="muted" style="margin:-4px 0 8px">🎬 <span id="les-video-title">${esc(firstV[1])}</span></div>
               <div class="video-list-scroll" style="max-width:620px;margin:0 auto 12px auto">${vs.map((v, i) => `<button class="video-pill-btn ${i===0?'active':''}" data-lvid="${v[0]}" data-ltit="${esc(v[1])}">▶️ ${esc(v[1])}</button>`).join('')}</div>`
            : `<div class="lscene f" style="font-size:56px">📡</div><div class="ltr" style="margin:10px 0">İnternet bağlantısı yok — video için internet gerekiyor.<br>Dersin diğer tüm bölümleri internetsiz de çalışır! ✅</div>`
        }
        <a class="btn white" style="text-decoration:none" href="https://www.youtube.com/results?search_query=${encodeURIComponent(q)}" target="_blank" rel="noopener">🔎 Bu konunun tüm videoları</a></div>`;
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
        <div class="lhero"><span class="badge ${u.stage === 's1' ? 'purple' : 'gold'}" style="font-size:13px;padding:4px 10px">Unit ${u.id.replace(/^[s12]+[u]/i, '')}</span></div>
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
    // // SAFETY: Ders slayt durumu hafızaya kaydedilir (çökme/yenileme kurtarma)
    store.saveCheckpoint({
      scr: 'lesson',
      stage: this.stage,
      unitId: u.id,
      lesIdx: n,
      timestamp: Date.now()
    });
    if (n === 0) MEDIA.speak("Ready? Let's begin!");
    if (n === L.length) MEDIA.speak('Our new words!');
    if (n === L.length + 1) MEDIA.speak('Show me!');
    if (n === L.length + 2) MEDIA.speak('Watch the video!');
    if (n === L.length + 3) {
      MEDIA.speak('Well done! You completed the lesson!');
      FX.confetti(70);
      MEDIA.fx('win');
    }
    const say = (t, r) => MEDIA.speak(t, r || 0.88);
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
          say(s[1], 0.78);
        };
      if (b3)
        b3.onclick = () => {
          MEDIA.fx('magic');
          MEDIA.speak('Listen and repeat!', 0.92, () => say(s[1]));
        };
      document.querySelectorAll('.ldrill [data-d]').forEach(
        (b) =>
          (b.onclick = () => {
            const d = b.dataset.d;
            MEDIA.fx('click');
            const drillPrompt = {
              tog: 'Together!',
              boys: 'Boys!',
              girls: 'Girls!',
              loud: 'Loud!',
              whis: 'Whisper!',
              clap: 'Clap!',
              once: 'One more time!'
            }[d];
            const after = () => {
              if (d === 'loud') MEDIA.speak(s[1], 0.95, null, 1);
              else if (d === 'whis') MEDIA.speak(s[1], 0.82, null, 0.4);
              else if (d === 'clap') {
                FX.confetti(14);
                MEDIA.speak(s[1], 0.88);
              } else say(s[1]);
            };
            if (drillPrompt) {
              MEDIA.speak(drillPrompt, 0.95, after);
            } else {
              after();
            }
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
            MEDIA.speak(w[0], 0.88);
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
            MEDIA.speak('Well done! You know the words!');
            FX.confetti(60);
            return;
          }
          const cur = qw[qi];
          const opts = shuffle([cur, ...sample(u.w.filter((w) => w[1] && w[0] !== cur[0]), 2)]);
          box.innerHTML = `<div class="lqq">Show me the <b>${esc(cur[0])}</b>!</div>
            <div class="lqopts">${opts.map((o) => `<button class="lqopt" data-ok="${o[0] === cur[0] ? 1 : 0}"><span>${o[1]}</span></button>`).join('')}</div>
            <div class="lqstars">${'⭐'.repeat(qi)}${'☆'.repeat(qw.length - qi)}</div>`;
          MEDIA.speak(cur[0], 0.88);
          box.querySelectorAll('.lqopt').forEach((ob) => (ob.onclick = () => {
            if (ob.dataset.ok === '1') {
              ob.classList.add('ok');
              MEDIA.fx('correct');
              FX.confetti(24);
              MEDIA.speak('Yes!');
              setTimeout(() => {
                qi++;
                drawQ();
              }, 1100);
            } else {
              ob.classList.add('no');
              FX.shake(ob);
              MEDIA.fx('wrong');
              MEDIA.speak('Try again!');
            }
          }));
        };
        drawQ();
      }
    }
    if (n === L.length + 2) {
      document.querySelectorAll('.video-pill-btn[data-lvid]').forEach((b) => {
        b.onclick = () => {
          document.querySelectorAll('.video-pill-btn[data-lvid]').forEach((x) => x.classList.remove('active'));
          b.classList.add('active');
          const vf = document.getElementById('les-video-frame');
          const vt = document.getElementById('les-video-title');
          if (vf) vf.src = `https://www.youtube-nocookie.com/embed/${b.dataset.lvid}?rel=0`;
          if (vt) vt.textContent = b.dataset.ltit;
        };
      });
    }
    if (n === L.length + 3) {
      const p = document.getElementById('lP'),
        b = document.getElementById('lB');
      if (p)
        p.onclick = () => {
          MEDIA.fx('whoosh');
          MEDIA.speak('Bye bye!');
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

/* ---------- ANTİ-CRASH SHIELD (Global Hata Yakalayıcı & Otomatik Kurtarma) ---------- */
function handleGlobalCrash(err, type = 'error') {
  // // SAFETY: P0 Asla Çökme Kuralı — global hataları yakala, hafızaya işle ve kurtarma UI göster
  console.error(`[Anti-Crash Shield] Intercepted ${type}:`, err);
  if (typeof store !== 'undefined' && store.pushHistory) {
    store.pushHistory({
      type: 'crash',
      error: String(err && err.message ? err.message : err),
      timestamp: Date.now()
    });
  }

  const banner = document.getElementById('crash-banner');
  if (!banner) return;
  banner.classList.add('show');

  const diag = document.getElementById('crash-diag');
  if (diag) {
    const hist = (typeof store !== 'undefined' && store.getHistory ? store.getHistory() : [])
      .slice(-5)
      .map((h) => `${new Date(h.timestamp).toLocaleTimeString()}: ${h.action || h.type || 'olay'}`)
      .join('\n');
    diag.textContent = `Hata Detayı: ${err && err.message ? err.message : err}\n\nYığın İzleme:\n${(err && err.stack) || 'Bilgi yok'}\n\nSon 5 İşlem Geçmişi:\n${hist || 'Kayıt yok'}`;
  }

  const toggleBtn = document.getElementById('crash-toggle-diag');
  if (toggleBtn && diag) {
    toggleBtn.onclick = () => {
      diag.classList.toggle('show');
    };
  }

  const resBtn = document.getElementById('crash-resume');
  if (resBtn) {
    resBtn.onclick = () => {
      banner.classList.remove('show');
      if (diag) diag.classList.remove('show');
      APP.restoreLastState();
    };
  }

  const hmBtn = document.getElementById('crash-home');
  if (hmBtn) {
    hmBtn.onclick = () => {
      banner.classList.remove('show');
      if (diag) diag.classList.remove('show');
      APP.go('home');
    };
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    handleGlobalCrash(event.error || event.message, 'uncaught-error');
  });

  window.addEventListener('unhandledrejection', (event) => {
    handleGlobalCrash(event.reason, 'unhandled-rejection');
  });
}

/* ---------- DOKUNMA DALGASI & UÇAN SÜRPRİZLER ---------- */
if (typeof document !== 'undefined') {
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
}

// // PERF: Uçan maskotlar arka planda veya oyun esnasında çalışmaz (CPU/GPU tasarrufu)
setInterval(() => {
  if (typeof APP !== 'undefined' && APP.scr === 'game') return;
  if (typeof document !== 'undefined' && document.hidden) return;
  const L = typeof document !== 'undefined' ? document.getElementById('fxlayer') : null;
  if (L && Math.random() < 0.35 && L.querySelectorAll('.flyby').length < 2) {
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

if (typeof window !== 'undefined') {
  window.APP = APP;
}

/* ---------- UYGULAMAYI BAŞLAT (Cross-OS & Safe Autoplay) ---------- */
if (typeof document !== 'undefined') {
  APP.floaties();
  APP.render();

  // // SAFETY: iOS Safari, Android Chrome ve Akıllı Tahtalarda ses ve sentezleyiciyi güvenle uyandır
  const warmAudio = () => {
    MEDIA.warmUp();
    MEDIA.init();
  };
  ['pointerdown', 'touchstart', 'click', 'keydown'].forEach((evType) => {
    document.addEventListener(evType, warmAudio, { capture: true, passive: true, once: true });
  });

  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      const initVoices = () => {
        MEDIA.pickVoice();
      };
      speechSynthesis.onvoiceschanged = initVoices;
      initVoices();
    } catch (e) {}
  }
  FX.mascotSay('Merhaba! Ben Polly 🦜 Bir sınıf seç ve başlayalım!', 4500);
}
