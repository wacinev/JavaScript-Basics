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
// 'Corvette C3'
console.log(); // C
console.log(); // v
// string.length

// 2. Get the number of characters in car; spaces count:
console.log('car.length:');

// 3. Get the last character of car, the same way you would get the last item of an array: slice(-1)
console.log(); // 3

// 4. Check if this 'Vette is a "C2" or "C3" model:
console.log('C2:'); // false
console.log('C3:'); // true

// 5. Get the index of the first and last "C":
console.log('first C:'); // 0
console.log('last C:'); // 9

// slice(start_index, end_index)
// split()

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
  
  console.log('cheap', 'hello');
  console.log('cheap', 'peach');
  console.log("kayak");
  console.log("hello");

// END: Lesson 04.04
// NEXT: Lab 04.04
// THEN: Lesson 04.05

