// Lesson 06.01 - START

// Chinese Zodiac Animals, Part 1

// 9. Open **06.01-Creating-Elements-START.js** and get the **section** that serves as the parent wrapper of the interface:

// 10. Make a div with **createElement()**:

// 11. Apply the existing **.divvy** class to the div and Give the div some text content, as a test:


// 12. Use **appendChild()** to output the div inside the section:


// 13. Reload the page. In the upper left corner of the section there should be one smallish box that says *dynamic div*.

// making the set of 12 Chinese Zodiac Animals
// Now that we have that working, let's use a loop to make all 12 divs.

// 14. Wrap the code that made the div in a for loop that runs 12 times. For text output, number the divs with the counter, **i**:


    // 15. Reload the page. All 12 divs should appear, in two rows of six. The divvy class has *display: inline-block* to arrange the divs side-by-side.

    // 23. We will be using the **animals** array a lot, so to simplify property access, save the current animal **animals[i]** to a variable, **animal**. Update the concatenation to use the more streamlined **animal.eng**:
    let animal;

    // 16. Still in the loop, make an image for each div, using*new Image():
    let pic;

    // 17. Set the source of the image to **cow.jpg**. The result will be 12 cows: 
    // pic.src = 'images/animals/cow.jpg';

    // 21. Change the source to be dynamic, so that we get all 12 animals--not just the cow. Concatenate the **eng** property into the file path. The current animal is available as **animals[i]** and its English name is **animals[i].eng**:
    // 22. Reload the page. We should have 12 divs, each with a different animal.

    // 18. Apply the **.animal-pic** class to the image:

    // 19. Delete the text and output the image inside the div. In terms of nesting, **divvy** goes inside **section** and **pic** goes inside **divvy**:


    // 24. Still in the loop, make the **input** box:

    // 25. Assign the input box a type of **search**. This will give the box a little X to clear it, and it also provides a **search** event, which fires when the user hits Enter: 


    // 26. Assign the box a **placeholder** to prompt the user to enter the animal name:
    

    // 27. Assign **eng**, **chi** and **also** properties to the input box. These will be used by the **checkSpelling** function to see if the user input matches any of the three accepted spellings:


    // 28. Also save the current index as a property of the input box. This will come in handy down the road (next lesson):


    // 29. Have the input box call the function when its search event is fired:


    // 30. Also the input box call the function on **blur**, and event which fires when the user hits **Tab** to leave an input box. Tab moves the cursor to the next input box, so it's a handy way to navigate from one animal div to the next:


    // 31. Output the input box to the div. It will appear under the animal image:


// end loop

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