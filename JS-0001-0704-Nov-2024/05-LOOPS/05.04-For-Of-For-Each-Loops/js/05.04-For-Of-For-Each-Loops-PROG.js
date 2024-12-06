// Lesson 05.04 - START

// for loop vs. "for of" loop:

let carMsg = "Is the Chevrolet Corvette a good sportscar?\nGood? Heck, it's GREAT!";
console.log(carMsg);

/*
challenge: count up all the capital letters 
(there are 10: I, C, C, G, H, G, R, E, A, T)
algo logic: loop the the string, char by char
compare the letter to the lowercase version of itself
if the lowercase version does NOT equal the original, 
then the original letter is uppercase
*/

// loop the string char by char

let UCs = "";
carMsg = carMsg.replace(/[^\w_]/g, "")
for(char of carMsg){
    if (char.toUpperCase() == char) {
        UCs += char;
    }
}
console.log('Using a for loop to count all capital letters in a string:', UCs, 'num of ', UCs.length);

// counter for counting the capital letters

// for loop: iterate the string, char by char:
// fo
    // if lowercase version of char is NOT equal to original char
    // if
        // the char was uppercase to begin with, so increment caps:


console.log(`for loop:\nThe string contains capital letters.`);

// Notice that reversing the conditional logic does not work: 
// if uppercasing a letter doesn't change it, it is uppercase to being with, sure -- 
// BUT uppercasing a space doesn't change it, either, so spaces give "false positives"
// fo
    // is the uppercased version of the char equal to the original char?
    // if
        // was uppercase to begin with, so increment caps count by 1


// output is wrong! spaces were included in the caps count, since spaces do not change when "uppercased"
console.log(`oops! Spaces counted:\n The string contains capital letters.`); 

// challenge: store the uppercase letters in an array; 
// this way, we have a collection of all the actual capital letters, 
// and we can still get the caps count as array.length
// const ca
// for
  // is the uppercased version of the char equal to the original char?
//   if
   // push the capital letter into the capsArr


console.log(`for loop make array of caps:\n The string contains capital letters:\n`); 

console.log('Using a "for..of" loop to count all capital letters in a string:');

// []

// for..of 
// for..of loop assigns current array item to a variable, 
// advantage of for..of 
// avoids having to look up item by array index: str[i]
// fo
//   if
    // ca

console.log(`for..of make array of caps\n: The string contains capital letters:\n`); 

console.log('forEach(item, func) method runs a "callback" function on each item in array:')

/*
array.forEach()
forEach(item, func) method runs a "callback" function on each item in array,
with the current array item being the input of the function:
first, make an array from the string, since forEach can only be called on arrays
array needs to be of individual letters
may as well get rid of the spaces first, otherwise they will go into array:
*/

//write a loop that iterates in an array of first names and passes each item to a function:
const firstNames = ['Amy', 'Bob', 'Cal', 'Dan', 'Eva', 'Fay', 'Guo']

for (fname of firstNames){
    greetByName(fname);
}

function greetByName(firstName){
    console.log(`Hi, ${firstName}!`);
}

// array.forEach(funciton(e) {
// console.log(`Hi, ${e}`)
// });
firstNames.forEach(function(fName){
    console.log(`Howdy, ${fName}`)
});
// const letters
console.log();

/*
call forEach on array, the current letter is "e" (element)
same conditional logic applies.
forEach doesn't return anything, so save output as cap letters to array
*/
// const capL



console.log(`forEach() function make array of caps:\nThe string contains capital letters:\n`); 

// => version of the above:
// []; // uppercase array



console.log(`forEach() => : The string contains capital letters:\n$`); 

/*
even better:
filter() is called on an array and returns a new array containing
all items that return true in a boolean condition
set the method call equal to the array being made:
=> allows it to all be done in ONE line of code:
*/

// const UCArr

console.log(`filter() make array of caps:\n: The string contains capital letters:\n`); 

console.log('');
// "apple", "banana", "cherry"


const cities = ['NY', 'MIA', 'LA', 'CHI', "ABQ", 'MPLS', 'CINC', 'DET'];

//for loop vs. forEach()
for(cit of cities) {
    for(cit2 of cities){
        if(cit != cit2){
            console.log(`for of: ${cit}-${cit2}`)
        }
    }
}

cities.forEach(function(cit){
    cities.forEach(function(cit2){
        if(cit != cit2){
        console.log(`forEach: ${cit}-${cit2}`);
        }
    });
});


/* 
Limitation of forEach 🚫

1. break in forEach
A key limitation of forEach is the inability to stop or break the loop using traditional control statements like break or return. If you try to use break inside a forEach, you'll encounter a syntax error because break is not applicable within a callback function.

Attempting to Break forEach

Typically, a break statement is used to exit a loop prematurely when a certain condition is met.
*/

const numbers = [1, 2, 3, 4, 5];

    // break; // Syntax Error: Illegal break statement


/* 
When you try to use break in a forEach loop, JavaScript throws a syntax error. This is because break is designed to be used in traditional loops (like for, while, do...while) and is not recognized within the callback function of forEach.

2. return in forEach
In other loops or functions, the return statement exits the loop or function, returning a value if specified.

In the context of forEach, return does not break out of the loop. Instead, it merely exits the current iteration of the callback function and moves on to the next element in the array.

Attempting to return forEach:
*/

const nums = [1, 2, 3, 4, 5];

    // Exits only the current iteration

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

// Successfully breaks the loop
  
  console.log();

/* Output:
   1
   2
   3
*/

// END: Lesson 05.04
// NEXT: Lesson 05.05
