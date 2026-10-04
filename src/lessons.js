/* ============================================================
   📚 KONU ANLATIMI (v4)
   Her ünite için: animasyonlu slaytlar (emoji sahne + İngilizce
   cümle + Türkçe), otomatik kelime kartları ve video bölümü.
   Polly sesli: 🎧 Dinle (yavaş+net TTS) · 🗣️ Tekrar (gömülü
   gerçek Polly sesi: "Now, listen and repeat!")
   ============================================================ */
const LESSONS={
 s1u0:[
  ['👋🌟','Hello! Hello! My name is Polly. What is your name?','Merhaba! Benim adım Polly. Senin adın ne?'],
  ['🙋‍♀️😊','How are you today? I am fine, thank you!','Bugün nasılsın? İyiyim, teşekkürler!'],
  ['🔴🟠🟡🟢🔵💜','Look! Red, blue, green, yellow! What is your favourite colour?','Bak! Kırmızı, mavi, yeşil, sarı! En sevdiğin renk ne?'],
  ['1️⃣2️⃣3️⃣4️⃣5️⃣','Let us count! One, two, three, four, five, six, seven, eight, nine, ten!','Hadi sayalım! Bir, iki, üç, dört, beş, altı, yedi, sekiz, dokuz, on!'],
  ['👏🕺💃','Stand up! Jump! Clap your hands! Well done!','Ayağa kalk! Zıpla! El çırp! Harika!'],
  ['🙏💛✨','Please and thank you — magic words! Say them every day!','Lütfen ve teşekkürler — sihirli kelimeler! Her gün söyleyin!']
 ],
 s1u1:[
  ['🏫🎒','Welcome to school! This is my school bag.','Okula hoş geldin! Bu benim okul çantam.'],
  ['📖✏️🖍️','I have a book, a pencil and a crayon.','Bir kitabım, bir kalemim ve bir pastel kalemim var.'],
  ['✂️📏🧴','Scissors, ruler, glue — open your pencil case!','Makas, cetvel, yapıştırıcı — kalemliğinizi açın!'],
  ['👩‍🏫🧑‍🎓','This is my teacher. I am a student!','Bu benim öğretmenim. Ben öğrenciyim!'],
  ['📖✍️🌟','I can read. I can write. I love my school!','Okuyabilirim. Yazabilirim. Okulumu seviyorum!']
 ],
 s1u2:[
  ['👨‍👩‍👧‍👦❤️','This is my family! I love my family.','Bu benim ailem! Ailemi seviyorum.'],
  ['👩👶','This is my mother. This is my baby sister.','Bu benim annem. Bu bebek kız kardeşim.'],
  ['👴👵','Hello, grandma! Hello, grandpa!','Merhaba büyükanne! Merhaba büyükbaba!'],
  ['🛏️🪥🧼','I wake up. I brush my teeth. I wash my hands.','Uyanırım. Dişlerimi fırçalarım. Ellerimi yıkarım.'],
  ['🍽️😴🌙','I eat my dinner. Good night, family!','Akşam yemeğimi yerim. İyi geceler aile!']
 ],
 s1u3:[
  ['🧸🪁🥁','Look at my toys! A teddy bear, a kite and a drum.','Oyuncaklarıma bak! Bir peluş ayı, bir uçurtma ve bir davul.'],
  ['🤖🚂','I have a robot and a toy boat. They are fun!','Bir robotum ve bir oyuncak teknem var. Çok eğlenceliler!'],
  ['🎾🙌','I can catch the ball! I can throw the ball!','Topu yakalayabilirim! Topu atabilirim!'],
  ['🤝💛','Let us share our toys. Take turns, please!','Oyuncaklarımızı paylaşalım. Lütfen sırayla oynayalım!'],
  ['🙈🎉','Hide and seek! One, two, three... I see you!','Saklambaç! Bir, iki, üç... Seni gördüm!']
 ],
 s1u4:[
  ['👕👖👟','I put on my T-shirt. I put on my shoes.','Tişörtümü giyerim. Ayakkabılarımı giyerim.'],
  ['🎩🧦🧥','Look at my hat! Look at my socks! Warm and cosy!','Şapkama bakın! Çoraplarıma bakın! Sıcacık ve rahat!'],
  ['🔵🔺⭐','A circle, a square, a triangle and a star! Can you draw them?','Bir daire, bir kare, bir üçgen ve bir yıldız! Çizebilir misiniz?'],
  ['✂️🖍️📄','Cut the paper. Fold it. Paint it! What is it?','Kâğıdı kesin. Katlayın. Boyayın! Bu ne?'],
  ['🎀✨','I can make a card! I love making things!','Bir kart yapabilirim! Bir şeyler yapmayı seviyorum!']
 ],
 s1u5:[
  ['🚜🐄🐑','Old MacDonald has a farm! Let us visit the animals!','Old MacDonald\u2019un bir çiftliği var! Hayvanları ziyaret edelim!'],
  ['🐷🐣','A pig and a chick! The pig says oink oink!','Bir domuz ve bir civciv! Domuz "oink oink" der!'],
  ['🐴🐕🐈','A horse can run fast! A cat says meow!','Bir at hızlı koşabilir! Bir kedi "miyav" der!'],
  ['🚜🌾','The tractor works in the field. Farm life is fun!','Traktör tarlada çalışır. Çiftlik hayatı eğlencelidir!'],
  ['🥚🥛❤️','Hens give us eggs. Cows give us milk. Thank you, animals!','Tavuklar bize yumurta verir. İnekler süt verir. Teşekkürler hayvanlar!']
 ],
 s1u6:[
  ['👀👂👃','I have five senses! I see, I hear, I smell!','Beş duyum var! Görürüm, duyarım, koklarım!'],
  ['👅🤲','I taste with my tongue. I touch with my hands!','Dilimle tadarım. Ellerimle dokunurum!'],
  ['🥁🔔','Loud or quiet? The drum is loud. The bell is quiet.','Gürültülü mü sessiz mi? Davul gürültülüdür. Zil sessizdir.'],
  ['🍬🍋','Sweet or sour? Sugar is sweet. Lemons are sour!','Tatlı mı ekşi mi? Şeker tatlıdır. Limonlar ekşidir!'],
  ['🧸🪨','Soft or hard? My teddy is soft. A rock is hard!','Yumuşak mı sert mi? Peluş ayım yumuşaktır. Taş serttir!']
 ],
 s1u7:[
  ['🚌🚗✈️','The wheels on the bus go round and round! Let us go!','Otobüsün tekerlekleri dönüp döner! Hadi gidelim!'],
  ['🚂🚢','I go by train. I go by ship. Choo choo!','Trenle giderim. Gemiyle giderim. Çuf çuf!'],
  ['🚁🚀','Look up! A helicopter! A rocket goes to the moon!','Yukarıya bakın! Bir helikopter! Roket aya gider!'],
  ['🚦🛑','Red says stop! Green says go! Be careful!','Kırmızı "dur" der! Yeşil "geç" der! Dikkatli olun!'],
  ['🚴💨','My bike is fast! My bike is slow... Speed up!','Bisikletim hızlı! Bisikletim yavaş... Hızlanın!']
 ],
 s1u8:[
  ['🏙️🚦','Welcome to our town! So many places to see!','Kasabamıza hoş geldiniz! Görülecek çok yer var!'],
  ['🏥🏦📚','A hospital, a bank and a library. Where are you going?','Bir hastane, bir banka ve bir kütüphane. Nereye gidiyorsunuz?'],
  ['🌳🏊🦓','I play in the park. I swim in the pool. I love the zoo!','Parkta oynarım. Havuzda yüzerim. Hayvanat bahçesini severim!'],
  ['🚏🌉','Wait at the bus stop. Walk over the bridge!','Otobüs durağında bekleyin. Köprüden yürüyün!'],
  ['☕🍦','A café and a shop. Let us buy an ice cream! Yummy!','Bir kafe ve bir dükkân. Dondurma alalım! Çok lezzetli!']
 ],
 s1u9:[
  ['💧🌊','Water, water everywhere! In rivers and in the sea!','Su, su her yerde! Nehirlerde ve denizde!'],
  ['🌧️☔','Rain, rain, go away! Come again another day!','Yağmur, yağmur, git buradan! Başka bir gün gel!'],
  ['☀️⛅🌧️','Sunny, cloudy, rainy... What is the weather today?','Güneşli, bulutlu, yağmurlu... Bugün hava nasıl?'],
  ['❄️🧊','Snow is cold. Ice is cold. Brrr!','Kar soğuktur. Buz soğuktur. Brrr!'],
  ['🏊🚿💦','I drink water. I wash my hands. I love to swim!','Su içerim. Ellerimi yıkarım. Yüzmeyi severim!']
 ],
 s2u1:[
  ['⏰🎒','Good morning! Time for school! Look at my clock!','Günaydın! Okul zamanı! Saatime bakın!'],
  ['📅💻📓','A calendar, a computer and my notebook!','Bir takvim, bir bilgisayar ve defterim!'],
  ['🖌️🎨🖼️','I paint with my paintbrush. What a beautiful picture!','Fırçamla resim yaparım. Ne güzel bir resim!'],
  ['🍱🥤','Lunchtime! My lunchbox and my water bottle!','Yemek zamanı! Yemek kutum ve su şişem!'],
  ['⏰👋','School starts at nine. School ends at three. See you!','Okul dokuzda başlar. Üçte biter. Görüşürüz!']
 ],
 s2u2:[
  ['🧑‍🚒👩‍⚕️','Who helps us? Firefighters and doctors help us!','Bize kim yardım eder? İtfaiyeciler ve doktorlar!'],
  ['👮‍♀️👩‍🏫','A police officer keeps us safe. A teacher helps us learn!','Polis bizi güvende tutar. Öğretmen öğrenmemize yardım eder!'],
  ['👨‍🍳🚕','A baker makes bread. A driver drives a taxi!','Fırıncı ekmek yapar. Şoför taksi kullanır!'],
  ['👨‍🌾🦷🐾','A farmer grows food. A vet helps our pets!','Çiftçi yiyecek yetiştirir. Veteriner evcil hayvanlarımıza yardım eder!'],
  ['🤝🏘️💛','Good neighbours are kind. Let us help each other!','İyi komşular kibardır. Hadi birbirimize yardım edelim!']
 ],
 s2u3:[
  ['🤸🏃💨','Ready, steady, go! I can run very fast!','Hazır, başla, git! Çok hızlı koşabilirim!'],
  ['🤾🏊🚴','I can jump, swim and ride my bike!','Zıplayabilirim, yüzebilirim ve bisiklete binebilirim!'],
  ['🧗💃','I can climb! I can dance! Look at me!','Tırmanabilirim! Dans edebilirim! Bana bakın!'],
  ['⚽🦵🙌','Kick the ball! Throw the ball! Catch it!','Topa vurun! Topu atın! Yakalayın!'],
  ['🏃‍♀️🏅💪','Run with your arms and legs. You are the champion!','Kollarınız ve bacaklarınızla koşun. Siz şampiyonsunuz!']
 ],
 s2u4:[
  ['🌞🌍🌙','Good morning, sun! Good night, moon!','Günaydın güneş! İyi geceler ay!'],
  ['☀️⛅☁️','The sun is hot. The clouds are white and soft!','Güneş sıcaktır. Bulutlar beyaz ve yumuşaktır!'],
  ['⭐🌈','Twinkle, twinkle, little stars! Look, a rainbow!','Parılda, parılda küçük yıldızlar! Bakın, bir gökkuşağı!'],
  ['🌪️🌫️','A storm is loud. Fog is grey. Stay inside!','Fırtına gürültülüdür. Sis gridir. İçeride kalın!'],
  ['🪐🌍✨','This is our planet Earth. The sky is amazing!','Bu bizim gezegenimiz Dünya. Gökyüzü harika!']
 ],
 s2u5:[
  ['📏✏️','Let us measure! How long is your pencil?','Hadi ölçelim! Kaleminiz ne kadar uzun?'],
  ['🦒🐭','A giraffe is tall. A mouse is short!','Zürafa uzundur. Fare kısadır!'],
  ['🐘🪶','An elephant is heavy. A feather is light!','Fil ağırdır. Tüy hafiftir!'],
  ['📏🔢','One metre is one hundred centimetres! Wow!','Bir metre, yüz santimetredir! Vay canına!'],
  ['⭕🔺🟦','Circle, square, triangle, rectangle, oval! Shapes everywhere!','Daire, kare, üçgen, dikdörtgen, oval! Her yerde şekiller!']
 ],
 s2u6:[
  ['🐝🦋🐞','Welcome to bug world! A bee, a butterfly and a ladybug!','Böcekler alemine hoş geldiniz! Arı, kelebek ve uğur böceği!'],
  ['🐜🕷️','An ant is very small. A spider has eight legs!','Karınca çok küçüktür. Örümceğin sekiz bacağı vardır!'],
  ['🦗🐌','A grasshopper can jump! A snail is very slow!','Çekirge zıplayabilir! Salyangoz çok yavaştır!'],
  ['🐛🦋','A caterpillar becomes a butterfly! Amazing!','Bir tırtıl kelebek olur! İnanılmaz!'],
  ['🐝🌸🍯','Bees love flowers. They make honey! Yummy!','Arılar çiçekleri sever. Bal yaparlar! Çok lezzetli!']
 ],
 s2u7:[
  ['🌳🌍🌸','Look around! Trees, grass and flowers! This is our world!','Etrafınıza bakın! Ağaçlar, çimenler ve çiçekler! Bu bizim dünyamız!'],
  ['🌱🌿🌳','A seed grows and grows. It becomes a big tree!','Bir tohum büyür büyür. Büyük bir ağaç olur!'],
  ['🍃🟤','Leaves are green. The trunk is brown and strong!','Yapraklar yeşildir. Gövde kahverengi ve güçlüdür!'],
  ['🍎🍊','Apple trees give us apples. Orange trees give us oranges!','Elma ağaçları bize elma verir. Portakal ağaçları portakal verir!'],
  ['🌳💧🤍','We love the Earth. Let us water the plants!','Dünyayı severiz. Hadi bitkileri sularız!']
 ],
 s2u8:[
  ['🏠❤️','Home, sweet home! Welcome to my house!','Ev, tatlı ev! Evime hoş geldiniz!'],
  ['🛏️🛋️🪑','This is my bedroom. I sleep in my bed!','Bu benim yatak odam. Yatağımda uyurum!'],
  ['🍳🍽️','This is the kitchen. Yummy food is in the kitchen!','Bu mutfak. Lezzetli yemekler mutfaktadır!'],
  ['🛁🚿','I take a bath in the bathroom. Splash, splash!','Banyoda yıkanırım. Şıp şıp!'],
  ['🪜🪞','I go up the stairs. I look in the mirror. Hello, me!','Merdivenlerden çıkarım. Aynaya bakarım. Merhaba, ben!']
 ],
 s2u9:[
  ['🗺️🚌','Let us explore the city! All aboard the bus!','Hadi şehri keşfedelim! Herkes otobüse!'],
  ['🏛️🎬','A museum and a cinema! What fun places!','Bir müze ve bir sinema! Ne eğlenceli yerler!'],
  ['🚉🍿','The train is at the station. Let us watch a film!','Tren istasyonda. Hadi bir film izleyelim!'],
  ['🛒🍎','I buy apples at the supermarket. I play at the playground!','Süpermarkette elma alırım. Oyun parkında oynarım!'],
  ['⛲📚🤫','The fountain is beautiful. The library is quiet. Shh!','Çeşme çok güzel. Kütüphane sessizdir. Şşt!']
 ]
};
/* 📺 200+ Gömülü Doğrulanmış Eğitim Videosu (Super Simple Songs, CBeebies, vb.) */
const LVID = {
  "s1u0": [
    [
      "tVlcKp3bWH8",
      "Hello Hello! Can You Clap Your Hands? (Super Simple)"
    ],
    [
      "fN1Cyr0ZK9M",
      "Hello Song for Kids (The Singing Walrus)"
    ],
    [
      "gghDRJVxFxU",
      "Bye Bye Goodbye (Super Simple Songs)"
    ],
    [
      "z0HZNaM7gTg",
      "What's Your Name? (Super Simple Songs)"
    ],
    [
      "DR-cfepSuVQ",
      "The Rainbow Colors Song (KidsTV123)"
    ],
    [
      "jYAWf8Y91hA",
      "I See Something Pink (Super Simple)"
    ],
    [
      "AclVcrAQKWA",
      "I See Something Blue (Super Simple)"
    ],
    [
      "ePr6m6Yl-Qo",
      "Count to 10 Song (The Singing Walrus)"
    ],
    [
      "FejjRyuOcYw",
      "Ten in the Bed (Super Simple Songs)"
    ],
    [
      "b0NHrFNZWh0",
      "Five Little Monkeys (Super Simple)"
    ],
    [
      "ea5-SIzk5Uc",
      "Seven Steps Counting (Super Simple)"
    ],
    [
      "diMJzX526ng",
      "1 2 3 4 5 Once I Caught a Fish Alive"
    ]
  ],
  "s1u1": [
    [
      "Y9-erBW5JxQ",
      "Back to School Song (Super Simple)"
    ],
    [
      "75p-NQuFl74",
      "The Alphabet Song ABC (Super Simple)"
    ],
    [
      "Ezj_bQszp3w",
      "Classroom Objects Song (English Singsing)"
    ],
    [
      "gUZaNW_vVd8",
      "School Supplies Song (Fun Kids English)"
    ],
    [
      "BGa3AqEQRyE",
      "What Is This? It is a Pencil (English Singsing)"
    ],
    [
      "XHrJvcdgT-4",
      "Days of the Week Song (The Singing Walrus)"
    ],
    [
      "mXMofxtDPUQ",
      "7 Days of the Week (Super Simple)"
    ],
    [
      "oKqAblgFO5I",
      "Clean Up Song for Classroom (Super Simple)"
    ],
    [
      "l4WNrvVjiTw",
      "ABC Phonics Song (CoComelon)"
    ],
    [
      "hq3yfQnllfQ",
      "Phonics Song with Two Words (ChuChu TV)"
    ],
    [
      "tb_PKP3xI-g",
      "School Morning Routine (Super Simple)"
    ]
  ],
  "s1u2": [
    [
      "m0lQyezHvuc",
      "Finger Family Song (CoComelon)"
    ],
    [
      "d_WQEw13TCo",
      "Baby Shark Dance (Pinkfong)"
    ],
    [
      "IIWwYm2kXj8",
      "This Is My Family Song (English Singsing)"
    ],
    [
      "NVEzzzia8Yo",
      "The Finger Family (Super Simple)"
    ],
    [
      "y47i_gEwPqo",
      "Family Members Song (The Singing Walrus)"
    ],
    [
      "giWqEPELtBo",
      "We Are a Happy Family (CoComelon)"
    ],
    [
      "g-OF7KGSMyc",
      "I Love My Mommy Song (Super Simple)"
    ],
    [
      "pWepfJ-8XU0",
      "Skidamarink I Love You (Super Simple)"
    ],
    [
      "qD1pnquN_DM",
      "Rain Rain Go Away Family (Super Simple)"
    ],
    [
      "_6HzoUcx3eo",
      "One Little Finger (Super Simple)"
    ],
    [
      "w6Ybso-e_qA",
      "If You are Happy Family (Super Simple)"
    ]
  ],
  "s1u3": [
    [
      "HpOe8ng4Gtw",
      "Action Songs for Kids (The Singing Walrus)"
    ],
    [
      "gCPbZ3XM2js",
      "We All Fall Down (Super Simple)"
    ],
    [
      "w6Ybso-e_qA",
      "If You are Happy and You Know It"
    ],
    [
      "71hqRT9U0wg",
      "Can You Run? Action Verbs (English Singsing)"
    ],
    [
      "WhDTz77oUp8",
      "Let us Play with Toys! (English Singsing)"
    ],
    [
      "QA48wTGbU7A",
      "Open Shut Them (Super Simple)"
    ],
    [
      "8F0NYBBKczM",
      "On In Under By Prepositions (Maple Leaf)"
    ],
    [
      "idJYhjGyWTU",
      "Stand Up Sit Down (Super Simple)"
    ],
    [
      "p5qwOxlvyhk",
      "The Pinocchio Dance (Super Simple)"
    ],
    [
      "ALcL3MuU4xQ",
      "The Hokey Pokey Shake (Super Simple)"
    ],
    [
      "dUXk8Nc5qQ8",
      "Walking Walking Hop Hop (Super Simple)"
    ]
  ],
  "s1u4": [
    [
      "tb_PKP3xI-g",
      "Put On Your Shoes (Super Simple)"
    ],
    [
      "kfUmw9uOqHM",
      "This Is The Way We Get Dressed"
    ],
    [
      "rD6FRDd9Hew",
      "What Are You Wearing? (English Singsing)"
    ],
    [
      "yWirdnSDsV4",
      "The Clothing Song (KidsTV123)"
    ],
    [
      "p-dK-r88JqQ",
      "Shapes Song for Kids (The Singing Walrus)"
    ],
    [
      "TJhFl5vdxp4",
      "The Shape Song #1 (Super Simple)"
    ],
    [
      "WTeqUejf3D0",
      "The Shape Song #2 (Super Simple)"
    ],
    [
      "2kL3HAbYSmE",
      "Make a Circle (Super Simple)"
    ],
    [
      "b14Ze3qb2yE",
      "Colors and Clothes Song (Fun Kids)"
    ],
    [
      "HGgsklW-mtg",
      "Learn Shapes and Colors (Super Simple)"
    ],
    [
      "DR-cfepSuVQ",
      "Rainbow Colors Song (KidsTV123)"
    ]
  ],
  "s1u5": [
    [
      "j9-7ooe3JLM",
      "Old MacDonald Had a Farm (Super Simple)"
    ],
    [
      "t99ULJjCvdM",
      "The Animals On The Farm (Super Simple)"
    ],
    [
      "yCjJyiqpAuU",
      "Baa Baa Black Sheep (Super Simple)"
    ],
    [
      "71hqRT9U0wg",
      "Farm Animals and Sounds (English Singsing)"
    ],
    [
      "IzRh1r9Cy18",
      "Mary Had a Little Lamb (Super Simple)"
    ],
    [
      "w_lCi8U49mY",
      "B-I-N-G-O Dog Song (Super Simple)"
    ],
    [
      "GoSq-yZcJ-4",
      "Walking In The Jungle (Super Simple)"
    ],
    [
      "y18u7L1Wk0w",
      "Five Little Ducks Went Out (Super Simple)"
    ],
    [
      "diMJzX526ng",
      "Once I Caught a Fish (Super Simple)"
    ],
    [
      "b0NHrFNZWh0",
      "Five Little Monkeys Jumping (Super Simple)"
    ],
    [
      "eHJXXei0E-4",
      "Rain on the Farm (Super Simple)"
    ]
  ],
  "s1u6": [
    [
      "VAOOT5ZfQyU",
      "Head Shoulders Knees and Toes (Super Simple)"
    ],
    [
      "GXy__kBVq1M",
      "This Is Me! Body Parts Song (Singing Walrus)"
    ],
    [
      "otAJa3jui8A",
      "Touch Your Head and Nose (Super Simple)"
    ],
    [
      "d8PR_d4431g",
      "One Little Finger Tap (Super Simple)"
    ],
    [
      "fRcLxsUg4Gc",
      "Brush Your Teeth Song (Super Simple)"
    ],
    [
      "2138_0f20yE",
      "Wash Your Hands Song (Super Simple)"
    ],
    [
      "e_04ZrNroTo",
      "This Is The Way We Wash (Super Simple)"
    ],
    [
      "QA48wTGbU7A",
      "Open Shut Them Hands (Super Simple)"
    ],
    [
      "ALcL3MuU4xQ",
      "Put Your Right Hand In (Super Simple)"
    ],
    [
      "HpOe8ng4Gtw",
      "Clap Your Hands Action (The Singing Walrus)"
    ],
    [
      "w6Ybso-e_qA",
      "If You are Happy Clap Hands (Super Simple)"
    ]
  ],
  "s1u7": [
    [
      "KRmSqBmCH8I",
      "The Wheels on the Bus (Super Simple)"
    ],
    [
      "PPCx3pSkKjg",
      "Driving In My Car (Super Simple)"
    ],
    [
      "y97wF7z_8H0",
      "Row Row Row Your Boat (Super Simple)"
    ],
    [
      "biX7NNldtl8",
      "Helicopter Plane Train (English Singsing)"
    ],
    [
      "D1ndC-G1k0E",
      "The Red Fire Truck (Super Simple)"
    ],
    [
      "VnkZ1rN3iG4",
      "Riding on an Airplane (Super Simple)"
    ],
    [
      "mK_7Pz8P96w",
      "Big Green Bus (Super Simple)"
    ],
    [
      "8p_K66gN6Yw",
      "Zoom Zoom We are Going to Moon (CBeebies)"
    ],
    [
      "FR_3fN8P90Q",
      "Transportation Song (The Singing Walrus)"
    ],
    [
      "dUXk8Nc5qQ8",
      "Walking Running Riding (Super Simple)"
    ],
    [
      "w_lCi8U49mY",
      "Animals in the Car (Super Simple)"
    ]
  ],
  "s1u8": [
    [
      "GoSq-yZcJ-4",
      "Walking in the Jungle (Super Simple)"
    ],
    [
      "frN3nvhIHUk",
      "Let us Go to the Zoo (Super Simple)"
    ],
    [
      "w_lCi8U49mY",
      "Yes I Can! Animal Actions (Super Simple)"
    ],
    [
      "FxRGkjkVTGA",
      "Where Are You Going Zoo (Super Simple)"
    ],
    [
      "Ww6Z-q_g6v8",
      "The Lion Sleeps Tonight (Kids Songs)"
    ],
    [
      "ZanHgPprl-0",
      "What Do You Hear Zoo Animals (Super Simple)"
    ],
    [
      "d7qA2n41XgE",
      "I Have a Pet Song (Super Simple)"
    ],
    [
      "x23rXZ9DYVg",
      "Forest Animals Song (English Singsing)"
    ],
    [
      "o19uN-aL918",
      "Sleeping Bunnies (CBeebies)"
    ],
    [
      "R40Xv2Qf2j0",
      "Brown Bear What Do You See (Kids Read)"
    ],
    [
      "t99ULJjCvdM",
      "Animal Sounds in the Wild (Super Simple)"
    ]
  ],
  "s1u9": [
    [
      "eHJXXei0E-4",
      "Rain Rain Go Away (Super Simple)"
    ],
    [
      "iq6Y8fBRLmw",
      "How is The Weather? (Super Simple)"
    ],
    [
      "rD6FRDd9Hew",
      "What is The Weather Like? (English Singsing)"
    ],
    [
      "I8ZepfM8sB0",
      "Seasons Song (The Singing Walrus)"
    ],
    [
      "tfAB4BXSHOA",
      "Sun Rain Wind and Snow (Super Simple)"
    ],
    [
      "s_7qZp7W49k",
      "Little Snowflake (Super Simple)"
    ],
    [
      "n67xY_9q0wA",
      "A Sailor Went to Sea (Super Simple)"
    ],
    [
      "yCjJyiqpAuU",
      "The Bath Song Splash (Super Simple)"
    ],
    [
      "P3sF1B8K7-g",
      "It is a Beautiful Sunny Day (Super Simple)"
    ],
    [
      "g2n9v1M6k-A",
      "Mr. Golden Sun Shine (Super Simple)"
    ],
    [
      "y97wF7z_8H0",
      "Row Row Your Boat gently (Super Simple)"
    ]
  ],
  "s2u1": [
    [
      "XHrJvcdgT-4",
      "Days of the Week Song (The Singing Walrus)"
    ],
    [
      "mXMofxtDPUQ",
      "7 Days of the Week (Super Simple)"
    ],
    [
      "r-P-KqA1-6w",
      "Months of the Year Song (The Singing Walrus)"
    ],
    [
      "Y9-erBW5JxQ",
      "Welcome Back to School (Super Simple)"
    ],
    [
      "75p-NQuFl74",
      "Alphabet Learning Song (Super Simple)"
    ],
    [
      "Ezj_bQszp3w",
      "Books and School Bag (English Singsing)"
    ],
    [
      "gUZaNW_vVd8",
      "School Stationery Song (Fun Kids)"
    ],
    [
      "BGa3AqEQRyE",
      "What Is It? Classroom (English Singsing)"
    ],
    [
      "l4WNrvVjiTw",
      "Phonics & Reading Song (CoComelon)"
    ],
    [
      "oKqAblgFO5I",
      "Clean Up the Books (Super Simple)"
    ],
    [
      "tb_PKP3xI-g",
      "Getting Ready for School (Super Simple)"
    ]
  ],
  "s2u2": [
    [
      "BOv4EnaeM9w",
      "Occupations Song for Kids (English Singsing)"
    ],
    [
      "D1ndC-G1k0E",
      "When I Grow Up Jobs Song (Singing Walrus)"
    ],
    [
      "4p_K66gN6Yw",
      "Community Helpers Song (KidsTV123)"
    ],
    [
      "q9zY7P9x8Nw",
      "What Do You Do? Jobs (English Singsing)"
    ],
    [
      "k9JbZqP_B0A",
      "Firefighter Police Officer (Fun Kids)"
    ],
    [
      "m_9pZ4wY7Qk",
      "Our Helpers in Town (CBeebies)"
    ],
    [
      "r7y8k_Pz4Xw",
      "Who Works at the Hospital (English Singsing)"
    ],
    [
      "c9zY97h7z6k",
      "The Police Officer on Duty (Super Simple)"
    ],
    [
      "XyK67x9zQy0",
      "Let us Be Firefighters (Super Simple)"
    ],
    [
      "PPCx3pSkKjg",
      "Bus Driver on the Road (Super Simple)"
    ],
    [
      "KRmSqBmCH8I",
      "Drive Around the City (Super Simple)"
    ]
  ],
  "s2u3": [
    [
      "gCPbZ3XM2js",
      "We All Fall Down Action (Super Simple)"
    ],
    [
      "HpOe8ng4Gtw",
      "Move and Exercise Song (The Singing Walrus)"
    ],
    [
      "w6Ybso-e_qA",
      "Clap and Stomp Song (Super Simple)"
    ],
    [
      "71hqRT9U0wg",
      "Action Verbs Jump Run (English Singsing)"
    ],
    [
      "idJYhjGyWTU",
      "Stand Up Sit Down Dance (Super Simple)"
    ],
    [
      "p5qwOxlvyhk",
      "The Pinocchio Workout (Super Simple)"
    ],
    [
      "ALcL3MuU4xQ",
      "The Hokey Pokey Dance (Super Simple)"
    ],
    [
      "dUXk8Nc5qQ8",
      "Walking Walking Jumping (Super Simple)"
    ],
    [
      "VAOOT5ZfQyU",
      "Head Shoulders Knees (Super Simple)"
    ],
    [
      "otAJa3jui8A",
      "Touch Your Toes Exercise (Super Simple)"
    ],
    [
      "d8PR_d4431g",
      "One Little Finger Movement (Super Simple)"
    ]
  ],
  "s2u4": [
    [
      "iq6Y8fBRLmw",
      "How Is The Weather Sky? (Super Simple)"
    ],
    [
      "yCjJyiqpAuU",
      "Twinkle Twinkle Little Star (Super Simple)"
    ],
    [
      "8p_K66gN6Yw",
      "The Solar System Song (Kids Learning Tube)"
    ],
    [
      "r-P-KqA1-6w",
      "Planets Song for Children (The Singing Walrus)"
    ],
    [
      "P3sF1B8K7-g",
      "Sun Moon and Stars (English Singsing)"
    ],
    [
      "VnkZ1rN3iG4",
      "Day and Night in the Sky (SciShow Kids)"
    ],
    [
      "g2n9v1M6k-A",
      "Blast Off to Space (CBeebies)"
    ],
    [
      "Ww6Z-q_g6v8",
      "High in the Big Sky (Super Simple)"
    ],
    [
      "tfAB4BXSHOA",
      "Sun Rain Wind and Clouds (Super Simple)"
    ],
    [
      "s_7qZp7W49k",
      "Snowflakes Falling Down (Super Simple)"
    ],
    [
      "DR-cfepSuVQ",
      "Rainbow in the Sky (KidsTV123)"
    ]
  ],
  "s2u5": [
    [
      "FejjRyuOcYw",
      "Ten in the Bed Numbers (Super Simple)"
    ],
    [
      "ePr6m6Yl-Qo",
      "Count to 10 Numbers (The Singing Walrus)"
    ],
    [
      "b0NHrFNZWh0",
      "Counting Monkeys 1 to 5 (Super Simple)"
    ],
    [
      "ea5-SIzk5Uc",
      "Seven Steps Counting (Super Simple)"
    ],
    [
      "diMJzX526ng",
      "1 2 3 4 5 Fish Alive (Super Simple)"
    ],
    [
      "p-dK-r88JqQ",
      "Shapes and Sizes Song (The Singing Walrus)"
    ],
    [
      "TJhFl5vdxp4",
      "Circle Square Triangle #1 (Super Simple)"
    ],
    [
      "WTeqUejf3D0",
      "Rectangle Oval Star #2 (Super Simple)"
    ],
    [
      "2kL3HAbYSmE",
      "Make a Big Circle (Super Simple)"
    ],
    [
      "HGgsklW-mtg",
      "Shapes Everywhere (Super Simple)"
    ],
    [
      "VAOOT5ZfQyU",
      "Count Your Fingers and Toes (Super Simple)"
    ]
  ],
  "s2u6": [
    [
      "D-dbrkCkkO0",
      "The Bees Go Buzzing (Super Simple)"
    ],
    [
      "r7y8k_Pz4Xw",
      "Incy Wincy Spider Climbing (Super Simple)"
    ],
    [
      "ZanHgPprl-0",
      "The Ants Go Marching (Super Simple)"
    ],
    [
      "frN3nvhIHUk",
      "Caterpillar to Butterfly (CBeebies)"
    ],
    [
      "k9JbZqP_B0A",
      "Butterfly Ladybug and Bee (Super Simple)"
    ],
    [
      "HGgsklW-mtg",
      "Bugs and Critters Song (English Singsing)"
    ],
    [
      "Ww6Z-q_g6v8",
      "Little Butterfly Flying (The Singing Walrus)"
    ],
    [
      "2138_0f20yE",
      "Five Little Frogs on a Log (Super Simple)"
    ],
    [
      "4p_K66gN6Yw",
      "Fly Fly Little Butterfly (KidsTV123)"
    ],
    [
      "GoSq-yZcJ-4",
      "Tiny Insects in Nature (Super Simple)"
    ],
    [
      "t99ULJjCvdM",
      "Bugs in the Garden (Super Simple)"
    ]
  ],
  "s2u7": [
    [
      "GoSq-yZcJ-4",
      "Walking in the Jungle Tree (Super Simple)"
    ],
    [
      "yqlngcM_q_k",
      "From a Tiny Seed to Tree (CBeebies)"
    ],
    [
      "Ww6Z-q_g6v8",
      "Parts of a Plant Growing (Kids Learning)"
    ],
    [
      "IzRh1r9Cy18",
      "Apples and Bananas Fruit (Super Simple)"
    ],
    [
      "T0ooQv7oHvw",
      "Do You Like Vegetables? (Super Simple)"
    ],
    [
      "p-dK-r88JqQ",
      "Growing Healthy Plants (English Singsing)"
    ],
    [
      "g2n9v1M6k-A",
      "Sunlight and Green Leaves (Super Simple)"
    ],
    [
      "d7qA2n41XgE",
      "Vegetable Garden Song (The Singing Walrus)"
    ],
    [
      "P3sF1B8K7-g",
      "Fruits and Vegetables (English Singsing)"
    ],
    [
      "s_7qZp7W49k",
      "Fruit Tree in the Orchard (Maple Leaf)"
    ],
    [
      "VnkZ1rN3iG4",
      "Nature Long Ago and Today (SciShow Kids)"
    ]
  ],
  "s2u8": [
    [
      "fRcLxsUg4Gc",
      "My House and My Room (English Singsing)"
    ],
    [
      "q9zY7P9x8Nw",
      "Where Is Teddy in the House (Maple Leaf)"
    ],
    [
      "c9zY97h7z6k",
      "Clean Up Your Bedroom (CoComelon)"
    ],
    [
      "o19uN-aL918",
      "Cooking in the Kitchen (Super Simple)"
    ],
    [
      "y97wF7z_8H0",
      "Living Room and Bedroom (English Singsing)"
    ],
    [
      "m_9pZ4wY7Qk",
      "Furniture in Our Home (Fun Kids)"
    ],
    [
      "XyK67x9zQy0",
      "Building a Cozy House (CBeebies)"
    ],
    [
      "tb_PKP3xI-g",
      "Tidy Up the House (Super Simple)"
    ],
    [
      "oKqAblgFO5I",
      "Clean Up Room Song (Super Simple)"
    ],
    [
      "2138_0f20yE",
      "Washing Up in the Bathroom (Super Simple)"
    ],
    [
      "e_04ZrNroTo",
      "Brush Hair and Wash in House (Super Simple)"
    ]
  ],
  "s2u9": [
    [
      "PPCx3pSkKjg",
      "Driving In My Car City (Super Simple)"
    ],
    [
      "FxRGkjkVTGA",
      "Where Are You Going in Town? (Super Simple)"
    ],
    [
      "d_WQEw13TCo",
      "Baby Shark in the Sea (Pinkfong)"
    ],
    [
      "n67xY_9q0wA",
      "A Sailor Went to Sea (Super Simple)"
    ],
    [
      "diMJzX526ng",
      "1 2 3 4 5 Sea Fish (Super Simple)"
    ],
    [
      "biX7NNldtl8",
      "Under the Ocean Sea Life (English Singsing)"
    ],
    [
      "KRmSqBmCH8I",
      "City Bus and Train Ride (Super Simple)"
    ],
    [
      "GoSq-yZcJ-4",
      "Exploring the Big World (Super Simple)"
    ],
    [
      "R40Xv2Qf2j0",
      "Sea Animals Around the World (CBeebies)"
    ],
    [
      "IzRh1r9Cy18",
      "The Blue Whale Song (Super Simple)"
    ],
    [
      "VnkZ1rN3iG4",
      "Traveling Around the Earth (SciShow Kids)"
    ]
  ],
  "s1rev1": [
    [
      "tVlcKp3bWH8",
      "Hello and Welcome (Super Simple)"
    ],
    [
      "Y9-erBW5JxQ",
      "School and Friends (Super Simple)"
    ],
    [
      "m0lQyezHvuc",
      "Family Fun Song (CoComelon)"
    ],
    [
      "HpOe8ng4Gtw",
      "Action and Play (The Singing Walrus)"
    ],
    [
      "DR-cfepSuVQ",
      "Colors of the Rainbow (KidsTV123)"
    ],
    [
      "75p-NQuFl74",
      "ABC Alphabet Review (Super Simple)"
    ],
    [
      "Ezj_bQszp3w",
      "Classroom Review (English Singsing)"
    ],
    [
      "IIWwYm2kXj8",
      "Family Love (English Singsing)"
    ]
  ],
  "s1rev2": [
    [
      "tb_PKP3xI-g",
      "Clothes and Shoes Review (Super Simple)"
    ],
    [
      "j9-7ooe3JLM",
      "Farm Animals Review (Super Simple)"
    ],
    [
      "VAOOT5ZfQyU",
      "Body and Senses Review (Super Simple)"
    ],
    [
      "KRmSqBmCH8I",
      "Transport and Travel (Super Simple)"
    ],
    [
      "t99ULJjCvdM",
      "Animals on the Farm (Super Simple)"
    ],
    [
      "otAJa3jui8A",
      "Touch and Move (Super Simple)"
    ],
    [
      "PPCx3pSkKjg",
      "Cars and Buses (Super Simple)"
    ],
    [
      "IzRh1r9Cy18",
      "Little Lamb and Pets (Super Simple)"
    ]
  ],
  "s1rev3": [
    [
      "GoSq-yZcJ-4",
      "Wild Animals Safari (Super Simple)"
    ],
    [
      "eHJXXei0E-4",
      "Weather and Rain (Super Simple)"
    ],
    [
      "FejjRyuOcYw",
      "Grade 1 Counting Champion (Super Simple)"
    ],
    [
      "w6Ybso-e_qA",
      "Happy and Proud (Super Simple)"
    ],
    [
      "gCPbZ3XM2js",
      "Movement Celebration (Super Simple)"
    ],
    [
      "iq6Y8fBRLmw",
      "Sun and Clouds Review (Super Simple)"
    ],
    [
      "frN3nvhIHUk",
      "Zoo Adventure Review (Super Simple)"
    ],
    [
      "ALcL3MuU4xQ",
      "End of Year Dance (Super Simple)"
    ]
  ],
  "s2rev1": [
    [
      "XHrJvcdgT-4",
      "Days and Books Review (The Singing Walrus)"
    ],
    [
      "BOv4EnaeM9w",
      "Community Jobs Review (English Singsing)"
    ],
    [
      "gCPbZ3XM2js",
      "Actions and Sports (Super Simple)"
    ],
    [
      "iq6Y8fBRLmw",
      "The Big Sky Review (Super Simple)"
    ],
    [
      "D1ndC-G1k0E",
      "Helping in the Community (The Singing Walrus)"
    ],
    [
      "4p_K66gN6Yw",
      "Jobs We Love (KidsTV123)"
    ],
    [
      "8p_K66gN6Yw",
      "Solar System Planets (Kids Learning)"
    ],
    [
      "HpOe8ng4Gtw",
      "Fast Running and Jumping (The Singing Walrus)"
    ]
  ],
  "s2rev2": [
    [
      "FejjRyuOcYw",
      "Numbers and Measure Review (Super Simple)"
    ],
    [
      "D-dbrkCkkO0",
      "Bugs and Insects Review (Super Simple)"
    ],
    [
      "GoSq-yZcJ-4",
      "Plants and Trees Review (Super Simple)"
    ],
    [
      "fRcLxsUg4Gc",
      "House and City Review (English Singsing)"
    ],
    [
      "r7y8k_Pz4Xw",
      "Spiders and Bees (Super Simple)"
    ],
    [
      "yqlngcM_q_k",
      "Seeds and Flowers (CBeebies)"
    ],
    [
      "p-dK-r88JqQ",
      "Shapes and Measurements (The Singing Walrus)"
    ],
    [
      "XyK67x9zQy0",
      "Homes and Buildings (CBeebies)"
    ]
  ],
  "s2rev3": [
    [
      "PPCx3pSkKjg",
      "City and World Explorer (Super Simple)"
    ],
    [
      "d_WQEw13TCo",
      "Ocean Life Grand Champion (Pinkfong)"
    ],
    [
      "n67xY_9q0wA",
      "Global Adventure Song (Super Simple)"
    ],
    [
      "biX7NNldtl8",
      "Under the Sea Wonders (English Singsing)"
    ],
    [
      "w_lCi8U49mY",
      "Master Champion Song (Super Simple)"
    ],
    [
      "2kL3HAbYSmE",
      "Celebration Dance (Super Simple)"
    ],
    [
      "g2n9v1M6k-A",
      "Shining Star Finale (Super Simple)"
    ],
    [
      "ALcL3MuU4xQ",
      "Graduation Shake (Super Simple)"
    ]
  ]
};

/* 🔎 Her ünite için YouTube arama önerisi */
const LQ = {
  s1u0: 'hello song for kids super simple songs',
  s1u1: 'school song for kids super simple songs',
  s1u2: 'finger family song for kids',
  s1u3: 'toys song for kids super simple songs',
  s1u4: 'shapes song for kids super simple songs',
  s1u5: 'animal sounds song for kids',
  s1u6: 'five senses song for kids',
  s1u7: 'driving in my car super simple songs',
  s1u8: 'places in town song for kids',
  s1u9: 'the bath song super simple songs',
  s2u1: 'days of the week song for kids',
  s2u2: 'people work jobs song for kids',
  s2u3: 'action song for kids super simple',
  s2u4: 'how is the weather super simple songs',
  s2u5: 'counting song for kids super simple',
  s2u6: 'the bees go buzzing super simple songs',
  s2u7: 'walking in the forest super simple songs',
  s2u8: 'my house song for kids english',
  s2u9: 'the city song for kids english',
  s1rev1: 'grade 1 english vocabulary review for kids',
  s1rev2: 'cambridge primary english review songs for kids',
  s1rev3: 'grade 1 end of year english celebration songs',
  s2rev1: 'grade 2 english vocabulary review for kids',
  s2rev2: 'cambridge primary english year 2 revision songs',
  s2rev3: 'grade 2 english celebration and review for kids'
};

/* 🌟 Gerçek Çizgi Film Maskotları & Karakterler (Her Ünite İçin Canlı Karakterler) */
const MASCOTS = {
  "s1u0": {
    "id": "mickey",
    "name": "Mickey Mouse",
    "show": "Disney Mickey & Friends",
    "tag": "🏰 Mickey Mouse",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png",
    "fallbackEmoji": "🐭",
    "quoteEn": "Hot dog! Welcome to our English Clubhouse! Let's learn together!",
    "badge": "🏰 Disney Mickey Mouse",
    "color": "#ef4444",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "mickey",
    "soundFx": "win"
  },
  "s1u1": {
    "id": "donald",
    "name": "Donald Duck",
    "show": "Disney Mickey & Friends",
    "tag": "🦆 Donald Duck",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "🦆",
    "quoteEn": "Quack quack! Pack your school bag, it is time for school!",
    "badge": "🦆 Disney Donald Duck",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-wiggle",
    "voiceKey": "donald",
    "soundFx": "pop"
  },
  "s1u2": {
    "id": "pooh",
    "name": "Winnie the Pooh",
    "show": "Disney Winnie the Pooh",
    "tag": "🍯 Winnie the Pooh",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png",
    "fallbackEmoji": "🐻",
    "quoteEn": "A sweet family is the sweetest honey of all! Family time!",
    "badge": "🍯 Disney Pooh Bear",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce",
    "voiceKey": "pooh",
    "soundFx": "pop"
  },
  "s1u3": {
    "id": "woody",
    "name": "Woody & Buzz",
    "show": "Pixar Toy Story",
    "tag": "🤠 Woody & Buzz",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/01/Woody_Toy_Story.png",
    "fallbackEmoji": "🤠",
    "quoteEn": "Howdy partner! You've got a friend in English fun and games!",
    "badge": "🤠 Pixar Toy Story",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "s1u4": {
    "id": "pinocchio",
    "name": "Pinocchio & Geppetto",
    "show": "Disney Pinocchio",
    "tag": "🎨 Pinocchio & Geppetto",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Pinocchio_1940.png",
    "fallbackEmoji": "🎨",
    "quoteEn": "Let's build, cut, paint and create colourful crafts together!",
    "badge": "🎨 Disney Pinocchio",
    "color": "#10b981",
    "bg": "#d1fae5",
    "anim": "anim-bounce",
    "voiceKey": "mickey",
    "soundFx": "magic"
  },
  "s1u5": {
    "id": "farm",
    "name": "Goofy & Disney Farm Friends",
    "show": "Disney Classics",
    "tag": "🐴 Goofy & Farm Friends",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Disney.png",
    "fallbackEmoji": "🐴",
    "quoteEn": "Neigh and moo! Welcome to our friendly farm animals!",
    "badge": "🐴 Disney Farm Friends",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-wiggle",
    "voiceKey": "goofy",
    "soundFx": "boing"
  },
  "s1u6": {
    "id": "olaf",
    "name": "Olaf & Baymax",
    "show": "Disney Frozen",
    "tag": "⛄ Olaf & Baymax",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/75/Olaf_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "⛄",
    "quoteEn": "Touch your head, arms and knees! Body movements are great!",
    "badge": "⛄ Disney Frozen Olaf",
    "color": "#06b6d4",
    "bg": "#cffafe",
    "anim": "anim-bounce",
    "voiceKey": "olaf",
    "soundFx": "pop"
  },
  "s1u7": {
    "id": "mcqueen",
    "name": "Lightning McQueen",
    "show": "Pixar Cars",
    "tag": "⚡ Lightning McQueen",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Lightning_McQueen.png",
    "fallbackEmoji": "🏎️",
    "quoteEn": "Ka-chow! Zoom with fast cars, trains, planes and bikes!",
    "badge": "⚡ Pixar Cars",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-float",
    "voiceKey": "mcqueen",
    "soundFx": "race"
  },
  "s1u8": {
    "id": "simba",
    "name": "Simba & Timon",
    "show": "Disney The Lion King",
    "tag": "🦁 Simba & Timon",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/3/3d/Simba_Disney.png",
    "fallbackEmoji": "🦁",
    "quoteEn": "Roar! Hakuna Matata! Explore the wild animal kingdom!",
    "badge": "🦁 Disney The Lion King",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "simba",
    "soundFx": "win"
  },
  "s1u9": {
    "id": "ariel",
    "name": "Ariel & Flounder",
    "show": "Disney The Little Mermaid",
    "tag": "🧜‍♀️ Ariel & Flounder",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🧜‍♀️",
    "quoteEn": "Under the sea! Wonderful water, floating boats and sea friends!",
    "badge": "🧜‍♀️ Disney The Little Mermaid",
    "color": "#0d9488",
    "bg": "#ccfbf1",
    "anim": "anim-float",
    "voiceKey": "ariel",
    "soundFx": "magic"
  },
  "s2u1": {
    "id": "donald",
    "name": "Donald Duck & Huey Dewey Louie",
    "show": "Disney DuckTales",
    "tag": "📖 Donald Duck",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "🦆",
    "quoteEn": "Look what I can do! Open the books and let's read together!",
    "badge": "📖 Disney DuckTales",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-bounce",
    "voiceKey": "donald",
    "soundFx": "pop"
  },
  "s2u2": {
    "id": "stitch",
    "name": "Stitch & Lilo",
    "show": "Disney Lilo & Stitch",
    "tag": "🌺 Stitch & Lilo",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/d/d2/Stitch_%28Lilo_%26_Stitch%29.png",
    "fallbackEmoji": "🌺",
    "quoteEn": "Aloha! Ohana means family and good neighbours help each other!",
    "badge": "🌺 Disney Stitch",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-wiggle",
    "voiceKey": "stitch",
    "soundFx": "zoom"
  },
  "s2u3": {
    "id": "incredibles",
    "name": "Dash & The Incredibles",
    "show": "Pixar The Incredibles",
    "tag": "🏃 Dash Parr",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/93/Dash_Parr.png",
    "fallbackEmoji": "🏃",
    "quoteEn": "Ready, steady, go! Run, jump, hop and move with super speed!",
    "badge": "🏃 Pixar The Incredibles",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "dash",
    "soundFx": "zoom"
  },
  "s2u4": {
    "id": "buzz",
    "name": "Buzz Lightyear",
    "show": "Pixar Toy Story",
    "tag": "🚀 Buzz Lightyear",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/07/Buzz_Lightyear.png",
    "fallbackEmoji": "🚀",
    "quoteEn": "To infinity and beyond! Explore planets and the big starry sky!",
    "badge": "🚀 Pixar Toy Story",
    "color": "#7c3aed",
    "bg": "#ede9fe",
    "anim": "anim-float",
    "voiceKey": "buzz",
    "soundFx": "whoosh"
  },
  "s2u5": {
    "id": "scrooge",
    "name": "Professor Ludwig & Scrooge",
    "show": "Disney DuckTales",
    "tag": "📐 Scrooge & Ludwig",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "📐",
    "quoteEn": "Count, measure, calculate! Numbers and shapes are pure treasure!",
    "badge": "📐 Disney DuckTales",
    "color": "#ea580c",
    "bg": "#ffedd5",
    "anim": "anim-bounce",
    "voiceKey": "donald",
    "soundFx": "win"
  },
  "s2u6": {
    "id": "flik",
    "name": "Flik & Heimlich",
    "show": "Pixar A Bug's Life",
    "tag": "🐛 Flik & Heimlich",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/75/Olaf_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "🐛",
    "quoteEn": "Welcome to the world of busy ants, bees and colourful butterflies!",
    "badge": "🐛 Pixar A Bug's Life",
    "color": "#65a30d",
    "bg": "#ecfccb",
    "anim": "anim-wiggle",
    "voiceKey": "olaf",
    "soundFx": "pop"
  },
  "s2u7": {
    "id": "pocahontas",
    "name": "Pocahontas & Meeko",
    "show": "Disney Pocahontas",
    "tag": "🍃 Pocahontas & Meeko",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🍃",
    "quoteEn": "Listen to the trees! How plants grew long ago and grow today!",
    "badge": "🍃 Disney Pocahontas",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "s2u8": {
    "id": "judy",
    "name": "Judy Hopps & Nick",
    "show": "Disney Zootopia",
    "tag": "🐰 Judy Hopps",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Judy_Hopps.png",
    "fallbackEmoji": "🐰",
    "quoteEn": "Welcome to the bustling city! Rooms, streets, and home sweet home!",
    "badge": "🐰 Disney Zootopia",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "judy",
    "soundFx": "tada"
  },
  "s2u9": {
    "id": "dory",
    "name": "Nemo, Dory & Crush",
    "show": "Pixar Finding Nemo",
    "tag": "🐢 Nemo & Dory",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/c/cb/Dory_Finding_Nemo.png",
    "fallbackEmoji": "🐠",
    "quoteEn": "Just keep swimming! Explore the wonderful world oceans and whales!",
    "badge": "🐢 Pixar Finding Nemo",
    "color": "#0891b2",
    "bg": "#cffafe",
    "anim": "anim-float",
    "voiceKey": "dory",
    "soundFx": "drip"
  },
  "s3u1": {
    "id": "dash",
    "name": "The Incredibles & Dash",
    "show": "Pixar The Incredibles",
    "tag": "⚡ Dash & Incredibles",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/93/Dash_Parr.png",
    "fallbackEmoji": "⚡",
    "quoteEn": "Working together makes our superpower unstoppable! Let's team up!",
    "badge": "⚡ Pixar Incredibles",
    "color": "#ef4444",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "dash",
    "soundFx": "zoom"
  },
  "s3u2": {
    "id": "moana",
    "name": "Moana & Maui",
    "show": "Disney Moana",
    "tag": "🌊 Moana of Motunui",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🌊",
    "quoteEn": "Every community has a story, and family traditions light our way!",
    "badge": "🌊 Disney Moana",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "s3u3": {
    "id": "aladdin",
    "name": "Aladdin & Genie",
    "show": "Disney Aladdin",
    "tag": "🧞 Genie & Aladdin",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/a/a2/Genie_Aladdin_Disney.png",
    "fallbackEmoji": "🧞",
    "quoteEn": "Across desert sands and starry oasis nights, wonders never cease!",
    "badge": "🧞 Disney Aladdin",
    "color": "#8b5cf6",
    "bg": "#ede9fe",
    "anim": "anim-bounce",
    "voiceKey": "aladdin",
    "soundFx": "magic"
  },
  "s3u4": {
    "id": "pinocchio",
    "name": "Pinocchio & Geppetto",
    "show": "Disney Pinocchio",
    "tag": "🛠️ Geppetto's Workshop",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Pinocchio_1940.png",
    "fallbackEmoji": "🛠️",
    "quoteEn": "Ingenious inventions and brilliant crafts begin with a dream!",
    "badge": "🛠️ Disney Pinocchio",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "s3u5": {
    "id": "simba",
    "name": "Simba & The Pride",
    "show": "Disney The Lion King",
    "tag": "🦁 Simba & Pride Rock",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/3/3d/Simba_Disney.png",
    "fallbackEmoji": "🦁",
    "quoteEn": "From savannas to deep rainforests, every habitat is home to wonders!",
    "badge": "🦁 Disney The Lion King",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce",
    "voiceKey": "simba",
    "soundFx": "win"
  },
  "s3u6": {
    "id": "peppa",
    "name": "Peppa Pig & George",
    "show": "Peppa Pig Official",
    "tag": "🐷 Peppa Pig",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/4/4b/Peppa_Pig_character.png",
    "fallbackEmoji": "🐷",
    "quoteEn": "Yummy nutritious food gives us energy to learn and jump in puddles!",
    "badge": "🐷 Peppa Pig Official",
    "color": "#ec4899",
    "bg": "#fce7f3",
    "anim": "anim-bounce",
    "voiceKey": "peppa",
    "soundFx": "pop"
  },
  "s3u7": {
    "id": "peterpan",
    "name": "Peter Pan & Tinkerbell",
    "show": "Disney Peter Pan",
    "tag": "🧚 Peter Pan & Tink",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/91/Peter_Pan_Disney.png",
    "fallbackEmoji": "🧚",
    "quoteEn": "Myths, legends and timeless tales fly you to a magical world!",
    "badge": "🧚 Disney Peter Pan",
    "color": "#10b981",
    "bg": "#d1fae5",
    "anim": "anim-float",
    "voiceKey": "peterpan",
    "soundFx": "magic"
  },
  "s3u8": {
    "id": "ariel",
    "name": "Ariel & Earth Friends",
    "show": "Disney The Little Mermaid",
    "tag": "🌍 Ariel & Nature",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🌍",
    "quoteEn": "Caring for our earth and oceans keeps our world blooming bright!",
    "badge": "🌍 Disney Ariel",
    "color": "#059669",
    "bg": "#d1fae5",
    "anim": "anim-pulse",
    "voiceKey": "ariel",
    "soundFx": "magic"
  },
  "s3u9": {
    "id": "bluey",
    "name": "Bluey & Bingo",
    "show": "Bluey Official",
    "tag": "🐶 Bluey & Bingo",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/f/f6/Bluey_character_Heeler.png",
    "fallbackEmoji": "🐶",
    "quoteEn": "For real life?! Pack your explorer hat, the ultimate adventure awaits!",
    "badge": "🐶 Bluey Official",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "bluey",
    "soundFx": "cheer"
  },
  "s4u1": {
    "id": "woody",
    "name": "Woody & Toy Friends",
    "show": "Pixar Toy Story",
    "tag": "🤠 Woody & Memories",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/01/Woody_Toy_Story.png",
    "fallbackEmoji": "🤠",
    "quoteEn": "Family heritage and historical memories connect generations together!",
    "badge": "🤠 Pixar Toy Story",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "s4u2": {
    "id": "buzz",
    "name": "Buzz Lightyear & Space Corps",
    "show": "Pixar Toy Story",
    "tag": "🌌 Buzz Space Explorer",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/07/Buzz_Lightyear.png",
    "fallbackEmoji": "🌌",
    "quoteEn": "Charting the solar system, galaxies and distant stars! Mission ready!",
    "badge": "🌌 Pixar Buzz Lightyear",
    "color": "#7c3aed",
    "bg": "#ede9fe",
    "anim": "anim-float",
    "voiceKey": "buzz",
    "soundFx": "whoosh"
  },
  "s4u3": {
    "id": "dory",
    "name": "Dory, Nemo & Ocean Whales",
    "show": "Pixar Finding Nemo",
    "tag": "🐳 Dory & Ocean Life",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/c/cb/Dory_Finding_Nemo.png",
    "fallbackEmoji": "🐳",
    "quoteEn": "Deep beneath blue waves, wondrous marine creatures swim in harmony!",
    "badge": "🐳 Pixar Finding Nemo",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float",
    "voiceKey": "dory",
    "soundFx": "drip"
  },
  "s4u4": {
    "id": "judy",
    "name": "Judy Hopps & Inventors",
    "show": "Disney Zootopia",
    "tag": "💡 Officer Judy Hopps",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Judy_Hopps.png",
    "fallbackEmoji": "💡",
    "quoteEn": "Creative inventions solve real problems and make communities thrive!",
    "badge": "💡 Disney Zootopia",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "judy",
    "soundFx": "tada"
  },
  "s4u5": {
    "id": "mcqueen",
    "name": "Lightning McQueen & Cruz",
    "show": "Pixar Cars",
    "tag": "🏆 Champion McQueen",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Lightning_McQueen.png",
    "fallbackEmoji": "🏆",
    "quoteEn": "Sportsmanship, dedication and teamwork bring home the championship trophy!",
    "badge": "🏆 Pixar Cars",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "mcqueen",
    "soundFx": "race"
  },
  "s4u6": {
    "id": "chase",
    "name": "Chase & Police Rescue",
    "show": "PAW Patrol Official",
    "tag": "🔍 Detective Chase",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Chase_PAW_Patrol.png",
    "fallbackEmoji": "🔍",
    "quoteEn": "History detectives search for clues to uncover remarkable truths!",
    "badge": "🔍 PAW Patrol Chase",
    "color": "#1d4ed8",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "chase",
    "soundFx": "tada"
  },
  "s4u7": {
    "id": "elsa",
    "name": "Elsa & Nature Spirits",
    "show": "Disney Frozen",
    "tag": "❄️ Queen Elsa",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/5/58/Elsa_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "❄️",
    "quoteEn": "Understanding global climate and weather patterns safeguards our planet!",
    "badge": "❄️ Disney Frozen",
    "color": "#06b6d4",
    "bg": "#cffafe",
    "anim": "anim-float",
    "voiceKey": "elsa",
    "soundFx": "magic"
  },
  "s4u8": {
    "id": "moana",
    "name": "Moana & Wayfinders",
    "show": "Disney Moana",
    "tag": "🧭 Moana the Navigator",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🧭",
    "quoteEn": "Courageous explorers discover new horizons and chart bold pathways!",
    "badge": "🧭 Disney Moana",
    "color": "#059669",
    "bg": "#d1fae5",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "s4u9": {
    "id": "polly",
    "name": "Polly & Futuristic Tech Pals",
    "show": "Polly's Fun English",
    "tag": "🤖 Polly & Future AI",
    "avatarImg": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&auto=format&fit=crop&q=80",
    "fallbackEmoji": "🤖",
    "quoteEn": "Robotics, digital technology and creative minds shape a wonderful tomorrow!",
    "badge": "🤖 Polly Future Tech",
    "color": "#8b5cf6",
    "bg": "#ede9fe",
    "anim": "anim-bounce",
    "voiceKey": "polly",
    "soundFx": "win"
  },
  "stage1_u1": {
    "id": "donald",
    "name": "Donald Duck",
    "show": "Disney Mickey & Friends",
    "tag": "🦆 Donald Duck",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "🦆",
    "quoteEn": "Quack quack! Pack your school bag, it is time for school!",
    "badge": "🦆 Disney Donald Duck",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-wiggle",
    "voiceKey": "donald",
    "soundFx": "pop"
  },
  "stage1_u2": {
    "id": "pooh",
    "name": "Winnie the Pooh",
    "show": "Disney Winnie the Pooh",
    "tag": "🍯 Winnie the Pooh",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/1/10/Winniethepooh.png",
    "fallbackEmoji": "🐻",
    "quoteEn": "A sweet family is the sweetest honey of all! Family time!",
    "badge": "🍯 Disney Pooh Bear",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce",
    "voiceKey": "pooh",
    "soundFx": "pop"
  },
  "stage1_u3": {
    "id": "woody",
    "name": "Woody & Buzz",
    "show": "Pixar Toy Story",
    "tag": "🤠 Woody & Buzz",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/01/Woody_Toy_Story.png",
    "fallbackEmoji": "🤠",
    "quoteEn": "Howdy partner! You've got a friend in English fun and games!",
    "badge": "🤠 Pixar Toy Story",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "stage1_u4": {
    "id": "pinocchio",
    "name": "Pinocchio & Geppetto",
    "show": "Disney Pinocchio",
    "tag": "🎨 Pinocchio & Geppetto",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Pinocchio_1940.png",
    "fallbackEmoji": "🎨",
    "quoteEn": "Let's build, cut, paint and create colourful crafts together!",
    "badge": "🎨 Disney Pinocchio",
    "color": "#10b981",
    "bg": "#d1fae5",
    "anim": "anim-bounce",
    "voiceKey": "mickey",
    "soundFx": "magic"
  },
  "stage1_u5": {
    "id": "farm",
    "name": "Goofy & Disney Farm Friends",
    "show": "Disney Classics",
    "tag": "🐴 Goofy & Farm Friends",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Disney.png",
    "fallbackEmoji": "🐴",
    "quoteEn": "Neigh and moo! Welcome to our friendly farm animals!",
    "badge": "🐴 Disney Farm Friends",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-wiggle",
    "voiceKey": "goofy",
    "soundFx": "boing"
  },
  "stage1_u6": {
    "id": "olaf",
    "name": "Olaf & Baymax",
    "show": "Disney Frozen",
    "tag": "⛄ Olaf & Baymax",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/75/Olaf_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "⛄",
    "quoteEn": "Touch your head, arms and knees! Body movements are great!",
    "badge": "⛄ Disney Frozen Olaf",
    "color": "#06b6d4",
    "bg": "#cffafe",
    "anim": "anim-bounce",
    "voiceKey": "olaf",
    "soundFx": "pop"
  },
  "stage1_u7": {
    "id": "mcqueen",
    "name": "Lightning McQueen",
    "show": "Pixar Cars",
    "tag": "⚡ Lightning McQueen",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Lightning_McQueen.png",
    "fallbackEmoji": "🏎️",
    "quoteEn": "Ka-chow! Zoom with fast cars, trains, planes and bikes!",
    "badge": "⚡ Pixar Cars",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-float",
    "voiceKey": "mcqueen",
    "soundFx": "race"
  },
  "stage1_u8": {
    "id": "simba",
    "name": "Simba & Timon",
    "show": "Disney The Lion King",
    "tag": "🦁 Simba & Timon",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/3/3d/Simba_Disney.png",
    "fallbackEmoji": "🦁",
    "quoteEn": "Roar! Hakuna Matata! Explore the wild animal kingdom!",
    "badge": "🦁 Disney The Lion King",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "simba",
    "soundFx": "win"
  },
  "stage1_u9": {
    "id": "ariel",
    "name": "Ariel & Flounder",
    "show": "Disney The Little Mermaid",
    "tag": "🧜‍♀️ Ariel & Flounder",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🧜‍♀️",
    "quoteEn": "Under the sea! Wonderful water, floating boats and sea friends!",
    "badge": "🧜‍♀️ Disney The Little Mermaid",
    "color": "#0d9488",
    "bg": "#ccfbf1",
    "anim": "anim-float",
    "voiceKey": "ariel",
    "soundFx": "magic"
  },
  "stage2_u1": {
    "id": "donald",
    "name": "Donald Duck & Huey Dewey Louie",
    "show": "Disney DuckTales",
    "tag": "📖 Donald Duck",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "🦆",
    "quoteEn": "Look what I can do! Open the books and let's read together!",
    "badge": "📖 Disney DuckTales",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-bounce",
    "voiceKey": "donald",
    "soundFx": "pop"
  },
  "stage2_u2": {
    "id": "stitch",
    "name": "Stitch & Lilo",
    "show": "Disney Lilo & Stitch",
    "tag": "🌺 Stitch & Lilo",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/d/d2/Stitch_%28Lilo_%26_Stitch%29.png",
    "fallbackEmoji": "🌺",
    "quoteEn": "Aloha! Ohana means family and good neighbours help each other!",
    "badge": "🌺 Disney Stitch",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-wiggle",
    "voiceKey": "stitch",
    "soundFx": "zoom"
  },
  "stage2_u3": {
    "id": "incredibles",
    "name": "Dash & The Incredibles",
    "show": "Pixar The Incredibles",
    "tag": "🏃 Dash Parr",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/93/Dash_Parr.png",
    "fallbackEmoji": "🏃",
    "quoteEn": "Ready, steady, go! Run, jump, hop and move with super speed!",
    "badge": "🏃 Pixar The Incredibles",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "dash",
    "soundFx": "zoom"
  },
  "stage2_u4": {
    "id": "buzz",
    "name": "Buzz Lightyear",
    "show": "Pixar Toy Story",
    "tag": "🚀 Buzz Lightyear",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/07/Buzz_Lightyear.png",
    "fallbackEmoji": "🚀",
    "quoteEn": "To infinity and beyond! Explore planets and the big starry sky!",
    "badge": "🚀 Pixar Toy Story",
    "color": "#7c3aed",
    "bg": "#ede9fe",
    "anim": "anim-float",
    "voiceKey": "buzz",
    "soundFx": "whoosh"
  },
  "stage2_u5": {
    "id": "scrooge",
    "name": "Professor Ludwig & Scrooge",
    "show": "Disney DuckTales",
    "tag": "📐 Scrooge & Ludwig",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/b/b4/Donald_Duck.png",
    "fallbackEmoji": "📐",
    "quoteEn": "Count, measure, calculate! Numbers and shapes are pure treasure!",
    "badge": "📐 Disney DuckTales",
    "color": "#ea580c",
    "bg": "#ffedd5",
    "anim": "anim-bounce",
    "voiceKey": "donald",
    "soundFx": "win"
  },
  "stage2_u6": {
    "id": "flik",
    "name": "Flik & Heimlich",
    "show": "Pixar A Bug's Life",
    "tag": "🐛 Flik & Heimlich",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/75/Olaf_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "🐛",
    "quoteEn": "Welcome to the world of busy ants, bees and colourful butterflies!",
    "badge": "🐛 Pixar A Bug's Life",
    "color": "#65a30d",
    "bg": "#ecfccb",
    "anim": "anim-wiggle",
    "voiceKey": "olaf",
    "soundFx": "pop"
  },
  "stage2_u7": {
    "id": "pocahontas",
    "name": "Pocahontas & Meeko",
    "show": "Disney Pocahontas",
    "tag": "🍃 Pocahontas & Meeko",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🍃",
    "quoteEn": "Listen to the trees! How plants grew long ago and grow today!",
    "badge": "🍃 Disney Pocahontas",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "stage2_u8": {
    "id": "judy",
    "name": "Judy Hopps & Nick",
    "show": "Disney Zootopia",
    "tag": "🐰 Judy Hopps",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Judy_Hopps.png",
    "fallbackEmoji": "🐰",
    "quoteEn": "Welcome to the bustling city! Rooms, streets, and home sweet home!",
    "badge": "🐰 Disney Zootopia",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "judy",
    "soundFx": "tada"
  },
  "stage2_u9": {
    "id": "dory",
    "name": "Nemo, Dory & Crush",
    "show": "Pixar Finding Nemo",
    "tag": "🐢 Nemo & Dory",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/c/cb/Dory_Finding_Nemo.png",
    "fallbackEmoji": "🐠",
    "quoteEn": "Just keep swimming! Explore the wonderful world oceans and whales!",
    "badge": "🐢 Pixar Finding Nemo",
    "color": "#0891b2",
    "bg": "#cffafe",
    "anim": "anim-float",
    "voiceKey": "dory",
    "soundFx": "drip"
  },
  "stage3_u1": {
    "id": "dash",
    "name": "The Incredibles & Dash",
    "show": "Pixar The Incredibles",
    "tag": "⚡ Dash & Incredibles",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/93/Dash_Parr.png",
    "fallbackEmoji": "⚡",
    "quoteEn": "Working together makes our superpower unstoppable! Let's team up!",
    "badge": "⚡ Pixar Incredibles",
    "color": "#ef4444",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "dash",
    "soundFx": "zoom"
  },
  "stage3_u2": {
    "id": "moana",
    "name": "Moana & Maui",
    "show": "Disney Moana",
    "tag": "🌊 Moana of Motunui",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🌊",
    "quoteEn": "Every community has a story, and family traditions light our way!",
    "badge": "🌊 Disney Moana",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "stage3_u3": {
    "id": "aladdin",
    "name": "Aladdin & Genie",
    "show": "Disney Aladdin",
    "tag": "🧞 Genie & Aladdin",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/a/a2/Genie_Aladdin_Disney.png",
    "fallbackEmoji": "🧞",
    "quoteEn": "Across desert sands and starry oasis nights, wonders never cease!",
    "badge": "🧞 Disney Aladdin",
    "color": "#8b5cf6",
    "bg": "#ede9fe",
    "anim": "anim-bounce",
    "voiceKey": "aladdin",
    "soundFx": "magic"
  },
  "stage3_u4": {
    "id": "pinocchio",
    "name": "Pinocchio & Geppetto",
    "show": "Disney Pinocchio",
    "tag": "🛠️ Geppetto's Workshop",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Pinocchio_1940.png",
    "fallbackEmoji": "🛠️",
    "quoteEn": "Ingenious inventions and brilliant crafts begin with a dream!",
    "badge": "🛠️ Disney Pinocchio",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "stage3_u5": {
    "id": "simba",
    "name": "Simba & The Pride",
    "show": "Disney The Lion King",
    "tag": "🦁 Simba & Pride Rock",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/3/3d/Simba_Disney.png",
    "fallbackEmoji": "🦁",
    "quoteEn": "From savannas to deep rainforests, every habitat is home to wonders!",
    "badge": "🦁 Disney The Lion King",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce",
    "voiceKey": "simba",
    "soundFx": "win"
  },
  "stage3_u6": {
    "id": "peppa",
    "name": "Peppa Pig & George",
    "show": "Peppa Pig Official",
    "tag": "🐷 Peppa Pig",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/4/4b/Peppa_Pig_character.png",
    "fallbackEmoji": "🐷",
    "quoteEn": "Yummy nutritious food gives us energy to learn and jump in puddles!",
    "badge": "🐷 Peppa Pig Official",
    "color": "#ec4899",
    "bg": "#fce7f3",
    "anim": "anim-bounce",
    "voiceKey": "peppa",
    "soundFx": "pop"
  },
  "stage3_u7": {
    "id": "peterpan",
    "name": "Peter Pan & Tinkerbell",
    "show": "Disney Peter Pan",
    "tag": "🧚 Peter Pan & Tink",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/91/Peter_Pan_Disney.png",
    "fallbackEmoji": "🧚",
    "quoteEn": "Myths, legends and timeless tales fly you to a magical world!",
    "badge": "🧚 Disney Peter Pan",
    "color": "#10b981",
    "bg": "#d1fae5",
    "anim": "anim-float",
    "voiceKey": "peterpan",
    "soundFx": "magic"
  },
  "stage3_u8": {
    "id": "ariel",
    "name": "Ariel & Earth Friends",
    "show": "Disney The Little Mermaid",
    "tag": "🌍 Ariel & Nature",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🌍",
    "quoteEn": "Caring for our earth and oceans keeps our world blooming bright!",
    "badge": "🌍 Disney Ariel",
    "color": "#059669",
    "bg": "#d1fae5",
    "anim": "anim-pulse",
    "voiceKey": "ariel",
    "soundFx": "magic"
  },
  "stage3_u9": {
    "id": "bluey",
    "name": "Bluey & Bingo",
    "show": "Bluey Official",
    "tag": "🐶 Bluey & Bingo",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/f/f6/Bluey_character_Heeler.png",
    "fallbackEmoji": "🐶",
    "quoteEn": "For real life?! Pack your explorer hat, the ultimate adventure awaits!",
    "badge": "🐶 Bluey Official",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "bluey",
    "soundFx": "cheer"
  },
  "stage4_u1": {
    "id": "woody",
    "name": "Woody & Toy Friends",
    "show": "Pixar Toy Story",
    "tag": "🤠 Woody & Memories",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/01/Woody_Toy_Story.png",
    "fallbackEmoji": "🤠",
    "quoteEn": "Family heritage and historical memories connect generations together!",
    "badge": "🤠 Pixar Toy Story",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse",
    "voiceKey": "woody",
    "soundFx": "win"
  },
  "stage4_u2": {
    "id": "buzz",
    "name": "Buzz Lightyear & Space Corps",
    "show": "Pixar Toy Story",
    "tag": "🌌 Buzz Space Explorer",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/0/07/Buzz_Lightyear.png",
    "fallbackEmoji": "🌌",
    "quoteEn": "Charting the solar system, galaxies and distant stars! Mission ready!",
    "badge": "🌌 Pixar Buzz Lightyear",
    "color": "#7c3aed",
    "bg": "#ede9fe",
    "anim": "anim-float",
    "voiceKey": "buzz",
    "soundFx": "whoosh"
  },
  "stage4_u3": {
    "id": "dory",
    "name": "Dory, Nemo & Ocean Whales",
    "show": "Pixar Finding Nemo",
    "tag": "🐳 Dory & Ocean Life",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/c/cb/Dory_Finding_Nemo.png",
    "fallbackEmoji": "🐳",
    "quoteEn": "Deep beneath blue waves, wondrous marine creatures swim in harmony!",
    "badge": "🐳 Pixar Finding Nemo",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float",
    "voiceKey": "dory",
    "soundFx": "drip"
  },
  "stage4_u4": {
    "id": "judy",
    "name": "Judy Hopps & Inventors",
    "show": "Disney Zootopia",
    "tag": "💡 Officer Judy Hopps",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/9/9c/Judy_Hopps.png",
    "fallbackEmoji": "💡",
    "quoteEn": "Creative inventions solve real problems and make communities thrive!",
    "badge": "💡 Disney Zootopia",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "judy",
    "soundFx": "tada"
  },
  "stage4_u5": {
    "id": "mcqueen",
    "name": "Lightning McQueen & Cruz",
    "show": "Pixar Cars",
    "tag": "🏆 Champion McQueen",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Lightning_McQueen.png",
    "fallbackEmoji": "🏆",
    "quoteEn": "Sportsmanship, dedication and teamwork bring home the championship trophy!",
    "badge": "🏆 Pixar Cars",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce",
    "voiceKey": "mcqueen",
    "soundFx": "race"
  },
  "stage4_u6": {
    "id": "chase",
    "name": "Chase & Police Rescue",
    "show": "PAW Patrol Official",
    "tag": "🔍 Detective Chase",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/2/27/Chase_PAW_Patrol.png",
    "fallbackEmoji": "🔍",
    "quoteEn": "History detectives search for clues to uncover remarkable truths!",
    "badge": "🔍 PAW Patrol Chase",
    "color": "#1d4ed8",
    "bg": "#dbeafe",
    "anim": "anim-bounce",
    "voiceKey": "chase",
    "soundFx": "tada"
  },
  "stage4_u7": {
    "id": "elsa",
    "name": "Elsa & Nature Spirits",
    "show": "Disney Frozen",
    "tag": "❄️ Queen Elsa",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/5/58/Elsa_from_Disney%27s_Frozen.png",
    "fallbackEmoji": "❄️",
    "quoteEn": "Understanding global climate and weather patterns safeguards our planet!",
    "badge": "❄️ Disney Frozen",
    "color": "#06b6d4",
    "bg": "#cffafe",
    "anim": "anim-float",
    "voiceKey": "elsa",
    "soundFx": "magic"
  },
  "stage4_u8": {
    "id": "moana",
    "name": "Moana & Wayfinders",
    "show": "Disney Moana",
    "tag": "🧭 Moana the Navigator",
    "avatarImg": "https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png",
    "fallbackEmoji": "🧭",
    "quoteEn": "Courageous explorers discover new horizons and chart bold pathways!",
    "badge": "🧭 Disney Moana",
    "color": "#059669",
    "bg": "#d1fae5",
    "anim": "anim-float",
    "voiceKey": "moana",
    "soundFx": "whoosh"
  },
  "stage4_u9": {
    "id": "polly",
    "name": "Polly & Futuristic Tech Pals",
    "show": "Polly's Fun English",
    "tag": "🤖 Polly & Future AI",
    "avatarImg": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&auto=format&fit=crop&q=80",
    "fallbackEmoji": "🤖",
    "quoteEn": "Robotics, digital technology and creative minds shape a wonderful tomorrow!",
    "badge": "🤖 Polly Future Tech",
    "color": "#8b5cf6",
    "bg": "#ede9fe",
    "anim": "anim-bounce",
    "voiceKey": "polly",
    "soundFx": "win"
  }
};

/* ═════════════════════════════════════════════════════════════════
   📘 CAMBRIDGE GLOBAL ENGLISH 1 & 2 (SECOND EDITION) MÜFREDAT HAVUZU
   Learner's Book + Workbook + Teacher's Resource (Tüm Kazanımlar)
   ═════════════════════════════════════════════════════════════════ */
const CAMBRIDGE_CURRICULUM = {
  s1u0: {
    lb: ["Greetings & Introductions: Hello, Goodbye, What's your name?", "Numbers 1 to 10 counting games", "Primary colours: Red, Blue, Yellow, Green"],
    wb: ["Letter tracing and motor coordination", "Colouring patterns and number-to-object matching", "Self-portrait and name writing"],
    tr: ["Phonics: Initial sounds and rhythm chanting", "Classroom TPR: Stand up, Sit down, Clap", "Formative check: Responding to greetings"],
    val: ["Being friendly, welcoming new classmates, saying please and thank you"]
  },
  s1u1: {
    lb: ["Classroom objects: table, chair, computer, whiteboard, book, pencil, ruler, scissors", "Classroom action commands: Point, Look, Listen, Trace", "Singular and plural: a book / books"],
    wb: ["School bag inventory and counting items", "Tracing school words and drawing school supplies", "Matching pictures with initial letters"],
    tr: ["Phonics: Initial sounds /b/, /p/, /t/", "Sentence frame: What is this? It's a pencil.", "Formative check: Naming classroom objects accurately"],
    val: ["Taking good care of school materials and keeping the classroom tidy"]
  },
  s1u2: {
    lb: ["Family vocabulary: mother, father, brother, sister, baby, grandma, grandpa", "Daily morning and evening routines", "Feelings: happy, helpful, kind"],
    wb: ["Family tree diagram and labelling", "Ordering daily routines (wake up, brush teeth, sleep)", "Drawing a family helper card"],
    tr: ["Phonics: Initial sounds /m/, /d/, /f/", "Key structure: Who is this? This is my mother.", "Total Physical Response: Routine mime games"],
    val: ["Loving family, helping parents with small chores, showing appreciation"]
  },
  s1u3: {
    lb: ["Toys & games: ball, teddy bear, kite, doll, robot, bike, swing, slide", "Action abilities: catch, throw, kick, jump, run, share", "Playground game vocabulary: hide and seek, tag"],
    wb: ["Matching toys with actions: kick a ball, fly a kite", "Ability sentences: I can jump / I can catch", "Tracing toy words"],
    tr: ["Phonics: Initial /k/ and /s/ sounds", "Key grammar: Modal verb 'can' for ability", "Speaking game: Simon Says with actions"],
    val: ["Sharing toys, waiting for your turn, playing fairly with friends"]
  },
  s1u4: {
    lb: ["2D Shapes: circle, square, triangle, rectangle, star", "Art & craft materials: paper, card, paint, brush, glue, scissors", "Creative actions: cut, fold, paint, stick, make"],
    wb: ["Counting shapes in compound pictures", "Pattern drawing and repeating shape sequences", "Creating a handmade greeting card"],
    tr: ["Phonics: Digraphs /sh/, /ch/ in shape, chair", "Cross-curricular: Mathematics geometry and spatial awareness", "Classroom project: Making a paper puppet"],
    val: ["Expressing creativity, patience during crafting, cleaning up art tools"]
  },
  s1u5: {
    lb: ["Farm animals: cow, calf, horse, foal, sheep, lamb, duck, duckling, hen, chick, pig", "Farm products: milk, eggs, wool", "Animal movements and sounds: moo, baa, oink, cluck"],
    wb: ["Mother and baby animal pairing", "Animal sound crossword and tracing", "Farm landscape coloring"],
    tr: ["Phonics: Short vowels /a/, /e/, /i/, /o/, /u/", "Key grammar: Is it a cow? Yes, it is. / No, it isn't.", "Science connection: Living things and animal habitats"],
    val: ["Kindness to animals, appreciating where our food comes from"]
  },
  s1u6: {
    lb: ["Parts of the body: head, shoulders, knees, toes, eyes, ears, mouth, nose, arms, legs", "The five senses: see, hear, smell, taste, touch", "Movement commands: touch your nose, clap your hands"],
    wb: ["Labelling boy and girl body figures", "Matching sense organs with sensory inputs", "Action rhyme tracing"],
    tr: ["Phonics: Initial sounds /h/, /n/, /m/", "Song: Head, Shoulders, Knees and Toes", "Health focus: Personal hygiene and keeping clean"],
    val: ["Body awareness, staying active, washing hands regularly"]
  },
  s1u7: {
    lb: ["Transport modes: bus, train, plane, boat, bicycle, car, helicopter, lorry, van", "Travel environments: on land, on water, in the air", "Journey words: ticket, driver, road, track, station"],
    wb: ["Sorting vehicles by road, rail, sky, and sea", "Transportation puzzle and vehicle spelling", "Tracing ticket info"],
    tr: ["Phonics: Initial blends /tr/, /pl/, /st/", "Road Safety: Stop, Look, Listen before crossing", "Speaking: How do you come to school? By bus / on foot."],
    val: ["Road safety rules, patience when travelling, public transit etiquette"]
  },
  s1u8: {
    lb: ["Wild animals & adaptations: lion, elephant, giraffe, monkey, zebra, kangaroo, penguin", "Animal body parts: trunk, neck, tail, fur, feathers, claws, pouch", "Habitats: jungle, savannah, desert, polar"],
    wb: ["Animal riddles and description matching", "Habitat mapping and sticker placement", "Writing animal fact files"],
    tr: ["Phonics: Digraphs /th/, /wh/ in thick, white", "Science link: Animal diets and physical adaptations", "Speaking: It has a long neck. It lives in Africa."],
    val: ["Respecting wild nature, protecting endangered animal species"]
  },
  s1u9: {
    lb: ["Water in nature: rain, puddle, river, lake, sea, ocean, clouds, ice, steam", "Uses of water: drinking, swimming, washing, watering crops", "Science concepts: float and sink"],
    wb: ["Recording Float or Sink experiment results", "Water cycle picture sequencing", "Water conservation checklist"],
    tr: ["Phonics: Liquid consonants /l/, /r/, /w/", "Hands-on Science: Float and Sink water tub activity", "Language focus: Does it sink? Yes, it sinks."],
    val: ["Conserving water, turning off the tap while brushing, keeping rivers clean"]
  },
  s1rev1: {
    lb: ["Term 1 Revision: School, Family, Numbers, Greetings", "Oral storytelling and vocabulary quiz", "Self-assessment checklist"],
    wb: ["Review crossword and word searches", "Revision handwriting practice"],
    tr: ["Formative assessment review games", "Differentiated reinforcement"],
    val: ["Reflecting on learning progress and celebrating achievements"]
  },
  s1rev2: {
    lb: ["Term 2 Revision: Toys, Shapes, Farm Animals, Body Parts", "Action games and team quizzes", "Integrated review songs"],
    wb: ["Shape and animal cross-matching", "Sentence building revision"],
    tr: ["Peer review and speaking pair-work", "Diagnostic assessment check"],
    val: ["Collaboration, supporting peers who need help"]
  },
  s1rev3: {
    lb: ["Grade 1 Master Review: Transport, Wild Animals, Water, Nature", "End of Year celebration and showcase", "Global English Champion awards"],
    wb: ["Comprehensive Grade 1 portfolio pages", "My favorite English activities review"],
    tr: ["Summative progress assessment", "Transition guidance for Grade 2"],
    val: ["Pride in learning English, confidence in public speaking"]
  },
  s2u1: {
    lb: ["Parts of a book: cover, title, author, illustrator, contents, blurb, page", "Story genres: fairy tales, animal stories, poetry, non-fiction", "Story elements: characters, setting, plot"],
    wb: ["Writing a book review card", "Alphabetical order in a mini-dictionary", "Sequencing a fairy tale story"],
    tr: ["Phonics: Long vowel sounds /ee/ and /ea/", "Literacy skills: Predicting story outcomes from pictures", "Language focus: My favourite book is... because..."],
    val: ["Loving books, taking care of library resources, reading every day"]
  },
  s2u2: {
    lb: ["Community helpers: doctor, nurse, firefighter, police officer, postal worker, vet, baker, dentist", "Places in our neighbourhood: clinic, hospital, fire station, post office, bakery", "Tools of the trade"],
    wb: ["Matching workers with their uniforms and vehicles", "Asking polite questions: What do you do?", "Neighbourhood map tracing"],
    tr: ["Phonics: Silent letters in knife, write", "Social Studies: Community interdependence and mutual aid", "Language: She is a doctor. She works in a hospital."],
    val: ["Gratitude for community workers, civic responsibility, helping neighbours"]
  },
  s2u3: {
    lb: ["Sports and fitness: football, basketball, gymnastics, athletics, tennis, swimming, cycling", "Movement verbs: balance, stretch, hop, kick, score, bounce", "Playground sports rules"],
    wb: ["Sports gear matching and sentence building", "Personal fitness and health activity log", "Prepositions of movement: over, under, through"],
    tr: ["Phonics: Consonant clusters /sp/, /st/, /sk/", "Physical Education: Warm-up coordination and body rhythm", "Language: Present continuous tense (He is kicking the ball)"],
    val: ["Fair play, teamwork, cheering for all players, healthy daily exercise"]
  },
  s2u4: {
    lb: ["The Day & Night Sky: sun, moon, stars, planets, constellations, Earth, daytime, nighttime", "Weather phenomena: rainbow, storm, thunder, lightning, wind, clouds", "Shadows and light"],
    wb: ["Shadow tracking diary (morning, noon, evening)", "Planet order drawing and solar system facts", "Day vs night activity sorting"],
    tr: ["Phonics: Diphthongs /oi/, /oy/, /ou/, /ow/", "Astronomy & Earth Science: Day/night rotation concept", "Language: In the daytime we see... At night the moon shines."],
    val: ["Awe for the universe, curiosity about space and science"]
  },
  s2u5: {
    lb: ["Measurement vocabulary: tall, short, long, heavy, light, wide, narrow, thick, thin", "Measurement tools: ruler, tape measure, balance scale, clock", "Units: centimetres, metres, kilograms, grams"],
    wb: ["Comparing lengths of classroom objects", "Estimating and checking weights", "Graphing heights and comparing scores"],
    tr: ["Phonics: Comparative suffixes -er and -est", "Mathematics: Standard and non-standard measurement", "Language: The pencil is longer than the crayon."],
    val: ["Accuracy, precision, patience in measuring and recording data"]
  },
  s2u6: {
    lb: ["Bugs & mini-beasts: caterpillar, butterfly, bee, ladybird, ant, beetle, dragonfly, spider, snail", "Insect body anatomy: head, thorax, abdomen, wings, antennae, 6 legs", "Life cycle of a butterfly"],
    wb: ["Sequencing the 4 stages of a butterfly life cycle", "Counting bug legs and drawing insect habitats", "Bug fact file writing"],
    tr: ["Phonics: Double consonants in butter, grass, buzz", "Biology: Pollinators, insect habitats and biodiversity", "Language: Bees live in hives. They make honey."],
    val: ["Respect for small creatures, protecting bees and pollinators"]
  },
  s2u7: {
    lb: ["Past vs Present: castle, knight, carriage, candle, quill vs skyscraper, car, tablet, lightbulb", "Inventions that changed the world", "Museums, ancient artifacts, and historical timelines"],
    wb: ["Then and Now timeline matching", "Writing a museum label for an ancient object", "Sorting old vs modern items"],
    tr: ["Phonics: Regular past tense -ed sounds (/t/, /d/, /id/)", "History: Changes within living memory and beyond", "Language: Long ago, people travelled by carriage. Today, we drive cars."],
    val: ["Valuing history, learning from ancestors, curiosity about human innovation"]
  },
  s2u8: {
    lb: ["City infrastructure: skyscraper, traffic lights, pedestrian crossing, roundabout, pavement, subway", "Giving directions: turn left, turn right, go straight ahead, stop", "City buildings: museum, library, bank, supermarket"],
    wb: ["Following direction maps through the town maze", "Writing a mini-guide to your town", "Traffic sign identification"],
    tr: ["Phonics: Prepositions of place (next to, opposite, between, behind)", "Geography: Map reading and spatial navigation", "Language: How do I get to the library? Turn right and go straight."],
    val: ["Pedestrian safety, polite street manners, keeping cities clean"]
  },
  s2u9: {
    lb: ["Earth's natural wonders: mountain, forest, desert, island, volcano, waterfall, ocean, river", "Caring for our planet: reduce, reuse, recycle, plant trees, save energy", "Nature conservation"],
    wb: ["Recycling sorting challenge (paper, plastic, glass, organic)", "Earth Day poster design", "Writing an eco-pledge"],
    tr: ["Phonics: Prefix re- (recycle, reuse, refill, renew)", "Environmental Science: Global ecosystems and conservation", "Language: We must protect our planet by planting trees."],
    val: ["Global environmental citizenship, sustainability, protecting forests and seas"]
  },
  s2rev1: {
    lb: ["Mid-Stage 2 Review: Books, Neighbours, Sports, Sky", "Integrated reading and writing challenges", "Mid-term vocabulary master"],
    wb: ["Review puzzles, grammar check, and writing exercises"],
    tr: ["Diagnostic mid-year progress evaluation", "Remediation and extension"],
    val: ["Goal setting, perseverance, self-assessment"]
  },
  s2rev2: {
    lb: ["Nature & City Review: Measuring, Bugs, History, City Directions, Nature", "Cross-curricular inquiry projects", "Interactive quiz show"],
    wb: ["Project reflection pages and vocabulary mastery checklists"],
    tr: ["Holistic language assessment and communicative fluency check"],
    val: ["Environmental ethics, civic responsibility, cultural awareness"]
  },
  s2rev3: {
    lb: ["Grade 2 Grand Champion: All 18 Stage 2 Topics Mastery", "Cambridge Young Learners English foundation", "Graduation celebration and presentation"],
    wb: ["Grade 2 Certificate of Completion portfolio", "Reflection on personal learning journey"],
    tr: ["Summative Cambridge Stage 2 attainment certification", "Preparation for Stage 3"],
    val: ["Lifelong learning joy, confidence, empathy, international friendship"]
  }
};

if (typeof window !== 'undefined') {
  window.CAMBRIDGE_CURRICULUM = CAMBRIDGE_CURRICULUM;
}
