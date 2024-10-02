/*
array.reduce method - is a higher-order function that
iterates over an array, applying a reducer function
 to each element and accumulating a result.
 */

 // REST Parameter - Aggreate all the remaining parameters
 // into a single variable.
 //(Ellipsis) ... - REST Parameter used in function parameters

 // Whenever ... (Ellipsis) is on the left hand side of an assignment operator
 // that is REST Parameter
function printNumbers(...numbers:number[]){
    for(const number of numbers){
        console.log(number);
    }
    console.log('\n');
}

printNumbers(1);
printNumbers(1,2);
printNumbers(1,2,3);
printNumbers(1,2,3,4);
printNumbers(1,2,3,4,5);

console.log('\n');

 function Average(...args:number[]):number{
    if(args.length > 0){
        let sum = args.reduce((total,n) => total+n);
        return sum / args.length;
    }
    else
        return 0;
}

// console.log(Average([11,22,33,44,55]));
// console.log(Average([11,22,33]));
// console.log(Average([11,22,33,44,55,66]));

console.log(Average())
console.log(Average(1))
console.log(Average(1,2,3))
console.log(Average(11,22,33,44,55,66,77))