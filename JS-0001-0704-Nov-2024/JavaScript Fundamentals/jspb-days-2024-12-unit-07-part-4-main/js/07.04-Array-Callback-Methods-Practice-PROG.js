// # 07.04 - Extra Map/Filter/Find Practice - PROG

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

// const fru = fruits.filter(function (fru5Lett) {
//   if (fru5Lett.length <= 5){
//     return fru5Lett
//   } 
// }).map(function (fru5Lett2) {
//   return fru5Lett2 + ' jellybean'
// })

const fru = fruits
  .filter((fru5Lett) => (fru5Lett.length <= 5))
  .map((fru5Lett2) => fru5Lett2 + ' jellybean');

console.log(fru)

// 2. Do another filter-into-map chaining to make rollups of fruits that begin with a consonant (so, no 'apple', 'apricot' or 'orange', which begin with a vowel).

// HINT: It is more efficient to check to see if a word does NOT start with one of 5 vowels, as opposed to seeing if it starts with one of 21 consonants.

const c_fruits = fruits
  .filter((consonant) => (!'aeiou'.includes(consonant[0])))
  .map((consonants) => consonants + ' rollup')
console.log(c_fruits)
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

// const bigGreens = things.filter(function (green){
//   if (green.length > 5) {
//     return green;
//   }
// }).map(function (greens){
//   return 'green ' + greens
// })

const bigGreens = things
  .filter((greens) => greens.length > 5)
  .map((green) => "Green " + green) 
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
const pre2k = movies.filter(function (ninety){
  if (ninety.year < 1990) {
    return ninety;
  }
})
console.log(pre2k)
// 5. Create an array with only the names (i.e., it should contain strings, not objects), and only for movies shorter than 2 hours.
const shortFilms = movies.filter(function(twoHours){
  if (twoHours.mins < 120){
    return twoHours;
  }
}).map(function(twoHour){
  return twoHour.name
})
console.log(shortFilms)
// 6. Use **.find()** to create a reference to the movie "Forrest Gump" .
const gump = movies.find((element) => element.name === 'Forrest Gump');
console.log(gump)

// 7. Use **.find()** to create a reference to the movie released in 1962.
const sixty = movies.find((e) => e.year === 1962)
console.log(sixty);

// 8. Use **.find()** to create a reference to the first movie over 2 hours long.
const longMovie = movies.find((mov) => mov.mins > 120)
console.log(longMovie);

// 9. Use **.findIndex()** to find the index for the movie "Beverly Hills Cop". Use that index to splice it out of the array.
const bhc = movies.findIndex((elem) => elem.name.startsWith('Beverly'))
movies.splice(bhc,1)
console.log(bhc);
console.log(movies);


// 10. Create an array that holds descriptions in the following format: '[movie title] came out in [year it was released]. It runs for [run time].' For example: "Black Panther was released in 2018. It runs for 2 hours and 14 minutes." It should correctly deal with singular/plural issues—"Avengers: Endgame" should say "3 hours and 1 minute" (not "minutes") and "Casablanca" should say "1 hour and 42 minutes" (not "hours").
const descriptions = movies.map((e) => {
  let h = Math.floor((e.mins / 60))
  let m = (e.mins % 60)
  e.runTime = `${h}h ${m}m`

  if (h > 1 && m > 1){
    return `${e.name} came out in ${e.year}. It runs for ${h} hours and ${m} minutes.`
  } else if (h > 1 && m == 1){
    return `${e.name} came out in ${e.year}. It runs for ${h} hours and ${m} minute.`
  } else if (h == 1 && m > 1){
    return `${e.name} came out in ${e.year}. It runs for ${h} hour and ${m} minutes.`
  } else {
    return `${e.name} came out in ${e.year}. It runs for ${h} hour and ${m} minute.`
  }

})
console.log(descriptions)

// 11. Use map to get an array of movie objects with a **runTime** property. It should be a string in the following format: "2h 37m". **HINT**: you're going to have to create new objects and return those within the map.
const runTime = movies.map(function (time) {
  let h = Math.floor((time.mins / 60));
  let m = (time.mins % 60);

  const movieCopy = {...time}

  movieCopy.runTime = `${h}h ${m}m`;
  return movieCopy;
})
console.log(runTime);
console.log(movies);
