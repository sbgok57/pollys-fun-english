/* Locally bundled, exact-word 3D illustrations. Coordinates refer to the
   six-column by three-row atlas in /images/vocabulary-atlas.png. */
const VOCABULARY_ART = Object.freeze({
  pencil: [0, 0], desk: [1, 0], chair: [2, 0], 'school bag': [3, 0], teacher: [4, 0], book: [5, 0],
  mother: [0, 1], father: [1, 1], brother: [2, 1], sister: [3, 1], baby: [4, 1], grandma: [5, 1],
  explorer: [0, 2], compass: [1, 2], notebook: [2, 2], magnifier: [3, 2], map: [4, 2], star: [5, 2]
});
/* Independently generated illustrations are added here only after the
   depicted object has been checked against the exact vocabulary word. */
const VOCABULARY_IMAGE = Object.freeze({
  apple: 'images/vocabulary/apple.png', orange: 'images/vocabulary/orange.png', egg: 'images/vocabulary/egg.png',
  bird: 'images/vocabulary/bird.png', cup: 'images/vocabulary/cup.png',
  bakery: 'images/vocabulary/bakery.png', barn: 'images/vocabulary/barn.png',
  bathroom: 'images/vocabulary/bathroom.png', bin: 'images/vocabulary/bin.png', bridge: 'images/vocabulary/bridge.png',
  boots: 'images/vocabulary/boots.png', calendar: 'images/vocabulary/calendar.png',
  elephant: 'images/vocabulary/elephant.png', hat: 'images/vocabulary/hat.png',
  dress: 'images/vocabulary/dress.png', earth: 'images/vocabulary/earth.png',
  helmet: 'images/vocabulary/helmet.png', house: 'images/vocabulary/house.png',
  pencil: 'images/vocabulary/pencil.png', lamp: 'images/vocabulary/lamp.png',
  leaf: 'images/vocabulary/leaf.png', moon: 'images/vocabulary/moon.png', owl: 'images/vocabulary/owl.png',
  pen: 'images/vocabulary/pen.png', plane: 'images/vocabulary/plane.png',
  planet: 'images/vocabulary/planet.png', potato: 'images/vocabulary/potato.png',
  rainbow: 'images/vocabulary/rainbow.png', penguin: 'images/vocabulary/penguin.png',
  tent: 'images/vocabulary/tent.png', tractor: 'images/vocabulary/tractor.png',
  bed: 'images/vocabulary/bed.png', door: 'images/vocabulary/door.png',
  window: 'images/vocabulary/window.png', room: 'images/vocabulary/room.png',
  boy: 'images/vocabulary/boy.png', family: 'images/vocabulary/family.png',
  shirt: 'images/vocabulary/shirt.png', trousers: 'images/vocabulary/trousers.png',
  sheep: 'images/vocabulary/sheep.png', duckling: 'images/vocabulary/duckling.png',
  tadpole: 'images/vocabulary/tadpole.png', girl: 'images/vocabulary/girl.png',
  lizard: 'images/vocabulary/lizard.png', grass: 'images/vocabulary/grass.png',
  umbrella: 'images/vocabulary/umbrella.png',
  read: 'images/vocabulary/read.png', write: 'images/vocabulary/write.png',
  sing: 'images/vocabulary/sing.png', draw: 'images/vocabulary/draw.png',
  run: 'images/vocabulary/run.png', jump: 'images/vocabulary/jump.png',
  clap: 'images/vocabulary/clap.png', play: 'images/vocabulary/play.png',
  book: 'images/vocabulary/book.png', bus: 'images/vocabulary/bus.png',
  cat: 'images/vocabulary/cat.png', bicycle: 'images/vocabulary/bicycle.png',
  car: 'images/vocabulary/car.png', boat: 'images/vocabulary/boat.png',
  tree: 'images/vocabulary/tree.png', bee: 'images/vocabulary/bee.png',
  ruler: 'images/vocabulary/ruler.png', scissors: 'images/vocabulary/scissors.png',
  table: 'images/vocabulary/table.png', computer: 'images/vocabulary/computer.png',
  whiteboard: 'images/vocabulary/whiteboard.png', crayons: 'images/vocabulary/crayons.png',
  clock: 'images/vocabulary/clock.png', backpack: 'images/vocabulary/backpack.png',
  ball: 'images/vocabulary/ball.png', flowers: 'images/vocabulary/flowers.png',
  rabbit: 'images/vocabulary/rabbit.png', duck: 'images/vocabulary/duck.png',
  cow: 'images/vocabulary/cow.png', goat: 'images/vocabulary/goat.png', hen: 'images/vocabulary/hen.png',
  chick: 'images/vocabulary/chick.png', lamb: 'images/vocabulary/lamb.png', puppy: 'images/vocabulary/puppy.png',
  carrot: 'images/vocabulary/carrot.png', pepper: 'images/vocabulary/pepper.png', onion: 'images/vocabulary/onion.png'
});
function getVocabularyArt(word) {
  const key = String(word || '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (VOCABULARY_IMAGE[key]) return { src: VOCABULARY_IMAGE[key] };
  const position = VOCABULARY_ART[key];
  return position ? { column: position[0], row: position[1] } : null;
}
