let cashinhand = 1_000_000_000; //It is called as syntactic sugar
//Javascript engine ignores the underscore that is present in the value
let abillion = 1e9
console.log(cashinhand)
console.log(abillion)

let pradeeps_account_balance = 7.5e9
console.log(pradeeps_account_balance) //7500000000

let shiva_age = 1.23e6
console.log(shiva_age)//1230000

let muthu_age = 1.2e2
console.log(muthu_age)

let average = 1e-6 //0.000001
console.log(average)

let result = 1234e-2 // 1234 / 100 -> 12.34
console.log(result)

result = result.toString()
console.log(result)