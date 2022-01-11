// Let's bring back our sleep example.

function sleep(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // We don't really HAVE to have anything in resolve.
    }, milliseconds);
  });
}

// Since this function returns a promise, we can use it with async/await and it'll
// seem like it's synchronous, but it's not really.

// Unfortunately the 'await' keyword can't be used without putting it inside a 
// function which uses the `async` keyword.

async function waitAWhile() {
  await sleep(1000);
  console.log("Look! It seems synchronous but it's not!");
}

console.log("Before calling waitAWhile");
waitAWhile();
console.log("After calling waitAWhile");

// Async functions always return a promise. So Async Await is just 
// "Syntactic Sugar" on top of the regular Promise system.

// Let's prove this:
async function thisReturnsAPromise() {

}

const result = thisReturnsAPromise();
console.log(result); // This promise resolves immediately to "undefined"

// Whatever we return from an async function will be the resolved value of
// the promise.

async function thisResolvesToAString() {
  return "A String";
}

const result = thisResolvesToAString();
console.log(result);

// So what's the point?

// *============================================================================
// * Built-In Promisified Functions in Node.JS
// *============================================================================

// We can open files and read the contents into our javascript!




