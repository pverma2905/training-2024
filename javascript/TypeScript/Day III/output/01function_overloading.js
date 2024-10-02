"use strict";
function hello() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        console.log('Hello World!');
    }
    else if (args.length === 1) {
        console.log("Hello ".concat(args[0], "!"));
    }
    else if (args.length === 2) {
        console.log("Hello ".concat(args[0], " from ").concat(args[1], "!"));
    }
    else
        throw new Error('Invalid Number of Arguments!');
}
hello();
hello('Zensar');
hello('Zensar', 'Pune');
