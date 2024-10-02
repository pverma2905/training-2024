// Type Assertion is explicitly telling the compiler that we
// want to treat the entity asa a different type.
var data = 'Hello, I am a string!';
console.log(data);
console.log(typeof data);
console.log(data.toUpperCase());
var a1 = data.length;
console.log(a1);
var a2 = data.length;
console.log(a2);
var a3 = data.length;
console.log(a3);
console.log(data.toLowerCase());
// console.log((data as number).toFixed());
