// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }
// class Person implements IPerson{
//     // Parameterised Members
//     constructor(public name:string,public age:number){}
//     greet(message:string):string{
//         return `Hello ${this.name} of Age ${this.age} with ${message}`;
//     }
// }
// let p1:IPerson = new Person('Sachin', 46)
// let p2:IPerson = new Person('Rahul', 47)
// console.log(p1.greet('Hello'))
// console.log(p2.greet('Hey'))
// --------------
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }
// interface IEmployee {
//     doWork(): string;
// }
// interface ICustomer {
//     doShopping(): string;
// }
// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }
//     greet(message: string): string {
//         return `Hello ${this.name} of Age ${this.age} with ${message}`;
//     }
//     doWork(): string {
//         return 'Learning Javascript!';
//     }
//     doShopping(): string {
//         return 'Shopping Online!';
//     }
// }
// let p1:Person = new Person('Sachin', 46)
// console.log(p1.greet('Hello'))
// console.log(p1.doWork());
// console.log(p1.doShopping());
// ------------- 
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }
// interface IEmployee extends IPerson {
//     doWork(): string;
// }
// interface ICustomer extends IPerson {
//     doShopping(): string;
// }
// class Person implements IEmployee{
//     constructor(public name: string, public age: number) { }
//     greet(message: string): string {
//         return `Hello ${this.name} of Age ${this.age} with ${message}`;
//     }
//     doWork(): string {
//         return 'Learning Javascript!';
//     }
// }
// class Customer implements ICustomer{
//     constructor(public name: string, public age: number) { }
//     greet(message: string): string {
//         return `Hello ${this.name} of Age ${this.age} with ${message}`;
//     }
//     doShopping(): string {
//         return 'Shopping Online!';
//     }
// }
//------------------------------
var Control = /** @class */ (function () {
    function Control() {
    }
    Object.defineProperty(Control.prototype, "ControlId", {
        get: function () {
            return 10;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.focus = function () {
        return "The control is in focus.........!";
    };
    return Control;
}());
var SelectTableControl = /** @class */ (function () {
    function SelectTableControl() {
    }
    SelectTableControl.prototype.select = function () {
        return "The control is selected..........!";
    };
    return SelectTableControl;
}());
var Button = /** @class */ (function () {
    function Button() {
    }
    Object.defineProperty(Button.prototype, "ControlId", {
        get: function () {
            return 100;
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.focus = function () {
        return "The control is in focus.........!";
    };
    Button.prototype.select = function () {
        return "The control is selected..........!";
    };
    return Button;
}());
