function greet(message){
    return class{
        wishPeople(){
            console.log(message)
        }
    }
}

class Welcome extends greet("Hello guys, welcome to the JavaScript Ocean"){

}

w = new Welcome()
w.wishPeople()
