let values = ["No","Sentence","ends","with","because","because","because","is","a","conjunction"]

// create a function called unique that takes this array as input and returns only the unique elements

function unique(arr){
let myval = new Set(arr)
myval.forEach((val) => {console.log(val)})
}
unique(values)


// Task 2: 
/*
Given a list of arrays with anagrams, filter only the words that are not anagrams 


output:
[nap, ear, teacher]
*/

function cleanArr(arr){
let map = new Map();
for (let words of arr){
    let sorted = words.toLowerCase().split('').sort().join('')
    map.set(sorted, words)

}

return Array.from(map.values())
}
let ana = ['nap', 'pan', 'ear', 'ARE', 'ERA', 'teacher', 'cheater', 'hectare']
console.log(cleanArr(ana))