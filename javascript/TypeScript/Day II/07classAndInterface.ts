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

class Control {
    get ControlId(): number {
        return 10;
    }
    focus(): string {
        return "The control is in focus.........!";
    }
}

class SelectTableControl {
    select(): string {
        return "The control is selected..........!";
    }
}

interface ISelectableControls extends Control, SelectTableControl { }

class Button implements ISelectableControls {
    get ControlId(): number {
        return 100;
    }
    focus(): string {
        return "The control is in focus.........!";
    }
    select(): string {
        return "The control is selected..........!";
    }
}
