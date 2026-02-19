// function functionName(param1, parma2, ....){
//      return     
//}

function test(a, b){
    return a+b
}

let result = test("Welcome",123)
console.log(result)


function test(a, b){
    return a, b
}
result = test("Welcome",123)
console.log(result)


//In the code if the method/function call is present before the method/function definition, 
//Javascript automatically recognize the method/function and while execution, it place the function
// above the function call and this is called as Hoisting
