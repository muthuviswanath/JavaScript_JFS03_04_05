/*
It is a function that is passed as an argument to another function which
gets executed af the calling function completes it execution
*/

/*function callingfunction(callbackfunction){
    //statements
    callbackfunction()
    }

function callbackfunction(){
}

callingfunction(callbackfunction)
*/

function getUserData(apifunction){
    console.log("Performing other tasks...")
    setTimeout(()=>{
        let user = {name: "Pradeep", age: 23};
        apifunction(user)
    }, 2000)
}
function userdata(user){
    console.log("UserData",user)
}
getUserData(userdata)

