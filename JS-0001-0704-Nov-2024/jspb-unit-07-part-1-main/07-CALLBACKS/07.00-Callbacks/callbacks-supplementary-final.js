// Let's grab some DOM elements we'll have to deal with:
const gradeList = document.querySelector('#grades');
const teacherList = document.querySelector('#roster-list');

// Some arrays to work with:

const roster = [
  {
    name: 'Colin Jaffe',
    class: 'JavaScript Development With Node, Express, and MongoDB',
  },

  {
    name: 'Art Yudin',
    class: 'Python for Data Science',
  },

  {
    name: 'Dan Rodney',
    class: 'JavaScript for Front End',
  },

  {
    name: 'Brian McClain',
    class: 'JavaScript Programming Bootcamp',
  }
];

const gpas = [3.1, 3.0, 4.0, 3.8, 3.5, 2.8, 4.0, 3.1, 3.6, 4.0, 3.5, 3.2, 3.3];

// Standard do-something-to-each-element loops:

console.log('*** In a regular loop: ***')
for (let i = 0; i < roster.length; i++) {
  console.log(roster[i].class);
}

for (let i = 0; i < gpas.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = gpas[i].toFixed(1)
  gradeList.appendChild(listItem);
}

let gradeSum = 0;
for (let i = 0; i < gpas.length; i++) {
  gradeSum = gradeSum + gpas[i];
}

const classAverage = gradeSum / gpas.length;
const averageArea = document.querySelector('#average');
averageArea.textContent = classAverage.toFixed(2);

for (let i = 0; i < roster.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = roster[i].name + ' - ' + roster[i].class;
  teacherList.appendChild(listItem);
}

// Each loop, we define what we do for ONE element. We then loop through all the elements and do that thing to each one.
// This is a common pattern in programming. What if we defined a function that did the thing to one element, and then called that function for each element?

// Let's define a function that takes a roster item and logs the class:

const logClass = function(item) {
  console.log(item.class);
}

// Now we can use that function to log the class of each roster item:

console.log('*** Using a function: ***')
for (let i = 0; i < roster.length; i++) {
  logClass(roster[i]);
}

// Let's define a function that takes a GPA and adds it to the list:

const addGpaToList = function (gpa) {
  const listItem = document.createElement('li');
  listItem.textContent = gpa.toFixed(1);
  gradeList.appendChild(listItem);
}


// Now we can use that function to add each GPA to the list.
// Comment out the previous loop and write the following loop to see the same thing done with a function:

for (let i = 0; i < gpas.length; i++) {
  addGpaToList(gpas[i]);
}

// Let's define a function that takes a GPA and adds it to the sum:

const addGpaToSum = function (gpa) {
  gradeSum = gradeSum + gpa;
}

// Now we can use that function to add each GPA to the sum.
// Comment out the previous loop and write the following loop to see the same thing done with a function:

gradeSum = 0;
for (let i = 0; i < gpas.length; i++) {
  addGpaToSum(gpas[i]);
}

// Let's define a function that takes a roster item and adds it to the list:

const addRosterItemToList = function (item) {
  const listItem = document.createElement('li');
  listItem.textContent = item.name + ' - ' + item.class;
  teacherList.appendChild(listItem);
}

// Now we can use that function to add each roster item to the list:
// Comment out the previous loop and write the following loop to see the same thing done with a function:

for (let i = 0; i < roster.length; i++) {
  addRosterItemToList(roster[i]);
}

// All we've done is moved our logic into functions. This is a good thing! It
// makes our code more modular and easier to read. But we can go further.

// Now here comes the big leap. Notice that all that's changing is:

// - the array we're looping through
// - the function we're calling on each element

// What if we defined a function that took an array and a function, and called
// that function for each element in the array?

const forEach = function (array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// Now we can use that function to log the class of each roster item:

console.log('*** Using our forEach function: ***')
forEach(roster, logClass);

// Now we can use that function to add each GPA to the list.
// Comment out the previous loop and use our forEach function instead:

forEach(gpas, addGpaToList);

// Now we can use that function to add each GPA to the sum.
// Comment out the previous loop and use our forEach function instead:

forEach(gpas, addGpaToSum);

// Now we can use that function to add each roster item to the list.
// Comment out the previous loop and use our forEach function instead:

forEach(roster, addRosterItemToList);

// This is a very common pattern in programming. We define a function that takes
// another function as an argument, and then calls that function for each
// element in an array. This is so common in fact that JavaScript has a built-in
// array method that does this: forEach.

// Let's use the built-in forEach method to log the class of each roster item:

console.log('*** Using the built-in forEach: ***')
roster.forEach(logClass);

// Let's use the built-in forEach method to add each GPA to the list.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:

gpas.forEach(addGpaToList);

// Let's use the built-in forEach method to add each GPA to the sum.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:

gpas.forEach(addGpaToSum);

// Let's use the built-in forEach method to add each roster item to the list.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:

roster.forEach(addRosterItemToList);

// Now let's take a look at some use cases for map.

// Let's define a function that takes a roster item and returns the class:

const getClass = function (item) {
  return item.class;
}

// Let's write a loop that uses that function to get an array of just the class names:

const classes = [];
for (let i = 0; i < roster.length; i++) {
  classes.push(getClass(roster[i]));
}

// Let's look at another example. What if we wanted an array of teachers with
// their classes?

const getTeacherAndClass = function (item) {
  return item.name + ' - ' + item.class;
}

// Let's write a loop that uses that function to get an array of teacher and
// class strings:

const teacherClasses = [];
for (let i = 0; i < roster.length; i++) {
  teacherClasses.push(getTeacherAndClass(roster[i]));
}

// Now let's write a function to add each teacher and class to the list:

const addTeacherAndClassToList = function (item) {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  teacherList.appendChild(listItem);
}

// Now we can use that function to add each teacher and class to the list.
// Comment out the previous forEach call for adding roster items to the list and
// use the following call instead.

teacherClasses.forEach(addTeacherAndClassToList);

// Having a transformed array is a common pattern. Let's define a function that
// takes an array and a function, and returns a new array with the function
// applied to each element:

const map = function (array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }

  return newArray;
}

// Now we can use that function to get an array of just the class names.

const classes2 = map(roster, getClass);

// Or to get an array of teacher and class strings:

const teacherClasses2 = map(roster, getTeacherAndClass);

// And then to add each teacher and class to the list, we'll do the following.
// Comment out the previous forEach call for adding teacher and class strings to
// the list and use the following call instead.

teacherClasses2.forEach(addTeacherAndClassToList);

// Again, this is such a common pattern that JavaScript has a built-in array method
// that does this: .map.

// Let's use the built-in .map method to get an array of just the class names:

const classes3 = roster.map(getClass);

// Let's use the built-in .map method to get an array of teacher and class strings:

const teacherClasses3 = roster.map(getTeacherAndClass);

// The final callback function we'll explore is filter. Let's define a function
// that takes a roster item and returns true if the class is a JavaScript class:

const isJavaScript = function (item) {
  return item.class.includes('JavaScript');
}

// Let's write a loop that uses that function to get an array of just the
// JavaScript classes:

const javascriptClasses = [];
for (let i = 0; i < roster.length; i++) {
  if (isJavaScript(roster[i])) {
    javascriptClasses.push(roster[i].class);
  }
}

// What if we only GPA's that are 3.0 or higher?

const isHighGpa = function (gpa) {
  return gpa >= 3.0;
}

const highGpas = [];
for (let i = 0; i < gpas.length; i++) {
  if (isHighGpa(gpas[i])) {
    highGpas.push(gpas[i]);
  }
}

// Again, checking if a condition is true for each element in an array is a common
// pattern. Let's define a function that takes an array and a function, and returns
// a new array with only the elements for which the function returns true:

const filter = function (array, func) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// Now we can use that function to get an array of just the JavaScript classes.

const javascriptClasses2 = filter(roster, isJavaScript);

// Or to get an array of just the high GPAs.

const highGpas2 = filter(gpas, isHighGpa);

// Again, this is such a common pattern that JavaScript has a built-in array method
// that does this: .filter.

// Let's use the built-in .filter method to get an array of just the JavaScript
// classes:

const javascriptClasses3 = roster.filter(isJavaScript);

// Let's use the built-in .filter method to get an array of just the high GPAs:

const highGpas3 = gpas.filter(isHighGpa);

// The last step is that these functions do not need to be defined and named. We can
// define them inline as anonymous functions. Let's use an anonymous function to
// get an array of just the JavaScript classes:

const javascriptClasses4 = roster.filter(function(item) {
  return item.class.includes('JavaScript');
});

// Or to get an array of just the high GPAs:

const highGpas4 = gpas.filter(function(gpa) {
  return gpa >= 3.0;
});

