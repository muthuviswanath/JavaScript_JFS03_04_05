let user = {
    name : "Shiva",
    age:24,
    isAdmin:false,
    salary : undefined,
    greet: function(){
        console.log("Hello")
    }
}

let json = JSON.stringify(user)
console.log(json)
console.log(typeof(json))


/*
While using JSON.stringify:

1. Result/Output is always a string
2. Keys and String are represented using "" 
3. Order is not guaranteed
4. undefined values and functions are ignored
*/