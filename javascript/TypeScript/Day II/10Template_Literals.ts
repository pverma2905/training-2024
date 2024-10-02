var s1 = "Hello";
var s2 = 'Hello';
var s3 = `Hello`;

console.log(s1)
console.log(typeof s1)

console.log(s2)
console.log(typeof s2)

console.log(s3)
console.log(typeof s3)

var s4 = "H\ne\nl\nl\n\to";
console.log(s4)

// Template Literal
var s5 = `H
e
l
l
              o`;
console.log(s5)

var fName = 'Sachin';
var lName ='Tendulkar';

var message1 = 'Hello '+fName+' '+lName;
console.log(message1);

// Template Literal
var message2 = `Hello ${fName} ${lName}`;
console.log(message2);


// Function Overloading in TypeScript ?