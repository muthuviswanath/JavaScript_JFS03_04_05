class Vehicle{
    constructor(name){
        this.name = name
    }

    startVehicle(){
        console.log(`Vehicle started`)
    }
}

class Car extends Vehicle{


    startVehicle(){
        console.log("Car is started")
    }
}

c = new Car()
c.startVehicle();


