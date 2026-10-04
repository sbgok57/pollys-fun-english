/* ============================================================
   📚 VERİ BANKASI — Cambridge Global English 1 & 2 (25 Ünite)
   ============================================================ */

const STAGES = [
  {
    "id": "s1",
    "name": "Grade 1",
    "book": "Cambridge Global English 1",
    "emoji": "🟢",
    "cls": "s1",
    "desc": "Starter + 9 Units · School, Family, Games, Making Things, Farm, Body, Transport, Water"
  },
  {
    "id": "s2",
    "name": "Grade 2",
    "book": "Cambridge Global English 2",
    "emoji": "🔵",
    "cls": "s2",
    "desc": "9 Units · Look Closer, City, Sports, Big Sky, Measuring, Minibeasts, Past & Present, Nature"
  },
  {
    "id": "s3",
    "name": "Grade 3",
    "book": "Cambridge Global English 3",
    "emoji": "🟣",
    "cls": "s3",
    "desc": "9 Units · Working Together, Communities, Desert, Inventions, Animals, Nutrition, Legends, Earth"
  },
  {
    "id": "s4",
    "name": "Grade 4",
    "book": "Cambridge Global English 4",
    "emoji": "🟠",
    "cls": "s4",
    "desc": "9 Units · Family Heritage, Space, Oceans, Inventions, Sports, History, Climate, Explorers"
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
      "Numbers & School"
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
        "please",
        "🙏",
        "lütfen",
        0
      ],
      [
        "thank you",
        "💛",
        "teşekkür ederim",
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
      ],
      [
        "six",
        "6️⃣",
        "altı",
        2
      ],
      [
        "seven",
        "7️⃣",
        "yedi",
        2
      ],
      [
        "eight",
        "8️⃣",
        "sekiz",
        2
      ],
      [
        "nine",
        "9️⃣",
        "dokuz",
        2
      ],
      [
        "ten",
        "🔟",
        "on",
        2
      ],
      [
        "book",
        "📖",
        "kitap",
        2
      ],
      [
        "pencil",
        "✏️",
        "kurşun kalem",
        2
      ],
      [
        "ruler",
        "📏",
        "cetvel",
        2
      ],
      [
        "scissors",
        "✂️",
        "makas",
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
        "I have one yellow pencil and a ruler.",
        "✏️",
        "Bir tane sarı kurşun kalemim ve bir cetvelim var."
      ],
      [
        "Count from one to ten with me!",
        "🔢",
        "Benimle birden ona kadar say!"
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
      "Actions & Learning",
      "Classroom & Nature"
    ],
    "w": [
      [
        "table",
        "🟫",
        "masa",
        0
      ],
      [
        "chair",
        "🪑",
        "sandalye",
        0
      ],
      [
        "computer",
        "💻",
        "bilgisayar",
        0
      ],
      [
        "whiteboard",
        "📋",
        "yazı tahtası",
        0
      ],
      [
        "crayons",
        "🖍️",
        "pastel boyalar",
        0
      ],
      [
        "book",
        "📚",
        "kitap",
        0
      ],
      [
        "pencil",
        "✏️",
        "kurşun kalem",
        0
      ],
      [
        "ruler",
        "📏",
        "cetvel",
        0
      ],
      [
        "clock",
        "⏰",
        "duvar saati",
        0
      ],
      [
        "backpack",
        "🎒",
        "okul çantası",
        0
      ],
      [
        "read",
        "📖",
        "okumak",
        1
      ],
      [
        "write",
        "✍️",
        "yazmak",
        1
      ],
      [
        "sing",
        "🎤",
        "şarkı söylemek",
        1
      ],
      [
        "draw",
        "🎨",
        "resim çizmek",
        1
      ],
      [
        "do maths",
        "🔢",
        "matematik yapmak",
        1
      ],
      [
        "use computers",
        "⌨️",
        "bilgisayar kullanmak",
        1
      ],
      [
        "same",
        "🟰",
        "aynı",
        1
      ],
      [
        "different",
        "🔀",
        "farklı",
        1
      ],
      [
        "interview",
        "🎙️",
        "röportaj",
        1
      ],
      [
        "teacher",
        "👩‍🏫",
        "öğretmen",
        2
      ],
      [
        "boy",
        "👦",
        "erkek çocuk",
        2
      ],
      [
        "girl",
        "👧",
        "kız çocuk",
        2
      ],
      [
        "children",
        "🧑‍🤝‍🧑",
        "çocuklar",
        2
      ],
      [
        "bicycle",
        "🚲",
        "bisiklet",
        2
      ],
      [
        "bus",
        "🚌",
        "otobüs",
        2
      ],
      [
        "car",
        "🚗",
        "araba",
        2
      ],
      [
        "boat",
        "⛵",
        "tekne",
        2
      ],
      [
        "sky",
        "☁️",
        "gökyüzü",
        2
      ],
      [
        "grass",
        "🌱",
        "çimen",
        2
      ],
      [
        "flowers",
        "🌸",
        "çiçekler",
        2
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        2
      ],
      [
        "bee",
        "🐝",
        "arı",
        2
      ],
      [
        "bird",
        "🐦",
        "kuş",
        2
      ],
      [
        "lizard",
        "🦎",
        "kertenkele",
        2
      ]
    ],
    "s": [
      [
        "Welcome to our classroom!",
        "🎒",
        "Sınıfımıza hoş geldiniz!"
      ],
      [
        "Open your book and take your pencil.",
        "📖",
        "Kitabını aç ve kurşun kalemini al."
      ],
      [
        "Sit on the chair at the table.",
        "🪑",
        "Masadaki sandalyeye otur."
      ],
      [
        "Look at the teacher and the whiteboard.",
        "👩‍🏫",
        "Öğretmene ve yazı tahtasına bakın."
      ],
      [
        "We read, write, draw and sing together.",
        "🎨",
        "Birlikte okuruz, yazarız, çizeriz ve şarkı söyleriz."
      ],
      [
        "I go to school by bus with my friends.",
        "🚌",
        "Arkadaşlarımla okula otobüsle giderim."
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
      "Family Members",
      "Home & Rooms",
      "Feelings & Love"
    ],
    "w": [
      [
        "mother",
        "👩",
        "anne",
        0
      ],
      [
        "mum",
        "👩‍🦰",
        "anne / anneciğim",
        0
      ],
      [
        "father",
        "👨",
        "baba",
        0
      ],
      [
        "dad",
        "🧔",
        "baba / babacığım",
        0
      ],
      [
        "brother",
        "👦",
        "erkek kardeş",
        0
      ],
      [
        "sister",
        "👧",
        "kız kardeş",
        0
      ],
      [
        "grandpa",
        "👴",
        "dede",
        0
      ],
      [
        "grandma",
        "👵",
        "büyükanne",
        0
      ],
      [
        "baby",
        "👶",
        "bebek",
        0
      ],
      [
        "family",
        "👨‍👩‍👧‍👦",
        "aile",
        0
      ],
      [
        "me",
        "🙋",
        "ben",
        0
      ],
      [
        "friend",
        "🤝",
        "arkadaş",
        0
      ],
      [
        "house",
        "🏠",
        "ev",
        1
      ],
      [
        "door",
        "🚪",
        "kapı",
        1
      ],
      [
        "window",
        "🪟",
        "pencere",
        1
      ],
      [
        "bed",
        "🛏️",
        "yatak",
        1
      ],
      [
        "room",
        "🛋️",
        "oda",
        1
      ],
      [
        "love",
        "❤️",
        "sevmek",
        2
      ],
      [
        "happy",
        "😊",
        "mutlu",
        2
      ],
      [
        "kind",
        "🥰",
        "kibar / nazik",
        2
      ],
      [
        "hug",
        "🤗",
        "sarılmak",
        2
      ],
      [
        "smile",
        "😁",
        "gülümsemek",
        2
      ]
    ],
    "s": [
      [
        "This is my mother and my father.",
        "👨‍👩‍👧",
        "Bu benim annem ve babam."
      ],
      [
        "My brother and sister play together.",
        "👧👦",
        "Erkek kardeşim ve kız kardeşim birlikte oynar."
      ],
      [
        "Grandma and grandpa tell lovely stories.",
        "👵👴",
        "Büyükannem ve dedem güzel hikayeler anlatır."
      ],
      [
        "We live in a nice house with a big window.",
        "🏠",
        "Büyük pencereli güzel bir evde yaşıyoruz."
      ],
      [
        "I love my family very much.",
        "❤️",
        "Ailemi çok seviyorum."
      ],
      [
        "Baby is sleeping quietly in the bed.",
        "👶",
        "Bebek yatakta sessizce uyuyor."
      ]
    ]
  },
  {
    "id": "s1u3",
    "stage": "s1",
    "no": "3",
    "title": "Fun and Games",
    "tr": "Eğlence ve Oyunlar",
    "emoji": "⚽",
    "cats": [
      "Sports & Ball Actions",
      "Body Movement",
      "Prepositions & Words"
    ],
    "w": [
      [
        "throw",
        "🤾",
        "atmak / fırlatmak",
        0
      ],
      [
        "catch",
        "🧤",
        "yakalamak",
        0
      ],
      [
        "roll",
        "🔄",
        "yuvarlamak",
        0
      ],
      [
        "hit",
        "🏏",
        "vurmak",
        0
      ],
      [
        "kick",
        "🦵",
        "tekmelemek / ayakla vurmak",
        0
      ],
      [
        "bounce",
        "🏀",
        "zıplatmak (top)",
        0
      ],
      [
        "ball",
        "⚽",
        "top",
        0
      ],
      [
        "clap",
        "👏",
        "el çırpmak",
        1
      ],
      [
        "cut",
        "✂️",
        "kesmek",
        1
      ],
      [
        "run",
        "🏃",
        "koşmak",
        1
      ],
      [
        "jump",
        "🦘",
        "zıplamak / atlamak",
        1
      ],
      [
        "win",
        "🏆",
        "kazanmak",
        1
      ],
      [
        "play",
        "🎮",
        "oynamak",
        1
      ],
      [
        "compare",
        "⚖️",
        "karşılaştırmak",
        1
      ],
      [
        "on",
        "🔛",
        "üzerinde",
        2
      ],
      [
        "under",
        "🔽",
        "altında",
        2
      ],
      [
        "next to",
        "➡️",
        "yanında",
        2
      ],
      [
        "above",
        "⬆️",
        "yukarısında",
        2
      ],
      [
        "rabbit",
        "🐰",
        "tavşan",
        2
      ],
      [
        "duck",
        "🦆",
        "ördek",
        2
      ],
      [
        "hat",
        "🧢",
        "şapka",
        2
      ],
      [
        "cup",
        "🥤",
        "bardak / kupa",
        2
      ],
      [
        "hand",
        "✋",
        "el",
        2
      ],
      [
        "rug",
        "🧶",
        "kilim / halı",
        2
      ]
    ],
    "s": [
      [
        "Bounce the ball and catch it!",
        "🏀",
        "Topu zıplat ve onu yakala!"
      ],
      [
        "Kick the ball into the goal!",
        "⚽",
        "Topu kaleye tekmele!"
      ],
      [
        "We can run, jump and clap our hands.",
        "🏃",
        "Koşabilir, zıplayabilir ve el çırpabiliriz."
      ],
      [
        "The ball is under the table.",
        "🔽",
        "Top masanın altındadır."
      ],
      [
        "You win! Let us play the game again.",
        "🏆",
        "Kazandın! Hadi oyunu bir daha oynayalım."
      ],
      [
        "Rabbit is next to the tree.",
        "🐰",
        "Tavşan ağacın yanındadır."
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
      "Clothes",
      "Colors",
      "Craft & Actions"
    ],
    "w": [
      [
        "dress",
        "👗",
        "elbise",
        0
      ],
      [
        "shirt",
        "👔",
        "gömlek",
        0
      ],
      [
        "trousers",
        "👖",
        "pantolon",
        0
      ],
      [
        "jacket",
        "🧥",
        "ceket",
        0
      ],
      [
        "skirt",
        "🥻",
        "etek",
        0
      ],
      [
        "shoes",
        "👞",
        "ayakkabılar",
        0
      ],
      [
        "boots",
        "👢",
        "çizmeler / botlar",
        0
      ],
      [
        "glasses",
        "👓",
        "gözlük",
        0
      ],
      [
        "hat",
        "👒",
        "şapka",
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
        "orange",
        "🟠",
        "turuncu",
        1
      ],
      [
        "purple",
        "🟣",
        "mor",
        1
      ],
      [
        "black",
        "⚫",
        "siyah",
        1
      ],
      [
        "pink",
        "🌸",
        "pembe",
        1
      ],
      [
        "playing",
        "🪁",
        "oynama",
        2
      ],
      [
        "painting",
        "🖌️",
        "boyama",
        2
      ],
      [
        "making",
        "🧵",
        "yapma",
        2
      ],
      [
        "wearing",
        "👕",
        "giyme",
        2
      ],
      [
        "cutting",
        "✂️",
        "kesme",
        2
      ],
      [
        "cat",
        "🐱",
        "kedi",
        2
      ],
      [
        "sun",
        "☀️",
        "güneş",
        2
      ],
      [
        "pen",
        "🖊️",
        "tükenmez kalem",
        2
      ],
      [
        "tent",
        "⛺",
        "çadır",
        2
      ]
    ],
    "s": [
      [
        "She is wearing a beautiful red dress.",
        "👗",
        "O güzel kırmızı bir elbise giyiyor."
      ],
      [
        "Put on your warm jacket and boots.",
        "🧥",
        "Sıcak ceketini ve botlarını giy."
      ],
      [
        "I am painting a yellow sun with my brush.",
        "☀️",
        "Fırçamla sarı bir güneş boyuyorum."
      ],
      [
        "We are making things with paper and glue.",
        "✂️",
        "Kağıt ve yapıştırıcıyla bir şeyler yapıyoruz."
      ],
      [
        "He has black glasses and blue trousers.",
        "👓",
        "Onun siyah gözlükleri ve mavi pantolonu var."
      ],
      [
        "Cut the paper and make a funny hat.",
        "👒",
        "Kağıdı kes ve komik bir şapka yap."
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
      "Baby Animals & Food",
      "Farm Actions"
    ],
    "w": [
      [
        "tractor",
        "🚜",
        "traktör",
        0
      ],
      [
        "cow",
        "🐄",
        "inek",
        0
      ],
      [
        "sheep",
        "🐏",
        "koyun",
        0
      ],
      [
        "hen",
        "🐔",
        "tavuk",
        0
      ],
      [
        "horse",
        "🐎",
        "at",
        0
      ],
      [
        "goat",
        "🐐",
        "keçi",
        0
      ],
      [
        "duck",
        "🦆",
        "ördek",
        0
      ],
      [
        "chick",
        "🐥",
        "civciv",
        1
      ],
      [
        "lamb",
        "🐑",
        "kuzu",
        1
      ],
      [
        "puppy",
        "🐶",
        "köpek yavrusu",
        1
      ],
      [
        "duckling",
        "🐣",
        "ördek yavrusu",
        1
      ],
      [
        "tadpole",
        "🐸",
        "kurbağa yavrusu / iribaş",
        1
      ],
      [
        "carrot",
        "🥕",
        "havuç",
        1
      ],
      [
        "pepper",
        "🫑",
        "biber",
        1
      ],
      [
        "onion",
        "🧅",
        "soğan",
        1
      ],
      [
        "potato",
        "🥔",
        "patates",
        1
      ],
      [
        "driving",
        "🚗",
        "araba/araç sürme",
        2
      ],
      [
        "carrying",
        "📦",
        "taşıma",
        2
      ],
      [
        "picking",
        "🍎",
        "toplama",
        2
      ],
      [
        "eating",
        "🍽️",
        "yeme",
        2
      ],
      [
        "cooking",
        "🍳",
        "yemek pişirme",
        2
      ],
      [
        "farm",
        "🌾",
        "çiftlik",
        2
      ],
      [
        "barn",
        "🏚️",
        "ahır / samanlık",
        2
      ],
      [
        "diagram",
        "📊",
        "şema / diyagram",
        2
      ]
    ],
    "s": [
      [
        "The farmer drives a big green tractor.",
        "🚜",
        "Çiftçi büyük yeşil bir traktör sürüyor."
      ],
      [
        "The cow gives sweet milk on the farm.",
        "🐄",
        "İnek çiftlikte tatlı süt verir."
      ],
      [
        "Look at the cute yellow chick and lamb!",
        "🐥",
        "Şu sevimli sarı civcive ve kuzuya bakın!"
      ],
      [
        "We pick fresh carrots and potatoes.",
        "🥕",
        "Taze havuç ve patates topluyoruz."
      ],
      [
        "Horses run fast across the big green field.",
        "🐎",
        "Atlar büyük yeşil arazide hızlıca koşar."
      ],
      [
        "Thank you for helping me on the farm.",
        "🌾",
        "Çiftlikte bana yardım ettiğin için teşekkür ederim."
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
      "Five Senses",
      "Body Parts",
      "Describing Words"
    ],
    "w": [
      [
        "see",
        "👁️",
        "görmek",
        0
      ],
      [
        "hear",
        "🎧",
        "duymak",
        0
      ],
      [
        "smell",
        "🌸",
        "koklamak",
        0
      ],
      [
        "taste",
        "👅",
        "tatmak",
        0
      ],
      [
        "touch",
        "✋",
        "dokunmak",
        0
      ],
      [
        "eyes",
        "👀",
        "gözler",
        1
      ],
      [
        "ears",
        "👂",
        "kulaklar",
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
        "head",
        "🗣️",
        "baş / kafa",
        1
      ],
      [
        "arm",
        "💪",
        "kol",
        1
      ],
      [
        "leg",
        "🦵",
        "bacak",
        1
      ],
      [
        "tail",
        "🐕",
        "kuyruk",
        1
      ],
      [
        "trunk",
        "🐘",
        "fil hortumu / gövde",
        1
      ],
      [
        "soft",
        "🧸",
        "yumuşak",
        2
      ],
      [
        "hard",
        "🧱",
        "sert",
        2
      ],
      [
        "round",
        "⚪",
        "yuvarlak",
        2
      ],
      [
        "flat",
        "📐",
        "düz",
        2
      ],
      [
        "short",
        "🤏",
        "kısa",
        2
      ],
      [
        "long",
        "📏",
        "uzun",
        2
      ],
      [
        "big",
        "🐋",
        "büyük",
        2
      ],
      [
        "furry",
        "🐱",
        "tüylü",
        2
      ],
      [
        "rock",
        "🪨",
        "kaya",
        2
      ],
      [
        "pond",
        "🌊",
        "gölet",
        2
      ]
    ],
    "s": [
      [
        "I see with my two bright eyes.",
        "👀",
        "İki parlak gözümle görürüm."
      ],
      [
        "I hear lovely music with my ears.",
        "👂",
        "Kulaklarımla güzel müzik duyarım."
      ],
      [
        "I smell fresh flowers with my nose.",
        "👃",
        "Burnumla taze çiçekleri koklarım."
      ],
      [
        "Touch the furry kitten; it is so soft.",
        "🐱",
        "Tüylü kediye dokun; çok yumuşak."
      ],
      [
        "The rock is hard and the ball is round.",
        "🪨",
        "Kaya serttir ve top yuvarlaktır."
      ],
      [
        "Wash your hands and brush your teeth.",
        "🪥",
        "Ellerini yıka ve dişlerini fırçala."
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
      "Move & Travel Verbs",
      "Vehicles",
      "Nature & Rhymes"
    ],
    "w": [
      [
        "climb",
        "🧗",
        "tırmanmak",
        0
      ],
      [
        "slide",
        "🛝",
        "kaymak",
        0
      ],
      [
        "float",
        "🛟",
        "yüzmek (batmamak)",
        0
      ],
      [
        "drive",
        "🏎️",
        "araba sürmek",
        0
      ],
      [
        "fly",
        "🛫",
        "uçmak",
        0
      ],
      [
        "fold",
        "📄",
        "katlamak",
        0
      ],
      [
        "car",
        "🚗",
        "araba",
        1
      ],
      [
        "bus",
        "🚌",
        "otobüs",
        1
      ],
      [
        "train",
        "🚆",
        "tren",
        1
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
        "jeep",
        "🚙",
        "arazi aracı / cip",
        1
      ],
      [
        "wheel",
        "🛞",
        "tekerlek",
        1
      ],
      [
        "sheep",
        "🐑",
        "koyun",
        2
      ],
      [
        "deer",
        "🦌",
        "geyik",
        2
      ],
      [
        "bee",
        "🐝",
        "arı",
        2
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        2
      ],
      [
        "seeds",
        "🌱",
        "tohumlar",
        2
      ],
      [
        "teeth",
        "🦷",
        "dişler",
        2
      ],
      [
        "knees",
        "🦵",
        "dizler",
        2
      ]
    ],
    "s": [
      [
        "Airplanes fly high up in the sky.",
        "✈️",
        "Uçaklar gökyüzünde çok yüksekte uçar."
      ],
      [
        "Boats float gently on the blue water.",
        "⛵",
        "Tekneler mavi suda usulca yüzer."
      ],
      [
        "The wheels on the bus go round and round.",
        "🚌",
        "Otobüsün tekerlekleri döner durur."
      ],
      [
        "Can you drive a jeep through the mud?",
        "🚙",
        "Çamurda bir cip sürebilir misin?"
      ],
      [
        "Children climb the ladder and slide down.",
        "🛝",
        "Çocuklar merdivene tırmanır ve kaydıraktan kayar."
      ],
      [
        "I travel to the seaside with my family.",
        "🌊",
        "Ailemle deniz kenarına seyahat ederim."
      ]
    ]
  },
  {
    "id": "s1u8",
    "stage": "s1",
    "no": "8",
    "title": "Animals Around Us",
    "tr": "Çevremizdeki Hayvanlar",
    "emoji": "🦁",
    "cats": [
      "City & Places",
      "Wild Animals",
      "Describing Words"
    ],
    "w": [
      [
        "road",
        "🛣️",
        "yol",
        0
      ],
      [
        "pavement",
        "🚶",
        "kaldırım",
        0
      ],
      [
        "shops",
        "🛍️",
        "dükkanlar / mağazalar",
        0
      ],
      [
        "traffic",
        "🚦",
        "trafik",
        0
      ],
      [
        "traffic light",
        "🚥",
        "trafik ışığı",
        0
      ],
      [
        "bus stop",
        "🚏",
        "otobüs durağı",
        0
      ],
      [
        "library",
        "📚",
        "kütüphane",
        0
      ],
      [
        "bakery",
        "🥖",
        "fırın",
        0
      ],
      [
        "park",
        "🌳",
        "park",
        0
      ],
      [
        "zoo",
        "🦒",
        "hayvanat bahçesi",
        0
      ],
      [
        "lion",
        "🦁",
        "aslan",
        1
      ],
      [
        "tiger",
        "🐯",
        "kaplan",
        1
      ],
      [
        "elephant",
        "🐘",
        "fil",
        1
      ],
      [
        "monkey",
        "🐵",
        "maymun",
        1
      ],
      [
        "zebra",
        "🦓",
        "zebra",
        1
      ],
      [
        "bear",
        "🐻",
        "ayı",
        1
      ],
      [
        "bird",
        "🐦",
        "kuş",
        1
      ],
      [
        "small",
        "🤏",
        "küçük",
        2
      ],
      [
        "big",
        "🏔️",
        "büyük",
        2
      ],
      [
        "hot",
        "🔥",
        "sıcak",
        2
      ],
      [
        "noisy",
        "📢",
        "gürültülü",
        2
      ],
      [
        "happy",
        "😊",
        "mutlu",
        2
      ],
      [
        "scary",
        "👻",
        "korkutucu",
        2
      ],
      [
        "choose",
        "👉",
        "seçmek",
        2
      ]
    ],
    "s": [
      [
        "Wait for the green light at the traffic light.",
        "🚥",
        "Trafik ışığında yeşil ışığı bekleyin."
      ],
      [
        "Walk carefully on the pavement by the road.",
        "🚶",
        "Yol kenarındaki kaldırımda dikkatlice yürüyün."
      ],
      [
        "The big elephant has very long ears.",
        "🐘",
        "Büyük filin çok uzun kulakları vardır."
      ],
      [
        "Monkeys climb tall trees in the jungle.",
        "🐵",
        "Maymunlar ormanda uzun ağaçlara tırmanır."
      ],
      [
        "We borrow fun storybooks from the library.",
        "📚",
        "Kütüphaneden eğlenceli hikaye kitapları ödünç alırız."
      ],
      [
        "Buy warm fresh bread at the bakery.",
        "🥖",
        "Fırından sıcak taze ekmek al."
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
      "Weather Words",
      "Water Daily Life",
      "Action Verbs"
    ],
    "w": [
      [
        "cloudy",
        "☁️",
        "bulutlu",
        0
      ],
      [
        "windy",
        "💨",
        "rüzgarlı",
        0
      ],
      [
        "rainy",
        "🌦️",
        "yağmurlu",
        0
      ],
      [
        "sunny",
        "☀️",
        "güneşli",
        0
      ],
      [
        "hot",
        "🌡️",
        "sıcak",
        0
      ],
      [
        "cold",
        "❄️",
        "soğuk",
        0
      ],
      [
        "water",
        "💧",
        "su",
        1
      ],
      [
        "rain",
        "🌧️",
        "yağmur",
        1
      ],
      [
        "umbrella",
        "☂️",
        "şemsiye",
        1
      ],
      [
        "boots",
        "👢",
        "yağmur çizmeleri",
        1
      ],
      [
        "pond",
        "🏊‍♂️",
        "gölet",
        1
      ],
      [
        "river",
        "🏞️",
        "nehir",
        1
      ],
      [
        "sea",
        "🌊",
        "deniz",
        1
      ],
      [
        "tea",
        "🍵",
        "çay",
        1
      ],
      [
        "rice",
        "🍚",
        "pirinç",
        1
      ],
      [
        "eat",
        "🍽️",
        "yemek yemek",
        2
      ],
      [
        "sleep",
        "😴",
        "uyumak",
        2
      ],
      [
        "play",
        "⚽",
        "oynamak",
        2
      ],
      [
        "swim",
        "🏊",
        "yüzmek",
        2
      ],
      [
        "drink",
        "🥤",
        "içmek",
        2
      ],
      [
        "wake up",
        "⏰",
        "uyanmak",
        2
      ],
      [
        "wash",
        "🧼",
        "yıkamak",
        2
      ]
    ],
    "s": [
      [
        "It is rainy today; take your umbrella!",
        "☂️",
        "Bugün hava yağmurlu; şemsiyeni al!"
      ],
      [
        "Put on your rain boots and splash in puddles.",
        "👢",
        "Yağmur botlarını giy ve su birikintilerinde sıçrat."
      ],
      [
        "Fish swim happily in rivers and seas.",
        "🐟",
        "Balıklar nehirlerde ve denizlerde mutlulukla yüzer."
      ],
      [
        "Drink clean water every day to stay healthy.",
        "💧",
        "Sağlıklı kalmak için her gün temiz su için."
      ],
      [
        "I wash my hands with soap and water.",
        "🧼",
        "Ellerimi su ve sabunla yıkarım."
      ],
      [
        "The sun is warm and bright in the sky.",
        "☀️",
        "Güneş gökyüzünde sıcak ve parlaktır."
      ]
    ]
  },
  {
    "id": "s1rev1",
    "stage": "s1",
    "no": "⭐",
    "title": "Term 1 Review",
    "tr": "1. Dönem Genel Tekrar",
    "emoji": "🌟",
    "cats": [
      "School & Colors",
      "Family & Home",
      "Toys & Fun"
    ],
    "w": [
      [
        "hello",
        "👋",
        "merhaba",
        0
      ],
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
        "ruler",
        "📏",
        "cetvel",
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
        "sister",
        "👧",
        "kız kardeş",
        1
      ],
      [
        "brother",
        "👦",
        "erkek kardeş",
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
        "catch",
        "🧤",
        "yakalamak",
        2
      ],
      [
        "throw",
        "🤾",
        "atmak",
        2
      ],
      [
        "jump",
        "🦘",
        "zıplamak",
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
        "Welcome back to our fun English review!",
        "🌟",
        "Eğlenceli İngilizce tekrarımıza tekrar hoş geldiniz!"
      ],
      [
        "My family lives in a cozy house.",
        "🏠",
        "Ailem sıcak ve rahat bir evde yaşıyor."
      ],
      [
        "Throw the red ball to your friend.",
        "🔴",
        "Kırmızı topu arkadaşına fırlat."
      ],
      [
        "We read books and write with pencils.",
        "✏️",
        "Kitap okuruz ve kurşun kalemlerle yazarız."
      ],
      [
        "Count your toys and jump with joy!",
        "🦘",
        "Oyuncaklarını say ve neşeyle zıpla."
      ]
    ]
  },
  {
    "id": "s1rev2",
    "stage": "s1",
    "no": "🌟",
    "title": "Term 2 Review",
    "tr": "2. Dönem Genel Tekrar",
    "emoji": "🎯",
    "cats": [
      "Farm & Animals",
      "Body & Motion",
      "Travel & Water"
    ],
    "w": [
      [
        "tractor",
        "🚜",
        "traktör",
        0
      ],
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
        "dress",
        "👗",
        "elbise",
        0
      ],
      [
        "shoes",
        "👞",
        "ayakkabılar",
        0
      ],
      [
        "eyes",
        "👀",
        "gözler",
        1
      ],
      [
        "ears",
        "👂",
        "kulaklar",
        1
      ],
      [
        "see",
        "👁️",
        "görmek",
        1
      ],
      [
        "hear",
        "🎧",
        "duymak",
        1
      ],
      [
        "touch",
        "✋",
        "dokunmak",
        1
      ],
      [
        "car",
        "🚗",
        "araba",
        2
      ],
      [
        "bus",
        "🚌",
        "otobüs",
        2
      ],
      [
        "plane",
        "✈️",
        "uçak",
        2
      ],
      [
        "rain",
        "🌧️",
        "yağmur",
        2
      ],
      [
        "water",
        "💧",
        "su",
        2
      ]
    ],
    "s": [
      [
        "The cow and sheep live on the green farm.",
        "🚜",
        "İnek ve koyun yeşil çiftlikte yaşar."
      ],
      [
        "I hear birds singing with my two ears.",
        "👂",
        "İki kulağımla kuşların ötüşünü duyarım."
      ],
      [
        "Put on your warm shoes and coat.",
        "👞",
        "Sıcak ayakkabılarını ve montunu giy."
      ],
      [
        "We travel by bus and see the big river.",
        "🚌",
        "Otobüsle seyahat eder ve büyük nehri görürüz."
      ],
      [
        "Water gives life to all animals and plants.",
        "💧",
        "Su tüm hayvanlara ve bitkilere hayat verir."
      ]
    ]
  },
  {
    "id": "s1rev3",
    "stage": "s1",
    "no": "🔁",
    "title": "Grade 1 Master Review",
    "tr": "1. Sınıf Şampiyon Tekrarı",
    "emoji": "👑",
    "cats": [
      "Everyday Words",
      "Creatures & Nature",
      "Actions & Play"
    ],
    "w": [
      [
        "school",
        "🏫",
        "okul",
        0
      ],
      [
        "family",
        "👨‍👩‍👧‍👦",
        "aile",
        0
      ],
      [
        "friend",
        "🤝",
        "arkadaş",
        0
      ],
      [
        "teacher",
        "👩‍🏫",
        "öğretmen",
        0
      ],
      [
        "yellow",
        "🟡",
        "sarı",
        0
      ],
      [
        "lion",
        "🦁",
        "aslan",
        1
      ],
      [
        "elephant",
        "🐘",
        "fil",
        1
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        1
      ],
      [
        "flower",
        "🌸",
        "çiçek",
        1
      ],
      [
        "sunny",
        "☀️",
        "güneşli",
        1
      ],
      [
        "run",
        "🏃",
        "koşmak",
        2
      ],
      [
        "sing",
        "🎤",
        "şarkı söylemek",
        2
      ],
      [
        "draw",
        "🎨",
        "çizmek",
        2
      ],
      [
        "swim",
        "🏊",
        "yüzmek",
        2
      ],
      [
        "climb",
        "🧗",
        "tırmanmak",
        2
      ],
      [
        "smile",
        "😁",
        "gülümsemek",
        2
      ]
    ],
    "s": [
      [
        "Congratulations! You finished Grade 1 English!",
        "👑",
        "Tebrikler! 1. Sınıf İngilizceyi tamamladın!"
      ],
      [
        "You know many English words and songs.",
        "🎶",
        "Artık birçok İngilizce kelime ve şarkı biliyorsun."
      ],
      [
        "Lions roar and monkeys climb tall trees.",
        "🦁",
        "Aslanlar kükrer ve maymunlar uzun ağaçlara tırmanır."
      ],
      [
        "Always smile and be kind to your friends.",
        "😁",
        "Her zaman gülümse ve arkadaşlarına nazik ol."
      ],
      [
        "Ready for Grade 2 adventures with Polly!",
        "🚀",
        "Polly ile 2. Sınıf maceralarına hazırsın!"
      ]
    ]
  },
  {
    "id": "s2u1",
    "stage": "s2",
    "no": "1",
    "title": "Look in a Book",
    "tr": "Kitaba Bak",
    "emoji": "📖",
    "cats": [
      "Books & School Tools",
      "Actions & Subjects",
      "Alphabet & Stories"
    ],
    "w": [
      [
        "book",
        "📚",
        "kitap",
        0
      ],
      [
        "map",
        "🗺️",
        "harita",
        0
      ],
      [
        "calendar",
        "📅",
        "takvim",
        0
      ],
      [
        "clock",
        "⏰",
        "saat",
        0
      ],
      [
        "tablet",
        "📱",
        "tablet",
        0
      ],
      [
        "notebook",
        "📓",
        "defter",
        0
      ],
      [
        "marker",
        "🖊️",
        "keçeli kalem",
        0
      ],
      [
        "paint",
        "🖌️",
        "boya",
        0
      ],
      [
        "write",
        "✍️",
        "yazmak",
        1
      ],
      [
        "sing",
        "🎤",
        "şarkı söylemek",
        1
      ],
      [
        "play",
        "🎮",
        "oynamak",
        1
      ],
      [
        "draw",
        "🎨",
        "çizmek",
        1
      ],
      [
        "read",
        "📖",
        "okumak",
        1
      ],
      [
        "maths",
        "🔢",
        "matematik",
        1
      ],
      [
        "science",
        "🔬",
        "fen bilgisi",
        1
      ],
      [
        "pool",
        "🏊",
        "yüzme havuzu",
        1
      ],
      [
        "title",
        "🏷️",
        "başlık",
        2
      ],
      [
        "author",
        "📝",
        "yazar",
        2
      ],
      [
        "ant",
        "🐜",
        "karınca",
        2
      ],
      [
        "fish",
        "🐟",
        "balık",
        2
      ],
      [
        "octopus",
        "🐙",
        "ahtapot",
        2
      ],
      [
        "umbrella",
        "☂️",
        "şemsiye",
        2
      ],
      [
        "egg",
        "🥚",
        "yumurta",
        2
      ],
      [
        "apple",
        "🍎",
        "elma",
        2
      ]
    ],
    "s": [
      [
        "Look at the title and the author of the book.",
        "📖",
        "Kitabın başlığına ve yazarına bakın."
      ],
      [
        "I check the date on the classroom calendar.",
        "📅",
        "Sınıf takviminden bugünün tarihini kontrol ederim."
      ],
      [
        "We use computers and tablets for science.",
        "💻",
        "Fen dersi için bilgisayar ve tablet kullanıyoruz."
      ],
      [
        "Draw a colourful map with pencils and markers.",
        "🗺️",
        "Boya ve keçeli kalemlerle renkli bir harita çizin."
      ],
      [
        "Reading books makes our imagination grow.",
        "✨",
        "Kitap okumak hayal gücümüzü geliştirir."
      ],
      [
        "An ant is small but an octopus has eight arms.",
        "🐙",
        "Karınca küçüktür ama ahtapotun sekiz kolu vardır."
      ]
    ]
  },
  {
    "id": "s2u2",
    "stage": "s2",
    "no": "2",
    "title": "Good Neighbours",
    "tr": "İyi Komşular",
    "emoji": "🧑‍🚒",
    "cats": [
      "Community Helpers",
      "Uniforms & Equipment",
      "Directions & Places"
    ],
    "w": [
      [
        "police officer",
        "👮",
        "polis memuru",
        0
      ],
      [
        "firefighter",
        "🧑‍🚒",
        "itfaiyeci",
        0
      ],
      [
        "reporter",
        "🎙️",
        "muhabir / gazeteci",
        0
      ],
      [
        "nurse",
        "👩‍⚕️",
        "hemşire",
        0
      ],
      [
        "doctor",
        "👨‍⚕️",
        "doktor",
        0
      ],
      [
        "bus driver",
        "🚌",
        "otobüs şoförü",
        0
      ],
      [
        "baker",
        "🥖",
        "fırıncı",
        0
      ],
      [
        "actor",
        "🎭",
        "oyuncu / aktör",
        0
      ],
      [
        "painter",
        "🎨",
        "ressam / boyacı",
        0
      ],
      [
        "farmer",
        "👨‍🌾",
        "çiftçi",
        0
      ],
      [
        "sailor",
        "⚓",
        "denizci",
        0
      ],
      [
        "window cleaner",
        "🪟",
        "cam temizleyicisi",
        0
      ],
      [
        "helmet",
        "⛑️",
        "kask / baret",
        1
      ],
      [
        "jacket",
        "🧥",
        "ceket / üniforma",
        1
      ],
      [
        "boots",
        "🥾",
        "botlar",
        1
      ],
      [
        "gloves",
        "🧤",
        "eldivenler",
        1
      ],
      [
        "mask",
        "😷",
        "maske",
        1
      ],
      [
        "backpack",
        "🎒",
        "sırt çantası",
        1
      ],
      [
        "skipping rope",
        "🪢",
        "atlama ipi",
        1
      ],
      [
        "ruler",
        "📏",
        "cetvel",
        1
      ],
      [
        "behind",
        "🔙",
        "arkasında",
        2
      ],
      [
        "in front of",
        "👉",
        "önünde",
        2
      ],
      [
        "continent",
        "🌍",
        "kıta",
        2
      ],
      [
        "help",
        "🤝",
        "yardım etmek",
        2
      ]
    ],
    "s": [
      [
        "Firefighters wear red helmets and help people.",
        "🧑‍🚒",
        "İtfaiyeciler kırmızı kask takar ve insanlara yardım eder."
      ],
      [
        "A police officer keeps our town safe.",
        "👮",
        "Polis memuru kasabamızı güvende tutar."
      ],
      [
        "Doctors and nurses care for sick people in hospital.",
        "👩‍⚕️",
        "Doktorlar ve hemşireler hastanedeki hastalara bakar."
      ],
      [
        "The baker makes delicious fresh bread every morning.",
        "🥖",
        "Fırıncı her sabah lezzetli taze ekmek yapar."
      ],
      [
        "Good neighbours always help each other.",
        "🤝",
        "İyi komşular her zaman birbirlerine yardım eder."
      ],
      [
        "My backpack is behind the classroom chair.",
        "🎒",
        "Sırt çantam sınıf sandalyesinin arkasındadır."
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
      "Action Verbs",
      "Body & Motion",
      "School & Quantifiers"
    ],
    "w": [
      [
        "wave",
        "👋",
        "el sallamak",
        0
      ],
      [
        "stand",
        "🧍",
        "ayağa kalkmak",
        0
      ],
      [
        "hop",
        "🦘",
        "tek ayakla sıçramak",
        0
      ],
      [
        "fall",
        "🤸",
        "düşmek",
        0
      ],
      [
        "flap",
        "🦅",
        "kanat çırpmak",
        0
      ],
      [
        "wiggle",
        "🐛",
        "kıpırdamak / kıvrılmak",
        0
      ],
      [
        "nod",
        "🙆",
        "başını sallamak",
        0
      ],
      [
        "touch",
        "✋",
        "dokunmak",
        0
      ],
      [
        "clap",
        "👏",
        "el çırpmak",
        0
      ],
      [
        "head",
        "🗣️",
        "baş",
        1
      ],
      [
        "arm",
        "💪",
        "kol",
        1
      ],
      [
        "leg",
        "🦵",
        "bacak",
        1
      ],
      [
        "foot",
        "🦶",
        "ayak",
        1
      ],
      [
        "tummy",
        "🐻",
        "göbek / karın",
        1
      ],
      [
        "fingers",
        "🖐️",
        "parmaklar",
        1
      ],
      [
        "toes",
        "👣",
        "ayak parmakları",
        1
      ],
      [
        "nose",
        "👃",
        "burun",
        1
      ],
      [
        "playground",
        "🎪",
        "oyun parkı",
        2
      ],
      [
        "slide",
        "🛝",
        "kaydırak",
        2
      ],
      [
        "teacher",
        "👩‍🏫",
        "öğretmen",
        2
      ],
      [
        "glue",
        "🧴",
        "yapıştırıcı",
        2
      ],
      [
        "all",
        "👥",
        "hepsi / tümü",
        2
      ],
      [
        "most",
        "📊",
        "çoğu",
        2
      ],
      [
        "some",
        "🤏",
        "bazıları / biraz",
        2
      ]
    ],
    "s": [
      [
        "Ready, steady, go! Run as fast as you can!",
        "🏃",
        "Hazır, başla! Koşabildiğin kadar hızlı koş!"
      ],
      [
        "Stand up tall and wave your hands high.",
        "👋",
        "Dimdik ayağa kalk ve ellerini havaya salla."
      ],
      [
        "Hop on one foot and touch your toes.",
        "🦶",
        "Tek ayak üzerinde zıpla ve ayak parmaklarına dokun."
      ],
      [
        "Nod your head if you know the answer.",
        "🙆",
        "Cevabı biliyorsan başını onayla salla."
      ],
      [
        "We play happily in the school playground.",
        "🛝",
        "Okul bahçesinde mutlulukla oynuyoruz."
      ],
      [
        "All the children clap their hands together.",
        "👏",
        "Bütün çocuklar birlikte ellerini çırpar."
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
      "Sky Objects & Day",
      "Weather & Light",
      "Action & Position"
    ],
    "w": [
      [
        "sky",
        "🌌",
        "gökyüzü",
        0
      ],
      [
        "sun",
        "☀️",
        "güneş",
        0
      ],
      [
        "sunshine",
        "🌞",
        "güneş ışığı",
        0
      ],
      [
        "moon",
        "🌙",
        "ay",
        0
      ],
      [
        "stars",
        "⭐",
        "yıldızlar",
        0
      ],
      [
        "planet",
        "🪐",
        "gezegen",
        0
      ],
      [
        "night",
        "🌃",
        "gece",
        0
      ],
      [
        "cloud",
        "☁️",
        "bulut",
        1
      ],
      [
        "shadow",
        "👤",
        "gölge",
        1
      ],
      [
        "low",
        "🔽",
        "alçak",
        1
      ],
      [
        "high",
        "🔼",
        "yüksek",
        1
      ],
      [
        "long",
        "📏",
        "uzun",
        1
      ],
      [
        "short",
        "📐",
        "kısa",
        1
      ],
      [
        "dark",
        "🌑",
        "karanlık",
        1
      ],
      [
        "helicopter",
        "🚁",
        "helikopter",
        2
      ],
      [
        "bicycle",
        "🚲",
        "bisiklet",
        2
      ],
      [
        "insect",
        "🦗",
        "böcek",
        2
      ],
      [
        "played",
        "🎮",
        "oynadı",
        2
      ],
      [
        "climbed",
        "🧗",
        "tırmandı",
        2
      ],
      [
        "waved",
        "👋",
        "el salladı",
        2
      ]
    ],
    "s": [
      [
        "The sun shines brightly in the blue sky.",
        "☀️",
        "Güneş mavi gökyüzünde ışıl ışıl parlar."
      ],
      [
        "At night, we can see the glowing moon and stars.",
        "🌙",
        "Geceleri parıldayan ayı ve yıldızları görebiliriz."
      ],
      [
        "When the sun is low, your shadow is very long.",
        "👤",
        "Güneş alçaktayken gölgen çok uzundur."
      ],
      [
        "Earth is our beautiful round planet.",
        "🪐",
        "Dünya bizim güzel, yuvarlak gezegenimizdir."
      ],
      [
        "A helicopter flies high above the clouds.",
        "🚁",
        "Bir helikopter bulutların çok üstünde uçar."
      ],
      [
        "Watch the clouds change shape in the wind.",
        "☁️",
        "Bulutların rüzgarda şekil değiştirmesini izleyin."
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
      "Numbers 10-100",
      "Shapes & Geometry",
      "Measurement Words"
    ],
    "w": [
      [
        "ten",
        "🔟",
        "on",
        0
      ],
      [
        "twenty",
        "2️⃣0️⃣",
        "yirmi",
        0
      ],
      [
        "thirty",
        "3️⃣0️⃣",
        "otuz",
        0
      ],
      [
        "forty",
        "4️⃣0️⃣",
        "kırk",
        0
      ],
      [
        "fifty",
        "5️⃣0️⃣",
        "elli",
        0
      ],
      [
        "sixty",
        "6️⃣0️⃣",
        "altmış",
        0
      ],
      [
        "seventy",
        "7️⃣0️⃣",
        "yetmiş",
        0
      ],
      [
        "eighty",
        "8️⃣0️⃣",
        "seksen",
        0
      ],
      [
        "ninety",
        "9️⃣0️⃣",
        "doksan",
        0
      ],
      [
        "one hundred",
        "💯",
        "yüz",
        0
      ],
      [
        "star",
        "⭐",
        "yıldız",
        1
      ],
      [
        "triangle",
        "🔺",
        "üçgen",
        1
      ],
      [
        "circle",
        "⭕",
        "daire / çember",
        1
      ],
      [
        "heart",
        "❤️",
        "kalp",
        1
      ],
      [
        "square",
        "⏹️",
        "kare",
        1
      ],
      [
        "rectangle",
        "▭",
        "dikdörtgen",
        1
      ],
      [
        "measure",
        "📏",
        "ölçmek",
        2
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
        "four",
        "4️⃣",
        "dört",
        2
      ],
      [
        "eight",
        "8️⃣",
        "sekiz",
        2
      ],
      [
        "first",
        "🥇",
        "birinci",
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
        "Let us measure the table with our ruler.",
        "📏",
        "Hadi masayı cetvelimizle ölçelim."
      ],
      [
        "A square has four equal sides and corners.",
        "⏹️",
        "Bir karenin dört eşit kenarı ve köşesi vardır."
      ],
      [
        "Can you count from ten to one hundred by tens?",
        "💯",
        "Onar onar ondan yüze kadar sayabilir misin?"
      ],
      [
        "Draw a bright yellow star and a red heart.",
        "⭐",
        "Parlak sarı bir yıldız ve kırmızı bir kalp çizin."
      ],
      [
        "A circle is round like a ball or a coin.",
        "⭕",
        "Daire top veya madeni para gibi yuvarlaktır."
      ],
      [
        "One metre has one hundred centimetres.",
        "📏",
        "Bir metrede yüz santimetre vardır."
      ]
    ]
  },
  {
    "id": "s2u6",
    "stage": "s2",
    "no": "6",
    "title": "Bugs and Critters",
    "tr": "Böcekler ve Minik Canlılar",
    "emoji": "🐝",
    "cats": [
      "Insects & Bugs",
      "Rhyming Words & Body",
      "Food & Nature"
    ],
    "w": [
      [
        "butterfly",
        "🦋",
        "kelebek",
        0
      ],
      [
        "bee",
        "🐝",
        "arı",
        0
      ],
      [
        "cricket",
        "🦗",
        "cırcır böceği",
        0
      ],
      [
        "ant",
        "🐜",
        "karınca",
        0
      ],
      [
        "worm",
        "🪱",
        "solucan",
        0
      ],
      [
        "spider",
        "🕷️",
        "örümcek",
        0
      ],
      [
        "flea",
        "🪲",
        "pire",
        0
      ],
      [
        "ladybug",
        "🐞",
        "uğur böceği",
        0
      ],
      [
        "caterpillar",
        "🐛",
        "tırtıl",
        0
      ],
      [
        "knee",
        "🦵",
        "diz",
        1
      ],
      [
        "head",
        "🗣️",
        "baş",
        1
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        1
      ],
      [
        "red",
        "🔴",
        "kırmızı",
        1
      ],
      [
        "bed",
        "🛏️",
        "yatak",
        1
      ],
      [
        "sea",
        "🌊",
        "deniz",
        1
      ],
      [
        "fact",
        "💡",
        "gerçek bilgi",
        1
      ],
      [
        "cheese",
        "🧀",
        "peynir",
        2
      ],
      [
        "tea",
        "🍵",
        "çay",
        2
      ],
      [
        "bread",
        "🍞",
        "ekmek",
        2
      ],
      [
        "meat",
        "🥩",
        "et",
        2
      ],
      [
        "honey",
        "🍯",
        "bal",
        2
      ],
      [
        "flower",
        "🌸",
        "çiçek",
        2
      ]
    ],
    "s": [
      [
        "A busy bee buzzes around the pink flower.",
        "🐝",
        "Çalışkan bir arı pembe çiçeğin etrafında vızıldar."
      ],
      [
        "The colorful caterpillar becomes a butterfly.",
        "🦋",
        "Renkli tırtıl bir kelebeğe dönüşür."
      ],
      [
        "A tiny ant can carry heavy food to its nest.",
        "🐜",
        "Küçük bir karınca yuvasına ağır yiyecekler taşıyabilir."
      ],
      [
        "Spiders have eight legs and spin strong webs.",
        "🕷️",
        "Örümceklerin sekiz bacağı vardır ve güçlü ağlar örer."
      ],
      [
        "Bees make sweet and healthy golden honey.",
        "🍯",
        "Arılar tatlı ve sağlıklı altın bal yaparlar."
      ],
      [
        "Earthworms help the soil in our garden.",
        "🪱",
        "Toprak solucanları bahçemizdeki toprağa yardım eder."
      ]
    ]
  },
  {
    "id": "s2u7",
    "stage": "s2",
    "no": "7",
    "title": "Long Ago and Today",
    "tr": "Geçmişte ve Bugün",
    "emoji": "🌱",
    "cats": [
      "Gardening & Ecology",
      "Plant Parts & Life",
      "Nature & Animals"
    ],
    "w": [
      [
        "planting",
        "🪴",
        "fidan dikmek / ekmek",
        0
      ],
      [
        "watering",
        "🚿",
        "sulama / sulamak",
        0
      ],
      [
        "picking up",
        "🧹",
        "yerden toplama",
        0
      ],
      [
        "bin",
        "🗑️",
        "çöp kutusu",
        0
      ],
      [
        "recycle",
        "♻️",
        "geri dönüştürmek",
        0
      ],
      [
        "roots",
        "🥕",
        "kökler",
        1
      ],
      [
        "stem",
        "🎋",
        "gövde / sap (bitki)",
        1
      ],
      [
        "leaf",
        "🍃",
        "yaprak",
        1
      ],
      [
        "leaves",
        "🍂",
        "yapraklar",
        1
      ],
      [
        "flower",
        "🌸",
        "çiçek",
        1
      ],
      [
        "seed",
        "🌱",
        "tohum",
        1
      ],
      [
        "wood",
        "🪵",
        "odun / ahşap",
        1
      ],
      [
        "tomatoes",
        "🍅",
        "domatesler",
        1
      ],
      [
        "owl",
        "🦉",
        "baykuş",
        2
      ],
      [
        "crow",
        "🦅",
        "karga",
        2
      ],
      [
        "cow",
        "🐄",
        "inek",
        2
      ],
      [
        "earth",
        "🌍",
        "dünya / toprak",
        2
      ],
      [
        "forest",
        "🌲",
        "orman",
        2
      ],
      [
        "grow",
        "🌿",
        "büyümek",
        2
      ],
      [
        "green",
        "🟢",
        "yeşil",
        2
      ]
    ],
    "s": [
      [
        "A tiny seed grows into a magnificent tall tree.",
        "🌱",
        "Küçük bir tohum muhteşem uzun bir ağaca dönüşür."
      ],
      [
        "Plants drink water and food through their roots.",
        "🥕",
        "Bitkiler kökleri aracılığıyla su ve besin alır."
      ],
      [
        "Water your garden plants to keep them green.",
        "🚿",
        "Bitkilerinizi yeşil tutmak için bahçenizi sulayın."
      ],
      [
        "Put plastic and paper in the recycling bin.",
        "♻️",
        "Plastik ve kağıtları geri dönüşüm kutusuna atın."
      ],
      [
        "Long ago people used wood and stones for tools.",
        "🪵",
        "Çok eskiden insanlar aletler için odun ve taş kullanırdı."
      ],
      [
        "Wise owls sleep in the day and hunt at night.",
        "🦉",
        "Bilge baykuşlar gündüz uyur ve gece avlanır."
      ]
    ]
  },
  {
    "id": "s2u8",
    "stage": "s2",
    "no": "8",
    "title": "In the City",
    "tr": "Şehirde",
    "emoji": "🏠",
    "cats": [
      "Building & Structure",
      "Rooms & Furniture",
      "Places & Temperatures"
    ],
    "w": [
      [
        "roof",
        "🏠",
        "çatı",
        0
      ],
      [
        "wall",
        "🧱",
        "duvar",
        0
      ],
      [
        "stairs",
        "🪜",
        "merdivenler",
        0
      ],
      [
        "ladder",
        "🪜",
        "seyyar merdiven",
        0
      ],
      [
        "railing",
        "🚧",
        "tırabzan / korkuluk",
        0
      ],
      [
        "lift",
        "🛗",
        "asansör",
        0
      ],
      [
        "bedroom",
        "🛌",
        "yatak odası",
        1
      ],
      [
        "kitchen",
        "🧑‍🍳",
        "mutfak",
        1
      ],
      [
        "bathroom",
        "🛁",
        "banyo",
        1
      ],
      [
        "hall",
        "🚪",
        "hol / koridor",
        1
      ],
      [
        "garden",
        "🏡",
        "bahçe",
        1
      ],
      [
        "bed",
        "🛏️",
        "yatak",
        1
      ],
      [
        "sink",
        "🚰",
        "lavabo",
        1
      ],
      [
        "toilet",
        "🚽",
        "tuvalet",
        1
      ],
      [
        "cooker",
        "🍳",
        "ocak / fırın",
        1
      ],
      [
        "table",
        "🟫",
        "masa",
        1
      ],
      [
        "lamp",
        "💡",
        "lamba",
        1
      ],
      [
        "refrigerator",
        "🧊",
        "buzdolabı",
        1
      ],
      [
        "chair",
        "🪑",
        "sandalye",
        1
      ],
      [
        "shower",
        "🚿",
        "duş",
        1
      ],
      [
        "swimming pool",
        "🏊",
        "yüzme havuzu",
        2
      ],
      [
        "zoo",
        "🦁",
        "hayvanat bahçesi",
        2
      ],
      [
        "balloon",
        "🎈",
        "balon",
        2
      ],
      [
        "cold",
        "❄️",
        "soğuk",
        2
      ],
      [
        "warm",
        "☀️",
        "ılık / sıcak",
        2
      ],
      [
        "hot",
        "🔥",
        "sıcak",
        2
      ]
    ],
    "s": [
      [
        "Welcome to our modern apartment in the city.",
        "🏠",
        "Şehirdeki modern apartmanımıza hoş geldiniz."
      ],
      [
        "Take the lift or climb the stairs to the top.",
        "🛗",
        "Asansöre binin veya merdivenlerden yukarı çıkın."
      ],
      [
        "Mum is cooking delicious dinner in the kitchen.",
        "🍳",
        "Annem mutfakta lezzetli bir akşam yemeği pişiriyor."
      ],
      [
        "Keep juice and fresh milk in the refrigerator.",
        "🧊",
        "Meyve suyunu ve taze sütü buzdolabında tutun."
      ],
      [
        "Children swim happily in the warm swimming pool.",
        "🏊",
        "Çocuklar ılık yüzme havuzunda neşeyle yüzer."
      ],
      [
        "Look out from the balcony across the city roofs.",
        "🌆",
        "Balkondan şehrin çatılarına doğru bakın."
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
      "City & Vehicles",
      "Ocean Life",
      "Describing Our World"
    ],
    "w": [
      [
        "traffic",
        "🚦",
        "trafik",
        0
      ],
      [
        "helicopter",
        "🚁",
        "helikopter",
        0
      ],
      [
        "ferry",
        "⛴️",
        "feribot",
        0
      ],
      [
        "musicians",
        "🎺",
        "müzisyenler",
        0
      ],
      [
        "underground train",
        "🚇",
        "metro",
        0
      ],
      [
        "bridge",
        "🌉",
        "köprü",
        0
      ],
      [
        "plane",
        "✈️",
        "uçak",
        0
      ],
      [
        "traffic light",
        "🚥",
        "trafik ışığı",
        0
      ],
      [
        "map",
        "🗺️",
        "harita",
        0
      ],
      [
        "octopus",
        "🐙",
        "ahtapot",
        1
      ],
      [
        "jellyfish",
        "🪼",
        "denizanası",
        1
      ],
      [
        "penguin",
        "🐧",
        "penguen",
        1
      ],
      [
        "sea turtle",
        "🐢",
        "deniz kaplumbağası",
        1
      ],
      [
        "whale",
        "🐋",
        "balina",
        1
      ],
      [
        "dolphin",
        "🐬",
        "yunus",
        1
      ],
      [
        "ocean",
        "🌊",
        "okyanus",
        1
      ],
      [
        "amazing",
        "✨",
        "harika / şaşırtıcı",
        2
      ],
      [
        "beautiful",
        "🌺",
        "güzel",
        2
      ],
      [
        "graceful",
        "🦢",
        "zarif",
        2
      ],
      [
        "huge",
        "🏔️",
        "devasa / kocaman",
        2
      ],
      [
        "fast",
        "⚡",
        "hızlı",
        2
      ],
      [
        "gentle",
        "🕊️",
        "nazik / uysal",
        2
      ],
      [
        "world",
        "🌍",
        "dünya",
        2
      ],
      [
        "dangerous",
        "⚠️",
        "tehlikeli",
        2
      ]
    ],
    "s": [
      [
        "Our planet Earth is a wonderful and beautiful world.",
        "🌍",
        "Gezegenimiz Dünya harika ve güzel bir dünyadır."
      ],
      [
        "A sea turtle swims gracefully across the blue ocean.",
        "🐢",
        "Bir deniz kaplumbağası mavi okyanusta zarifçe yüzer."
      ],
      [
        "Huge blue whales sing songs in the deep sea.",
        "🐋",
        "Devasa mavi balinalar derin denizde şarkılar söyler."
      ],
      [
        "Take the ferry across the water under the bridge.",
        "⛴️",
        "Köprünün altından feribotla suyun karşısına geçin."
      ],
      [
        "Musicians play joyful music in the city square.",
        "🎺",
        "Müzisyenler şehir meydanında neşeli müzikler çalar."
      ],
      [
        "We protect our earth, oceans, and all creatures.",
        "💚",
        "Dünyamızı, okyanuslarımızı ve tüm canlıları koruyoruz."
      ]
    ]
  },
  {
    "id": "s2rev1",
    "stage": "s2",
    "no": "⭐",
    "title": "Stage 2 Mid Review",
    "tr": "2. Sınıf Ara Tekrar",
    "emoji": "🌟",
    "cats": [
      "Stories & Community",
      "Sports & Energy",
      "Sky & Measuring"
    ],
    "w": [
      [
        "book",
        "📖",
        "kitap",
        0
      ],
      [
        "author",
        "✍️",
        "yazar",
        0
      ],
      [
        "police officer",
        "👮",
        "polis memuru",
        0
      ],
      [
        "firefighter",
        "🧑‍🚒",
        "itfaiyeci",
        0
      ],
      [
        "doctor",
        "👨‍⚕️",
        "doktor",
        0
      ],
      [
        "run",
        "🏃",
        "koşmak",
        1
      ],
      [
        "jump",
        "🦘",
        "zıplamak",
        1
      ],
      [
        "hop",
        "🐇",
        "sekmek",
        1
      ],
      [
        "clap",
        "👏",
        "el çırpmak",
        1
      ],
      [
        "sun",
        "☀️",
        "güneş",
        2
      ],
      [
        "moon",
        "🌙",
        "ay",
        2
      ],
      [
        "shadow",
        "👤",
        "gölge",
        2
      ],
      [
        "square",
        "⏹️",
        "kare",
        2
      ],
      [
        "triangle",
        "🔺",
        "üçgen",
        2
      ],
      [
        "measure",
        "📏",
        "ölçmek",
        2
      ],
      [
        "one hundred",
        "💯",
        "yüz",
        2
      ]
    ],
    "s": [
      [
        "Welcome to the Stage 2 Mid Review adventure!",
        "🌟",
        "2. Sınıf Ara Tekrar macerasına hoş geldiniz!"
      ],
      [
        "Doctors and nurses care for people with kindness.",
        "👨‍⚕️",
        "Doktorlar ve hemşireler insanlara nezaketle bakar."
      ],
      [
        "Measure the length of shapes with a wooden ruler.",
        "📏",
        "Şekillerin uzunluğunu tahta bir cetvelle ölçün."
      ],
      [
        "The bright sunshine makes your shadow change.",
        "☀️",
        "Parlak güneş ışığı gölgenin değişmesini sağlar."
      ],
      [
        "Keep reading exciting books every single day!",
        "📖",
        "Her gün heyecan verici kitaplar okumaya devam edin!"
      ]
    ]
  },
  {
    "id": "s2rev2",
    "stage": "s2",
    "no": "🌟",
    "title": "Nature & City Review",
    "tr": "Doğa ve Şehir Tekrarı",
    "emoji": "🌿",
    "cats": [
      "Bugs & Nature",
      "Time & City",
      "Earth & Caring"
    ],
    "w": [
      [
        "butterfly",
        "🦋",
        "kelebek",
        0
      ],
      [
        "bee",
        "🐝",
        "arı",
        0
      ],
      [
        "spider",
        "🕷️",
        "örümcek",
        0
      ],
      [
        "ant",
        "🐜",
        "karınca",
        0
      ],
      [
        "honey",
        "🍯",
        "bal",
        0
      ],
      [
        "planting",
        "🌱",
        "fidan dikmek / ekmek",
        1
      ],
      [
        "watering",
        "🚿",
        "sulama / sulamak",
        1
      ],
      [
        "tree",
        "🌳",
        "ağaç",
        1
      ],
      [
        "recycle",
        "♻️",
        "geri dönüştürmek",
        1
      ],
      [
        "kitchen",
        "🍳",
        "mutfak",
        2
      ],
      [
        "bedroom",
        "🛏️",
        "yatak odası",
        2
      ],
      [
        "stairs",
        "🪜",
        "merdivenler",
        2
      ],
      [
        "lift",
        "🛗",
        "asansör",
        2
      ],
      [
        "roof",
        "🏠",
        "çatı",
        2
      ],
      [
        "garden",
        "🏡",
        "bahçe",
        2
      ],
      [
        "warm",
        "☀️",
        "ılık",
        2
      ]
    ],
    "s": [
      [
        "Butterflies fly softly over colorful flowers.",
        "🦋",
        "Kelebekler renkli çiçeklerin üzerinde usulca uçar."
      ],
      [
        "Always put plastic bottles in the recycle bin.",
        "♻️",
        "Plastik şişeleri her zaman geri dönüşüm kutusuna atın."
      ],
      [
        "We plant seeds and water them every morning.",
        "🌱",
        "Tohumlar ekiyoruz ve onları her sabah suluyoruz."
      ],
      [
        "Our city apartment has stairs and a fast lift.",
        "🛗",
        "Şehir apartmanımızda merdivenler ve hızlı bir asansör var."
      ],
      [
        "Enjoy relaxing in the quiet green garden.",
        "🏡",
        "Sessiz yeşil bahçede dinlenmenin tadını çıkarın."
      ]
    ]
  },
  {
    "id": "s2rev3",
    "stage": "s2",
    "no": "👑",
    "title": "Grade 2 Grand Champion",
    "tr": "2. Sınıf Büyük Şampiyon",
    "emoji": "🏆",
    "cats": [
      "Master Words",
      "Daily Life & City",
      "Discovery & Action"
    ],
    "w": [
      [
        "planet",
        "🪐",
        "gezegen",
        0
      ],
      [
        "ocean",
        "🌊",
        "okyanus",
        0
      ],
      [
        "sea turtle",
        "🐢",
        "deniz kaplumbağası",
        0
      ],
      [
        "whale",
        "🐋",
        "balina",
        0
      ],
      [
        "dolphin",
        "🐬",
        "yunus",
        0
      ],
      [
        "ferry",
        "⛴️",
        "feribot",
        1
      ],
      [
        "bridge",
        "🌉",
        "köprü",
        1
      ],
      [
        "traffic",
        "🚦",
        "trafik",
        1
      ],
      [
        "musicians",
        "🎺",
        "müzisyenler",
        1
      ],
      [
        "map",
        "🗺️",
        "harita",
        1
      ],
      [
        "amazing",
        "✨",
        "harika",
        2
      ],
      [
        "beautiful",
        "🌺",
        "güzel",
        2
      ],
      [
        "gentle",
        "🕊️",
        "nazik",
        2
      ],
      [
        "huge",
        "🏔️",
        "devasa",
        2
      ],
      [
        "fast",
        "⚡",
        "hızlı",
        2
      ],
      [
        "world",
        "🌍",
        "dünya",
        2
      ],
      [
        "help",
        "🤝",
        "yardım etmek",
        2
      ],
      [
        "champion",
        "🏆",
        "şampiyon",
        2
      ]
    ],
    "s": [
      [
        "You are the Grand Champion of Primary English!",
        "🏆",
        "İlkokul İngilizcesinin Büyük Şampiyonusun!"
      ],
      [
        "You have mastered Cambridge Global English Stage 1 and 2.",
        "🎓",
        "Cambridge Global English 1 ve 2. Seviyeleri başarıyla tamamladın."
      ],
      [
        "Explore the oceans, the cities, and the wide world.",
        "🌍",
        "Okyanusları, şehirleri ve geniş dünyayı keşfet."
      ],
      [
        "Speak English proudly with your friends and teachers.",
        "🗣️",
        "Arkadaşların ve öğretmenlerinle gururla İngilizce konuş."
      ],
      [
        "Keep learning, dreaming, and flying high!",
        "🚀",
        "Öğrenmeye, hayal kurmaya ve yükseklere uçmaya devam et!"
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
  try {
    const t = document.createElement('template');
    if (t && t.content && t.content.firstElementChild) {
      t.innerHTML = html.trim();
      if (t.content.firstElementChild) return t.content.firstElementChild;
    }
  } catch (e) {}
  const d = document.createElement('div');
  d.innerHTML = (html || '').trim();
  return d.firstElementChild || d;
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
  return u.w.filter(w => w[0] && String(w[0]).trim() !== '');
}

let _CURRICULUM_SETS_CACHE = null;

function getCurriculumVirtualSets() {
  if (_CURRICULUM_SETS_CACHE) return _CURRICULUM_SETS_CACHE;
  if (typeof CURRICULUM_DATA === 'undefined') return [];
  const list = [];
  const stageMap = { stage1: 's1', stage2: 's2', stage3: 's3', stage4: 's4' };
  const emojiPalette = ['🌟', '✨', '🎈', '🎯', '🎨', '🚀', '🌈', '🧩', '🏆', '💎', '🎪', '⚽', '🎒', '📚', '🌻', '🍎', '🐱', '🐶', '🚗', '✈️', '🎸', '🍦', '🦁', '🐻', '🐼', '🦊', '🐰', '🐸', '🐵', '🦄'];
  
  Object.keys(stageMap).forEach(stKey => {
    const sId = stageMap[stKey];
    const data = CURRICULUM_DATA[stKey];
    if (!data || !data.units) return;
    data.units.forEach((u, idx) => {
      const canonicalId = sId + 'u' + (idx + 1);
      const wList = (u.vocabulary || []).map((v, vIdx) => [
        v.word,
        emojiPalette[vIdx % emojiPalette.length] || '🌟',
        v.meaning || v.turkish || v.word,
        0
      ]);
      const sList = (u.vocabulary || []).slice(0, 6).map((v, sIdx) => [
        v.exampleSentence || ('Look at the ' + v.word + '.'),
        emojiPalette[sIdx % emojiPalette.length] || '🌟',
        v.meaning ? ('Look: ' + v.meaning + '.') : ('Look at the ' + v.word + '.')
      ]);
      while (sList.length < 5) {
        sList.push(['We love English!', '🌟', 'English is super fun!']);
      }
      list.push({
        id: canonicalId,
        altId: u.id,
        stage: sId,
        no: String(idx + 1),
        title: u.title,
        tr: u.theme || u.title,
        emoji: sId === 's3' ? '🟣' : (sId === 's4' ? '🟠' : '📘'),
        cats: [u.theme || 'Vocabulary', 'Phonics: ' + (u.phonics || ''), 'Grammar: ' + (u.grammar || '')],
        w: wList,
        s: sList,
        lessonPlan: u.lessonPlan,
        vocabulary: u.vocabulary,
        grammar: u.grammar,
        phonics: u.phonics
      });
    });
  });
  _CURRICULUM_SETS_CACHE = list;
  return list;
}

function unitById(id) {
  if (!id) return null;
  let found = ALLSETS.find(u => u.id === id || (u.altId && u.altId === id));
  if (found) return found;
  const norm = id.replace(/^stage(\d)_u(\d+)/, 's$1u$2');
  found = ALLSETS.find(u => u.id === norm || (u.altId && u.altId === norm));
  if (found) return found;
  
  const vSets = getCurriculumVirtualSets();
  found = vSets.find(u => u.id === id || u.altId === id || u.id === norm || u.altId === norm);
  return found || null;
}

function unitsOfStage(stageId) {
  const fromAll = ALLSETS.filter(u => u.stage === stageId);
  if (fromAll.length > 0) return fromAll;
  const vSets = getCurriculumVirtualSets();
  return vSets.filter(u => u.stage === stageId);
}

/* Kalıcı Hafıza & Durum Geçmişi (P0 Dayanıklılık / Anti-Crash Kalkanı) */
const store = {
  _mem: {},
  ok: (() => {
    try {
      if (typeof window === 'undefined') return false;
      const ls = window.localStorage;
      if (!ls) return false;
      ls.setItem('__t', '1');
      ls.removeItem('__t');
      return true;
    } catch (e) {
      return false;
    }
  })(),
  get(key) {
    try {
      if (this.ok) {
        const val = localStorage.getItem('polly_' + key);
        return val ? JSON.parse(val) : (this._mem[key] || null);
      }
      return this._mem[key] || null;
    } catch (err) {
      return this._mem[key] || null;
    }
  },
  set(key, val) {
    this._mem[key] = val;
    try {
      if (this.ok) {
        localStorage.setItem('polly_' + key, JSON.stringify(val));
      }
    } catch (err) {
      // // SAFETY: Quota exceeded or private browsing safeguard
    }
  },
  remove(key) {
    delete this._mem[key];
    try {
      if (this.ok) {
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
