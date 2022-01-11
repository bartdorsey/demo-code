// Predict the order

setTimeout(() => {
  console.log("Set Timeout");
},0);

const promise = new Promise((resolved) => {
  resolved();
});

promise.then(() => {
  console.log("Finished");
})

console.log("Hello");

