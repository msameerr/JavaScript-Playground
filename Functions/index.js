
// Basic Function decleration
function sayMyName()
{
    console.log("Sameer");
}

sayMyName();

// function expression
let print = function()
{
    console.log("Print this . . .");
}

print();

// Arrow function 
let temp = () => {
    console.log("temporary function");
} 

temp();

let powerof = (a,b) =>{
    return a**b;
}

console.log(powerof(2,2));