/**
 * CharacterSoundManager & Multi-Character Audio Pipeline
 * Provides robust audio playback with cross-browser fallback to speech synthesis / tone.
 */

export class CharacterSoundManager {
  private static currentAudio: HTMLAudioElement | null = null;
  private static isMuted: boolean = false;

  static setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  static stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {}
      this.currentAudio = null;
    }
  }

  static play(
    audioSrc: string,
    onEnd?: () => void,
    fallbackText?: string,
    charId?: string
  ): HTMLAudioElement | null {
    if (this.isMuted) {
      if (onEnd) onEnd();
      return null;
    }

    this.stop();

    try {
      const audio = new Audio(audioSrc);
      this.currentAudio = audio;

      let hasFinished = false;
      const safeEnd = () => {
        if (hasFinished) return;
        hasFinished = true;
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
        if (onEnd) onEnd();
      };

      audio.onended = safeEnd;

      // // SAFETY: Fallback mechanism when asset file is missing or blocked by autoplay policy
      audio.onerror = () => {
        console.warn(`[CharacterSoundManager] Asset missing: ${audioSrc}. Triggering speech fallback.`);
        if (typeof window !== 'undefined' && (window as any).MEDIA && fallbackText) {
          (window as any).MEDIA.speakCharacter(charId || 'polly', fallbackText, safeEnd);
        } else {
          safeEnd();
        }
      };

      const playPromise = audio.play();
      if (playPromise && playPromise.catch) {
        playPromise.catch((err) => {
          console.warn(`[CharacterSoundManager] Autoplay/playback restriction: ${err.message}`);
          if (typeof window !== 'undefined' && (window as any).MEDIA && fallbackText) {
            (window as any).MEDIA.speakCharacter(charId || 'polly', fallbackText, safeEnd);
          } else {
            safeEnd();
          }
        });
      }

      return audio;
    } catch (err) {
      console.error("[CharacterSoundManager] Audio instantiation error:", err);
      if (typeof window !== 'undefined' && (window as any).MEDIA && fallbackText) {
        (window as any).MEDIA.speakCharacter(charId || 'polly', fallbackText, onEnd);
      } else if (onEnd) {
        onEnd();
      }
      return null;
    }
  }
}
