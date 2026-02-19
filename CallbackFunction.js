/*
A function that is passed as an argument to another function is called as callback function
A function will be called back once the previous execution is complete
*/

/*
function callingfunction(callbackfunction){
    callbackfunction();
}
*/

function greetings(){
    console.log("The session is over")
}

function calculation(a,b,callback){
    let product = a * b;
    console.log(`Product of ${a} and ${b} is : ${product}`)
    callback();
}

calculation(10,20,greetings)