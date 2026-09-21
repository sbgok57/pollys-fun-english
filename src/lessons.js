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
/* 📺 Gömülü videolar (resmî Super Simple Songs) — doğrulanmış ID'ler */
const LVID={
 s1u0:[['AclVcrAQKWA','I See Something Blue 🎨'],['FejjRyuOcYw','Ten in the Bed 🔢']],
 s1u4:[['tb_PKP3xI-g','Put On Your Shoes 👟']],
 s1u5:[['j9-7ooe3JLM','Old MacDonald Had a Farm 🚜']],
 s1u6:[['VAOOT5ZfQyU','Head Shoulders Knees & Toes 🕺']],
 s1u7:[['KRmSqBmCH8I','The Wheels on the Bus 🚌']],
 s1u9:[['eHJXXei0E-4','Rain Rain Go Away ☔']],
 s2u5:[['FejjRyuOcYw','Ten in the Bed 🔢']],
 s2u7:[['GoSq-yZcJ-4','Walking in the Jungle 🌳']],
 s1u1:[['Y9-erBW5JxQ','Back to School Song 🎒']],
 s1u2:[['m0lQyezHvuc','Cody\u2019s Finger Family 👨👩👧']],
 s1u8:[['FxRGkjkVTGA','Where Are You Going? 🏙️']],
 s2u1:[['XHrJvcdgT-4','Days of the Week 📅']],
 s2u2:[['BOv4EnaeM9w','Occupations Song 👩🚒']],
 s2u3:[['gCPbZ3XM2js','We All Fall Down 🤸']],
 s2u4:[['iq6Y8fBRLmw','How Is The Weather? 🌤️']],
 s2u6:[['D-dbrkCkkO0','The Bees Go Buzzing 🐝']],
 s2u8:[['fRcLxsUg4Gc','My House 🏠']],
 s2u9:[['PPCx3pSkKjg','Driving In My Car 🚗']]
};
/* 🔎 Her ünite için YouTube arama önerisi (öğretmen seçip oynatır) */
const LQ={
 s1u0:'hello song for kids super simple songs',
 s1u1:'school song for kids super simple songs',
 s1u2:'finger family song for kids',
 s1u3:'toys song for kids super simple songs',
 s1u4:'shapes song for kids super simple songs',
 s1u5:'animal sounds song for kids',
 s1u6:'five senses song for kids',
 s1u7:'driving in my car super simple songs',
 s1u8:'places in town song for kids',
 s1u9:'the bath song super simple songs',
 s2u1:'days of the week song for kids',
 s2u2:'people work jobs song for kids',
 s2u3:'action song for kids super simple',
 s2u4:'how is the weather super simple songs',
 s2u5:'counting song for kids super simple',
 s2u6:'the bees go buzzing super simple songs',
 s2u7:'walking in the forest super simple songs',
 s2u8:'my house song for kids english',
 s2u9:'the city song for kids english'
};
