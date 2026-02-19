let value = true
console.log(typeof(value))
value = String(value)
console.log(typeof(value))

let num1 = "23" + "34"
console.log(num1)
num1 = Number(num1)
console.log(num1)

let test = null
console.log(test)
test = Boolean(test)
console.log(test)


let age = false
age = Number(age)
console.log(age)

//                     Number()
// undefined           NaN
// null                0
// alphanumeric        NaN
// "digit string"      digits
// true or false       1 or 0


let mymarks = ""
mymarks = Boolean(mymarks)
console.log(mymarks)
