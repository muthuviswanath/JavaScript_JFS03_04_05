/*
Does not contain duplicate
One null value is allowed
It is not index based

To create a set : new set([iterable])
To add values: set.add(value)
To delete value: set.delete(value)
To check whether the set has a specific value: set.has(value)
To clear the set: set.clear()
To check the size: set.size
*/

let set = new Set();

let shiva = {name:"Shiva"}
let kallappa = {name:"Kallappa"}
let raghu = {name:"Raghu"}
let rohan = {name:"Rohan"}

set.add(shiva);set.add(kallappa);set.add(raghu);set.add(rohan);set.add(shiva);

console.log(set.size)
for (let names of set){
    console.log(names)
}


let fruits = new Set(["Apple", "Orange", "Mango", "Banana"])
for (let val of fruits) console.log(val)

//using forEach method for iterating the set
fruits.forEach((value) =>{console.log(value)})