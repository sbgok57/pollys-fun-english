# 🦜 Polly’s Fun English (v2)

**Cambridge Global English 1 & 2 (Second Edition)** müfredatına uygun, ilkokul 1 ve 2. sınıf öğrencileri için tasarlanmış web tabanlı eğitsel oyun ve şarkı platformu.

---

## 🌟 Özellikler

- 📚 **25 Ünite Seti**: 1. ve 2. Sınıf tüm ünite ve dönem tekrarları.
- 🕹️ **24 Farklı Oyun Motoru**: Flaş Kartlar, Kelime Eşleştirme, Balon Patlatma, Hafıza, Dinle ve Bul, Hecele ve Yaz, Kelime Çarkı, Hızlı Cevap, Kategoriye Ayır, Bingo, Takım Yarışı, Köstebek Vurmaca, Cümle Kurma, Kelime Arama, Farklı Olanı Bul, Polly ile Tekrar, Resim Yapboz, Kelime Treni, Sıra Hafızası, Kelime Yağmuru, İlk Harf, Cümle Tamamla, Yarış Pisti, Say ve Bas.
- 🎵 **330 Şarkı & Chant**: 30 klasik çocuk şarkısı + 300 kelime chant'i.
- 🔊 **Web Audio API**: 17 özel yerel ses efekti, harici ses dosyası gerektirmez, tamamen çevrimdışı çalışır.
- 🛡️ **Anti-Crash & Kurtarma Kalkanı**: Otomatik durum kaydı ve tek tıkla oturum kurtarma.

---

## 🚀 Dağıtım (Deployment)

Bu proje Vercel veya herhangi bir statik barındırma sağlayıcısında sıfır yapılandırmayla çalışır:
- **Build Command**: `python3 build.py` (veya doğrudan derlenmiş `index.html` servis edilir)
- **Output Directory**: `.`
- **Routes / 404 Prevention**: `vercel.json` SPA yönlendirmeleri ile tüm rotalar `/index.html` dosyasına iletilir.
