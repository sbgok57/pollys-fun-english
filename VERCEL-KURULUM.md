# 🚀 Vercel'e Yükleme Rehberi — Polly's Fun English (v6)

Bu rehber, Polly's Fun English oyun sitemizi ücretsiz olarak Vercel'e yükleyip
`https://proje-adiniz.vercel.app` şeklinde anında çalışır bir adres elde etmenizi sağlar.

## 📁 Klasör Yapısı (vercel-deploy)
```text
vercel-deploy/
├── index.html            ← oyunun tamamı (tek dosya, ~215 KB)
├── audio/                ← 🎵 Polly'nin sesleri + müzik kutusu melodileri & ritimler (18 mp3)
├── public/
│   └── index.html        ← aynı dosya (Vercel "public" ayarı kullanıyorsa diye)
└── vercel.json           ← temiz statik yönlendirme ayarı
```

## 📤 Yöntem 1: GitHub ile Otomatik Dağıtım (Önerilen)
1. [vercel.com](https://vercel.com/) sayfasına gidin ve giriş yapın.
2. Sağ üstteki **"Add New..."** butonundan **"Project"** seçin.
3. Repository listesinden statik dağıtım depomuzu bulun: **polly-fun-english** ve yanındaki **"Import"** butonuna basın.
4. Ayarlar ekranında:
   - **Framework Preset**: Other
   - **Root Directory**: (Boş bırakın)
   - **Build Command**: (Boş / Kapalı)
   - **Output Directory**: (Boş / Kapalı)
5. **"Deploy"** butonuna basın. 15-30 saniye içinde siteniz yayında olacaktır!

## ⚡ Yöntem 2: Netlify Drop (En Pratik Alternatif)
1. [app.netlify.com/drop](https://app.netlify.com/drop) adresini açın.
2. Masaüstündeki `vercel-deploy` klasörünü komple tarayıcıya sürükleyip bırakın.
3. Hiçbir ayar yapmadan 5 saniye içinde herkese açık ücretsiz HTTPS adresiniz hazır olur!

## 💻 Yöntem 3: Vercel CLI ile Doğrudan Yükleme
Masaüstündeki klasörden tek komutla yüklemek isterseniz:
```bash
cd ~/Desktop/vercel-deploy
npx vercel --prod
```
