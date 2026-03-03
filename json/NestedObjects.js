let order = {
    orderId:101,
    customer:{
        name:"Trump",
        city:"Washington DC"
    },
    product:["Laptop", "Projector"]
}

let json_str = JSON.stringify(order)
console.log(json_str)

/*
Nested objects and arrays are automatically handled by Stringify.
*/

let classroom = { room_number:2 }
let meetings = {title:'Standup Meeting'}
classroom.meetings = meetings
meetings.classroom = classroom

console.log(classroom.meetings)
console.log(meetings.classroom)


json = JSON.stringify(meetings, ['title'])
json_1 = JSON.stringify(classroom, ['room_number'])
console.log(json)
console.log(json_1)
