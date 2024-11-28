function age(){
var name = prompt("What is your name?");
var age = prompt("What is your Age? ");

// Uses user input to print out information
println("Hello " + name + "!");
if(age > 18){
    print("you are an adult!")
}else{
    print("you are a minor1")
};
}
function evenOrOdd(){
var num = prompt("enter a number please: ")
if(num%2 == 0){
    print(num + " is even!")
}else{
    print(num + "is odd!")
}
}