function login() {

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    
    console.log(username.value);
    console.log(password.value);
    
    if (username.value != ("") && password.value != ("")) {
        if (username.value == password.value) {
    
    
    
            console.log("true");
    
        } else {
            console.log("false");
        }
    } else {
        console.log("input id or password");
    }
}