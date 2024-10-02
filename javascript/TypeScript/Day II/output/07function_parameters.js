// In TypeScript, function parameters are required and
// you cannot pass extra arguments to a function.
// In TypeScript, Function parameters are also
// TypeSafe, If you do not use 'any' type explicitly.
// function greetTypeScript(name:string){
//     console.log('Hello ',name);
// }
// greetTypeScript('Manish');
// greetTypeScript(10);
// greetTypeScript('Manish','Pune');
// greetTypeScript();
// Optional Parameter
// A required parameter cannot follow an optional parameter
function add(x, y) {
    if (x === void 0)
        x = 0;
    if (y === void 0)
        y = 0;
    return x + y;
}
console.log('Result is ' + add());
console.log('Result is ' + add(4));
console.log('Result is ' + add(4, 5));
function hello(name, city) {
    // if(city !== undefined)
    if (city !== void 0)
        console.log('Hello ' + name + ' from ' + city);
    else
        console.log('Hello ', name);
}
hello('Abhijeet');
hello('Sachin', 'Mumbai');
// Default Value for parameters
function mult(x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 1; }
    return x * y;
}
console.log('Result is ' + mult());
console.log('Result is ' + mult(4));
console.log('Result is ' + mult(4, 5));
