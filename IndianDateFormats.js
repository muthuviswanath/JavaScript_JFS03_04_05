today = new Date()
let wednesday = today.toLocaleString('en-IN',{
    weekday : "short",
    year:"2-digit",
    month:"short",
    day:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    hour12:false
})
console.log(wednesday)