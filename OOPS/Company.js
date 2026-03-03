class Company{
    static name = "Heartiest Mind Technologies Pvt Ltd"
    gst_no
    address
    constructor(gst_no, address){
        this.gst_no = gst_no
        this.address = address
    }

    display(){
        console.log(`Name of the company: ${Company.name}`)
        console.log(`Company GST Number: ${this.gst_no}`)
        console.log(`Company Address: ${this.address.city}, ${this.address.state}`)
    }
}

class Address{
    state
    city

    constructor(state, city){
        this.state = state
        this.city = city
    }
}

let addr = new Address("Karnataka", "Bengaluru")
let h = new Company("3456789TK23", addr)
h.display()
h = null
console.log(addr.city)
console.log(addr.state)
h.display()