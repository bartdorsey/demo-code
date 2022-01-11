// While Loops
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
{
  let n = 0;

  while (n <= 3) {
    n++;
  }

  console.log(n); // expected output: 3
}

// Do-While Loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
{

  let result = '';
  let index = 0;

  do {
    index = index + 1;
    result = result + index; // Concatenating the string
  } while (index < 5);

  console.log(result); // expected result: "12345"
}


// C-Style For Loops
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
// statement


{
  let str = '';

  for (let i = 0; i < 10; i++) {
    str = str + i;
  }

  console.log(str); // expected output: "0123456789"
}

{
  // Reversed Loop
  let str = '';

  for (let i = 9; i >= 0; i--) {
    str = str + i;
  }

  console.log(str); // expected output: "9876543210"
}

// Break statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
{
  let index = 0;

  while (index < 6) {
    if (index === 3) {
      break;
    }
    index = index + 1;
  }
  console.log(index);
}

// expected output: 3

// Continue statement
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
{
  let text = '';

  for (let index = 0; index < 10; index++) {
    if (index === 3) {
      continue;
    }
    text = text + index;
  }

  console.log(text); // expected output: "012456789"
}

// Bonus Loop:  Recursion

function counter(number) {
  //console.log(number);
  if (number < 10) {
    counter(number + 1);
  }
}

counter(0);

