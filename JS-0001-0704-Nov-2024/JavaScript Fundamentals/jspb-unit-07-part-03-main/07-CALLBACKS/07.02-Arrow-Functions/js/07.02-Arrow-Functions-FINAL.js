// Lesson 07.02 - FINAL

// Arrow Functions =>

// An arrow function is a function that uses the => symbol instead of the
// function keyword. Other things to know about arrow functions:

/*
- arrow functions without curly braces return implicitly, which means that they
  always return a value--even when the **return** keyword is absent.
- arrow functions have concise syntax:
  - => is 2 characters, function is 8 characters
  - if there is only one line of logic, the curly braces { } and return keyword
    may be omitted
  - if there is only one argument, the argument ( ) may be omitted.
*/

// Let's start by refactoring a "regular" function declaration into an **arrow
// function**:

// 1. Define a "regular" function, which, though simple, has a parameter, so
// expects an input (argument) and also returns a value:

// function greetUser(user) {
//     return `Welcome back, ${user}`;
// }

// hoisting

// Function declarations are hoisted, meaning that they are lifted to the top of
// their scope, regardless of where they occur in the lines of code.

// 2. Call the function, supplying the expected argument. Since the function
// returns a value, set the call equal to a variable. This captures the return
// value; log the variable to see the greeting:

let greeting = greetUser("Brian123");
console.log("function declaration (hoisted) greetUser:\n", greeting);
//> Welcome back, Brian123!

function greetUser(user) {
  return `Welcome back, ${user}`;
}

// 3. To verify that the function declaration has been hoisted, call the function
// above the function declaration; it still works:

// converting the function declaration into an arrow function

// step 1 is to convert function def to function expression

// 4. Replace the word function with const or let. This turns greetUser into a
// variable declaration, so put an equal sign right after the name of the
// variable:
const greetPal = function (user) {
  return `Welcome back, ${user}`;
};

greeting = greetPal("Bub");
console.log("function expression (NOT hoisted) greetPal:\n", greeting);
//> Welcome back, Bub!

// 5. Put the "fat arrow" => to the right of the parentheses:

// 6. Run the page. Now, the first function call--the one above the
// function--fails. This is because a fat-arrow function, set equal to a
// variable, is not hoisted. Comment out the first function call, so that it
// stops throwing the error.

// making the fat-arrow function even simpler

// 7. Since there's only the one line of logic, we can make the fat-arrow
// function syntax even more concise. Get rid of the curly braces, the return
// keyword and the parentheses around the argument:

// It is even easier to convert a function expression into a fat-arrow function,
// since a function expression is already set equal to a variable:

// 8. Start with a function expression:

// const addNums = function (n1, n2) {
//   return n1 + n2;
// };

// console.log(addNums(135, 246)); // 381

// Convert the function expression to an arrow function:

// 9. Delete the word function:

// const addNums = (a, b) {
//     return a + b;
// }

// 10. Add => after the parentheses:

// const addNums = (a, b) => {
//   return a + b;
// };

// 11. Since there is only one line of logic, delete {} and **return**. We have
// to leave the parentheses, because there is more than one argument

const addNums = (a, b) => a + b;

console.log(addNums(237, 365)); // 602

// when you cannot simplify the arrow syntax too much

// If there is more than one line of logic, as in this next fat-arrow function,
// you have to keep the {} and return keyword:

// 12. Declare a variable, set equal to a fat-arrow function. Have it peform a
// few lines of code, so that we must keep the {} and return keyword. However,
// since there is only one argument, omit the () around the argument:

const capitalizeWord = (word) => {
  let firstChar = word[0].toUpperCase();
  let restOfChars = word.slice(1); // isolate the rest of the word
  return firstChar + restOfChars; // concat and return the 2 parts
};

const capitalized = capitalizeWord("elephant");
console.log(capitalized); // Elephant

// arrow functions with map() and filter()

// The concise syntax of the arrow function makes it well suited for deployment
// as the callback function of array methods, map() and filter()

// We will now do a map-filter chaining example, first with "regular" functions
// as callbacks and then with arrow functions.

// 13. Declare an array, users, of user objects:

const users = [
  { name: "Brian", isAdmin: true },
  { name: "Rick", isAdmin: false },
  { name: "Jill", isAdmin: true },
  { name: "John", isAdmin: false },
  { name: "Jane", isAdmin: true },
];

// 14. Filter out the users with the isAdmin property set to true, then map the
// resulting array to a new array containing just the names of the users:

const adminNames = users
  .filter(function (user) {
    return user.isAdmin;
  })
  .map(function (user) {
    return user.name;
  });

console.log("adminNames", adminNames); // ['Brian', 'Jill', 'Jane']

// 15. Now, convert the function keyword to a fat-arrow function. Since there is
// only one argument, you can omit the parentheses around the argument:

const adminNames2 = users
  .filter((user) => {
    return user.isAdmin;
  })
  .map((user) => {
    return user.name;
  });

// 16. Make the code more concise, as this is a hallmark of arrow functions:

/*
- get rid of the curly braces and return keyword
- omit the callback argument parentheses, since there's just the one argument
- it is customary when writing such lean code to also lose the semi-colons
- as a final nod to minimalism, you can even make the array just one character:
*/

const adminNames3 = users.filter(user => user.isAdmin).map(user => user.name);

// 17. Although this is one line of code, it is a bit long. You can break it up into
// multiple lines. It is still one statement, so you don't need to add a semi-colon
// until the end of the statement:

const adminNames4 = users
  .filter(user => user.isAdmin)
  .map(user => user.name);

// You could fit this all on one line, and even make it shorter by using a
// single character for the array variable, but this is a good balance between
// brevity and readability.

// END Lesson 07.02
// NEXT Lesson 07.03
