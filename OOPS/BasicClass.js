class Laptop{
    //variables
    // A variable cannot be declared using let or var or const
    age = 23

    //constructor
    constructor(){
        
    }

    //methods
    displayData() {
        console.log(this.age)
    }

}

let hp_laptop = new Laptop()
console.log(hp_laptop.age)
hp_laptop.displayData()
console.log(Laptop.age)
console.log(hp_laptop)
