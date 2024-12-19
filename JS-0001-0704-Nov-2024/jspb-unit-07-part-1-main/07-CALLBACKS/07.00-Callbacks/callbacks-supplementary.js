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

// for (let i = 0; i < gpas.length; i++) {
//   const listItem = document.createElement('li');
//   listItem.textContent = gpas[i].toFixed(1)
//   gradeList.appendChild(listItem);
// }

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
function logClass (teacher) {
  console.log(teacher.class);
}

// Now we can use that function to log the class of each roster item:

console.log('*** Using a function: ***')

for (i=0; i<roster.length; i++) {
  logClass(roster[i]);
}

// Let's define a function that takes a GPA and adds it to the list:
function addGradeToList (grade){
  const listItem = document.createElement('li');
  listItem.textContent = grade;
  gradeList.appendChild(listItem);
}

// Now we can use that function to add each GPA to the list.
// Comment out the previous loop and write the following loop to see the same thing done with a function:
for (let i=0; i <gpas.length; i++){
    addGradeToList(gpas[i]);
}

// Let's define a function that takes a GPA and adds it to the sum:


// Now we can use that function to add each GPA to the sum.
// Comment out the previous loop and write the following loop to see the same thing done with a function:


// Let's define a function that takes a roster item and adds it to the list:


// Now we can use that function to add each roster item to the list:
// Comment out the previous loop and write the following loop to see the same thing done with a function:


// All we've done is moved our logic into functions. This is a good thing! It
// makes our code more modular and easier to read. But we can go further.

// Now here comes the big leap. Notice that all that's changing is:

// - the array we're looping through
// - the function we're calling on each element

// What if we defined a function that took an array and a function, and called
// that function for each element in the array?
function forEach(arr, func) {
  for (let i =0; i<arr.length;i++) {
    func(arr[i])
  }
}

// Now we can use that function to log the class of each roster item:
// forEach(roster, logClass);
roster.forEach(logClass);

// Now we can use that function to add each GPA to the list.
// Comment out the previous loop and use our forEach function instead:
// forEach(gpas, addGradeToList);
gpas.forEach(addGradeToList);

// Now we can use that function to add each GPA to the sum.
// Comment out the previous loop and use our forEach function instead:


// Now we can use that function to add each roster item to the list.
// Comment out the previous loop and use our forEach function instead:


// This is a very common pattern in programming. We define a function that takes
// another function as an argument, and then calls that function for each
// element in an array. This is so common in fact that JavaScript has a built-in
// array method that does this: forEach.

// Let's use the built-in forEach method to log the class of each roster item:


// Let's use the built-in forEach method to add each GPA to the list.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:


// Let's use the built-in forEach method to add each GPA to the sum.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:


// Let's use the built-in forEach method to add each roster item to the list.
// Comment out our call to our custom forEach function and use the built-in
// forEach method instead:


// Now let's take a look at some use cases for map.

// Let's define a function that takes a roster item and returns the class:
function getClass (teacher){
  return teacher.class;
}

getClass({name:'chris', class: 'taking names'})

// Let's write a loop that uses that function to get an array of just the class names:
const classNames = [];
for (let i = 0; i<roster.length; i++) {
  classNames.push(roster.class)
}



// Let's look at another example. What if we wanted an array of teachers with
// their classes?

function getDescription(instructor) {
  return `${instructor.name} - ${instructor.class}`;
}

const teacherDescriptions = [];
for (let i =0; i<roster.length; i++){
  teacherDescriptions.push(getDescription(roster[i]));
}

// Let's write a loop that uses that function to get an array of teacher and
// class strings:

teacherDescriptions;
// Now let's write a function to add each teacher and class to the list:


// Now we can use that function to add each teacher and class to the list.
// Comment out the previous forEach call for adding roster items to the list and
// use the following call instead.


// Having a transformed array is a common pattern. Let's define a function that
// takes an array and a function, and returns a new array with the function
// applied to each element:


// Now we can use that function to get an array of just the class names.

function map(arr, func) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

const deductedGrades = map(gpas, function(grade) {
  return grade - 0.1;
})

// Or to get an array of teacher and class strings:


// And then to add each teacher and class to the list, we'll do the following.
// Comment out the previous forEach call for adding teacher and class strings to
// the list and use the following call instead.


// Again, this is such a common pattern that JavaScript has a built-in array method
// that does this: .map.

// Let's use the built-in .map method to get an array of just the class names:


// Let's use the built-in .map method to get an array of teacher and class strings:


// The final callback function we'll explore is filter. Let's define a function
// that takes a roster item and returns true if the class is a JavaScript class:

function isJavaScriptTeacher (teacher) {
  if (teacher.class.includes('JavaScript')){
    return true;
  } else {
    return false;
  }
}

// Let's write a loop that uses that function to get an array of just the
// JavaScript classes:
const jsTeachers = [];
for (let i = 0; i < roster.length; i++) {
  if (isJavaScriptTeacher(roster[i])){
    jsTeachers.push(roster[i]);
  }
}

// What if we only GPA's that are 3.0 or higher?
function isHighGpa(gpa){
  return gpa > 3;
}


// Again, checking if a condition is true for each element in an array is a common
// pattern. Let's define a function that takes an array and a function, and returns
// a new array with only the elements for which the function returns true:
const highGrades = [];
for (let i = 0; i < gpas.length; i++){
  if (isHighGpa(gpas[i])) {
    highGrades.push(gpas[i])
  }
} 

function filter (arr, func) {
  const newArr = [];
  for (leti=0; i<arr.length;i++){
    if(func(ar[i])){
      newArr.push(arr[i]);
    }
  }
}

const highGrades2 = filter(gpas, isHighGpa);
const highGrades3 = gpas.filter(isHighGpa);
const jsTeachers2 = filter(roster, isJavaScriptTeacher);
const jsTeachers3 = roster.filter(isJavaScriptTeacher);

jsTeachers.forEach(function (teacher) {
  console.log(teacher.class);
});

highGrades.forEach(function (grade) {
  highlightOnPage(grade);
})

// Now we can use that function to get an array of just the JavaScript classes.


// Or to get an array of just the high GPAs.


// Again, this is such a common pattern that JavaScript has a built-in array method
// that does this: .filter.

// Let's use the built-in .filter method to get an array of just the JavaScript
// classes:


// Let's use the built-in .filter method to get an array of just the high GPAs:


// The last step is that these functions do not need to be defined and named. We can
// define them inline as anonymous functions. Let's use an anonymous function to
// get an array of just the JavaScript classes:


// Or to get an array of just the high GPAs:

