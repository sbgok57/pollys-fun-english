# Polly’s Fun English — inceleme ve değişiklik raporu

## İncelenen alanlar

- Antigravity proje kimliği `858b08cf-7eb3-499b-9bb1-d1139281ce5c` altındaki kaydedilmiş `walkthrough.md`, uygulama planı, durum/dağıtım raporları, ham kullanıcı notları ve proje için hazırlanmış yardımcı betikler.
- Bu projeye ait Antigravity konuşma veritabanı (4.753 adım; 2.300 üretim kaydı). Veritabanı salt okunur açıldı. İçerik hacmi ve protobuf biçimi nedeniyle tüm araç çıktıları tekrar çalıştırılmadı; kullanıcı içeriği ve seçili okunabilir örnekler incelendi.
- Uygulama kaynakları, etkinlik/ünite verileri, ses işleme ve karakter sesi yolları, ders planları, web sayfası stilleri, derleme ve Vercel dağıtım paketi.

## Önemli bulgular

1. Geçmiş Antigravity raporları “Cambridge Second Edition ile tam eşleşme”, doğal karakter sesleri, gerçek medya/GIPHY doğrulaması, sıfır hata ve canlı Vercel adresi gibi iddialar içeriyor. Mevcut dosyalar bunları kanıtlamıyor. Kitap PDF/EPUB’ları veya lisanslı öğretmen kaynakları projede yok; 36 ünite ve sayfa eşleşmeleri bu nedenle doğrulanmış müfredat olarak sunulmamalı.
2. Antigravity notları çok sayıda oyun/kelime paketi sayısı veriyor. Yapı testleri kayıt sayısını sayıyor; her kaydın benzersiz, doğru, çocuklara uygun veya kitapla eşleşen içerik olduğunu kanıtlamıyor. Bazı şablonların tekrar ettiği görülüyor.
3. Karakter klasöründe gerçek, lisanslı konuşma kayıtları yok. 18 MP3 ağırlıklı olarak şarkı ve ritimlerden oluşuyor. Uygulama, karakter taklidi izlenimi veren perde ayarlarını kaldırıp cihazın konuşma sentezini kullanıyor; sesin doğallığı cihazın sesine bağlı. Bu değişiklik profesyonel insan sesi üretmez.
4. Uzaktaki video, GIF ve görsel bağlantıları kaynaklarda bulunuyor, ancak hepsinin içeriği, erişilebilirliği ve sınıfta kullanım uygunluğu tek tek doğrulanmadı. Ana ekrandaki yeni yerel görsel AI ile oluşturulmuş, temsili bir sınıf görselidir; gerçek bir sınıftan fotoğraf değildir.
5. Eski `.vercel/project.json` kaydı farklı bir Vercel projesini gösteriyordu. Vercel uygulama bağlantısı proje oluşturma ve dağıtım listeleme isteklerini 403 ile reddetti; kullanıcının bağlı hesabındaki CLI ile `polly-fun-english` projesi oluşturuldu, GitHub deposuna bağlandı ve production dağıtımı yapıldı. `https://polly-fun-english.vercel.app` adresi ve Polly görseli dışarıdan HTTP 200 ile doğrulandı.
6. Bilgisayar kapalıyken bu Codex oturumunun çalışmaya devam etmesi garanti edilemez. Ancak Vercel-Git bağlantısı artık kurulu; `main` dalına gönderilen değişiklikler yeni production dağıtımını Vercel sunucularında tetikliyor.

## Bu turda yapılan düzeltmeler

- Oyun çökme uyarısı, puanın ve kayıt durumunun kesin olarak korunduğunu iddia etmeyecek şekilde değiştirildi. Kurtarma ekranı artık mevcut tur puanını gösteriyor ve cihazda devam noktasının kaydedilmiş olabileceğini açıkça belirtiyor.
- Güvenlik kontrolleri korunurken abartılı güvenlik metinleri düzeltildi; kayıtlı hata içeriğinin HTML olarak enjekte edilmesi önlendi.
- Karakter sesi taklitleri ve yanıltıcı karakter profilleri kaldırıldı; kullanılabilir yerel konuşma kayıtları olmadığı açık edildi.
- Kitapla doğrulanmamış ünite eşleşmelerinin taslak/yardımcı içerik olduğu arayüzde belirtiliyor.
- Ana sayfa daha renkli, görsel odaklı bir sınıf paletine taşındı; sınıf görseline ek olarak özgün 3D çizgi film Polly maskotu eklendi. Eski karaktere/markaya bağlı CSS adları temizlendi.
- “Talk with Polly” ekranı eklendi: desteklenen tarayıcılarda İngilizce konuşma tanıma, yazılı yanıt alternatifi, ekranda görünen olumlu geri bildirim ve cihaz sesinden aynı övgünün okunması bulunuyor. Sohbet yanıtları şu an basit, kural tabanlı öğretim kalıplarıdır; OpenAI Realtime/ChatGPT ses modeli bağlı değildir.
- Her doğru cevapta ekranda görünen ve aynı anda seslendirilen “Brilliant! You got it!” geri bildirimi eklendi.
- Derleme çıktıları mevcut Antigravity çalışma klasöründe ve Vercel paketinde yeniden üretildi.

## Doğrulama

- `python3 build.py`: başarılı; paket 8,8 MB; 18 MP3, 2 yerel görsel ve 104 video kimliği tarandı. Yerel görsel/ses yolu için eksik varlık bulunmadı. Dış medya bağlantıları çevrimiçi doğrulanmadı.
- `npm test`: tüm test grupları geçti. 26/26 oyun motoru başlatma, sayfa/ünite akışları, çökme kurtarma, dağıtım paketi, kötü amaçlı girdi ve konuşma motoru testleri başarılı.
- Vercel production URL ve 3D maskot varlığı HTTP 200 döndürdü; production dağıtım durumu `READY`. GitHub `main` gönderiminden sonra Vercel’de ikinci bir `READY` production dağıtımı görüldü.
- Veri denetimi s2u8 ünitesinde yinelenen bir görsel simgesi uyarısı verdi (🪜); bu uyarı hata sayılmıyor.
- `git diff --check`: başarılı.

## Kullanım öncesi gerekenler

Cambridge 1–4 Second Edition kitaplarının okulda kullanılan tam baskıları ile lisanslı kaynaklar eklendiğinde ünite başlığı, hedef kelime/dil yapısı, sayfa ve etkinlikler tek tek öğretmen kontrolünden geçirilmelidir. ChatGPT kalitesinde serbest gerçek zamanlı sesli sohbet için ayrıca güvenli sunucu tarafı Realtime API bağlantısı ve API kimlik bilgileri gerekir; mevcut sesli pratik bu hizmeti taklit etmez. Doğal ve enerjik konuşma için cihaz tarayıcısının sesinden daha tutarlı kayıtlar kullanılacaksa lisanslı insan sesleri eklenmelidir. Vercel production adresi hazırdır; GitHub main bağlantısı kuruludur.
