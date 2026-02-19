/*
Single Quote, Double Quote as well as BackQuote (BackTick) are considered strings in JavaScript
Escape sequences like \n \t \b \' \"
Strings are immutable

*/

console.log("Welcome")
console.log('Welcome')
product = 'Laptop'
price = 456789.34
console.log(`The product we are looking at is: ${product} @ ${price}`)

//Find the length of the string:
console.log(product.length)

//Access a character at a specific index
console.log(product.at(3))
console.log(product[3])
console.log(product.at(-1))// to find the last character
console.log(product.at(-2))// to find the last character
console.log(product[product.length - 1])

//Iterating through string

emp_name = "Rohan Manu";
for (let char of emp_name){
    console.log(char)
}

//Methods of string:

let word = "EDUCATION"
console.log(word.at(2))
console.log(word.charAt(2))
// to display the ascii value of a character
console.log(word.charCodeAt(4))
console.log(word.toLowerCase())

//search for a character that is present in a string
console.log(word.includes("DUCATI"))