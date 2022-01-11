/* 
**************************************
************ CONTROL FLOW ************
**************************************
*/
console.log('<--------- CONTROL FLOW ---------->');
let isItSunny = false; // boolean can only be true or false
console.log(isItSunny); // --> true
console.log(typeof isItSunny); // --> 'boolean'

if (isItSunny) { // boolean logic always follows this syntax: `if` followed by parens of the condition
  console.log("Let's go to the beach!");
  console.log("Yay!!");
} else { // otherwise, we don't want to run the first block
  console.log("Let's stay inside and read a good book!");
}

// Example: determine what we can make based on ingredients we have. 
let weHaveEggs = false;
let weHaveBacon = true;
if (weHaveEggs) {
  console.log('Make an omelet');
}
if (weHaveBacon) {
  console.log('Make some bacon');
}

let a = 5;
let b = 7;
// == // DO NOT USE
// a === b - is a equal to b?
// a !== b - is a NOT equal to b?

// a > b - is a greater than b?
// a >= b - is a greater than or equal to b?
// a < b - is a less than b?
// a <= b - is a less than or equal to b?

// console.log(a === 6); // false
// console.log(a = 6); // this is NOT a comparison operator. It's an assignment!  it outputs 6, not true/false

let temp = 48;
let jacket

// this works, but is not ideal

if (temp > 70) {
  jacket = 'no jacket';
} else { // temp <= 70
  if (temp > 50) {
    jacket = 'light jacket';
  } else {
    jacket = 'heavy jacket';
  }
}
console.log(jacket);

// this is preferable! Use `else if`

if (temp > 70) {
  jacket = 'no jacket';
} else if (temp > 50) {
  jacket = 'light jacket';
} else {
  jacket = 'heavy jacket';
}

console.log(jacket);

console.log('<--------- TRUTHY VS FALSY ---------->');
/* 
8 Falsy values (really just 6)

false
0
''
null
undefined
NaN
-0 // silly
0n // BigInt - we won't get into this much.  Not even fully supported yet.
*/

let x = 0;

if (x) {
  console.log('x is truthy');
} else {
  console.log('x is falsy');
}

if (undefined) {
  console.log('we have something');
} else {
  console.log('nothing here');
}

// Bonus - The switch statement
const name = "Bob";

switch(name) {
  case "Bart":
    console.log("Hello Bart");
    break;
  case "Alice":
    console.log("Hello Alice");
    break;
  default:
    console.log("Hello, I don't know your name");
}

