// Global scope (Module scope in Node.JS)
var a = "This is global/module scope - a";
let b = "This is global/module scope - b";
const c = "This is global/module scope - c";
d = "This is global/module scope - d";

// Function Scope
function fn() {
  var a = "This is scoped to the function fn - a";
  let b = "This is scoped to the function fn - b";
  const c = "This is scoped to the function fn - c";
  d = "This is a global variable defined inside the function";

  // Block scope
  if (true) {
    var a = "This is scoped to the function fn, but is inside the if block - a ";
    let b = "This is scoped to the if block - b";
    const c = "This is scoped to the if block - c";
    d = "This is a global variable defined deep inside this if"
    console.group("Inside if");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.groupEnd();
  }

  console.group("Inside fn");
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.groupEnd();
}

// Call fn
fn();

console.group("Outside")
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.groupEnd();

