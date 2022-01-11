// *** Implicit Conversion (Coercion) ***

// To String
console.log(1 + '1');
console.log(true + '1');
console.log([] + 1);

// To Number
console.log(1 - '1');
console.log(2 * '1');
console.log('2' * 2);
console.log(true - 1);
console.log([] - 1);
console.log({} - 1);

// *** Explicit Conversion ***

// To String  // String Constructor
console.log(String(1));
console.log(String(true));
console.log(String([1, 2, 3]));
console.log(String({foo:1}));

// ParseInt (Second argument is base)
console.log(parseInt('123', 10));
console.log(parseInt('00000011', 2)); // Binary (base 2)
// ParseFloat
console.log(parseFloat('123.3'));

// To Number
console.log(Number('1'));
console.log(Number(true));
console.log(Number([]));
console.log(Number({}));

// To Boolean
console.log(Boolean('1'));
console.log(Boolean(0));
console.log(Boolean([]));
console.log(Boolean({}));
