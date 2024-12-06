// Lesson 07.04
// **array.reduce()**

// Array Method: Array.reduce()
// array.reduce() returns ONE value, which could be of any datatype

// reduce(), like map() and filter(), takes a function as its argument and runs that function on each element, e, in the array upon which it is called. Recall that map returns an array with the same number of items as in the original array, while filter returns an array with fewer items. But reduce returns only ONE value, which can be of any datatype: number, string or even array. That one value accumulates into the first argument of the function called by reduce, with the second argument
// being e. The return value is also initialized as the second argument of the reduce() method itself, passed in right after the function. 
// Confused? Not to worry--it will become clear as we write our

const costs = [89, 95, 99, 95, 19, 95, 39, 79];

// 1. Using a for loop, add up the costs using a for loop

console.log('for loop sum of nums in costs array:'); // 610

// forEach() version of the above:

console.log('forEach() sum of nums in costs array:'); // 610

// reduce() version of the above:
// reduce(callback(accumulator, current_item), accumulator_start_value)

console.log('reduce() accumSum of nums in costs array:'); // 610


console.log('reduce() accumConcat of nums in costs array:'); // 610
// 8995999519953979

// 2. Call reduce on costs array, setting it equal to a variable to hold the result, which will be the sum of all the numbers.

// 3. Pass the reduce method its second argument, a variable we'll call sum. 
// This is known as the "accumulator". We give it an initial value of 0.

// 4. As reduce iterates the array, add the current item to the accumulator


const veggies = ['beet', 'carrot', 'bean', 'celery', 'cucumber', 'broccoli'];

// 5A. Using a for loop, add up the total number of chars in veggies array

console.log("for loop total characters in veggies array:");

// 5B. Using forEach() add up the tot num chars in veggies array

console.log("forEach() total characters in veggies array:");

// 6. Using reduce(), add up the total number of chars in veggies array

console.log("reduce() total characters in veggies array:");

const vegArr = ['beet', 'carrot', 'bean', 'celery', 'cucumber', 'broccoli', 'tomato', 'kale'];
/* 6B. BONUS: use reduce() to make an object:
       HINT: accumulator starts as empty object

    { 
        b_veggies: ['beet', 'bean', 'broccoli'],
        c_veggies: ['carrot', 'celery', 'cucumber'],
        k_veggies: ['kale'],
        t_veggies: ['tomato'],
    }
*/


// 'b_veggies', etc.:
// if key exists
// push veg into that key's array
// no key yet exists for this first char
// make key and assign its initial value as one-item array
// sort the array as we go, every time
// return the updated version of the object

console.log("reduce() make vegObj from vegArr:");


// 'b_veggies', etc.:

// sort the array as we go, every time
// return the updated version of the object


console.log("reduce() w ternary, make vegObj from vegArr:");

// 07.04 - Lab - PART B

// CHALLENGE A: Reproduce the object below from the produce array; 
// BONUS for using reduce(), since the result is all ONE object
const produce = ['apple', 'apricot', 'blueberry', 'beet', 'carrot', 'celery', 'cucumber', 'broccoli', 'arugula', 'grape', 'papaya', 'kiwi', 'lime', 'peach', 'asparagus', 'radish', 'dragonfruit', 'mango', 'turnip', 'onion', 'daikon', 'parsley', 'parsnip', 'cilantro', 'spinach', 'orange', 'lettuce', 'cherry', 'tomato', 'banana', 'pineapple', 'strawberry', 'cranberry', 'lemon', 'grapefruit', 'kale', 'tangerine', 'plum', 'raspberry', 'breadfruit'];

// const produceObj;
// console.log('produceOBj:', produceObj);
/* 
    { 
        starts_with: {
            A: ['apple', 'apricot', 'arugula', 'asparagus'],
            B: ['banana', 'beet', 'blueberry', 'broccoli'],
            C: ['carrot', 'celery', 'cherry', 'cilantro', 'cranberry', 'cucumber'],
            D: ['daikon', 'dragonfruit'],
            G: ['grape', 'grapefruit'],
            K: ['kale', 'kiwi'],
            L: ['lemon', 'lettuce', 'lime'],
            M: ['mango'],
            O: ['onion', 'orange'],
            P: ['papaya', 'parsley', 'parsnip', 'peach', 'pineapple', 'plum'],
            R: ['radish', 'raspberry'],
            S: ['spinach', 'strawberry'],
            T: ['tangerine', 'tomato', 'turnip']
        }
        consonant_blends: {
            bl: 'blueberry',
            br: ['breadfruit', 'broccoli'],
            ch: 'cherry',
            cr: 'cranberry',
            dr: 'dragonfruit',
            gr: ['grape', 'grapefruit'], 
            pl: 'plum',
            sp: 'spinach', 
            st: 'strawberry'
        }
    }
*/


        // if the first two letters are both consonants

            // add key for that consonant blends if it doesnt exist yet to the consonant_blends array

            // key already exists so add the item to the consonant_blend array

console.log("produceObj:");

/* CHALLENGE C:
Write a function that takes in an array of words and returns an array of 12-letter, camel-cased "variable names" comprised of consecutive items from the inputted array
Example of camel-cased "variable names": ["forkliftBale", "baleRaindrop", "raindropMule"
Store the results in a new array. You have 3 arrays provided for testing your function.
*/

const words1 = ["forklift", "bale", "raindrop", "mule", "code", "friendly", "java", "fedora", "radio", "factoid", "raspberry", "fluke", "curveball", "fang", "boot", "fastball", "trap", "paperclip", "pin", "food", "gondola", "fist", "bulldog", "zebra", "fort", "kindling", "fur", "banana", "parrot", "bandana", "peach", "ostrich", "elephant", "iron", "skillet", "steel", "touchdown", "pen", "bicycle", "meter", "egret", "selfie", "vacuum", "gasoline", "rock", "laser", "elevator"];

const words2 = ["stallion", "fuse", "boat", "stapler", "fool", "cherry", "wisdom", "fund", "artichoke", "husk", "five", "book", "fan", "code", "function", "java", "fedora", "sparks", "radio", "saxophone", "cab", "fluke", "curveball", "cat", "slugfest", "fang", "javascript", "ax", "boot", "fastball", "truck", "apples", "banana", "blueberry", "cherry", "grape", "garage", "gargoyle", "kiwi", "lemon", "orange", "doggie", "lime", "popsicle", "violin", "mango", "nectarine"];

const words3 = ["oranges", "peach", "bluebird", "plum", "zipper", "pear", "papaya", "pineapple", "raspberry", "turkey", "giblet", "zoo", "ibex", "cartoon", "bunny", "cutlass", "wagon", "strawberry", "echo", "eggplant", "iota", "umbrella", "toy", "tangerine", "watermelon", "ox", "parade"];


// Since there are so many words, let's start with map to get rid of some of them. We will keep only those strings whose length plus the length of the next string equals 12.

// The added challenge is, we need to capitalize the second word in each combo in order to have camel-case. There is no JS method for camel-casing a string, so to do this, we need to chop off the first character and capitalize that and then "glue" that back onto the rest of the word, which we obtain using the slice() method:


        // capitalize the second word
        // pass second word to a var
        // capitalize the first character
        
        // obtain the rest of the word (from index 1) using slice()
 
        // "glue" the two pieces back together
        // the capitalized word


// Chained Array Methods: map() into filter() … OR for to do it all in one array, use reduce()

// 


// Max characters allowed in your solution code: 140 (Tweet!)
// Solution using chained methods: map() into filter() :
// const hyphos = words.map((e, i, a) => { return `${e}-$


// CHALLENGE D TBD:
const novelYears = [1942, 1926, 1885, 1915];
const songYears = [1973, 1979, 1973, 1973, 1979];

const classicNovels = [
    { author: 'Albert Camus', title: 'The Stranger'},
    { author: 'Ernest Hemingway', title: 'The Sun Also Rises'},
    { author: 'Mark Twain', title: 'The Adventures of Huckleberry Finn'},
    { author: 'Franz Kafka', title: 'The Trial'}
];

const seventiesSongs = [
    { author: 'Billy Joel', title: 'Piano Man'},
    { author: 'Cheap Trick', title: 'Dream Police'},
    { author: 'Elton John', title: 'Goodbye Yellow Brick Road'},
    { author: 'Bob Seger', title: 'Turn the Page'},
    { author: 'Pink Floyd', title: 'Comfortably Numb'}
]


// END Lesson 07.04
