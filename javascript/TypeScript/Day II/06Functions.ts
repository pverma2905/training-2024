// Function Declaration Syntax
// Function Expression Syntax

// Arrow Function / Lambda Expression

var r1:undefined = undefined;
var r2:void = undefined;

//never - The never type represents a value that
// never occurs. It is primarily used in scenarios
// where a function is guaranteed to throw an error
// or never return.

function iterate():never{
    let i =0;
    while(true){
        console.log(++i);
    }
}
// iterate();

function throwError(errorMsg:string):never{
    throw new Error(errorMsg);
}

// throwError();

// void
function foo():void{
    // return 10;
    // return 'default';
    return;
}


