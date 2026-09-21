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
