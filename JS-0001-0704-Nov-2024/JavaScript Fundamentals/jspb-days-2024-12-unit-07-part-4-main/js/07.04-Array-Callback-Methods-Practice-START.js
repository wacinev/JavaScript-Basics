// # 07.04 - Extra Map/Filter/Find Practice - START

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


// 2. Do another filter-into-map chaining to make rollups of fruits that begin with a consonant (so, no 'apple', 'apricot' or 'orange', which begin with a vowel).

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

const bigGreens = []; // <--- replace empty array with your code
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

// 5. Create an array with only the names (i.e., it should contain strings, not objects), and only for movies shorter than 2 hours.

// 6. Use **.find()** to create a reference to the movie "Forrest Gump" .

// 7. Use **.find()** to create a reference to the movie released in 1962.

// 8. Use **.find()** to create a reference to the first movie over 2 hours long.

// 9. Use **.findIndex()** to find the index for the movie "Beverly Hills Cop". Use that index to splice it out of the array.

// 10. Create an array that holds descriptions in the following format: '[movie title] came out in [year it was released]. It runs for [run time].' For example: "Black Panther was released in 2018. It runs for 2 hours and 14 minutes." It should correctly deal with singular/plural issues—"Avengers: Endgame" should say "3 hours and 1 minute" (not "minutes") and "Casablanca" should say "1 hour and 42 minutes" (not "hours").

// 11. Use map to get an array of movie objects with a **runTime** property. It should be a string in the following format: "2h 37m". **HINT**: you're going to have to create new objects and return those within the map.
