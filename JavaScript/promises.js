// =============================================================================
// Promises
// =============================================================================

// Three states: 
// * Pending - The promise has not yet resolved or rejected
// * Resolved - The promise was successful - calls .then callback
// * Rejected - The promise was not successful - calls .catch callback

// To make a promise manually, we pass it a callback.
// Inside the call back we can do whatever code we want, when we want to 
// "return" a value from the promise, we call resolve() or reject()
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("The promise resolved as this string");
  } else {
    reject("The promise rejected with this string");
  }
});

console.log(promise); // By the time this has happened, this promise has already 
                      // resolved.

// =============================================================================
// Async Promise
// =============================================================================

// The main use of Promises is for asynchronous code. 

// Let's "promisify" setTimeout.

const setTimeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

console.log(setTimeoutPromise) 
// This shows as pending, because setTimeout is async, and our console.log 
// goes on the call stack. The callback that calls resolve, doesn't go into 
// the task queue until 1sec has elasped. 

// How do we run code AFTER the timeout?  

// We use .then()

setTimeoutPromise.then((resolvedValue) => {
  console.log(setTimeoutPromise);
  console.log(resolvedValue);
});
                              

// One common pattern is to build a function which RETURNS a promise. 

// Let's say we want a promisified general purpose "sleep" function.

function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // We don't really HAVE to have anything in resolve.
    }, milliseconds);
  });
}

sleep(1000).then(() => {
  console.log("1 second passed!");
});

// If you'll notice this isn't really much better than the way setTimeout works
// in the first place, we just have moved the callback into .then().

// What we would like to do is this:
//  sleep(1000);
//  console.log("Done");

// This is exactly what async/await brings to the table
