// array.forEach(function(item))
// The forEach() method is called on an array. 
// It runs a function on each item in an array, one by one. 
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// 1. Start with an array of numbers, 
// and loop through it, logging each 
// item SQUARED to the console:
const nums = [3,4,5,6,7,8,9];


// Refactor the above using forEach. 
// The method is called on the array and 
// takes a callback that has the current
// array item as its argument
// like map and filter, forEach returns a new array

// nums.forEach(function(e) {
//   squaredNums.push(e ** 2);
// });
// arrow function version of the above

console.log('arrow func squaredNums:');

// add up the value of all numbers in nums array
let sumNums; // store the sum in th sumNums
// [3,4,5,6,7,8,9]

console.log('for loop: sumNums:', sumNums); // sumNums: 42

// reset var for a fresh count
// nums.forEach(function(e) {
//   sumNums += e;
// });


console.log('arrow func forEach: sumNums:'); 
// arrow func forEach: sumNums: 42

// find() method
// The find() method serves a narrowly specific role: it find the first item in an array that meets a condition, and it returns that item, only. It does not look for any more items that meet the condition.

// If NO item that satisfies the is found, the find() method returns undefined.
// First, let's emulate the "find" algorithm using a for loop.

// 24. Given this digits array, set up a for loop that iterates over the array:
// Each time through the loop, pass the current item to an if-statement that uses the modulus operator to see if the current number, digits[i], divided by 2 yields a remainder of 1:
// find the first odd number
// If the condition returns true, the number is odd, so return the odd number, which quits the function:
let digits = [30,54,72,89,110,137,189];
let bingoNums = [12,24,32,46,55,62,70];
let evenNums = [12,24,32,46,62,70];


    // if current number is odd
      // return first odd & quit func
  // 'no odd num found';

let oddDigit;
console.log('oddDigit:', oddDigit);

let oddBingoNum;
console.log('oddBingoNum:', oddBingoNum);

let oddNum;
console.log('oddNum:', oddNum);

// find() method instead of for loop
// Now let's use the find() method to hunt for the first odd number:

// let oddN = digits.find(function(e) {
//   return e % 2 == 1;
// });
// let oddN = digits.find(e => {
//   if(e % 2 == 1) {
//     return e;
//   }
// });
// if you don't find it, return negative 1
oddNum;
// 'no odd nums');
console.log('oddN:', oddN);

let odd;
// 'no odd nums');
console.log('odd:', odd);

// Call the find() method on the digits array. Since the method returns a value, set the call equal to a variable to store the return value:

// lastIndexOf()
// To return the index of the first instance of a target value, use findIndex() rather than find().
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];

let index;
console.log('index:', index);


// Use findIndex() to find the position of the first odd number in the digits array:


// Make sure that the findIndex() method returns -1 by changing the digits array values so that there are no odd numbers.