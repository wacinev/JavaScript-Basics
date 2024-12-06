/* Lesson 05.05 - START

Passing Arrays to Functions 

1. Write a function that takes in an array of nouns and adds article 'a' or 'an' to the beginning, so: 'apple' => 'an apple' ; 'banana' => 'a banana'; The function returns a new array of all the items of the input array, but w article 
input: ['apple', 'apricot', 'banana', 'blueberry'] 
output: ['an apple', 'an apricot', 'a banana', 'a blueberry']
*/

// 'aeiou'
// 'umbrella'; // => 'an umbrella'
// 'T-Rex'; // => 'a T-Rex'
// 'Alfa Romeo';
// on your own AM Challenge -- solve this code challenge
// no function, no loop (not yet, anyway) -- just do those 2 words
// "u"
// check if word starts w vowel:
// if
  console.log("an "); // vowel article is "an" (not "a")
// el // first char is NOT a vowel; it's a consonant
  console.log("a "); // consonant article is "a" (not "an")


const fruits = ['apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cherimoya', 'cranberry', 'elderberry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon'];

const cars = ['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Chevrolet', 'Dodge', 'Edsel', 'Eagle', 'Fiat', 'Ford', 'Honda', 'Kia', 'Infiniti', 'Isuzu', 'Mazda', 'Nissan', 'Opel', 'Porsche', 'Rolls Royce', 'Tesla', 'Toyota', 'Volvo'];

let vowels = 'aeiou';
const newArt = [];

for (f1 of fruits){
  if (vowels.includes(f1[0])){
    newArt.push('an ' + f1);
  } else{
    newArt.push('a ' + f1);
  }
}
console.log(newArt);


/*
using a for loop, apply the above algo to the provided arrays, fruits and cars result for each array should be a new array of same words w 'a' or 'an' in front still no function -- just wrap the above code in a loop DO NOT console.log the answers .. but rather accumulate results in a new array loop only ONE array at a time -- your loop should only work on one array so to process both arrays, run the loop twice
*/

// 2. Declare the function and assign it a parameter, **arr**:

function addArticle(words){
  let vowels = 'aeiouAEIOU';
  const articleWords = [];

  articleWords.forEach(wd => {
      if (vowels.includes(wd[0])){
        articleWords.push('an ' + wd);
      } else{
        articleWords.push('a ' + wd);
      }
  })}

  // 'aeiou'
  // []; // new empty array to hold the results
  // fo
    // if
      // "an " // vowel article is "an" (not "a")
    // el // first char is NOT a vowel; it's a consonant
     // "a" (not "an")
// "export" the "answer"
// end addArticle function  

// 3. Call the function twice, passing in a different array of strings each time. Save the return values to variables and log them:
// console.log('articleWords:', articleWords); // ERROR: articleWords is not defined
// console.log('vowels:', vowels); // ERROR: vowels is not defined
console.log();

// a function is an input (parameter/argument) output (return value)
// if a function returns a value

// 4. Save the function call equal to a variable to capture the return value, which is the answer / result of the function 

console.log('fruitsWithArticles:');


console.log('carsWithArticles:');

// 5. Calculate area of all the 3 rooms of a house:
function findAreaOfHouse(rooms) {
  let area = 0;
  for(rm of rooms) {
    area += rm[0] * rm[1];
  }
  return area;
}

const rooms1 = [ [17,12], [18,15], [10,14], [16,10], [13,9], [14,10], [17,13] ];
const rooms2 = [ [22,15], [20,14], [10,17], [16,12] ];

let areaHouse1 = findAreaOfHouse(rooms1)
console.log('house1Area:', areaHouse1);
let areaHouse2 = findAreaOfHouse(rooms2)
console.log('house2Area:', areaHouse2);



// 204

// 270
console.log('masterBedroom:');

// 140
console.log('kitchen:');

console.log('totalHouseArea:');


// 6. Write a function that takes in an array of [L,W] arrays and returns the total area of all rooms (area of the house)


  // loop it and calc area of each of the several rooms as [L,W]

  // return the area of the entire house as one number 
 

console.log('houseArea from roomDimensions1:'); // 

console.log('houseArea from roomDimensions2:'); // 

// END Lesson 05.05
// NEXT: Lesson 05.06

