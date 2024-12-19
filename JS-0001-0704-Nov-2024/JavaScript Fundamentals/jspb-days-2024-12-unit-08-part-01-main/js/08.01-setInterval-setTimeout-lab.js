// 08.01 Lab

/*
Find Digital Root
The Digital Root of a number is the single-digit sum of its digits. 
If the sum of the digits is 10 or more, the digits must be added 
together again — until the result is one digit.

Examples involving one, two and three "rounds" of addition:

One round of addition:
Find Digital Root of 32
3+2 = 5
Answer: 5

Two rounds of addition:
Find Digital Root of 84
8+4 = 12
1+2 = 3
Answer: 3

Three rounds of addition:
Find Digital Root of 9,898,987
9+8+9+8+9+8+7 = 58
5+8 = 13
1+3 = 4
Answer: 4

Challenge:
Write a function called
findDigitalRoot(n)
which takes in a number, n,
and returns the digital root.

Bonus:
Make a Find Digital Root DOM demo, with input box. 
User enters a number to get its digital root. 
The result is displayed, along with the 
"rounds of addition", step by step.
Hint: setInterval()
*/

const digitalRoot = document.querySelector('#digital-root')
const inputDigitalRoot = document.querySelector('#find-digital-root')
let pot = 0;
let 
function findDigitalRoot(n) {
    //edge cases
    if(n < 10){
        pot = n
        return pot;
    } else {
        let str = n.toString();
        pot = Number(str[0]) + Number(str[1])
        return pot
    }
    
}
findDigitalRoot(22)
digitalRoot.textContent = pot








// console.log(findDigitalRoot(2)); //5


