
/*
Iterators
Iterators are objects that provide a way to iterate over a sequence of values.
The offer a standardized interface for traversing different data structures,
such as arrays, maps, and custom collections;

tsc 09Iterators.ts --outDir output --watch --target ES2015
 */

class Queue<T> implements IterableIterator<T>{
    // Iterable Collection
    private _data: T[] = [];
    private _i=0;

    enqueue(d: T) {
        this._data.push(d);
    }

    dequeue(): T | undefined {
        return this._data.shift();
    }

    [Symbol.iterator]():IterableIterator<T>{
        return this;
    }
    next(...args:[]| [undefined]):IteratorResult<T,any>{
        if(this._i < this._data.length){
            return {
                done:false,
                value:this._data[this._i++]
            }
        }else{
            return {
                done:true,
                value:undefined
            }
        }
    }
}

type Order = {
    id:number,
    description:string;
}

let ordersQ = new Queue<Order>();
ordersQ.enqueue({id:101,description:'Mobile Order'});
ordersQ.enqueue({id:202,description:'Tablet Order'});
ordersQ.enqueue({id:303,description:'Laptop Order'});


// for(const item of ordersQ._data){ // _data is public
//     console.log(`${item.id}     ${item.description}`);
// }

for(const item of ordersQ){
    console.log(`${item.id}     ${item.description}`);
}