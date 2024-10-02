/*
TypeScript Types
Static - Built-In and User-Defined
Generics
Decorators

Built-In or Primitive Types
Number, void, String, null, boolean etc.
 */

// number
let first:number = 10;

// string
let str:string = "abcd";
let strII:string = 'xyz';

// void
let usuable:void = undefined;

void function helloWorld(){}

// undefined - undefined primitive type denotes all uninitialized variables in TypeScript.
// going to have only one value and that is undefined.

// any - it is the super type of all data type in TypeScript. It is used to 
// represents any javascript value.
// It is to skip the type checking at compile time.

let val:any = 10;
val = 'Hello';
val = true;

// User-Defined Type
//Array, Class, Touple, Enum, Interface, Functions


// Generic - is used to create a component which can work with a variety of data type 
// rather than a single one.
// TypeScript uses generics with the type variable <T> that denotes the types.

function foo<T>(arg:T):T{
    return arg;
}

console.log(foo<number>(100));
console.log(foo<string>('Hundred'));
console.log(foo<boolean>(true));


// Decorators
// A decorator is a special of data type which can be attached to a class declaration,
// method, property, accessor, and parameter. It provides a way to add both
// annotations and a meta programming syntax for classes and functions.
// It is used with '@' symbol.