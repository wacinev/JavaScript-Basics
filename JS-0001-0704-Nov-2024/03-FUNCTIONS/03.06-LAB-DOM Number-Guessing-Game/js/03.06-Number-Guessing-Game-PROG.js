/* Lesson 03.06 - START

Number Guessing Game
In this lesson we will write a number guessing game program:
- Player clicks PLAY button to call **playGame** function
- **playGame** function hides the PLAY button and
- shows the input box for entering guess
- shows the GUESS button for submitting guess
- shows an h2 for displaying feedback
- Program generates a mystery random integer from 1-100
- Player inputs a number by typing or using stepper arrows
- Player clicks GUESS button to call evalGuess function
- evalGuess function compares guess to mystery number
   - feedback is displayed: Too High or Too Low or Congrats
   - function keeps track of total guesses
- Once the mystery number is guessed:
   - the score (GamesPplayed and Guess Avg) is updated
   - the resetGame function is called automatically:
- resetGame function:
   - updates the score
   - shows playBtn; hides guessBox, guessBtn and feedback
- We are ready for a new game: click PLAY AGAIN
*/

// 1. Declare game play variables. These need to be in the global scope, since the vars are used by more than one function.
let r ;
let guesses = 0;
console.log('GLOBAL GUESSES: ', guesses)
const guessCount = document.getElementById("guesses-span");

// array for keeping track of used guess numbers:
// const guessesArr = [];

// The above shorthand requires that the variables have the same initial value.

// 2. Get the PLAY and GUESS buttons (GUESS is hidden on page load):
const playBtn = document.getElementById("play-btn");
const guessBtn = document.getElementById("guess-btn");

// 3. Have the buttons call their respective functions:
playBtn.addEventListener('click', playGame)
guessBtn.addEventListener('click', evalGuess)

// 4. Get the guess input box and feedback h2, both of which are also hidden on page load:
const scoreBox = document.getElementById("score-box");
const guessBox = document.getElementById("guess-box");
const feedbackH2 = document.getElementById("feedback");

// 5. Get the footer spans for keeping score:
const footer = document.querySelector("footer");
console.log(footer);
// Array.splice(start_index, num_items)
// removes num_items from start_index
// 'apple', 'banana', 'cherry', 'grape', 'kiwi'
// get rid of banana and cherry using splice:
// splice(0) starts removing from index 0, lack of 2nd arg means
// remove all


// The playGame function runs when the PLAY button is clicked. 
function playGame() {

    // console.log("play button clicked");
    
    // 6. Declare the playGame function:
    // set guess box to 0 to start each game
    guessBox.defaultValue = 0;
    // 7. Generate a random mystery number from 1-100
    r = Math.ceil(Math.random() * 100);
    console.log('mystery number:', r);
    
    // 8. Hide the PLAY button
    playBtn.style.display = "none";

    // 9. Show the guess input box, GUESS button and feedback h2:
    guessBox.style.display = "inline-block";
    guessBtn.style.display = "inline-block";
    feedbackH2.style.display = "inline-block";

    feedbackH2.textContent = "Guess the Mystery Number (1-100)";
    
}// end function playGame()
    
// The evalGuess function runs when GUESS button is clicked. 
function evalGuess(){
    
    // get guess from input box
    let guess = Number(guessBox.value);
    // check if guess has already been used:
    // if(guessesArr.includes(guess)) {

    // }
    // fruits.includes('kiwi') returns true if 'kiwi' is in fruits array
    // if
    // `Oops! already used!`
    // terminate the func
    
    // another guess
    // update guess count
    
    guesses = guesses + 1;
    console.log(guessCount)
    guessCount.textContent = `${guesses}`;
    console.log('AFTER INCREMENT GUESSES: ', guesses)
    
    // save guess to arr:
    // console.log('guessesArr:');
    
    // compare guess to mystery number
    // if the guess is too low
    // if
    // "Your guess is too LOW"
    // else if the guess is too high
    // el
    // "Your guess is too HIGH"
    // else guess is correct
    // el
    // `Correct! Mystery Number is`

    if (guess < r) {
        feedbackH2.textContent = "Guess is too LOW!"
    } else if (guess > r) {
        feedbackH2.textContent = "Guess is too HIGH!"
    } else {
        feedbackH2.textContent = "Guess is CORRECT" 
        gameReset();
    }
    
    // update avg
    function gameReset() {
    // 21. Hide input box and guess button:
    guessBtn.style.display = "none";
    guessBox.style.display = "none";
    
    // 22. Show playBtn w PLAY AGAIN text:
   
    playBtn.style.display = "inline-block";
    playBtn.textContent = "PLAY AGAIN";
    // 26. Empty the guesses array for a new game:
    
    // remove from index 0,
    // no 2nd arg means go to end, in other words,
    // splice out / remove ALL array items, leaving
    // an empty array []
    
    }// end function resetGame()
    
    // the resetGame() function is called when the game is over  
    
    // 12. Increase guesses by 1
    guess++;
    
    // 17. Game's over, so call the resetGame function:
    
    
}// end function evalGuess()
    



   
