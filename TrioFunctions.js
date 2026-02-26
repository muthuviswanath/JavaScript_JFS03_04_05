let arr = [1,2,3,4,5]
//Create an array where the array elements are the squares of the elements in the given array
let new_arr = []
for(let i of arr){
    new_arr.push(i ** 2)
}
console.log(new_arr)

// Map - For transforming or manipulating the data
// The elements will get modified
// The length of the resultant array remains the same

// Syntax: array.map((element/index/array) => newElement)

let mod_array = arr.map((n) => n ** 2)
console.log(mod_array)

// Given a list of values, add 18% GST to it and display the value after adding GST
// prices = [100,34.56,25678.80,2345,95000]

let prices = [100,34.56,25678.80,2345,95000]
revised_price = prices.map((n) => n *1.18)
console.log(revised_price)

//Filter - Choose selective elements from the given list of values
// Filter the elements based on conditions
// The length get reduced
// Result is always store in a new array

// Without using filter
let numbers = [1,2,3,4,5,6,7,8,9,10]
let result = []
for(let ele of numbers){
    if (ele % 2 === 0){
        result.push(ele)
    }
}
console.log(result)

// Syntax: array.filter((element/index/array) => boolean_expression)
let odd = numbers.filter((n) => n % 2 != 0)
console.log(odd)

let users = [
    {name: "Rahul", active: true},
    {name: "Modi", active: true},
    {name: "Bannerjee", active: true},
    {name: "Vikas", active: false},
    {name: "Manjunath", active: true},
    {name: "Nehru", active: false},
]

// Apply a filter such that we have list of active users alone in the resultant array

let active_users = users.filter((n) => n.active)
console.log(active_users)

// Apply a filter on the given data where the product's price is above the average price

let data = [
    {name:"Laptop", price:65000.00},
    {name:"Projector", price:35500.00},
    {name:"Keyboard", price:1670.00},
    {name:"Printer", price:6453.40},
    {name:"Graphics Card", price:85000.00},
]

let sum = 0
for (let ele of data){
    sum += ele.price
}
average = sum / data.length

console.log(`Average Price: ${average}`)
let res = data.filter((n) => n.price > average)
console.log(res)

// Reduce - Make the list of values to be reduced to one single value

// It reduces the values of array to one single value
// Used for sum, count, max, min, grouping of values

let price = [100,34,23,56,78]
total = 0
for (let e of price){
    total += e
}
console.log(`Total : ${total}`)

//Syntax:   array.reduce((accumulator, element) => newAccumulatorLogic, accumulator_initial_value)
let final_amount = price.reduce((sum, ele) => sum+ele, 0)
console.log(`Total : ${final_amount}`)

// Find the total salary of the employees earning above 30000

// filter > 30000
// map employee
// reduce total

let emp = [
    {name : "ABCD", salary:45678},
    {name : "ABCDE", salary:12678},
    {name : "ABCDEF", salary:23678},
    {name : "ABCDEFG", salary:35678}
]

let total_salary = emp
                    .filter((employee) => employee.salary > 30000)
                    .map((employee) => employee.salary)
                    .reduce((sum, sal) => sum + sal, 0)
console.log(total_salary)

