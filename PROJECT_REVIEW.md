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
5. Vercel’de eski `.vercel/project.json` kaydı bulunmasına rağmen proje listesinde mevcut `polly-fun-english` projesi bulunamadı. Proje oluşturma API isteği `403 Forbidden` / yetki hatası verdi. Vercel hesabında proje oluşturma izni olmadan bu koddan yayın adresi üretilemez.
6. Bilgisayar kapalıyken bu Codex oturumunun çalışmaya devam etmesi garanti edilemez. Vercel-Git bağlantısı kurulduğunda push sonrasındaki derleme ve dağıtım Vercel sunucularında bilgisayardan bağımsız çalışabilir; şu an bağlantı kurulamadı.

## Bu turda yapılan düzeltmeler

- Oyun çökme uyarısı, puanın ve kayıt durumunun kesin olarak korunduğunu iddia etmeyecek şekilde değiştirildi. Kurtarma ekranı artık mevcut tur puanını gösteriyor ve cihazda devam noktasının kaydedilmiş olabileceğini açıkça belirtiyor.
- Güvenlik kontrolleri korunurken abartılı güvenlik metinleri düzeltildi; kayıtlı hata içeriğinin HTML olarak enjekte edilmesi önlendi.
- Karakter sesi taklitleri ve yanıltıcı karakter profilleri kaldırıldı; kullanılabilir yerel konuşma kayıtları olmadığı açık edildi.
- Kitapla doğrulanmamış ünite eşleşmelerinin taslak/yardımcı içerik olduğu arayüzde belirtiliyor.
- Ana sayfa daha sade sınıf paletine taşındı ve yerel temsili görsel eklendi. Eski karaktere/markaya bağlı CSS adları temizlendi.
- Derleme çıktıları mevcut Antigravity çalışma klasöründe ve Vercel paketinde yeniden üretildi.

## Doğrulama

- `python3 build.py`: başarılı; paket 7,7 MB; 18 MP3, 1 yerel görsel ve 104 video kimliği tarandı. Yerel görsel/ses yolu için eksik varlık bulunmadı. Dış medya bağlantıları çevrimiçi doğrulanmadı.
- `npm test`: tüm test grupları geçti. 26/26 oyun motoru başlatma, sayfa/ünite akışları, çökme kurtarma, dağıtım paketi, kötü amaçlı girdi ve konuşma motoru testleri başarılı.
- Veri denetimi s2u8 ünitesinde yinelenen bir görsel simgesi uyarısı verdi (🪜); bu uyarı hata sayılmıyor.
- `git diff --check`: başarılı.

## Kullanım öncesi gerekenler

Cambridge 1–4 Second Edition kitaplarının okulda kullanılan tam baskıları ile lisanslı kaynaklar eklendiğinde ünite başlığı, hedef kelime/dil yapısı, sayfa ve etkinlikler tek tek öğretmen kontrolünden geçirilmelidir. Doğal ve enerjik konuşma için kullanılacak seslerin insan tarafından kaydedilmesi veya uygun lisanslı kayıtların eklenmesi gerekir. Canlıya alma için Vercel takımında proje oluşturma yetkisi ve GitHub bağlantısı gerekir.
