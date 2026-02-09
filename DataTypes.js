/*
Data Type                      Description

string                         Any character or sequence of characters represented using quotes
Number                         Any numerical value
BigInt                         Any number that is 2^53 - 1
Boolean                        True / False
Object                         Collection of Key-value pair
Undefined                      The default value that is provided to a variable when not initialized
Null                           Absent of an object
Symbol                         Unique primitive identifier

*/

//String

let participant_name = "Shiva"
let course = 'JavaScript'
let gender = 'M'
console.log(typeof(participant_name))
console.log(typeof(course))
console.log(typeof(gender))

//number
let roll_no = 34567
let average = 56789.34

console.log(typeof(roll_no))
console.log(typeof(average))

//BigInt
let AU_distance = 34567899876567890987n
let Moons_distance = BigInt(789876567876567898765)

console.log(typeof(AU_distance))
console.log(typeof(Moons_distance))

//Boolean
let statement = true
let stmt = false

console.log(typeof(statement))
console.log(typeof(stmt))

let employee = {
    emp_no : 1234,
    emp_name : "Shiva",
    salary:56789.45
}

console.log(typeof(employee))

let age
console.log(typeof(age))
console.log(age)

console.log(employee.emp_name)
employee = null
console.log(employee.emp_name)


