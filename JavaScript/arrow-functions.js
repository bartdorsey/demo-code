// Normal Functions:

function add(num1, num2) {
  return num1 + num2;
}

// Anonymous functions as a "Function Expression"

const subtract = function (num1, num2) {
  return num1 - num2;
}

// Arrow function
const multiply = (num1, num2) => {
  return num1 * num2;
}

// Arrow function with a single statement can have an implicit return
// We leave off the curly braces and the return statement.

const divide = (num1, num2) => num1 / num2;

// If you only have one argument, you can leave off the parens around
// the arguments.

const addOne = number => number + 1;

// If you have no arguments, you just put empty parens.

const addOneAndTwo = () => 1 + 2;

// You can use an arrow function in an object, but... be aware, that `this`
// won't be what you expect it to be. We will see later why this is useful 
// in some situations.

const fido = {
  name: "Fido",
  age: 13,
  breed: "Beagle",
  sayName: () => {
    console.log(`My name is ${this.name}`) // This will break.
  }
};



