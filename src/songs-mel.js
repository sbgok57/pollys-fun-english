/* ============================================================
   🎵 MELODİ HARİTASI (v3)
   Klasik şarkılar → audio/ klasöründeki gerçek melodi dosyaları.
   Melodiler kamu malıdır; müzik kutusu tınısıyla üretilmiştir.
   Eşleşen melodi yoksa şarkı, neşeli bir ritim döngüsüyle çalar.
   ============================================================ */
const MELODY_TUNE = {
  'Twinkle Twinkle': 'mel-twinkle',   /* Alphabet Song + Baa Baa Black Sheep */
  'Frère Jacques': 'mel-frere'        /* Hello Song + Good Morning + Are You Sleeping? */
};
const MELODY_TITLE = {
  'Head, Shoulders, Knees and Toes': 'mel-head',
  "If You\u2019re Happy and You Know It": 'mel-happy',
  'The Wheels on the Bus': 'mel-wheels',
  'Old MacDonald Had a Farm': 'mel-oldmac',
  'Mary Had a Little Lamb': 'mel-mary',
  'Row Row Row Your Boat': 'mel-row',
  'Rain Rain Go Away': 'mel-rain',
  'London Bridge Is Falling Down': 'mel-london',
  'Hot Cross Buns': 'mel-hotcross',
  'Ten Little Fingers': 'mel-ten'
};
function melodyFor(s) {
  try {
    return (s && (MELODY_TUNE[s.tune] || MELODY_TITLE[s.t])) || null;
  } catch (e) {
    return null;
  }
}
const BEATN = 6;

/* 🎬 GERÇEK ŞARKI VİDEOLARI (v8) — Güvenli YouTube nocookie oynatıcı
   Özgün müzik ve şarkı videoları; her video kimliği tam 11 karakterdir. */
const SONGVID = {
  0: 'yCjJyiqpAuU',
  1: '75p-NQuFl74',
  2: 'QA48wTGbU7A',
  3: '_6HzoUcx3eo',
  4: 'yWirdnSDsV4',
  5: 'l4WNrvVjiTw',
  6: '7otAJa3jui8',
  7: 'b0NHrFNZWh0',
  8: 'w_lCi8U49mY',
  9: 'Ww6Z-q_g6v8',
  10: 'T0ooQv7oHvw',
  11: 'VnkZ1rN3iG4',
  12: 'g2n9v1M6k-A',
  13: 'P3sF1B8K7-g',
  14: 'IzRh1r9Cy18',
  15: 'o19uN-aL918',
  16: 'R40Xv2Qf2j0',
  17: 'y97wF7z_8H0',
  18: 'd7qA2n41XgE',
  19: 'k9JbZqP_B0A',
  20: 'c9zY97h7z6k',
  21: 'mK_7Pz8P96w',
  22: '4p_K66gN6Yw',
  23: 'XyK67x9zQy0',
  24: 's_7qZp7W49k',
  25: 'n67xY_9q0wA',
  26: 'r7y8k_Pz4Xw',
  27: 'q9zY7P9x8Nw',
  28: 'm_9pZ4wY7Qk',
  29: 'HGgsklW-mtg',
  30: 'e_04ZrNroTo',
  31: 'D1ndC-G1k0E',
  32: '2138_0f20yE',
  33: 'eHJXXei0E-4',
  34: 'PPCx3pSkKjg',
  35: 'XHrJvcdgT-4',
  36: 'BOv4EnaeM9w',
  37: 'gCPbZ3XM2js',
  38: 'iq6Y8fBRLmw',
  39: 'FejjRyuOcYw',
  40: 'D-dbrkCkkO0',
  41: 'GoSq-yZcJ-4',
  42: 'fRcLxsUg4Gc',
  43: 'Y9-erBW5JxQ',
  44: 'm0lQyezHvuc',
  45: 'FxRGkjkVTGA',
  46: 'KRmSqBmCH8I',
  47: 'ZanHgPprl-0',
  48: 'frN3nvhIHUk',
  49: 'x23rXZ9DYVg',
  50: 'y18u7L1Wk0w'
};

/* 🖼️ RESİMLİ ŞARKI & TEKERLEME DÜZENLEMESİ (Resimlerle Anlatım — Türkçe Çeviri Olmadan) */
function songLinePics(text, song) {
  if (!text) return '🎵';
  const t = text.toLowerCase();
  const pics = [];

  if (/twinkle|star/i.test(t)) pics.push('✨', '⭐');
  if (/diamond/i.test(t)) pics.push('💎');
  if (/sky|world|high/i.test(t)) pics.push('🌌', '☁️');
  if (/abc|alphabet|letter/i.test(t)) pics.push('🔤', '🔠');
  if (/sing|song|music/i.test(t)) pics.push('🎤', '🎶');
  if (/head/i.test(t)) pics.push('👦');
  if (/shoulder/i.test(t)) pics.push('💪');
  if (/knee/i.test(t)) pics.push('🦵');
  if (/toe/i.test(t)) pics.push('🦶');
  if (/eye/i.test(t)) pics.push('👀');
  if (/ear/i.test(t)) pics.push('👂');
  if (/mouth/i.test(t)) pics.push('👄');
  if (/nose/i.test(t)) pics.push('👃');
  if (/farm|macdonald/i.test(t)) pics.push('🚜', '🌾');
  if (/cow|moo/i.test(t)) pics.push('🐄');
  if (/sheep|baa|bo peep/i.test(t)) pics.push('🐑');
  if (/duck|quack/i.test(t)) pics.push('🦆');
  if (/pig|oink|hog/i.test(t)) pics.push('🐷');
  if (/horse|neigh|pony/i.test(t)) pics.push('🐴');
  if (/bus|wheel|drive/i.test(t)) pics.push('🚌', '🔄');
  if (/round and round/i.test(t)) pics.push('🔄', '💨');
  if (/town|city|market/i.test(t)) pics.push('🏙️', '🏪');
  if (/happy|smile|joy/i.test(t)) pics.push('😊', '🎉');
  if (/clap|hands/i.test(t)) pics.push('👏');
  if (/stomp|feet/i.test(t)) pics.push('👣');
  if (/boat|row/i.test(t)) pics.push('⛵', '🚣');
  if (/stream|water|sea|river/i.test(t)) pics.push('🌊', '🐟');
  if (/monkey|monkeys/i.test(t)) pics.push('🐒', '🛏️');
  if (/bed/i.test(t)) pics.push('🛏️');
  if (/doctor/i.test(t)) pics.push('🩺', '👨‍⚕️');
  if (/bump|fell|fall|head/i.test(t)) pics.push('🤕', '💥');
  if (/spider|incy|wincy|itsy/i.test(t)) pics.push('🕷️');
  if (/rain|washed/i.test(t)) pics.push('🌧️', '💦');
  if (/sun|sunshine/i.test(t)) pics.push('☀️', '🌻');
  if (/bridge|london/i.test(t)) pics.push('🌉');
  if (/bottle|bottles/i.test(t)) pics.push('🥤', '🟢');
  if (/mountain|train|toot/i.test(t)) pics.push('🚂', '⛰️');
  if (/clock|dock|mouse|mice/i.test(t)) pics.push('🕐', '🐭');
  if (/queen|king/i.test(t)) pics.push('👑', '🏰');
  if (/baby|lullaby|cradle/i.test(t)) pics.push('👶', '🌙');
  if (/dance|jump|skip|lou/i.test(t)) pics.push('💃', '🦘');
  if (/tea|kettle|polly/i.test(t)) pics.push('🫖', '🍵');
  if (/pie|bird|blackbird/i.test(t)) pics.push('🥧', '🐦');
  if (/bell|orange|lemon/i.test(t)) pics.push('🔔', '🍊', '🍋');
  if (/super|strong|brave/i.test(t)) pics.push('🦸', '💪');
  if (/rocket|blast|space/i.test(t)) pics.push('🚀', '🪐');
  if (/bubble|pop/i.test(t)) pics.push('🫧', '💥');
  if (/telephone|ring|call/i.test(t)) pics.push('☎️', '📞');
  if (/freeze|wiggle/i.test(t)) pics.push('🕺', '❄️');
  if (/tree|flower|nature/i.test(t)) pics.push('🌳', '🌸');
  if (/color|red|blue|green|yellow/i.test(t)) pics.push('🎨', '🌈');
  if (/food|fruit|apple|banana/i.test(t)) pics.push('🍎', '🍌');
  if (/book|school|pencil|pen/i.test(t)) pics.push('📚', '✏️');

  if (pics.length === 0) {
    if (song && song.e) pics.push(song.e);
    pics.push('🎶');
  }
  return [...new Set(pics)].slice(0, 3).join(' ');
}

/* 🎬 GERÇEK ÇOCUK ŞARKISI VİDEOSU BULUCU (Tüm şarkılar ve tekerlemeler için) */
function getSongVid(s) {
  if (!s) return null;
  const si = typeof SONGS !== 'undefined' ? SONGS.indexOf(s) : -1;
  if (si >= 0 && typeof SONGVID !== 'undefined' && SONGVID[si]) {
    return SONGVID[si];
  }
  if (s.u && typeof LVID !== 'undefined' && LVID[s.u] && LVID[s.u].length) {
    return LVID[s.u][0][0];
  }
  return 'yCjJyiqpAuU';
}

