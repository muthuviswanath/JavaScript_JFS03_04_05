//Syntax 1: let arr = new Array()
//Syntax 2: let arr = []
let colors = ['red','green','blue']
let fruits = new Array()
fruits[0] = 'Mango'
fruits[1] = 'Pineapple'
fruits[2] = 'Apple'
fruits[25] = 'Orange'

console.log(fruits)
console.log(colors)

let arr = [12,12.45,'Rahul',true, function(){console.log("Hello")}, {name:"Pratheek"},]
console.log(arr)
console.log(arr[4]())
console.log(arr[5].name)
console.log(arr[arr.length-1].name)
console.log(arr.at(2))

arr.push(100)
console.log(arr)

arr.pop()
console.log(arr)
console.log(arr.shift())
console.log(arr)
arr.unshift("Duster")
console.log(arr)

let arr_1 = new Array(5)
let arr_2 = [3]

arr_1[34] = "Welcome"
arr_2[10] = "Thank you"

console.log(arr_1)
console.log(arr_2)

let alpha = []
let beta = []
console.log(alpha)
console.log('0' == '')
console.log(0 == '')

/*
Create an array called music with the items Jazz and Blues
Add "Pop" to the end of the array
Replace the value in the middle with classical. You code should work with any middle value irrespective of the array length
Remove the first value in the array and display the array
Add Rap and Melody as the start elements in the array

*/

let music = ['Jazz','Blues']
console.log(music)
music.push('Pop')
console.log(music)
music[Math.floor((music.length - 1) /2)] = 'classical'
console.log(music)
music.shift()
console.log(music)
music.unshift('Rap','Melody')
console.log(music)