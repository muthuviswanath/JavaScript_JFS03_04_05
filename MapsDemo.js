/* 
To create a new Map = new Map()
To add values - map.set(key, value)
To retrieve the value based on a key = map.get(key)
To check whether the map has a specific key = map.has(key)
To remove an element based on a key = map.delete(key)
To delete the entire content of a map = map.clear()
To find the size of the map = map.size
*/

let map = new Map()
map.set(18,"Virat Kohli")
map.set("New Delhi","India")
map.set(true, 'Boolean')
map.set(true, 'Bool')
console.log(map.get(18))
console.log(map.get(true))
let person = {
    id:12,
    name : "Shiva"
}

map.set(person,123)
console.log(map.get(person.name))
map.set(person.id, person.name)

for (let e of map){
    console.log(e)
}

let colors = new Map([
            ['R','Red'],
            ['G','Green'],
            ['B','Blue']
]
)

for (let col of colors){
    console.log(col)
}

//iterating only for the keys
for(let k of colors.keys()){
    console.log(k)
}

//iterating only for the values
for(let k of colors.values()){
    console.log(k)
}


