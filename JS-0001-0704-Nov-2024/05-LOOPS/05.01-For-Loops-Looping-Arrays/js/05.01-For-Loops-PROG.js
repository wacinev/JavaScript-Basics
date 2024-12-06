// Lesson 05.01 - START

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/
for(let i = 0; i < 10; i++) {
    console.log(i); // 0,1,2, ... 9
}

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":
// console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:
for(var i = 0; i < 10; i++) {
    console.log(i); // 0,1,2, ... 9
}

console.log('var i outside loop:', i); // i outside loop: 10

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.
for(var i = 0; i <= 10; i++) {
    console.log(i); // 0,1,2, ... 10
}

console.log('var i outside loop:', i); // i outside loop: 11
// 5. Write a loop with a counter that decrements (counts backwards): d
for(var i = 10; i > 0; i--) { // i = i - 1
    console.log(i); // 9,8,7, ... 1
}

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:
// 'countdown j:'

// console.log('j outside loop:', j); // i outside loop: 10


// infinite loop: condition always true
// for(let j = 10; j > 0; j++) {
//     console.log('countdown j:', j);
// }

// 7. Write but then comment out and do not run these infinite loops. Just look at it and understand. Running it may freeze your browser--or your entire computer.

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):
// 0, 5, 10, 15 ... 90, 95, 100
// 'count to 100 by 5:'

// challenge: use for loop to produce the following output: 1900, 1920, 1940, 1960, 1980, 2000, 2020
for(let i = 1900; i < 2021; i+=20) {// i = i + 20;, i + 20
    console.log('countdown i:', i);
}

// bonus challenge: use Date() to get current year, 
// which is a leap year, then use loop to log this and
// last 10 leap years (2020, 2016, 2012, 2008, etc.)
const dt = new Date();
let year = dt.getFullYear();
console.log(year);
for(let y = year; y>(year-40); y-=4) {
    console.log(y);
}

//super-bonus challenge
let pet = "bunny";
/* use the pet variable and a for loop to make the following array:
[ "bunny01.jpg", "bunny02.jpg", "bunny03.jpg", "bunny04.jpg", "bunny05.jpg", 
 "bunny06.jpg", "bunny07.jpg", "bunny08.jpg", ... "bunny20.jpg",  ]
*/
let pet2 = [];
let x = 21;
for(i = 1; i<x; i++) {
    if(i<10){
        pet2.push(pet + 0 + i + ".jpg");
    }  else{
    pet2.push(pet + i + ".jpg")
    }    
}

console.log(pet2);

// `continue` keyword for skipping loop iteration

// 9. Starting with 1900, output each decade (1900, 1910, 1920, etc.) stopping at 2020, but skipping 1960:
for(let i = 1900; i <= 2020; i+=10) {
    // skip to next iteration
    if(i == 1960) continue;
    console.log('y:', i);
}
// 1900, 1920, 1940, 1980, 2000, 2020

// iterating (looping) arrays

// 10. Declare an array:
const fruits = ['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];

// 11. Push a few items into the end of the array:
fruits.push('apricot', 'papaya', 'grape');

// 12. Add a few items to the beginning of the array:
fruits.unshift('grapefruit', 'watermelon', 'tangerine')

// 13. Output the array and its length:
console.log('fruits:', fruits, fruits.length);
// ['grapefruit', 'watermelon', 'tangerine', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// review of splice() method

// 14. Starting with 'cherry', and assuming you don't know its index, replace 'cherry' along with the next two items with 'lemon' and 'pear':
let cherIndex = fruits.indexOf('cherry');
console.log('cherIndex', cherIndex);
fruits.splice(fruits.indexOf('cherry'), 3, "lemon", "pear");
console.log('fruits,', fruits)
// 'cherry', "lemon", "pear"

// 15. Without removing any items, add 'raspberry' and 'mango' right before 'apricot', without assuming to know the index of 'apricot':
// "apricot", "raspberry", "mango"
fruits.splice(fruits.indexOf('apricot'), 0, "raspberry", "mango");
console.log('fruits:');

// 16. Iterate the array with a for loop.
/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/
for(let i=0; i<fruits.length; i++) {
    console.log(`${i+1}. ${fruits[i]} jellybean`);
}

/*
- Each time through the loop, make a jellybean.
- Number the output from 1-14
*/

// alternate (more modern ES6 syntax):
// you can reference the array directly in the loop:
// for(current_item of array) {
    // do stuff w current_item
// }
for(fru of fruits) {
    console.log(fru + 'jellybean');
}
console.log('\nfor of loop:')

    console.log(' jellybean')

// grapefruit jellybean
// .. etc. ..
// tangerine jellybean, etc.

// 17. Push in three more fruits; then sort and output the array:
fruits.push('banana', 'pineapple', 'peach');
fruits.sort();

// ['apple', 'apricot', 'banana', 'blueberry'
// ..etc. .. 'plum', 'raspberry', 'tangerine', 'watermelon'] 17

// 18. Run the loop again:
for(fru of fruits) {
    console.log(fru + 'jellybean');
}

// The last three fruits ('raspberry', 'tangerine', 'watermelon') weren't outputted, because we are running the loop only 14 times for 17 array items. 

// array.length for loop condition

// To make a loop dynamically respond to changes in the size of the array, don't hard-code the number of iterations. Use array.length, instead.

// 19. Change the loop condition so that it will always run as many times as there are items in the array. Dispense with the bean variable and the item numbering, and just log the jellybean directly:
    /* apple jellybean
    ... etc. ...
    watermelon jellybean */

// Now, we get all 17 jellybeans.

// loops with conditional logic

// Loops that iterate arrays often include conditional logic to evaluate the individual items. Let's give this a try.

// Let's make jellybeans again, but this time only if the fruit has five or fewer characters. To check how many letters the fruit is, use the string.length property.

// 20. Make jellybeans, but only if the fruit is five letters or less:
// jellybeans: 'apple', 'grape', 'lemon', 'mango', 'peach', 'pear', 'plum'
// ' jellybean (5 char max)'
for(let fru of fruits) {
    if(fru.length <= 5){
        console.log(`${fru} jelly`);
    }
}
/* Challenge: 
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
// better to make a new array and then log that rather than
// log each time in loop
*/
let fruArr = [];

for (fru of fruits){
    if (fru.length <=5){
        fruArr.push(`${fru} jellybeans`);
    } else if (fru.length <=8) {
        fruArr.push(`${fru} popsicles`);
    } else {
        fruArr.push(`${fru} lollipops`);
    }
}

console.log("\nMake jellybeans, popsicles or lollipops:\n", fruArr);

    // apple jellybean
    // apricot popsicle 
    // ... etc. ...
    // watermelon lollipop

// making a new array while looping

// The loop is not saving the treats anywhere; they're just being dumped out onto the console. 

// 22. Refactor the loop so that the treats are saved to a new array, which we declared before the above the loop:

console.log("\nSave jellybeans, popsices and lollipops to the treats array:\n");

// ['apple jellybean', 'apricot popsicle' .. etc. .. 'watermelon lollipop']

// 23. Push in three more berries, and then sort the array:
// 'strawberry', 'blackberry', 'boysenberry'

/* Challenge ALL THE WAY TO THE END:
21. Make different fruit treats, depending on the number of letters
// - if the fruit is 5 or fewer letters, make jellybeans
// - if the fruit has 6-8 letters,
// make popsicles: "orange popsicle"
// if the fruit is 9 or more letters, make lollipops: "tangerine lollipop"
*/
// 'kiwi', 'grapefruit', 'apple', 'grape', "avacado", "tomato", 'lemon', 'mango', 'peach', 'pear', 'plum', 'raspberry', 'tangerine', 'watermelon', 'blueberry'];
// 'strawberry', 'blackberry', 'boysenberry'
// froo

// let r = ~~(Math.random * fruits.length);
// fo
    // for (let i = 0; i < fruits.length; i++){
    // if (fruits[i].lenght <= 5)
    // "berry"
        // " jam"

    // el
        // " jellybeans"
    
    // el
        // " popsicle"
    
    // el
        // " lolipop"
    

console.log();
// making arrays of objects with a loop
// It can be very useful to make arrays of objects on a loop. As objects, the resulting array items can have as many properties as you like:
// 25. Make a loop that goes through this array of full names, and makes objects consisting of three properites each: firstName, lastName, pin, the last being a random 4-digit PIN, with leading 0's, as needed.

const basketballStars = ["LeBron James", "Micheal Jordan", "Larry Bird", "Julius Erving", "Wilt Chamberlain"];

const starsObjArr = [];

for(star of basketballStars) {
    const namesArr = star.split(" ");
    const starObj = {
        firstName: namesArr[0],
        lastName: namesArr[1],
    };
    let pin = ~~(Math.random() * 10000)
    pin = pin.toString().padStart(4,"0");
    starObj.pin = pin;
    starsObjArr.push(starObj);
}
console.log(starsObjArr)

/*
34. Given this array of names, make passwords consisting or:
the first name, backwards, all lowercase
+ a special character:
    "#" if the first name has 4 letters or less
    "&" if the first name has exactly 5 letters
    "%" if the first name has more than 5 letters
+ the first three letters of the last name
+ a piece of punctuation:
    an exclamation point ("!") if the first name and last name have the same number of letters
    a question mark ("?") if the first name is longer than the last name
    an colon (":") if the last name is longer than the first name
+ the number of letters in the full name
+ if the first and last name start with the same letter:
    add an equal sign "=" to the end
    otherwise, add an asterisk "*"
+ finally, if the last name starts with a vowel:
    add "V" for vowel
    otherwise add "C" for consonant--unless the last name starts with "Y", in which case, add "X"
Save the passwords to an array of objects that include the names, divided into first and last name
*/
const names = ["Hank Aaron", "Ernie Banks", "Carl Yastrzemski", "Mickey Mantle", "Tony Oliva", "Babe Ruth", "Willie Mays", "Nolan Ryan"];
const namesObjArr = [];

for(star of names){
    const namesObj = {};
    const namesArr = star.split(" ") ;

    let firstName = namesArr[0].toLowerCase();
    let firstNameBwd = firstName.split("").reverse().join("");

    let lastName = namesArr[1];

    let password = "";
    password += firstNameBwd;

    if (firstName.length <= 4){
        password += "#";
    } else if (firstName.length == 5){
        password += "&";
    } else {
        password += "%";
    }

    let lastName3 = lastName.slice(0,3);
    password += lastName3;

    if (firstName.length == lastName.length){
        password+= "!";
    } else if (firstName.length > lastName.length){
        password += "?";
    } else{
        password+= ":"
    }

    let fullNameLength = firstName.length + lastName.length;
    password += fullNameLength;

    if (firstName[0] == lastName[0]){
        password+= "="
    } else{
        password+= "*"
    }


    let vowel = "AEIOU";


    if (vowel.includes(lastName[0])){
        password += "V";
    } else if (lastName[0] == "Y"){
        password+= "X";
    } else {
        password += "C";
    }

    // console.log(password);
    namesObj.firstName = namesArr[0];
    namesObj.lastName = namesArr[1];
    namesObj.password = password;

    namesObjArr.push(namesObj);
}


console.log(namesObjArr);

// END: Lesson 05.01
// NEXT: Lab 05.01
// THEN: Lesson 05.02









