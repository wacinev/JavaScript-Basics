// Lesson 05.04 - FINAL

// for loop vs. "for of" loop:

let str = "Is the Chevrolet Corvette a good sportscar?\nGood? Heck, it's GREAT!";
console.log(str);

/*
challenge: count up all the capital letters 
(there are 10: I, C, C, G, H, G, R, E, A, T)
algo logic: loop the the string, char by char
compare the letter to the lowercase version of itself
if the lowercase version does NOT equal the original, 
then the original letter is uppercase
*/

console.log('Using a for loop to count all capital letters in a string:');

let caps = 0; // counter for counting the capital letters

// for loop: iterate the string, char by char:
for(let i = 0; i < str.length; i++) { 
    // if lowercase version of char is NOT equal to original char
    if(str[i].toLowerCase() != str[i]) { 
        // the char was uppercase to begin with, so increment caps:
        caps++; 
    }
}

console.log(`for loop:\nThe string contains ${caps} capital letters.`);

// Notice that reversing the conditional logic does not work: 
// if uppercasing a letter doesn't change it, it is uppercase to being with, sure -- 
// BUT uppercasing a space doesn't change it, either, so spaces give "false positives"
for(let i = 0; i < str.length; i++) { 
    // is the uppercased version of the char equal to the original char?
    if(str[i].toUpperCase() == str[i]) { 
        caps++; // was uppercase to begin with, so increment caps count by 1
    }
}

// output is wrong! spaces were included in the caps count, since spaces do not change when "uppercased"
console.log(`oops! Spaces counted:\n The string contains ${caps} capital letters.`); 

// challenge: store the uppercase letters in an array; 
// this way, we have a collection of all the actual capital letters, 
// and we can still get the caps count as array.length
const capsArr = [];
for(let i = 0; i < str.length; i++) { 
  // is the uppercased version of the char equal to the original char?
  if(str[i].toLowerCase() != str[i]) { 
    capsArr.push(str[i]); // push the capital letter into the capsArr
  }
}

console.log(`for loop make array of caps:\n The string contains ${capsArr.length} capital letters:\n${capsArr}`); 

console.log('Using a "for..of" loop to count all capital letters in a string:');

const capArr = [];

// for..of 
// for..of loop assigns current array item to a variable, 
// advantage of for..of 
// avoids having to look up item by array index: str[i]
for(char of str) { 
  if(char.toLowerCase() != char) { 
    capArr.push(char);
  }
}
console.log(`for..of make array of caps\n: The string contains ${capArr.length} capital letters:\n${capArr}`); 

console.log('forEach(item, func) method runs a "callback" function on each item in array:')

/*
array.forEach()
forEach(item, func) method runs a "callback" function on each item in array,
with the current array item being the input of the function:
first, make an array from the string, since forEach can only be called on arrays
array needs to be of individual letters
may as well get rid of the spaces first, otherwise they will go into array:
*/

const lettersArr = str.replaceAll(' ', '').split('');
console.log(lettersArr);

/*
call forEach on array, the current letter is "e" (element)
same conditional logic applies.
forEach doesn't return anything, so save output as cap letters to array
*/
const capLettersArr = [];

lettersArr.forEach(function(e) {
  if(e.toLowerCase() != e) {
    capLettersArr.push(e);
  }
});

console.log(`forEach() function make array of caps:\nThe string contains ${capLettersArr.length} capital letters:\n${capLettersArr}`); 

// => version of the above:
const ucArr = []; // uppercase array

lettersArr.forEach(e => {
  if(e.toLowerCase() != e) {
    capLettersArr.push(e);
  }
});

console.log(`forEach() => : The string contains ${ucArr.length} capital letters:\n${ucArr}`); 

/*
even better:
filter() is called on an array and returns a new array containing
all items that return true in a boolean condition
set the method call equal to the array being made:
=> allows it to all be done in ONE line of code:
*/

const UCArr = lettersArr.filter(e => e.toLowerCase() != e);

console.log(`filter() make array of caps:\n: The string contains ${UCArr.length} capital letters:\n${UCArr}`); 




console.log('');
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

/*  Output:
    apple
    banana
    cherry


Limitation of forEach 🚫

1. break in forEach
A key limitation of forEach is the inability to stop or break the loop using traditional control statements like break or return. If you try to use break inside a forEach, you'll encounter a syntax error because break is not applicable within a callback function.

Attempting to Break forEach

Typically, a break statement is used to exit a loop prematurely when a certain condition is met.
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
  if (number > 3) {
    // break; // Syntax Error: Illegal break statement
  }
  console.log(number);
});

/* 
When you try to use break in a forEach loop, JavaScript throws a syntax error. This is because break is designed to be used in traditional loops (like for, while, do...while) and is not recognized within the callback function of forEach.

2. return in forEach
In other loops or functions, the return statement exits the loop or function, returning a value if specified.

In the context of forEach, return does not break out of the loop. Instead, it merely exits the current iteration of the callback function and moves on to the next element in the array.

Attempting to return forEach:
*/

const nums = [1, 2, 3, 4, 5];
nums.forEach(num => {
  if (num === 3) {
    return; // Exits only the current iteration
  }
  console.log(num);
});

/*  Output
    1
    2
    4
    5


In this example, return skips the printing of 3, but the loop continues with the remaining elements...

...Alternatives to forEach for Breaking Loops 💡

Using the for...of Loop
The for...of loop, introduced in ES6 (ECMAScript 2015), offers a modern, clean, and readable way to iterate over iterable objects like arrays, strings ... and more. 

Advantages of for...of:
Flexibility: Allows the use of break, continue, and return statements.
Versatility: Capable of iterating over a wide range of iterable objects, not just arrays.

Practical Example with for...of
Consider the following scenario where we need to process elements of an array until a certain condition is met:
*/

const numz = [1, 2, 3, 4, 5];

for (const n of numz) {
  if (n > 3) {
    break; // Successfully breaks the loop
  }
  console.log(n);
}
/* Output:
   1
   2
   3
*/

// END: Lesson 05.04
// NEXT: Lesson 05.05
