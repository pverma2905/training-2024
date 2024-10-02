/*
TypeScript Types
Static - Built-In and User-Defined
Generics
Decorators

Built-In or Primitive Types
Number, void, String, null, boolean etc.
 */
// number
var first = 10;
// string
var str = "abcd";
var strII = 'xyz';
// void
var usuable = undefined;
void function helloWorld() { };
// undefined - undefined primitive type denotes all uninitialized variables in TypeScript.
// going to have only one value and that is undefined.
// any - it is the super type of all data type in TypeScript. It is used to 
// represents any javascript value.
// It is to skip the type checking at compile time.
var val = 10;
val = 'Hello';
val = true;
// User-Defined Type
//Array, Class, Touple, Enum, Interface, Functions
// Generic - is used to create a component which can work with a variety of data type 
// rather than a single one.
// TypeScript uses generics with the type variable <T> that denotes the types.
function foo(arg) {
    return arg;
}
console.log(foo(100));
console.log(foo('Hundred'));
console.log(foo(true));
