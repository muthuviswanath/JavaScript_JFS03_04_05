let now = new Date()
console.log(now)

let india_independence = new Date('1947-08-15')
console.log(india_independence)

let republic_day = new Date(1950, 1, 26, 14,10,23)
console.log(republic_day)

//Extract only the years
console.log(now.getFullYear())

//Extract only the month
console.log(now.getMonth() + 1)

//Extract the day
console.log(now.getDay())

//Extract the date
console.log(now.getDate())


//Extract the Hours
console.log(now.getHours())


//Extract the minutes
console.log(now.getMinutes())


//Extract the seconds
console.log(now.getSeconds())


//Extract the date
console.log(now.getMilliseconds())

console.log(now.toLocaleDateString())
let indian_date = now.toLocaleString("en-IN")


//Convert the Date String to Date Time

let today = new Date(indian_date)
console.log(today)

//This method fails and it might succeed depending upon the browser and locale

