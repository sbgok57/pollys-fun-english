/**
 * Character Audio Interface & Multi-Character Voice Pipeline Types
 * Supports both boy and girl mascots with authentic audio clips and fallback mechanism.
 */

export interface CharacterPhrase {
  text: string;
  audioSrc: string; // e.g. /audio/characters/[id]/[phrase].mp3
  durationMs?: number;
}

export interface CharacterAudio {
  id: string;
  name: string;
  gender: 'boy' | 'girl';
  avatarUrl: string;
  badge?: string;
  phrases: {
    [key: string]: CharacterPhrase;
  };
}

export const DEFAULT_CHARACTERS: Record<string, CharacterAudio> = {
  polly: {
    id: 'polly',
    name: 'Polly the Mascot',
    gender: 'girl',
    avatarUrl: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=300&auto=format&fit=crop&q=80',
    badge: 'Classroom Host',
    phrases: {
      greeting: {
        text: "Squawk! Hello pals! I am Polly! Welcome to Cambridge English fun!",
        audioSrc: "/audio/characters/polly/greeting.mp3",
        durationMs: 3800
      },
      praise: {
        text: "Super duper! You are a brilliant English superstar!",
        audioSrc: "/audio/characters/polly/praise.mp3",
        durationMs: 3200
      },
      cheer: {
        text: "Hip hip hooray! Keep going, team!",
        audioSrc: "/audio/characters/polly/cheer.mp3",
        durationMs: 2500
      }
    }
  },
  leo: {
    id: 'leo',
    name: 'Leo the Lion',
    gender: 'boy',
    avatarUrl: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=300&auto=format&fit=crop&q=80',
    badge: 'Brave Explorer',
    phrases: {
      greeting: {
        text: "Roar! Hey there! I am Leo! Ready to explore and learn new words?",
        audioSrc: "/audio/characters/leo/greeting.mp3",
        durationMs: 3600
      },
      praise: {
        text: "Mighty roar! You conquered this challenge!",
        audioSrc: "/audio/characters/leo/praise.mp3",
        durationMs: 2800
      }
    }
  },
  mia: {
    id: 'mia',
    name: 'Mia the Cat',
    gender: 'girl',
    avatarUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&auto=format&fit=crop&q=80',
    badge: 'Gentle Reader',
    phrases: {
      greeting: {
        text: "Purr! Hi everyone! I am Mia! Let's read, laugh, and play together!",
        audioSrc: "/audio/characters/mia/greeting.mp3",
        durationMs: 3500
      },
      praise: {
        text: "Purr-fect pronunciation! Beautiful job!",
        audioSrc: "/audio/characters/mia/praise.mp3",
        durationMs: 2600
      }
    }
  },
  sam: {
    id: 'sam',
    name: 'Sam the Puppy',
    gender: 'boy',
    avatarUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&auto=format&fit=crop&q=80',
    badge: 'Playful Learner',
    phrases: {
      greeting: {
        text: "Woof woof! Hello friends! I am Sam! Let's solve fun puzzles together!",
        audioSrc: "/audio/characters/sam/greeting.mp3",
        durationMs: 3400
      },
      praise: {
        text: "Wagging tail! That was incredible!",
        audioSrc: "/audio/characters/sam/praise.mp3",
        durationMs: 2400
      }
    }
  },
  mickey: {
    id: 'mickey',
    name: 'Mickey Mouse',
    gender: 'boy',
    avatarUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&auto=format&fit=crop&q=80',
    badge: 'Disney Clubhouse',
    phrases: {
      greeting: {
        text: "Hot dog! Oh boy, welcome to our English Clubhouse! Let's have fun together!",
        audioSrc: "/audio/characters/mickey/greeting.mp3",
        durationMs: 4200
      },
      praise: {
        text: "Oh boy! You did it, pal! Outstanding work!",
        audioSrc: "/audio/characters/mickey/praise.mp3",
        durationMs: 3000
      }
    }
  },
  elsa: {
    id: 'elsa',
    name: 'Queen Elsa',
    gender: 'girl',
    avatarUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&auto=format&fit=crop&q=80',
    badge: 'Frozen Magic',
    phrases: {
      greeting: {
        text: "The cold never bothered me anyway! Step into the magic of English!",
        audioSrc: "/audio/characters/elsa/greeting.mp3",
        durationMs: 4000
      },
      praise: {
        text: "Sparkling brilliance! A truly magical answer!",
        audioSrc: "/audio/characters/elsa/praise.mp3",
        durationMs: 3100
      }
    }
  }
};
