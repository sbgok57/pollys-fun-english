/* Locally bundled, exact-word 3D illustrations. Coordinates refer to the
   six-column by three-row atlas in /images/vocabulary-atlas.png. */
const VOCABULARY_ART = Object.freeze({
  pencil: [0, 0], desk: [1, 0], chair: [2, 0], 'school bag': [3, 0], teacher: [4, 0], book: [5, 0],
  mother: [0, 1], father: [1, 1], brother: [2, 1], sister: [3, 1], baby: [4, 1], grandma: [5, 1],
  explorer: [0, 2], compass: [1, 2], notebook: [2, 2], magnifier: [3, 2], map: [4, 2], star: [5, 2]
});
function getVocabularyArt(word) {
  const key = String(word || '').trim().toLowerCase().replace(/\s+/g, ' ');
  const position = VOCABULARY_ART[key];
  return position ? { column: position[0], row: position[1] } : null;
}
