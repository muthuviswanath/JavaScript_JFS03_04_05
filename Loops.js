outerloop:
for(let i=1; i<=3; i++){
    innerloop:
    for(let j=1; j<=3; j++){
        if(i==2){
            break outerloop;
        }
        console.log(i,j)

    }
}