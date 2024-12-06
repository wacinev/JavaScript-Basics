/* Lesson 01.01 - START

In this lesson:
 Variables and their data types:
 string variables
 let vs. var for declaring variables
 numbers variables
 math operators (+, -, *, /, **)
 boolean variables
 ! operator for flipping a boolean (true/false)
 undefined variables
 typeof() method for checking a variable's datatype
 resolving string quote conflicts
   - escaping quotes
   - mixing and matching quotes
   - backticks

________________________________________________________________

Variables and their data types:
A variable is declared with `var` or `let`, altnough `let` is
the more modern syntax and should be used instead of `var`:

________________________________________________________________

string variables
a string is text enclosed in single or double quotes

________________________________________________________________

let vs. var for declaring variables
*/

// 1. Declare a variable with `var` and assign it a string in double quotes:
// v
// console.log();

// 2. Change the value to another string, this time in single quotes:
// p
// console.log(pet);

// One difference between `var` and `let` is that a `var` can be redeclared. 

// 3. Redeclare `pet`:
// v
// console.log(pet);

// A variable declared with `let` cannot be redeclared--it throws an error:

// 4. Declare a variable with `let` and then try to redeclare it:
// l
// console.log();

// let petSound = "Grrr!"; 
// Error: Identifier 'petSound' has already been declared

// To change the value of an existing variable, don't redeclare it. Just set it equal to something else:

// 5. Comment out the second `let petSound`, and then change "Woof!" to "Grrr!" without redeclaring the variable:
// 'Grrr!'  
// console.log(petSound);

// Multiple values can be outputted in the same console.log:

// 6. Output both variables in one console.log:
// console.log(); // dog  Grrr!

// 7. For added clarity, you can label the console output:
// console.log('pet:', 'petSound:');
// pet dog petSound Grrr!

// ________________________________________________________________

// number variables

// A number value can be an integer or a float (decimal). 
// There are no commas in numbers.

// 8. Declare an integer, a float, and a 4-digit number:
// l   // integer
// l   // float
// l   // no comma
console.log(price1, price2, price3);

/* ________________________________________________________________

math operators (+, -, *, /, **)

Naturally, number variables can be used to do math. 
 
   +   addition
   -   subtraction
   *   multiplication
   /   division
   **  exponentiation
   %   remainder (modulo)

You can save the result to a variable or just directly console log the answer.
*/

// 9. Take these basic math operators for a spin:

// console.log(); // 35 + 7 = 42
// console.log(); // 3500 - 35 = 3465
// console.log(); // 35 * 7 = 245
// console.log(); // 3500 / 7 = 500
// console.log(); // 7 * 7 = 49
// console.log(); // 35 % 2 = 1 (35/2 yields remainder of 1)

// ________________________________________________________________

// boolean variables

// A boolean is a variable the value of which can only be true or false. 
// Boolean variables may begin with 'is' to flag them as either-or values.

// 10. Declare two booleans:
// l
// l

// console.log(); // true, false

// ! (NOT) operator flips a boolean
// changing the value of a boolean is known as toggling or flipping it. 
// this can be done by direct assignment, or by setting the variable 
// equal to itself with ! in front.

// 11. Flip isOnline from true to false by direct assignment: 
// i
console.log('isOnline:'); // false

// Flip it again, but this time by putting ! in front of itself:
// i
console.log('isOnline:'); // false
console.log('isOnline:'); // true
// i
console.log('isOnline:'); // false

// ________________________________________________________________

// undefined variables

// A variable can be declared without a value being assigned. 
// The assumption is that a value will be assigned later. 
// Until then, both the value and datatype are `undefined`.

// 12. Declare a variable, but don't assign a value:
// l
console.log('player1:'); // player1 undefined

// ________________________________________________________________

//  typeof() method for checking a variable's datatype

// 13. Declare variables of each of the four major "primitive" types: 
// string, number, boolean and undefined. Then, log the variable name, 
// value and data type:
// 'H
console.log('ketchup:'); // ketchup Heinz string

// 5
console.log('varieties:'); // varieties 57 number

// t
console.log('isFresh:'); // isFresh true boolean

// l
console.log('total:'); // total undefined undefined

// ________________________________________________________________

// Multiple variables can be delared in one line with a single keyword.

// 14. Declare three variables with just one instance of the `let` keyword:
// x
// instead of:
// let x = 1;
// let y = 2;
// let z = 3;

// If all vars have same initial value, just put the value once at the end.
// sc
// instead of:
// let score1 = 0;
// let score2 = 0;
// let score3 = 0;

// Such "one-liner" declarations are common for variables that are not 
// assiged an initial value.

// 15. Declare four variables with just one instance of the `let` keyword, 
// leaving them all without an initial value, so undefined:
// day
// console.log(day); // undefined undefined undefined undefined

// To avoid undefined variables, you can assign a starter value of "" (empty string) 
// or 0. This at least reveals the data type. The value can wait.

// 16. Declare a string and a number with starter values of "" and 0:
// le
// le

// ________________________________________________________________

// changing a variable's datatype 
// JavaScript is "loosely typed", meaning you can change the datatype of a variable.

// 17. Declare a string and change it to a number:
// "$1
// 10

// Just be sure to have a good reason for changing a datatype.

// ________________________________________________________________

// resolving conflicting nested quotes 

// Strings can be enclosed in either double or single quotes, 
// but nested quotes result in errors if the interior quotes 
// conflict with the string "wrapper quotes".

// 18. Declare a string with an apostrophe, enclosed in single quotes. 
// let song = 'Won't Get Fooled Again'; // Unexpected identifier 't'

// escaping quotes

// You can "escape quotes" with a backslash, 
// which causes that bit of punctuation to be ignored.

// 19. Copy paste the error line, and comment out the original. 
//     Resolve the quote conflict by escaping with a backslash:
// Won't Get Fooled Again
console.log(); // Won't Get Fooled Again

// mixing-and-matching quotes

// Another way to resolve a single quote conflict is to switch to double quotes. 
// Likewise you can do the reverse.

// 20. Remove the \ and resolve the quote conflict with double quotes:
// Won't Get Fooled Again
console.log(); // Won't Get Fooled Again

// 21. Wrap these strings in backticks. Now it doesn't matter
//     what quotes are inside:
// Won't Get Fooled Again
// Green means "GO!"

// ________________________________________________________________

// DONE: Lesson 01.01

// NEXT: Lab 01.01

// ________________________________________________________________

// 01.01 Lab - START
/* 
    - Debug these variable names, supplying values of indicated datatype.
    - Log the result, replacing 'VAR' with your variable.
*/

// Example:

// 0. Dubug this string variable:
// let first-name = Bob;
// solution:

let firstName = 'Bob';
console.log('0.', 'firstName', firstName, typeof(firstName));
// 0. firstName Bob string

// ON YOUR OWN: 
// Debug the variables, with values of the indicated datatype.
// In the console.log, replace VAR with your variable
let VAR;
// 1. Dubug this number variable:
// let admission Fee = $10;
console.log('1.', 'VAR', VAR, typeof(VAR));

// 2. Dubug this string variable:
// let #1sportsCar = "Porsche";
console.log('2.', 'VAR', VAR, typeof(VAR));

// 3. Dubug this boolean variable:
// let is Online = FALSE; 
console.log('3.', 'VAR', VAR, typeof(VAR));

// 4. Dubug this number variable:
// let %done = 22.5%;
console.log('4.', 'VAR', VAR, typeof(VAR));

// 5. Dubug this string variable:
// let 26miles = marathon;
console.log('5.', 'VAR', VAR, typeof(VAR));

// 6. Dubug this string variable:
// let $100000-Bar = "candy bar";
console.log('6.', 'VAR', VAR, typeof(VAR));

// 7. Dubug this number variable:
// let first-prize = 7,500;
console.log('7.', 'VAR', VAR, typeof(VAR));

// 8. Dubug this boolean variable:
// let i_Won! = True;
console.log('8.', 'VAR', VAR, typeof(VAR));

// 9. Without changing the the value of x,
//    set the value of y in the following 
//    console.logs to get an answer of 10
//    or -10, as indicated.
let x = 20;
let y;

// y = ?
console.log(x + y); // 10

// y = ?
console.log(x - y); // -10

// y = ?;
console.log(x * y); // 10

// y = ?
console.log(x / y); // -10

// y = ?
console.log(x ** y); // 8000

// 10. Calculate the total cost, as shown in the comment:
let unitCost = 50;
let numUnits = 12;
let shipping = 25;
let totalCost;
console.log('totalCost', totalCost); // 625

// THEN: Lesson 01.02