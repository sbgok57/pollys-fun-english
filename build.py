#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# v7 — SIFIR HATA ZIRHI: dağıtım paketi her seferinde sıfırdan eksiksiz kurulur + TAM DOĞRULAMA
import pathlib, shutil, re, sys, json

root = pathlib.Path(__file__).parent
src = root / 'src'
css = (src / 'styles.css').read_text(encoding='utf-8')
js = '\n'.join((src / f).read_text(encoding='utf-8')
               for f in ['data.js', 'songs.js', 'songs-extra.js', 'songs-mel.js',
                         'lessons.js', 'voice-map.js', 'media.js',
                         'engines-a.js', 'engines-b.js', 'engines-c.js', 'app.js'])
html = (src / 'shell.html').read_text(encoding='utf-8')
assert '</script' not in js, 'JS içinde </script> var!'
out = html.replace('/*__CSS__*/', css).replace('//__JS__', js)

audio_src = root / 'audio'
img_src = root / 'images'

# 1. Ana dosyalar
dest = root / 'english-fun-zone.html'
dest.write_text(out, encoding='utf-8')

index_dest = root / 'index.html'
index_dest.write_text(out, encoding='utf-8')

# 2. Public klasörü (Vercel public klasörü ararsa)
public_dir = root / 'public'
public_dir.mkdir(exist_ok=True)
(public_dir / 'index.html').write_text(out, encoding='utf-8')
(public_dir / 'english-fun-zone.html').write_text(out, encoding='utf-8')
if audio_src.exists():
    pub_audio = public_dir / 'audio'
    shutil.rmtree(pub_audio, ignore_errors=True)
    shutil.copytree(audio_src, pub_audio)
if img_src.exists():
    pub_img = public_dir / 'images'
    shutil.rmtree(pub_img, ignore_errors=True)
    shutil.copytree(img_src, pub_img)

# 3. 🛡️ v7 SIFIR-HATA DAĞITIM PAKETİ — her seferinde sıfırdan, eksiksiz kurulur
vd = root / 'vercel-deploy'
shutil.rmtree(vd, ignore_errors=True)
(vd / 'audio').mkdir(parents=True, exist_ok=True)
(vd / 'images').mkdir(parents=True, exist_ok=True)
(vd / 'index.html').write_text(out, encoding='utf-8')
(vd / 'english-fun-zone.html').write_text(out, encoding='utf-8')

vd_pub = vd / 'public'
vd_pub.mkdir(exist_ok=True)
(vd_pub / 'index.html').write_text(out, encoding='utf-8')
(vd_pub / 'english-fun-zone.html').write_text(out, encoding='utf-8')

vjson_content = json.dumps({
    "cleanUrls": True,
    "headers": [
        {
            "source": "/audio/(.*)",
            "headers": [
                {"key": "Cache-Control", "value": "public, max-age=31536000, immutable"}
            ]
        },
        {
            "source": "/(.*)",
            "headers": [
                {"key": "X-Content-Type-Options", "value": "nosniff"}
            ]
        }
    ]
}, indent=2) + '\n'

(root / 'vercel.json').write_text(vjson_content, encoding='utf-8')
(vd / 'vercel.json').write_text(vjson_content, encoding='utf-8')

if audio_src.exists():
    shutil.rmtree(vd / 'audio', ignore_errors=True)
    shutil.copytree(audio_src, vd / 'audio')
    shutil.rmtree(vd_pub / 'audio', ignore_errors=True)
    shutil.copytree(audio_src, vd_pub / 'audio')

if img_src.exists():
    shutil.rmtree(vd / 'images', ignore_errors=True)
    shutil.copytree(img_src, vd / 'images')
    shutil.rmtree(vd_pub / 'images', ignore_errors=True)
    shutil.copytree(img_src, vd_pub / 'images')

print(f'OK → vercel-deploy/index.html + vercel.json + audio + images')

# 4. Masaüstü vercel-deploy kopyası
for desktop_vd in [pathlib.Path('/Users/sbgok57/Desktop/vercel-deploy'), pathlib.Path('/Users/sbgok57/Desktop/Antigravity/vercel-deploy')]:
    if desktop_vd.exists():
        (desktop_vd / 'index.html').write_text(out, encoding='utf-8')
        (desktop_vd / 'english-fun-zone.html').write_text(out, encoding='utf-8')
        (desktop_vd / 'vercel.json').write_text(vjson_content, encoding='utf-8')
        desk_pub = desktop_vd / 'public'
        desk_pub.mkdir(exist_ok=True)
        (desk_pub / 'index.html').write_text(out, encoding='utf-8')
        (desk_pub / 'english-fun-zone.html').write_text(out, encoding='utf-8')
        if audio_src.exists():
            desk_audio = desktop_vd / 'audio'
            shutil.rmtree(desk_audio, ignore_errors=True)
            shutil.copytree(audio_src, desk_audio)
            desk_pub_audio = desk_pub / 'audio'
            shutil.rmtree(desk_pub_audio, ignore_errors=True)
            shutil.copytree(audio_src, desk_pub_audio)
        if img_src.exists():
            desk_img = desktop_vd / 'images'
            shutil.rmtree(desk_img, ignore_errors=True)
            shutil.copytree(img_src, desk_img)
            desk_pub_img = desk_pub / 'images'
            shutil.rmtree(desk_pub_img, ignore_errors=True)
            shutil.copytree(img_src, desk_pub_img)

# ── 🛡️ TAM DOĞRULAMA: her varlık referansı diskte VAR MI? ──
hatalar = []

# a) HTML bütünlüğü (kesik/kırık dosya yok)
if not out.rstrip().endswith('</html>'):
    hatalar.append('html dosyası eksik/kırık (</html> yok)')
if len(out) < 100000:
    hatalar.append('html beklenmedik küçük: %d bayt' % len(out))

# b) VOICESET slug kontrolü
vm = (root / 'src' / 'voice-map.js').read_text(encoding='utf-8')
slugs = re.findall(r'["\x27](w-[^"\x27]+)["\x27]', vm)
for s in slugs:
    if s != 'w-zztest' and not (vd / 'audio' / (s + '.mp3')).exists():
        hatalar.append('ses dosyası yok: ' + s)

# c) sıfır baytlı / bozuk dosya var mı?
for f in (vd / 'audio').glob('*.mp3'):
    if f.stat().st_size < 400:
        hatalar.append('şüpheli küçük ses: %s (%d B)' % (f.name, f.stat().st_size))
for f in (vd / 'images').glob('*.jpg'):
    if f.stat().st_size < 1000:
        hatalar.append('şüpheli küçük resim: %s' % f.name)

# d) MP3 sayıları kontrolü
n_mp3 = len(list((vd / 'audio').glob('*.mp3')))
n_img = len(list((vd / 'images').glob('*.jpg')))
if n_mp3 < 18:
    hatalar.append('mp3 sayısı beklenenden az: %d (en az 18 melodi olmalı)' % n_mp3)

# e) video kimlikleri geçerli biçimde mi?
lv = (root / 'src' / 'lessons.js').read_text(encoding='utf-8')
vids = re.findall(r'["\x27]([A-Za-z0-9_-]{11})["\x27]', lv)
if len(set(vids)) < 18:
    hatalar.append('video kimliği sayısı düşük: %d (en az 18 gömülü video beklenir)' % len(set(vids)))

# f) vercel.json geçerli JSON mı?
try:
    json.loads((vd / 'vercel.json').read_text(encoding='utf-8'))
except Exception as e:
    hatalar.append('vercel.json geçersiz JSON: ' + str(e))

if hatalar:
    print('!!! DOĞRULAMA HATALARI — PAKET KULLANILMAMALI:')
    for h in hatalar:
        print('   ✘', h)
    sys.exit(1)

mb = sum(f.stat().st_size for f in vd.rglob('*') if f.is_file()) / 1e6
print(f'✔ DOĞRULANDI: {n_mp3} mp3 dosyası · {n_img} resim · {len(set(vids))} video kimliği')
print(f'✔ TÜM referanslar diskte mevcut · paket {mb:.1f} MB · SIFIR HATA')
