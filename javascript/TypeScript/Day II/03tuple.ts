var dataArr1:(number|string)[];

dataArr1 = [1,'Sachin'];
console.log(dataArr1);

dataArr1 = ['Sachin',1];
console.log(dataArr1);

dataArr1 = ['Sachin','Rahul'];
console.log(dataArr1);

dataArr1 = [1,2,3,4,5];
console.log(dataArr1);

dataArr1 = ['Sachin',1,'Mumbai',400010];
console.log(dataArr1);

// Tuple - Stores a fixed collection of values of same or varied types 
// and it maintains the sequence.

// A tuple works like an array but with some additional considerations.

// Number of elements in the tuple are fixed.
// Types of elements are known and need not to be the same.

let dataRow:[number,string];

dataRow = [11,'Rahul'];

// dataRow = ['Saurav',12];
// dataRow = ['Saurav','Kolkata'];
// dataRow = [11,12];
// dataRow = [11,'Saurav',34234,34];

function insert(data:[number,string]){
    // code to insert the data as a row of a table
}

insert([10,'Rahul']);
// insert(['Rahul',10]);
// insert(['Rahul',10,434.34]);