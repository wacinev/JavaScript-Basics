// Lesson 09.03 - START
// Cocktail API

/* There are 3 ways to get cocktails: 
- search box: input keyword /ingredient
- select menu: choose keyword / ingredient
- button: get random cocktail
ALL 3 ways call the same function: getCocktail
*/

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=list')
  .then((response) => response.json())
  .then((data) => {
    // for each ingredient
    data.drinks.forEach((ingredient) => {
      // create an option element
      const menuItem = document.createElement('option');
      // add the ingredient name as the value
      menuItem.value = ingredient.strIngredient1;
      // add the ingredietn name as the text
      menuItem.textContent = ingredient.strIngredient1;
      // add the option to the select
      dropdownMenu.appendChild(menuItem);
    })
  })

const cocktailOutput = document.querySelector('#cocktail-box')
// get the search box (input):
const searchBox = document.getElementById('search-box');

// get the select menu:
const dropdownMenu = document.querySelector('#menu');

// searchUrl + "i=" + this.value

// get Random Cocktail btn
const randomButton = document.getElementById('rand-btn');
// click Random Cocktail btn to call function
randomButton.addEventListener('click', () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
    method: 'GET'
  }).then((response) => response.json())
    .then((data) => {
      cocktailOutput.innerHTML = '';
      const drink = data.drinks[0];
      displayDrink(drink);
    });
})

//Search

searchBox.addEventListener('input', searchCocktail);

function searchCocktail(){
  const userSearch = searchBox.value;
  if (userSearch === ''){
    cocktailOutput.innerHTML = '';
    return;
  }

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  

  fetch(url + userSearch)
    .then((response) => response.json())
    .then((data) => {
      cocktailOutput.innerHTML = '';
      for (let i = 0; i < data.drinks.length; i++){
        displayDrink(data.drinks[i]);
      }
    })
}

dropdownMenu.addEventListener('change', () => {
  //grab the current ingredient from the menu
  const ingredient = dropdownMenu.value
  // make an api request for drinks that have that ingredient 
  fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
    .then((response) => response.json())
    .then((data) => {
      data.drinks.forEach(displayDrink)
    })
  // display each of those drinks

})

const displayDrink = function(drink) {
  // Name of drink
  const drinkHeadingContainer = document.createElement('div');
  const drinkHeading = document.createElement('h5');
  drinkHeading.textContent = drink.strDrink;
  drinkHeadingContainer.appendChild(drinkHeading);
  
  //Picture
  const thumbnailContainer = document.createElement('div')
  const thumbnail = document.createElement('img');
  thumbnail.src = drink.strDrinkThumb;
  thumbnailContainer.appendChild(thumbnail)
  
  //Ingredients Heading
  const ingredientsHeading = document.createElement('h5');
  ingredientsHeading.textContent= 'Ingredients'
  
  //Ingredients List
  const ingredientsList = document.createElement('ul');
  // create a variable 'n' set to 1
  let n= 1;
  //as long as there is an ingredient with that number 
  while (drink['strIngredient' + n] !==null) {
    let measure = drink['strMeasure' + n];
    const ingredient = drink['strIngredient' + n];
    if (measure === null) {
      measure = '';
    } else if (measure.endsWith(' ') === false){
      measure += ' ';
    }
    
    const ingredientElement = document.createElement('li');
    ingredientElement.textContent = measure+ingredient
    ingredientsList.appendChild(ingredientElement); 
    //grab the measure (if exists) and the ingredient at that number create an li with those values append the li to the ul

    n++
  }

  // Instructions
  const instructionsHeading = document.createElement('h5');
  instructionsHeading.textContent = 'Instructions'
  const instructionsParagraph = document.createElement('p');
  instructionsParagraph.textContent = drink.strInstructions;


  // Put it all on the DOM
  cocktailOutput.appendChild(drinkHeadingContainer);
  cocktailOutput.appendChild(thumbnailContainer);
  cocktailOutput.appendChild(ingredientsHeading);
  cocktailOutput.appendChild(ingredientsList);
  cocktailOutput.appendChild(instructionsHeading);
  cocktailOutput.appendChild(instructionsParagraph);
}
// output here

// define getCocktail() function:

// "https:thecocktaildb.com/api/json/v1/1/"

// `search.php?s=`

// `search.php?f=`

// "random.php"

// "search-box" ""
// "menu"
// "GET"
// .t
// .t
console.log("obj.drinks[0]:");
// ""
// sort results by strDrink (drink name from A-Z)
// obj
// a,b 1 -1
// for
console.log("drink:");
// the ingredients come in as separate properties:
// 'strIngredient1': 'rum', 'strIngredient2': 'ginger ale', etc.
// all obj have same number of 'strIngredientN' properties, so some of them
// are null; this makes outputting ingredients list difficult
// start by getting all the non-null ingredients into an array of strings:
// []
// for
// if key includes 'strIngredient', it is an ingredient
// if drink[key] is true, the key is not null (not falsey)
// 'strIngredient'
// Tequila Sour lists "lemon" twice as an ingredient
// so only push not-yet-included ingredients into array:
// if ! key
// push
// add the correspondingly numberered strMeasure to the array,
// getting the number from the last char of strIngredient
let num;
console.log("num:", num);
// "strMeasure"

console.log("\ningredMeasurArr:");

// "div"
// "drink-div"
// append

// 'h1'
// drink.
// append

// 'div'
// 'drink-text-div'
// append

// 'p'
// drink.
// append

// ingredients + measure list:
// 'h3'
// "Ingredients:"
// append

// 'ul'
// append

// loop the ingredients + measures array, where these are consecutive items
// increment by += 2 each time to get pairs: ingredient + measure
// for
// 'li'
// add the ingredient and its measure as the text of the list item:
let ingredient;
let measure; // replace null measures with empty string
// text
//  append
// }

// Glass:
// 'p'
// append
// "Serve in "
// "italic"
// 0
// 0
// append

// new
// src
// append

// if ! br
// }
// })
// .catch(err => console.log("Something went wrong", err))
// };

// Challenge 2: Make 26 buttons, one per letter, and put them into the btn-div. The css for the buttons is already done. Use the letter-btn class for each button. Have each button call a function called getCocktailsByLetter():
// Hint: refer to Chinese Zodiac Animals (06.02-06.03) for how to make elements dynamicallyw/ a loop.
// Hint 2: each button needs an id and text content, which in both cases is just the letter.

// "btn-div"

// for (let l = 'A'; l <= 'Z'; l = String.fromCharCode(l.charCodeAt(0) + 1)) {
//     let l = lettersArr[i];
//     if(l == "U" || l == "X") continue;
//     const button = document.createElement("button");
//     button.textContent = l;
//     button.id = l.toLowerCase();
//     button.className = "letter-btn";
//     button.addEventListener("click", getCocktail);
//     btnDiv.appendChild(button);
// }

// "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// ''

// for (let l = 'A'; l <= 'Z'; l = String.fromCharCode(l.charCodeAt(0) + 1)) {
// forEa
// "U" "X"
// "button"
// l
// Case
// "letter-btn"
// "click"
// append
//     }
// });

// for(let i = 0; i < lettersArr.length; i++) {
//     let l = lettersArr[i];
//     if(l == "U" || l == "X") continue;
//     const button = document.createElement("button");
//     button.textContent = l;
//     button.id = l.toLowerCase();
//     button.className = "letter-btn";
//     button.addEventListener("click", getCocktail);
//     btnDiv.appendChild(button);
// }

// make the select menu choices
const cocktailkKeywords = [
  "Amaretto",
  "Beer",
  "Black",
  "Bloody",
  "Bourbon",
  "Fizz",
  "Brandy",
  "Cherry",
  "Chocolate",
  "Coffee",
  "Coke",
  "Cream",
  "Gin",
  "Green",
  "Iced",
  "Island",
  "Lemon",
  "Lime",
  "Liqueur",
  "Milk",
  "Orange",
  "Red",
  "Rum",
  "Salt",
  "Scotch",
  "Soda",
  "Sour",
  "Spiced",
  "Tea",
  "Tequila",
  "Vodka",
  "Whiskey",
  "Wine",
  "Royal",
  "Punch",
  "Peach",
  "Cranberry",
  "Russian",
  "Captain",
  "Port",
  "Cooler",
  "Smash",
  "Cocktail",
  "Irish",
  "Jamaican",
  "Tonic",
  "Slammer",
  "Apple",
  "Grape",
  "Cider",
  "High",
  "Long",
  "Caribbean",
  "Hot",
  "Almond",
  "Shot",
  "-",
  "Sweet",
  "Old",
  "Banana",
  "Classic",
  "Electric",
  "Big",
  "Bermuda",
  "English",
  "Italian",
  "Smoothie",
  "Ginger",
  "Banana",
  "Papaya",
  "Frozen",
  "Pineapple",
  "Kiwi",
  "Rose",
  "Blue",
  "Mojito",
  "Martini",
  "French",
  "Mango",
  "Negroni",
  "Golden",
  "Night",
  "Cold",
  "Mint",
  "Daiquiri",
  "Margarita",
  "Smash",
  "Shake",
  " and ",
  "Sling",
  "Berry",
  "Champagne",
  "Jack",
  "Hawaii",
  "Cordial",
  "Fruit",
  "Spring",
  "Spice",
  "Toddy",
  "Watermelon",
  "Lassi ",
];

// sort

// for(let i = 0; i < cocktailkKeywords.length; i++) {
// forEa
// 'option'
// val
// ". "
// "-" ". - (hyphen)"
// append
// });

/*
I added ingredients to the text. This was tricky to do, because the ingredients don't come as an array, which is what you want. Instead, they come in as a bunch of separate properties: "strIngredient1": "rum", "strIngredient2": "ginger ale", -- like that.
To make it even trickier to get the ingredients in a clean, usable format, all drink objects have the same number of "strIngredient" properties, but with the value set to null when they run out of actual ingredients..
What we need to do is extract the values of all keys that include the sub-string "strIngredient" AND (&&) whose values are not null.
To get the ingredient values into a new array, I looped the drink object, key by key, pushing to a new array all those values whose key includes the sub-string "strIngredient"..
We didn't do much looping of objects by key in this course--we mostly looped arrays--so this is an EXCELLENT example to study closely so as to add "looping objects by key" to your ever-growing repertoire of JS moves:
I made the ingredients as a bulleted list, so to hold the p tag and list, I made a new div under the h1, called drinkText. Inside drinkText goes the drink info, followed by an h3 that says "ingredients".
Beneath the h3 comes the bulleted list (ul tag with li tags nested inside). There needs to be one li for each ingredient, so we loop the ingredientsArr, making one li each time.. I used forEach() for this, as opposed to a for loop, just to give you some practice w the forEach() array method.
Below, the new code for all this is bolded within the context of the entire second then() .. The new sort() code is also bolded in case you missed that upgrade, posted previously to Slack here..
There is new CSS to go with this, as well. That too is pasted below:
*/
