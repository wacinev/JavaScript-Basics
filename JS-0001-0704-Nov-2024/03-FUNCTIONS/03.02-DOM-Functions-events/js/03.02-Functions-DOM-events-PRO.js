// Lesson 03.02 - START

// This page consists of several UI elements which call functions and produce output:

// Get the various DOM elements:

// 1. Get the output box:
const outBox = document.getElementById('out-box');

// 2. Get text input fields, where the user enters their name:
const firstNameBox = document.getElementById('first-name');
const lastNameBox = document.getElementById('last-name');

// 3. Get the Greet World and Greet User buttons:
const greetWorldBtn = document.getElementById('greet-world-btn');
const greetUserBtn = document.getElementById('greet-user-btn');

// 4. Instruct the buttons to call their respective functions:
greetWorldBtn.addEventListener('click', greetWorld);
greetUserBtn.addEventListener('click', greetUser);

// 5. Get the "Pick a Fruit" menu
const fruitMenu = document.getElementById('fruit-menu');

// 6. Whenever the fruit menu is changed, call a function:
fruitMenu.addEventListener('change', pickAFruit);

// 7. Get the numeric input fields:
const num1Box = document.getElementById('num1');
const num2Box = document.getElementById('num2');

// 8. Get the menu for choosing the math operator:
const mathMenu = document.getElementById('math-menu');

// 9. Whenever a number changes or a math operator is chosen call a function:
num1Box.addEventListener('change', calculate);
num2Box.addEventListener('change', calculate);
mathMenu.addEventListener('change', calculate);

// 10. Get the f and c boxes (for inputting degrees F and C)
const fahrBox = document.getElementById('f');
const celsBox = document.getElementById('c');

// have f and c boxes call the convertTemperature func
fahrBox.addEventListener('change', convertTemperature);
celsBox.addEventListener('change', convertTemperature);

// BONUS: add checkbox next to fruit menu
// only show data-food if checkbox is checked

// 10. Get the checkbox
const checkbox = document.getElementById('cb');

// Define the functions
// Whenever you mention a function in a listener, the function must actually exist or else you get an error. 

// Comment out all listeners except for the one that calls greetWorld.

// 11. Define the greetWorld function:
function greetWorld() {

    // 12. Output the greeting to the console:
    console.log("Hello World!");

    // 13. Now output greeting to the DOM--the web page:
    outBox.textContent = "Hello World!";
    
}

// 14. Define the greetUser function:
function greetUser() {

    // 15. Get the values from the name fields and save them to local variables:
    let firstName = firstNameBox.value;
    let lastName = lastNameBox.value;

    // 16. Concatenate a greeting from the inputted names:
    let greeting = `Greetings, ${firstName} ${lastName}!`;

    // 16B. Output the greeting:
    // outBox.textContent = greeting;

    // 17. If no names were inputted, we get a wonky-looking "Hello, !". 
    // Let's validate with if-else logic: if both names are blank, output "Hey, stranger!":
    // !firstName is falsey check way of saying firstName == ""
    
    // if both names are falsey empty strings
    // if(firstName == "" && lastName == "") {
    // if an if statement only has 1 line of logic, you can omit the { }
    if(!firstName && !lastName) greeting = "Howdy, stranger!";
    
    // if at least one name is NOT an empty string, greet by name(s):
    outBox.textContent = greeting;
}


    // CHALLENGE: 

    // A.
    // Make it a Timely Greeting, so that instead of "Hey, you!", we get "Good morning!" or other appropriate greeting for the time of day. If at least one name field is NOT blank, output the timely greeing along with the name(s):

    // B.
    // Refactor the if-else as a ternary


// 18. Define the pickAFruit function:
function pickAFruit(event) {

    // this, fruitMenu and event.target all refer to the same thing: the object that called the function; in this case, that object is the fruit menu:

    // 19. Log the value of `this` -- the fruit menu -- in each of the three ways:
    console.log('this:', this); // <select id="fruit-menu">
    console.log('this.value:', this.value); // apple
    console.log('this.id:', this.id); // fruit-menu
    console.log('fruitMenu:', fruitMenu); // <select id="fruit-menu">
    console.log('fruitMenu.value:', fruitMenu.value); // apple
    console.log('fruitMenu.id:', fruitMenu.id); // fruit-menu
    console.log('event:', event); // change
    console.log('event.target:', event.target); // <select id="fruit-menu">
    console.log('event.target.value:', event.target.value); // apple
    
    // 24. Save the value of the fruitMenu to a variable:
    // or: this.value   or: event.target.value
    let chosenFruit = fruitMenu.value;

    // 21. Output the chosen fruit in UPPERCASE:
    outBox.textContent = `You picked ${chosenFruit.toUpperCase()}! `;
    
    // get the food from the data-food attribute of the selected option:
    
    // 25. Save selectedIndex to variable. This is index of selected option:
    // this is an integer in range of options array
    // outBox.textContent += " at index " + indx; // You picked CHERRY at index 6
    let indx = fruitMenu.selectedIndex;
    // outBox.textContent += indx; // You picked BLUEBERRY! 4

    // 26. Get selected option in options array and save it to object:
    const optn = fruitMenu.options[indx];
    console.log(optn); // <option value="blueberry" data-food="blueberry muffins">Blueberry</option>
    
    // outBox.textContent += " " + optn; // You picked CHERRY at index 6 [object HTMLOptionElement]

    // 27. Save food property of option's dataset property to a variable:
    let food = optn.dataset.food;
    
    // 28. If checkbox.checked is true, add the food to the output
    if(checkbox.checked) outBox.innerHTML += `<br>Do you like ${food}?`;
    
} // end pickAFruit() function

// "data dash" attribute: data=*

// Additional data may be attached to any html element by means of the "data-" attribute, where "data-myVar" means that a myVar variable is associated with this tag and will be available to JS as the dataset.myVar property.

// selectObj.options
// The select object has an options property, which stores all the options as an array. We will get deeper into arrays later on, but we already know that an array is a variable which stores multiple items. 

// index
// The items in an array are stored by numeric position called index, with the first item at index 0. 

// menu.selectedIndex
// The select object has a selectedIndex property, which is the index of the selected item. So, if the 10th menu item is selected, the selectedIndex is 9. 

// menu.options[menu.selectedIndex] 
// The selected option can be gotten from the options array by looking it up by its index. 

// menu.option.dataset
// Once we have the selected option, we can get any data contained in the "data-" attribute via the option's dataset property. Most tags won't have a "data-" attribute, but the fruit menu options all have a "data-food" attribute, the value of which is accessible as menu.option.dataset.food

//  menu.option.dataset.food as obtained from the option tag:
// <option value="mango" data-food="mango salsa">Mango</option>
// - menu : the select menu as a whole
// - option : the selected menu option
// - dataset : property of an element option that has a "data-" attribute
// - food : the property of dataset via the "data-food" attribute
// Let's define a new function for tapping into the "data-food" attribute




// calculator
/*
The calculator works as follows:
- calculate() does the math
- the function is called by a **change** event
- the change event occurs whenever: 
  - the user enters number and hits Enter
  - the user increases or decreases numbers (w arrows)
  - the user chooses a math operator from the menu
- calculate() function does the following:
  - gets the values from the number input boxes
  - converts these "number like strings" to actual numbers
  - gets the operator from the math menu
  - does the math in accordance with the math operator
We have two ways of doing the math, which is why we have 
two calculate functions (the second one is MUCH shorter).
*/

 // switch-case-break revisited

// We need to run a big chunk of logic that does the math based on that operator. We could use a long if-else if-else, but instead, let's get take the opportunity to get in a little more practice with switch-case-break:

// 29. Define the calculate function:
function calculate() {

    // get the 2 inputted numbers
    // Number(var) or +var returns actual number from stringy number
    let num1 = Number(num1Box.value);
    let num2 = +num2Box.value; // + is shorthand version of Number()

    // get the math operator (current math menu choice)
    let oper = mathMenu.value;
    
    // instead of a big if-else if-else block, evaluate all in one line
    // wrap math operation in eval() method
    // eval() takes a string and attempts to do math if possible
    outBox.textContent = `${num1} ${oper} ${num2} = ` + eval(num1 + oper + num2);
    // declare a variable to hold the answer
    // let answer = 0;
    // check the operator to see what math operation we need to do:
    // +, -, *, /, **, %

    // if(oper == "+") {
    //     answer = num1 + num2;
    // } else if(oper == "-") {
    //     answer = num1 - num2;
    // } else if(oper == "*") {
    //     answer = num1 * num2;
    // } else if(oper == "/") {
    //     answer = num1 / num2;
    // } else if(oper == "**") {
    //     answer = num1 ** num2;
    // } else { // %
    //     answer = num1 % num2;
    // }

    // outBox.textContent = answer;

}




    // eval() seems to have trouble w ** for negative numbers
    // ** is the newest of all the math operators (ES7)
    // so if the op is **, use old Math.pow()



    // console.log('hello from calc ans func')

    // 30. Get values from number boxes and convert them to actual numbers
//     let n1 = +n1Box.value; // +var makes number from stringy number
//     let n2 = +n2Box.value;

//     // // 31. Get math operator, which is the value of the math menu:
//     let op = mathMenu.value; // +, -, *, /, **, %

//     // 32. Declare a variable to hold the answer:
//     let ans = 0;

//     // // 33. Start with switch, which takes value to be compared to case:
//     switch(op) {
//     //     // 34. Write case to compare to math operator:
//         case '+':
//     //         // 35. If switch-case comparision is true, run case code:
//             ans = n1 + n2;
//             // 36. After case code, break before going on to next case:
//             break;
//         // 37. Repeat the above for all the other math operators:
//         case '-':
//             ans = n1 - n2;
//             break;
//         case '*':
//             ans = n1 * n2;
//             break;
//         case '/':
//             ans = n1 / n2;
//             break;
//         case '**':
//             ans = n1 ** n2;
//             break;
//         default:
//             ans = n1 % n2;
//             break;
//     } // close switch

//     // output the answer to the outbox:
//     outBox.textContent = ans;
//     // answer will update every time function
//     // is called, and it is called by both num boxes and by the math op menu

//     // output the answer using eval() instead of switch-case
//     // outBox.textContent = eval(`${n1} ${op} ${n2}`);
    
// } // end calculateAnswer() function

// eval() 
// The eval() method takes a string as its argument and considers it as a math operation. If it can detect numbers with a math operator in between, it will perform the calculation. 
console.log("5 ** 2"); // 5 ** 2
console.log(eval("5 ** 2")); // 25
// - We will get the chosen operator as the mathMenu value
// - Then, we will concatenate a string from the numbers and the mathMenu operator
// - Then we will pass the string to eval(), which will perform the calculation.

// 39. Start by defining a new calculate() function, and switch over to calling this function, instead of calculateAnswer:


    // 40. Get the numbers:

    // 41. Get the index of selected option and save it to a variable:
    let i;

    // 42. Get the text property of the selected option, which we look up by index in the math menu's options array, and save it to a variable:

    // 43. Do the math as a concatenated string using the op variable:

    // 44. Output the answer; all we get is the literal string, but at least it looks like a math problem:

    // 45. Try again this time wrapping the string in eval():

    // 46. Output the answer again. This time it should work as expected:

// Challenge: Complete 03.02 on your own: 
// finish Lesson 03.02 by doing Fahr-Cels Converter
// formulas for converting Fahr to Cels and vice-versa
// F = C * 9/5 + 32;
// C = (F - 32) * 5/9
function convertTemperature() {
    // if celsBox is calling func, convert C to F
    let ans = 0;
    let deg = this.value; // could be f or c
    if(this.id == 'c') {
        // ans is deg Fahr
        // F = C * 9/5 + 32;
        ans = deg * 9/5 + 32;
        ans = ans.toFixed(1);
        outBox.innerHTML = `${deg}&deg;C = ${ans}&deg;F`;
        fahrBox.value = ans;
    } else { // this.id == 'f'
        // ans is deg Cels
        // C = (F - 32) * 5/9
        ans = (deg - 32) * 5/9;
        ans = ans.toFixed(1);
        outBox.innerHTML = `${deg}&deg;F = ${ans}&deg;C`;
        celsBox.value = ans;
    }
}