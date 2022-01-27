"use strict";
// JavaScript Context

// In node this is an empty object
console.log(this);

// This is undefined inside a function
function printThisFunction() {
  console.log(this);
}

printThisFunction();

// In an arrow function, it takes on the value of this from
// the parent scope... So empty object in this case
const printThisArrowFunction = () => {
  console.log(this);
}

printThisArrowFunction();

// Depending on how you define functions on an object, 
// this will have different values
const dog = {
  name: "Fido",
  // It will be the dog object
  bark: function () {
    console.log(`${this.name} says "Woof Woof".`);
  },
  // It will be the parent scope's this, 
  // which is the empty object from the module.
  // So this breaks.
  sit: () => {
    console.log(`${this.name} sits.`)
  },
  // The same as the function example above, this is
  // the dog object (this is just the shorthand version)
  stay() {
    console.log(`${this.name} stays put. Good Boy!`);
  }
}

dog.bark();
dog.sit();
dog.stay();

// If we make a reference to the function and call it, this is undefined.
// const referenceToBark = dog.bark;
// referenceToBark();

// If we pass the function as a call back to another function, `this` will also
// end up as undefined
function doACallback(callback) {
  callback();
}

// doACallback(dog.bark);
// We can force `this` to be the dog by using the .bind() method on the function
doACallback(dog.bark.bind(dog));

// In classes, this is always the INSTANCE of the class
class Dog {
  constructor(name) {
    this.name = name;
    // We can force the bark function to ALWAYS bind to the instance with bind.
    // this.bark = this.bark.bind(this);
  }
  bark() {
    console.log(`${this.name} says "Woof Woof".`);
  }
}

const fido = new Dog('Fido');
fido.bark();

// Unless we pass the class method to another function or make a reference to it
// Then it's back to being undefined.
// Unless we bind it in the class
doACallback(fido.bark);

// The Take-away
// Javascript determines the value of `this` at RUNTIME and it depends
// on how you CALL the function, not how you DEFINE the function.

