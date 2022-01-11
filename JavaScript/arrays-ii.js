// Two Dimensional Arrays
{
  const aisles = [
    ["bread", "hamburger buns", "hotdog buns"],
    ["milk", "cheese"],
    ["tomatoes", "onions", "lettuce"]
  ];

  // Accessing the second aisle
  console.log(aisles[1]); // ["milk", "cheese"]

  // Get the milk from the second aisle
  console.log(aisles[1][0]); // "milk"

  // Add cottage cheese to the dairy aisle
  aisles[1].push('cottage cheese');
  console.log(aisles); 
  // [
  //   ['bread', 'hamburger buns', 'hotdog buns'],
  //   ['milk', 'cheese', 'cottage cheese'],
  //   ['tomatoes', 'onions', 'lettuce']
  // ]
  
  // # Looping through arrays ---

  // ## C-Style Loops --

  // Loop through aisles and print each aisle;
  for (let i = 0; i < aisles.length; i++) {
    console.log(aisles[i]);
  }

  // Loop through all the aisles and then loop through each aisle
  // and print out each item
  for (let i = 0; i < aisles.length; i++) { // --- Outer Loop ---
    // Making an aisle variable here makes the code
    // in the second loop better
    const aisle = aisles[i];
    // we can't reuse i, 
    // so we have to pick a new variable name
    for (let j = 0; j < aisle.length; j++) { // --- Inner Loop ---
      console.log(aisle[j]);
    }
  }

  // ## for..of Loops

  // for..of loops makes this much cleaner and easier to read
  for (const aisle of aisles) { // --- Outer Loop ---
    for (const item of aisle) { // ---- Inner Loop ---
      console.log(item);
    }
  }
}
