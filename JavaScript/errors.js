// =============================================================================
// Error Handling in JavaScript
// =============================================================================

// Note: Errors are sometimes called "Exceptions"

// Creating your own errors:

const myError = new Error("Something bad happened");

console.log(myError);

// Throwing an error

throw "Whoops!";
console.log("This code will never be ran");

// As a plain string

throw myError;

// Or with an error object

// =============================================================================
// try...catch
// =============================================================================

// To protect your program from crashing with an error, you can 'catch' the error
// with a try catch block.

try {
  throw new Error("Catch me if you can!");
} catch (error) {
  console.error(error); // Always make sure you log the error, you don't want
                        // errors to happen and be completely silent
                        // That makes for a VERY hard to debug app!
}

console.log("This code will still run!");

// Some errors can't be caught. In particular Syntax Errors can't be caught since
// they happen at Compile-Time, not at Runtime.

