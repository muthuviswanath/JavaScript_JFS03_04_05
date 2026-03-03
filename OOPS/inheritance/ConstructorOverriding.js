class Product{
    constructor(name){
        this.name = name
        this.setBrand()
    }

    setBrand(){
        console.log("Hewlett Packard")
    }
}

class Laptop extends Product{
    
    constructor(name, price){
        super(name)
        this.price = price
    }
    setBrand(){
        console.log("Dell")
    }
}

let prod = new Laptop("HP Laptop",56789)
let pr = new Product("Test",6789)

prod.setBrand()
pr.setBrand()