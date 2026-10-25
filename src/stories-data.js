/* Original, short English reading practice. 20 story patterns x 10 casts = 200. */
const STORY_CASTS = [
  ['Mia', 'a red ball', 'the park', 'a little robin'],
  ['Leo', 'a blue book', 'the school garden', 'a curious cat'],
  ['Ava', 'a yellow kite', 'the beach', 'a friendly dog'],
  ['Noah', 'a green lunch box', 'the playground', 'a tiny frog'],
  ['Ella', 'a purple hat', 'the library', 'a bright butterfly'],
  ['Omar', 'a shiny shell', 'the river path', 'a sleepy duck'],
  ['Zoe', 'a small notebook', 'the classroom', 'a helpful parrot'],
  ['Arlo', 'a paper boat', 'the pond', 'a gentle turtle'],
  ['Lina', 'a striped scarf', 'the market', 'a soft lamb'],
  ['Ben', 'a little plant', 'the farm', 'a busy bee']
];

const STORY_PATTERNS = [
  { title: 'A Kind Little Surprise', text: (n, o, p, a) => `${n} found ${o} near ${p}. ${a} looked sad because a friend had lost it. ${n} asked around and gave it back. They smiled and played together.`, q: 'What did the kind child do?' },
  { title: 'The Windy Day', text: (n, o, p, a) => `The wind was strong at ${p}. ${n} held ${o} carefully. ${a} showed a quiet place behind a big tree. Soon the wind slowed, and they enjoyed the sunny sky.`, q: 'Where did the friends wait?' },
  { title: 'A New Friend', text: (n, o, p, a) => `${n} took ${o} to ${p}. ${a} came over and said hello. They took turns, listened, and shared a story. By the end, they were happy new friends.`, q: 'How did the friends play together?' },
  { title: 'The Helpful Team', text: (n, o, p, a) => `At ${p}, ${n} saw a small job to do. ${a} helped carry ${o}. They worked together and finished quickly. Their friends thanked them for being helpful.`, q: 'Who helped carry the item?' },
  { title: 'A Clue by the Pond', text: (n, o, p, a) => `${n} noticed a clue near ${p}. A little mark was beside ${o}. ${a} looked carefully and found the owner nearby. Everyone was glad the mystery was solved.`, q: 'What helped solve the mystery?' },
  { title: 'The Sharing Picnic', text: (n, o, p, a) => `${n} went to ${p} with ${o}. ${a} brought a snack to share. They sat on the grass, talked about their day, and put every wrapper in the bin.`, q: 'Where did the friends sit?' },
  { title: 'A Very Small Seed', text: (n, o, p, a) => `${n} planted a seed at ${p}. ${o} made a small place for it. ${a} helped water the soil. They checked every day, and soon a green shoot appeared.`, q: 'What appeared from the soil?' },
  { title: 'The Quiet Library', text: (n, o, p, a) => `${n} visited the library near ${p}. ${a} chose a book, and ${n} opened ${o}. They read quietly and found a picture of a faraway forest.`, q: 'What did the friends find in the book?' },
  { title: 'The Missing Colour', text: (n, o, p, a) => `A picture at ${p} needed one more colour. ${n} used ${o} to add a bright detail. ${a} suggested a little flower. The picture was complete, and both artists felt proud.`, q: 'What did the friends add to the picture?' },
  { title: 'A Safe Way Home', text: (n, o, p, a) => `${n} and ${a} were ready to leave ${p}. They stopped, looked both ways, and held ${o} close. A grown-up helped them cross safely. Then they walked home together.`, q: 'What did they do before crossing?' },
  { title: 'The Rainy-Day Plan', text: (n, o, p, a) => `Rain began to fall near ${p}. ${n} put ${o} away and looked for shelter. ${a} found a dry porch. They read a story together until the clouds moved on.`, q: 'Where did the friends stay dry?' },
  { title: 'A Song for Everyone', text: (n, o, p, a) => `At ${p}, ${n} began a gentle song. ${a} tapped a rhythm beside ${o}. Other children joined in. They sang softly so everyone could learn the words.`, q: 'How did the other children join in?' },
  { title: 'The Little Helper', text: (n, o, p, a) => `${n} saw that ${a} needed help at ${p}. ${n} used ${o} to make a simple sign. Soon a teacher understood and helped too. Working together made the problem easy.`, q: 'Who helped after seeing the sign?' },
  { title: 'A Bright Morning', text: (n, o, p, a) => `The sun came up over ${p}. ${n} packed ${o} for the day. ${a} was waiting by the path. They greeted one another and chose a new place to explore.`, q: 'What did the friends choose to do?' },
  { title: 'The Careful Builder', text: (n, o, p, a) => `${n} wanted to build something at ${p}. ${o} became the first part. ${a} brought another safe piece. They built slowly, checked that it was steady, and proudly showed their friends.`, q: 'How did the friends build safely?' },
  { title: 'A Thank-You Note', text: (n, o, p, a) => `${a} helped ${n} at ${p}. ${n} used ${o} to write a thank-you note. The note said, “Thank you for being kind.” ${a} smiled and kept it safe.`, q: 'What did the note say?' },
  { title: 'The Lost-and-Found Box', text: (n, o, p, a) => `${n} found ${o} at ${p}. ${a} knew about the lost-and-found box. They put the item there and told a grown-up. Later, its owner came to collect it.`, q: 'Where did they put the lost item?' },
  { title: 'A Gentle Animal Visit', text: (n, o, p, a) => `${n} met ${a} near ${p}. They stayed calm and gave the animal space. ${o} stayed in ${n}’s bag. A keeper explained how to care for animals gently.`, q: 'How did the friends behave near the animal?' },
  { title: 'The Best Idea', text: (n, o, p, a) => `At ${p}, the friends could not agree what to do. ${n} put ${o} in the middle and asked everyone for an idea. ${a} listened, then they chose a game that everyone could play.`, q: 'How did the friends choose a game?' },
  { title: 'Goodnight, Little Town', text: (n, o, p, a) => `The day ended at ${p}. ${n} picked up ${o} and said goodbye to ${a}. The sky turned dark, and the first star appeared. It was time to go home and rest.`, q: 'What appeared in the sky?' }
];

const STORIES_200 = STORY_PATTERNS.flatMap((pattern, patternIndex) => STORY_CASTS.map((cast, castIndex) => {
  const idNumber = patternIndex * STORY_CASTS.length + castIndex + 1;
  const [name, object, place, animal] = cast;
  const text = pattern.text(name, object, place, animal);
  return Object.freeze({
    id: `story-${String(idNumber).padStart(3, '0')}`,
    number: idNumber,
    grade: (castIndex + patternIndex) % 4 + 1,
    title: `${pattern.title} · ${name}`,
    text,
    question: pattern.q,
    answer: pattern.q === 'What did the kind child do?' ? 'The child returned the lost item.' : '',
    words: Object.freeze([name, object, place, animal])
  });
}));
