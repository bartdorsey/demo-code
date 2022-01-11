/*
**************************************
************ ORDER OF OPERATIONS *****
**************************************
*/
console.log('<--------- ORDER OF OPERATIONS ---------->');
// math order of operations
console.log(1 + 2 * 3);
// group operator
console.log((1 + 2) * 3);
// dot operator 
const user = {
  name: "Alice",
  age: 26
}
console.log(user.age + 2);
// assignment
let result = 1 + 2; // 3
result += 1; // 4
result = result + 1; // 5
result *= 2; // 10
result = result * 2 // 20
result /= 2; // 10
result = result / 2; // 5
result++; // increment result
result--; // decrement result
console.log(result);


