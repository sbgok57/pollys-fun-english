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
  s2u9: 'the city song for kids english'
};

/* 🌟 Gerçek Çizgi Film Maskotları & Karakterler (Her Ünite İçin Canlı Karakterler) */
const MASCOTS = {
  "s1u0": {
    "name": "Mickey Mouse",
    "show": "Disney",
    "tag": "🐭 Mickey",
    "quoteEn": "Hiya pals! Welcome to English fun!",
    "quoteTr": "Selam arkadaşlar! İngilizce eğlencesine hoş geldiniz!",
    "badge": "🐭 Disney Mickey",
    "color": "#ef4444",
    "bg": "#fee2e2",
    "anim": "anim-bounce"
  },
  "s1u1": {
    "name": "Peppa Pig & George",
    "show": "Peppa Pig",
    "tag": "🐷 Peppa Pig",
    "quoteEn": "Oink! Pack your school bag, it is time for school!",
    "quoteTr": "Oink! Çantanı hazırla, okul vakti geldi!",
    "badge": "🐷 Peppa Pig",
    "color": "#ec4899",
    "bg": "#fce7f3",
    "anim": "anim-wiggle"
  },
  "s1u2": {
    "name": "Bluey & Bingo",
    "show": "Bluey",
    "tag": "🐶 Bluey",
    "quoteEn": "Hooray! Family time is the best time ever!",
    "quoteTr": "Yaşasın! Aile zamanı dünyanın en harika zamanı!",
    "badge": "🐶 Bluey & Bingo",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-bounce"
  },
  "s1u3": {
    "name": "Chase & Marshall",
    "show": "Paw Patrol",
    "tag": "🐕 Chase & Marshall",
    "quoteEn": "Paw Patrol is on a roll! Ready to play games!",
    "quoteTr": "Paw Patrol görevde! Eğlenceli oyunlar oynamaya hazırız!",
    "badge": "🐕 Paw Patrol",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-pulse"
  },
  "s1u4": {
    "name": "Bob the Builder",
    "show": "Bob the Builder",
    "tag": "👷 Bob the Builder",
    "quoteEn": "Can we build it? Yes we can! Making crafts and colors!",
    "quoteTr": "Yapabilir miyiz? Evet yaparız! Renkli el işleri zamanı!",
    "badge": "👷 Bob the Builder",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce"
  },
  "s1u5": {
    "name": "Shaun the Sheep",
    "show": "Shaun the Sheep",
    "tag": "🐑 Shaun the Sheep",
    "quoteEn": "Baa! Welcome to the farm with friendly animals!",
    "quoteTr": "Mee! Sevimli çiftlik hayvanlarına hoş geldiniz!",
    "badge": "🐑 Shaun the Sheep",
    "color": "#10b981",
    "bg": "#d1fae5",
    "anim": "anim-wiggle"
  },
  "s1u6": {
    "name": "Elmo",
    "show": "Sesame Street",
    "tag": "🔴 Elmo",
    "quoteEn": "Elmo loves your bright eyes, ears, and happy smile!",
    "quoteTr": "Elmo parlak gözlerini, kulaklarını ve neşeli gülüşünü seviyor!",
    "badge": "🔴 Sesame Street Elmo",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce"
  },
  "s1u7": {
    "name": "Thomas the Tank Engine",
    "show": "Thomas & Friends",
    "tag": "🚂 Thomas",
    "quoteEn": "Choo-choo! All aboard the learning train!",
    "quoteTr": "Çuf çuf! Öğrenme trenine herkes binsin!",
    "badge": "🚂 Thomas & Friends",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float"
  },
  "s1u8": {
    "name": "Simba",
    "show": "The Lion King",
    "tag": "🦁 Simba",
    "quoteEn": "Roar! Hakuna Matata! Explore the wild animal kingdom!",
    "quoteTr": "Kükre! Hakuna Matata! Vahşi hayvanlar krallığını keşfet!",
    "badge": "🦁 Disney Lion King",
    "color": "#d97706",
    "bg": "#fef3c7",
    "anim": "anim-pulse"
  },
  "s1u9": {
    "name": "SpongeBob SquarePants",
    "show": "SpongeBob",
    "tag": "🧽 SpongeBob",
    "quoteEn": "I am ready! Wonderful water, rivers, and the big blue sea!",
    "quoteTr": "Ben hazırım! Harika sular, nehirler ve kocaman deniz!",
    "badge": "🧽 SpongeBob",
    "color": "#eab308",
    "bg": "#fef9c3",
    "anim": "anim-wiggle"
  },
  "s2u1": {
    "name": "Winnie the Pooh",
    "show": "Disney Pooh",
    "tag": "🐻 Winnie the Pooh",
    "quoteEn": "A day without reading is like a honey pot without honey!",
    "quoteTr": "Kitap okumasız bir gün, balsız bir bal çömleği gibidir!",
    "badge": "🐻 Winnie the Pooh",
    "color": "#f59e0b",
    "bg": "#fef3c7",
    "anim": "anim-bounce"
  },
  "s2u2": {
    "name": "Skye & Rubble",
    "show": "Paw Patrol",
    "tag": "🚁 Skye & Rubble",
    "quoteEn": "These paws uphold the laws! Saluting community helpers!",
    "quoteTr": "Bu patiler kuralları korur! Toplum kahramanlarına selam!",
    "badge": "🚁 Paw Patrol",
    "color": "#ec4899",
    "bg": "#fce7f3",
    "anim": "anim-float"
  },
  "s2u3": {
    "name": "Sonic the Hedgehog",
    "show": "Sonic",
    "tag": "🦔 Sonic",
    "quoteEn": "Gotta go fast! Ready, steady, run and jump with energy!",
    "quoteTr": "Hızlı olmalıyım! Hazır, başla, enerjiyle koş ve zıpla!",
    "badge": "🦔 Sonic the Hedgehog",
    "color": "#2563eb",
    "bg": "#dbeafe",
    "anim": "anim-bounce"
  },
  "s2u4": {
    "name": "Buzz Lightyear",
    "show": "Toy Story",
    "tag": "🚀 Buzz Lightyear",
    "quoteEn": "To infinity and beyond! Reaching for the big sky!",
    "quoteTr": "Sonsuzluğa ve ötesine! Büyük gökyüzüne uzanıyoruz!",
    "badge": "🚀 Pixar Toy Story",
    "color": "#8b5cf6",
    "bg": "#ede9fe",
    "anim": "anim-float"
  },
  "s2u5": {
    "name": "Numberblocks",
    "show": "CBeebies Numberblocks",
    "tag": "🔢 Numberblocks",
    "quoteEn": "One, two, three, four, five! Let us measure shapes and count!",
    "quoteTr": "Bir, iki, üç, dört, beş! Şekilleri ölçelim ve sayalım!",
    "badge": "🔢 Numberblocks",
    "color": "#ea580c",
    "bg": "#ffedd5",
    "anim": "anim-bounce"
  },
  "s2u6": {
    "name": "Maya the Bee",
    "show": "Maya the Bee",
    "tag": "🐝 Maya the Bee",
    "quoteEn": "Buzz buzz! Meet the cute little insects and spiders!",
    "quoteTr": "Vız vız! Sevimli minik böceklerle ve arılarla tanış!",
    "badge": "🐝 Maya the Bee",
    "color": "#ca8a04",
    "bg": "#fef08a",
    "anim": "anim-wiggle"
  },
  "s2u7": {
    "name": "Buddy the T-Rex",
    "show": "Dinosaur Train",
    "tag": "🦖 Buddy",
    "quoteEn": "All aboard the time train! How nature grew long ago and today!",
    "quoteTr": "Zaman trenine binin! Doğanın geçmişte ve bugün nasıl büyüdüğü!",
    "badge": "🦖 Dinosaur Train",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-bounce"
  },
  "s2u8": {
    "name": "Arthur Read",
    "show": "Arthur",
    "tag": "👓 Arthur",
    "quoteEn": "Welcome to our city street and cozy home sweet home!",
    "quoteTr": "Şehir caddemize ve sıcacık tatlı evimize hoş geldiniz!",
    "badge": "👓 Arthur (PBS Kids)",
    "color": "#ca8a04",
    "bg": "#fef08a",
    "anim": "anim-float"
  },
  "s2u9": {
    "name": "Nemo & Dory",
    "show": "Finding Nemo",
    "tag": "🐠 Nemo & Dory",
    "quoteEn": "Just keep swimming! Explore the wonderful world oceans!",
    "quoteTr": "Yüzmeye devam et! Dünyanın muhteşem okyanuslarını keşfet!",
    "badge": "🐠 Finding Nemo / Pixar",
    "color": "#f97316",
    "bg": "#ffedd5",
    "anim": "anim-float"
  },
  "s1rev1": {
    "name": "Pikachu",
    "show": "Pokémon",
    "tag": "⚡ Pikachu",
    "quoteEn": "Pika-pika! Term 1 Super Review Champion!",
    "quoteTr": "Pika-pika! 1. Dönem Süper Tekrar Şampiyonu!",
    "badge": "⚡ Pokémon",
    "color": "#eab308",
    "bg": "#fef9c3",
    "anim": "anim-bounce"
  },
  "s1rev2": {
    "name": "Paddington Bear",
    "show": "Paddington",
    "tag": "🐻 Paddington",
    "quoteEn": "Please look after this vocabulary! Term 2 Super Review!",
    "quoteTr": "Lütfen bu kelimelere iyi bakın! 2. Dönem Süper Tekrarı!",
    "badge": "🐻 Paddington Bear",
    "color": "#0284c7",
    "bg": "#e0f2fe",
    "anim": "anim-float"
  },
  "s1rev3": {
    "name": "Kermit the Frog",
    "show": "The Muppets",
    "tag": "🐸 Kermit",
    "quoteEn": "Yay! Grade 1 Master Champions! You did it!",
    "quoteTr": "Yaşasın! 1. Sınıf Büyük Şampiyonları! Başardınız!",
    "badge": "🐸 The Muppets",
    "color": "#16a34a",
    "bg": "#dcfce7",
    "anim": "anim-bounce"
  },
  "s2rev1": {
    "name": "Garfield & Odie",
    "show": "Garfield",
    "tag": "🐱 Garfield",
    "quoteEn": "Awesome! Stage 2 Mid Review mastered with style!",
    "quoteTr": "Harika! 2. Sınıf Ara Tekrarını ustalıkla tamamladık!",
    "badge": "🐱 Garfield",
    "color": "#ea580c",
    "bg": "#ffedd5",
    "anim": "anim-wiggle"
  },
  "s2rev2": {
    "name": "Kung Fu Panda (Po)",
    "show": "DreamWorks",
    "tag": "🐼 Po (Kung Fu Panda)",
    "quoteEn": "Skadoosh! Nature and City review hero!",
    "quoteTr": "Skadoosh! Doğa ve Şehir tekrarı kahramanı!",
    "badge": "🐼 Kung Fu Panda",
    "color": "#475569",
    "bg": "#f1f5f9",
    "anim": "anim-bounce"
  },
  "s2rev3": {
    "name": "Super Mario",
    "show": "Nintendo",
    "tag": "🍄 Mario",
    "quoteEn": "Here we go! Grade 2 Grand Champion of English!",
    "quoteTr": "Hadi bakalım! İngilizce 2. Sınıf Büyük Şampiyonu!",
    "badge": "🍄 Super Mario",
    "color": "#dc2626",
    "bg": "#fee2e2",
    "anim": "anim-bounce"
  }
};
