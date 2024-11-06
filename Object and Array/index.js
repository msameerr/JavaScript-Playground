
// Object Creation

let obj = {

    "name": "sameer",
    age: 21,
    "height": "6ft",
    "weight": "79",

    greet: function() {
        console.log("hello");
    }

}

console.log(obj);
console.log(obj.greet);


// Array Creation 
let arr = [1,2,3,4,"sameer"];

arr.push(10);
arr.push(7);
console.log(arr);


// Array Constructor 
let brr = new Array(1,2,3, 4, "Done");

brr.pop();
brr.push(5);
console.log(brr);

// Map

let double_brr = brr.map((number) => {

    return number*number;

})

console.log(double_brr);