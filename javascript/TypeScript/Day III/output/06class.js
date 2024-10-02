// class Employee{
//     // data member / data property
//     private _name:string;
//     // constructor(){
//     //     this._name= 'NA'
//     // }
//     // constructor(name:string){
//     //     this._name = name;
//     // }
//     constructor(name = 'NA'){
//         this._name = name;
//     }
//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
//     // Never use function expression syntax to create member functions, it wil
//     // increase the memory usage
//     // same way never use lambdas
// }
// let emp1 = new Employee();
// console.log(emp1.getName());
// let emp2 = new Employee('Abhijeet');
// console.log(emp2.getName());
//---------------------------
// class Employee{
//     // data member / data property
//     //private _name:string;
//     // constructor(name = 'NA'){
//     //     this._name = name;
//     // }
//     private _name = "NA";
//     private _age?: number;
//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
//     getAge(){
//         // if(this._age){
//         //     return this._age.toFixed();
//         // }
//         // else{
//         //     return this._age;
//         // }
//         return this._age?.toFixed();
//     }
// }
// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName('Abhijeet');
// console.log(e1.getName());
//------------------------------
// class Employee{
//     private _name = "NA";
//     private _age?: number|undefined;
//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
//     getAge(){      
//         return this._age?.toFixed();
//     }
//     setAge(value:number|undefined){
//         this._age = value;
//     }
// }
// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName('Abhijeet');
// e1.setAge(40);
// console.log(e1.getName());
// console.log(e1.getAge());
//---------------------------------
// class Employee{
//     private _name = "NA";
//     private _age?: number|undefined;
//     // Accessor Properties
//     get Name(){
//         return this._name;
//     }
//     set Name(value:string){
//         this._name = value;
//     }
//     get Age(){      
//         return this._age;
//     }
//     set Age(value:number|undefined){
//         this._age = value;
//     }
// }
// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = 'Abhijeet';
// e1.Age = 40;
// console.log(e1.Name);
// console.log(e1.Age);
//------------ Parameter properties / Parameter Members
var Employee = /** @class */ (function () {
    // // Private Data Members
    // private _name = "NA";
    // private _age: number;
    // // Default Value Constructor
    // constructor(name = 'NA', age=0){
    //     this._name = name;
    //     this._age = age;
    // }
    // OR
    // Parameter Members
    function Employee(_name, _age) {
        if (_name === void 0) { _name = 'Default'; }
        if (_age === void 0) { _age = 99; }
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Employee.prototype, "Name", {
        // Accessor Properties
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee();
console.log(e1.Name);
console.log(e1.Age);
e1.Name = 'Abhijeet';
e1.Age = 40;
console.log(e1.Name);
console.log(e1.Age);
// Assignment 
// Try one Person class Name, City also try to get
// Population - No of People you have created.
// Static Variable - Class Variable
// class Person{
//     private static _cnt:number = 0;
// }
