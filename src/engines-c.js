/* ============================================================
   🎮 OYUN MOTORLARI — BÖLÜM C (19-24) · v2 YENİ MOTORLAR
   ============================================================ */
const ENGINES_C=[

/* ---------------- 19) 🎯 SIRA HAFIZASI ---------------- */
{id:'seq',e:'🎯',t:'Sıra Hafızası',d:'Sırayı izle, dinle ve tekrarla!',
 stages:[1,2],levels:[{n:'Kolay (3)',c:{len:3}},{n:'Orta (4)',c:{len:4}},{n:'Zor (5)',c:{len:5}}],
 init(api){ const u=api.unit,cfg=api.lv,pool=EWORDS(u);let r=0;const R=4;
  const round=()=>{ if(r>=R){api.end({score:api.score,max:R*15,note:'Süper hafıza! 🧠'});return}
    api.progress(r+1,R);
    const seq=sample(pool,Math.min(cfg.len,pool.length));let step=0;
    const show=()=>{ if(step>=seq.length){setTimeout(ask,600);return}
      const w=seq[step];
      api.root.innerHTML=`<div class="center"><div class="prompt-box"><div class="pw">İzle ve hatırla! 👀</div></div>
        <div class="big-emoji popflash">${w[1]}</div><div class="pw">${esc(w[0])}</div>
        <div class="muted">${step+1} / ${seq.length}</div></div>`;
      MEDIA.speak(w[0]);step++;setTimeout(show,1500)};
    const ask=()=>{ let next=0, locked=false;
      api.root.innerHTML=`<div class="center"><div class="prompt-box"><div class="pw">Şimdi tekrarla! 🎯</div></div>
        <div class="opt-grid" id="sq">${shuffle(seq).map(w=>`<div class="opt" data-w="${esc(w[0])}">
          <span class="oe">${w[1]}</span><span class="ow">${esc(w[0])}</span></div>`).join('')}</div></div>`;
      api.root.querySelector('#sq').onclick=e=>{const o=e.target.closest('.opt');if(!o||locked)return;
        if(o.dataset.w===seq[next][0]){o.classList.add('ok');o.style.pointerEvents='none';MEDIA.fx('pop');next++;
          if(next===seq.length){locked=true;MEDIA.fx('correct');FX.fb(true);api.add(15);r++;setTimeout(round,950)}}
        else{o.classList.add('no');MEDIA.fx('wrong')}}};
    show();};
  round();
 }},

/* ---------------- 20) 🌧️ KELİME YAĞMURU ---------------- */
{id:'rain',e:'🌧️',t:'Kelime Yağmuru',d:'Gökten yağan doğru kelimeyi yakala!',
 stages:[1,2],levels:[{n:'Sakin',c:{dur:60,fall:2.4,per:1500}},{n:'Orta',c:{dur:60,fall:3.2,per:1300}},{n:'Sağanak',c:{dur:75,fall:4.2,per:1050}}],
 init(api){ const u=api.unit,cfg=api.lv;let t=cfg.dur,caught=0,target=pick(u.w),spawnIv=null,timerIv=null;
  api.root.innerHTML=`<div class="balloon-field" id="rf" style="background:linear-gradient(180deg,#c7d2fe,#e0f2fe)"></div>`;
  const F=api.root.querySelector('#rf');
  const infoEl=api.info(`<div class="prompt-box"><div class="pw">Yakala: <b id="rt" style="color:#1d4ed8">🎈 ${esc(target[0])} 🎈</b>
    <button class="btn small blue" id="rl">🔊</button></div></div>`);
  const setTarget=w=>{target=w;const rt=document.getElementById('rt');if(rt)rt.textContent=w[0];MEDIA.speak(w[0])};
  if(infoEl){const bl=infoEl.querySelector('#rl');if(bl)bl.onclick=()=>MEDIA.speak(target[0])}
  setTarget(target);
  const dropTimers = new Set();
  const spawn=()=>{ const others=u.w.filter(x=>x[0]!==target[0]);
    const w=Math.random()<.4?target:(others.length?pick(others):target);
    const d=el(`<div class="raindrop" style="left:${rnd(86)}%"><span class="re">${w[1]||'🔤'}</span><span class="rw">${esc(w[0])}</span></div>`);
    d.style.top='-80px';F.appendChild(d);let y=-80;
    const tm=setInterval(()=>{y+=cfg.fall;d.style.top=y+'px';
      if(y>F.clientHeight+30){clearInterval(tm);dropTimers.delete(tm);d.remove()}},30);
    dropTimers.add(tm);
    d.onclick=ev=>{ ev.stopPropagation();
      if(w[0]===target[0]){caught++;api.add(5);MEDIA.fx('catch');FX.stars(ev.clientX,ev.clientY);
        d.remove();clearInterval(tm);dropTimers.delete(tm);setTarget(pick(u.w))}
      else{MEDIA.fx('wrong');FX.shake(d)} };
  };
  spawnIv=setInterval(spawn,cfg.per);
  timerIv=setInterval(()=>{t--;api.progress(cfg.dur-t,cfg.dur);
    if(t<=0){clearInterval(spawnIv);clearInterval(timerIv);dropTimers.forEach(id=>clearInterval(id));dropTimers.clear();F.innerHTML='';
      api.end({score:api.score,max:cfg.dur,note:caught+' kelime yakaladın! 🌧️'})}},1000);
  api.cleanup(()=>{clearInterval(spawnIv);clearInterval(timerIv);dropTimers.forEach(id=>clearInterval(id));dropTimers.clear()});
 }},

/* ---------------- 21) 🔤 İLK HARF (fonik) ---------------- */
{id:'letter',e:'🅰️',t:'İlk Harf',d:'Kelimenin ilk harfini bul! (fonik)',
 stages:[1,2],levels:[{n:'Kolay (2)',c:{n:2}},{n:'Orta (3)',c:{n:3}},{n:'Zor (4)',c:{n:4}}],
 init(api){ const u=api.unit,cfg=api.lv;
  const pool=shuffle(u.w.filter(w=>/^[a-z]/i.test(w[0]))).slice(0,10);
  const allL=[...new Set(u.w.filter(w=>/^[a-z]/i.test(w[0])).map(w=>w[0][0].toUpperCase()))];
  const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let i=0;
  const round=()=>{ if(i>=pool.length){api.end({score:api.score,max:pool.length*10,note:'Harf dedektifi! 🔤'});return}
    const w=pool[i],C=w[0][0].toUpperCase();api.progress(i+1,pool.length);
    let ds=allL.filter(L=>L!==C);if(ds.length<cfg.n-1)ds=ds.concat(shuffle(ABC.split('').filter(L=>L!==C&&!ds.includes(L))));
    const opts=shuffle([C,...sample(ds,cfg.n-1)]);
    api.root.innerHTML=`<div class="center">
      <div class="prompt-box"><span class="pe">${w[1]||'🔤'}</span><div class="pw">${esc(w[0])}</div>
        <button class="btn small blue" id="lh">🔊 Dinle</button></div>
      <div class="opt-grid">${opts.map(L=>`<div class="opt txt" data-l="${L}">
        <span class="ow" style="font-size:2.2em;color:#7c3aed">${L}</span></div>`).join('')}</div></div>`;
    MEDIA.speak(w[0]);
    api.root.querySelector('#lh').onclick=()=>MEDIA.speak(w[0]);
    let locked = false;
    api.root.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{
      if(locked) return;
      if(o.dataset.l===C){
        locked = true;
        o.classList.add('ok');MEDIA.fx('correct');FX.fb(true);MEDIA.speak(C);api.add(10);i++;setTimeout(round,850);
      } else {
        locked = true;
        o.classList.add('no');MEDIA.fx('wrong');
        api.root.querySelectorAll('.opt').forEach(x=>{if(x.dataset.l===C)x.classList.add('ok')});
        setTimeout(()=>{i++;round()},1300);
      }
    });
  };round();
 }},

/* ---------------- 22) 📖 CÜMLE TAMAMLA ---------------- */
{id:'cloze',e:'📖',t:'Cümle Tamamla',d:'Cümledeki eksik kelimeyi seç!',
 stages:[1,2],levels:[{n:'Kolay (2 şık)',c:{n:2}},{n:'Zor (3 şık)',c:{n:3}}],
 init(api){ const u=api.unit,cfg=api.lv;const rounds=[];
  const rx=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  u.s.forEach(s=>{ const inS=u.w.filter(w=>new RegExp('\\b'+rx(w[0])+'\\b','i').test(s[0]));
    if(inS.length)rounds.push({s,w:pick(inS)})});
  const R=shuffle(rounds).slice(0,8);let i=0;
  if(!R.length){api.root.innerHTML='<div class="center"><div class="big-emoji">🙈</div><div>Bu ünitede cümle tamamlanacak kelime yok.</div></div>';return}
  const round=()=>{ if(i>=R.length){api.end({score:api.score,max:R.length*10,note:'Cümle kahramanı! 📖'});return}
    const r=R[i];api.progress(i+1,R.length);
    const text=r.s[0].replace(new RegExp('\\b'+rx(r.w[0])+'\\b','i'),'_____');
    const sameCat=u.w.filter(x=>x[3]===r.w[3]&&x!==r.w);
    const others=sameCat.length>=cfg.n-1?sample(sameCat,cfg.n-1):sample(u.w.filter(x=>x!==r.w),cfg.n-1);
    const opts=shuffle([r.w,...others]);
    api.root.innerHTML=`<div class="center">
      <div class="prompt-box"><span class="pe">${r.s[1]}</span>
        <div class="pw" style="font-size:1.25em">"${esc(text)}"</div>
        <button class="btn small blue" id="cl">🔊 Tümünü dinle</button></div>
      <div class="opt-grid">${opts.map(o=>`<div class="opt txt" data-ok="${o===r.w?1:0}">
        <span class="ow" style="font-size:1.3em">${esc(o[0])}</span></div>`).join('')}</div></div>`;
    MEDIA.speak(r.s[0],.85);
    api.root.querySelector('#cl').onclick=()=>MEDIA.speak(r.s[0],.85);
    let locked = false;
    api.root.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{
      if(locked) return;
      if(o.dataset.ok==='1'){
        locked = true;
        o.classList.add('ok');MEDIA.fx('correct');FX.fb(true);MEDIA.speak(r.s[0],.9);api.add(10);i++;setTimeout(round,1100);
      } else {
        locked = true;
        o.classList.add('no');MEDIA.fx('wrong');setTimeout(()=>{i++;round()},1200);
      }
    });
  };round();
 }},

/* ---------------- 23) 🏁 YARIŞ PİSTİ ---------------- */
{id:'race',e:'🏁',t:'Yarış Pisti',d:'Doğru cevaplarla rakibi geç, bitişe ilk sen ulaş!',
 stages:[1,2],levels:[{n:'Kolay',c:{qs:10,ai:10}},{n:'Zor',c:{qs:12,ai:16}}],
 init(api){ const u=api.unit,cfg=api.lv;const EW=EWORDS(u);
  let me=0,ai=0,qi=0,correct=0,done=false,iv=null;
  api.root.innerHTML=`<div class="center">
    <div class="track">
      <div class="lane"><span class="lane-label">🫵 Sen</span><span class="runner" id="rme" style="left:0%">🏃💨</span><span class="fin">🏁</span></div>
      <div class="lane sky"><span class="lane-label">🤖 Rakip</span><span class="runner" id="rai" style="left:0%">🤖</span><span class="fin">🏁</span></div>
    </div>
    <div id="rq" style="width:100%"></div></div>`;
  const RQ=api.root.querySelector('#rq'),RME=api.root.querySelector('#rme'),RAI=api.root.querySelector('#rai');
  const finish=win=>{ if(done)return;done=true;clearInterval(iv);
    if(win){MEDIA.fx('win');FX.confetti(150)}else MEDIA.fx('wrong');
    api.end({score:correct*10,max:cfg.qs*10,note:win?'Yarışı kazandın! 🏆':'Rakip kazandı — tekrar dene! 💪'})};
  const move=()=>{RME.style.left=Math.min(86,me)+'%';RAI.style.left=Math.min(86,ai)+'%';
    if(me>=100)finish(true);else if(ai>=100)finish(false)};
  const q=()=>{ if(done)return; if(qi>=cfg.qs){finish(me>=ai);return}
    qi++;api.progress(qi,cfg.qs);
    const w=pick(EW),opts=shuffle([w,...sample(EW.filter(x=>x!==w),3)]);
    RQ.innerHTML=`<div class="prompt-box"><div class="pw">${esc(w[0])} <button class="btn small blue" id="rs">🔊</button></div></div>
      <div class="opt-grid">${opts.map(o=>`<div class="opt" data-ok="${o===w?1:0}"><span class="oe">${o[1]}</span></div>`).join('')}</div>`;
    MEDIA.speak(w[0]);
    const sb=RQ.querySelector('#rs');if(sb)sb.onclick=()=>MEDIA.speak(w[0]);
    let locked = false;
    RQ.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{
      if(done || locked)return;
      if(o.dataset.ok==='1'){
        locked = true;
        o.classList.add('ok');MEDIA.fx('hop');correct++;me+=Math.round(100/cfg.qs)+2;move();setTimeout(q,650);
      } else {
        locked = true;
        o.classList.add('no');MEDIA.fx('wrong');setTimeout(q,850);
      }
    });
  };
  iv=setInterval(()=>{if(done)return;ai+=cfg.ai;move()},2500);
  api.cleanup(()=>clearInterval(iv));
  move();q();
 }},

/* ---------------- 24) 🔢 SAY VE BAS ---------------- */
{id:'count',e:'🔢',t:'Say ve Bas',d:'Kaç tane var? Doğru sayıyı bas!',
 stages:[1,2],levels:[{n:'1-5',c:{max:5,n:2}},{n:'1-10',c:{max:10,n:3}},{n:'Hızlı',c:{max:10,n:4}}],
 init(api){ const u=api.unit,cfg=api.lv;const EW=EWORDS(u);
  const NW=[['one','1️⃣'],['two','2️⃣'],['three','3️⃣'],['four','4️⃣'],['five','5️⃣'],['six','6️⃣'],['seven','7️⃣'],['eight','8️⃣'],['nine','9️⃣'],['ten','🔟']];
  const R=10;let i=0;
  const round=()=>{ if(i>=R){api.end({score:api.score,max:R*10,note:'Sayma şampiyonu! 🔢'});return}
    const n=1+rnd(cfg.max);const w=pick(EW);api.progress(i+1,R);
    const correct=NW[n-1];
    const others=sample(NW.filter(x=>x!==correct),cfg.n-1);
    const opts=shuffle([correct,...others]);
    api.root.innerHTML=`<div class="center">
      <div class="prompt-box"><div class="pw">How many? 🔍</div>
        <div class="pw" style="font-size:clamp(34px,7vw,52px);letter-spacing:6px">${w[1].repeat(n)}</div></div>
      <div class="opt-grid">${opts.map(o=>`<div class="opt txt" data-ok="${o===correct?1:0}">
        <span class="ow" style="font-size:1.5em">${o[1]} ${esc(o[0])}</span></div>`).join('')}</div></div>`;
    MEDIA.speak('How many?');
    let locked = false;
    api.root.querySelectorAll('.opt').forEach(o=>o.onclick=()=>{
      if(locked) return;
      if(o.dataset.ok==='1'){
        locked = true;
        o.classList.add('ok');MEDIA.fx('correct');FX.fb(true);MEDIA.speak(correct[0]+'!');api.add(10);i++;setTimeout(round,900);
      } else {
        locked = true;
        o.classList.add('no');MEDIA.fx('wrong');
        api.root.querySelectorAll('.opt').forEach(x=>{if(x.dataset.ok==='1')x.classList.add('ok')});
        setTimeout(()=>{i++;round()},1400);
      }
    });
  };round();
 }},

  /* ---------------- 25) ✍️ HARF & KELİME ÇİZME (TRACING) ---------------- */
  {
    id: 'trace',
    e: '✍️',
    t: 'Harf & Kelime Çizme',
    d: 'Harflerin ve kelimelerin üzerinden geç, doğru yazmayı öğren!',
    stages: [1, 2],
    levels: [
      { n: 'Harf Harf (Büyük Harf)', c: { mode: 'letter', count: 6 } },
      { n: 'Tüm Kelime (Kılavuz Çizgili)', c: { mode: 'word', count: 6 } },
      { n: 'Serbest Çizim (Kılavuz Çizgili)', c: { mode: 'free', count: 6 } }
    ],
    init(api) {
      const u = api.unit;
      const cfg = api.lv || {};
      const EW = EWORDS(u);
      const pool = shuffle(EW.length ? EW : [['STAR', '⭐', 'Yıldız', 0]]).slice(0, cfg.count || 6);
      let wordIdx = 0;
      let letterIdx = 0;
      const totalRounds = pool.length;

      let currentColor = '#8b5cf6';
      let isRainbow = false;
      let rainbowHue = 0;
      let brushSize = 18;
      let isDrawing = false;
      let lastX = 0;
      let lastY = 0;
      let checkpoints = [];
      const coveredPoints = new Set();
      let hasCompleted = false;

      const renderRound = () => {
        if (wordIdx >= totalRounds) {
          // // SAFETY / USER-REQ: Puan veya yıldız yok, saf teşvik ve tebrik mesajı
          api.end({ score: totalRounds, max: totalRounds, note: 'Harika bir çalışma! Tüm harfleri başarıyla yazdın! ✍️🎉' });
          return;
        }
        hasCompleted = false;
        coveredPoints.clear();
        checkpoints = [];

        const curWord = pool[wordIdx];
        const wordText = String(curWord[0] || '').toUpperCase();
        const wordEmoji = curWord[1] || '✍️';
        const wordTr = curWord[2] || '';

        const isLetterMode = cfg.mode === 'letter';
        const activeChar = isLetterMode ? (wordText[letterIdx] || wordText[0]) : wordText;

        api.progress(wordIdx + 1, totalRounds);

        api.root.innerHTML = `
          <div class="trace-box">
            <div class="trace-header">
              <div class="trace-word-info">
                <span class="emoji">${wordEmoji}</span>
                <div>
                  <span style="font-size:1.15em;letter-spacing:1px">${esc(curWord[0])}</span>
                  <span class="muted" style="font-size:0.75em;margin-left:6px">(${esc(wordTr)})</span>
                  ${isLetterMode ? `<span class="badge purple" style="margin-left:8px">Harf ${letterIdx + 1}/${wordText.length}: <b>${activeChar}</b></span>` : ''}
                </div>
              </div>
              <div class="trace-guide-wrap">
                <span class="trace-badge" id="t-status">✏️ Harfin üzerinden geç</span>
              </div>
            </div>

            <div class="trace-canvas-wrap" id="tcw">
              <canvas class="trace-canvas" id="tcv"></canvas>
            </div>

            <div class="trace-toolbar">
              <div class="trace-palette">
                <button class="trace-color active" data-color="#8b5cf6" style="background:#8b5cf6" title="Mor"></button>
                <button class="trace-color" data-color="#0ea5e9" style="background:#0ea5e9" title="Mavi"></button>
                <button class="trace-color" data-color="#10b981" style="background:#10b981" title="Yeşil"></button>
                <button class="trace-color" data-color="#f97316" style="background:#f97316" title="Turuncu"></button>
                <button class="trace-color" data-color="#ec4899" style="background:#ec4899" title="Pembe"></button>
                <button class="trace-color" data-color="rainbow" style="background:linear-gradient(135deg,red,orange,yellow,green,blue,indigo,violet)" title="Gökkuşağı"></button>
              </div>
              <div class="trace-actions">
                <button class="btn small white" id="t-spk" title="Seslendir">🔊 Dinle</button>
                <button class="btn small white" id="t-clr" title="Temizle">🗑️ Temizle</button>
                <button class="btn small green" id="t-nxt" title="Sonraki">Sonraki ➡️</button>
              </div>
            </div>
          </div>
        `;

        if (isLetterMode) {
          MEDIA.speak(activeChar);
        } else {
          MEDIA.speak(curWord[0]);
        }

        const canvas = api.root.querySelector('#tcv');
        const wrap = api.root.querySelector('#tcw');
        const statusEl = api.root.querySelector('#t-status');
        if (!canvas || !canvas.getContext) return; // // SAFETY: Headless/test fallback

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // // SAFETY: Missing 2d context guard

        const setupCanvasSize = () => {
          const rect = wrap ? wrap.getBoundingClientRect() : { width: 560, height: 280 };
          const dpr = typeof window !== 'undefined' && window.devicePixelRatio ? Math.min(window.devicePixelRatio, 2) : 1;
          const w = rect.width > 50 ? rect.width : 560;
          const h = rect.height > 50 ? rect.height : 280;
          canvas.width = w * dpr;
          canvas.height = h * dpr;
          if (ctx.resetTransform) ctx.resetTransform();
          if (ctx.scale) ctx.scale(dpr, dpr);
          return { w, h };
        };

        const dim = setupCanvasSize();
        const W = dim.w;
        const H = dim.h;

        const drawBackground = () => {
          if (!ctx.clearRect) return;
          ctx.clearRect(0, 0, W, H);

          const yTop = H * 0.22;
          const yMid = H * 0.44;
          const yBase = H * 0.72;
          const yBot = H * 0.90;

          if (ctx.beginPath) {
            // Top line
            ctx.strokeStyle = '#cbd5e1';
            ctx.lineWidth = 1.5;
            if (ctx.setLineDash) ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(16, yTop);
            ctx.lineTo(W - 16, yTop);
            ctx.stroke();

            // Mid dashed line
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            if (ctx.setLineDash) ctx.setLineDash([8, 6]);
            ctx.beginPath();
            ctx.moveTo(16, yMid);
            ctx.lineTo(W - 16, yMid);
            ctx.stroke();
            if (ctx.setLineDash) ctx.setLineDash([]);

            // Baseline (solid coral line)
            ctx.strokeStyle = '#f43f5e';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(16, yBase);
            ctx.lineTo(W - 16, yBase);
            ctx.stroke();

            // Bottom line (descender)
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(16, yBot);
            ctx.lineTo(W - 16, yBot);
            ctx.stroke();
          }
        };

        const drawTemplate = () => {
          if (!ctx.strokeText || !ctx.fillText) return;
          ctx.save && ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'alphabetic';

          let fontSize = H * 0.48;
          const yPos = H * 0.72;

          if (isLetterMode) {
            fontSize = Math.min(H * 0.65, 170);
            ctx.font = `900 ${fontSize}px "Comic Sans MS", "Chalkboard SE", "Nunito", sans-serif`;
          } else {
            fontSize = Math.min(H * 0.42, 95);
            ctx.font = `900 ${fontSize}px "Comic Sans MS", "Chalkboard SE", "Nunito", sans-serif`;
          }

          ctx.strokeStyle = cfg.mode === 'free' ? 'rgba(203, 213, 225, 0.35)' : '#94a3b8';
          ctx.lineWidth = isLetterMode ? 8 : 5;
          if (ctx.setLineDash) ctx.setLineDash([8, 6]);
          ctx.strokeText(activeChar, W / 2, yPos);

          ctx.fillStyle = 'rgba(241, 245, 249, 0.55)';
          ctx.fillText(activeChar, W / 2, yPos);
          if (ctx.setLineDash) ctx.setLineDash([]);
          ctx.restore && ctx.restore();

          if (checkpoints.length === 0) {
            const stepX = isLetterMode ? 14 : 20;
            const stepY = 16;
            const startX = W * 0.20;
            const endX = W * 0.80;
            const startY = H * 0.24;
            const endY = H * 0.74;
            let idCount = 0;
            for (let px = startX; px <= endX; px += stepX) {
              for (let py = startY; py <= endY; py += stepY) {
                checkpoints.push({ id: idCount++, x: px, y: py });
              }
            }
          }
        };

        drawBackground();
        drawTemplate();

        const getPos = (e) => {
          const r = canvas.getBoundingClientRect ? canvas.getBoundingClientRect() : { left: 0, top: 0 };
          return {
            x: (e.clientX || 0) - r.left,
            y: (e.clientY || 0) - r.top
          };
        };

        const checkHit = (x, y) => {
          if (hasCompleted || !checkpoints.length) return;
          const radius = brushSize * 1.5;
          for (let k = 0; k < checkpoints.length; k++) {
            const cp = checkpoints[k];
            if (!coveredPoints.has(cp.id)) {
              const dx = cp.x - x;
              const dy = cp.y - y;
              if (dx * dx + dy * dy <= radius * radius) {
                coveredPoints.add(cp.id);
              }
            }
          }

          // // PERF / SAFETY / USER-REQ: Esnek harf algılama — tüm boşlukları boyamaya gerek yok!
          // Öğrencinin harfin üzerinden bir miktar geçmesi yeterlidir, puan/yıldız baskısı yok.
          const minHits = Math.min(5, Math.max(3, Math.floor(checkpoints.length * 0.12)));
          if (coveredPoints.size >= minHits && !hasCompleted) {
            hasCompleted = true;
            if (statusEl) {
              statusEl.innerHTML = '✨ Harika yazdın! 👏';
              statusEl.classList.add('success');
            }
            MEDIA.fx('correct');
            FX.confetti(22);
            const praiseList = ['Super!', 'Great writing!', 'Well done!', 'Awesome!'];
            MEDIA.speak(praiseList[Math.floor(Math.random() * praiseList.length)]);

            setTimeout(() => {
              if (isLetterMode && letterIdx < wordText.length - 1) {
                letterIdx++;
              } else {
                letterIdx = 0;
                wordIdx++;
              }
              renderRound();
            }, 900);
          }
        };

        const startDraw = (e) => {
          e.preventDefault && e.preventDefault();
          isDrawing = true;
          const p = getPos(e);
          lastX = p.x;
          lastY = p.y;
          checkHit(p.x, p.y);
        };

        const moveDraw = (e) => {
          if (!isDrawing) return;
          e.preventDefault && e.preventDefault();
          const p = getPos(e);

          if (ctx.beginPath && ctx.moveTo && ctx.lineTo && ctx.stroke) {
            ctx.save && ctx.save();
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(p.x, p.y);

            if (isRainbow) {
              rainbowHue = (rainbowHue + 4) % 360;
              ctx.strokeStyle = `hsl(${rainbowHue}, 90%, 55%)`;
            } else {
              ctx.strokeStyle = currentColor;
            }

            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
            ctx.restore && ctx.restore();
          }

          lastX = p.x;
          lastY = p.y;
          checkHit(p.x, p.y);
        };

        const stopDraw = () => {
          isDrawing = false;
          if (!hasCompleted && coveredPoints.size >= 3) {
            checkHit(lastX, lastY);
          }
        };

        canvas.addEventListener('pointerdown', startDraw);
        canvas.addEventListener('pointermove', moveDraw);
        canvas.addEventListener('pointerup', stopDraw);
        canvas.addEventListener('pointercancel', stopDraw);

        api.root.querySelectorAll('.trace-color').forEach((b) => {
          b.onclick = () => {
            api.root.querySelectorAll('.trace-color').forEach((x) => x.classList.remove('active'));
            b.classList.add('active');
            const col = b.dataset.color;
            if (col === 'rainbow') {
              isRainbow = true;
            } else {
              isRainbow = false;
              currentColor = col;
            }
            MEDIA.fx('click');
          };
        });

        const spkBtn = api.root.querySelector('#t-spk');
        if (spkBtn) {
          spkBtn.onclick = () => {
            MEDIA.fx('click');
            if (isLetterMode) MEDIA.speak(activeChar);
            else MEDIA.speak(curWord[0]);
          };
        }

        const clrBtn = api.root.querySelector('#t-clr');
        if (clrBtn) {
          clrBtn.onclick = () => {
            if (hasCompleted) return;
            MEDIA.fx('whoosh');
            coveredPoints.clear();
            if (statusEl) {
              statusEl.innerHTML = '✏️ Harfin üzerinden geç';
              statusEl.classList.remove('success');
            }
            hasCompleted = false;
            drawBackground();
            drawTemplate();
          };
        }

        const nxtBtn = api.root.querySelector('#t-nxt');
        if (nxtBtn) {
          nxtBtn.onclick = () => {
            if (hasCompleted) return;
            MEDIA.fx('click');
            if (isLetterMode && letterIdx < wordText.length - 1) {
              letterIdx++;
            } else {
              letterIdx = 0;
              wordIdx++;
            }
            renderRound();
          };
        }
      };

      renderRound();
    }
  }
];

/* Yeni motorları listeye ekle */
ENGINES.push(...ENGINES_C);

