#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Build the standalone page and verify its local deployment assets.
import pathlib, shutil, re, sys, json

root = pathlib.Path(__file__).parent
src = root / 'src'
css = (src / 'styles.css').read_text(encoding='utf-8')
js = '\n'.join((src / f).read_text(encoding='utf-8')
               for f in ['data.js', 'cambridge-data.js', 'songs.js', 'songs-extra.js', 'songs-mel.js',
                         'lessons.js', 'voice-map.js', 'higgsfield-voices.js', 'vocab-art.js', 'stories-data.js', 'media.js',
                         'engines-a.js', 'engines-b.js', 'engines-c.js', 'cambridge-engine.js', 'app.js'])
html = (src / 'shell.html').read_text(encoding='utf-8')

# 🎙️ Character voice manifest: only real, unique recordings are exposed to VoiceEngine.
# A clip that is byte-identical to another asset (e.g. a beat loop copied as a "voice")
# is a placeholder and must never ship — it would play the wrong sound instead of speech.
import hashlib
voice_errors = []
voice_ok = []
_audio_root = root / 'audio'
_char_root = _audio_root / 'characters'
_md5 = lambda f: hashlib.md5(f.read_bytes()).hexdigest()
_other_hashes = {_md5(f) for f in _audio_root.glob('*.mp3')} if _audio_root.exists() else set()
_char_files = sorted(_char_root.rglob('*.mp3')) if _char_root.exists() else []
_char_hashes = {}
for f in _char_files:
    _char_hashes.setdefault(_md5(f), []).append(f)
for h, files in _char_hashes.items():
    for f in files:
        rel = f.relative_to(root).as_posix()
        if f.stat().st_size < 2000:
            voice_errors.append('karakter sesi çok küçük/bozuk: ' + rel)
        elif h in _other_hashes:
            voice_errors.append('karakter sesi başka bir dosyanın kopyası (yer tutucu): ' + rel)
        elif len(files) > 1:
            voice_errors.append('karakter sesi başka karakterle birebir aynı (yer tutucu): ' + rel)
        else:
            voice_ok.append(rel)
js += '\nconst CHARACTER_VOICE_MANIFEST = new Set(' + json.dumps(sorted(voice_ok)) + ');\n'

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

# 3. Rebuild the deployment package from the current source and local assets.
vd = root / 'vercel-deploy'
shutil.rmtree(vd, ignore_errors=True)
(vd / 'audio').mkdir(parents=True, exist_ok=True)
(vd / 'images').mkdir(parents=True, exist_ok=True)
(vd / '.gitignore').write_text('.vercel\n.env*\n', encoding='utf-8')
(vd / 'index.html').write_text(out, encoding='utf-8')

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
                {"key": "X-Content-Type-Options", "value": "nosniff"},
                {"key": "X-Frame-Options", "value": "DENY"},
                {"key": "X-XSS-Protection", "value": "1; mode=block"},
                {"key": "Referrer-Policy", "value": "strict-origin-when-cross-origin"},
                {"key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=()"},
                {"key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; media-src 'self' data: blob: https:; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"}
            ]
        }
    ]
}, indent=2) + '\n'

(root / 'vercel.json').write_text(vjson_content, encoding='utf-8')
(vd / 'vercel.json').write_text(vjson_content, encoding='utf-8')

if audio_src.exists():
    shutil.rmtree(vd / 'audio', ignore_errors=True)
    shutil.copytree(audio_src, vd / 'audio')

if img_src.exists():
    shutil.rmtree(vd / 'images', ignore_errors=True)
    shutil.copytree(img_src, vd / 'images')

print(f'OK → vercel-deploy/index.html + vercel.json + audio + images')

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

# g) 404 Varlık Kalkanı: HTML/JS içinde diskte olmayan hiçbir görsel veya ses referansı olamaz!
unbundled_imgs = re.findall(r'src=["\x27](images/[^"\x27]+)["\x27]', out)
for img_path in unbundled_imgs:
    if not (vd / img_path).exists():
        hatalar.append(f'404 Tehlikesi - Diskte olmayan görsel referansı: {img_path}')

playfile_calls = set(re.findall(r'playFile\(["\x27]([^"\x27]+)["\x27]', out))
for clip_name in playfile_calls:
    if not (vd / 'audio' / (clip_name + '.mp3')).exists() and clip_name != 'w-zztest':
        hatalar.append(f'404 Tehlikesi - Diskte olmayan playFile ses çağrısı: {clip_name}.mp3')

hatalar.extend(voice_errors)

if hatalar:
    print('!!! DOĞRULAMA HATALARI — PAKET KULLANILMAMALI:')
    for h in hatalar:
        print('   ✘', h)
    sys.exit(1)

mb = sum(f.stat().st_size for f in vd.rglob('*') if f.is_file()) / 1e6
print(f'✔ DOĞRULANDI: {n_mp3} mp3 dosyası · {n_img} resim · {len(set(vids))} video kimliği')
print(f'✔ Yerel varlık kontrolü: 0 eksik yerel görsel · 0 eksik yerel ses çağrısı')
print(f'✔ Build kontrolleri geçti · paket {mb:.1f} MB · uzak medya bağlantıları ayrıca doğrulanmadı')
