// *============================================================================
// * Destructuring
// *============================================================================

// Destructuring is a way of pulling values out of an array or object
// into separate variables

// Arrays

const [element1, element2] = [1, 2, 3, 4];

console.log(element1, element2);

// Objects

const user = {
  name: "Bart",
  role: "Instructor"
}

const { name, role } = user;

console.log(name);
console.log(role);

// Deep destructuring

const user2 = {
  name: "Bart",
  role: "Instructor",
  pets: [
    {
      name: "BB-8",
      breed: "Beagle"
    },
    {
      name: "Artu",
      breed: "Chiweenie"
    }
  ]
}

const { pets: [ {breed }, { breed: breed2 } ] } = user2;

console.log(breed);
console.log(breed2);