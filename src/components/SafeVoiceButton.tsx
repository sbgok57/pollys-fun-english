import React from 'react';
import { useCharacterVoice } from '../hooks/useCharacterVoice';

interface Props {
  audioUrl: string;
  characterName: string;
}

export const SafeVoiceButton: React.FC<Props> = ({ audioUrl, characterName }) => {
  const { play, stop, isReady, isPlaying, hasError } = useCharacterVoice(audioUrl);

  if (hasError) {
    return (
      <button disabled className="bg-red-100 text-red-500 px-4 py-2 rounded-full cursor-not-allowed opacity-50 flex items-center gap-2">
        <span className="text-xl">⚠️</span> Ses Yüklenemedi
      </button>
    );
  }

  return (
    <button
      onClick={isPlaying ? stop : play}
      disabled={!isReady}
      className={`relative px-6 py-3 rounded-full font-bold text-white transition-all duration-300 transform shadow-lg flex items-center gap-2
        ${!isReady ? 'bg-slate-400 cursor-wait' : 'bg-indigo-600 hover:bg-indigo-500 hover:scale-105 active:scale-95'}
      `}
    >
      {/* Dalga (Ripple) Efekti */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-indigo-400 animate-ping opacity-75"></span>
      )}
      
      <span className="relative z-10 text-xl">
        {!isReady ? '⏳' : isPlaying ? '⏹' : '▶️'}
      </span>
      <span className="relative z-10">
        {!isReady ? 'Yükleniyor...' : isPlaying ? `${characterName} Konuşuyor...` : `${characterName} Sesini Dinle`}
      </span>
    </button>
  );
};
