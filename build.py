#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Tüm modülleri tek dosyada birleştirir → english-fun-zone.html & index.html & vercel-deploy
import pathlib, shutil

root = pathlib.Path(__file__).parent
src = root / 'src'
css = (src / 'styles.css').read_text(encoding='utf-8')
js = '\n'.join((src / f).read_text(encoding='utf-8')
               for f in ['data.js', 'songs.js', 'songs-extra.js', 'media.js',
                         'engines-a.js', 'engines-b.js', 'engines-c.js', 'app.js'])
html = (src / 'shell.html').read_text(encoding='utf-8')
assert '</script' not in js, 'JS içinde </script> var!'
out = html.replace('/*__CSS__*/', css).replace('//__JS__', js)

# 1. Ana dosyalar
dest = root / 'english-fun-zone.html'
dest.write_text(out, encoding='utf-8')

index_dest = root / 'index.html'
index_dest.write_text(out, encoding='utf-8')

# 2. Public klasörü (Vercel public klasörü ararsa)
public_dir = root / 'public'
public_dir.mkdir(exist_ok=True)
(public_dir / 'index.html').write_text(out, encoding='utf-8')

# 3. vercel-deploy klasörü
vd_dir = root / 'vercel-deploy'
vd_dir.mkdir(exist_ok=True)
(vd_dir / 'index.html').write_text(out, encoding='utf-8')
vd_pub = vd_dir / 'public'
vd_pub.mkdir(exist_ok=True)
(vd_pub / 'index.html').write_text(out, encoding='utf-8')

# 4. Masaüstü vercel-deploy kopyası
desktop_vd = pathlib.Path('/Users/sbgok57/Desktop/vercel-deploy')
if desktop_vd.exists():
    (desktop_vd / 'index.html').write_text(out, encoding='utf-8')
    (desktop_vd / 'public' / 'index.html').write_text(out, encoding='utf-8')

print(f'OK → {dest} ({dest.stat().st_size/1024:.0f} KB)')
print(f'OK → {index_dest} ({index_dest.stat().st_size/1024:.0f} KB)')
print('OK → vercel-deploy & public senkronize edildi.')
