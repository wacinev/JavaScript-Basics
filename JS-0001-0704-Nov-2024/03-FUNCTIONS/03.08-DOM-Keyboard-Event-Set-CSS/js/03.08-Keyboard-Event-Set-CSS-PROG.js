// Lesson 03.08 - START

// Keyboard Events
/*
- The pressing of a key is a <span>keydown</span> event.
- The release of a key is a <span>keyup</span> event.
- As with any event, a keyboard event can call a function.
- Keyboard events are listened for by the document.
- Syntax: document.addEventListener('keyup', getKey)
- The event.key property returns the name of the key
- If the key is the one we are listening for, run some function
*/

// 1. Get the DOM elements: the container, the two boxes in the upper corners for displaying output, and the spaceship 
const container= document.querySelector('.container');
const pinBox= document.querySelector('#pin-box');
const keyBox= document.querySelector('#key-box');
const spaceship= document.querySelector('#space-ship');

// 2. Set the left position of the spaceship to equal half the window width, minus half the width of the spaceship. This puts the spaceship is the middle of the screen to start:
let leftPos = window.innerWidth / 2 - 128;
spaceship.style.leftPos = leftPos + "px;"

// 3. Set booleans to keep track of the font and dark mode states, which are toggled by pressing "f" and "d", respectively:
let darkMode = true;
let serifMode = true;

// 4. Set the speed of the spaceship. Each time the left or right arrow is pressed, the spaceship
let speed = 20;

// 5. Have the document listen for the keyup event. On keyup, run a function that outputs the key and code to the keyBox. Since the event object is used by the function, pass the event object into the function as its argument. Since the function is so short, write it as an inline anonymous function, as opposed to an external, named function:
document.addEventListener('keyup', function(event) {
  keyBox.innerHTML = `Key: ${event.key}<br>Code: ${event.code}`;
});

// 6. Have document listen for the keydown event. When the event takes place -- which is when ANY key is pressed -- call the onKeyPress function.
document.addEventListener('keydown', onKeyDown);

// 7. Define the onKeyPress function, passing in the event object:
function onKeyDown(event) {
  // 8.  Check if the key is 'c', 'd', 'p', 'n' or the left or right arrow. 
  // if 'c' key was pressed, set body to random background color
  if (event.key == 'c') {
  // setting random background color 

  // 9. Check if the key is "c" for "color", or if the spacebar was pressed:

    // 10. Generate three integers in the 0-255 range
    // let R = ~~(Math.random()*256);
    // let G = ~~(Math.random()*256);
    // let B = ~~(Math.random()*256);


    // 11. Concatenate the numbers into the rgb() method:
    // let randRGB = `rgb(${R},${G},${B})`;

    // 12. Set the body background color to the random RGB color:
    // document.body.style.backgroundColor = randRGB;

    // Alternatively, we ca generate the random color as a hex value, in which case we only need one random number.

    // 13. Comment out steps 10-12, and make a new random integer in the 0 - 16777215 range (256 x 256 x 256):
    let r = ~~(Math.random() * (256 ** 3));

    // 14. Convert the random number to a base-16 (0-9, A-F) hexadecimal value by calling the toString(16) method on the number.
    // let randHex = "#" + r.toString(16); // hexify the number
    let randHex = "#" + r.toString(16);

    // 15. Set the body background color to the random hex color:
    document.body.style.backgroundColor = randHex;

    // 16. Set the pinBox text and color to the random color:
    pinBox.textContent = randHex;
    // pinBox.style.color = randHex; 
    return; // end function so we dont check the rest of the if's

} //end if key 'c'
  // toggling between Dark Mode and Light Mode for the container

  // 17. Check if the key is "d" for "dark":
  if(event.key == "d") {

      // 18. If dark boolean is currently false:
      // if (!darkMode){

      //   // 19. Switch to dark mode by adding and removing classes: 
      //   container.classList.add('dark-mode');

      //   // 20. Else, dark mode is already true 
      // } else {
      //   // 21. Switch to light mode:
      //   container.classList.remove('dark-mode');
      // } // end  if !darkmode

      //   // 22. Flip the dark boolean:
      //   darkMode = !darkMode;

      container.classList.toggle('dark-mode');
      return;

  } // end check if "d" key was pressed

  // 23. Check if the key is "f" for "font":
  if(event.key == 'f') {

  //   // 24. If serif boolean is currently false:
  //   if (!serifMode){

  //     // 25. Set the body font family to 'serif':
  //     container.classList.add('serif-mode');

  //     // 26. Else, serif boolean is already true:
  //   } else {

  //     // 27. Set the body font family to 'sans-serif':
  //     container.classList.remove('serif-mode');


  //   }// 28. Flip the serif boolean:
  //   serifMode = !serifMode;

    container.classList.toggle('serif-mode');
    return;
  }

  // 29. Check if the key is "p" for "pin" or "n" for "number":
  if (event.key == "p" || event.key == "n") {

    // 30. Generate a random number in the 0-9999 range:
    let r = ~~(Math.random() * 10000);

    // All pin numbers need to be four digits, so we need to add leading zero(es) to numbers in the 0-999 range.

    // 31. Declare a variable to store the pin as a string:
    let pin = "";    

    // 32. If r is 0, set pin to be four zeroes:
    // if(r == 0){
    //    pin = '0000';
    // // 33. else if r is less than 10, add three leading zeroes:
    // } else if (r < 10) {
    //    pin = "000" + r;
    // // 34. else if r is less than 100, add two leading zeroes:
    // } else if (r < 100){
    //    pin = "00" + r
    // // 35. else if r is less than 1000, add one leading zero:
    // } else if (r < 1000){
    //    pin = "0" + r
    // // 36. else r is a four-digit number, so use r as the pin:
    // } else {
    //   pin = "" + r;
    // }

    // one line of code
    let pinStr = "";
    pinStr = r.toString().padStart(4,"0")
    // padStart works on any string, not just stringy numbers
    let pet = "bunny";
    let numChars = pet.length+5;
    let petX = pet.padStart(numChars, "X2")

    // 37. Output the pin to the "pin box":
    pinBox.textContent = pinStr;
    return;
  } //check if n or p key was pressed
 
  // 38. If the Left Arrow was pressed:
        // OR: event.key == "ArrowLeft"
  if(event.key == "ArrowLeft") {

      // 39. If the spaceship isn't already all the way left:
    if(leftPos >= -25) {

        // 40. Reduce the leftPos value by the speed (default is 20):
        leftPos -= speed;

        // 41. Update the spaceship's left position:
        spaceship.style.left = leftPos + "px";
    } // end if left pos
    return;
  } //end if key is "arrow left"

  if(event.key == "ArrowRight") {

    // 39. If the spaceship isn't already all the way left:
  if(leftPos < window.innerWidth-200) {

      // 40. Reduce the leftPos value by the speed (default is 20):
      leftPos += speed;

      // 41. Update the spaceship's left position:
      spaceship.style.left = leftPos + "px";
  } // end if left pos
  return;
} //end if key is "arrow left"


  // 42. If the Right Arrow was pressed:
        // OR: event.key == "ArrowRight"

    // 43. If the spaceship isn't already all the way to the right (250px from the right end of the window):


      // 44. Increase the leftPos value by the speed (default is 20):

      // 45. Move the spaceship right by the speed value:


    // 46. If the key pressed is NOT 'c', 'd', 'f', 'p', 'n', left arrow or right arrow
    const hotKeysArr = ['c', 'd', 'p', 'f', 'n', 'LeftArrow', 'RightArrow'];
    // if the hot keys array does NOT include the current key, then the user typed a non-hot key, so return (do nothing) array.includes(value) checks to see if array contains the value and returns a boolean
    if(!hotKeysArr.includes(event.key)) {
      //47. output a message to the pin box, so at least something happens:
      pinBox.textContent = `"${event.key}" is not a hot key.`;
      return;
    }

} // end on KeyDown()

/*
* Random Hex Color
- A base 10 number uses the digits 0123456789 only
- A base-16 value uses the digits 0123456789ABCDEF only
- A hexadecimal color is a base 16 value
- toString() method converts a number to a string 
- toString(16) converts a base 10 number to a base 16 string 
- there exist 16,777,216 RGB colors (256 x 256 x 256)
- call toString(16) on an int from 0-16777215 to get a hex color
- Put '#' before the number to complete the hex color
*/

// 48. Declare a function that does ONE thing: makes a random hex color:


    // 49. Generate a random 16-digit float from 0-16777215
 
 
    // 50. Make a base-16 hexadecimal color from the random number and return it


    // 51. return the hexadecimal color value



 // Switch to using the getRandHexColor function:

 // 52. Comment out steps 10-13.

 // 53. In step 14, set randHex = getRandHexColor()

 // 54. In steps 15 and 16, set all three values to randHex.
