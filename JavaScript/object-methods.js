// Methods are just functions that are defined on an object

// You can define them two ways

// As a value of a property using an anonymous function 

const fido = {
  name: "Fido",
  age: 13,
  breed: "Beagle",
  bark: function () {
    console.log("Woof Woof")
  }
}

// Using special method syntax:

const buster = {
  name: 'Buster',
  age: 3,
  breed: 'Dachshund',
  bark() {
    console.log("Woof Woof");
  }
};

// Both can be called the same way

fido.bark();
buster.bark();

// `this` is a special keyword in JavaScript we call "Context"

// You can use it in methods to refer to the object the method was called on.

const heather = {
  name: "Heather",
  age: 7,
  breed: "Poodle",
  sayName() {
    console.log(`My name is ${this.name}`)
  }
};

heather.sayName();

// However the value of this is totally dependent on how the function was
// CALLED, not how it was defined.

// If I make a variable and assing it to the sayName function, and then call it
// that way, this will be undefined and we will get an error.

const referenceToSayName = heather.sayName; // Notice we aren't calling it here,
                                            // Just assigning the function
                                            // to a variable
referenceToSayName();

// the context is undefined in this case because when we called it, JavaScript
// did not know which object the method was part of anymore.

// This is unique to JavaScript, other programming languages do not do this.

// There is much more to `this`, we'll learn more about it later.

// BONUS Getter and Setters: (Rarely used)

// Javascript has the abililty to define special magic methods that act like
// properties, but are actually methods.

// Imagine we want to change sayName to act like a property instead of a method.

// We just add the keyword `get` to it using the special method syntax.

const bilbo = {
  name: "Bilbo",
  age: 6,
  breed: "Boxer",
  get sayName() {
    console.log(`My name is ${name}`);
  }
}

// And we can do this:
console.log(bilbo.sayName); // Notice we didn't call it, it acts like a property

// Setters are similar but for when you want to change a property.

const frodo = {
  name: "Frodo",
  age: 6,
  breed: "Boxer",
  set sayName(newName) {
    this.name = newName;
  }
}

// We can then just assign a value to sayName, and it will change the name.

frodo.sayName = "Frodo Baggins";
console.log(frodo.name);



