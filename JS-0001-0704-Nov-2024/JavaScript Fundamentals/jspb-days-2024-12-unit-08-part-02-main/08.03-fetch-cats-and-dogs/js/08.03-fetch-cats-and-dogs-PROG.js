// Lesson 08.03 Cat Facts API - PROG

// API (Application Programming Interface) involves an app requesting data from a server
// data is returned to the app in JSON (JavaScript Object Notation)
// JSON is basically a JS object where all the keys are in double quotes
// The stringified object can travel over a network better, cuz it's just a string
// The app parses the string back into its JS object format which gives access
// to the individual properties
// go to https://catfact.ninja/fact and you will see a random cat fact in JSON format

// `{
//   "fact": "Cats can be right-pawed or left-pawed.",
//   "length": 38
// }
// random cat fact served by API

// JSON vs. "regular JS object"
// JSON.stringify(obj);
// 1. Declare a "normal" object

// 2. convert the object to JSON for transmission over a network
//    JSON.stringify(obj) takes an obj w properties as its arg
//    and returns the JSON version, where the keys are in double 
//    quotes so save the returned JSOn to a variable

// with the regular object, you have access to the properties

// with the JSON, you do NOT yet have access to the properties
// because they are stringified

// JSON.parse(JSONstring) works in the opposite direction of JSON.stringify(obj)
// you pass the parse() method a JSON string and get back a "regular" JS obj
// with properties that you can now access.  So, do the pet in reverse now:

// "GET" specifies how is the data to be sent from the 
// server -- GET means the data rides along on the URL
// fetch(url, method) and it returns a so-called Promise

// GET URL example from Craigslist:
// https://newyork.craigslist.org/search/ata?max_price=200&min_price=100#search=1~gallery~0~0

// File Path URL:
// https://newyork.craigslist.org/search/ata
// Querystring:
// ? max_price=200 & min_price=100 #search=1~gallery~0~0

// fetch() global method
// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// JS is an asynchronous programming language, meaning that if a task takes some to do, JS can carry on down the code and keep doing stuff
// coffee shop analogy: Starbucks takes your order, gives you a 
// receipt / claim ticket and proceeds to take next customer's order
// when your order is done, you are notified and you come, present
// your ticket/receipt and take your coffee
// this is an asynchronous coffee shop order handling process
// by contrast, synchronous would be that annoying shop where everyone
// is ignored until the customer at the counter is fully served

const catbutton = document.querySelector('#cat-btn')
const infoDiv = document.querySelector('#pet-info')

catbutton.addEventListener('click', getCatFact);


function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => infoDiv.textContent = data.fact)
}
// LAB CHALLENGE: Make the "Get Dog Pic" button work
// clicking btn should display a diff random dog pic each time

document.querySelector("#dog-btn")
    .addEventListener('click', () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                infoDiv.innerHTML = `<img src="${data.message}" />`
                
            })
    })
// Dog Pic API Random Result:
// sample of random result from Dog API :
// {"message":"https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_4005.jpg","status":"success"}
