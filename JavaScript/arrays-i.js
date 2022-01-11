// typeof Array
{
  const numbers = [1, 2, 3];
  console.log(typeof numbers) // 'object'
}

// Array.isArray
{
  const numbers = [1, 2, 3];
  console.log(Array.isArray(numbers)) // true
}

// instanceof 
{
  const numbers = [1, 2, 3];
  console.log(numbers instanceof Array)
}

// Bracket access
{
  const numbers = [1, 2, 3];
  console.log(numbers[1]); // 2
}

// Bracket assignment
{
  const numbers = [1, 2, 3];
  numbers[1] = 'Changed';
  console.log(numbers); // [1, 'Changed', 3];
}

// Length property
{
  const numbers = [1, 2, 3];
  console.log(numbers.length);
}

// Mutable - Changable - You can change it.
// Immutable - Unchanable - You can't change it.

// Array.prototype.concat - Does not mutate
{
  const numbers = [1, 2, 3];
  const moreNumbers = [4, 5, 6]
  const newNumbers = numbers.concat(moreNumbers);
  console.log(numbers); // [1, 2, 3]
  console.log(newNumbers); // [1, 2, 3, 4, 5, 6]
}

// Array.prototype.push - Mutates the array
// Pushes a new value to the end of the array
{
  const numbers = [1 ,2, 3];
  const newLength = numbers.push(4); // [1, 2, 3, 4]
  console.log(numbers);
  console.log(newLength);
}

// Array.prototype.pop - Mutates the array
// Pops a value off the end of the array
{
  const numbers = [1, 2, 3];
  const result = numbers.pop();
  console.log(numbers); // [1, 2]
  console.log(result); // 3
}

// Array.prototype.shift - Mutate the array
// Removes from the front of the array
{ 
  const numbers = [1, 2, 3];
  const result = numbers.shift();
  console.log(numbers); // [2, 3]
  console.log(result);  // 1
}

// Array.prototype.unshift - Mutate the array
// Adds an element to the front of the array
{
  const numbers = [1, 2, 3];
  const newLength = numbers.unshift(4);
  console.log(numbers); // [4, 1, 2, 3]
  console.log(newLength); // 4
}

// Array.prototype.includes
{
  const numbers = [1, 2, 3];
  console.log(numbers.includes(2)) // true
}

// Array.prototype.indexOf
{
  const numbers = [1, 2, 3];
  console.log(numbers.indexOf(2)); // 1
}

// Array.prototype.sort - Mutates the array
{
  const numbers = [2, 3, 1];
  console.log(numbers.sort()); // [1, 2, 3]
}

// Array.prototype.reverse - Mutates the array
{
  const numbers = [1, 2, 3];
  console.log(numbers.reverse()); // [3, 2, 1]
}

// Array.prototype.slice - Does not mutate
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(numbers.slice(1)); // [2, 3, 4, 5, 6, 7, 8];
  console.log(numbers.slice(1, 3)); // [2, 3]
}

// Array.prototype.splice - Mutates the array
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(numbers.splice(3, 1, "Inserted")); // [ 4 ]
  console.log(numbers); // [1, 2, 3, 'Inserted', 5, 6, 7, 8]  
}

// Array.prototype.join - Does not mutate the array
// Joins an array into a string with a separator
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(numbers.join('')); // "12345678"
  console.log(numbers.join()); // "1,2,3,4,5,6,7,8"
  console.log(numbers.join("-")); // "1-2-3-4-5-6-7-8"
}

// Spread operator - Does not mutate
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const moreNumbers = [9, 10, 11, 12];
  const copyOfNumbers = [...numbers, ...moreNumbers];
  console.log(copyOfNumbers);
}

// Looping through arrays

// C-Style for loop (if you do need the index number, or what to loop backwards 
// in a different order)
{
  const fruits = ["apple", "banana", "kiwi", "grape"];
  for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
  }
}

// for..of loop (If you don't need the index number)
{
  const fruits = ["apple", "banana", "kiwi", "grape"];
  for (const fruit of fruits) {
    console.log(fruit);
  }
}
