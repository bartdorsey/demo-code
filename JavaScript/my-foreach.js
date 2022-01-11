// This demonstrates how forEach might work under the hood.

// We can't attach this to Array.prototype (well, we shouldn't anyway)
// So we have to pass the array in an argument
function myForEach(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    callback(element, index, arr);
  }
}

// Let's test it to see if it works the same as the real one.

const heroes = ["Black Widow", "Scarlet Witch", "Spider-Gwen", "Captain Marvel"];

console.log("-- myForEach --");
myForEach(heroes, (hero, index) => {
  console.log(hero, index);
});

console.log("-- Array.prototype.forEach --");
heroes.forEach((hero, index) => {
  console.log(hero, index);
});

// Let's make a reverse forEach!

function rightForEach(arr, callback) {
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    callback(element, index, arr);
  }
}

console.log("-- rightForEach --");

rightForEach(heroes, (hero, index) => {
  console.log(hero, index);
});
