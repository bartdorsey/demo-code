// String.prototype.concat 
console.log("Hello".concat("World")); // "HelloWorld"

// String.prototype.includes
console.log("Hello".includes("e")); // true

// String.prototype.indexOf
console.log("Hello".indexOf("e")) // 1

// String.prototype.slice
console.log("Hello".slice(2, 4)) // "ll"

// String.prototype.split
console.log("Hello".split('l')) // ['He', '', 'o'];
console.log("Hello World".split(' ')) // ['Hello', 'World']

const words = "Hello World".split(' ');
console.log(words[1]);

// String.prototype.toUpperCase
console.log("Hello".toUpperCase()); // "HELLO"

// String.prototype.toLowerCase
console.log("Hello".toLowerCase()); // "hello"

// String.prototype.trim
console.log("   Hello World   ".trim()); // "Hello World"

// Spreading strings
{
  const letters = [..."Hello World"];
  console.log(letters);
}

// Looping through strings

// C-Style for loop
{
  const str = "Hello World"; 
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

// for...of loop
{
  const str = "Hello World";
  for(const letter of str) {
    console.log(letter);
  }
}