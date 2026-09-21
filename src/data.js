/* ============================================================
   📚 VERİ BANKASI — Cambridge Global English 1 & 2 (25 Ünite)
   ============================================================ */

const STAGES = [
  {
    "id": "s1",
    "name": "1. Sınıf",
    "book": "Cambridge Global English 1",
    "emoji": "🟢",
    "cls": "s1",
    "desc": "Starter + 9 ünite · Renkler, aile, okul, çiftlik"
  },
  {
    "id": "s2",
    "name": "2. Sınıf",
    "book": "Cambridge Global English 2",
    "emoji": "🔵",
    "cls": "s2",
    "desc": "9 ünite · Meslekler, hava, doğa, şehir, ölçüm"
  }
];

const ALLSETS = [
  {
    "id": "s1u0",
    "stage": "s1",
    "no": "0",
    "title": "Welcome & Hello",
    "tr": "Tanışma ve Selamlaşma",
    "emoji": "👋",
    "cats": [
      "Greetings",
      "Colors",
      "Numbers"
    ],
    "w": [
      [
        "hello",
        "👋",
        "merhaba",
        0
      ],
      [
        "goodbye",
        "🙋",
        "hoşça kal",
        0
      ],
      [
        "friend",
        "🤝",
        "arkadaş",
        0
      ],
      [
        "name",
        "🏷️",
        "isim / ad",
        0
      ],
      [
        "red",
        "🔴",
        "kırmızı",
        1
      ],
      [
        "blue",
        "🔵",
        "mavi",
        1
      ],
      [
        "yellow",
        "🟡",
        "sarı",
        1
      ],
      [
        "green",
        "🟢",
        "yeşil",
        1
      ],
      [
        "one",
        "1️⃣",
        "bir",
        2
      ],
      [
        "two",
        "2️⃣",
        "iki",
        2
      ],
      [
        "three",
        "3️⃣",
        "üç",
        2
      ],
      [
        "four",
        "4️⃣",
        "dört",
        2
      ],
      [
        "five",
        "5️⃣",
        "beş",
        2
      ]
    ],
    "s": [
      [
        "Hello, what is your name?",
        "👋",
        "Merhaba, senin adın ne?"
      ],
      [
        "My name is Polly and you are my friend.",
        "🤝",
        "Benim adım Polly ve sen benim arkadaşımsın."
      ],
      [
        "I like the color red and blue.",
        "🎨",
        "Kırmızı ve mavi rengi severim."
      ],
      [
        "Can you see the green tree?",
        "🟢",
        "Yeşil ağacı görebiliyor musun?"
      ],
      [
        "I have one yellow pencil.",
        "✏️",
        "Bir tane sarı kurşun kalemim var."
      ],
      [
        "Count from one to five with me!",
        "🔢",
        "Benimle birden beşe kadar say!"
      ]
    ]
  },
  {
    "id": "s1u1",
    "stage": "s1",
    "no": "1",
    "title": "Welcome to School",
    "tr": "Okula Hoş Geldiniz",
    "emoji": "🎒",
    "cats": [
      "School Items",
      "Actions",
      "Classroom"
    ],
    "w": [
      [
        "pencil",
        "✏️",
        "kurşun kalem",
        0
      ],
      [
        "book",
        "📖",
        "kitap",
        0
      ],
      [
        "bag",
        "🎒",
        "çanta",
        0
      ],
      [
        "ruler",
        "📏",
        "cetvel",
        0
      ],
      [
        "eraser",
        "🧼",
        "silgi",
        0
      ],
      [
        "desk",
        "🪑",
        "öğrenci sırası",
        0
      ],
      [
        "chair",
        "💺",
        "sandalye",
        0
      ],
      [
        "open",
        "📂",
        "açmak",
        1
      ],
      [
        "close",
        "📁",
        "kapatmak",
        1
      ],
      [
        "listen",
        "👂",
        "dinlemek",
        1
      ],
      [
        "point",
        "👉",
        "işaret etmek",
        1
      ],
      [
        "teacher",
        "👩‍🏫",
        "öğretmen",
        2
      ]
    ],
    "s": [
      [
        "Open your book, please.",
        "📖",
        "Lütfen kitabını aç."
      ],
      [
        "Put your pencil in the bag.",
        "🎒",
        "Kalemini çantaya koy."
      ],
      [
        "Listen to the teacher carefully.",
        "👩‍🏫",
        "Öğretmeni dikkatle dinle."
      ],
      [
        "Point to the ruler on the desk.",
        "📏",
        "Sıradaki cetveli işaret et."
      ],
      [
        "Sit down on your chair.",
        "💺",
        "Sandalyene otur."
      ],
      [
        "Use your eraser to clean it.",
        "🧼",
        "Temizlemek için silgini kullan."
      ]
    ]
  },
  {
    "id": "s1u2",
    "stage": "s1",
    "no": "2",
    "title": "Family Time",
    "tr": "Aile Zamanı",
    "emoji": "👨‍👩‍👧‍👦",
    "cats": [
      "Family",
      "Home",
      "Feelings"
    ],
    "w": [
      [
        "mother",
        "👩",
        "anne",
        0
      ],
      [
        "father",
        "👨",
        "baba",
        0
      ],
      [
        "sister",
        "👧",
        "kız kardeş",
        0
      ],
      [
        "brother",
        "👦",
        "erkek kardeş",
        0
      ],
      [
        "baby",
        "👶",
        "bebek",
        0
      ],
      [
        "grandma",
        "👵",
        "büyükanne",
        0
      ],
      [
        "grandpa",
        "👴",
        "büyükbaba",
        0
      ],
      [
        "house",
        "🏠",
        "ev",
        1
      ],
      [
        "kitchen",
        "🍳",
        "mutfak",
        1
      ],
      [
        "bedroom",
        "🛏️",
        "yatak odası",
        1
      ],
      [
        "happy",
        "😊",
        "mutlu",
        2
      ],
      [
        "kind",
        "💖",
        "nazik / sevecen",
        2
      ]
    ],
    "s": [
      [
        "This is my mother and father.",
        "👨‍👩‍👦",
        "Bu benim annem ve babam."
      ],
      [
        "My sister is playing in the bedroom.",
        "🛏️",
        "Kız kardeşim yatak odasında oynuyor."
      ],
      [
        "Grandma is making soup in the kitchen.",
        "🍳",
        "Büyükanne mutfakta çorba yapıyor."
      ],
      [
        "We are a very happy family.",
        "😊",
        "Biz çok mutlu bir aileyiz."
      ],
      [
        "The baby is sleeping in the house.",
        "🏠",
        "Bebek evde uyuyor."
      ],
      [
        "My brother is very kind to me.",
        "💖",
        "Erkek kardeşim bana karşı çok naziktir."
      ]
    ]
  },
  {
    "id": "s1u3",
    "stage": "s1",
    "no": "3",
    "title": "Fun and Games",
    "tr": "Eğlence ve Oyunlar",
    "emoji": "🎲",
    "cats": [
      "Toys",
      "Play Actions",
      "Adjectives"
    ],
    "w": [
      [
        "ball",
        "⚽",
        "top",
        0
      ],
      [
        "doll",
        "🪆",
        "oyuncak bebek",
        0
      ],
      [
        "teddy",
        "🧸",
        "oyuncak ayı",
        0
      ],
      [
        "car",
        "🚗",
        "oyuncak araba",
        0
      ],
      [
        "puzzle",
        "🧩",
        "yapboz",
        0
      ],
      [
        "kite",
        "🪁",
        "uçurtma",
        0
      ],
      [
        "jump",
        "🦘",
        "zıplamak",
        1
      ],
      [
        "dance",
        "💃",
        "dans etmek",
        1
      ],
      [
        "run",
        "🏃",
        "koşmak",
        1
      ],
      [
        "big",
        "🐘",
        "büyük",
        2
      ],
      [
        "small",
        "🐭",
        "küçük",
        2
      ],
      [
        "fast",
        "⚡",
        "hızlı",
        2
      ]
    ],
    "s": [
      [
        "Kick the big ball into the goal!",
        "⚽",
        "Büyük topu kaleye at!"
      ],
      [
        "The teddy is soft and brown.",
        "🧸",
        "Oyuncak ayı yumuşak ve kahverengidir."
      ],
      [
        "I can fly my colorful kite.",
        "🪁",
        "Renkli uçurtmamı uçurabilirim."
      ],
      [
        "Jump and dance with all your friends.",
        "💃",
        "Bütün arkadaşlarınla zıpla ve dans et."
      ],
      [
        "The red car is very fast.",
        "🚗",
        "Kırmızı araba çok hızlıdır."
      ],
      [
        "This is a small and fun puzzle.",
        "🧩",
        "Bu küçük ve eğlenceli bir yapbozdur."
      ]
    ]
  },
  {
    "id": "s1u4",
    "stage": "s1",
    "no": "4",
    "title": "Making Things",
    "tr": "Bir Şeyler Yapmak",
    "emoji": "🎨",
    "cats": [
      "Art Supplies",
      "Shapes",
      "Craft Verbs"
    ],
    "w": [
      [
        "paper",
        "📄",
        "kâğıt",
        0
      ],
      [
        "glue",
        "🧴",
        "yapıştırıcı",
        0
      ],
      [
        "scissors",
        "✂️",
        "makas",
        0
      ],
      [
        "paint",
        "🎨",
        "boya",
        0
      ],
      [
        "brush",
        "🖌️",
        "fırça",
        0
      ],
      [
        "circle",
        "⭕",
        "daire / çember",
        1
      ],
      [
        "square",
        "⬛",
        "kare",
        1
      ],
      [
        "triangle",
        "🔺",
        "üçgen",
        1
      ],
      [
        "cut",
        "✄",
        "kesmek",
        2
      ],
      [
        "stick",
        "📎",
        "yapıştırmak",
        2
      ],
      [
        "draw",
        "✏️",
        "çizmek",
        2
      ],
      [
        "fold",
        "📑",
        "katlamak",
        2
      ]
    ],
    "s": [
      [
        "Cut the paper with scissors.",
        "✂️",
        "Kâğıdı makasla kes."
      ],
      [
        "Draw a yellow circle on the page.",
        "⭕",
        "Sayfaya sarı bir daire çiz."
      ],
      [
        "Use the glue to stick the triangle.",
        "🔺",
        "Üçgeni yapıştırmak için yapıştırıcı kullan."
      ],
      [
        "Paint the square with a big brush.",
        "🖌️",
        "Kareyi büyük bir fırçayla boya."
      ],
      [
        "Fold the paper to make a hat.",
        "📑",
        "Şapka yapmak için kâğıdı katla."
      ],
      [
        "I love to draw and paint pictures.",
        "🎨",
        "Resim çizmeyi ve boyamayı çok severim."
      ]
    ]
  },
  {
    "id": "s1u5",
    "stage": "s1",
    "no": "5",
    "title": "On the Farm",
    "tr": "Çiftlikte",
    "emoji": "🚜",
    "cats": [
      "Farm Animals",
      "Animal Products",
      "Farm Words"
    ],
    "w": [
      [
        "cow",
        "🐄",
        "inek",
        0
      ],
      [
        "sheep",
        "🐑",
        "koyun",
        0
      ],
      [
        "horse",
        "🐎",
        "at",
        0
      ],
      [
        "duck",
        "🦆",
        "ördek",
        0
      ],
      [
        "chicken",
        "🐔",
        "tavuk",
        0
      ],
      [
        "goat",
        "🐐",
        "keçi",
        0
      ],
      [
        "milk",
        "🥛",
        "süt",
        1
      ],
      [
        "egg",
        "🥚",
        "yumurta",
        1
      ],
      [
        "wool",
        "🧶",
        "yün",
        1
      ],
      [
        "barn",
        "🏚️",
        "ahır / samanlık",
        2
      ],
      [
        "farmer",
        "👨‍🌾",
        "çiftçi",
        2
      ],
      [
        "grass",
        "🌱",
        "çimen / ot",
        2
      ]
    ],
    "s": [
      [
        "The cow gives fresh milk every day.",
        "🐄",
        "İnek her gün taze süt verir."
      ],
      [
        "The white sheep eats green grass.",
        "🐑",
        "Beyaz koyun yeşil çimen yer."
      ],
      [
        "The duck swims happily in the pond.",
        "🦆",
        "Ördek gölette neşeyle yüzer."
      ],
      [
        "The chicken lays a brown egg.",
        "🥚",
        "Tavuk kahverengi bir yumurta yumurtlar."
      ],
      [
        "The horse is running near the barn.",
        "🐎",
        "At ahırın yanında koşuyor."
      ],
      [
        "The farmer feeds the playful goat.",
        "👨‍🌾",
        "Çiftçi oyuncu keçiyi besliyor."
      ]
    ]
  },
  {
    "id": "s1u6",
    "stage": "s1",
    "no": "6",
    "title": "My Body",
    "tr": "Vücudum",
    "emoji": "👀",
    "cats": [
      "Body Parts",
      "Face",
      "Actions"
    ],
    "w": [
      [
        "head",
        "🗣️",
        "baş / kafa",
        0
      ],
      [
        "arm",
        "💪",
        "kol",
        0
      ],
      [
        "hand",
        "✋",
        "el",
        0
      ],
      [
        "leg",
        "🦵",
        "bacak",
        0
      ],
      [
        "foot",
        "🦶",
        "ayak",
        0
      ],
      [
        "eye",
        "👁️",
        "göz",
        1
      ],
      [
        "ear",
        "👂",
        "kulak",
        1
      ],
      [
        "nose",
        "👃",
        "burun",
        1
      ],
      [
        "mouth",
        "👄",
        "ağız",
        1
      ],
      [
        "clap",
        "👏",
        "alkışlamak",
        2
      ],
      [
        "stomp",
        "👣",
        "ayak vurmak",
        2
      ],
      [
        "touch",
        "👉",
        "dokunmak",
        2
      ]
    ],
    "s": [
      [
        "Touch your head with your hand.",
        "✋",
        "Elinle başına dokun."
      ],
      [
        "Clap your hands and stomp your feet.",
        "👏",
        "Ellerini çırp ve ayaklarını yere vur."
      ],
      [
        "I can see with my two eyes.",
        "👁️",
        "İki gözümle görebilirim."
      ],
      [
        "Listen with your ear to the sound.",
        "👂",
        "Kulağınla sesi dinle."
      ],
      [
        "Open your mouth and smile happily.",
        "👄",
        "Ağzını aç ve mutlulukla gülümse."
      ],
      [
        "He has a strong arm and long leg.",
        "💪",
        "Onun güçlü bir kolu ve uzun bir bacağı var."
      ]
    ]
  },
  {
    "id": "s1u7",
    "stage": "s1",
    "no": "7",
    "title": "Travel and Transport",
    "tr": "Ulaşım ve Taşıtlar",
    "emoji": "🚗",
    "cats": [
      "Land Transport",
      "Air & Water",
      "Travel Verbs"
    ],
    "w": [
      [
        "bus",
        "🚌",
        "otobüs",
        0
      ],
      [
        "car",
        "🚗",
        "araba",
        0
      ],
      [
        "train",
        "🚆",
        "tren",
        0
      ],
      [
        "bicycle",
        "🚲",
        "bisiklet",
        0
      ],
      [
        "plane",
        "✈️",
        "uçak",
        1
      ],
      [
        "boat",
        "⛵",
        "tekne",
        1
      ],
      [
        "helicopter",
        "🚁",
        "helikopter",
        1
      ],
      [
        "drive",
        "🚘",
        "sürmek",
        2
      ],
      [
        "fly",
        "🕊️",
        "uçmak",
        2
      ],
      [
        "ride",
        "🚴",
        "binmek",
        2
      ],
      [
        "stop",
        "🛑",
        "durmak",
        2
      ],
      [
        "ticket",
        "🎟️",
        "bilet",
        2
      ]
    ],
    "s": [
      [
        "The yellow bus takes us to school.",
        "🚌",
        "Sarı otobüs bizi okula götürür."
      ],
      [
        "I can ride my small bicycle.",
        "🚲",
        "Küçük bisikletime binebilirim."
      ],
      [
        "The train is moving fast on the track.",
        "🚆",
        "Tren raylarda hızlı ilerliyor."
      ],
      [
        "A plane can fly high in the sky.",
        "✈️",
        "Bir uçak gökyüzünde yükseklere uçabilir."
      ],
      [
        "We ride a boat across the river.",
        "⛵",
        "Nehir boyunca bir tekneye biniyoruz."
      ],
      [
        "Please show your ticket to the driver.",
        "🎟️",
        "Lütfen biletinizi şoföre gösterin."
      ]
    ]
  },
  {
    "id": "s1u8",
    "stage": "s1",
    "no": "8",
    "title": "Animals Around Us",
    "tr": "Çevremizdeki Hayvanlar",
    "emoji": "🐾",
    "cats": [
      "Wild Animals",
      "Habitats",
      "Animal Traits"
    ],
    "w": [
      [
        "lion",
        "🦁",
        "aslan",
        0
      ],
      [
        "elephant",
        "🐘",
        "fil",
        0
      ],
      [
        "monkey",
        "🐒",
        "maymun",
        0
      ],
      [
        "tiger",
        "🐅",
        "kaplan",
        0
      ],
      [
        "rabbit",
        "🐇",
        "tavşan",
        0
      ],
      [
        "bird",
        "🐦",
        "kuş",
        0
      ],
      [
        "jungle",
        "🌴",
        "orman / cangıl",
        1
      ],
      [
        "river",
        "🏞️",
        "nehir",
        1
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        1
      ],
      [
        "climb",
        "🧗",
        "tırmanmak",
        2
      ],
      [
        "swim",
        "🏊",
        "yüzmek",
        2
      ],
      [
        "tail",
        "🐕",
        "kuyruk",
        2
      ]
    ],
    "s": [
      [
        "The lion roars loudly in the jungle.",
        "🦁",
        "Aslan ormanda yüksek sesle kükrer."
      ],
      [
        "The big elephant drinks water from the river.",
        "🐘",
        "Büyük fil nehirden su içer."
      ],
      [
        "The playful monkey can climb the tall tree.",
        "🐒",
        "Oyuncu maymun uzun ağaca tırmanabilir."
      ],
      [
        "A bird can fly and sing a sweet song.",
        "🐦",
        "Bir kuş uçabilir ve tatlı bir şarkı söyleyebilir."
      ],
      [
        "The rabbit has long ears and a short tail.",
        "🐇",
        "Tavşanın uzun kulakları ve kısa bir kuyruğu vardır."
      ],
      [
        "Fish love to swim in the cool river.",
        "🏊",
        "Balıklar serin nehirde yüzmeyi sever."
      ]
    ]
  },
  {
    "id": "s1u9",
    "stage": "s1",
    "no": "9",
    "title": "Wonderful Water",
    "tr": "Harika Su",
    "emoji": "💧",
    "cats": [
      "Water in Nature",
      "Sea Animals",
      "Water Fun"
    ],
    "w": [
      [
        "water",
        "💧",
        "su",
        0
      ],
      [
        "rain",
        "🌧️",
        "yağmur",
        0
      ],
      [
        "sea",
        "🌊",
        "deniz",
        0
      ],
      [
        "river",
        "🏞️",
        "nehir",
        0
      ],
      [
        "puddle",
        "💦",
        "su birikintisi",
        0
      ],
      [
        "fish",
        "🐟",
        "balık",
        1
      ],
      [
        "crab",
        "🦀",
        "yengeç",
        1
      ],
      [
        "dolphin",
        "🐬",
        "yunus",
        1
      ],
      [
        "splash",
        "🫧",
        "sıçratmak",
        2
      ],
      [
        "drink",
        "🥤",
        "içmek",
        2
      ],
      [
        "wash",
        "🧼",
        "yıkamak",
        2
      ],
      [
        "clean",
        "✨",
        "temiz",
        2
      ]
    ],
    "s": [
      [
        "Plants and animals need fresh water to live.",
        "💧",
        "Bitkiler ve hayvanlar yaşamak için tatlı suya ihtiyaç duyar."
      ],
      [
        "I put on boots to jump in the puddle.",
        "💦",
        "Su birikintisinde zıplamak için botlarımı giyiyorum."
      ],
      [
        "The blue dolphin leaps out of the sea.",
        "🐬",
        "Mavi yunus denizden yukarı sıçrar."
      ],
      [
        "Always drink clean water every day.",
        "🥤",
        "Her gün mutlaka temiz su için."
      ],
      [
        "Wash your hands with soap and water.",
        "🧼",
        "Ellerinizi sabun ve suyla yıkayın."
      ],
      [
        "Rain makes the flowers grow tall.",
        "🌧️",
        "Yağmur çiçeklerin uzamasını sağlar."
      ]
    ]
  },
  {
    "id": "s1rev1",
    "stage": "s1",
    "no": "⭐",
    "title": "Term 1 Review",
    "tr": "1. Dönem Tekrarı",
    "emoji": "⭐",
    "mix": true,
    "cats": [
      "School & Colors",
      "Family & Home",
      "Toys & Fun"
    ],
    "w": [
      [
        "pencil",
        "✏️",
        "kalem",
        0
      ],
      [
        "bag",
        "🎒",
        "çanta",
        0
      ],
      [
        "red",
        "🔴",
        "kırmızı",
        0
      ],
      [
        "blue",
        "🔵",
        "mavi",
        0
      ],
      [
        "mother",
        "👩",
        "anne",
        1
      ],
      [
        "father",
        "👨",
        "baba",
        1
      ],
      [
        "house",
        "🏠",
        "ev",
        1
      ],
      [
        "ball",
        "⚽",
        "top",
        2
      ],
      [
        "kite",
        "🪁",
        "uçurtma",
        2
      ],
      [
        "happy",
        "😊",
        "mutlu",
        2
      ]
    ],
    "s": [
      [
        "My red pencil is inside the school bag.",
        "🎒",
        "Kırmızı kalemim okul çantamın içinde."
      ],
      [
        "Mother and father are at home.",
        "👨‍👩‍👦",
        "Anne ve baba evdedir."
      ],
      [
        "Let us fly a colorful kite today.",
        "🪁",
        "Bugün rengârenk bir uçurtma uçuralım."
      ],
      [
        "The blue ball bounces high in the house.",
        "⚽",
        "Mavi top evin içinde yükseğe zıplar."
      ],
      [
        "We are all happy to learn English together.",
        "😊",
        "Birlikte İngilizce öğrendiğimiz için hepimiz mutluyuz."
      ]
    ]
  },
  {
    "id": "s1rev2",
    "stage": "s1",
    "no": "🌟",
    "title": "Term 2 Review",
    "tr": "2. Dönem Tekrarı",
    "emoji": "🌟",
    "mix": true,
    "cats": [
      "Farm & Animals",
      "Body & Motion",
      "Travel & Water"
    ],
    "w": [
      [
        "cow",
        "🐄",
        "inek",
        0
      ],
      [
        "duck",
        "🦆",
        "ördek",
        0
      ],
      [
        "lion",
        "🦁",
        "aslan",
        0
      ],
      [
        "hand",
        "✋",
        "el",
        1
      ],
      [
        "foot",
        "🦶",
        "ayak",
        1
      ],
      [
        "clap",
        "👏",
        "alkışlamak",
        1
      ],
      [
        "bus",
        "🚌",
        "otobüs",
        2
      ],
      [
        "train",
        "🚆",
        "tren",
        2
      ],
      [
        "water",
        "💧",
        "su",
        2
      ],
      [
        "swim",
        "🏊",
        "yüzmek",
        2
      ]
    ],
    "s": [
      [
        "The cow drinks cool water on the farm.",
        "🐄",
        "İnek çiftlikte serin su içer."
      ],
      [
        "Clap your hand when the train arrives.",
        "🚆",
        "Tren geldiğinde ellerini çırp."
      ],
      [
        "The yellow bus stops for the children.",
        "🚌",
        "Sarı otobüs çocuklar için durur."
      ],
      [
        "The duck can swim across the river.",
        "🦆",
        "Ördek nehrin karşısına yüzebilir."
      ],
      [
        "The brave lion walks on four feet.",
        "🦁",
        "Cesur aslan dört ayağı üzerinde yürür."
      ]
    ]
  },
  {
    "id": "s1rev3",
    "stage": "s1",
    "no": "🔁",
    "title": "Grade 1 Master Review",
    "tr": "1. Sınıf Genel Tekrar",
    "emoji": "🏆",
    "mix": true,
    "cats": [
      "Everyday Words",
      "Creatures & Nature",
      "Actions & Play"
    ],
    "w": [
      [
        "hello",
        "👋",
        "merhaba",
        0
      ],
      [
        "friend",
        "🤝",
        "arkadaş",
        0
      ],
      [
        "book",
        "📖",
        "kitap",
        0
      ],
      [
        "sheep",
        "🐑",
        "koyun",
        1
      ],
      [
        "elephant",
        "🐘",
        "fil",
        1
      ],
      [
        "rain",
        "🌧️",
        "yağmur",
        1
      ],
      [
        "dance",
        "💃",
        "dans etmek",
        2
      ],
      [
        "draw",
        "✏️",
        "çizmek",
        2
      ],
      [
        "ride",
        "🚴",
        "binmek",
        2
      ],
      [
        "clean",
        "✨",
        "temiz",
        2
      ]
    ],
    "s": [
      [
        "Say hello to your best friend.",
        "👋",
        "En iyi arkadaşına merhaba de."
      ],
      [
        "Open your book and draw a happy sheep.",
        "📖",
        "Kitabını aç ve mutlu bir koyun çiz."
      ],
      [
        "The elephant walks under the gentle rain.",
        "🐘",
        "Fil hafif yağmurun altında yürür."
      ],
      [
        "We ride bicycles and dance in the sun.",
        "💃",
        "Bisiklete biniyoruz ve güneşte dans ediyoruz."
      ],
      [
        "Keep your classroom clean and tidy.",
        "✨",
        "Sınıfınızı temiz ve düzenli tutun."
      ]
    ]
  },
  {
    "id": "s2u1",
    "stage": "s2",
    "no": "1",
    "title": "Look in a Book",
    "tr": "Kitaba Bak",
    "emoji": "📚",
    "cats": [
      "Books & Reading",
      "Story Elements",
      "Classroom Life"
    ],
    "w": [
      [
        "book",
        "📖",
        "kitap",
        0
      ],
      [
        "story",
        "📜",
        "hikâye",
        0
      ],
      [
        "cover",
        "📔",
        "kitap kapağı",
        0
      ],
      [
        "page",
        "📄",
        "sayfa",
        0
      ],
      [
        "author",
        "✍️",
        "yazar",
        1
      ],
      [
        "illustrator",
        "🎨",
        "çizer",
        1
      ],
      [
        "character",
        "🦸",
        "karakter",
        1
      ],
      [
        "title",
        "🏷️",
        "başlık",
        1
      ],
      [
        "read",
        "👓",
        "okumak",
        2
      ],
      [
        "turn",
        "🔄",
        "çevirmek",
        2
      ],
      [
        "look",
        "👀",
        "bakmak",
        2
      ],
      [
        "library",
        "🏛️",
        "kütüphane",
        2
      ]
    ],
    "s": [
      [
        "Look at the colorful cover of this story book.",
        "📖",
        "Bu hikâye kitabının renkli kapağına bak."
      ],
      [
        "Turn the page to read what happens next.",
        "📄",
        "Sırada ne olacağını okumak için sayfayı çevir."
      ],
      [
        "The author wrote an exciting tale for us.",
        "✍️",
        "Yazar bizim için heyecan verici bir hikâye yazdı."
      ],
      [
        "My favorite character is a clever little fox.",
        "🦸",
        "En sevdiğim karakter akıllı küçük bir tilkidir."
      ],
      [
        "We visit the quiet library every Friday.",
        "🏛️",
        "Her Cuma sessiz kütüphaneyi ziyaret ederiz."
      ],
      [
        "Read the title at the top of the page.",
        "🏷️",
        "Sayfanın başındaki başlığı oku."
      ]
    ]
  },
  {
    "id": "s2u2",
    "stage": "s2",
    "no": "2",
    "title": "Good Neighbours",
    "tr": "İyi Komşular",
    "emoji": "🏘️",
    "cats": [
      "Community People",
      "Places",
      "Helping Verbs"
    ],
    "w": [
      [
        "neighbour",
        "🏡",
        "komşu",
        0
      ],
      [
        "doctor",
        "🩺",
        "doktor",
        0
      ],
      [
        "police",
        "👮",
        "polis",
        0
      ],
      [
        "baker",
        "🥖",
        "fırıncı",
        0
      ],
      [
        "firefighter",
        "🚒",
        "itfaiyeci",
        0
      ],
      [
        "hospital",
        "🏥",
        "hastane",
        1
      ],
      [
        "bakery",
        "🥐",
        "fırın",
        1
      ],
      [
        "park",
        "🌳",
        "park",
        1
      ],
      [
        "shop",
        "🏪",
        "dükkân",
        1
      ],
      [
        "help",
        "🤝",
        "yardım etmek",
        2
      ],
      [
        "share",
        "🤲",
        "paylaşmak",
        2
      ],
      [
        "smile",
        "😊",
        "gülümsemek",
        2
      ]
    ],
    "s": [
      [
        "A good neighbour is always ready to help.",
        "🏡",
        "İyi bir komşu her zaman yardıma hazırdır."
      ],
      [
        "The doctor cares for sick people at the hospital.",
        "🩺",
        "Doktor hastanedeki hasta insanlarla ilgilenir."
      ],
      [
        "The friendly baker makes warm bread at the bakery.",
        "🥖",
        "Dost canlısı fırıncı fırında sıcak ekmek yapar."
      ],
      [
        "The brave firefighter rides in a big red truck.",
        "🚒",
        "Cesur itfaiyeci büyük kırmızı bir kamyonda gider."
      ],
      [
        "Children play together happily in the green park.",
        "🌳",
        "Çocuklar yeşil parkta neşeyle birlikte oynarlar."
      ],
      [
        "Always share your toys and smile with kindness.",
        "😊",
        "Oyuncaklarını her zaman paylaş ve nezaketle gülümse."
      ]
    ]
  },
  {
    "id": "s2u3",
    "stage": "s2",
    "no": "3",
    "title": "Ready, Steady, Go!",
    "tr": "Hazır, Başla!",
    "emoji": "🏃",
    "cats": [
      "Sports",
      "Movement Verbs",
      "Health & Energy"
    ],
    "w": [
      [
        "run",
        "🏃",
        "koşmak",
        0
      ],
      [
        "jump",
        "🦘",
        "zıplamak",
        0
      ],
      [
        "skip",
        "🤸",
        "ip atlamak",
        0
      ],
      [
        "hop",
        "🐰",
        "seksek oynamak / sekmek",
        0
      ],
      [
        "catch",
        "🧤",
        "yakalamak",
        1
      ],
      [
        "throw",
        "⚾",
        "fırlatmak / atmak",
        1
      ],
      [
        "kick",
        "⚽",
        "tekmelemek",
        1
      ],
      [
        "score",
        "🥅",
        "sayı yapmak / gol atmak",
        1
      ],
      [
        "strong",
        "💪",
        "güçlü",
        2
      ],
      [
        "healthy",
        "🥗",
        "sağlıklı",
        2
      ],
      [
        "water",
        "💧",
        "su",
        2
      ],
      [
        "rest",
        "🛋️",
        "dinlenmek",
        2
      ]
    ],
    "s": [
      [
        "Ready, steady, go! Run as fast as you can.",
        "🏃",
        "Hazır, dikkat, başla! Koşabildiğin kadar hızlı koş."
      ],
      [
        "Throw the ball to me and I will catch it.",
        "🧤",
        "Topu bana at, ben yakalayacağım."
      ],
      [
        "Kick the soccer ball to score a winning goal!",
        "⚽",
        "Kazanan golü atmak için futbol topuna vur!"
      ],
      [
        "Eating fruits helps you stay strong and healthy.",
        "🥗",
        "Meyve yemek güçlü ve sağlıklı kalmanıza yardımcı olur."
      ],
      [
        "Drink fresh water after playing outside.",
        "💧",
        "Dışarıda oynadıktan sonra temiz su için."
      ],
      [
        "Sit on the bench to take a well-deserved rest.",
        "🛋️",
        "Hak edilmiş bir mola vermek için bankta oturun."
      ]
    ]
  },
  {
    "id": "s2u4",
    "stage": "s2",
    "no": "4",
    "title": "The Big Sky",
    "tr": "Büyük Gökyüzü",
    "emoji": "☀️",
    "cats": [
      "Sky Objects",
      "Weather",
      "Time of Day"
    ],
    "w": [
      [
        "sun",
        "☀️",
        "güneş",
        0
      ],
      [
        "moon",
        "🌙",
        "ay",
        0
      ],
      [
        "star",
        "⭐",
        "yıldız",
        0
      ],
      [
        "cloud",
        "☁️",
        "bulut",
        0
      ],
      [
        "rainbow",
        "🌈",
        "gökkuşağı",
        0
      ],
      [
        "wind",
        "💨",
        "rüzgâr",
        1
      ],
      [
        "rain",
        "🌧️",
        "yağmur",
        1
      ],
      [
        "storm",
        "⛈️",
        "fırtına",
        1
      ],
      [
        "morning",
        "🌅",
        "sabah",
        2
      ],
      [
        "night",
        "🌃",
        "gece",
        2
      ],
      [
        "shine",
        "✨",
        "parlamak",
        2
      ],
      [
        "blow",
        "🌬️",
        "esmek",
        2
      ]
    ],
    "s": [
      [
        "The warm sun rises brightly in the morning.",
        "☀️",
        "Ilık güneş sabahleyin parlak bir şekilde doğar."
      ],
      [
        "Look at that stunning rainbow across the big sky.",
        "🌈",
        "Büyük gökyüzündeki şu büyüleyici gökkuşağına bak."
      ],
      [
        "The cool wind begins to blow through the trees.",
        "💨",
        "Ağaçların arasından serin rüzgâr esmeye başlar."
      ],
      [
        "Millions of stars shine like diamonds at night.",
        "⭐",
        "Geceleri milyonlarca yıldız elmas gibi parıldar."
      ],
      [
        "A fluffy white cloud drifts slowly overhead.",
        "☁️",
        "Tombul beyaz bir bulut yavaşça başımızın üzerinden süzülür."
      ],
      [
        "The silver moon lights up the quiet garden.",
        "🌙",
        "Gümüş ay sessiz bahçeyi aydınlatır."
      ]
    ]
  },
  {
    "id": "s2u5",
    "stage": "s2",
    "no": "5",
    "title": "Let’s Measure",
    "tr": "Ölçelim",
    "emoji": "📏",
    "cats": [
      "Measurement Tools",
      "Comparisons",
      "Shapes & Math"
    ],
    "w": [
      [
        "ruler",
        "📏",
        "cetvel",
        0
      ],
      [
        "scale",
        "⚖️",
        "terazi / tartı",
        0
      ],
      [
        "tape",
        "📐",
        "mezura / şerit metre",
        0
      ],
      [
        "clock",
        "🕐",
        "saat",
        0
      ],
      [
        "long",
        "🐍",
        "uzun",
        1
      ],
      [
        "short",
        "🐛",
        "kısa",
        1
      ],
      [
        "heavy",
        "🪨",
        "ağır",
        1
      ],
      [
        "light",
        "🪶",
        "hafif",
        1
      ],
      [
        "tall",
        "🦒",
        "uzun boylu",
        1
      ],
      [
        "weight",
        "🏋️",
        "ağırlık",
        2
      ],
      [
        "size",
        "📦",
        "boyut / ebat",
        2
      ],
      [
        "count",
        "🔢",
        "saymak",
        2
      ]
    ],
    "s": [
      [
        "Use the wooden ruler to measure the paper.",
        "📏",
        "Kâğıdı ölçmek için tahta cetveli kullan."
      ],
      [
        "The giraffe is very tall and the insect is short.",
        "🦒",
        "Zürafa çok uzun boyludur, böcek ise kısadır."
      ],
      [
        "A heavy rock will tilt the balancing scale.",
        "⚖️",
        "Ağır bir taş denge terazisini eğer."
      ],
      [
        "A bird feather is remarkably light.",
        "🪶",
        "Bir kuş tüyü son derece hafiftir."
      ],
      [
        "Look at the clock to know the exact time.",
        "🕐",
        "Tam zamanı bilmek için saate bak."
      ],
      [
        "Let us count all the objects by their size.",
        "🔢",
        "Tüm nesneleri boyutlarına göre sayalım."
      ]
    ]
  },
  {
    "id": "s2u6",
    "stage": "s2",
    "no": "6",
    "title": "Bugs and Critters",
    "tr": "Böcekler ve Minik Canlılar",
    "emoji": "🐞",
    "cats": [
      "Insects",
      "Body Features",
      "Garden Nature"
    ],
    "w": [
      [
        "ant",
        "🐜",
        "karınca",
        0
      ],
      [
        "bee",
        "🐝",
        "arı",
        0
      ],
      [
        "butterfly",
        "🦋",
        "kelebek",
        0
      ],
      [
        "ladybird",
        "🐞",
        "uğur böceği",
        0
      ],
      [
        "spider",
        "🕷️",
        "örümcek",
        0
      ],
      [
        "caterpillar",
        "🐛",
        "tırtıl",
        0
      ],
      [
        "wing",
        "🪽",
        "kanat",
        1
      ],
      [
        "leg",
        "🦵",
        "bacak",
        1
      ],
      [
        "spot",
        "⚪",
        "benek / leke",
        1
      ],
      [
        "flower",
        "🌸",
        "çiçek",
        2
      ],
      [
        "web",
        "🕸️",
        "ağ",
        2
      ],
      [
        "crawl",
        "🪱",
        "sürünmek / emeklemek",
        2
      ]
    ],
    "s": [
      [
        "The busy bee visits each sweet flower.",
        "🐝",
        "Çalışkan arı her tatlı çiçeği ziyaret eder."
      ],
      [
        "A tiny ladybird has red wings and black spots.",
        "🐞",
        "Minik bir uğur böceğinin kırmızı kanatları ve siyah benekleri vardır."
      ],
      [
        "The caterpillar will change into a colorful butterfly.",
        "🦋",
        "Tırtıl renkli bir kelebeğe dönüşecek."
      ],
      [
        "A spider spins a sticky web between the branches.",
        "🕷️",
        "Bir örümcek dalların arasına yapışkan bir ağ örer."
      ],
      [
        "Hardworking ants crawl together in a straight line.",
        "🐜",
        "Çalışkan karıncalar düz bir çizgide birlikte sürünürler."
      ],
      [
        "Count how many legs the bug has.",
        "🦵",
        "Böceğin kaç bacağı olduğunu say."
      ]
    ]
  },
  {
    "id": "s2u7",
    "stage": "s2",
    "no": "7",
    "title": "Long Ago and Today",
    "tr": "Geçmişte ve Bugün",
    "emoji": "⏳",
    "cats": [
      "Time Concepts",
      "Old & Modern Things",
      "History Verbs"
    ],
    "w": [
      [
        "past",
        "📜",
        "geçmiş",
        0
      ],
      [
        "present",
        "📱",
        "günümüz / şimdiki zaman",
        0
      ],
      [
        "castle",
        "🏰",
        "kale / şato",
        0
      ],
      [
        "museum",
        "🏛️",
        "müze",
        0
      ],
      [
        "candle",
        "🕯️",
        "mum",
        1
      ],
      [
        "lamp",
        "💡",
        "lamba",
        1
      ],
      [
        "quill",
        "🪶",
        "tüy kalem",
        1
      ],
      [
        "pen",
        "🖊️",
        "tükenmez kalem",
        1
      ],
      [
        "travel",
        "🧳",
        "seyahat etmek",
        2
      ],
      [
        "live",
        "🏡",
        "yaşamak",
        2
      ],
      [
        "old",
        "👴",
        "eski / yaşlı",
        2
      ],
      [
        "new",
        "✨",
        "yeni",
        2
      ]
    ],
    "s": [
      [
        "People used a flickering candle long ago in the past.",
        "🕯️",
        "İnsanlar geçmişte uzun zaman önce titreyen bir mum kullanırdı."
      ],
      [
        "Today we turn on an electric lamp with a click.",
        "💡",
        "Bugün ise tek bir tıkla elektrikli lambayı açıyoruz."
      ],
      [
        "Kings and queens lived inside a stone castle.",
        "🏰",
        "Krallar ve kraliçeler taştan bir kalede yaşarlardı."
      ],
      [
        "We can see ancient treasures at the museum.",
        "🏛️",
        "Eski hazineleri müzede görebiliriz."
      ],
      [
        "Long ago children wrote with a bird quill.",
        "🪶",
        "Uzun zaman önce çocuklar kuş tüyü kalemle yazarlardı."
      ],
      [
        "Modern trains travel much faster than old wagons.",
        "🧳",
        "Modern trenler eski vagonlardan çok daha hızlı seyahat eder."
      ]
    ]
  },
  {
    "id": "s2u8",
    "stage": "s2",
    "no": "8",
    "title": "In the City",
    "tr": "Şehirde",
    "emoji": "🏙️",
    "cats": [
      "City Places",
      "Street Objects",
      "City Directions"
    ],
    "w": [
      [
        "city",
        "🏙️",
        "şehir",
        0
      ],
      [
        "street",
        "🛣️",
        "cadde / sokak",
        0
      ],
      [
        "building",
        "🏢",
        "bina",
        0
      ],
      [
        "cinema",
        "🎬",
        "sinema",
        0
      ],
      [
        "station",
        "🚉",
        "istasyon",
        0
      ],
      [
        "traffic",
        "🚦",
        "trafik ışığı",
        1
      ],
      [
        "bridge",
        "🌉",
        "köprü",
        1
      ],
      [
        "crosswalk",
        "🦓",
        "yaya geçidi",
        1
      ],
      [
        "walk",
        "🚶",
        "yürümek",
        2
      ],
      [
        "cross",
        "🚸",
        "karşıya geçmek",
        2
      ],
      [
        "left",
        "⬅️",
        "sol",
        2
      ],
      [
        "right",
        "➡️",
        "sağ",
        2
      ]
    ],
    "s": [
      [
        "There are tall buildings all over the big city.",
        "🏢",
        "Büyük şehrin her yerinde yüksek binalar var."
      ],
      [
        "Always wait for the traffic light to turn green.",
        "🚦",
        "Trafik ışığının yeşile dönmesini mutlaka bekleyin."
      ],
      [
        "Use the safe crosswalk to cross the busy street.",
        "🦓",
        "Kalabalık caddeden karşıya geçmek için güvenli yaya geçidini kullanın."
      ],
      [
        "We catch an electric train at the central station.",
        "🚉",
        "Merkez istasyonundan elektrikli bir trene biniyoruz."
      ],
      [
        "Turn left at the corner to find the modern cinema.",
        "🎬",
        "Modern sinemayı bulmak için köşeden sola dönün."
      ],
      [
        "A long suspension bridge spans across the wide river.",
        "🌉",
        "Geniş nehrin üzerinde uzun bir asma köprü uzanır."
      ]
    ]
  },
  {
    "id": "s2u9",
    "stage": "s2",
    "no": "9",
    "title": "Wonderful World",
    "tr": "Harika Dünya",
    "emoji": "🌍",
    "cats": [
      "World Landscapes",
      "Earth Care",
      "Nature Wonders"
    ],
    "w": [
      [
        "world",
        "🌍",
        "dünya",
        0
      ],
      [
        "mountain",
        "🏔️",
        "dağ",
        0
      ],
      [
        "ocean",
        "🌊",
        "okyanus",
        0
      ],
      [
        "forest",
        "🌲",
        "orman",
        0
      ],
      [
        "island",
        "🏝️",
        "ada",
        0
      ],
      [
        "desert",
        "🏜️",
        "çöl",
        0
      ],
      [
        "plant",
        "🌱",
        "bitki / dikmek",
        1
      ],
      [
        "protect",
        "🛡️",
        "korumak",
        1
      ],
      [
        "recycle",
        "♻️",
        "geri dönüştürmek",
        1
      ],
      [
        "clean",
        "✨",
        "temiz",
        2
      ],
      [
        "love",
        "❤️",
        "sevmek",
        2
      ],
      [
        "share",
        "🤲",
        "paylaşmak",
        2
      ]
    ],
    "s": [
      [
        "Our world is filled with breathtaking wonders.",
        "🌍",
        "Dünyamız nefes kesici harikalarla doludur."
      ],
      [
        "The snow-capped mountain reaches into the clouds.",
        "🏔️",
        "Karlarla kaplı dağ bulutlara kadar uzanır."
      ],
      [
        "Vast blue oceans are home to playful whales.",
        "🌊",
        "Uçsuz bucaksız mavi okyanuslar oyuncu balinalara ev sahipliği yapar."
      ],
      [
        "Plant a green tree to keep our air fresh and clean.",
        "🌱",
        "Havamızı temiz ve taze tutmak için yeşil bir ağaç dikin."
      ],
      [
        "We must protect every endangered animal and forest.",
        "🛡️",
        "Tehlike altındaki her hayvanı ve ormanı korumalıyız."
      ],
      [
        "Always recycle paper and plastic bottles.",
        "♻️",
        "Kâğıt ve plastik şişeleri her zaman geri dönüştürün."
      ]
    ]
  },
  {
    "id": "s2rev1",
    "stage": "s2",
    "no": "⭐",
    "title": "Stage 2 Mid Review",
    "tr": "2. Sınıf Yarıyıl Tekrarı",
    "emoji": "⭐",
    "mix": true,
    "cats": [
      "Stories & Community",
      "Sports & Energy",
      "Sky & Measuring"
    ],
    "w": [
      [
        "story",
        "📜",
        "hikâye",
        0
      ],
      [
        "doctor",
        "🩺",
        "doktor",
        0
      ],
      [
        "park",
        "🌳",
        "park",
        0
      ],
      [
        "run",
        "🏃",
        "koşmak",
        1
      ],
      [
        "catch",
        "🧤",
        "yakalamak",
        1
      ],
      [
        "healthy",
        "🥗",
        "sağlıklı",
        1
      ],
      [
        "sun",
        "☀️",
        "güneş",
        2
      ],
      [
        "star",
        "⭐",
        "yıldız",
        2
      ],
      [
        "ruler",
        "📏",
        "cetvel",
        2
      ],
      [
        "clock",
        "🕐",
        "saat",
        2
      ]
    ],
    "s": [
      [
        "Read a wonderful story in the quiet park.",
        "🌳",
        "Sessiz parkta harika bir hikâye oku."
      ],
      [
        "The kind doctor keeps us strong and healthy.",
        "🩺",
        "İyi kalpli doktor bizi güçlü ve sağlıklı tutar."
      ],
      [
        "The sun warms our playground during the day.",
        "☀️",
        "Güneş gün boyunca oyun alanımızı ısıtır."
      ],
      [
        "Run and catch the bouncing ball with your friend.",
        "🏃",
        "Arkadaşınla birlikte zıplayan topun peşinden koş ve yakala."
      ],
      [
        "Use your ruler to measure and check the clock.",
        "📏",
        "Ölçüm yapmak için cetvelini kullan ve saati kontrol et."
      ]
    ]
  },
  {
    "id": "s2rev2",
    "stage": "s2",
    "no": "🌟",
    "title": "Nature & City Review",
    "tr": "Doğa ve Şehir Tekrarı",
    "emoji": "🌟",
    "mix": true,
    "cats": [
      "Bugs & Nature",
      "Time & City",
      "Earth & Caring"
    ],
    "w": [
      [
        "bee",
        "🐝",
        "arı",
        0
      ],
      [
        "butterfly",
        "🦋",
        "kelebek",
        0
      ],
      [
        "castle",
        "🏰",
        "kale",
        1
      ],
      [
        "city",
        "🏙️",
        "şehir",
        1
      ],
      [
        "street",
        "🛣️",
        "cadde",
        1
      ],
      [
        "bridge",
        "🌉",
        "köprü",
        1
      ],
      [
        "world",
        "🌍",
        "dünya",
        2
      ],
      [
        "ocean",
        "🌊",
        "okyanus",
        2
      ],
      [
        "forest",
        "🌲",
        "orman",
        2
      ],
      [
        "protect",
        "🛡️",
        "korumak",
        2
      ]
    ],
    "s": [
      [
        "The colorful butterfly flutters near the ancient castle.",
        "🏰",
        "Renkli kelebek antik kalenin yanında kanat çırpar."
      ],
      [
        "The busy city has a wide bridge over the river.",
        "🌉",
        "Hareketli şehrin nehri üzerinde geniş bir köprü vardır."
      ],
      [
        "A gentle bee gathers honey in the green forest.",
        "🐝",
        "Uysal arı yeşil ormanda bal toplar."
      ],
      [
        "We cross the safe city street together.",
        "🛣️",
        "Güvenli şehir caddesini birlikte geçiyoruz."
      ],
      [
        "Together we can protect our beautiful blue world.",
        "🌍",
        "Güzel mavi dünyamızı birlikte koruyabiliriz."
      ]
    ]
  },
  {
    "id": "s2rev3",
    "stage": "s2",
    "no": "👑",
    "title": "Grade 2 Grand Champion",
    "tr": "2. Sınıf Şampiyon Tekrar",
    "emoji": "👑",
    "mix": true,
    "cats": [
      "Master Words",
      "Daily Life & City",
      "Discovery & Action"
    ],
    "w": [
      [
        "read",
        "👓",
        "okumak",
        0
      ],
      [
        "help",
        "🤝",
        "yardım etmek",
        0
      ],
      [
        "strong",
        "💪",
        "güçlü",
        0
      ],
      [
        "rainbow",
        "🌈",
        "gökkuşağı",
        1
      ],
      [
        "flower",
        "🌸",
        "çiçek",
        1
      ],
      [
        "museum",
        "🏛️",
        "müze",
        1
      ],
      [
        "crosswalk",
        "🦓",
        "yaya geçidi",
        2
      ],
      [
        "mountain",
        "🏔️",
        "dağ",
        2
      ],
      [
        "plant",
        "🌱",
        "bitki dikmek",
        2
      ],
      [
        "smile",
        "😊",
        "gülümsemek",
        2
      ]
    ],
    "s": [
      [
        "Read every day to become smart and strong.",
        "👓",
        "Akıllı ve güçlü olmak için her gün kitap oku."
      ],
      [
        "Always smile and help people whenever you can.",
        "🤝",
        "Her zaman gülümse ve elinden geldiğince insanlara yardım et."
      ],
      [
        "A bright rainbow appeared above the snowy mountain.",
        "🌈",
        "Karlı dağın üzerinde parlak bir gökkuşağı belirdi."
      ],
      [
        "Plant a lovely flower in front of the local museum.",
        "🏛️",
        "Yerel müzenin önüne sevimli bir çiçek dikin."
      ],
      [
        "Use the marked crosswalk to safely cross the avenue.",
        "🦓",
        "Caddeden güvenle geçmek için işaretli yaya geçidini kullanın."
      ]
    ]
  }
];


/* Toplam kelime sayısı */
const totalWords = ALLSETS.reduce((acc, u) => acc + u.w.length, 0);

/* Yardımcı Fonksiyonlar */
function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function el(html) {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function pick(arr) {
  if (!arr || !arr.length) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function sample(arr, n) {
  if (!arr || !arr.length) return [];
  const sh = shuffle([...arr]);
  return sh.slice(0, Math.min(n, sh.length));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rnd(n) {
  return Math.floor(Math.random() * n);
}

function cap(s) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function EWORDS(u) {
  if (!u || !u.w) return [];
  return u.w.filter(w => w[1] && w[1].trim() !== '');
}

function unitById(id) {
  return ALLSETS.find(u => u.id === id) || null;
}

function unitsOfStage(stageId) {
  return ALLSETS.filter(u => u.stage === stageId);
}

/* Kalıcı Hafıza & Durum Geçmişi (P0 Dayanıklılık / Anti-Crash Kalkanı) */
const store = {
  _mem: {},
  get(key) {
    try {
      const val = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('polly_' + key) : null;
      return val ? JSON.parse(val) : (this._mem[key] || null);
    } catch (err) {
      return this._mem[key] || null;
    }
  },
  set(key, val) {
    this._mem[key] = val;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('polly_' + key, JSON.stringify(val));
      }
    } catch (err) {
      // // SAFETY: Quota exceeded or private browsing safeguard
    }
  },
  remove(key) {
    delete this._mem[key];
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('polly_' + key);
      }
    } catch (err) {}
  },
  /* // PERF: Bounded Ring-Buffer History Ledger (Maks 20 kayıt) */
  pushHistory(entry) {
    try {
      const hist = this.get('history') || [];
      const item = { timestamp: Date.now(), t: Date.now(), ...entry };
      hist.push(item);
      if (hist.length > 20) hist.shift(); // Bound memory growth
      this.set('history', hist);
    } catch (e) {}
  },
  getHistory() {
    return this.get('history') || [];
  },
  clearHistory() {
    this.remove('history');
  },
  /* // SAFETY: Ayrıntılı Checkpoint (Kaldığı Yerden Pürüzsüz Devam İçin) */
  saveCheckpoint(ckpt) {
    try {
      const snap = {
        timestamp: Date.now(),
        ...ckpt
      };
      this.set('checkpoint', snap);
      this.pushHistory({ type: 'checkpoint', ...ckpt });
    } catch (e) {}
  },
  getCheckpoint() {
    return this.get('checkpoint');
  }
};
