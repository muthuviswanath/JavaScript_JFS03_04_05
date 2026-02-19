// function orderConfirmation(){
//     console.log("Order Delivered Successfully! ")
// }

// console.log("Order Placed Successfully")
// setTimeout(orderConfirmation, 5000);


function fetchData(callback){
    console.log("Fetching data process started ....")
    setTimeout(()=>{
    callback("Payment Confirmation Data Received");
},3000)
}

fetchData(function(data){
    console.log(data)
});

/*
When to use callback:
    1. A specific code needs to be executed after a task
    2. To handle events
    3. To deal with async code in legacy mode

When to avoid callback:
    1. There are too many nested operations
    2. In case of async programming, use async and await and don't use callback
*/