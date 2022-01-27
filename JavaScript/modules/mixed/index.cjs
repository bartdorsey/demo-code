// We can't use require here because it refuses to import an ES Module
// const math = require('./math.mjs');

async function main() { 
  const { default: math, add, subtract } = await import("./math.mjs");

  console.log(add(1, 2));

  console.log(subtract(1, 2));

  console.log(math.add(1, 2));
}

main();
