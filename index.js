const SubmitButton = document.getElementById("SubmitButton");
const PasswordInput = document.getElementById("password");
const UsernameInput = document.getElementById("username");

SubmitButton.onclick = function(){
    if (UsernameInput.value == "ADMINACCOUNTREAL"){
        if (PasswordInput.value == "A3#8HJ24&*52YGU#!HYG#$!") {
            console.log("logged in");
        } else {
            console.log("Password now valid");
        }
    }else {
        console.log("Username Not Valid");
    }
}