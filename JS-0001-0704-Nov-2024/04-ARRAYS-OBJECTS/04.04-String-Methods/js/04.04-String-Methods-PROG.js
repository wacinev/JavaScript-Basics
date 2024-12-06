// Lesson 04.04 - START
// string methods

// string methods that double as array methods:
// includes(), indexOf(), lastIndexOf(), slice(),
// other string methods:
// toUpperCase(), toLowerCase(), replace(), replaceAll(), charAt(), split()

/* 
String are kind of like arrays of characters; both structures have:
- index position, with the first item (or character) at index 0
- length property, which returns the number of items (or characters)
- includes(X) method, which checks if X exists in the array or string 
- slice(A,B) method, which copies from index A to B (not including B)
- indexOf(X) method, which gets the index of the first instance of X
- lastIndexOf(X) method gets the index of the last instance of X

Naturally, there are also many differences between strings and arrays:
- strings can only store one value at a time ( pet = 'cat' ), whereas
  arrays can store many values at a time ( pets = ['cat', 'dog'] )
- const strings cannot be changed, whereas the items of const arrays 
  can be changed; the const part being "once an array, always an array"
- strings have methods not found in arrays, and vice-versa
*/

// string[index]

// 1. Declare a string, and then get the first and fourth characters:
let car = 'Corvette C3';

console.log(car[0]); // C
console.log(car[3]); // v

// 2. Get the number of characters in car; spaces count:

console.log('car.length:', car.length);

// 3. Get the last character of car, the same way you would get the last item of an array: slice(-1)
console.log(car.slice(-1)); // 3

// 4. Check if this 'Vette is a "C2" or "C3" model:
console.log('C2:', car.includes('C2')); // false
console.log('C3:', car.includes('C3')); // true

// 5. Get the index of the first and last "C":
console.log('first C:', car.indexOf('C')); // 0
console.log('last C:', car.lastIndexOf('C')); // 9

// slice(start_index, end_index_exclusive)
// challenge: using slice() get the 'vette' in corvette:
console.log(`'vette' in corvette:`, car.slice(3,8));
// bonus: get the 'vette' in corvette without knowing where "Corvette" is in the string
let p1 = "Introducing the new 2025 Corvette Stingray";
console.log('"vette" in "corvette":', p1.slice(p1.indexOf('Corvette')+3,p1.indexOf('Corvette')+8))
let p2 = "The very fast 2025 Corvette Stingray is spectactular";
console.log('"vette" in "corvette":', p2.slice(p2.indexOf('Corvette')+3,p2.indexOf('Corvette')+8))

// split()

// const array = string.split()
//split car into array of letters
const carChars = car.split();
// if no delimiter is passed to split() you get a one-item array of the whole string
// which is probably not what you had in mind:
console.log ('carChars:', carChars);

// split the car string into array of individual words
// ['Corvette' ]
const carCharsArr = car.split("");
console.log('carCharArr:', carCharsArr);

//split the car string into array of individual words const car Words
const carWordsArr = car.split(" ");
console.log('carWordsArr:', carWordsArr);

//split().join() are often chained together
//reversing a string
let veggie = "cauliflower"
// console.log(veggie.reverse()); // does not exist

//1. split string into array of chars
const veggieChar = veggie.split("");
console.log('veggieChars:' ,veggieChar);
//2. reverse the array of chars
veggieChar.reverse();
console.log('veggieChars:' ,veggieChar);

//3. join array back into a string 
let backwardsVeggie = veggieChar.join("");
console.log('backwardsVeggieChars:' ,backwardsVeggie);


// split().join() are often chained together
// use case: reverse a string:
// array.reverse() reverses array items
// there is no reverse method for strings, 
// so how could you reverse a string?

// first, split the string into an array of chars
// ['C', 'o',]
console.log('cArr:');
// let make = cArr[0]; // Corvette
// ['C', 'o', 'r', 'v', 'e', 't', 't', 'e', ' ', 'C', '3']

// then, reverse the array of chars

console.log('cArr:');
// ['3', 'C', ' ', 'e', 't', 't', 'e', 'v', 'r', 'o', 'C']

// then join the array back into a string

console.log('carBackwards:'); // 3C ettevroC

// Challenge in lesson 04.04 - String Methods
/* CHALLENGE write a function checkForAnagramOrPalindrome() 
your solution will require various JavaScript array and string methods:
string.split(), array.join(), string.replaceAll(), array.sort(), array.reverse()
function checkForAnagramOrPalindrome(str1, str2)
  - has 2 parameters
  - takes 1 OR 2 strings as arguments
.    -- if 2 words (both arguments) is passed in, check for anagram
.    -- if only 1 word argument is passed in, check for palindrome
  - checks if the words are anagrams, palindromes or neither
        anagram ex: 'cheap', 'peach' | 'silent' and 'listen'
        palindrome ex: 'kayak' | 'racecar' | 'taco cat' | 'a man a plan a canal panama'
        in the case of multi-word palindromes, you must delete the space(s), 
        which requires using replaceAll(' ', '')
function return values:
if 2 words are anagram: return 'peach and cheap are anagram'
if 2 words are NOT anagram, return 'bat and ball are not anagram'
if 1 word is palindrome: return 'kayak is palindrome'
if 1 word is not palindrome: return 'apple is not a palindrome'
*/
  
function wordalyze(str1,str2) {
  let str1B, str2B;
  if (typeof(str1) == 'string') {
    str1B = str1.toLowerCase();
  }
  if (typeof(str2) == 'string') {
    str2B = str2.toLowerCase();
  }
  if (!str1 && !str2) {
    return 'Invalid input, Enter one or two strings to analyze'
  }
  if (str1 == str2) {
    return 'Invalid input Words are the same'
  }
  if (str1 && str2) {
    const str1Chars = str1.split("");
    const str2Chars = str2.split("");
    str1Chars.sort();
    str2Chars.sort();
    let str1ABC = str1Chars.join();
    let str2ABC = str2Chars.join();

    if (str1ABC === str2ABC) {
      return `${str1} and ${str2} are anagrams`
    } else {
      return `${str1} and ${str2} are NOT anagrams`
    }
  } else {
    const str1Chars = str1B.split("");
    const revStr1Arr = str1Chars.toReversed();
    let str1ABC = str1Chars.join("");
    let str1ABCRev = revStr1Arr.join("");
    if (str1ABC === str1ABCRev) {
      return `${str1} and ${str2} are palindrome`
    } else {
      return `${str1} and ${str2} are NOT palindrome`
    }
  }
}
  console.log(wordalyze());
  console.log(wordalyze('cheap', 'hello'));
  console.log(wordalyze('cheap', 'peach'));
  console.log(wordalyze('cheap', 'Peach'));
  console.log(wordalyze('bat', 'ball'));
  console.log(wordalyze("kayak"));
  console.log(wordalyze("hello"));

// END: Lesson 04.04
// NEXT: Lab 04.04
// THEN: Lesson 04.05

function isAnagram(str1, str2){
  if (str1 && str2) {
    const str1Chars = str1.split("");
    const str2Chars = str2.split("");
    for(i=0; i<str1Chars.length; i++){

    }
} else {

}
}
//includes compares a value and searches the array