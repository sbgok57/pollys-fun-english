import { LessonDay } from '../types/lessonPlan';

export const MOCK_GLOBAL_ENGLISH_CURRICULUM: LessonDay[] = [
  // --- STAGE 1: UNIT 1 (Days 1–5) ---
  {
    id: 's1u1-d1',
    date: '2026-09-14',
    academicYear: '2026-2027',
    grade: 'Global English 1',
    unit: 1,
    lessonNumber: 1,
    topic: 'Welcome to School & Greetings',
    curriculumReferences: {
      learnersBookPages: '10–11',
      workbookPages: '8–9',
      teachersResourcePages: 'Unit 1.1 (p. 24–26)',
      photocopiableId: 'Worksheet 1.1'
    },
    tpr: {
      title: 'Simon Says Greetings & Actions',
      targetVocab: ['hello', 'goodbye', 'stand up', 'sit down'],
      physicalAction: 'Wave enthusiastically for hello/goodbye; stand tall and sit briskly on audio command.',
      detailedInstruction: 'Teacher models: "Hello!" with double wave. Class echoes and waves. Play Simon Says: "Simon says stand up!" (Stand up). "Sit down!" (Do not move unless Simon says). Fast rounds for energizing.',
      smartBoardPrompt: 'Display animated wave GIF + 60s countdown timer.'
    },
    digitalResources: [
      { id: 'res-1', title: 'Hello Song Sing-Along', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/tVlcKp3bWH8' },
      { id: 'res-2', title: 'Classroom Greetings Pack', type: 'twinkl', url: 'https://www.twinkl.com/search?q=esl+greetings+primary' },
      { id: 'res-3', title: 'Unit 1 Starter Mystery Tiles', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=esl+greetings' },
      { id: 'res-4', title: 'School Name Tag Activity', type: 'canva', url: 'https://www.canva.com/templates/?query=classroom-name-tag' }
    ]
  },
  {
    id: 's1u1-d2',
    date: '2026-09-15',
    academicYear: '2026-2027',
    grade: 'Global English 1',
    unit: 1,
    lessonNumber: 2,
    topic: 'Classroom Objects & Pointing',
    curriculumReferences: {
      learnersBookPages: '12–13',
      workbookPages: '10–11',
      teachersResourcePages: 'Unit 1.2 (p. 27–29)',
      photocopiableId: 'Worksheet 1.2'
    },
    tpr: {
      title: 'Flyswatter Board Slap Relay',
      targetVocab: ['pencil', 'book', 'eraser', 'chair', 'desk'],
      physicalAction: 'Race to the interactive board or desk to gently tap the designated object with a flyswatter.',
      detailedInstruction: 'Divide class into Team Red and Team Blue. One player from each team stands 3 meters from the board. Teacher shouts: "PENCIL!" Players run forward and slap the correct flashcard. Team scores +1 point.',
      smartBoardPrompt: 'Display 6 large real photos of pencil, book, eraser, desk.'
    },
    digitalResources: [
      { id: 'res-5', title: 'School Supplies Song', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/AS5nhKzaOqo' },
      { id: 'res-6', title: 'Pencil & Book Cutouts', type: 'twinkl', url: 'https://www.twinkl.com/search?q=school+supplies+flashcards' },
      { id: 'res-7', title: 'Classroom Items Speed Baam', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=classroom+objects' }
    ]
  },
  {
    id: 's1u1-d3',
    date: '2026-09-16',
    academicYear: '2026-2027',
    grade: 'Global English 1',
    unit: 1,
    lessonNumber: 3,
    topic: 'Colors in My Pencil Case',
    curriculumReferences: {
      learnersBookPages: '14–15',
      workbookPages: '12–13',
      teachersResourcePages: 'Unit 1.3 (p. 30–32)',
      photocopiableId: 'Worksheet 1.3'
    },
    tpr: {
      title: 'Four Corners Color Dash',
      targetVocab: ['red', 'blue', 'green', 'yellow'],
      physicalAction: 'Walk quickly to the corner of the classroom labeled with the matching color.',
      detailedInstruction: 'Corners 1, 2, 3, 4 are labeled Red, Blue, Green, Yellow. Teacher counts down from 5 while students walk to any corner. Teacher draws a color card with eyes closed. Students in that corner do 3 star jumps and say "We are (color)!"',
      smartBoardPrompt: 'Color wheel spinner that stops randomly on one color.'
    },
    digitalResources: [
      { id: 'res-8', title: 'I See Something Blue Song', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/jYAWf8Y91hA' },
      { id: 'res-9', title: 'Color Matching Cards', type: 'twinkl', url: 'https://www.twinkl.com/search?q=colors+flashcards' },
      { id: 'res-10', title: 'Rainbow Color Swapper', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=colors' }
    ]
  },
  {
    id: 's1u1-d4',
    date: '2026-09-17',
    academicYear: '2026-2027',
    grade: 'Global English 1',
    unit: 1,
    lessonNumber: 4,
    topic: 'Numbers 1 to 10 & Counting',
    curriculumReferences: {
      learnersBookPages: '16–17',
      workbookPages: '14–15',
      teachersResourcePages: 'Unit 1.4 (p. 33–35)',
      photocopiableId: 'Worksheet 1.4'
    },
    tpr: {
      title: 'Clap, Jump and Count',
      targetVocab: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
      physicalAction: 'Clap hands, stomp feet, and jump while counting rhythmically in unison.',
      detailedInstruction: 'Teacher holds up numeral cards. If card shows 4: whole class claps 4 times ("1, 2, 3, 4!"). If card shows 7: students jump 7 times. Pair challenge: partners count each others pencils.',
      smartBoardPrompt: 'Interactive number bubble popping engine.'
    },
    digitalResources: [
      { id: 'res-11', title: 'Count and Move 1–10', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/Aq4UAss33qA' },
      { id: 'res-12', title: 'Number Traceable Strips', type: 'canva', url: 'https://www.canva.com/templates/?query=numbers-tracing' }
    ]
  },
  {
    id: 's1u1-d5',
    date: '2026-09-18',
    academicYear: '2026-2027',
    grade: 'Global English 1',
    unit: 1,
    lessonNumber: 5,
    topic: 'Unit 1 Review & Showcase',
    curriculumReferences: {
      learnersBookPages: '18–19',
      workbookPages: '16–17',
      teachersResourcePages: 'Unit 1 Review & Assessment (p. 36–38)',
      photocopiableId: 'Progress Check 1'
    },
    tpr: {
      title: 'Magic Bag Discovery Routine',
      targetVocab: ['school bag', 'pencil', 'book', 'hello', 'goodbye'],
      physicalAction: 'Reach blindly into a cloth bag, feel an object, and describe it physically before revealing.',
      detailedInstruction: 'Teacher passes mystery velvet bag. Selected student closes eyes, puts hand inside, feels item: "It is a pencil!" Pulls it out and shows the class. Class cheers: "Yes! A red pencil!"',
      smartBoardPrompt: 'Full 16-Tile Baamboozle Team Arena competition.'
    },
    digitalResources: [
      { id: 'res-13', title: 'Unit 1 Grand Review Arena', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=cambridge+english+1' },
      { id: 'res-14', title: 'Certificate of Achievement', type: 'canva', url: 'https://www.canva.com/templates/?query=student-certificate' }
    ]
  },

  // --- STAGE 2: UNIT 1 (Days 6–10) ---
  {
    id: 's2u1-d1',
    date: '2026-09-21',
    academicYear: '2026-2027',
    grade: 'Global English 2',
    unit: 1,
    lessonNumber: 1,
    topic: 'Look What I Can Do! (Action Verbs)',
    curriculumReferences: {
      learnersBookPages: '10–11',
      workbookPages: '8–9',
      teachersResourcePages: 'Unit 1.1 (p. 22–24)',
      photocopiableId: 'Worksheet 2.1'
    },
    tpr: {
      title: 'Action Mime & Guessing Circle',
      targetVocab: ['swim', 'jump', 'dance', 'run', 'sing', 'hop'],
      physicalAction: 'Silent dramatic physical pantomime of action verbs for peers to guess.',
      detailedInstruction: 'Teacher whispers secret verb to volunteer: "dance". Student acts out ballet or hip-hop dancing silently. First student to shout "You can dance!" steps up to act out the next verb.',
      smartBoardPrompt: 'Action verb GIPHY carousel + speed buzzer.'
    },
    digitalResources: [
      { id: 'res-15', title: 'Action Verbs Action Song', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/dUXk8Nc5qQ8' },
      { id: 'res-16', title: 'Can You Do It? Flashcards', type: 'twinkl', url: 'https://www.twinkl.com/search?q=action+verbs+esl' },
      { id: 'res-17', title: 'Verb Mastery Team Showdown', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=action+verbs' }
    ]
  },
  {
    id: 's2u1-d2',
    date: '2026-09-22',
    academicYear: '2026-2027',
    grade: 'Global English 2',
    unit: 1,
    lessonNumber: 2,
    topic: "Expressing Abilities: Can & Can't",
    curriculumReferences: {
      learnersBookPages: '12–13',
      workbookPages: '10–11',
      teachersResourcePages: 'Unit 1.2 (p. 25–27)',
      photocopiableId: 'Worksheet 2.2'
    },
    tpr: {
      title: 'Thumbs Up, Thumbs Down Jump',
      targetVocab: ['can', "can't", 'fly', 'climb', 'read', 'swim'],
      physicalAction: 'Two thumbs up with high jump for "Yes I can"; cross arms across chest for "No I can\'t".',
      detailedInstruction: 'Teacher asks: "Can penguins fly?" Students cross arms and crouch low. "Can fish swim?" Students jump high with double thumbs up shouting "Yes they can!" Fast-paced questions build listening reflex.',
      smartBoardPrompt: 'Can vs Can\'t interactive sorting table on smartboard.'
    },
    digitalResources: [
      { id: 'res-18', title: 'Yes I Can! Animal Song', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/_Ir0Mc6Qilo' },
      { id: 'res-19', title: 'Can / Can\'t Ability Board Game', type: 'twinkl', url: 'https://www.twinkl.com/search?q=can+cant+board+game' }
    ]
  },
  {
    id: 's2u1-d3',
    date: '2026-09-23',
    academicYear: '2026-2027',
    grade: 'Global English 2',
    unit: 1,
    lessonNumber: 3,
    topic: 'Phonics Studio: Long /eɪ/ (cake, rain, day)',
    curriculumReferences: {
      learnersBookPages: '14–15',
      workbookPages: '12–13',
      teachersResourcePages: 'Unit 1.3 (p. 28–30)',
      photocopiableId: 'Phonics Sheet 1'
    },
    tpr: {
      title: 'Phonics Sound Hopscotch',
      targetVocab: ['cake', 'rain', 'play', 'stay', 'make', 'game'],
      physicalAction: 'Hop with both feet onto floor tiles when hearing the long /eɪ/ sound.',
      detailedInstruction: 'Teacher reads a list of words: "dog, CAT, CAKE!". When students hear the target sound /eɪ/, they hop forward and mimic holding an umbrella ("rain") or blowing out candles ("cake").',
      smartBoardPrompt: 'Tongue Twister Studio: "Bake a big cake on a rainy day!" with 0.8x / 1.0x playback.'
    },
    digitalResources: [
      { id: 'res-20', title: 'Long A Phonics Digraphs Song', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/5m0d5k1X7y4' },
      { id: 'res-21', title: 'Long A Sound Sorting Mats', type: 'twinkl', url: 'https://www.twinkl.com/search?q=long+a+sound+mats' }
    ]
  },
  {
    id: 's2u1-d4',
    date: '2026-09-24',
    academicYear: '2026-2027',
    grade: 'Global English 2',
    unit: 1,
    lessonNumber: 4,
    topic: 'Playground Games & Team Sports',
    curriculumReferences: {
      learnersBookPages: '16–17',
      workbookPages: '14–15',
      teachersResourcePages: 'Unit 1.4 (p. 31–33)',
      photocopiableId: 'Worksheet 2.4'
    },
    tpr: {
      title: 'Pass the Ball & Speak Prompt',
      targetVocab: ['football', 'tennis', 'tag', 'catch', 'throw', 'kick'],
      physicalAction: 'Soft foam ball toss across a circle while delivering target language sentences.',
      detailedInstruction: 'Students stand in a circle. Teacher tosses a soft sponge ball to a student: "Can you kick a ball?" Student catches and replies: "Yes, I can kick a ball!" Then tosses to next peer with a new verb.',
      smartBoardPrompt: '60-second interactive timer + team scoreboard (+1/-1).'
    },
    digitalResources: [
      { id: 'res-22', title: 'Sports & Games for Kids', type: 'youtube', url: 'https://www.youtube-nocookie.com/embed/L_A_HjHZxfI' },
      { id: 'res-23', title: 'Sports Day Interactive Baamboozle', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=sports+esl' }
    ]
  },
  {
    id: 's2u1-d5',
    date: '2026-09-25',
    academicYear: '2026-2027',
    grade: 'Global English 2',
    unit: 1,
    lessonNumber: 5,
    topic: 'Unit 1 Talent Show & Self-Assessment',
    curriculumReferences: {
      learnersBookPages: '18–19',
      workbookPages: '16–17',
      teachersResourcePages: 'Unit 1 Project & Assessment (p. 34–36)',
      photocopiableId: 'Unit 1 Progress Test'
    },
    tpr: {
      title: 'Classroom Mini Talent Showcase',
      targetVocab: ['I can', 'Look at me', 'bravo', 'clap', 'cheer'],
      physicalAction: 'Students step onto the front stage to show one simple talent (humming, drawing, jumping, balancing).',
      detailedInstruction: 'Each student presents: "I can balance on one foot for 5 seconds!" Student demonstrates while whole class counts to 5. Audience enthusiastically applauds: "Bravo! Fantastic!"',
      smartBoardPrompt: 'Fanfare cheering sound effect + mascot Mickey cheer.'
    },
    digitalResources: [
      { id: 'res-24', title: 'Talent Show Baamboozle Special', type: 'baamboozle', url: 'https://www.baamboozle.com/classic/search?q=talent+show' },
      { id: 'res-25', title: 'Star Student Badge Certificate', type: 'canva', url: 'https://www.canva.com/templates/?query=star-student-certificate' }
    ]
  }
];
