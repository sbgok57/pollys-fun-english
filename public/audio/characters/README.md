# Character voice clips

Place REAL recordings here as `audio/characters/<characterId>/<phrase>.mp3`
(e.g. `polly/greeting.mp3`, `polly/praise.mp3`, `polly/cheer.mp3`).

- Generate them with `scripts/extract_character_voices.py` (yt-dlp + ffmpeg loudnorm)
  only from sources you have the rights to use.
- `build.py` publishes a clip only if it is a unique file (> 2 KB) that is not a copy
  of any other asset. Placeholders fail the build.
- Clips that are missing are spoken by the browser voice with the character's
  pitch/rate profile, so the site never goes silent or breaks.
