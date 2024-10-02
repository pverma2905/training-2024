/*
array.reduce method - is a higher-order function that
iterates over an array, applying a reducer function
 to each element and accumulating a result.
 */
// REST Parameter - Aggreate all the remaining parameters
// into a single variable.
//(Ellipsis) ... - REST Parameter used in function parameters
function printNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        console.log(number);
    }
    console.log('\n');
}
printNumbers(1);
printNumbers(1, 2);
printNumbers(1, 2, 3);
printNumbers(1, 2, 3, 4);
printNumbers(1, 2, 3, 4, 5);
console.log('\n');
function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 0) {
        var sum = args.reduce(function (total, n) { return total + n; });
        return sum / args.length;
    }
    else
        return 0;
}
// console.log(Average([11,22,33,44,55]));
// console.log(Average([11,22,33]));
// console.log(Average([11,22,33,44,55,66]));
console.log(Average());
console.log(Average(1));
console.log(Average(1, 2, 3));
console.log(Average(11, 22, 33, 44, 55, 66, 77));
