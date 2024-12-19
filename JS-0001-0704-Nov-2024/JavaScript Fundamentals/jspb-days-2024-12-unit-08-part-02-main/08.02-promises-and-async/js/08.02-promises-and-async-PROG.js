// Lesson 08.02 - PROG

// Here are some strings we can pass in to our askQuestion function.
const validQuestion = "Will it rain tomorrow?";
const invalidQuestion = "y?";

// First, try simply calling askQuestion and log what it returns.

// We get "Promise { <pending> }" because askQuestion returns a promise. This is because the function is asynchronous and we need to wait for it to "resolve" or "reject", meaning we need to wait for the response to come back.

// We've labeled the return value "answer", but it's not really an answer yet. It's a promise that will eventually resolve to an answer.

// If you log `answer` in your browser's console directly--by typing in `answer` in the console and hitting enter--you'll see that by the time you've done so, the promise has changed to `Promise { <fulfilled> }`. The asynchronous function fulfills the promise more slowly than the browser can run the console log, but _not_ more slowly than a human typing "answer".

// So how do we get the actual value in the code? We can use the `then` method on the promise to get the resolved value.

// As you can see, the `then` method takes a callback function that will be called when the promise resolves. The resolved value is passed to the callback function as an argument. That's where we can access the actual answer.

// The `then` method is always available on promises. It's a way to chain together asynchronous operations. Any promise will call whatever function you pass to the `then` method when it resolves, and it will pass the resolved value to that function.

// We can also use the `catch` method to handle rejections. This is similar to the `then` method, but it's called when the promise rejects.

// The `then` method _also_ returns a promise, so we can chain the `then` and `catch` methods together. Add a `catch` method to the promise returned by `askQuestion` to handle rejections.

// As you can see, the `catch` method takes a callback function that will be called when the promise rejects. The rejected value is passed to the callback function as an argument. That's where we can access the error message.

// Call the `askQuestion` function with an invalid question and log the result. This time, the promise should reject, and the error message should be logged.

// Take a look at the original code in `askQuestion.js` to see how the promise is set up. Writing promises from scratch can be a bit tricky, but it's a powerful tool for handling asynchronous code. Here, we're simulating a network or database request with a `setTimeout` function. Each time someone calls `askQuestion`, we're waiting a random amount of time before sending a response. We call the `resolve` function to return a value (which gets passed into the `then` method's callback), and the `reject` function to return an error (which gets passed into the `catch` method's callback).

// Let's look at another example: the `getPersonInQueue` function. This function simulates a queue of people waiting for something. It takes a position in the queue and returns the person at that position. If the position is invalid, it rejects the promise.

// Take a look at the code in `getPersonInQueue.js`. It's similar to the `askQuestion` function, but it's using the `atob` function to decode a string of people's names, which are encoded in `people.js`. The `getPersonInQueue` function is asynchronous like `askQuestion`, so it returns a promise.

// Again, the function does _not_ return the person's name directly. It returns a promise that will eventually resolve to the person's name. Let's see that one more time by logging the return value of `getPersonInQueue`.

// However, we can use the `then` method to get the resolved value.

// Try some other inputs to see what happens when the promise resolves and rejects.

// You can get a person from the queue by calling `getPersonInQueue` with a different position and using the `then` method to log the resolved value.

// You can also use the `catch` method to handle rejections. Try calling `getPersonInQueue` with an invalid position, like a negative number or a string, and use the `catch` method to log the error message.
