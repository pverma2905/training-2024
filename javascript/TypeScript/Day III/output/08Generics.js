// Generics allow to work with different data types. They provide way to 
// define placeholdersfor types within your code, making it more flexible
// and type-safe.
// // Generic Method
// type Person = {
//     name:string;
// }
// type Emp = {
//     empId:number;
// }
// type Cust = {
//     product:string;
// }
// // Generic Method
// function mergeObjectFun<T1,T2>(p1:T1,e1:T2){
//     return {...p1,...e1};
// }
// let p:Person = {name:'Abhijeet'};
// let e:Emp = {empId:100};
// let c:Cust = {product:'Mobile'};
// let o = mergeObjectFun<Person,Emp>(p,e);
// console.log(o);
// let oII = mergeObjectFun<Person,Cust>(p,c);
// console.log(oII);
// let oIII = mergeObjectFun<Emp,Cust>(e,c);
// console.log(oIII);
// function mergeObjectFun(p1:Person,e1:Emp){
//     return {...p1,...e1};
// }
// let p:Person = {name:'Abhijeet'};
// let e:Emp = {empId:100};
// let c:Cust = {product:'Mobile'};
// let o = mergeObjectFun(p,e);
// console.log(o);
// let oII = mergeObjectFun(p,c);
// console.log(oII);
// interface IShape{
//     draw():void;
// }
// class Circle implements IShape{
//     draw(): void {
//         console.log('Circle is drawn!');
//     }
// }
// class Square implements IShape{
//     draw(): void {
//         console.log('Square is drawn!');
//     }
// }
// class Triangle{
//     drawMe(): void {
//         console.log('Triangle is drawn!');
//     }
// }
// // Constraints
// function Show<T extends IShape>(obj:T){
//     obj.draw();
// }
// Show(new Circle());
// Show(new Square());
// Show(new Triangle());
// // Generic Class
// class Queue {
//     private _data: number[] = [];
//     enqueue(d: number) {
//         this._data.push(d);
//     }
//     dequeue(): number | undefined {
//         return this._data.shift();
//     }
// }
// // FIFO
// let numbersQ = new Queue();
// numbersQ.enqueue(10);
// numbersQ.enqueue(20);
// //numbersQ.enqueue('Thirty');
// numbersQ.enqueue(30);
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// class Queue {
//     private _data: any[] = [];
//     enqueue(d: any) {
//         this._data.push(d);
//     }
//     dequeue(): any | undefined {
//         return this._data.shift();
//     }
// }
// var numbersQ = new Queue();
// numbersQ.enqueue(10);
// numbersQ.enqueue(20);
// numbersQ.enqueue(30);
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// var namesQ = new Queue();
// namesQ.enqueue('Abhijeet');
// namesQ.enqueue('Manish');
// namesQ.enqueue('Ashish');
// namesQ.enqueue(99);
// console.log(namesQ.dequeue());
// console.log(namesQ.dequeue());
// console.log(namesQ.dequeue().toUpperCase());
// console.log(namesQ.dequeue().toUpperCase());// Application is getting crashed at runtime
// Generic Queue
var Queue = /** @class */ (function () {
    function Queue() {
        this._data = [];
    }
    Queue.prototype.enqueue = function (d) {
        this._data.push(d);
    };
    Queue.prototype.dequeue = function () {
        return this._data.shift();
    };
    return Queue;
}());
var numbersQ = new Queue();
numbersQ.enqueue(10);
numbersQ.enqueue(20);
numbersQ.enqueue(30);
console.log(numbersQ.dequeue());
console.log(numbersQ.dequeue());
console.log(numbersQ.dequeue());
var namesQ = new Queue();
namesQ.enqueue('Abhijeet');
namesQ.enqueue('Manish');
namesQ.enqueue('Ashish');
//namesQ.enqueue(99); // Error getting it at the compile time only so no runtime crash 
console.log(namesQ.dequeue());
console.log(namesQ.dequeue());
console.log(namesQ.dequeue().toUpperCase());
//console.log(namesQ.dequeue().toUpperCase());
