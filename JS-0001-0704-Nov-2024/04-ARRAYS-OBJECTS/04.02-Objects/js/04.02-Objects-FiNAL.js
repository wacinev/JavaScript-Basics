// Lesson 04.02 - FINAL

// Objects

// 1. Open 04.02-Objects.html, and preview it in the browser. 

// 2. Click the Get Car Info button to display car object property values.

// 3. Choose an animal from the menu; we get animal object property values.

// 4. In 04.02-Objects.html, switch from importing FINAL.js to PROG.js.

// 5. Switch to 04.02-Objects.js.

// 6. Declare a const called sportscar, and set it equal to a pair of curly braces.
const sportscar = {};

// We use const to protect the data type from being mutated to, say, a string. 

// 7. Try to change sportscar to a string. We get an error:
// sportscar = "Porsche"; // ERROR: assignment to constant variable.

// An object declared with const cannot be mutated, but its properties can be added, removed and changed as we see fit.

// 8. Declare another object, this time assigning it properties as key-value pairs. The key and its value are separated by a colon. Properties are separated one from the other by a comma. Values can be any data type: strings, numbers and booleans. 
const car = {
  category: "sports car",
  make: "Ford",
  model: "Mustang GT",
  year: 1998,
  color: "red",
  condition: "excellent",
  miles: 1234556,
  onRoad: true,
  forSale: false,
};

// 9. Log the object and open it up in the Console to check the properties, which have been alphabetized:
console.log('car:', car);

// dot-syntax

// Properties are available only to their object. 
// To reference a property, use the dot-sytnax: 
// car.year returns the value 1998
console.log('car.year:', car.year); // 1998

// 10. Get some car properties, which returns the value:
console.log(car.type); // sports car
let carFullName = `${car.year} ${car.make} ${car.model}`;
console.log('carFullName:', carFullName); // 1999 Ford Mustang GT

console.log('car.miles:', car.miles);  // 123456
console.log('car.onRoad:', car.onRoad);  // true

// setting a property value

// To set a value, get the property and set it to a new value: 
// car.year = 1999 changes the year to 1999. Inside the curly braces, 
// key-value pairs are separated by a colon, but when a value is 
// changed later, an equal sign is used instead:
car.miles = 123789;
console.log('car.miles:', car.miles); // 123789

// 11. Set some car properties; this changes the value. 
car.category = "muscle car";
car.condition = "very good";

// 12. Log the whole object to see the changed values:
console.log('updated car:', car);

// adding properties

// Properties are added to an existing object the same way a property value is changed: object.key = value

// 13. Add three more properties to the car object: a string, a number and a boolean:
car.transmission = "manual";
car.doors = 2;
car.convertible = true;

// arrays and objects as properties

// Properties can be of any data type, including arrays and even other objects.

// 14. Add two more properties: an array and an object:
car.options = ['sun roof', 'CD player', 'leather seats']; 

// 15. Access array items using square bracket syntax:
console.log('get CD player only from car options:', car.options[1]); // CD player 

car.mpg = {city: 18, hwy: 24};

// 16. Access child objects using "dot-dot" syntax:
console.log('get city mpg:', car.mpg.city); // 18
console.log('get hwy mpg:', car.mpg.hwy); // 24

console.log('updated car:', car);

// bundling related properties into one

// 17. Add three properties having to do with the engine:
car.cylinders = 8;
car.liters = 4.6;
car.horsepower = 260;
console.log('updated car:', car);

// It works, but since these properties all pertain to the engine, 
// better might be to make an engine key and as its value 
// have an object of three properties:
car.engine = {cyl: 8, ltr: 4.6, hp: 260};
console.log('updated car:', car);

// 18. Bundle cylinders, liters and horsepower into an engine property. Since "engine" will be included in any reference to these properties, we can abbreviate the names without causing any confusion: 

// object property with array as its value:

// 19. Access the engine properties using "dot-dot" syntax:
console.log('get engine cylinders:', car.engine.cyl); // 8
console.log('get engine liters:', car.engine.ltr); // 4.6
console.log('get engine horsepower:', car.engine.hp); // 260

// deleting properties

// The delete keyword, preceding a property reference, removes that property. 
// Now that car has an engine property, we can delete horsepower, cylinders and liters.

// 20. Delete the horsepower, cylinders and liters properties:
delete car.cylinders;
delete car.liters;
delete car.horsepower;
console.log('updated car:', car)

// square bracket syntax for keys

// keys with spaces

// Keys are essentially variable names, but unlike "regular" variables, keys can have spaces. This may be a good option for a two-word key that we prefer to keep readable as such, as opposed to using camelCase. The space means we cannot use dot-syntax. Instead, the keys go in quotes, inside square brackets:

// 21. Add a few properties of two words each:
car["top speed"] = 149;
car["consumer reviews"] = 234;
car["stars rating"] = 4.7;

console.log('car["top speed"]:', car["top speed"]); // 149

// 22. Try to access "top speed" via dot syntax. With or without quotes, we get an error:
// car.top speed; // ERROR
// car."top speed"; // ERROR

// dynamic variable keys



// A key itself can be dynamic, that is a variable. For dynamic keys, 
// dot syntax won't work. Use square brackets, instead.

// 23. Declare a carKey variable, and set it equal to one of the keys, as a string:
let carKey = "model";

// 24. Using dot-syntax, try to get the car model as carKey. We get an error, because car has no carKey property:
// carKey // ERROR

// 25. To make car.carKey be understood as car.model, use square brackets,
// w variable inside as [carKey] without quotes around carKey:
console.log("car[carKey]:", car[carKey]); // Mustang GT

// 26. To set a multi-word key value, also use square brackets:
car["consumer reviews"] = 248;

// toLocaleString()

// The toLocaleString() method is called on a number and returns the 
// number with commas, converting it to a string in the process.

// 27. Get the six-digit mileage, and output it with a comma:
console.log("car miles w comma:", car.miles.toLocaleString()); // 123,567

// changing key name: 

// cannot directly change a key name, so just copy an old key to a new key
// and then delete the old key
car.odometer = car.miles;
delete car.miles;
console.log('updated car:', car);

// object methods

// - A method is a function that is scoped to -- belongs to -- an object
// - A method is a property of an object, where the value is a function
// - To make a method, set a key equal to an anonymous function
// - Inside a method, all other properties are available via the 'this' keyword
// - A method must return a value: call a method, gets the return value
const pet = {
  type: 'cat',
  name: 'Fluffy',
  cute: true,
  age: 3,
  toys: ['ball of yarn', 'pouch of catnip', 'Floppy Fish'],
  owner: {name: 'Jane', age: 34, job: "lawyer"},
  sound: 'Meow',
  // make a greet() method for pet obj. A method is a property whose value is a function
  greet: function() {
    return `${this.sound}! My name is ${this.name}! I am a ${this.age}-year-old ${this.type}!`
  }
};

console.log(pet.name) // Fluffy
console.log(pet.owner.name) // Jane
console.log(pet.age) // 3
console.log(pet.owner.age) // 34
console.log(pet.cute) // true
console.log(pet.owner.cute) // undefined
console.log(pet.job) // undefined
console.log(pet.owner.job) // lawyer
let greeting = pet.greet();
console.log('greeting:', greeting);

// 28. Assign the car object a method, called listForSale. It returns a 
// FOR SALE listing, concatenated from numerous properties referenced by 'this' syntax:
car.listForSale = function() {
  return `FOR SALE: ${this.year} ${this.make} ${this.model}. Odometer: ${this.odometer}!`;
}

// 29. Log a call to the method. We get the classified listing

// 30. Declare a variable, set equal to a call to the method, and then log it:
let listing = car.listForSale();
console.log(listing);

// outputting property values to the DOM

// 31. Get the elements where the car data is displayed:
const carTitleH2 = document.getElementById('car-title');
const carMPGH3 = document.getElementById('car-mpg');
const carEngineH3 = document.getElementById('car-engine');
const carOptionsH3 = document.getElementById('car-options');
const carListingP = document.getElementById('car-listing');

// 32. Get the button, and have it call the showCarInfo function when clicked:
const btn = document.querySelector('button');
btn.addEventListener('click', showCarInfo);

// 33. Define the showCarInfo function:
function showCarInfo() {
  this.style.display = "none";
  carTitleH2.textContent = `${car.year} ${car.make} ${car.model}`
  carMPGH3.textContent = `MPG: City: ${car.mpg.city} Hwy: ${car.mpg.hwy}`;
  carEngineH3.textContent = `Engine: ${car.engine.cyl} cyl, ${car.engine.ltr}L, ${car.engine.hp}hp`;
  carEngineH3.textContent = `Loaded: ${car.options[0]}, ${car.options[1]}, ${car.options[2]}`;
  carListingP.textContent = car.listForSale();
}

  // 34. Hide the button, since it only gets clicked once:


  // 35. Output the title as "year make model":


  // 36. Output the properties of the mpg property:


  // 37. Output the properties of the engine property:

  // 38. Output the options, one array item at a time:


  // 39. Output the two-word properties, using square bracket syntax:


  // Output the FOR SALE listing, which is returned by the listForSale() method:

// end function showCarInfo()

/*
// arrays of objects

// In web applications, data is often stored as arrays of objects or objects with child objects for properties. For this animal menu part of the lesson, we will work with an extenal file, animals.js, which contains an array of animal objects.

40. Open animals.js. It contains two big variables, an object called animalsObj, and an array by the name of animalsArr.

- animalsObj consists of 20 properties:
  - Each key is an animal name, with 2-word names in quotes.
  - Each value is an object with 3 properties:
      - class (value is string)
      - herbivore (value is boolean)
      - continent (value is string)

- animalsArr has 20 items, each an object
  - The objects are not key-values
  - The animal name is a property--not a key
  - Each array item object has 4 properties:
      - name (value is string)
      - class (value is string)
      - herbivore (value is boolean)
      - continent (value is string)

// We will use animalsObj for this exercise:

// 41. Get the DOM elements for the animals:
*/


// 42. Have the menu call a function on 'change' (menu choice):

// 43. Define the function that runs when a menu choice is made:

    // 44. The menu value is an animal, such as "giraffe" or "panda". Save it to a variable, animal:
    let animal; // e.g. giraffe, panda

    // 45. Look up the animal in the animals object, using the string variable as the dynamic key. For this, we use square brackets--not dot-syntax:
    let animalObj;

    // 46. Output the property values to their respective tags:


    // 47. Set the souce of the animal image:


/*
CHALLENGE: 
Make another function that produces the same DOM output. 
BUT rather than get data from the animals object, uses animalsArr, which is the array of objects
animalsMenu.addEventListener('change', showAnimalInfo);
*/

const anPic = document.getElementById('animal-pic')
const anClass = document.getElementById('animal-class')
const anContinent = document.getElementById('continent');
const anDiet = document.getElementById('diet');
const anName = document.getElementById('animal-name');

const animalMenu = document.getElementById('animal-menu');
// animalMenu.addEventListener('change', displayAnimalInfo);

function displayAnimalInfo () {
    let i = animalMenu.selectedIndex;
    console.log('i:', i)
    const animal = animalsArr[i-1];
    console.log(animal);
    anPic.src = `images/${animal.name}.jpg`;
    anClass.textContent = `Class: ${animal.class}`;
    anContinent.textContent = `Continent: ${animal.continent}`;
    if(animal.herbivore) {
        anDiet.textContent = 'Diet: Herbivore';
    } else {
        anDiet.textContent = 'Diet: Carnivore';
    }
    anName.textContent = `${animal.name}`;
}

// refactored animals using animalsObj rather than amimalsArr 
animalMenu.addEventListener('change', showAnimalData);

function showAnimalData() {
  // use the animal menu value to look up the matching key
  let animalName = this.value; // "penguin" or "kangaroo" or whatever
  let animalObj = animalsObj[animalName]; // dynamic obj accessor: object[key]
  anPic.src = `images/${animalName}.jpg`;
  anName.textContent = `${animalName}`;
  anClass.textContent = `Class: ${animalObj.class}`;
  anContinent.textContent = `Continent: ${animalObj.continent}`;
  anDiet.textContent = animalObj.herbivore ? 'Diet: Herbivore' : 'Diet: Carnivore';
}

  // 48. The menu animals are in the same order as the array animals, so get the index of the chosen animal:
  // let indx;

  // 49. Look up the animal in the array. Subtract one from the index, since the second menu choice is the first animal:
  // {name: 'giraffe', class: 'mammal', herbivore: true, continent: 'Africa'}

  // 50. Output the name of the animal:
  // giraffe

  // 51. Output the class and continent:

  // 52. Output the animal image:

  // converting boolean to user-friendly output

  // For the Herbivore part, we don't want to literally output 'true' or 'false'. Better would be a more user-friendly "Yes" or "No". For this we need conditional logic that sets a string to "Yes" or "No", depending on the value of the boolean:

  // 53. Do a ternary that sets a variable to "Yes" or "No":
  // let yesNo;

  // 54. Output Herbivore: Yes (for giraffe) or Herbivore: No (for lion:

// Car Menu
// get the DOM elements where the data output goes:
const carPic = document.getElementById('car-pic2');
const carTitle = document.getElementById('car-title2');
const carMPG = document.getElementById('car-mpg2');
const carEngine = document.getElementById('car-engine2');
const carOptions = document.getElementById('car-options2');
const carListing = document.getElementById('car-listing2');
// get car menu and have it call function:
const carMenu = document.getElementById('car-menu');
// carMenu.addEventListener('change', displayCarInfo);

function displayCarInfo() {
  // get the index of the selected option
  let i = carMenu.selectedIndex;
  // look up corresponding object in cars array by index
  const car = carsArr[i];
  console.log('car Object:', car);
  // output the chosen car image:
  carPic.src = `images/cars/${car.image}`;
  // output the title
  carTitle.textContent = `${car.year} ${car.make} ${car.model}`;
  // output the mpg for city and highway
  carMPG.textContent = `MPG: ${car.mpg.city} City, ${car.mpg.hwy} Hwy`;
  // output the 3 engine specs: BUT if category is "electric" do NOT output cyl, and liters, cuz these are zeroes--instead output: "EV (Electric Vehicle)" 
  // keep the horsepower part
  if(car.category == 'electric') {
    carEngine.textContent = `EV (Electric Vehicle), ${car.engine.hp} hp`;
  } else {
    carEngine.textContent = `Engine: ${car.engine.cyl} cyl, ${car.engine.L} L, ${car.engine.hp} hp`;
  }
  // output the method (for sale listing)
  carListing.textContent = car.listForSale();
}

// refactored Car Menu: do not require options to be in same order as car array data obj; to do this, we CANNOT use the selectedIndex to look up the car 
// so use sthg that DOES always have a match: the "model" which we have as the value of the selected option
// comment out the original listener and move it down here, calling new func:
carMenu.addEventListener('change', showCarData);

function showCarData() {
  // loop the carsArr, item by item, comparing each item's model to carModel
  for(let i = 0; i < carsArr.length; i++) {
    // check if the selected car's value matches the current car obj model:
    if(this.value == carsArr[i].model) {
      const car = carsArr[i];
      carPic.src = `images/cars/${car.image}`;
      carTitle.textContent = `${car.year} ${car.make} ${car.model}`;
      carMPG.textContent = `MPG: ${car.mpg.city} City, ${car.mpg.hwy} Hwy`;
      if(car.category == 'electric') {
        carEngine.textContent = `Battery Powered Electric Vehicle, ${car.engine.hp} hp`;
      } else {
        carEngine.textContent = `Engine: ${car.engine.cyl} cyl, ${car.engine.L} L, ${car.engine.hp} hp`;
      }
      carListing.textContent = car.listForSale();
      return; // mission accomplished.. found the car and outputted the data, so stop looping
    }
  }
}

/* POPULATE w SELECTED CAR DATA:
  <h2 id="car-title2"></h2>
  <h3 id="car-mpg2"></h3>
  <h3 id="car-engine2"></h3>
  <h3 id="car-options2"></h3>
  <hr>
  <h3 id="car-reviews-ratings2"></h3>
  <hr>
  <p id="car-listing2"></p>            
*/

// Objects {} are truthy:
if({name:'Bob', age:45}) {
  console.log("objects are truthy");
}

// EMPTY objects {} are also truthy:
if({}) {
  console.log("even EMPTY objects are truthy");
}

