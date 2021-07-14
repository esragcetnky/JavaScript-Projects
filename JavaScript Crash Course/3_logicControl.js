/* 
    Logic Control Flow
*/

//  if-else conditions
const age=18;

if(age >= 18){
    console.log("You are adult, you may enter!");
}
else if(age === 18){
    console.log("You just turned 18, welcome!");
}
else{
    console.log("You are under 18, Grow up!");
}

//  while loop
let i=0;
while(i<5){
    console.log(`while loop : ${i}`);
    i++;
}

//  for loop
for (let a = 0; a < 5; a++) {
    console.log(`for loop : ${a}`);    
}

//  Dont write dry code
//  Dont repeat yourself