// Type Assertion is explicitly telling the compiler that we
// want to treat the entity asa a different type.

var data:any = 'Hello, I am a string!';

console.log(data);
console.log(typeof data);

console.log(data.toUpperCase());
var a1 = data.length;
console.log(a1);

var a2 = (<string>data).length;
console.log(a2);

var a3 = (data as string).length;
console.log(a3);

console.log((data as string).toLowerCase());
// console.log((data as number).toFixed());