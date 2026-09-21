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
