import { useState, useCallback } from 'react';
import { CharacterSoundManager } from '../utils/audioManager';

export const useCharacterAudio = (characterId: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<string | null>(null);

  const playPhrase = useCallback((phrase: string, audioSrc: string, fallbackText?: string) => {
    setIsPlaying(true);
    setCurrentPhrase(phrase);

    CharacterSoundManager.play(
      audioSrc,
      () => {
        setIsPlaying(false);
        setCurrentPhrase(null);
      },
      fallbackText,
      characterId
    );
  }, [characterId]);

  const stop = useCallback(() => {
    CharacterSoundManager.stop();
    setIsPlaying(false);
    setCurrentPhrase(null);
  }, []);

  return { isPlaying, currentPhrase, playPhrase, stop };
};
