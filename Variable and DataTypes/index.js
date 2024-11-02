
// var 

function var_func()
{
    var age = 15;
    var age = 20;
    console.log(age); // function scoped
}
var_func();

// let 

function let_func()
{
    {
        let age = 15;
        age = "sameer";
        console.log(age);  // blocked scope
    }
    
}
let_func();

// const

function const_func()
{
    const age = 15;
    // age = 20;       no re-assignment
    console.log(age); 
}
const_func();