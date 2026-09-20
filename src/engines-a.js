/* ============================================================
   🎮 OYUN MOTORLARI — BÖLÜM A (1-9)
   ============================================================ */

const ENGINES_A = [
  /* ---------------- 1) 📇 FLAŞ KARTLAR ---------------- */
  {
    id: 'flash',
    e: '📇',
    t: 'Flaş Kartlar',
    d: 'Kelimeleri gör, dinle ve tekrar et!',
    stages: [1, 2],
    levels: [
      { n: 'Tüm Kelimeler', c: { flip: true } },
      { n: 'Hızlı Kartlar', c: { flip: false } }
    ],
    init(api) {
      const u = api.unit;
      const pool = shuffle(EWORDS(u));
      let idx = 0;
      const total = pool.length;

      const renderCard = () => {
        if (idx >= total) {
          api.end({ score: total * 10, max: total * 10, note: 'Tüm kartları tamamladın! 🌟' });
          return;
        }
        api.progress(idx + 1, total);
        const w = pool[idx];
        api.root.innerHTML = `
          <div class="center">
            <div class="card flash-card" id="fc">
              <div class="big-emoji popflash">${w[1] || '🔤'}</div>
              <div class="pw" style="font-size:1.8em">${esc(w[0])}</div>
              <div class="muted tr-hint" style="display:none;font-size:1.2em;color:#1e293b;font-weight:700">${esc(w[2])}</div>
              <div class="muted" style="margin-top:6px">👆 Dokun: Türkçe anlamını gör!</div>
            </div>
            <div class="row" style="margin-top:16px">
              <button class="btn blue" id="spk">🔊 Telaffuz</button>
              <button class="btn green" id="nxt">Sonraki ➡️</button>
            </div>
          </div>`;

        MEDIA.speak(w[0]);
        const fc = api.root.querySelector('#fc');
        const tr = api.root.querySelector('.tr-hint');
        fc.onclick = () => {
          if (tr.style.display === 'none') {
            tr.style.display = 'block';
            MEDIA.fx('pop');
          } else {
            tr.style.display = 'none';
          }
        };
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(w[0]);
        api.root.querySelector('#nxt').onclick = () => {
          api.add(10);
          MEDIA.fx('whoosh');
          idx++;
          renderCard();
        };
      };
      renderCard();
    }
  },

  /* ---------------- 2) 🧩 KELİME EŞLEŞTİRME ---------------- */
  {
    id: 'match',
    e: '🧩',
    t: 'Kelime Eşleştirme',
    d: 'Kelimeyi doğru görsel veya anlamla eşleştir!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (4 Çift)', c: { pairs: 4 } },
      { n: 'Orta (6 Çift)', c: { pairs: 6 } },
      { n: 'Zor (8 Çift)', c: { pairs: 8 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      const pool = sample(EWORDS(u), Math.min(cfg.pairs, EWORDS(u).length));
      let selWord = null, selEmoji = null, matched = 0;

      const words = shuffle(pool);
      const emojis = shuffle(pool);

      api.root.innerHTML = `
        <div class="center">
          <div class="prompt-box"><div class="pw">Kelimeleri eşleriyle birleştir! 🧩</div></div>
          <div class="match-grid">
            <div class="col" id="mw">
              ${words.map(w => `<div class="opt txt" data-w="${esc(w[0])}"><span class="ow">${esc(w[0])}</span></div>`).join('')}
            </div>
            <div class="col" id="me">
              ${emojis.map(w => `<div class="opt" data-w="${esc(w[0])}"><span class="oe">${w[1]}</span><span class="muted">${esc(w[2])}</span></div>`).join('')}
            </div>
          </div>
        </div>`;

      const checkMatch = () => {
        if (!selWord || !selEmoji) return;
        if (selWord.dataset.w === selEmoji.dataset.w) {
          selWord.classList.add('ok');
          selEmoji.classList.add('ok');
          selWord.style.pointerEvents = 'none';
          selEmoji.style.pointerEvents = 'none';
          MEDIA.fx('correct');
          FX.stars();
          api.add(15);
          matched++;
          api.progress(matched, pool.length);
          selWord = null;
          selEmoji = null;
          if (matched >= pool.length) {
            setTimeout(() => {
              api.end({ score: api.score, max: pool.length * 15, note: 'Mükemmel eşleştirme! 🧩' });
            }, 600);
          }
        } else {
          selWord.classList.add('no');
          selEmoji.classList.add('no');
          MEDIA.fx('wrong');
          const w1 = selWord, e1 = selEmoji;
          setTimeout(() => {
            w1.classList.remove('no', 'sel');
            e1.classList.remove('no', 'sel');
          }, 600);
          selWord = null;
          selEmoji = null;
        }
      };

      api.root.querySelector('#mw').onclick = (e) => {
        const o = e.target.closest('.opt');
        if (!o || o.classList.contains('ok')) return;
        api.root.querySelectorAll('#mw .opt').forEach(x => x.classList.remove('sel'));
        o.classList.add('sel');
        selWord = o;
        MEDIA.speak(o.dataset.w);
        checkMatch();
      };

      api.root.querySelector('#me').onclick = (e) => {
        const o = e.target.closest('.opt');
        if (!o || o.classList.contains('ok')) return;
        api.root.querySelectorAll('#me .opt').forEach(x => x.classList.remove('sel'));
        o.classList.add('sel');
        selEmoji = o;
        MEDIA.fx('click');
        checkMatch();
      };
    }
  },

  /* ---------------- 3) 🎈 BALON PATLATMA ---------------- */
  {
    id: 'pop',
    e: '🎈',
    t: 'Balon Patlatma',
    d: 'Doğru balonları patlat, puanları topla!',
    stages: [1, 2],
    levels: [
      { n: 'Sakin (8 Soru)', c: { total: 8, speed: 1 } },
      { n: 'Hızlı (12 Soru)', c: { total: 12, speed: 1.5 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let step = 0;

      const round = () => {
        if (step >= cfg.total) {
          api.end({ score: api.score, max: cfg.total * 10, note: 'Balon ustası! 🎈' });
          return;
        }
        api.progress(step + 1, cfg.total);
        const target = pick(pool);
        const others = sample(pool.filter(x => x !== target), 3);
        const opts = shuffle([target, ...others]);

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <span class="pe">${target[1]}</span>
              <div class="pw">Patlat: <b style="color:#2563eb">${esc(target[0])}</b></div>
              <button class="btn small blue" id="sp">🔊 Dinle</button>
            </div>
            <div class="balloon-field" id="bf" style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px;min-height:260px;align-items:center">
              ${opts.map(o => `
                <div class="balloon popflash" data-ok="${o === target ? 1 : 0}" style="cursor:pointer;background:#fff;border:4px solid #f43f5e;border-radius:50% 50% 50% 12px;padding:24px 28px;text-align:center;box-shadow:0 8px 12px rgba(0,0,0,0.1);transition:transform 0.15s">
                  <div style="font-size:38px">${o[1]}</div>
                  <div style="font-weight:900;font-size:1.1em;color:#1e293b">${esc(o[0])}</div>
                </div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(target[0]);
        api.root.querySelector('#sp').onclick = () => MEDIA.speak(target[0]);

        api.root.querySelectorAll('.balloon').forEach(b => {
          b.onclick = (e) => {
            if (b.dataset.ok === '1') {
              b.style.transform = 'scale(1.3) rotate(15deg)';
              b.style.opacity = '0';
              MEDIA.fx('pop');
              FX.stars(e.clientX, e.clientY);
              api.add(10);
              step++;
              setTimeout(round, 600);
            } else {
              MEDIA.fx('wrong');
              FX.shake(b);
            }
          };
        });
      };
      round();
    }
  },

  /* ---------------- 4) 🧠 HAFIZA KARTLARI ---------------- */
  {
    id: 'mem',
    e: '🧠',
    t: 'Hafıza Kartları',
    d: 'Kartları çevir, gizli eşleri bul!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (6 Kart)', c: { pairs: 3 } },
      { n: 'Orta (8 Kart)', c: { pairs: 4 } },
      { n: 'Zor (12 Kart)', c: { pairs: 6 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      const selected = sample(EWORDS(u), Math.min(cfg.pairs, EWORDS(u).length));
      const deck = [];
      selected.forEach(w => {
        deck.push({ id: w[0], t: 'word', content: w[0], w });
        deck.push({ id: w[0], t: 'emoji', content: w[1], w });
      });
      const cards = shuffle(deck);
      let f1 = null, f2 = null, lock = false, pairsFound = 0;

      api.root.innerHTML = `
        <div class="center">
          <div class="prompt-box"><div class="pw">Hafıza Kartları: Eşleri bul! 🧠</div></div>
          <div class="opt-grid" id="mg" style="grid-template-columns:repeat(auto-fit,minmax(90px,1fr));max-width:540px;margin:0 auto">
            ${cards.map((c, i) => `
              <div class="opt memory-card" data-idx="${i}" style="height:100px;font-size:2em;display:flex;align-items:center;justify-content:center;background:#e0e7ff;border:4px solid #818cf8;border-radius:16px;cursor:pointer">
                <span class="card-back">❓</span>
                <span class="card-front" style="display:none">${c.t === 'word' ? `<span style="font-size:0.5em;font-weight:900">${esc(c.content)}</span>` : c.content}</span>
              </div>`).join('')}
          </div>
        </div>`;

      api.root.querySelector('#mg').onclick = (e) => {
        const elCard = e.target.closest('.memory-card');
        if (!elCard || lock || elCard.classList.contains('matched') || elCard === f1) return;

        const idx = +elCard.dataset.idx;
        const item = cards[idx];
        elCard.querySelector('.card-back').style.display = 'none';
        elCard.querySelector('.card-front').style.display = 'block';
        elCard.style.background = '#ffffff';
        MEDIA.fx('pop');
        if (item.t === 'word') MEDIA.speak(item.content);

        if (!f1) {
          f1 = elCard;
        } else {
          f2 = elCard;
          lock = true;
          const i1 = cards[+f1.dataset.idx];
          const i2 = cards[+f2.dataset.idx];

          if (i1.id === i2.id) {
            f1.classList.add('matched', 'ok');
            f2.classList.add('matched', 'ok');
            MEDIA.fx('correct');
            api.add(15);
            pairsFound++;
            api.progress(pairsFound, cfg.pairs);
            f1 = null;
            f2 = null;
            lock = false;
            if (pairsFound >= cfg.pairs) {
              setTimeout(() => {
                api.end({ score: api.score, max: cfg.pairs * 15, note: 'Hafıza şampiyonu! 🏆' });
              }, 700);
            }
          } else {
            MEDIA.fx('wrong');
            setTimeout(() => {
              f1.querySelector('.card-back').style.display = 'block';
              f1.querySelector('.card-front').style.display = 'none';
              f1.style.background = '#e0e7ff';
              f2.querySelector('.card-back').style.display = 'none';
              f2.querySelector('.card-front').style.display = 'none';
              f2.querySelector('.card-back').style.display = 'block';
              f2.style.background = '#e0e7ff';
              f1 = null;
              f2 = null;
              lock = false;
            }, 900);
          }
        }
      };
    }
  },

  /* ---------------- 5) 🎧 DİNLE VE BUL ---------------- */
  {
    id: 'listen',
    e: '🎧',
    t: 'Dinle ve Bul',
    d: 'Polly söylesin, sen doğru kelimeyi seç!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (3 Şık)', c: { choices: 3, rounds: 8 } },
      { n: 'Zor (4 Şık)', c: { choices: 4, rounds: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let i = 0;

      const round = () => {
        if (i >= cfg.rounds) {
          api.end({ score: api.score, max: cfg.rounds * 10, note: 'Harika kulaklar! 🎧' });
          return;
        }
        api.progress(i + 1, cfg.rounds);
        const correct = pick(pool);
        const others = sample(pool.filter(x => x !== correct), cfg.choices - 1);
        const opts = shuffle([correct, ...others]);

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <div class="big-emoji popflash">🎧</div>
              <div class="pw">Dinle ve doğru kelimeyi seç!</div>
              <button class="btn blue" id="spk" style="margin-top:8px">🔊 Tekrar Dinle</button>
            </div>
            <div class="opt-grid">
              ${opts.map(o => `
                <div class="opt" data-ok="${o === correct ? 1 : 0}">
                  <span class="oe">${o[1]}</span>
                  <span class="ow">${esc(o[0])}</span>
                </div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(correct[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(correct[0]);

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
              FX.fb(true);
              api.add(10);
              i++;
              setTimeout(round, 800);
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
              api.root.querySelectorAll('.opt').forEach(x => {
                if (x.dataset.ok === '1') x.classList.add('ok');
              });
              setTimeout(() => { i++; round(); }, 1200);
            }
          };
        });
      };
      round();
    }
  },

  /* ---------------- 6) 🐝 HECELE VE YAZ ---------------- */
  {
    id: 'spell',
    e: '🐝',
    t: 'Hecele ve Yaz',
    d: 'Harflere dokun, kelimeyi doğru tamamla!',
    stages: [1, 2],
    levels: [
      { n: 'Kolay (3-5 Harf)', c: { maxLen: 5, total: 6 } },
      { n: 'Zor (Tüm Kelimeler)', c: { maxLen: 12, total: 8 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      const filtered = EWORDS(u).filter(w => w[0].length <= cfg.maxLen && /^[a-z]+$/i.test(w[0]));
      const pool = shuffle(filtered.length ? filtered : EWORDS(u)).slice(0, cfg.total);
      let i = 0;

      const round = () => {
        if (i >= pool.length) {
          api.end({ score: api.score, max: pool.length * 15, note: 'Heceleme arısı! 🐝' });
          return;
        }
        api.progress(i + 1, pool.length);
        const w = pool[i];
        const target = w[0].toLowerCase();
        const letters = shuffle(target.split(''));
        let current = '';

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <span class="pe">${w[1]}</span>
              <div class="pw" style="font-size:1.2em;color:#4b5563">${esc(w[2])}</div>
              <div class="spell-box" id="sb" style="display:flex;gap:8px;justify-content:center;margin:12px 0">
                ${target.split('').map(() => `<span class="spell-slot" style="display:inline-block;width:38px;height:46px;border-bottom:4px solid #6366f1;font-size:2em;font-weight:900;text-align:center"></span>`).join('')}
              </div>
              <button class="btn small blue" id="spk">🔊 Dinle</button>
            </div>
            <div class="opt-grid" id="lg" style="grid-template-columns:repeat(auto-fit,minmax(50px,1fr));max-width:380px;margin:0 auto">
              ${letters.map(l => `<button class="btn white l-btn" style="font-size:1.6em;padding:10px 14px">${l.toUpperCase()}</button>`).join('')}
            </div>
            <button class="btn small white" id="rst" style="margin-top:14px">🔄 Baştan Al</button>
          </div>`;

        MEDIA.speak(w[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(w[0]);

        const slots = api.root.querySelectorAll('.spell-slot');
        const updateSlots = () => {
          slots.forEach((s, idx) => {
            s.textContent = current[idx] ? current[idx].toUpperCase() : '';
          });
        };

        api.root.querySelectorAll('.l-btn').forEach(btn => {
          btn.onclick = () => {
            if (current.length < target.length) {
              current += btn.textContent.toLowerCase();
              btn.disabled = true;
              btn.style.opacity = '0.3';
              MEDIA.fx('pop');
              updateSlots();

              if (current.length === target.length) {
                if (current === target) {
                  MEDIA.fx('correct');
                  FX.fb(true);
                  MEDIA.speak(w[0]);
                  api.add(15);
                  i++;
                  setTimeout(round, 900);
                } else {
                  MEDIA.fx('wrong');
                  FX.shake(api.root.querySelector('#sb'));
                  setTimeout(() => {
                    current = '';
                    updateSlots();
                    api.root.querySelectorAll('.l-btn').forEach(b => {
                      b.disabled = false;
                      b.style.opacity = '1';
                    });
                  }, 600);
                }
              }
            }
          };
        });

        api.root.querySelector('#rst').onclick = () => {
          current = '';
          updateSlots();
          api.root.querySelectorAll('.l-btn').forEach(b => {
            b.disabled = false;
            b.style.opacity = '1';
          });
        };
      };
      round();
    }
  },

  /* ---------------- 7) 🎡 KELİME ÇARKI ---------------- */
  {
    id: 'wheel',
    e: '🎡',
    t: 'Kelime Çarkı',
    d: 'Çarkı çevir, duran kelimenin anlamını bil!',
    stages: [1, 2],
    levels: [
      { n: 'Standart (6 Tur)', c: { rounds: 6 } },
      { n: 'Usta (10 Tur)', c: { rounds: 10 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let r = 0;

      const spin = () => {
        if (r >= cfg.rounds) {
          api.end({ score: api.score, max: cfg.rounds * 10, note: 'Çark şampiyonu! 🎡' });
          return;
        }
        api.progress(r + 1, cfg.rounds);
        const w = pick(pool);
        const others = sample(pool.filter(x => x !== w), 2);
        const opts = shuffle([w, ...others]);

        api.root.innerHTML = `
          <div class="center">
            <div class="wheel-box" style="margin-bottom:14px">
              <div class="big-emoji popflash" style="font-size:72px">🎡</div>
              <div class="pw" style="font-size:1.8em;color:#7c3aed">${esc(w[0])}</div>
              <div class="muted">${w[1]}</div>
              <button class="btn small blue" id="spk">🔊 Dinle</button>
            </div>
            <div class="opt-grid">
              ${opts.map(o => `<div class="opt txt" data-ok="${o === w ? 1 : 0}">
                <span class="ow" style="font-size:1.3em">${esc(o[2])}</span></div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(w[0]);
        api.root.querySelector('#spk').onclick = () => MEDIA.speak(w[0]);

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
              FX.stars();
              api.add(10);
              r++;
              setTimeout(spin, 750);
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
              setTimeout(() => { r++; spin(); }, 1000);
            }
          };
        });
      };
      spin();
    }
  },

  /* ---------------- 8) ⚡ HIZLI CEVAP ---------------- */
  {
    id: 'speed',
    e: '⚡',
    t: 'Hızlı Cevap',
    d: 'Süre bitmeden en çok doğru kelimeyi tıkla!',
    stages: [1, 2],
    levels: [
      { n: '30 Saniye', c: { time: 30 } },
      { n: '45 Saniye', c: { time: 45 } },
      { n: '60 Saniye', c: { time: 60 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv, pool = EWORDS(u);
      let timeLeft = cfg.time, count = 0, timer = null;

      api.root.innerHTML = `
        <div class="center">
          <div class="prompt-box">
            <div class="pw">Kalan Süre: <b id="st" style="color:#ef4444">${timeLeft}s</b></div>
          </div>
          <div id="sq-area" style="width:100%"></div>
        </div>`;

      const area = api.root.querySelector('#sq-area');

      const nextQuestion = () => {
        if (timeLeft <= 0) return;
        const w = pick(pool);
        const others = sample(pool.filter(x => x !== w), 2);
        const opts = shuffle([w, ...others]);

        area.innerHTML = `
          <div class="center">
            <div class="big-emoji">${w[1]}</div>
            <div class="pw" style="font-size:1.5em">${esc(w[0])}</div>
            <div class="opt-grid">
              ${opts.map(o => `<div class="opt txt" data-ok="${o === w ? 1 : 0}"><span class="ow">${esc(o[2])}</span></div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(w[0]);

        area.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (timeLeft <= 0) return;
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('pop');
              count++;
              api.add(5);
              setTimeout(nextQuestion, 250);
            } else {
              o.classList.add('no');
              MEDIA.fx('wrong');
              setTimeout(nextQuestion, 450);
            }
          };
        });
      };

      timer = setInterval(() => {
        timeLeft--;
        const st = document.getElementById('st');
        if (st) st.textContent = timeLeft + 's';
        api.progress(cfg.time - timeLeft, cfg.time);
        if (timeLeft <= 0) {
          clearInterval(timer);
          api.end({ score: api.score, max: 80, note: `${count} doğru cevap verdin! ⚡` });
        }
      }, 1000);

      api.cleanup(() => clearInterval(timer));
      nextQuestion();
    }
  },

  /* ---------------- 9) 📦 KATEGORİYE AYIR ---------------- */
  {
    id: 'sort',
    e: '📦',
    t: 'Kategoriye Ayır',
    d: 'Kelime hangi kutuya ait? Doğru kutuyu seç!',
    stages: [1, 2],
    levels: [
      { n: 'Standart (8 Soru)', c: { rounds: 8 } },
      { n: 'Usta (12 Soru)', c: { rounds: 12 } }
    ],
    init(api) {
      const u = api.unit, cfg = api.lv;
      let r = 0;
      const cats = u.cats;

      const round = () => {
        if (r >= cfg.rounds) {
          api.end({ score: api.score, max: cfg.rounds * 10, note: 'Düzen şampiyonu! 📦' });
          return;
        }
        api.progress(r + 1, cfg.rounds);
        const w = pick(u.w);
        const correctCatIdx = w[3];
        const correctCat = cats[correctCatIdx];

        api.root.innerHTML = `
          <div class="center">
            <div class="prompt-box">
              <span class="pe">${w[1] || '🔤'}</span>
              <div class="pw" style="font-size:1.6em"><b>${esc(w[0])}</b> (${esc(w[2])})</div>
              <div class="muted">Hangi kategoriye ait?</div>
            </div>
            <div class="opt-grid">
              ${cats.map((cat, i) => `
                <div class="opt txt" data-ok="${i === correctCatIdx ? 1 : 0}">
                  <span class="ow" style="font-size:1.2em">📦 ${esc(cat)}</span>
                </div>`).join('')}
            </div>
          </div>`;

        MEDIA.speak(w[0]);

        api.root.querySelectorAll('.opt').forEach(o => {
          o.onclick = () => {
            if (o.dataset.ok === '1') {
              o.classList.add('ok');
              MEDIA.fx('correct');
              FX.fb(true);
              api.add(10);
              r++;
              setTimeout(round, 800);
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
  }
];

/* Ana ENGINES dizisini oluştur */
const ENGINES = [...ENGINES_A];
