# Vercel yayına alma — Polly’s Fun English

Bu proje statik bir web uygulamasıdır. GitHub deposu Vercel’e bağlandığında `main` dalına gönderilen değişiklikler otomatik dağıtılabilir. Vercel takımında proje oluşturma izni gerekir.

## 📁 Klasör Yapısı (vercel-deploy)
```text
vercel-deploy/
├── index.html            ← derlenmiş uygulama
├── audio/                ← 18 yerel şarkı ve ritim dosyası
├── images/               ← yerel görseller (şu anda yok)
└── vercel.json           ← güvenlik başlıkları ve statik dağıtım ayarları
```

## 📤 Yöntem 1: GitHub ile Otomatik Dağıtım (Önerilen)
1. Vercel’de **sbgok57/pollys-fun-english** deposunu projeye bağlayın.
2. Ayarlar ekranında:
   - **Framework Preset**: Other
   - **Root Directory**: `vercel-deploy`
   - **Build Command**: (Boş / Kapalı)
   - **Output Directory**: (Boş / Kapalı)
3. İlk dağıtımı tamamlayın. Sonrasında `main` dalına gönderilen değişiklikler otomatik dağıtılır.

## ⚡ Yöntem 2: Netlify Drop (En Pratik Alternatif)
Vercel erişimi sağlanana kadar `vercel-deploy` klasörü yerel önizleme/yedek dağıtım paketi olarak kullanılabilir.

## 💻 Yöntem 3: Vercel CLI ile Doğrudan Yükleme
Masaüstündeki klasörden tek komutla yüklemek isterseniz:
```bash
cd "~/Desktop/Antigravity/Games For Primary School"
npx vercel --cwd vercel-deploy --prod
```

---

## ✅ DERS ÖNCESİ KONTROL LİSTESİ (2 dakika)

Site sınıfta tahtada çalışmadan önce şu 5 adımı yapın:

1. **Sayfa açılıyor mu?** Ana sayfada 3 büyük kart görünüyor mu? (1. Sınıf / 2. Sınıf / Şarkı Köşesi)
2. **Ses geliyor mu?** Şarkı köşesinde yerel bir şarkıyı açın. Konuşma sesi cihazın/tarayıcının sentez sesine bağlıdır.
3. **Ders açılıyor mu?** Bir üniteye girin → "📚 Konu Anlatımı" → İleri tuşu birkaç kez.
4. **Video slaytı:** İnternet varsa video kutusu görünür; yoksa nazik bir uyarı gösterir (dersin geri kalanı çalışır).
5. **Hata olursa:** Hata kartındaki ayrıntıları kaydedin; tarayıcıyı yenileyip aynı etkinliği tekrar açın.

> Kitap/ünite eşleşmeleri ve üçüncü taraf görsel/video bağlantıları kaynak kitaplara veya canlı ağa karşı doğrulanmış değildir. Sınıf öncesinde kullandığınız kitap ve okul planıyla karşılaştırın.
> Yerel derleme ve kontroller: `python3 build.py` ardından `npm test`.

