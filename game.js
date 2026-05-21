

let numbers = [2, 5, 7];
let i = 0;

while (i < numbers.length) {

    let guess = Number("Guess Number");

    if (guess === numbers[i]) {
        console.log("Correct");
    }
    else {
        console.log("Wrong");
    }

    i++;

}



let age = Number("21")

if (age <= 14) {
    console.log("child")
}
else if (age <= 19) {
    console.log("teenage")
}
else if (age <= 42) {
    console.log("adult")
}
else {
    console.log("senior citizen")
}


let username = ("admin");
let password = ("12345");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
}
else {
    console.log("Invalid Username or Password");
}


let balance = 5000;
let withdraw = 2000;

if(withdraw <= balance){
    balance = balance - withdraw
    console.log("withdraw sucessfull")
    console.log("remining balance:"+ balance)

}
else{
    console.log("insufficient balance")
}