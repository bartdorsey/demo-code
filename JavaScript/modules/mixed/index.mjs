// ES modules can import CommonJS modules and NodeJS translates perfectly
import math, { add, subtract } from './math.cjs';

console.log(add(1, 2))

console.log(subtract(1, 2))

console.log(math.add(1, 2));