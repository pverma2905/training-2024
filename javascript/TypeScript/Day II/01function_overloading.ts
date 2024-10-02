// TypeScript supports function overloading

// function hello(){
//     console.log('Hello World!');
// }
// //Duplicate function implementation
// function hello(name:string){
//     console.log(`Hello ${name}`);
// }

// hello();
// hello('Saurav');


// Function Overloading
// Go for multiple function declarations with single definition

function hello():void;
function hello(name:string):void;
function hello(name:string,city:string):void;

function hello(...args:string[]){
    if(args.length === 0){
        console.log('Hello World!');
    }
    else if(args.length === 1){
        console.log(`Hello ${args[0]}!`);
    }
    else if(args.length === 2){
        console.log(`Hello ${args[0]} from ${args[1]}!`);
    }
    else
        throw new Error('Invalid Number of Arguments!');
}

hello();
hello('Zensar');
hello('Zensar','Pune');
//hello('Zensar','Pune',111);