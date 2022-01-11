// Objects are sets of key value pairs.

// keys are also known as properties.

// Keys/Properties are strings.
// Values can be any value in JavaScript

// Defining objects uses curlies, but these are not a BLOCK

const fido = {
  name: 'Fido',
  age: 12,
  breed: 'Beagle'
};

const buster = {
  name: 'Buster',
  age: 3,
  breed: 'Dachshund'
};

// Defining an empty object:

const emptyObject = {};

// Getting the value of an object's key/property.

// Two methods:

// Dot notation

console.log(fido.name);

// Index-style notation (square brackets)

console.log(fido['name']);

// Square brackets let us use the contents of a variable as the key

const myKey = 'name';
console.log(fido[myKey]);

// Assigning a new value to an object can use either notation

fido.age = 13;
fido['age'] = 13;
console.log(fido);

// deleting a key/property uses the delete keyword

delete fido.age;
console.log(fido);

// You can dynamically add new properties to objects as well with
// both notations.

fido.color = 'Dapple';
fido['color'] = 'Dapple';
console.log(fido);

// The `in` operator will tell you if a key exists in an object.

console.log('name' in fido);

// Comparing objects can't be done with === in javascript.
// This is because objects are reference types.

const anotherFido = { // Points at a new "similar" object
  name: 'Fido',
  age: 12,
  breed: 'Beagle'
}

//const anotherFido = fido; // Points at the SAME object
console.log(fido);
console.log(anotherFido);

console.log(fido === anotherFido);
console.log(fido === fido);

// If you have some values in variables, you can use them to build an object.
// If the key name matches the variable name, you can omit the :

const name = "Heather";
const age = 10;
const breed = "Border Collie";

const heather = {
  name,
  age,
  breed
};
// This is the same as doing this:
// const heather = {
//   name: name,
//   age: age,
//   breed: breed
// };


// You can compute the key in square brackets to the left of the colon(:)
// Rarely used.

const wanda = {
  name: "Wanda",
  age: 2,
  ["bre" + "ed"]: "Poodle", // useless example, but this just sets the key to "breed"
}

// A value can be ANYTHING. A string, a number, a boolean, an Array or another object

const complicatedObject = {
  stringProp: "A String",
  numberProp: 42,
  booleanProp: true,
  arrProp: [1, 2, 3],
  objProp: {}
}

// Let's make a complicated typical object
// you might see in a real application.

const dogBoardingBusiness = {
  name: "Hounds Hideaway",
  address: "123 Main St",
  state: "AR",
  zip: "72034",
  dogs: [ // An array of objects
    {
      id: 1, // Sometimes we'll give objects an unique identifier
      name: "Fido",
      age: 13,
      breed: "Beagle"
    },
    {
      id: 2,
      name: "Buster",
      age: 3,
      breed: "Dachshund"
    },
    {
      id: 3,
      name: "Heater",
      age: 2,
      breed: "Poodle"
    }
  ],
  owners: [ // An array of objects
    {
      name: "Alice Smith",
      dogs: [1, 2] // An array of the dog ids so show which dogs Alice owns
    },
    {
      name: "Bob Jones",
      dogs: [3]
    }
  ]
};

// Looping through objects.
// It's hard to use typical c-style for loops or while loops
// It's impossible to use a for...of loop
// Objects can use the for...in loop

const employee = {
  name: "Bill",
  position: "Assistant Manager",
  salary: 30000,
  division: "Sales"
};

// Loop through the employee and print out the keys and the values:
for (const key in employee) {
  console.log(key)
  console.log(employee[key]); // we have to use square bracket notation here,
                              // since key is a variable
}

// Some useful global methods for working with objects.

console.log(Object.keys(employee)); // returns the keys as an array
console.log(Object.values(employee)); // returns the values as an array
console.log(Object.entries(employee)); // returns a two dimensional array of the
                                       // keys and values;

// You can use Object.keys to loop through an object
const keys = Object.keys(employee);
for (let index = 0 ; index < keys.length; index++ ) {
  const key = keys[index];
  const value = employee[key];
  console.log(key, value);
}

// Bonus Info: The spread operator can be used with Objects.

const copyOfEmployee = { // Makes a copy of the object
  ...employee
};

console.log(copyOfEmployee);
console.log(employee === copyOfEmployee);
// You can use it to merge two objects

const extraEmployeeInfo = {
  years: 12,
  hire_date: '2020-01-01'
}

const employeeWithExtraInfo = { // the two objects are spread together into
  ...employee,                  // a new object.
  ...extraEmployeeInfo
};

console.log(employeeWithExtraInfo);
