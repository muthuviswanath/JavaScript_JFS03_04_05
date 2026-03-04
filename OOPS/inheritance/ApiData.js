function fetchData(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (userId == 1001){
                resolve(`User ${userId} fetched successfully`)
            }
            else{
                reject(`User ${userId} not found`)
            }
        }, 3000)
    })
}

let users = [1001, 1002, 1003, 1001, 1001, 1002]

users.forEach((id)=>{
    fetchData(id)
    .then(result => console.log(`[Success]: `, result))
    .catch(error => console.log(`[Failure]: `, error))
})