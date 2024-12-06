// Lesson 02.03 - START

/* In this lesson:
- ternary expression: concise alternative to if-else
- &&  ||  operators for evaluating multiple conditions 
- switch - case - break: alternative to if-else if-else 

// ternary expression

// A ternary is a concise alternative to an "if else" statement. 
// That which takes an "if else" 5 lines, a ternary does in one.
*/

// 1. Declare three number variables:
let x = 15,  y = 8,  z = 0;

// 2. If x < y, find their sum (+); otherwise find their product (*).
// Save the answer to z;  



console.log('z:', z); // 13 (because x is less than y)

// 3. Change a value so that we get the else part

/* Ternary Syntax

To convert an if-else, like this..

if(x < y) {
    z = x + y;
} else {
    z = x * y;
}

..into a ternary expression, like this..

x < y ? z = x + y : z = x * y;

..follow these A-B-C steps:

A. delete:  curly braces {}
            parentheses ()
            if, else
            first semi-colon ;
B. add:     ? afer the "if condition"
            : in front of the "else line"

C. roll everything up onto one line
*/  

x < y ? z = x + y : z = x * y;

/*

Now, to convert the above "if else" to a ternary:

4. Get rid of the "if", the "else", the parentheses ( ), 
   the curly braces { } and the first semi-colon ; :

    x < y
        z = x + y
        z = x * y;

5. ? goes in front of the "if line"; 
   : goes in front of the "else line":

   x < y
        ? z = x + y
        : z = x * y;
*/

// 6. Roll everything up on one line (this part is actually optional):


console.log("z ternary:", z);

// 7. To make it even more concise, instead of having "z =" twice, 
//    put "z =" at the beginning to capture the return value:
x = 5;
z = x<y ?  x+y : x*y;
console.log("z = ternary:"); // 13

// adding a second condition to a ternary to make
// the ternary version of an if-else if-else:

// 8. Write an if-else if-else

//  "Luxury" 
//  "Regular" 
//  "Economy"

let price = 1000;
let brand = "";
if (price>= 1000){
    brand = "luxury"
} else if(price>=100){
    brand ="regular"
} else {
    brand ="economy"
}

console.log(`Price of ${brand} item: $${price}.`)
console.log("if-else if-else: price:", "tag:");

// 9. Convert the above to a ternary; the syntax is:
//    value = first_condition 
//          ? value_if_true 
//          : secondt_condition 
//          ? value_if_true 
//          : value_if_false
price = 2000;
brand = price>=1000 ? "luxury" : price>=100 ? "regular" : "economy";
// "Luxury" "Regular" "Economy"

console.log("ternary with 2 condtions: price:", price, "brand:", brand);


// && (AND), || (OR) operators

// Two or more conditions can be evaluated in an if statement:
// && (AND) operator requires both conditions to be true
// || (OR) operator requires either condition to be true


// && (AND) operator

// Let's try an if statement with &&, where both conditions must be true.

// 10. Declare a string, number and boolean:
let weather = "sunny";
let degrees = 75;
let windy = false;

// 11. Write an && statement that checks if the weather is "sunny" AND 
//     if the temperature is at least 70 degrees
//     if BOTH conditions are true, go to the beach:
if(weather=="sunny" && degrees>=70){
    console.log('Go To The Beach!');
} else if(weather=="rainy" ) {
    console.log('Go To The musuem!');
} else {
    console.log('Go To The park!');
}

if(weather=="sunny" && degrees>=70){
    console.log('Go To The Beach!');
} else if(weather=="rainy" || windy) {
    console.log('Go To The musuem!');
} else {
    console.log('Go To The park!');
}

// 12. Write the ternary version by putting the double condition 
//     between after the = and before the ? :
let activity = "";
if(weather=="sunny" && degrees>=70){
    activity = ('Go To The Beach!');
} else if(weather=="rainy" || windy) {
    activity = ('Go To The musuem!');
} else {
    activity = ('Go To The park!');
}
console.log('activity', activity);

//ternary
degrees = 162;
weather = "rainy";
activity = weather=="sunny" && degrees>=70 ? 'Beach' : weather=="rainy" ? 'musuem' : 'park';
console.log(`Let's go to the ${activity}!`);

// 13. Add an "else part"; it will run if EITHER or BOTH 
//     conditions are false:
// "sunny" 70
    // true;

    // false;


// Changing the values of weather and degrees, and 
// run until you get all four possible outcomes.

// The logic means that there is only one "true" scenario:
// the weather is sunny AND it is at least 70 degrees.
// BUT there are three "no beach" scenarios:
//   - It's NOT sunny AND its below 70 degrees.
//   - It's sunny, BUT it's below 70 degrees.
//   - It's 70-plus degrees, BUT it's not sunny.


// || (OR) operator

// Let's try an if statement with || (OR), where only one 
// condition must be true.

// 14. Declare a couple of numbers and an undefined that we will
//     set later to be a boolean:
let cashOnHand = 50;
let storeCredit = 10;
let buyStuff; //boolean

// 14. Write an if statement where we'll buy stuff if either our
//     cash or credit is at least 100:
if(cashOnHand>=100 || storeCredit>=100) {
    buyStuff = true;
} else {
    buyStuff = false;
}

console.log('|| buyStuff:', buyStuff); // buy stuff: true

// Change one of the numbers to be less than 100, and run it again.
// buyStuff still gets set to true, because only one of the two 
// conditions needs to be true.

buyStuff = cashOnHand>=100 || storeCredit>=100 ?  true : false;

console.log('ternary || buyStuff:', buyStuff);


// 15. Write the ternary version of the above:
// buyStuff
console.log('|| ternary buyStuff:'); // buy stuff: false

// Set both numbers to below 100, so that neither conditions is true. 
// Now, even for the || version, the else part runs.


// combining && and || in one if statement

// 20. Declare a few variables:
let meal = "dinner";
let potato = "baked";
let orderSteak;

// 21. if the meal is dinner AND the potato is baked, order steak:
// "dinner" "baked"
meal = "dinner";
potato = "baked";

if(meal=="dinner" && potato=="baked"){
    orderSteak=true;
} else {
    orderSteak=false;
}

console.log("orderSteak:", orderSteak); // orderSteak: true

// 22. Write the ternary version of the above:
// "dinner" "baked"
orderSteak=meal=="dinner" && potato=="baked" ? true : false;
console.log("ternary orderSteak:", orderSteak); // ternary orderSteak: true

// 22. Change potato to mashed and run it again, as if-else and ternary:
//     We no longer order the steak, because only one condtion is true:
// "mashed"

// "dinner" "baked"


console.log('orderSteak if meal == "dinner" && potato == "baked":'); 
// orderSteak if meal == "dinner" && potato == "baked":: false

// To combine && and || in the same if statement, 
// use parentheses to group the logic.

// 23. Add an || part, so that we order steak if the meal is dinner 
//     AND the potato is baked OR mashed. The two potatos must be 
//     wrapped in aluminum foil (parenthese):

// "French fries"
// meal = "lunch";
// "dinner" "baked" "mashed"

potato = "baked";
orderSteak=meal=="dinner" && (potato=="baked" || potato=="mashed") ? true : false;
console.log("ternary orderSteak:", orderSteak);

//challenge: be flexible with the meal also order steak for lunch
// add a condition where you only order steak if price is less than 50 or has a groupon
potato = "baked";
meal = "lunch";
price = 50;
let groupOn = true;
groupOn = true;
orderSteak= (meal=="dinner" || meal=="lunch") && 
            (potato=="baked" || potato=="mashed") && 
            (price<=50 || groupOn==true) ?  
            true : false;

console.log("ternary order QQQ:", orderSteak);

// meal == "dinner" && (potato == "baked" || potato == "mashed": true

// Ternary version:
// "dinner" "baked" "mashed"

console.log("ternary Order steak baked or mashed both ok:");

// 23. Change the potato to "French fries", making the OR condition false. 
//     Since both meal and potato must be true, we don't order the steak:
console.log("Order steak:"); // Order steak: false

// switch - case - break - default:
// an alternative to "if-else if-else".

// Given: two variables:
let currencyAbbr = "GBP";
let currency = "";

// Write an if-else if-else that sets currency based on currencyAbbr:
// "USD"
//     "US Dollar"
// "JPY"
//     "Japanese Yen"
// "GBP"
//     "British Pound"
// "Unknown"

if (currencyAbbr == "USD"){
    currency = "US Dollar";
} else if (currencyAbbr == "JPY"){
    currency = "Japanese Yen";
} else if (currencyAbbr == "GBP"){
    currency = "British Pound";
} else {
    currency = "Unknown";   
}

console.log(`${currencyAbbr}; ${currency}`);

//ternary
currencyAbbr = "JPY"
currency = currencyAbbr == "USD" ? "US Dollar" : currencyAbbr == "JPY" ? "Japanese Yen" : currencyAbbr == "GBP" ? "British Pound" : "Unknown";   
console.log(`Ternary Check: ${currencyAbbr}; ${currency}`);



// How to convert an "if-else if-else" to a "switch-case-break":
// the switch(value) is compared to the case(value):
// below, switch("GBP") is compared to case: "USD";
// if they don't match, the next case is considered:
// switch("GBP") is first compared to case: "USD";
// if the switch "GBP" matches the case "USD", set the currency 
// but since "GBP" does not equal "USD", go on to the next case
// if the switch "GBP" matches the case "JPY", set the currency 
// but since "GBP" does not equal "JPY", go on to the next case,
// and so it goes until a match is made. The last case matches.
// if no switch-case match exists, run the default line.
// default is like the else part at the end of an "if else" 

// inside switch() method pass the value to be checked(this variable is not the one to be set, which is currency)

switch(currencyAbbr) {
    case "USD": //if statement
        //if currencyAbbr=="USD" is true:
        currency = "US Dollar";
        break;
    case "GBP":
        currency = "British Pound";
        break;
    case "JPY":
        currency = "Japenese YEN";
        break;
    default:
        currency = "Unknown";
}
    "GBP"

// sw
    "USD"
        "US Dollar"
        // br
    // ca
        // "Japanese Yen"
        // br
    // "GBP"
        // "British Pound"
        // br
    // de
        // "Unknown"

// console.log(`switch-case-break-default: ${moneySymbol}; ${currency}`);

// Change the moneySymbol and run it again. Try something with no match,
// such as HKD ("Hong Kong Dollar"). This gives us the default "Unknown"

// DONE: Lesson 02.03
// NEXT: Lab 02.03
// THEN: Lesson 02.04
