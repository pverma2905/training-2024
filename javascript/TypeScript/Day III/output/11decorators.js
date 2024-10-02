// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }
// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));
// I wan to log the arguments passed to the method.
//----------------------------
// class Calculator {
//     add(x: number, y: number) {
//         console.log(`add fn is called with arguments as ${x}, ${y}`);
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         console.log(`sub fn is called with arguments as ${x}, ${y}`);
//         return x - y;
//     }
// }
// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));
// ----------------------------
// class Calculator {
//     add(x: number, y: number) {
//         log(`add fn is called with arguments as ${x}, ${y}`);
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         log(`sub fn is called with arguments as ${x}, ${y}`);
//         return x - y;
//     }
// }
// function log(message:string){
//     console.log(message);// some other file handling 
// }
// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));
//---------------------
// Higher Order Function - is a funciton that accepts functions as parameters
// and / or returns a function;
class Calculator {
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
}
// Higher Order Function
function logHOF(fnRef) {
    return function (...args) {
        console.log(`fn is called with arguments as ${args}`);
        let result = fnRef(...args);
        return result;
    };
}
var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35))
const addWithLogging = logHOF(c.add);
const subWithLogging = logHOF(c.sub);
console.log(addWithLogging(4, 5));
console.log(subWithLogging(4, 5));
// Types of Decorators
// Class Decorator <T extends Function>(target:T) => T | void
// Property Decorator (target: Object, propertyKey: string | symbol) => void;
// Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
