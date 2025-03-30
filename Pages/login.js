let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("passwordicon");

eyeicon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

const users = {
    "ceisco@gmail.com": "111",
    "demo@gmail.com": "222",
    "Gokul@gmail.com":"456"
    
};

function checkLogin() {
    const username = document.getElementById("username").value;
    const pin = document.getElementById("passwordicon").value;
    const welcome = document.getElementById("user-name");

    if (users[username] && users[username] === pin) {
        console.log("Login successful!");
        
        const userName = username.split('@')[0];
        
        localStorage.setItem("username", username);
        localStorage.setItem("userNameOnly", userName); 
        
        window.location.href = 'home.html';
    } else {
        alert("Invalid Username or password");
        console.log("Invalid username or password");
    }
}



    
