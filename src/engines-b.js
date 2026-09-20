/* ============================================================
   🎮 OYUN MOTORLARI — BÖLÜM B (10-18)
   ============================================================ */

const ENGINES_B = [
  /* ---------------- 10) 🎱 KELİME BİNGOSU ---------------- */
  {
    id: 'bingo',
    e: '🎱',
    t: 'Kelime Bingosu',
    d: 'Söylenen kelimeleri tombala kartında bul, bingo yap!',
    stages: [1, 2],
    levels: [
      { n: '3x3 Kart', c: { size: 9, lineToWin: 3 } },
      { n: 'Hızlı Bingo', c: { size: 9, lineToWin: 2 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      const cardWords = sample(pool, Math.min(cfg.size, pool.length));
      const marked = new Set();
      let callPool = shuffle([...cardWords]);
      let currentCall = null;

      api.root.innerHTML = `
        <div class="center">
          <div class="prompt-box">
            <div class="pw">Sıradaki Kelime: <b id="call-w" style="color:#2563eb;font-size:1.4em">...</b></div>
            <button class="btn small blue" id="call-spk">🔊 Tekrar Dinle</button>
          </div>
          <div class="opt-grid" id="bg-grid" style="grid-template-columns:repeat(3,1fr);max-width:420px;margin:12px auto">
            ${cardWords.map((w, i) => `
              <div class="opt" data-w="${esc(w[0])}" style="min-height:90px">
                <span class="oe">${w[1]}</span>
                <span class="ow">${esc(w[0])}</span>
              </div>`).join('')}
          </div>
        </div>`;

      const nextCall = () => {
        if (!callPool.length) {
          api.end({ score: marked.size * 10, max: cardWords.length * 10, note: 'Tebrikler, tüm kartlar bitti! 🎱' });
          return;
        }
        currentCall = callPool.pop();
        const cw = api.root.querySelector('#call-w');
        if (cw) cw.textContent = `${currentCall[1]} ${currentCall[0]}`;
        MEDIA.speak(currentCall[0]);
      };

      const spkBtn = api.root.querySelector('#call-spk');
      if (spkBtn) spkBtn.onclick = () => currentCall && MEDIA.speak(currentCall[0]);

      api.root.querySelector('#bg-grid').onclick = (e) => {
        const o = e.target.closest('.opt');
        if (!o || o.classList.contains('ok') || !currentCall) return;

        if (o.dataset.w === currentCall[0]) {
          o.classList.add('ok');
          o.style.pointerEvents = 'none';
          marked.add(currentCall[0]);
          MEDIA.fx('correct');
          FX.stars();
          api.add(15);
          api.progress(marked.size, cardWords.length);

          if (marked.size >= cfg.lineToWin) {
            MEDIA.fx('cheer');
            FX.toast('BINGO! 🎉');
          }
          if (marked.size >= cardWords.length) {
            setTimeout(() => {
              api.end({ score: api.score, max: cardWords.length * 15, note: 'BİNGO ŞAMPİYONU! 🏆' });
            }, 800);
          } else {
            setTimeout(nextCall, 900);
          }
        } else {
          MEDIA.fx('wrong');
          FX.shake(o);
        }
      };
      nextCall();
    }
  },

  /* ---------------- 11) ⚔️ TAKIM YARIŞI ---------------- */
  {
    id: 'team',
    e: '⚔️',
    t: 'Takım Yarışı',
    d: 'Akıllı tahta için Kırmızı & Mavi takım kapışması!',
    stages: [1, 2],
    levels: [
      { n: '5 Puan Yarışı', c: { targetScore: 5 } },
      { n: '10 Puan Yarışı', c: { targetScore: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let sA = 0, sB = 0;

      const round = () => {
        if (sA >= cfg.targetScore || sB >= cfg.targetScore) {
          const winner = sA >= cfg.targetScore ? '🔴 Kırmızı Takım' : '🔵 Mavi Takım';
          MEDIA.fx('win');
          FX.confetti(80);
          api.end({ score: Math.max(sA, sB) * 10, max: cfg.targetScore * 10, note: `${winner} Kazandı! 🏆` });
          return;
        }

        const w = pick(pool);
        const others = sample(pool.filter(x => x !== w), 3);
        const opts = shuffle([w, ...others]);

        api.root.innerHTML = `
          <div class="center">
            <div class="row" style="justify-content:space-around;width:100%;margin-bottom:12px">
              <div class="badge red" style="background:#fee2e2;color:#b91c1c;font-size:1.3em;padding:8px 18px">🔴 Kırmızı: ${sA}</div>
              <div class="badge blue" style="background:#dbeafe;color:#1d4ed8;font-size:1.3em;padding:8px 18px">🔵 Mavi: ${sB}</div>
            </div>
            <div class="prompt-box">
              <span class="pe">${w[1]}</span>
              <div class="pw">${esc(w[0])} (${esc(w[2])})</div>
              <button class="btn small blue" id="spk">🔊 Dinle</button>
            </div>
            <div class="opt-grid">
              ${opts.map(o => `
                <div class="opt" data-ok="${o === w ? 1 : 0}">
                  <span class="oe">${o[1]}</span>
                  <span class="ow">${esc(o[0])}</span>
                </div>`).join('')}
            </div>
            <div class="row" style="margin-top:16px;gap:16px">
              <button class="btn red" id="pt-a" style="background:#ef4444;color:#fff;font-weight:900">+1 Kırmızı 🔴</button>
              <button class="btn blue" id="pt-b" style="background:#3b82f6;color:#fff;font-weight:900">+1 Mavi 🔵</button>
            </div>
          </div>`;

        MEDIA.speak(w[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(w[0]);

        api.root.querySelector('#pt-a').onclick = () => {
          sA++;
          MEDIA.fx('team');
          round();
        };
        api.root.querySelector('#pt-b').onclick = () => {
          sB++;
          MEDIA.fx('team');
          round();
        };

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
            }
          };
        });
      };
      round();
    }
  },

  /* ---------------- 12) 🕳️ KÖSTEBEK VURMACA ---------------- */
  {
    id: 'mole',
    e: '🕳️',
    t: 'Köstebek Vurmaca',
    d: 'Delikten fırlayan doğru kelimeye hızla tıkla!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay', c: { speed: 2200, rounds: 8 } },
      { n: 'Hızlı', c: { speed: 1500, rounds: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let r = 0, timer = null;

      api.root.innerHTML = `
        <div class="center">
          <div class="prompt-box"><div class="pw">Hedef: <b id="mt-target" style="color:#2563eb">...</b></div></div>
          <div class="mole-grid" id="mgrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:380px;margin:16px auto">
            ${[0, 1, 2, 3, 4, 5].map(i => `
              <div class="mole-hole" data-h="${i}" style="height:90px;background:#78350f;border-radius:50%;border:4px solid #451a03;position:relative;overflow:hidden;cursor:pointer">
                <div class="mole-char" style="position:absolute;top:100%;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#fff;border-radius:20px;transition:top 0.2s">
                  <span class="me" style="font-size:32px"></span>
                  <span class="mw" style="font-weight:900;font-size:0.85em"></span>
                </div>
              </div>`).join('')}
          </div>
        </div>`;

      const holes = api.root.querySelectorAll('.mole-hole');

      const popNext = () => {
        if (r >= cfg.rounds) {
          api.end({ score: api.score, max: cfg.rounds * 10, note: 'Köstebek avcısı! 🕳️' });
          return;
        }
        api.progress(r + 1, cfg.rounds);
        const target = pick(pool);
        const targetEl = document.getElementById('mt-target');
        if (targetEl) targetEl.textContent = `${target[1]} ${target[0]}`;
        MEDIA.speak(target[0]);

        holes.forEach(h => {
          const char = h.querySelector('.mole-char');
          char.style.top = '100%';
          char.dataset.ok = '0';
        });

        const chosenHole = pick([...holes]);
        const char = chosenHole.querySelector('.mole-char');
        char.querySelector('.me').textContent = target[1];
        char.querySelector('.mw').textContent = target[0];
        char.dataset.ok = '1';
        char.style.top = '10%';
        MEDIA.fx('hop');

        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          char.style.top = '100%';
          r++;
          setTimeout(popNext, 400);
        }, cfg.speed);
      };

      holes.forEach(h => {
        h.onclick = (e) => {
          const char = h.querySelector('.mole-char');
          if (char.style.top !== '100%' && char.dataset.ok === '1') {
            char.style.top = '100%';
            MEDIA.fx('correct');
            FX.stars(e.clientX, e.clientY);
            api.add(10);
            if (timer) clearTimeout(timer);
            r++;
            setTimeout(popNext, 500);
          }
        };
      });

      api.cleanup(() => timer && clearTimeout(timer));
      popNext();
    }
  },

  /* ---------------- 13) 🔀 CÜMLE KURMA ---------------- */
  {
    id: 'scramble',
    e: '🔀',
    t: 'Cümle Kurma',
    d: 'Karışık kelimelere dokun, doğru cümleyi kur!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (Kısa Cümleler)', c: { total: 5 } },
      { n: 'Zor (Uzun Cümleler)', c: { total: 8 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      const sPool = shuffle(u.s || []).slice(0, cfg.total);
      if (!sPool.length) {
        api.root.innerHTML = '<div class="center">Bu ünitede cümle bulunamadı.</div>';
        return;
      }
      let i = 0;

      const round = () => {
        if (i >= sPool.length) {
          api.end({ score: api.score, max: sPool.length * 15, note: 'Cümle mimarı! 🔀' });
          return;
        }
        api.progress(i + 1, sPool.length);
        const sObj = sPool[i];
        const cleanSentence = sObj[0].replace(/[.,!?;:]/g, '');
        const words = cleanSentence.split(/\s+/).filter(Boolean);
        const shuffledWords = shuffle(words);
        const built = [];

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <span class="pe">${sObj[1]}</span>
              <div class="pw" style="font-size:1.2em;color:#4b5563">"${esc(sObj[2])}"</div>
              <div class="scramble-slot" id="ss" style="min-height:48px;padding:8px;border:3px dashed #6366f1;border-radius:12px;margin:12px 0;display:flex;flex-wrap:wrap;gap:8px;justify-content:center"></div>
              <button class="btn small blue" id="spk">🔊 Cümleyi Dinle</button>
            </div>
            <div class="opt-grid" id="sg" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:14px">
              ${shuffledWords.map((w, idx) => `<button class="btn white w-piece" data-idx="${idx}">${esc(w)}</button>`).join('')}
            </div>
            <button class="btn small white" id="rst" style="margin-top:14px">🔄 Sıfırla</button>
          </div>`;

        MEDIA.speak(sObj[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(sObj[0]);

        const slot = api.root.querySelector('#ss');
        const pieces = api.root.querySelectorAll('.w-piece');

        pieces.forEach(btn => {
          btn.onclick = () => {
            built.push(btn.textContent.trim());
            btn.disabled = true;
            btn.style.opacity = '0.3';
            slot.innerHTML = built.map(w => `<span class="badge blue" style="font-size:1.1em;padding:6px 12px">${esc(w)}</span>`).join('');
            MEDIA.fx('pop');

            if (built.length === words.length) {
              if (built.join(' ').toLowerCase() === cleanSentence.toLowerCase()) {
                MEDIA.fx('correct');
                FX.fb(true);
                MEDIA.speak(sObj[0]);
                api.add(15);
                i++;
                setTimeout(round, 1000);
              } else {
                MEDIA.fx('wrong');
                FX.shake(slot);
                setTimeout(() => {
                  built.length = 0;
                  slot.innerHTML = '';
                  pieces.forEach(b => {
                    b.disabled = false;
                    b.style.opacity = '1';
                  });
                }, 800);
              }
            }
          };
        });

        api.root.querySelector('#rst').onclick = () => {
          built.length = 0;
          slot.innerHTML = '';
          pieces.forEach(b => {
            b.disabled = false;
            b.style.opacity = '1';
          });
        };
      };
      round();
    }
  },

  /* ---------------- 14) 🔍 KELİME ARAMA ---------------- */
  {
    id: 'search',
    e: '🔍',
    t: 'Kelime Arama',
    d: 'Kelimenin harflerini ızgarada sırasıyla bul!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (4 Kelime)', c: { total: 4, grid: 5 } },
      { n: 'Zor (6 Kelime)', c: { total: 6, grid: 6 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      const words = shuffle(pool).slice(0, cfg.total);
      let currentIdx = 0;

      const round = () => {
        if (currentIdx >= words.length) {
          api.end({ score: api.score, max: words.length * 15, note: 'Harika bir dedektifsin! 🔍' });
          return;
        }
        api.progress(currentIdx + 1, words.length);
        const target = words[currentIdx][0].toUpperCase();
        let clicked = '';

        const letters = target.split('');
        const fillers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const totalCells = cfg.grid * cfg.grid;
        const gridLetters = [...letters];
        while (gridLetters.length < totalCells) {
          gridLetters.push(pick(fillers.split('')));
        }
        const shuffledGrid = shuffle(gridLetters);

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <span class="pe">${words[currentIdx][1]}</span>
              <div class="pw">Ara: <b style="color:#7c3aed">${target}</b> (${esc(words[currentIdx][2])})</div>
              <div class="pw" id="srch-status" style="font-size:1.3em;letter-spacing:4px;color:#2563eb">_ _ _</div>
            </div>
            <div class="grid-search" id="gs" style="display:grid;grid-template-columns:repeat(${cfg.grid},1fr);gap:8px;max-width:320px;margin:14px auto">
              ${shuffledGrid.map(l => `<button class="btn white g-cell" style="padding:12px;font-size:1.3em;font-weight:900">${l}</button>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(words[currentIdx][0]);
        const statusEl = api.root.querySelector('#srch-status');
        statusEl.textContent = '_ '.repeat(target.length);

        api.root.querySelectorAll('.g-cell').forEach(btn => {
          btn.onclick = () => {
            const letter = btn.textContent.trim();
            const nextExpected = target[clicked.length];
            if (letter === nextExpected) {
              clicked += letter;
              btn.classList.add('ok');
              btn.disabled = true;
              MEDIA.fx('pop');
              statusEl.textContent = clicked + ' _ '.repeat(target.length - clicked.length);

              if (clicked === target) {
                MEDIA.fx('correct');
                FX.stars();
                api.add(15);
                currentIdx++;
                setTimeout(round, 700);
              }
            } else {
              MEDIA.fx('wrong');
              FX.shake(btn);
            }
          };
        });
      };
      round();
    }
  },

  /* ---------------- 15) 🚫 FARKLI OLANI BUL ---------------- */
  {
    id: 'odd',
    e: '🚫',
    t: 'Farklı Olanı Bul',
    d: 'Gruba uymayan farklı kelimeyi keşfet!',
    stages: [1, 2],
    levels: [
      { n: 'Standart (6 Soru)', c: { rounds: 6 } },
      { n: 'Usta (10 Soru)', c: { rounds: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      let r = 0;

      const round = () => {
        if (r >= cfg.rounds) {
          api.end({ score: api.score, max: cfg.rounds * 10, note: 'Müthiş mantık! 🚫' });
          return;
        }
        api.progress(r + 1, cfg.rounds);

        const catsWithWords = u.cats.map((c, i) => u.w.filter(w => w[3] === i)).filter(arr => arr.length >= 3);
        const mainCatPool = catsWithWords.length ? pick(catsWithWords) : u.w;
        const mainWords = sample(mainCatPool, 3);
        const otherPool = ALLSETS.flatMap(x => x.w).filter(x => !mainWords.includes(x));
        const oddWord = pick(otherPool);
        const opts = shuffle([...mainWords, oddWord]);

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <div class="big-emoji popflash">🔍</div>
              <div class="pw">Hangi kelime diğerlerinden farklı?</div>
            </div>
            <div class="opt-grid">
              ${opts.map(o => `
                <div class="opt" data-odd="${o === oddWord ? 1 : 0}">
                  <span class="oe">${o[1] || '🔤'}</span>
                  <span class="ow">${esc(o[0])}</span>
                  <span class="muted" style="font-size:0.85em">${esc(o[2])}</span>
                </div>`).join('')}
            </div>
          </div>`;

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.odd === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
              FX.fb(true);
              api.add(10);
              r++;
              setTimeout(round, 850);
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
              setTimeout(() => { r++; round(); }, 1100);
            }
          };
        });
      };
      round();
    }
  },

  /* ---------------- 16) 🦜 POLLY İLE TEKRAR ---------------- */
  {
    id: 'echo',
    e: '🦜',
    t: 'Polly ile Tekrar',
    d: 'Polly söylesin, sen tekrarla ve pekiştir!',
    stages: [1, 2],
    levels: [
      { n: '6 Kelime', c: { total: 6 } },
      { n: '10 Kelime', c: { total: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = shuffle(EWORDS(u)).slice(0, cfg.total);
      let i = 0;

      const round = () => {
        if (i >= pool.length) {
          api.end({ score: api.score, max: pool.length * 10, note: 'Polly seninle gurur duyuyor! 🦜' });
          return;
        }
        api.progress(i + 1, pool.length);
        const w = pool[i];

        api.root.innerHTML = `
          <div class="center">
            <div class="card" style="max-width:380px;margin:0 auto;text-align:center">
              <div class="big-emoji popflash">${w[1]}</div>
              <div class="pw" style="font-size:2em">${esc(w[0])}</div>
              <div class="muted" style="font-size:1.2em;color:#2563eb;font-weight:700">${esc(w[2])}</div>
              <div class="row" style="margin-top:14px;justify-content:center">
                <button class="btn blue" id="spk">🔊 Dinle</button>
                <button class="btn green" id="rep">🗣️ Söyledim!</button>
              </div>
            </div>
          </div>`;

        MEDIA.speak(w[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(w[0]);
        api.root.querySelector('#rep').onclick = () => {
          MEDIA.fx('correct');
          FX.stars();
          api.add(10);
          i++;
          setTimeout(round, 600);
        };
      };
      round();
    }
  },

  /* ---------------- 17) 🖼️ RESİM YAPBOZ ---------------- */
  {
    id: 'picture',
    e: '🖼️',
    t: 'Resim Yapboz',
    d: 'Soruları doğru cevapla, gizli resmi ortaya çıkar!',
    stages: [1, 2],
    levels: [
      { n: '4 Parça', c: { pieces: 4 } },
      { n: '6 Parça', c: { pieces: 6 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let opened = 0;

      api.root.innerHTML = `
        <div class="center">
          <div class="puzzle-container" style="position:relative;width:240px;height:240px;margin:0 auto 16px;border:4px solid #6366f1;border-radius:18px;overflow:hidden;background:#f8fafc;display:flex;align-items:center;justify-content:center">
            <div class="big-emoji" style="font-size:110px">${u.emoji}</div>
            <div id="p-overlay" style="position:absolute;inset:0;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(${cfg.pieces / 2},1fr)">
              ${Array.from({ length: cfg.pieces }).map((_, idx) => `
                <div class="p-tile" data-idx="${idx}" style="background:#818cf8;border:2px solid #fff;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:900;transition:opacity 0.3s">❓</div>`).join('')}
            </div>
          </div>
          <div id="pq-area"></div>
        </div>`;

      const qArea = api.root.querySelector('#pq-area');

      const nextQ = () => {
        if (opened >= cfg.pieces) {
          MEDIA.fx('win');
          FX.confetti(60);
          api.end({ score: cfg.pieces * 15, max: cfg.pieces * 15, note: 'Yapboz tamamlandı! 🖼️' });
          return;
        }
        api.progress(opened, cfg.pieces);
        const w = pick(pool);
        const others = sample(pool.filter(x => x !== w), 2);
        const opts = shuffle([w, ...others]);

        qArea.innerHTML = `
          <div class="prompt-box"><div class="pw"><b>${esc(w[0])}</b> ne demek?</div></div>
          <div class="opt-grid">
            ${opts.map(o => `<div class="opt txt" data-ok="${o === w ? 1 : 0}"><span class="ow">${esc(o[2])}</span></div>`).join('')}
          </div>`;

        MEDIA.speak(w[0]);

        qArea.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              const tile = api.root.querySelector(`.p-tile[data-idx="${opened}"]`);
              if (tile) tile.style.opacity = '0';
              opened++;
              MEDIA.fx('pop');
              api.add(15);
              setTimeout(nextQ, 600);
            } else {
              MEDIA.fx('wrong');
            }
          };
        });
      };
      nextQ();
    }
  },

  /* ---------------- 18) 🚂 KELİME TRENİ ---------------- */
  {
    id: 'train',
    e: '🚂',
    t: 'Kelime Treni',
    d: 'Tren vagonlarına doğru kelimeleri yükle!',
    stages: [1, 2],
    levels: [
      { n: '5 Vagon', c: { cars: 5 } },
      { n: '8 Vagon', c: { cars: 8 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let step = 0;

      const round = () => {
        if (step >= cfg.cars) {
          api.end({ score: api.score, max: cfg.cars * 10, note: 'Tren hedefine ulaştı! 🚂' });
          return;
        }
        api.progress(step + 1, cfg.cars);
        const w = pick(pool);
        const others = sample(pool.filter(x => x !== w), 2);
        const opts = shuffle([w, ...others]);

        api.root.innerHTML = `
          <div class="center">
            <div class="train-track" style="font-size:42px;margin-bottom:12px">
              🚂💨 ${'🚃'.repeat(step)}
            </div>
            <div class="prompt-box">
              <span class="pe">${w[1]}</span>
              <div class="pw">Sonraki vagon: <b>${esc(w[0])}</b></div>
            </div>
            <div class="opt-grid">
              ${opts.map(o => `
                <div class="opt txt" data-ok="${o === w ? 1 : 0}">
                  <span class="ow">${esc(o[2])}</span>
                </div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(w[0]);

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
              step++;
              api.add(10);
              setTimeout(round, 700);
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
              setTimeout(round, 900);
            }
          };
        });
      };
      round();
    }
  }
];

/* ENGINES listesine Bölüm B motorlarını ekle */
ENGINES.push(...ENGINES_B);
