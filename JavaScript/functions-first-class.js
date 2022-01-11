// Functions as First Class Objects

// 1. Functions can be assigned to variables or properties

// const add = function (num1, num2) {
//   return num1 + num2;
// }

// const math = {
//   add(num1, num2) {
//     return num1 + num2;  
//   }
// }

// 2. Functions can be passed as arguments to other functions

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function doMath(num1, num2, mathFunction) {
  return mathFunction(num1, num2);
}

console.log(doMath(1, 2, add));
console.log(doMath(2, 3, multiply));


// 3. Functions can be returned as values from other functions

function addANumber(num1) {
  return function (num2) {
    return num1 + num2;
  }
}

const addOne = addANumber(1);
const addTwo = addANumber(2);
console.log(addOne(23));
console.log(addTwo(13));