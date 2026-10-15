/**
 * CharacterSoundManager — facade over VoiceEngine with speech fallback.
 */
import { VoiceEngine } from '../lib/audio/VoiceEngine';

export class CharacterSoundManager {
  private static isMuted = false;

  static setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) this.stop();
  }

  static stop() {
    VoiceEngine.getInstance().stopCurrent();
  }

  static preload(audioSrc: string): Promise<boolean> {
    return VoiceEngine.getInstance().preloadVoice(audioSrc);
  }

  static play(audioSrc: string, onEnd?: () => void, fallbackText?: string, charId?: string): void {
    if (this.isMuted) { onEnd?.(); return; }
    const engine = VoiceEngine.getInstance();
    if (engine.playVoice(audioSrc, onEnd)) return;

    const token = engine.currentToken;
    engine.preloadVoice(audioSrc).then((ok) => {
      if (token !== engine.currentToken) return; // another voice was requested meanwhile
      if (ok && engine.playVoice(audioSrc, onEnd)) return;
      const media = typeof window !== 'undefined' ? (window as any).MEDIA : null;
      if (media && fallbackText) media.speakCharacter(charId || 'polly', fallbackText, onEnd);
      else onEnd?.();
    });
  }
}
