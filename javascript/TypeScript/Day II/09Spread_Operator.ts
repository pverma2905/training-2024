
//Spread Operator - allows you to expand an array or an object into
// individual elements or properties.

// Array  - Spread Operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// Whenever ... (Ellipsis) is on the right hand side of an assignment operator
// that is Spread Operator.

// let arr3 = [...arr1,...arr2];

// console.log(arr3);

// let numArr1 = [10,20,30,40,[50,60]];

// // Reference Copy
// let numArr2 = numArr1;

// // Shallow Copy
// let numArr2 = [...numArr1];

// // Deep Copy
// let numArr2 = JSON.parse(JSON.stringify(numArr1));

// numArr1[0] = 99;
// numArr2[0] = 77;
// (numArr2[4] as number [])[0] = 555;

// console.log('numArr1 ',numArr1);
// console.log('numArr2 ',numArr2);


// Destructuring - is an expression that allows you to extract values from arrays 
// and objects into individual variables.


// let numArr = [11,22,33,44,55];

// let x = numArr[0];
// let y = numArr[1];

// console.log(x+' '+y);

// let [x,y] = numArr;
// let [x,,y] = numArr;
// console.log(x+' '+y);

// // REST Parameter
// let [x,y,...z] = numArr;
// console.log(x+' '+y+' '+z);


// // Object - Spread Operator

// let emp1 =  {id:100,name:'Manish',address:{city:'Vrundaban'}};

// // // Reference Copy
// // let emp2 = emp1;

// // // Shallow Copy
// // let emp2 = {...emp1};

// // Deep Copy
// let emp2 = JSON.parse(JSON.stringify(emp1));

// emp1.id = 200;
// emp2.address.city = 'Pune';

// console.log('Employee 1 ',JSON.stringify(emp1));
// console.log('Employee 2 ',JSON.stringify(emp2));

let emp =
    { id: 100, ename: 'Manish', 
        state: 'Maharashtra', 
        city: 'Pune', 
        pincode: 411038 };

// let id = emp.id;

// Destructuring

// let {id,ename} = emp;

// console.log('Id ',id);
// console.log('Name ',ename);

let {id,ename,...address} = emp;

console.log('Id ',id);
console.log('Name ',ename);
console.log('Address ',address);

