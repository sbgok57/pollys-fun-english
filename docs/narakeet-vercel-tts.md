# Optional Narakeet reading voice

The app includes a same-origin Vercel Function at `/api/narakeet-tts`. It proxies speech requests from the shared `MEDIA.tts()` path, keeps the Narakeet API key on the server, and falls back to the browser/device speech engine if the optional provider is unavailable.

The function is **off by default**. No Narakeet key is committed or configured in this repository. Enabling it requires all of the following Vercel environment variables:

- `NARAKEET_TTS_ENABLED=true`
- `NARAKEET_API_KEY` (secret; add it only in Vercel Project Settings → Environment Variables)
- `NARAKEET_TTS_VOICE` (optional Narakeet voice id; if omitted, Narakeet's default voice is used)

Narakeet's official terms say free accounts do not receive API keys; API access is included with paid top-up or metered commercial accounts. Each generated reading can consume paid account quota. Do not enable the flag until the project owner explicitly accepts the provider's current charges and sets up a suitable usage budget.

The endpoint limits each text to 1,200 characters, accepts same-origin browser calls, and applies a per-instance request-rate guard. That in-memory guard is best-effort only; it is not a durable spending cap or student authentication. Keep the feature disabled for public student traffic until durable account authorization and usage limits are in place.
