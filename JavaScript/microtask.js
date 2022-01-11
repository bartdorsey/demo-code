console.log("Before");
setTimeout(() => {
  console.log("Timeout");
}, 0);
queueMicrotask(() => {
  console.log("Microtask");
});
console.log("After");
