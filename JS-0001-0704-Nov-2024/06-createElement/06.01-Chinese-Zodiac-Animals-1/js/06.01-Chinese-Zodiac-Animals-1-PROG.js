// Lesson 06.01 - START

// Chinese Zodiac Animals, Part 1

// 9. Open **06.01-Creating-Elements-START.js** and get the **section** that serves as the parent wrapper of the interface:
const section = document.querySelector('section');

// 10. instantiate ana audio object for playing sounds
const sound = new Audio()
// 13. Reload the page. In the upper left corner of the section there should be one smallish box that says *dynamic div*.

// making the set of 12 Chinese Zodiac Animals
// Now that we have that working, let's use a loop to make all 12 divs.

// 14. Wrap the code that made the div in a for loop that runs 12 times. For text output, number the divs with the counter, **i**:
for(let obj of animals){
    // 10. Make a div with **createElement()**:
    const divvy = document.createElement('div'); // createlement for when are outting stuff in the element (when there is a closing tag)
    // 11. Apply the existing **.divvy** class to the div and Give the div some text content, as a test:
    divvy.className = 'divvy';
    
    // 12. Use **appendChild()** to output the div inside the section:
    section.appendChild(divvy);

    // 16. Still in the loop, make an image for each div, using*new Image():
    const pic = new Image(); // if has a src element use new __()

    // 17. Set the source of the image to **cow.jpg**. The result will be 12 cows: 
    // 21. Change the source to be dynamic, so that we get all 12 animals--not just the cow. Concatenate the **eng** property into the file path. 
    pic.src = `images/animals/${obj.eng}.jpg`;

    // 18. Apply the **.animal-pic** class to the image:
    pic.className = 'animal-pic';
    // 19. In terms of nesting, **divvy** goes inside **section** and **pic** goes inside **divvy**:
    divvy.appendChild(pic);

    // 24. Still in the loop, make the **input** box:
    const input = document.createElement('input');
    // 25. Assign the input box a type of **search**. This will give the box a little X to clear it, and it also provides a **change** event, which calls a function when the user hits Enter: 
    input.type = 'search';

    // 26. Assign the box a **placeholder** to prompt the user to enter the animal name:
    input.placeholder = '   ???';

    // 27. Assign **eng**, **chi** and **also** properties to the input box. These will be used by the **checkSpelling** function to see if the user input matches any of the three accepted spellings:


    // 28. Also save the current index as a property of the input box. This will come in handy down the road (next lesson):


    // 29. Have the input box call the function when its search event is fired:
    input.onchange = function() {
        let txt = input.value;
        if (txt == obj.eng || txt == obj.chi || obj.aka.includes(txt)){
            input.style.backgroundColor = '#373';
            engSpan.style.display = 'block';
            pinSpan.style.display = 'block';
        } else {
            input.style.backgroundColor = '#A33';
        }
            input.style.color = '#fff';    
        }
        
    // 30. Also the input box call the function on **blur**, and event which fires when the user hits **Tab** to leave an input box. Tab moves the cursor to the next input box, so it's a handy way to navigate from one animal div to the next:


    // 31. Output the input box to the div. It will appear under the animal image:
    divvy.appendChild(input);

    // 32. make a p-tag to hold the years
    const yearsP = document.createElement('p');

    //33. assign the p-tag its class
    yearsP.className = 'zodiac-year';

    //34. output the p-tag to divvy
    divvy.appendChild(yearsP);

    //35. populate the p-tag with years by generating a string of years on a loop:
    let yr = obj.year;
    for(let y = yr-144; y<= yr+24; y+=12){
        yearsP.textContent += y + ' ';
    }

    // 36. make a sound icon image
    const soundIcon = new Image();

    //37. apply the class and set the src.
    soundIcon.className = 'sound-icon';
    soundIcon.src = 'images/sound-icon.png';
    
    //38. output the sound iconto divvy
    divvy.appendChild(soundIcon);

    //39. have the sound icon call a funciton on click; function plays that animals mp3 audio
    soundIcon.onclick = function() {
        sound.pause();
        sound.src = `audio/${obj.eng}.mp3`;
        sound.play();
    }

    //40. make the chinese char image:
    const char = new Image();
    char.src = `images/chars/char-${obj.chi}.jpg`;

    // 41. 
    char.className = 'chinese-char';

    // 43. output chinese character
    divvy.appendChild(char);

    //44. make a span to hold the english name
    const engSpan = document.createElement('span');
    engSpan.textContent = obj.eng;

    //45. apply the english class:
    engSpan.className = 'english';

    //46. outut th english name span to divvy:
    divvy.appendChild(engSpan);

    //44. make a span to hold the english name
    const pinSpan = document.createElement('span');
    pinSpan.innerHTML = obj.pin;

    //45. apple the english class:
    pinSpan.className = 'pinyin';

    //46. outut th english name span to divvy:
    divvy.appendChild(pinSpan);


}// end loop

// 20. Reload the page. We should have 12 divs, each with the cow.

// We need to make the **checkSpelling** function before reloading the page in the browser. If the function referred to in the listener does not exist at that point, we'll get an error.

// this keyword

// Inside a function, the **this** keyword refers to the object that called the function. In the **checkSpelling** function, **this** is the input box:

// 32. Define the **checkSpelling** function and start by getting the **value** of the input element--whatever the user typed into the box:

    let input;

    // 33. Compare the user input to the English, pinyin and alternate (also) spelling. The user input needs to match *one* of the three correct spellings:

        // 34. If the user input is correct, turn the input box green; else turn the box red:

 
// 35. Reload the page. Each box should have an animal pic and an input box.

// 36. Enter a spelling in a box and hit Enter. 
// - if the spelling is correct, the input box turns green. 
// - else, the spelling is incorret, so the box turns red.

// END: Lesson 06.01
// NEXT: Lesson 06.02