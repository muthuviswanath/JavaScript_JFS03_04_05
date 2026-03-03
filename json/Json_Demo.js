let data = {
    createdAt: new Date()
}

console.log(JSON.stringify(data))

let classroom = {
    room_number: 2,
    toJSON(){
        return `Room - ${this.room_number} is where Javascript Discussion is happening`
    }
}
console.log(JSON.stringify(classroom))