// Importing the default export
// import math from './math.js';

// Importing named exports
// import { add, subtract } from './math.js';

// Importing default and named in the same line
import math, { add, subtract } from './main.js';

console.log(add(1, 2));

console.log(subtract(1, 2));

console.log(math.add(1, 2));