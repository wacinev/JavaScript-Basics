### The Call Stack

#### Call Stack Basics

Let's create a function, run it with the debugger, and see the call stack in action.

```js
debugger;

const convertFromCelsius = (degreesCelsius) => {
    return degreesCelsius * 9 / 5 + 32;
}

convertFromCelsius(0);
convertFromCelsius(20);
convertFromCelsius(30);
```

#### Helper Functions

Have one student be the function that, given "Colin Jaffe" and "Sarah Jaffe" outputs "C.J. hearts S.J."

Better examples:

"Clark Kent", "Lois Lane"

"Walter White", "Doing Crimes"

"Colin Jaffe", "Java Script"

Another student is the function that makes initials. If inputted "Walter White", they output "W.W."

The code:

```js
const treeCarver = (name1, name2) => {
    const initials1 = initialsMaker(name1);
    const initials2 = initialsMaker(name2);

    return initials1 + ' hearts ' + initials2;
}

const initialsMaker = (name) => {
    const firstName = name.slice(0, name.indexOf(' '));
    const lastName = name.slice(name.indexOf(' ') + 1);

    return firstName[0] + '.' + lastName[0] + '.';
}

const treeCarving1 = treeCarver('Lois Lane', 'Clark Kent');
const treeCarving2 = treeCarver('Walter White', 'Doing Crimes');
```

#### List Building Through The Call Stack

Each student's should be on Zoom. We'll do this activity in the chat.

The first student's job will be to say their name and pass it on to the next person.

The second student's job will be to say the previous name, plus their name, and pass it on to the next person.

Each subsequent student's job should be to say the names so far plus their name and pass it on to the next person.

When it gets to the instructor, they'll say all the names in order.

Then we demonstrate this in code:

```js
function student1() {
    const names1 = ['Wacine'];
    student2(names1);
}

function student2(names) {
    const names2 = names.slice();
    names2.push('George');
    student3(names2);
}

function student3(names) {
    const names3 = names.slice();
    names3.push('Charles');
    instructor(names3);
}

function instructor(names) {
    console.log(names);
}

student1();
```

Now we can demonstrate the return version.

"My number is 5, I pass on 4 to George."
"My number is 4, I pass on 3 to Jason."
"My number is 3, I pass on 2 to Jadyll."
"My number is 2, I pass on 1 to Stewart."
"I pass 1 back to Jadyll."

"Your job is to remember your number, your next person, and your previous person."
"My number is [my number]. [Next person] gave me [number they gave me back]. Multiplied, they are [product]. I pass [product] back to [previous person]."

```js
function student1(num) {
    const nextPersonsNumber = student2(num - 1);

    return num * nextPersonsNumber;
}

function student2(num) {
    const nextPersonsNumber = student3(num - 1);

    return num * nextPersonsNumber;
}

function student3(num) {
    const nextPersonsNumber = student4(num - 1);

    return num * nextPersonsNumber;
}

function student4(num) {
    const nextPersonsNumber = student5(num - 1);

    return num * nextPersonsNumber;
}

function student5(num) {
    return num;
}

student1(5);
```

### Recursion

Finally, we demonstrate the way to make this system work without many named functions and a limit on how far we can go.

```js
const getFactorial = (num) => {
    if (num === 1) {
        return 1;
    }

    const answerForOneLess = getFactorial(num - 1);

    return num * answerForOneLess;
}
```