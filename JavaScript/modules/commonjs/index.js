const math = require('./math');
// In common JS this is regular JS destructuring
const { add, subtract, multiply, divide } = require('./math');

console.log(add(1, 2));

console.log(math.add(1, 2));