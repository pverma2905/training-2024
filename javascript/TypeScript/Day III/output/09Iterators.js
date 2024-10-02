/*
Iterators
Iterators are objects that provide a way to iterate over a sequence of values.
The offer a standardized interface for traversing different data structures,
such as arrays, maps, and custom collections;

tsc 09Iterators.ts --outDir output --watch --target ES2015
 */
class Queue {
    constructor() {
        // Iterable Collection
        this._data = [];
        this._i = 0;
    }
    enqueue(d) {
        this._data.push(d);
    }
    dequeue() {
        return this._data.shift();
    }
    [Symbol.iterator]() {
        return this;
    }
    next(...args) {
        if (this._i < this._data.length) {
            return {
                done: false,
                value: this._data[this._i++]
            };
        }
        else {
            return {
                done: true,
                value: undefined
            };
        }
    }
}
let ordersQ = new Queue();
ordersQ.enqueue({ id: 101, description: 'Mobile Order' });
ordersQ.enqueue({ id: 202, description: 'Tablet Order' });
ordersQ.enqueue({ id: 303, description: 'Laptop Order' });
// for(const item of ordersQ._data){ // _data is public
//     console.log(`${item.id}     ${item.description}`);
// }
for (const item of ordersQ) {
    console.log(`${item.id}     ${item.description}`);
}
