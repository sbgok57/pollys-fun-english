import React from 'react';
import { CharacterAudio } from '../types/character';
import { useCharacterAudio } from '../hooks/useCharacterAudio';

interface CharacterCardProps {
  character: CharacterAudio;
  onSelect?: (charId: string) => void;
  isSelected?: boolean;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onSelect, isSelected }) => {
  const { isPlaying, currentPhrase, playPhrase } = useCharacterAudio(character.id);

  const handlePhraseClick = (phraseKey: string) => {
    const phrase = character.phrases[phraseKey];
    if (phrase) {
      playPhrase(phraseKey, phrase.audioSrc, phrase.text);
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(character.id)}
      className={`border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-2 ring-indigo-200'
          : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0 flex items-center justify-center text-2xl">
          {character.avatarUrl ? (
            <img src={character.avatarUrl} alt={character.name} className="w-full h-full object-cover" />
          ) : (
            <span>{character.gender === 'boy' ? '👦' : '👧'}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-slate-800 text-base truncate">{character.name}</h3>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
              character.gender === 'boy' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
            }`}>
              {character.gender === 'boy' ? 'Boy' : 'Girl'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 truncate">
            {character.phrases.greeting?.text || 'Ready to speak English!'}
          </p>
        </div>
      </div>

      {/* Phrases voice buttons */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
        {Object.entries(character.phrases).map(([key]) => (
          <button
            key={key}
            onClick={(e) => {
              e.stopPropagation();
              handlePhraseClick(key);
            }}
            className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all flex items-center gap-1.5 ${
              isPlaying && currentPhrase === key
                ? 'bg-amber-500 text-white shadow-sm scale-105'
                : 'bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700'
            }`}
          >
            <span>{isPlaying && currentPhrase === key ? '🔊' : '▶️'}</span>
            <span className="capitalize">{key}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
