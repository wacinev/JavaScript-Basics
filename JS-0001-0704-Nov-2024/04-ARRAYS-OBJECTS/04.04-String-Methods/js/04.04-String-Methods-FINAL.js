// Lesson 04.04 - FINAL
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
// string.length

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

// slice(start_index, end_index)
// split()

// split().join() are often chained together
// use case: reverse a string:
// array.reverse() reverses array items
// there is no reverse method for strings, 
// so how could you reverse a string?

// first, split the string into an array of chars
cArr = car.split(''); // ['C', 'o',]
console.log('cArr:', cArr);
// let make = cArr[0]; // Corvette
// ['C', 'o', 'r', 'v', 'e', 't', 't', 'e', ' ', 'C', '3']

// then, reverse the array of chars
cArr.reverse();
console.log('cArr:', cArr);
// ['3', 'C', ' ', 'e', 't', 't', 'e', 'v', 'r', 'o', 'C']

// then join the array back into a string
let carBackwards = cArr.join('');
console.log('carBackwards:', carBackwards); // 3C ettevroC

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

function checkForAnagramOrPalindrome(str1, str2 = "") {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(!str2) { // if str2 is empty, only 1 word passed in, so check for palindrome
      let str1NoSpaces = str1.split(' ').join(''); // 'taco cat' => 'tacocat'
      let revStrNoSpaces = str1NoSpaces.split('').reverse().join(''); 
      if (str1NoSpaces === revStrNoSpaces) { //'acehp'
         return `${str1} is a palindrome`;
      } else {
        return `${str1} is NOT a palindrome`;
      }
    } 
    else { //if str2 is NOT empty, so 2 words passed in, so check for anagram
        if (str1.length != str2.length) {
            return `${str2} and ${str1} are not anagrams`;
        } else { // the  2 words ARE the same length, so check for anagram
            let str1Sorted = str1.split('').sort().join(''); // 'peach' => 'acehp'
            let str2Sorted = str2.split('').sort().join(''); // 'cheap' => 'acehp'
            if (str1Sorted === str2Sorted) {
                return `${str1} and ${str2} is anagram`;
            } else {
                return `${str1} and ${str2} is NOT anagram`;
            }
        }
    }
  }
  
  console.log(checkForAnagramOrPalindrome('cheap', 'hello'));
  console.log(checkForAnagramOrPalindrome('cheap', 'peach'));
  console.log(checkForAnagramOrPalindrome("kayak"));
  console.log(checkForAnagramOrPalindrome("hello"));

  // this version does not use replaceAll(' ', '') to get rid of space(s), because split(' ') removes space when making array
//   function checkPalAna(str1, str2) {
//     if (!str2) { //check if only 1 word in argument
//       let palindrome = str1.split(' ').join(''); //remove space
//       let reversed = palindrome.split("").reverse().join(''); //reverse word
//       if (reversed===palindrome){ //check equality
//         return (`${str1} is palindrome: ` + true);
//       } else return (`${str1} is palindrome: ` + false);
//     } else {
//       let firstW = str1.split('').sort().join(''); //sort word
//       let secondW = str2.split('').sort().join(''); //sort word
//       if (firstW === secondW) { //check if sorted words are equal
//         return (`${str1} & ${str2} is anagram: ` + true);
//       } else return (`${str1} & ${str2} is anagram: ` + false)
//     }
//   }
//   console.log(checkPalAna('cheap', 'peach'));
//   console.log(checkPalAna('bat', 'ball'));
//   console.log(checkPalAna('kayak'));
//   console.log(checkPalAna('apple'));
// replace()

// Copy the make ("Corvette") and model ("C3") to their own variables. 
// We will use the slice method for this, and then split()
// - slice takes a start and end index as its arguments
// - slice has negative indices: -1 is the last character, -2 is next to last
// - slice copies and returns a substring from the start to end range
// - the end index is exclusive, that is, not included in the substring
// - the slice operation does not modify the original string in any way
let spaceIndex = car.indexOf(' '); // 8
console.log('index of space:', spaceIndex);
let firstWord = car.slice(0, spaceIndex); // slice(0,8)
console.log('firstWord via slice:', firstWord);
let lastWord = car.slice(spaceIndex+1); // slice(9)
console.log('lastWord via slice:', lastWord);

// split() is easier:
let carWords = car.split(' ');
firstWord = carWords[0];
console.log('firstWord via split', firstWord);
lastWord = carWords[1];
console.log('lastWord via split:', lastWord);


// Given this string promoting the car:
let carPromo = "The 2023 Chevrolet Corvette furthers its reputation as a high-value everyday supercar. The Corvette provides blistering acceleration, phenomenal handling, a comfortable and well-trimmed cabin and usable cargo space. Chevrolet reintroduces the high-performance Corvette Z06 for the 2023 model year, features a new V8 engine with 670 horsepower. Chevrolet also adds a special appearance package that celebrates the Corvette's 70th anniversary.";

// 9. Get the first half of the promo, so from index 0 to 1/2 the length:
let indexOfMidpoint = carPromo.length/2;
let firstHalfOfPromoText = carPromo.slice(0,indexOfMidpoint);
console.log('firstHalfOfPromoText:', firstHalfOfPromoText);

// Let's get the second sentence. This involves a little fancy slicing:

// 11. Get the start index of the second sentence. 
// This is the index of the first dot, plus 2:
let indexOfFirstDot = carPromo.indexOf('.');
console.log('indexOfFirstDot:', indexOfFirstDot); // 85

// 12. Get the index of the second dot.
let indexOfSecondDot = carPromo.indexOf('.', indexOfFirstDot+1);
console.log('indexOfSecondDot:', indexOfSecondDot); // 85
let secondSentence = carPromo.slice(indexOfFirstDot+2, indexOfSecondDot+1);
console.log('secondSentence:', secondSentence); // 85

// indexOf() method for getting the second instance of a character 

// indexOf('.') gets the index of the first '.', but we want the second period. Pass in startIndex as a second argument. This tells it to start looking for the '.from the startIndex, not from the beginning of the string.

// 13. Get the second sentence slice. Add one to the end to include the period:
let sentence2;
console.log('sentence2:', sentence2); 
// The Corvette provides blistering acceleration, phenomenal handling, a comfortable and well-trimmed cabin and usable cargo space.

// Let's get the last sentence. 

// We need the index of the next-to-last period, as right after this is the starting point of the last sentence. Now, lastIndexOf('.') returns the index of the last period, so we want to tell the method to sample a carPromo that does not end in a period.

// 14. Copy carPromo to itself, minus the last character, that last '.':

// The last period now belongs to the next-to-last sentence.

// 15. Get the index of the last period:
let lastPeriod; 

// 16. The last sentence starts two characters after the last period, so slice from there to the end. Since we are going to the end, there is no second argument, but we do need to put back the period at the end:
let lastSentence; 

// 17. Take a slice of the middle 20 characters. The index of the mid-point is one-half the string length. So, start 10 characters before the mid-point and end 10 charcters after the mid-point:
let mid20Chars; 
// Chevy reintroduces

// Now that we've seen how arrays and strings both have index, length, includes(), indexOf() and lastIndexOf(), let's get into the methods that are unique to strings.

// toUpperCase(), toLowerCase()

// - toUpperCase() returns an uppercase version of the string
// - toLowerCase() returns a lowercase version of the string
// - the original string is unchanged

// 18. Make uppercase and lowercase versions of car:
let carUC;
console.log(carUC); // CORVETTE C3
let carLC;
console.log(carLC); // corvette c3

// replace(a,b), replaceAll(a,b)

// - replace() is called on a string and takes two arguments: a substring to replace and its replacement. 
// - replace() operates on the first instance of the target substring.
// - replaceAll() works like replace() but hits all instances of the target

let palindrome = 'taco cat';
let palindromeNoSpace = palindrome.replaceAll(' ', ''); // tacocat

// 19. Replace "Corv" with "'V". This gives us the car's nickname:
let nickname;
console.log(nickname); // 'Vette

// 20. Use replaceAll() to globally change "Covette" to "'Vette". The method returns a new string, so save it to a variable, either itself or a new var:
let carPromo2 = carPromo.replaceAll('Corvette', '\'Vette')
console.log('carPromo2:', carPromo2); // 'Vette has replaced Corvette
// To modify the original string, save it to itself.
// To also keep the original string, save it to a new var, such as carPromo2.

// 21. Use replaceAll() again to globally change "Chevrolet" to "Chevy". Save carPromo to itself, so that both replacements accumulate in the same string:

console.log(carPromo); // 'Vette & Chevy have replaced Corvette & Chevrolet

// 22. On second thought, we should have one full "Chevrolet Corvette" before reverting to nicknames. Use replace() to restore the first instance of each:

// charAt()

// The charAt() method is called on a string:
// charAt(index) takes an index and returns the character found there. 
// If the index argument exceeds the max index, it returns undefined.
// charAt() is another way of getting characters by index with []

// 23. Get the 100th character of the car promo by index and with charAt()
// v
// v

// split()

// The split() method is called on a string and returns an array.
// It takes an argument (the delimiter) that specifies how the split is done.
// the split() method is often used in conjunction with join() to split a string into an array, perform some operations, and then join the array back into a string.

// 24. Declare a string (a movie quote about a Corvette C3):
let movieQuote = 'Start down low with a 350 cube, three and a quarter horsepower, 4-speed, 4:10 gears, ten coats of competition orange, hand-rubbed lacquer with a dual-plane manifold';

// 25. Call the split() method on the string, saving the result to this array:
const movieQuoteArr = movieQuote.split(', ');
console.log(movieQuoteArr);
// Desired Result: 
// ['Start down low with a 350 cube', 'three and a quarter horsepower', '4-speed', '4:10 gears',
// 'ten coats of competition orange', 'hand-rubbed lacquer with a dual-plane manifold']

// Good Morning: 
// a function can return an object
// a function can take an object as argument

// Review this from Lab 04.03:
// function that returns an object:
function assignUserPswd(fullname) {
  let names = fullname.split(" ");
  let fName = names[0];
  let lName = names[1];
  let username = fName.toLowerCase() + lName[0].toUpperCase() + (fName.length + lName.length);
  // password is last name backwards, followed by length of first name, squared:
  let password = lName.split('').reverse().join('') + (fName.length)**2;
  return {
    firstName: fName,
    lastName: lName,
    username: username,
    password: password
  }
}

console.log(assignUserPswd("Brian McClain"));

// Write this:
// function w object parameter -- takes object argument:
// why would we need to do this? Why not just list out
// params, like so:
function playerBets(player='Pal', bet=10) {
  return `Ok, ${player}! Your bet is ${bet}!`;
}

console.log(playerBets('Brian', 25));
console.log(playerBets(25, 'Brian'));
console.log(playerBets('Brian')); // default to 10 (table minimum bet)
// What if player prefers to bet anonymously?
console.log(playerBets()); // OOPS!
console.log(playerBets(20)); // OOPS!

// CHALLENGE: make params an object
function bet$( { player="Pal", bet=10 } ) {
  return `Ok, ${player}! Your bet is ${bet}!`;
}

// when calling function that has object parameter,
// argument must be an object or key-value pair(s)
console.log(bet$( { bet:50 } )); // OOPS!

// END: Lesson 04.04
// NEXT: Lesson 04.05

