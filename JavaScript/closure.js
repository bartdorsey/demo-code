// Closures are a special kind of scope.
// They make variables last after a function block ends.
// Anytime you create a function, it creates a closure.


function outside() {
  const holdMe = "This variable is in a closure";
  function inside() {
    console.log(holdMe);
  }
  // In order for closures to be useful, we need to 
  // return a function that will be called LATER
  // once the outside function has ended.
  return inside;
}


const referenceToInside = outside();

// Now when we call this, it will log the holdMe variable
referenceToInside();
