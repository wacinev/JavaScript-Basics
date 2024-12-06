// Lesson 03.08 - FINAL

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
const container = document.querySelector('.container'); 
const keyBox = document.getElementById('key-box');
const pinBox = document.getElementById('pin-box');
const spaceship = document.getElementById('space-ship');
console.log(spaceship)

// 2. Set booleans to keep track of the font and dark mode states, which are toggled by pressing "f" and "d", respectively:
let darkMode = false;
let serifMode = false;

// 3. Set the left position of the spaceship to equal half the window width, minus half the width of the spaceship. This puts the spaceship in the middle of the screen to start:
let leftPos = window.innerWidth / 2 - 128;
console.log('window.innerWidth:', window.innerWidth);
console.log('leftPos:', leftPos);
spaceship.style.left = leftPos + 'px';

// 4. Set the speed of the spaceship. Each time the left or right arrow is pressed, the spaceship
let shipSpeed = 20;

// 5. Have the document listen for the keyup event. On keyup, run a function that outputs the key and code to the keyBox. Since the event object is used by the function, pass the event object into the function as its argument. Since the function is so short, write it as an inline anonymous function, as opposed to an external, named function:
// document.addEventListener('keydown', function(event) {
//     keyBox.innerHTML = event.key + "<br>" + event.code;
// });

// 6. Have document listen for the keydown event. When the event takes place -- which is when ANY key is pressed -- call the onKeyPress function.

// 7. Define the onKeyPress function, passing in the event object:
document.addEventListener('keydown', onKeyPress);
  // 8. Output the key and code that was pressed:

  // Check if the key is 'c', 'd', 'p', 'n' or the left or right arrow. 
function onKeyPress(event) {
  // setting random background color 

  // 9. Check if the key is "c" or 'C' for "color":
  if(event.key === 'c' || event.key === 'C') {

    // 10. Generate three integers in the 0-255 range
    // let R = ~~(Math.random()*256); // 0-255
    // let G = ~~(Math.random()*256); // 0-255
    // let B = ~~(Math.random()*256); // 0-255

    // 11. Concatenate the numbers into the rgb() method:
    // let randRGB = `rgb(${R},${G},${B})`;
    let randRGB = makeRandHex();

    // 12. Set the body background color to the random RGB color:
    document.body.style.backgroundColor = randRGB;
    keyBox.textContent = randRGB;

  // 17. Check if the key is "d" for "dark":
  } else if(event.key === 'd' || event.key === 'D') {

    // 18. If darkMode boolean is currently false:
    if(!darkMode) { // ! means NOT darkMode or darkMode==false

      // 19. Switch to dark mode by adding and removing classes: 
      container.classList.remove('light-mode');
      container.classList.add('dark-mode');
      // classList.add and .remove is better than explicitly setting
      // CSS in JS, cuz classList keeps the CSS in the CSS
      // container.style.backgroundColor = '#000'; better to not 

    } else { // 20. Else, dark mode is already true 
      // 21. Switch to light mode:
      container.classList.remove('dark-mode');
      container.classList.add('light-mode');
    }

    // 22. Flip the darkMode boolean:
    darkMode = !darkMode;

  // 23. Check if the key is "f" for "font":
  } else if(event.key === 'f' || event.key === 'F') {

    // 24. If serifMode boolean is currently false:
    if(!serifMode) {
      // 25. Set the container font family to 'serif':
      container.style.fontFamily = 'serif';

    } else { // 26. Else, serif boolean is already true:
      // 27. Set the container font family to 'sans-serif':
      container.style.fontFamily = 'sans-serif';
    }

    // 28. Flip the serif boolean:
    serifMode = !serifMode;

  // 29. Check if the key is "p" for "pin":
  } else if(event.key === 'p' || event.key === 'P') {
  
    // 30. Generate a random integer in the 0-9999 range:
    let r = ~~(Math.random()*10000);

    // All pin numbers need to be four digits, so we need to add leading zero(es) to numbers in the 0-999 range.

    // 31. Declare a variable to store the pin as a string:
    let pin = '';    

    if(r === 0) { // 32. If r is 0..
      // ..set pin to be four zeroes:
      pin = '0000';
    } else if(r < 10) { // 33. else if r is less than 10..
      // .. add three leading zeroes:
      pin = '000' + r;
    } else if(r < 100) {  // 34. else if r is less than 100.. 
      // .. add two leading zeroes:
      pin = '00' + r;
    } else if(r < 1000) { // 35. else if r is less than 1000..
      // .. add one leading zero:
      pin = '0' + r;
    } else { // 36. else r is a 4-digit number..
      // .. so just assign r as the pin:
      pin = r;
    }

    // 37. Output the pin to the "pin box":
    pinBox.innerHTML = 'PIN:<br>' + pin;
      
  // 38. If the Left Arrow was pressed:
  //     OR: event.key == "ArrowLeft"
  } else if(event.key === 'ArrowLeft') {

    // 39. If the spaceship isn't already all the way left:
    if(leftPos > 0) {

      // 40. Reduce the leftPos value by the speed (default is 20):
      leftPos -= shipSpeed;

      // 41. Reset the spaceship's left position to leftPos:
      spaceship.style.left = leftPos + 'px';

    }

  // 42. If the Right Arrow was pressed:
        // OR: event.key == "ArrowRight"
  } else if(event.key === 'ArrowRight') {

    // 43. If the spaceship isn't already all the way to the right (250px from the right end of the window):
    if(leftPos < window.innerWidth - 256) {

      // 44. Increase the leftPos value by the speed (default is 20):
      leftPos += shipSpeed;

      // 45. Move the spaceship right by the speed value:
      spaceship.style.left = leftPos + 'px';

    }
  // 46. If the key pressed is NOT 'c', 'd', 'p', 'f', 'ArrowLeft' or 'ArrowRigh'

  } else { // else do nothing, because key press was not a "hot key"

   // 47. Output a message to the pin box, so at least something happens:
   pinBox.textContent = `${event.key} is not a hot key.`;
   // return; // just return to end the function
  }

} // end function onKeyPress(event) 

/*
* Random Hex Color
- A base 10 number uses the digits 0123456789 only
- A base-16 value uses the digits 0123456789ABCDEF only
- A hexadecimal color is a base 16 value
- toString() method converts a number to a string 
- toString(16) converts a base 10 number to a base 16 string 
- there exist 16,777216 RGB colors (256 x 256 x 256)
- call toString(16) on an int from 0-16777215 to get a hex color
- Put '#' before the number to complete the hex color
*/

// 48. Declare a function that does ONE thing: makes a random hex color:
function makeRandHex() {

    // 49. Generate a random 16-digit int from 0-16777215
    // 256 x 256 x 256 = 16777216
    let r = ~~(Math.random()*16777216);
    // r = 125;
    // 50. Make a base-16 hexadecimal color from the random number and return it
    // toString(16) is called on a base-10 "normal number"
    // and returns the hex equivalent
    let hexColor = r.toString(16);

    // 51. return the hexadecimal color value
    return '#' + hexColor;

}

console.log(makeRandHex());
console.log(makeRandHex());
console.log(makeRandHex());

 // Switch to using the getRandHexColor function:

 // 52. Comment out steps 10-13.

 // 53. In step 14, set randHex = getRandHexColor()

 // 54. In steps 15 and 16, set all three values to randHex.

  // Alternatively, we caN generate the random color as a hex value, in which case we only need one random number.

    // 13. Comment out steps 10-12, and make a new random integer in the 0 - 16777215 range (256 x 256 x 256):
    // let r = Math.floor(Math.random() * (256 ** 3));

    // 14. Convert the random number to a base-16 (0-9, A-F) hexadecimal value by calling the toString(16) method on the number.
    // let randHex = "#" + r.toString(16); // hexify the number
    // let randHex;

    // 15. Set the body background color to the random hex color:
    // document.body.style.backgroundColor = randHex;

    // 16. Set the pinBox text and color to the random color:
    // pinBox.style.color = randHex; 

    // pinBox.textContent = randHex;

  // toggling between Dark Mode and Light Mode for the container
