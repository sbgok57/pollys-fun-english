#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Tüm modülleri tek dosyada birleştirir → english-fun-zone.html & index.html
import pathlib

src = pathlib.Path(__file__).parent / 'src'
css = (src / 'styles.css').read_text(encoding='utf-8')
js = '\n'.join((src / f).read_text(encoding='utf-8')
               for f in ['data.js', 'songs.js', 'songs-extra.js', 'media.js',
                         'engines-a.js', 'engines-b.js', 'engines-c.js', 'app.js'])
html = (src / 'shell.html').read_text(encoding='utf-8')
assert '</script' not in js, 'JS içinde </script> var!'
out = html.replace('/*__CSS__*/', css).replace('//__JS__', js)

dest = pathlib.Path(__file__).parent / 'english-fun-zone.html'
dest.write_text(out, encoding='utf-8')

index_dest = pathlib.Path(__file__).parent / 'index.html'
index_dest.write_text(out, encoding='utf-8')

print(f'OK → {dest} ({dest.stat().st_size/1024:.0f} KB)')
print(f'OK → {index_dest} ({index_dest.stat().st_size/1024:.0f} KB)')
