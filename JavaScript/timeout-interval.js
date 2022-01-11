// setTimeout and setInterval are built into JavaScript

// These are our first examples of asynchronous programming

// ---- setTimeout ----

setTimeout(function () {
  console.log("hard");
}, 3000);

console.log("Asychronous code is");

// ---- setInterval ----

let counter = 0;
const interval = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter > 10) {
    clearInterval(interval);
  }
}, 1000)
