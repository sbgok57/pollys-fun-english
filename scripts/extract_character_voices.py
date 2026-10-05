#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
extract_character_voices.py
YouTube audio extraction and segment slicer for Polly's Fun English Character Voice Engine.
Uses yt-dlp to extract high-quality audio and ffmpeg with loudnorm audio normalization.

Requirements:
    pip install yt-dlp
    brew install ffmpeg (macOS) or sudo apt install ffmpeg (Linux)

Usage:
    python scripts/extract_character_voices.py --url "YOUTUBE_URL" --char polly --phrase greeting_01 --start 00:01:12 --duration 4
    python scripts/extract_character_voices.py --batch
"""

import os
import sys
import argparse
import subprocess

def download_and_slice(video_url: str, output_dirs: list, character_id: str, phrase_id: str, start_time: str, duration: float):
    """
    Downloads audio from YouTube and extracts a normalized audio segment for a character.
    """
    temp_audio = f"temp_{character_id}_{phrase_id}.mp3"
    
    print(f"\n[1/2] Downloading audio track from: {video_url}")
    try:
        subprocess.run([
            "yt-dlp", "-x", "--audio-format", "mp3",
            "--audio-quality", "0",
            "-o", temp_audio, video_url
        ], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error during download: {e}", file=sys.stderr)
        return False
    except FileNotFoundError:
        print("Error: 'yt-dlp' is not installed. Run: pip install yt-dlp", file=sys.stderr)
        return False

    print(f"[2/2] Slicing and normalizing segment: {start_time} ({duration}s)")
    for out_dir in output_dirs:
        target_dir = os.path.join(out_dir, character_id)
        os.makedirs(target_dir, exist_ok=True)
        out_file = os.path.join(target_dir, f"{phrase_id}.mp3")

        try:
            subprocess.run([
                "ffmpeg", "-y", "-i", temp_audio,
                "-ss", str(start_time), "-t", str(duration),
                "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",  # EBU R128 voice loudness normalization
                "-ac", "2", "-ar", "44100",
                out_file
            ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            print(f"✔ Saved normalized character audio: {out_file}")
        except subprocess.CalledProcessError as e:
            print(f"Error during ffmpeg slicing: {e}", file=sys.stderr)
        except FileNotFoundError:
            print("Error: 'ffmpeg' is not installed.", file=sys.stderr)
            break

    if os.path.exists(temp_audio):
        os.remove(temp_audio)

    return True

BATCH_PRESETS = [
    {
        "url": "https://www.youtube.com/watch?v=k5qG1p-238M",
        "char": "polly",
        "phrase": "greeting",
        "start": "00:00:02",
        "duration": 3.8
    },
    {
        "url": "https://www.youtube.com/watch?v=k5qG1p-238M",
        "char": "leo",
        "phrase": "greeting",
        "start": "00:00:15",
        "duration": 3.5
    },
    {
        "url": "https://www.youtube.com/watch?v=k5qG1p-238M",
        "char": "mia",
        "phrase": "greeting",
        "start": "00:00:30",
        "duration": 3.2
    }
]

def main():
    parser = argparse.ArgumentParser(description="Extract and normalize character voice clips from YouTube.")
    parser.add_argument("--url", help="YouTube video URL")
    parser.add_argument("--char", help="Character ID (e.g. polly, leo, mia, sam, mickey)")
    parser.add_argument("--phrase", help="Phrase ID (e.g. greeting, praise, cheer)")
    parser.add_argument("--start", help="Start timestamp in HH:MM:SS or seconds (e.g. 00:01:12)")
    parser.add_argument("--duration", type=float, default=3.5, help="Duration in seconds (default: 3.5)")
    parser.add_argument("--batch", action="store_true", help="Run preset batch extraction for core characters")
    
    args = parser.parse_args()

    project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    output_dirs = [
        os.path.join(project_root, "audio", "characters"),
        os.path.join(project_root, "public", "audio", "characters")
    ]

    if args.batch:
        print("Running batch preset voice extraction...")
        for item in BATCH_PRESETS:
            print(f"\nProcessing {item['char']} - {item['phrase']}...")
            download_and_slice(item["url"], output_dirs, item["char"], item["phrase"], item["start"], item["duration"])
        print("\nAll batch items processed!")
        return

    if not args.url or not args.char or not args.phrase or not args.start:
        parser.print_help()
        print("\nExample:")
        print('  python scripts/extract_character_voices.py --url "https://..." --char polly --phrase greeting --start 00:00:05 --duration 3.5')
        return

    download_and_slice(args.url, output_dirs, args.char, args.phrase, args.start, args.duration)

if __name__ == "__main__":
    main()
