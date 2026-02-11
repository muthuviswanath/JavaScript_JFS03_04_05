//1. Using object Literal
const user = {
    id:101,
    name:"Pradeep",
    password:"test"
}

console.log(user.id)
console.log(user.name)
console.log(user.password)
//Javascript Vulnerability
console.log(user.age)
console.log(user.isActive)

//2. Using Object Constructor
const emp = new Object()
emp.id = 4567
emp.name = "Kishore"
emp.age = 34

console.log(emp.id)
console.log(emp.name)
console.log(emp.age)

emp.department = "Training"
console.log(emp.department)
console.log(emp.location)

//3. Constructor Function

function product(id, prodname, price){
    this.id = id
    this.prodname = prodname
    this.price = price
}

const prod_1 = new product(123, "mouse",5678.45)
const prod_2 = new product(1453, "keyboard",15678.45)
console.log(prod_1)

//4. Using class (ES6)

class Student{

    constructor(id,name,degree){
        this.id = id
        this.name = name
        this.degree = degree
    }
}

const stu_1 = new Student(123, "Name", "B.B.A")
console.log(stu_1)

//5. Creating the object using Prototype Object.create()
const myproto = {
    greetings(){
        return "Welcome to the world of Javascript"
    }
}

const person = Object.create(myproto)
person.name = "Manjunath"
console.log(`${person.greetings()} Mr. ${person.name}`)

//6. Using factory function
function createMobiles(mobiletype,name){
    return {
        mobiletype, name
    }
}

const iphone = createMobiles("smartphone","iPhone 17")
const nokia = createMobiles("barphone","Nokia 1100")

console.log(iphone)
console.log(nokia)

//7. Using Object.assign()

const baseuser = {role:"Admin"}

const superuser = Object.assign({}, baseuser,{
    name:"Rohan",
    active:true
})

console.log(superuser)