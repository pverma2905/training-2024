/*
Generators are a special type of function allow to pause and resume execution,
creating iterators that can be used to generate
sequences of values.

tsc 09Iterators.ts --outDir output --watch --target ES2015
 */
// function idNormal(){
//     console.log('Id is created!, Normal Fn .....!');
// }
// // Lazy
// function* idGen(){
//     console.log('Id is created!, Generator Fn .....!');
// }
// idNormal();
// let genObj = idGen();
// console.log(genObj.next());
// yield keyword Generators use the yield keyword to pause the execution
// and return a value. When generator is resumed, execution continues from
// the point where it was pasued.
function* idGen() {
    console.log(`Generator Execution Started!`);
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    console.log(`Generator Execution Completed!`);
}
let genObj = idGen();
console.log(genObj.next());
console.log('Paused 1.....');
console.log(genObj.next());
console.log('Paused 2.....');
console.log(genObj.next());
console.log('Paused 3.....');
console.log(genObj.next());
console.log('Paused 4.....');
console.log(genObj.next());
console.log('Paused 5.....');
console.log(genObj.next());
