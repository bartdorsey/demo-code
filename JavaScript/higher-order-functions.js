// *============================================================================
// * Higher Order Functions
// *============================================================================

// Higher Order Functions are Functions which take a Function as an argument.
// We call this function argument a "callback" function

// Examples we've already seen.

// 1. setTimeout
// 2. setInterval
// 3. addEventListener

// These are all asynchronous, but that is not necessary for something to be
// a Higher Order Function.

// Anatomy of a higher order function


function higherOrder(callback) {
  callback();
}

higherOrder(function () {
  console.log("This is the callback function");
});

// Other examples built in to javascript as part of the Array object:

// *============================================================================
// * Array.prototype.forEach
// *============================================================================

// This is a higher-order looping function.

const numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(function (number, index, arr) {
  console.log(number, index, arr);
});

// We don't call the callback, instead inside of the forEach function there
// is a for loop, and *it's* calling our callback function and passing us
// three arguments:  The element from the array, the index, and the array itself

// We can leave out the index and arr if we don't need them.

numbers.forEach(function (number) {
  console.log(number);
});


// Often we use arrow functions as callbacks because of the reduced syntax.

numbers.forEach((number) => {
  console.log(number);
});

// From now on, we'll use arrow functions in these examples.

// *============================================================================
// * Array.prototype.map
// *============================================================================

// Map can turn an array into a new array of EQUAL length.
// It also receives the same three arguments as forEach

const fruits = ['apple', 'orange', 'banana', 'pear'];

const upperCasedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase(); // Whatever we return from the callback
                              // Goes into the new array
});

console.log(upperCasedFruits);

// Here's where the short syntax of arrow functions really shines.
// This code is the same as above:

const fruits = ['apple', 'orange', 'banana', 'pear'];

// We can implicitly return the uppercased fruit by leaving out
// the curlies and return statement.
const upperCasedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(upperCasedFruits);

// *============================================================================
// * Array.prototype.filter
// *============================================================================

// Filter returns an array that only contains elements that the callback returned
// true for.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Again we could write this is a very terse format:

const evenNumbers = numbers.filter(number => number % 2 === 0);

// *============================================================================
// * Array.prototype.reduce
// *============================================================================

// Reduce is a way of "reducing" an array down to a single value. That value could
// be a number or a string, or even another array or an object.

// Classic example of summing numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = numbers.reduce((accum, number) => {
  return accum + number;
}, 0);

console.log(sum);

// But reduce is more useful than just for sums.

// Let's count the frequency of characters in a string
const sentence = "There are 10 kinds of people in the world, those who understand binary and those who don't";

const characters = Array.from(sentence);

// In this case, "accum" is an object.
// The key is the character, and the value is how many times
// the character appears
const frequencies = characters.reduce((accum, char) => {
  // If the character isn't in the object, set it to 1
  if (!accum[char]) {
    accum[char] = 1;
  } else { // otherwise increment it.
    accum[char]++;
  }
  return accum;
}, {});

console.log(frequencies);

// *============================================================================
// * Other notable Array Higher Order Functions
// *============================================================================

// Array.prototype.every
// ---------------------
// The every() method tests whether all elements in the array pass the test 
// implemented by the provided function. It returns a Boolean value.

const numbers = [1, 30, 39, 29, 10, 13];

const areBelow40 = numbers.every(currentValue => currentValue < 40);

console.log(areBelow40) // true

// expected output: true

// Array.prototype.some
// --------------------
// The some() method tests whether at least one element in the array passes 
// the test implemented by the provided function. It returns true if, in the 
// array, it finds an element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array.

const numbers = [1, 2, 3, 4, 5];

const areSomeEven = numbers.some(number => number % 2 === 0);

console.log(areSomeEven); // true

// Array.prototype.find
// --------------------
// The find() method returns the value of the first element in the provided 
// array that satisfies the provided testing function. If no values satisfy 
// the testing function, undefined is returned.

const numbers = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find(number => number % 2 === 0);

console.log(firstEvenNumber); // 2
