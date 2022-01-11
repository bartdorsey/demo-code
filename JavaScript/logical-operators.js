/* 
*******************************************
************ LOGICAL OPERATORS ************
*******************************************
*/
// 3 MAIN OPERATORS
// AND = &&
// OR - ||
// NOT - !

console.log('<--------- AND OPERATOR ---------->');

let pretzelsInStock = false;
let amountOfChange = 2.00;

if (pretzelsInStock && amountOfChange >= 1.50) {
  console.log('Buy Pretzels');
} else {
  console.log('No Pretzels');
}
console.log('<--------- OR OPERATOR ---------->');

let rainy = false;
let excitingMovieOut = true;
let moneyIHave = 5.00;

if (rainy || excitingMovieOut) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}

// we can combine the logic
const iCanGoToTheMovies = (rainy || excitingMovieOut) && moneyIHave >= 4.00;
console.log(iCanGoToTheMovies);

if (iCanGoToTheMovies) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}

console.log('<--------- NOT OPERATOR ---------->');

if (!rainy) {
  console.log('Go to the movies');
} else {
  console.log('Go to the park');
}