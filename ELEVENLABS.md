# ElevenLabs My Voices

Open `/voice-library.html` from the site's voice settings. The page reads the saved voices in the ElevenLabs workspace associated with the server API key, supports manual refresh, previews, a local voice preference, and user-triggered MP3 generation. Selecting a voice changes read-aloud on this browser and origin; it does not change another visitor's preference. The underlying voice model remains in ElevenLabs.

Set `ELEVENLABS_API_KEY` as a Vercel Secret for Production (and a separate key for Preview if needed), with Voices read and Text to Speech permissions, then redeploy. An OAuth login in Codex does not populate this variable. Existing credentials are never copied to browser code. A stored variable name alone does not establish a working key.

`GET /api/elevenlabs` lists saved voices only; `?refresh=1` bypasses the short catalog cache. `POST` accepts `{text, voiceId}`, checks that the voice belongs to the saved list, and returns MP3. Text is limited to 2500 characters. Catalog requests and pre-existing previews do not generate new audio. POST generation uses provider credits and is never automatically retried. Audio has a bounded per-instance cache and requests have a best-effort per-instance rate limit, not a durable spending ceiling. For a public high-traffic deployment, use the project's Vercel Firewall rules and provider credit limits as appropriate.

Tests mock ElevenLabs and never consume credits. Live account listing and synthesis must be verified after a valid key is configured.
