/**
 * VoiceEngine — Singleton Web Audio Buffer Engine (TypeScript reference implementation).
 * Mirrors the runtime engine in src/media.js (the live site is a zero-dependency bundle
 * built by build.py; this module is for a future React/TS build).
 */
export class VoiceEngine {
  private static instance: VoiceEngine | null = null;

  private static readonly MAX_CACHE = 40;           // PERF: bounded RAM (LRU)
  private static readonly FETCH_TIMEOUT_MS = 8000;  // SAFETY: never hang
  private static readonly MAX_RETRIES = 3;
  private static readonly BASE_DELAY_MS = 400;
  private static readonly CIRCUIT_OPEN_MS = 5 * 60 * 1000;

  private ctx: AudioContext | null = null;
  private cache = new Map<string, AudioBuffer>();
  private inflight = new Map<string, Promise<boolean>>();
  private breaker = new Map<string, number>();
  private currentSource: AudioBufferSourceNode | null = null;
  private playToken = 0;

  private constructor() {}

  public static getInstance(): VoiceEngine {
    if (!VoiceEngine.instance) VoiceEngine.instance = new VoiceEngine();
    return VoiceEngine.instance;
  }

  /** Lazily create the context so no AudioContext exists before a user gesture. */
  private getCtx(): AudioContext | null {
    if (this.ctx || typeof window === 'undefined') return this.ctx;
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    if (!AC) return null;
    try { this.ctx = new AC(); } catch { this.ctx = null; }
    return this.ctx;
  }

  private circuitOpen(url: string): boolean {
    const until = this.breaker.get(url);
    if (!until) return false;
    if (Date.now() >= until) { this.breaker.delete(url); return false; }
    return true;
  }

  private remember(url: string, buf: AudioBuffer): void {
    this.cache.delete(url);
    this.cache.set(url, buf);
    while (this.cache.size > VoiceEngine.MAX_CACHE) {
      this.cache.delete(this.cache.keys().next().value as string); // PERF: LRU evict
    }
  }

  private async fetchDecode(url: string): Promise<AudioBuffer> {
    const ctx = this.getCtx();
    if (!ctx) throw new Error('Web Audio not supported');
    const ac = new AbortController();
    const timer = setTimeout(() => ac.abort(), VoiceEngine.FETCH_TIMEOUT_MS);
    try {
      const res = await fetch(url, { signal: ac.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await ctx.decodeAudioData(await res.arrayBuffer());
    } finally {
      clearTimeout(timer);
    }
  }

  public isCached(url: string): boolean {
    return this.cache.has(url);
  }

  /**
   * Decodes the clip into RAM. Exponential backoff with jitter (~400/800/1600 ms),
   * then opens a per-URL circuit. Resolves true on success, false on failure. Never throws.
   */
  public preloadVoice(url: string): Promise<boolean> {
    if (this.cache.has(url)) return Promise.resolve(true);
    if (this.circuitOpen(url)) return Promise.resolve(false);
    const existing = this.inflight.get(url);
    if (existing) return existing;

    const job = (async () => {
      for (let attempt = 0; attempt <= VoiceEngine.MAX_RETRIES; attempt++) {
        try {
          this.remember(url, await this.fetchDecode(url));
          return true;
        } catch {
          if (attempt === VoiceEngine.MAX_RETRIES) break;
          const delay = VoiceEngine.BASE_DELAY_MS * 2 ** attempt + Math.random() * 200;
          await new Promise((r) => setTimeout(r, delay));
        }
      }
      this.breaker.set(url, Date.now() + VoiceEngine.CIRCUIT_OPEN_MS);
      console.warn('[VoiceEngine] circuit open for', url);
      return false;
    })();

    this.inflight.set(url, job);
    job.finally(() => this.inflight.delete(url));
    return job;
  }

  /**
   * Plays one voice at a time. Returns false (and calls nothing) if the clip
   * is not decoded yet — the caller decides on fallback.
   */
  public playVoice(url: string, onEnd?: () => void): boolean {
    this.stopCurrent();
    const buf = this.cache.get(url);
    const ctx = this.getCtx();
    if (!buf || !ctx) return false;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    try {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.onended = () => {
        if (this.currentSource === src) this.currentSource = null;
        try { src.disconnect(); } catch { /* already disconnected */ }
        onEnd?.();
      };
      this.currentSource = src;
      this.remember(url, buf);
      src.start(0);
      return true;
    } catch {
      this.currentSource = null;
      return false;
    }
  }

  /** Token lets async callers detect that another voice was requested meanwhile. */
  public get currentToken(): number {
    return this.playToken;
  }

  public stopCurrent(): void {
    this.playToken++;
    const src = this.currentSource;
    this.currentSource = null;
    if (src) {
      src.onended = null;
      try { src.stop(); } catch { /* already stopped */ }
      try { src.disconnect(); } catch { /* already disconnected */ }
    }
    try { window.speechSynthesis?.cancel(); } catch { /* no speech API */ }
  }
}
