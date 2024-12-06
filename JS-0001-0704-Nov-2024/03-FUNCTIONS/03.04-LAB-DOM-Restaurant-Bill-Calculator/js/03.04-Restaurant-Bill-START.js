// Lesson 03.04 - START
// RESTAURANT BILL TAX AND TIP CALCULATOR

/* The restaurant bill calculator consists of a web form: 
- inputs for Food and Beverage Subtotals
- inputs for Food and Beverage subtotals
- select menus for Tip and Tax percent
- a Calculate button to call the calcBill function
- an h2 to display the itemized bill made by the function
*/

// 1. Get the form objects:


// 2. Have the button listen for a click and call the calcBill function when it is clicked:

// 3. Start writing the function. First thing it does is prevent the form from doing a default page reload:

    // 4. Get the values from the form. 
    // - Use the Number() method to convert the "number-like strings" to real numbers. Add the food and bev together to obtain the sub-total:
    let foodTot;

    // 5. Calc the tax and tip totals by mutiplying the subTot by the tax and tip rates. Since 15% is 0.15 (not 15) divide by 100:
    let tipTot;

    // 6. Add the tax and tip to the subtotal and round off tipTot, taxTot, total to two decimal places with toFixed(2). Be sure to do toFixed() AFTER the math is done, because toFixed() converts number to strings:
    let total;

    // 7. Get the date and time, so that they can be added to the bill. This is all review of Unit 02.04 - Date Object, so we won't discuss the code again here:
    let d;

    // 8. Concatenate the itemized bill and output it. The string includes <br> tags, so use innerHTML, rather than textContent:

    let bill;
    
    // output the bill to the web page (DOM)

// end calcBill function