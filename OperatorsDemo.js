let a = 2
console.log(a**7)

let age = 21
let m_age = "21"

console.log(age == m_age)
console.log(age === m_age)

let beta = 7
console.log(~beta) 
// 7 + 1 = -8
beta = -8
console.log(~beta) 


let charlie = 10
console.log(charlie << 2) //40


console.log(charlie >> 2) //2

let result = age >=18? "Eligible to Drink Tea" : "Eligible to Drink nothing"
console.log(result)

my_name = "Muthu"
salary = 456789.34
isDead = false

console.log(typeof(my_name))
console.log(typeof(salary))
console.log(typeof(isDead))


let employee = {
    empid : 123,
    empname : "Mallikarjun",
    salary: 56789.78
}

console.log(employee.empname instanceof string) // error