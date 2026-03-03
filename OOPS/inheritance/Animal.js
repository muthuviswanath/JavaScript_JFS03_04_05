class Animal{
    constructor(name){
        this.speed = 0
        this.name = name
    }

    run(speed){
        this.speed = speed
        console.log(`${this.name} runs at the speed of ${this.speed} kmph`)
    }

}

class Cheetah extends Animal{

}

ch = new Cheetah("Cheetah")
ch.run(76.5)
