var arr1 = [10,20,30];
var arr2= ['Abhijeet','Manish','Ramakant'];
var arr3 = [12,'Sachin'];

var arr4:number[];
arr4 = [11,22,33];

var arr5:Array<number>;
arr5 = [44,55,66];

var arr6:Array<number> = [1,2,3,4,5];

var arr7 = new Array();
console.log(arr7);
console.log(arr7.length);

var arr8 = new Array(10);
console.log(arr8);
console.log(arr8.length);


// Type Alias

let messageA:string = 'Hello';

// type alias
type chars = string;

let messageB:chars = 'Hi';

console.log(messageA+' '+messageB);
console.log(typeof messageA+' '+ typeof messageB);

// Union Type

var a: number | string;
a = 5;
a = 'Abhijeet';


type alphanumeric = number | string;

var b:alphanumeric;
b = 55;
b = 'Sachin';


// let empList:Array<{id:number,name:string,city:string}>;

type Employee =
{
    id:number,
    name:string,
    city:string
};

// let empList:Array<Employee>;
let empList:Employee[];

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
]

console.log('\n forEach of an Array');
empList.forEach((item,index)=>{
    console.log(`${index}    ${JSON.stringify(item)}`);
})

console.log('\n for in');
for(let index in empList){
    console.log(`${index}    ${JSON.stringify(empList[index])}`)
}

let numbers:number[] = [11,22,33,44,55];

console.log('\n for of');
for(let [index,item] of numbers.entries()){
    console.log(`${index}          ${JSON.stringify(item)}`)
}

console.log('\n for of');
for(let [index,item] of empList.entries()){
    console.log(`${index}          ${JSON.stringify(item)}`)
}

var r1 = empList.find(e => e.id == 4);
console.log(r1);

var r2 = empList.findIndex(e => e.id == 4);
console.log(r2);

var ids = empList.map(e => e.id);
console.log(ids);

var names = empList.map(e => e.name);
console.log(names);