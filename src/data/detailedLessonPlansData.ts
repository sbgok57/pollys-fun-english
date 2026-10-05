import { LessonPlanDetailed } from '../types/lessonPlanner';

export const DETAILED_GLOBAL_ENGLISH_CURRICULUM: LessonPlanDetailed[] = [
  // ─── STAGE 1 (GLOBAL ENGLISH 1) ───
  {
    id: 'ge1-u1-d1',
    orderIndex: 1,
    grade: 'Global English 1',
    unit: 1,
    topic: {
      en: 'Welcome to School & Greetings',
      tr: 'Okula Hoş Geldiniz & Selamlaşma'
    },
    outcomes: [
      {
        en: 'Students can greet teacher and peers using "Hello", "Goodbye", and "My name is..."',
        tr: 'Öğrenciler "Hello", "Goodbye" ve "My name is..." yapılarıyla selamlaşabilir.'
      },
      {
        en: 'Identify classroom objects: book, pencil, chair, desk.',
        tr: 'Sınıf eşyalarını tanır: kitap, kurşun kalem, sandalye, sıra.'
      }
    ],
    references: {
      learnersBook: '6-7',
      workbook: '4-5',
      teachersResource: '18-20'
    },
    tpr: {
      action: {
        en: 'Magic Classroom Touch: Students run/point to touch classroom objects called out by teacher.',
        tr: 'Sihirli Sınıf Dokunuşu: Öğretmenin söylediği sınıf eşyalarına öğrenciler koşarak dokunur veya işaret eder.'
      },
      teacherRole: {
        en: 'Hold up real objects, chant "Touch a pencil! Touch a desk!" and demonstrate with exaggerated physical gestures.',
        tr: 'Gerçek eşyaları havaya kaldırır, ritmik komut verir ve abartılı beden diliyle gösterir.'
      },
      studentRole: {
        en: 'Repeat the word in unison, stand up quickly, and touch or point to the object without speaking Turkish.',
        tr: 'Kelimeyi koro halinde tekrar eder, hızla ayağa kalkıp eşyaya dokunur veya işaret eder.'
      },
      targetVocabulary: ['Hello', 'Teacher', 'Book', 'Pencil', 'Desk', 'Chair']
    },
    materials: [
      {
        name: 'Baamboozle School Starter Quiz',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Twinkl Classroom Flashcards Pack',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      },
      {
        name: 'Super Simple Songs - Hello Song',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      },
      {
        name: 'SmartBoard Realia Tap Board',
        url: '#',
        type: 'SmartBoard',
        isInteractive: true
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-14',
    completedDate: null
  },
  {
    id: 'ge1-u1-d2',
    orderIndex: 2,
    grade: 'Global English 1',
    unit: 1,
    topic: {
      en: 'Classroom Colors & Action Verbs',
      tr: 'Sınıf Renkleri ve Hareket Fiilleri'
    },
    outcomes: [
      {
        en: 'Name colors: red, blue, yellow, green.',
        tr: 'Renkleri söyler: kırmızı, mavi, sarı, yeşil.'
      },
      {
        en: 'Follow TPR commands: Stand up, Sit down, Jump, Freeze.',
        tr: 'TPR komutlarını yerine getirir: Ayağa kalk, Otur, Zıpla, Don.'
      }
    ],
    references: {
      learnersBook: '8-9',
      workbook: '6-7',
      teachersResource: '21-23'
    },
    tpr: {
      action: {
        en: 'Color Slap & Freeze: Simon says jump three times and touch something RED!',
        tr: 'Renk Avı & Donma: Simon der ki 3 kez zıpla ve kırmızı bir şeye dokun!'
      },
      teacherRole: {
        en: 'Call commands at variable tempos, play musical freeze whistle, and praise fast movers.',
        tr: 'Değişken tempoda komutlar verir, müzikli düdük çalar ve hızlı hareket edenleri alkışlar.'
      },
      studentRole: {
        en: 'Perform actions immediately; freeze like statues upon the whistle.',
        tr: 'Hareketleri anında uygular; düdük sesinde heykel gibi donar.'
      },
      targetVocabulary: ['Red', 'Blue', 'Yellow', 'Green', 'Stand up', 'Sit down']
    },
    materials: [
      {
        name: 'Baamboozle Color Blast Arena',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Canva Color Matching Drag & Drop',
        url: 'https://www.canva.com',
        type: 'Canva',
        isInteractive: true
      },
      {
        name: 'Color Freeze Dance Song',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-15',
    completedDate: null
  },
  {
    id: 'ge1-u1-d3',
    orderIndex: 3,
    grade: 'Global English 1',
    unit: 1,
    topic: {
      en: 'Numbers 1 to 10 & Counting Realia',
      tr: '1-10 Arası Sayılar ve Nesne Sayma'
    },
    outcomes: [
      {
        en: 'Count objects from 1 to 10 accurately in English.',
        tr: '1-10 arası nesneleri doğru şekilde İngilizce sayar.'
      },
      {
        en: 'Answer "How many?" with number + noun phrase.',
        tr: '"How many?" sorusunu sayı ve nesneyle yanıtlar.'
      }
    ],
    references: {
      learnersBook: '10-11',
      workbook: '8-9',
      teachersResource: '24-26'
    },
    tpr: {
      action: {
        en: 'Floor Clap & Step: Clap hands and take matching steps while counting aloud.',
        tr: 'Zemin Adım & Alkış: Yüksek sesle sayarken sayı kadar alkış çalıp adım atar.'
      },
      teacherRole: {
        en: 'Flash finger counts and beat rhythm on classroom drum or tambourine.',
        tr: 'Parmaklarıyla sayı gösterir, ritim çalar ve koro sayımını yönetir.'
      },
      studentRole: {
        en: 'Count in sync while clapping, stamping feet, or holding up pencils.',
        tr: 'Alkışlayarak, ayak vurarak veya kalem kaldırarak ritimle sayar.'
      },
      targetVocabulary: ['One', 'Two', 'Three', 'Four', 'Five', 'Ten']
    },
    materials: [
      {
        name: 'Twinkl 1-10 Counting Cut & Paste',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      },
      {
        name: 'Baamboozle Number Sprint Challenge',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Counting 1 to 10 Song',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-16',
    completedDate: null
  },
  {
    id: 'ge1-u2-d1',
    orderIndex: 4,
    grade: 'Global English 1',
    unit: 2,
    topic: {
      en: 'Family Members & Finger Puppets',
      tr: 'Aile Bireyleri & Parmak Kuklaları'
    },
    outcomes: [
      {
        en: 'Identify family members: mother, father, brother, sister, baby.',
        tr: 'Aile üyelerini tanır: anne, baba, erkek kardeş, kız kardeş, bebek.'
      },
      {
        en: 'Use "This is my..." with family photo or puppet.',
        tr: '"This is my..." kalıbını aile fotoğrafı veya kuklasıyla kullanır.'
      }
    ],
    references: {
      learnersBook: '18-19',
      workbook: '14-15',
      teachersResource: '32-34'
    },
    tpr: {
      action: {
        en: 'Finger Family Chorus: Wiggle each finger corresponding to the family member.',
        tr: 'Parmak Ailesi Korosu: Şarkıdaki aile üyesine göre ilgili parmağı sallar.'
      },
      teacherRole: {
        en: 'Wear finger puppets, model "Daddy finger, where are you?", encourage singing.',
        tr: 'Parmak kuklaları takar, şarkı modellemesi yapar ve eşliği yönetir.'
      },
      studentRole: {
        en: 'Wiggle fingers, raise hands when their chosen family role is called.',
        tr: 'Parmaklarını oynatır ve rolü çağrıldığında elini kaldırır.'
      },
      targetVocabulary: ['Mother', 'Father', 'Brother', 'Sister', 'Baby', 'Family']
    },
    materials: [
      {
        name: 'Finger Family Song & Animation',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      },
      {
        name: 'Baamboozle Family Tree Trivia',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Twinkl Family Member Puppets Template',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-17',
    completedDate: null
  },
  {
    id: 'ge1-u2-d2',
    orderIndex: 5,
    grade: 'Global English 1',
    unit: 2,
    topic: {
      en: 'Feelings & Emotions (Happy, Sad, Tired)',
      tr: 'Duygular ve İfadeler (Mutlu, Üzgün, Yorgun)'
    },
    outcomes: [
      {
        en: 'Express feelings: "I am happy", "I am sad", "I am excited".',
        tr: 'Duyguları ifade eder: "I am happy", "I am sad", "I am excited".'
      },
      {
        en: 'Match facial expressions with adjectives.',
        tr: 'Yüz ifadelerini sıfatlarla eşleştirir.'
      }
    ],
    references: {
      learnersBook: '20-21',
      workbook: '16-17',
      teachersResource: '35-37'
    },
    tpr: {
      action: {
        en: 'Mirror Emotion Walk: Walk around like a robot, freeze, and enact called emotion.',
        tr: 'Duygu Aynası: Robot gibi yürür, komutla donar ve söylenen duyguyu canlandırır.'
      },
      teacherRole: {
        en: 'Display emotion flashcards, exaggerate facial expressions and posture.',
        tr: 'Duygu kartlarını gösterir, mimik ve duruşu abartarak model olur.'
      },
      studentRole: {
        en: 'Imitate the face and say "I am happy!" with big arm gestures.',
        tr: 'Yüz ifadesini taklit eder ve kollarıyla "I am happy!" der.'
      },
      targetVocabulary: ['Happy', 'Sad', 'Angry', 'Tired', 'Scared', 'Excited']
    },
    materials: [
      {
        name: 'If You\'re Happy and You Know It',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      },
      {
        name: 'Baamboozle Emotion Express Game',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Canva Mood Wheel Printable',
        url: 'https://www.canva.com',
        type: 'Canva',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-18',
    completedDate: null
  },

  // ─── STAGE 2 (GLOBAL ENGLISH 2) ───
  {
    id: 'ge2-u1-d1',
    orderIndex: 6,
    grade: 'Global English 2',
    unit: 1,
    topic: {
      en: 'Look What I Can Do! (Action Abilities)',
      tr: 'Bak Neler Yapabiliyorum! (Yetenek ve Eylemler)'
    },
    outcomes: [
      {
        en: 'Use "I can..." and "I can\'t..." to talk about physical abilities.',
        tr: '"I can..." ve "I can\'t..." kullanarak bedensel yeteneklerini anlatır.'
      },
      {
        en: 'Ask and answer: "Can you swim? Yes, I can / No, I can\'t".',
        tr: '"Can you swim?" sorusunu sorar ve kısa cevapla yanıtlar.'
      }
    ],
    references: {
      learnersBook: '6-7',
      workbook: '4-5',
      teachersResource: '16-18'
    },
    tpr: {
      action: {
        en: 'Pantomime Talent Show: Act out swimming, climbing, dancing without speaking.',
        tr: 'Pandomim Yetenek Gösterisi: Konuşmadan yüzme, tırmanma, dans etme eylemini yapar.'
      },
      teacherRole: {
        en: 'Ask "Can you hop on one leg?", show talent card, evaluate student response.',
        tr: '"Can you hop on one leg?" diye sorar, kart gösterir ve öğrenciyi değerlendirir.'
      },
      studentRole: {
        en: 'Act out the movement and answer aloud: "Yes, I can!" or shake head "No, I can\'t".',
        tr: 'Hareketi canlandırır ve sesli olarak "Yes, I can!" veya baş sallayarak yanıtlar.'
      },
      targetVocabulary: ['Jump', 'Hop', 'Swim', 'Climb', 'Dance', 'Run', 'Sing']
    },
    materials: [
      {
        name: 'Baamboozle "Can You Do It?" Battle',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Twinkl Action Verbs Word Wall',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      },
      {
        name: 'I Can Run / Action Song',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      },
      {
        name: 'SmartBoard Interactive Ability Matrix',
        url: '#',
        type: 'SmartBoard',
        isInteractive: true
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-21',
    completedDate: null
  },
  {
    id: 'ge2-u1-d2',
    orderIndex: 7,
    grade: 'Global English 2',
    unit: 1,
    topic: {
      en: 'Ordinal Numbers (1st, 2nd, 3rd) & Sports Race',
      tr: 'Sıra Sayıları (1., 2., 3.) & Spor Yarışı'
    },
    outcomes: [
      {
        en: 'Understand and use ordinal numbers: first, second, third, fourth, fifth.',
        tr: 'Sıra sayılarını anlar ve kullanır: birinci, ikinci, üçüncü, dördüncü, beşinci.'
      },
      {
        en: 'Describe positions in a sports race or line.',
        tr: 'Yarıştaki veya sıradaki konumları tarif eder.'
      }
    ],
    references: {
      learnersBook: '8-9',
      workbook: '6-7',
      teachersResource: '19-21'
    },
    tpr: {
      action: {
        en: 'Classroom Mini Olympic Line-Up: 5 students line up; class chants position titles.',
        tr: 'Sınıf Mini Olimpiyat Sıralaması: 5 öğrenci sıraya girer; sınıf sıra sayılarını koro halinde söyler.'
      },
      teacherRole: {
        en: 'Direct race positions with podium cards: "Who is first? Ali is first!"',
        tr: 'Kürsü kartlarıyla yönlendirir: "Who is first? Ali is first!"'
      },
      studentRole: {
        en: 'Hold up ordinal banners (1st, 2nd, 3rd) and step forward when their place is announced.',
        tr: 'Sıra pankartlarını tutar ve sırası söylendiğinde bir adım öne çıkar.'
      },
      targetVocabulary: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Winner']
    },
    materials: [
      {
        name: 'Baamboozle Ordinal Numbers Showdown',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Canva Race Track Diagram & Cards',
        url: 'https://www.canva.com',
        type: 'Canva',
        isInteractive: true
      },
      {
        name: 'Ordinal Numbers Song for Kids',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-22',
    completedDate: null
  },
  {
    id: 'ge2-u2-d1',
    orderIndex: 8,
    grade: 'Global English 2',
    unit: 2,
    topic: {
      en: 'Look Closer! Natural Habitats & Magnifiers',
      tr: 'Yakından Bak! Doğal Yaşam Alanları & Büyüteçler'
    },
    outcomes: [
      {
        en: 'Describe mini-beasts and habitat features: wings, legs, antennae, shell.',
        tr: 'Böcek ve yaşam alanı özelliklerini tarif eder: kanatlar, bacaklar, anten, kabuk.'
      },
      {
        en: 'Use demonstratives "These are..." and "Those are...".',
        tr: '"These are..." ve "Those are..." işaret sıfatlarını kullanır.'
      }
    ],
    references: {
      learnersBook: '18-19',
      workbook: '14-15',
      teachersResource: '30-32'
    },
    tpr: {
      action: {
        en: 'Microscope Explorer Crawl: Flutter like butterflies, scuttle like spiders, freeze as caterpillars.',
        tr: 'Mikroskop Kaşif Emeklemesi: Kelebek gibi kanat çırpar, örümcek gibi koşar, tırtıl gibi donar.'
      },
      teacherRole: {
        en: 'Hold up magnifying glass realia, call creature names, imitate nature sounds.',
        tr: 'Büyüteç nesnesini tutar, canlı adlarını seslendirir ve doğa sesleri çıkarır.'
      },
      studentRole: {
        en: 'Crawl or flutter on cue, flapping arms or wiggling antennae with fingers.',
        tr: 'Komutla uçar veya emekler; parmaklarıyla anten taklidi yapar.'
      },
      targetVocabulary: ['Butterfly', 'Spider', 'Caterpillar', 'Wings', 'Antennae', 'Magnifier']
    },
    materials: [
      {
        name: 'Twinkl Mini-Beast Scavenger Hunt',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      },
      {
        name: 'Baamboozle Mini-Beast Nature Quest',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'National Geographic Kids Insect Clips',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-23',
    completedDate: null
  },
  {
    id: 'ge2-u2-d2',
    orderIndex: 9,
    grade: 'Global English 2',
    unit: 2,
    topic: {
      en: 'What Are They Made Of? (Materials Science)',
      tr: 'Neden Yapılmışlar? (Madde ve Malzemeler)'
    },
    outcomes: [
      {
        en: 'Identify materials: wood, plastic, metal, glass, fabric.',
        tr: 'Malzemeleri tanır: ahşap, plastik, metal, cam, kumaş.'
      },
      {
        en: 'Ask and answer: "What is it made of? It is made of wood."',
        tr: '"What is it made of?" sorusunu yöneltir ve yanıtlar.'
      }
    ],
    references: {
      learnersBook: '20-21',
      workbook: '16-17',
      teachersResource: '33-35'
    },
    tpr: {
      action: {
        en: 'Material Mystery Bag: Reach into bag, feel texture, guess without looking.',
        tr: 'Gizemli Malzeme Torbası: Torbaya elini sokar, dokuyu hisseder, bakmadan tahmin eder.'
      },
      teacherRole: {
        en: 'Circulate touch-bag with wooden block, plastic ruler, metal spoon, glass marble.',
        tr: 'Ahşap blok, plastik cetvel, metal kaşık ve misket olan torbayı dolaştırır.'
      },
      studentRole: {
        en: 'Close eyes, feel the object, announce material loudly with confidence.',
        tr: 'Gözlerini kapatır, dokuyu hisseder ve yüksek sesle malzemeyi söyler.'
      },
      targetVocabulary: ['Wood', 'Plastic', 'Metal', 'Glass', 'Hard', 'Soft']
    },
    materials: [
      {
        name: 'Baamboozle Materials Sorting Game',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Twinkl Everyday Materials Worksheet',
        url: 'https://www.twinkl.com',
        type: 'Twinkl',
        isInteractive: false
      },
      {
        name: 'Materials Science Video Lesson',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-24',
    completedDate: null
  },
  {
    id: 'ge2-u3-d1',
    orderIndex: 10,
    grade: 'Global English 2',
    unit: 3,
    topic: {
      en: 'City Life & Places in Town',
      tr: 'Şehir Yaşamı & Kasabadaki Mekanlar'
    },
    outcomes: [
      {
        en: 'Name town locations: park, school, hospital, shop, zoo.',
        tr: 'Şehir mekanlarını söyler: park, okul, hastane, dükkan, hayvanat bahçesi.'
      },
      {
        en: 'Give directions using "Go straight", "Turn left", "Turn right".',
        tr: '"Go straight", "Turn left", "Turn right" komutlarıyla yön tarif eder.'
      }
    ],
    references: {
      learnersBook: '30-31',
      workbook: '24-25',
      teachersResource: '44-46'
    },
    tpr: {
      action: {
        en: 'Human City Map: Turn whole classroom floor into a road system with tape; drive imaginary buses.',
        tr: 'İnsan Şehir Haritası: Sınıf zeminini bantla yola dönüştürür; hayali otobüs sürer.'
      },
      teacherRole: {
        en: 'Act as city traffic officer, hold up Green/Red signals, command "Turn left to the Zoo!".',
        tr: 'Trafik polisi olur, Yeşil/Kırmızı işaret gösterir ve "Turn left to the Zoo!" der.'
      },
      studentRole: {
        en: 'Steer imaginary steering wheel, obey traffic signals, navigate to target buildings.',
        tr: 'Hayali direksiyonu çevirir, trafik kurallarına uyar ve hedefe yönelir.'
      },
      targetVocabulary: ['Park', 'Hospital', 'School', 'Shop', 'Turn left', 'Turn right', 'Straight']
    },
    materials: [
      {
        name: 'Baamboozle City Navigator Game',
        url: 'https://www.baamboozle.com',
        type: 'Baamboozle',
        isInteractive: true
      },
      {
        name: 'Canva Town Map Printables',
        url: 'https://www.canva.com',
        type: 'Canva',
        isInteractive: true
      },
      {
        name: 'Places in Town Song & Dance',
        url: 'https://www.youtube.com',
        type: 'YouTube',
        isInteractive: false
      }
    ],
    status: 'pending',
    scheduledDate: '2026-09-25',
    completedDate: null
  }
];
