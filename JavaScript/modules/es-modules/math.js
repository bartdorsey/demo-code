// Named Exports
export function add(num1, num2) {
  return num1 + num2;
}

export function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export function divide(num1, num2) {
  return num1 / num2;
}

// default export
// you import it with import <name> from './file.js'
export default {
  add,
  subtract,
  multiply,
  divide,
};