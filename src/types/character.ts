/** Optional teacher-provided mascot metadata for future activities.
 * The current site does not include character voice recordings or assets.
 */
export interface CharacterPhrase {
  text: string;
  audioSrc?: string;
}

export interface CharacterAudio {
  id: string;
  name: string;
  avatarUrl?: string;
  phrases?: Record<string, CharacterPhrase>;
}
