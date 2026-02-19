//Classic Loop
for(let i=1; i<=5; i++){
    console.log(i)
}

//Loop through an array
let colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange","Red"]
for(let i=0; i<colors.length; i++){
    console.log(colors[i])
}

//for... of

//for(int s : arr){
// }
for(let col of colors){
    console.log(col)
}

//for in loop
//Used for addressing the properties of the object

let user = {
    name: "Muthu",
    role: "Trainer",
    experience: 21
};

for(let props in user){
    console.log(`${props} : ${user[props]}`);
}