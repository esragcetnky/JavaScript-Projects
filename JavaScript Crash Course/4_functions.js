/* 
    Functions 
*/

function square(number){
    return number*number;
}

const number= 5;
console.log(`Square of ${number} is ${square(number)}`);

//  A function declaration
function name(params){
    //statements
    //have access to "this" keyboard
} 

//  A function expression
const name2= function(params){
    //statements
}

//  An arrow function (most modern way)
const name3= (params) => {
    //statements
}
const square2 = (number) => number * number ;
const number2 = 7;
console.log(`Square of ${number2} is ${square2(number2)} (Calculated with an arrow function)`);
// Functions always return undefined.

