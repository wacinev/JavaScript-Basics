// # 07.04 - Extra Map/Filter/Find Practice - FINAL

// 1. Given this array of fruits, use filter-into-map chaining to make jellybeans of fruits with 5 or fewer letters. The expected output is: 'apple jellybean', 'grape jellybean', 'kiwi jellybean', etc.

const fruits = [
  "apple",
  "apricot",
  "banana",
  "blueberry",
  "cherry",
  "grape",
  "kiwi",
  "lime",
  "lemon",
  "mango",
  "orange",
  "pineapple",
  "strawberry",
];

const smallBeans = fruits
      .filter((fruit) => fruit.length <= 5)
      .map((fruit) => fruit + ' jellybean');

console.log(smallBeans);
//> ['apple jellybean', 'grape jellybean', 'kiwi jellybean', 'lime jellybean', 'mango jellybean']

// 2. Do another filter-into-map chaining to make rollups of fruits that begin with a consonant (so, no 'apple', 'apricot' or 'orange', which begin with a vowel).

const vowels = 'aeiou';
const consonantRollups = fruits
      .filter((fruit) => vowels.includes(fruit[0]) === false)
      .map((fruit) => fruit + ' rollup');

console.log(consonantRollups);
/*
//> [
  "banana rollup",
  "blueberry rollup",
  "cherry rollup",
  "grape rollup",
  "kiwi rollup",
  "lime rollup",
  "lemon rollup",
  "mango rollup",
  "pineapple rollup",
  "strawberry rollup",
]
*/

// HINT: It is more efficient to check to see if a word does NOT start with one of 5 vowels, as opposed to seeing if it starts with one of 21 consonants.

// 3. Given this array, filter and map it so that we keep only each thing whose character length is more than 5, prepending the word "Green" to the start.

const things = [
  "Apple",
  "Arrow",
  "Bean",
  "Coconut",
  "Lantern",
  "Light",
  "Monster",
  "Zone",
];

const bigGreens = things
      .filter((thing) => thing.length > 5)
      .map((thing) => 'Green ' + thing);

console.log(bigGreens); //> ['Green Coconut', 'Green Lantern', 'Green Monster'];

// **Working With Objects**

// The rest of these questions will use the following array of objects:

const movies = [
  { name: "The Wizard of Oz", year: 1939, mins: 101 },
  { name: "Casablanca", year: 1942, mins: 102 },
  { name: "Roman Holiday", year: 1953, mins: 118 },
  { name: "Lawrence of Arabia", year: 1962, mins: 227 },
  { name: "Lilies of the Field", year: 1963, mins: 94 },
  { name: "The Godfather, Part II", year: 1974, mins: 202 },
  { name: "The Shining", year: 1980, mins: 144 },
  { name: "Beverly Hills Cop", year: 1984, mins: 105 },
  { name: "Ghost", year: 1990, mins: 127 },
  { name: "Forrest Gump", year: 1994, mins: 142 },
  { name: "Ali", year: 2001, mins: 157 },
  { name: "Due Date", year: 2010, mins: 95 },
  { name: "Black Panther", year: 2018, mins: 134 },
  { name: "Avengers: Endgame", year: 2019, mins: 181 },
];

// 4. Create an array with only the movies made before 1990.
const classics = movies.filter((movie) => movie.year < 1990);
console.log(classics)

// 5. Create an array with only the names (i.e., it should contain strings, not objects), and only for movies shorter than 2 hours.
const movieTitles = movies.map((movie) => movie.name);
console.log(movieTitles)

// 6. Use **.find()** to create a reference to the movie "Forrest Gump" .
const gump = movies.find((movie) => movie.name === "Forrest Gump")
console.log(gump);

// 7. Use **.find()** to create a reference to the movie released in 1962.
const oldMovie = movies.find((movie) => movie.year === 1962)
console.log(oldMovie);

// 8. Use **.find()** to create a reference to the first movie over 2 hours long.
const longMovie = movies.find((movie) => movie.mins >= 120)
console.log(longMovie);

// 9. Use **.findIndex()** to find the index for the movie "Beverly Hills Cop". Use that index to splice it out of the array.
const i = movies.findIndex((movie) => movie.name === "Beverly Hills Cop")
movies.splice(i, 1);
console.log(movies);

// 10. Create an array that holds descriptions in the following format: '[movie title] came out in [year it was released]. It runs for [run time].' For example: "Black Panther was released in 2018. It runs for 2 hours and 14 minutes." It should correctly deal with singular/plural issues—"Avengers: Endgame" should say "3 hours and 1 minute" (not "minutes") and "Casablanca" should say "1 hour and 42 minutes" (not "hours").
const descriptions = movies.map((movie) => {
  const numHours = Math.floor(movie.mins / 60);
  const numMinutes = movie.mins % 60;
  let hourSuffix = 's';
  let minuteSuffix = 's';
  if (numHours === 1) {
    hourSuffix = ''
  }

  if (numMinutes === 1) {
    minuteSuffix = ''
  }

  return `${movie.name} came out in ${movie.year}. It runs for ${numHours} hour${hourSuffix} and ${numMinutes} minute${minuteSuffix}.`
})

console.log(descriptions)

// 11. Use map to get an array of movie objects with a **runTime** property. It should be a string in the following format: "2h 37m". **HINT**: you're going to have to create new objects and return those within the map.

const moviesWithRuntimes = movies.map((movie) => {
  const numHours = Math.floor(movie.mins / 60);
  const numMinutes = movie.mins % 60;
  const runTimeObject = {runTime: `${numHours}h ${numMinutes}m`}

  return Object.assign({}, movie, runTimeObject)
})

console.log(moviesWithRuntimes);