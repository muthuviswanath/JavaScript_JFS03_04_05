function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve ("Fetched the data from API successfully")
        })
    }, 2000)
}

fetchData()
.then(data => console.log(data))
.catch(error => console.log(error))