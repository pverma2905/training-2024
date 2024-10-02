

// const area = function (rect:{h:number,w?:number}){
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = {h:20,w:10};
// console.log(area(s1));

// let s2 = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// let s3 = { h: 20, d: 30 };
// console.log(area(s3));

// // Type Alias
// type Shape = {
//     h:number,
//     w?:number
// }

// const area = function (rect:Shape){
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1:Shape = {h:20,w:10};
// console.log(area(s1));

// let s2:Shape = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// let s3:Shape = { h: 20, d: 30 };
// console.log(area(s3));



// // interface IShape
// interface IShape{
//     h:number,
//     w?:number
// }

// const area = function (rect:IShape){
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1:IShape = {h:20,w:10};
// console.log(area(s1));

// let s2:IShape = { h: 20, w: 10, d: 30 };
// console.log(area(s2));

// let s3:IShape = { h: 20, d: 30 };
// console.log(area(s3));

// Type aliases and interfaces are very similar and you can choose 
// freely among them.

// Use type aliases when defining primitive types, union, intersection,
// function of tuple types.

// Use interfaces when defining object types or to take advantages of 
// declarating merging.



interface IPerson {
    name: string;
    age: number;
    greet(message: string): string;
}

let p1:IPerson = {
    name:'Abhijeet',
    age:42,
    greet:function(msg){
        return msg;
    }
}

console.log(p1.greet('Hello!'));

// interface merging
interface IShape{
    height:number;
} 
interface IShape{
    width:number;
} 


let s1:IShape = {height:20,width:10};