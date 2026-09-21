#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""🎵 Polly's Fun English — v3 Melodi Üreteci
Kamu malı çocuk şarkısı melodilerini 'müzik kutusu' tınısıyla sentezler,
chant'ler için 6 neşeli ritim döngüsü üretir ve MP3 olarak kaydeder.
Girdi: hiçbir dosya gerekmez (notalar aşağıda kodludur)
Çıktı: audio/mel-*.mp3 ve audio/beat0..5.mp3
"""
import numpy as np, random, os
from lameenc import Encoder

SR = 44100
OUT = 'audio'

SEMI = {'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,'F#':6,'Gb':6,
        'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11}

def freq(note):
    """'C4' → 261.63 Hz  (A4 = 440)"""
    i = 2 if (len(note) > 1 and note[1] in '#b') else 1
    key, octv = note[:i], int(note[i:])
    return 440.0 * 2 ** ((SEMI[key] + 12 * (octv - 4) - 9) / 12.0)

def P(s):
    """'C4 C4 G4/2 A4/.5' → [('C4',1),('C4',1),('G4',2),('A4',.5)]"""
    seq = []
    for tok in s.split():
        note, d = (tok.split('/') + ['1'])[:2] if '/' in tok else (tok, '1')
        seq.append((note, float(d)))
    return seq

def mb_note(f, dur, vol=1.0):
    """Müzik kutusu (music box) tınısı: temel + 3 harmonik, hızlı atak, üstel sönüm"""
    n = max(int(dur * SR), 8)
    t = np.arange(n) / SR
    env = np.exp(-t * 2.8) * (1 - np.exp(-t * 1200))
    w = (np.sin(2 * np.pi * f * t)
         + 0.42 * np.sin(2 * np.pi * 2 * f * t + 0.1)
         + 0.16 * np.sin(2 * np.pi * 3.01 * f * t)
         + 0.07 * np.sin(2 * np.pi * 4.02 * f * t))
    return vol * env * w * 0.5

def render_melody(bpm, seq, vol=0.9):
    total = sum(b for _, b in seq)
    out = np.zeros(int((total * 60.0 / bpm + 1.6) * SR))
    t = 0.0
    for note, b in seq:
        d = b * 60.0 / bpm
        if note != 'R':
            f = freq(note)
            s = mb_note(f, max(d * 1.05, 0.55), vol)
            i = int(t * SR); out[i:i + len(s)] += s
            s2 = mb_note(f * 2, max(d * 0.8, 0.4), vol * 0.22)   # parıltı (oktav üst)
            i2 = int((t + 0.012) * SR); out[i2:i2 + len(s2)] += s2
        t += d
    return out

# ---------- 🥁 Ritim döngüsü bileşenleri ----------
def kick(dur=0.14):
    n = int(dur * SR); t = np.arange(n) / SR
    f = 120 * np.exp(-t * 24) + 42
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 26) * 0.9

def clap():
    n = int(0.09 * SR); t = np.arange(n) / SR
    noise = np.random.default_rng(7).uniform(-1, 1, n)
    return noise * np.exp(-t * 46) * 0.5

def shaker():
    n = int(0.045 * SR); t = np.arange(n) / SR
    noise = np.random.default_rng(11).uniform(-1, 1, n)
    x = np.diff(noise, prepend=0)
    return x / (np.max(np.abs(x)) + 1e-9) * np.exp(-t * 70) * 0.24

def bass_note(f, dur):
    n = int(dur * SR); t = np.arange(n) / SR
    env = np.exp(-t * 3.5) * (1 - np.exp(-t * 800))
    return (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * 2 * f * t)) * env * 0.5

def render_beat(seed):
    rng = random.Random(1000 + seed)
    bpm = [104, 112, 120, 128, 96, 132][seed % 6]
    bar = 60.0 / bpm
    roots = ['C3', 'A2', 'F2', 'G2']
    riff = ['C5', 'D5', 'E5', 'G5', 'A5', 'R', 'R', 'E5']
    out = np.zeros(int((8 * 4 * bar + 0.3) * SR))
    for b in range(8):
        rf = freq(roots[b % 4])
        for off in (0, 2):                                   # bas: 1 ve 3. vurular
            i = int(((b * 4 + off) * bar) * SR); s = bass_note(rf, bar * 0.9)
            out[i:i + len(s)] += s
        if rng.random() < 0.5:                               # bazen senkop
            i = int(((b * 4 + 2.5) * bar) * SR); s = bass_note(rf, bar * 0.45)
            out[i:i + len(s)] += s
        for beat in range(4):                                # kick & clap
            i = int(((b * 4 + beat) * bar) * SR)
            s = kick() if beat in (0, 2) else clap()
            out[i:i + len(s)] += s
        for e8 in range(8):                                  # shaker sekizlikler
            i = int(((b * 4 + e8 * 0.5) * bar) * SR); s = shaker()
            out[i:i + len(s)] += s
    pat = [rng.choice(riff) for _ in range(16)]              # marimba kalıbı
    for b in range(0, 8, 2):
        for k, note in enumerate(pat):
            if note == 'R': continue
            s = mb_note(freq(note), 0.35, 0.5)
            i = int(((b * 4 + k * 0.5) * bar) * SR); out[i:i + len(s)] += s
    return out

# ---------- 💾 MP3 kaydı ----------
def save_mp3(name, sig):
    sig = sig / (np.max(np.abs(sig)) + 1e-9) * 0.88
    n = int(0.02 * SR)
    sig = sig.astype(np.float32).copy()
    sig[:n] *= np.linspace(0, 1, n); sig[-n:] *= np.linspace(1, 0, n)
    pcm = (sig * 32767).astype('<i2').tobytes()
    enc = Encoder()
    enc.set_bit_rate(96); enc.set_in_sample_rate(SR); enc.set_channels(1); enc.set_quality(2)
    data = enc.encode(pcm) + enc.flush()
    path = os.path.join(OUT, name + '.mp3')
    with open(path, 'wb') as f:
        f.write(data)
    return path, len(data)

# ---------- 🎼 MELODİLER (kamu malı, C majör) ----------
MEL = {
 # Twin-kle twin-kle lit-tle star... (ABC ve Baa Baa ile aynı melodi)
 'mel-twinkle': dict(bpm=96, s="C4 C4 G4 G4 A4 A4 G4/2 F4 F4 E4 E4 D4 D4 C4/2 \
   G4 G4 F4 F4 E4 E4 D4/2 G4 G4 F4 F4 E4 E4 D4/2 \
   C4 C4 G4 G4 A4 A4 G4/2 F4 F4 E4 E4 D4 D4 C4/2"),
 # Frè-re Jac-ques, Frè-re Jac-ques...
 'mel-frere': dict(bpm=100, s="C4 D4 E4 C4 C4 D4 E4 C4 E4 F4 G4/2 E4 F4 G4/2 \
   G4/.5 A4/.5 G4/.5 F4/.5 E4 C4 G4/.5 A4/.5 G4/.5 F4/.5 E4 C4 \
   C4 G3 C4/2 C4 G3 C4/2"),
 # Head, shoul-ders, knees and toes...
 'mel-head': dict(bpm=126, s="G4/2 A4 G4 F#4 G4 E4/2 G4 G4 G4/2 \
   G4/2 A4 G4 F#4 G4 E4/2 G4 G4 G4 F4 \
   E4 D4 C4 E4 G4 C5 D5 C5 B4 C5 A4/2 \
   B4/2 B4 G4 A4 B4 C5/2 C5 C5 C5/2"),
 # If you're hap-py and you know it...
 'mel-happy': dict(bpm=120, s="C4 C4 F4 F4 F4 F4 F4 F4 E4 F4 G4/2 \
   C4 C4 G4 G4 G4 G4 G4 G4 F4 G4 A4/2 \
   F4 F4 Bb4 Bb4 Bb4 Bb4 D5 D5 Bb4 Bb4 A4 A4 G4 F4 F4/2 \
   A4 A4 G4 G4 G4 F4 E4 E4 D4 E4 F4/2"),
 # The wheels on the bus go round and round...
 'mel-wheels': dict(bpm=116, s="C4 F4 F4 F4 F4/2 A4 C5 A4 F4/2 \
   G4 E4 C4/2 A4 G4 F4/2 \
   C4 F4 F4 F4 F4/2 A4 C5 A4 F4/2 G4 C5 C5 F4/2"),
 # Old Mac-Don-ald had a farm, E-I-E-I-O...
 'mel-oldmac': dict(bpm=112, s="G4 G4 G4 D4 E4 E4 D4/2 B4 B4 A4 A4 G4/2 \
   D4 G4 G4 G4 D4 E4 E4 D4/2 B4 B4 A4 A4 G4/2 \
   G4 G4 C5 C5 C5 G4 G4 C5 C5 C5 C5 C5 C5 G4 G4 G4 G4 C5 C5 C5 \
   G4 G4 G4 D4 E4 E4 D4/2 B4 B4 A4 A4 G4/2"),
 # Ma-ry had a lit-tle lamb...
 'mel-mary': dict(bpm=108, s="E4 D4 C4 D4 E4 E4 E4/2 D4 D4 D4/2 E4 G4 G4/2 \
   E4 D4 C4 D4 E4 E4 E4 D4 D4 E4 D4 C4/3"),
 # Row, row, row your boat...
 'mel-row': dict(bpm=100, s="C4 C4 C4 D4 E4/2 E4/.5 D4/.5 E4/.5 F4/.5 G4/2 \
   C5/.5 C5/.5 C5/.5 G4/.5 G4/.5 G4/.5 E4/.5 E4/.5 E4/.5 C4/.5 C4/.5 C4/.5 \
   G4/.5 F4/.5 E4/.5 D4/.5 C4/2"),
 # Rain, rain, go a-way...
 'mel-rain': dict(bpm=100, s="G4 E4 G4 G4 E4/2 G4 G4 E4 A4 G4 G4 E4/2 \
   F4 F4 D4 D4 F4 F4 D4/2 G4 F4 E4 D4 E4 C4 C4/2"),
 # Lon-don Bridge is fal-ling down...
 'mel-london': dict(bpm=104, s="G4 A4/.5 G4/.5 F4 E4 F4/.5 G4/.5 \
   D4/.5 E4/.5 F4/2 E4/.5 F4/.5 G4/2 \
   G4 A4/.5 G4/.5 F4 E4 F4/.5 G4/.5 D4 G4 E4 C4/2"),
 # Hot cross buns! (E-D-C deseni)
 'mel-hotcross': dict(bpm=100, s="E4/2 D4/2 C4/2 E4/2 D4/2 C4/2 \
   C4 C4 C4 D4 D4 D4 E4/2 D4/2 C4/2"),
 # One lit-tle, two lit-tle, three lit-tle In-di-ans...
 'mel-ten': dict(bpm=116, s="C4 C4 C4 C4 C4 C4 E4 G4 G4 E4 C4/2 \
   D4 D4 D4 D4 D4 D4 B3 D4 D4 B3 G3/2 \
   C4 C4 C4 C4 C4 C4 E4 G4 G4 E4 C4/2 \
   G4 F4 F4 E4 D4 C4/2"),
}

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    report = []
    for name, m in MEL.items():
        sig = render_melody(m['bpm'], P(m['s']))
        path, size = save_mp3(name, sig)
        report.append((name, len(sig) / SR, size))
        assert len(sig) > SR, f'{name} cok kisa!'
    for k in range(6):
        sig = render_beat(k)
        path, size = save_mp3('beat%d' % k, sig)
        report.append(('beat%d' % k, len(sig) / SR, size))
    print(f"{'dosya':<16}{'sure':>8}{'boyut':>8}")
    for n, d, s in report:
        print(f"{n+'.mp3':<16}{d:7.1f}s{s/1024:6.0f}K")
    print('TOPLAM:', sum(s for *_, s in report) // 1024, 'KB ·',
          len(report), 'dosya')
