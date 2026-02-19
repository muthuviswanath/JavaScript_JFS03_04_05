function displayResult(result){
    console.log(`Result: ${result}`)
}

function findPowers(base, exponent, callback){
    let result = 1
    for(let i=1; i<= exponent; i++){
        result *= base;
    }
    callback(result);
}

findPowers(2,7,displayResult);