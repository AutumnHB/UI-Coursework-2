var attempt = 3; 

function validate() { 
    var email = document.getElementById("user_email").value; 
    var password = document.getElementById("password").value; 
    if (email == "user@email.com" && password == "secure") {  
        window.location.href = "mainPage.html"; //why no work?
        alert("Login successful. Welcome to the site!");
        return false;
    } else { 
        attempt--; alert("Incorrect details. You have left " + attempt + " attempts. Please try again."); 
    } if (attempt == 0) { 
        document.getElementById("user_email").disabled = true; 
        document.getElementById("password").disabled = true; 
        document.getElementById("submit").disabled = true; 
    } 
    }