
// Class Creation

class Human
{

    name = "sameer";             // Public
    #age = 21;                   // Private
    height = "6ft";

    // constructor
    constructor(newName)             
    {
        this.name = newName;
    }

    walking()
    {
        console.log("I a Walking");
    }

    running(speed = 10)             // default parameter
    {
        console.log("I am Running with speed of ", speed);
    }


    // getter and setter to access Private property
    get fetchAge()
    {
        return this.#age;
    }

    set EditAge(age)
    {
        this.#age = age;
    }

}

let obj = new Human("Hassan");
console.log(obj.name);
obj.running();

obj.EditAge = 22;
console.log(obj.fetchAge);

