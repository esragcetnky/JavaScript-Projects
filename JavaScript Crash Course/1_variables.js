/*
    Variables
*/
var variableName="Welcome to variables";
console.log(variableName);

// after new version of javascript, there are 2 new way of declaring variables
let variable2=13;
const variable3=true; // can't reassign 

/*
    Data Types:
        Strings
        Numbers
        Booleans
        Null
        Undefined
        Object
        Symbol (Extremely rarely used)
*/

//  Strings

const userName = "Esra";
const helloMessage=`Hello, ${userName} welcome`;
const backticks=`${2+2}`

console.log(helloMessage);
console.log(`Type of hello message : ${typeof helloMessage}`);
console.log(`Backticks example : ${backticks}`);


//  Numbers
//  JavaScript is untyped

const integer=5;
const decimalNumber=0.5;

const multiple=integer*decimalNumber;
const sum=integer+decimalNumber;
const div=integer/decimalNumber;
const extraction=integer-decimalNumber;

console.log(`Integer : ${integer}`);
console.log(`Decimal Number : ${decimalNumber}`);
console.log(`Type of integer : ${typeof integer}`);
console.log(`Multiplication : ${multiple}`);
console.log(`Sum : ${sum}`);
console.log(`Division : ${div}`);
console.log(`Extraction : ${extraction}`);

//  Booleans
const isCool=true;
console.log(`Is cool : ${isCool}`);
console.log(`Type of isCool : ${typeof isCool}`);


// Null 
const school=null;

console.log(`Null value : ${school}`);
console.log(`Type of null value : ${typeof school}`);

// Undefined 
let x;
console.log(`Type of undefined : ${typeof x}`);

//  Objects
const person= {
    name:"Esra",
    age:22,
};

console.log(`Age of person named Esra : ${person.age}`);
console.log(`Type of person variable: ${typeof person}`);

//  Array
const arr= [1,2,3,4];
console.log(`Array : ${arr}`);
console.log(`Type of array : ${typeof arr}`);

//  Date
const date= new Date();
console.log(`Date : ${date}`);
console.log(`Type of Date : ${typeof date}`);

// Java is dynamically typed
let message="Hello Message";
console.log(`Before reassign message : ${message}`);
message=false;
console.log(`After reassign message : ${message}`);
