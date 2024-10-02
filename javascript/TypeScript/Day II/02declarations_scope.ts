

// Variables created are optionally typesafe
// Untyped variables, Not typesafe and will not get intellisence

// var data;
// data = 10;
// data = 'abcd';

// // Type Annotation
// let a:number;
// a = 10;


// // Type Inference - describes where and how TypeScript infers types when
// // you don't explicitly annotate them.

// // Implicitly typed
// var data = 10;
// data = 'Abhijeet'; // Type 'string' is not assignable to type 'number';

// var eName = 'Sachin';
// eName = 10;// Type 'number' is not assignable to type 'string';


// // Explicitly Typed
// var age:number;
// age = 10;
// age = 'ten';

// function add(x,y){
//     return x+y;
// }

// function add(x:any,y:any){
//     return x+y;
// }

function add(x:number,y:number){
    return x+y;
}

console.log(add(4,5));
// console.log(add(4,'ABC'));
// console.log(add('ABC','PQR'));

// Scope
/*
Global Scope
Local Scope (Function level scope - var)
Block Scopet (within the block - let and const)
 */