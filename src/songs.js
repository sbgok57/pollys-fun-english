/* ============================================================
   🎵 ŞARKI & CHANT KÖŞESİ — Başlangıç Koleksiyonu
   ============================================================ */

const SONGS = [
  {
    t: 'Twinkle, Twinkle, Little Star',
    e: '⭐',
    tune: 'Geleneksel',
    u: 's1u0',
    a: 'Ellerle yıldız hareketi',
    l: [
      'Twinkle, twinkle, little star,',
      'How I wonder what you are!',
      'Up above the world so high,',
      'Like a diamond in the sky!'
    ]
  },
  {
    t: 'The Alphabet Song',
    e: '🔤',
    tune: 'Twinkle Twinkle',
    u: 's1u1',
    a: 'Harfleri göstererek',
    l: [
      'A, B, C, D, E, F, G,',
      'H, I, J, K, L, M, N, O, P,',
      'Q, R, S, T, U and V,',
      'W, X, Y and Z!',
      'Now I know my ABCs,',
      'Next time won’t you sing with me?'
    ]
  },
  {
    t: 'Head, Shoulders, Knees and Toes',
    e: '👀',
    tune: 'Geleneksel',
    u: 's1u6',
    a: 'Vücut organlarına dokunarak',
    l: [
      'Head, shoulders, knees and toes, knees and toes!',
      'Head, shoulders, knees and toes, knees and toes!',
      'And eyes and ears and mouth and nose,',
      'Head, shoulders, knees and toes, knees and toes!'
    ]
  },
  {
    t: 'Old MacDonald Had a Farm',
    e: '🚜',
    tune: 'Geleneksel',
    u: 's1u5',
    a: 'Hayvan sesleri taklidiyle',
    l: [
      'Old MacDonald had a farm, E-I-E-I-O!',
      'And on his farm he had a cow, E-I-E-I-O!',
      'With a moo-moo here, and a moo-moo there,',
      'Here a moo, there a moo, everywhere a moo-moo!'
    ]
  },
  {
    t: 'The Wheels on the Bus',
    e: '🚌',
    tune: 'Geleneksel',
    u: 's1u7',
    a: 'Direksiyon çevirme hareketiyle',
    l: [
      'The wheels on the bus go round and round,',
      'Round and round, round and round!',
      'The wheels on the bus go round and round,',
      'All through the town!'
    ]
  },
  {
    t: 'If You’re Happy and You Know It',
    e: '😊',
    tune: 'Geleneksel',
    u: 's1u2',
    a: 'Elleri çırparak',
    l: [
      'If you’re happy and you know it, clap your hands! (Clap, clap!)',
      'If you’re happy and you know it, clap your hands! (Clap, clap!)',
      'If you’re happy and you know it, and you really want to show it,',
      'If you’re happy and you know it, clap your hands!'
    ]
  },
  {
    t: 'Row, Row, Row Your Boat',
    e: '⛵',
    tune: 'Geleneksel',
    u: 's1u9',
    a: 'Kürek çekme hareketiyle',
    l: [
      'Row, row, row your boat, gently down the stream,',
      'Merrily, merrily, merrily, merrily, life is but a dream!'
    ]
  },
  {
    t: 'Five Little Monkeys',
    e: '🐒',
    tune: 'Geleneksel',
    u: 's1u8',
    a: 'Yatakta zıplama hareketiyle',
    l: [
      'Five little monkeys jumping on the bed,',
      'One fell off and bumped his head!',
      'Mama called the doctor and the doctor said:',
      'No more monkeys jumping on the bed!'
    ]
  },
  {
    t: 'Incy Wincy Spider',
    e: '🕷️',
    tune: 'Geleneksel',
    u: 's2u6',
    a: 'Parmaklarla tırmanma hareketiyle',
    l: [
      'Incy Wincy spider climbed up the water spout,',
      'Down came the rain and washed the spider out!',
      'Out came the sunshine and dried up all the rain,',
      'And Incy Wincy spider climbed up the spout again!'
    ]
  },
  {
    t: 'London Bridge Is Falling Down',
    e: '🌉',
    tune: 'Geleneksel',
    u: 's2u8',
    a: 'Köprü oyunu yaparak',
    l: [
      'London Bridge is falling down, falling down, falling down,',
      'London Bridge is falling down, my fair lady!'
    ]
  }
];

/* ---------- Chant Şablonları ---------- */
const CHANT_TPL = [
  {
    n: 'Echo Chant',
    e: '🗣️',
    mk: (u, W) => {
      const a = W(0), b = W(1), c = W(2);
      return [
        `Listen and say: ${a}! (Say ${a}!)`,
        `Look and say: ${b}! (Say ${b}!)`,
        `One, two, three: ${c}!`,
        `We love learning ${u.title}!`
      ];
    }
  },
  {
    n: 'Clap and Stomp',
    e: '👏',
    mk: (u, W) => {
      const a = W(0), b = W(1);
      return [
        `Clap your hands for ${a}! (Clap, clap!)`,
        `Stomp your feet for ${b}! (Stomp, stomp!)`,
        `Turn around and touch the ground!`,
        `Hip, hip, hooray for ${a} and ${b}!`
      ];
    }
  },
  {
    n: 'Rhythm Jump',
    e: '🦘',
    mk: (u, W) => {
      const a = W(0), b = W(1);
      return [
        `Jump for ${a}! One, two, jump!`,
        `Jump for ${b}! One, two, jump!`,
        `Fast, fast, fast! Slow, slow, slow!`,
        `Now we stop and off we go!`
      ];
    }
  },
  {
    n: 'Question Chant',
    e: '❓',
    mk: (u, W) => {
      const a = W(0), b = W(1);
      return [
        `Can you see the ${a}? Yes, I can!`,
        `Can you point to ${b}? Yes, I can!`,
        `Where is the ${a}? Here it is!`,
        `Great job everyone, give a cheer!`
      ];
    }
  }
];

/* Ünite bazlı dinamik chant üretici */
function chantsForUnit(uid) {
  const u = unitById(uid);
  if (!u || !u.w || !u.w.length) return [];
  const W = (i) => u.w[i % u.w.length][0];
  return CHANT_TPL.map((tpl) => ({
    t: `${tpl.n} — ${u.title}`,
    e: tpl.e,
    tune: 'Ritmik Chant',
    u: u.id,
    a: '',
    l: tpl.mk(u, W)
  }));
}

/* Tüm üniteler için chant listesi */
const ALLCHANTS = ALLSETS.flatMap((u) => chantsForUnit(u.id));

/* Toplam Şarkı ve Chant Sayısı (let olarak tanımlanır, songs-extra.js günceller) */
let TOTALSONGS = SONGS.length + ALLCHANTS.length;
