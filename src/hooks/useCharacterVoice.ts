import { useEffect, useState, useCallback } from 'react';
import { VoiceEngine } from '../lib/audio/VoiceEngine';

/**
 * Pre-fetches a character clip into RAM on mount.
 * hasError becomes true when the engine gives up (circuit open), so the UI can degrade.
 */
export const useCharacterVoice = (audioUrl: string) => {
  const [isReady, setIsReady] = useState(() => VoiceEngine.getInstance().isCached(audioUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let mounted = true;
    setHasError(false);
    VoiceEngine.getInstance()
      .preloadVoice(audioUrl)
      .then((ok) => {
        if (!mounted) return;
        setIsReady(ok);
        setHasError(!ok);
      });
    return () => {
      mounted = false;
    };
  }, [audioUrl]);

  // Stop our voice if the component unmounts while speaking.
  useEffect(() => () => {
    if (isPlaying) VoiceEngine.getInstance().stopCurrent();
  }, [isPlaying]);

  const play = useCallback(() => {
    if (!isReady || hasError) return;
    const started = VoiceEngine.getInstance().playVoice(audioUrl, () => setIsPlaying(false));
    setIsPlaying(started);
    if (!started) setHasError(true);
  }, [audioUrl, isReady, hasError]);

  const stop = useCallback(() => {
    VoiceEngine.getInstance().stopCurrent();
    setIsPlaying(false);
  }, []);

  return { play, stop, isReady, isPlaying, hasError };
};
