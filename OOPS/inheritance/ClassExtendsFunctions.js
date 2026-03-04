function greetings(message){
    return class{
        display(){
            console.log(`${message}`)
        }
    }
}

class JavaScriptBatch extends greetings("Welcome to the world of Javascript"){

}

js = new JavaScriptBatch();
js.display()