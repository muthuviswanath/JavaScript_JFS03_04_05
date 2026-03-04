let promise = new Promise((resolve, reject)=>{

    let result = true

    if(result){
        resolve("Result as expected")
    }
    else{
        reject("Result not as expected")
    }

})