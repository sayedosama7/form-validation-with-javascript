function validate() {
    user = document.getElementById("user").value;
    email = document.getElementById("email").value;
    pass = document.getElementById("pass").value;
    confirmPass = document.getElementById("confirmPass").value;
    error = document.getElementById("error");
    // start error style 
    error.style.backgroundColor = "red";
    error.style.color = "white";
    error.style.width = "80%";
    error.style.textAlign = "center";
    error.style.padding = "10px";
    error.style.borderRadius = "5px";
    error.style.marginBottom = "10px";
    error.style.transition = "all .5s ease";
    // end error style 

    if (user == "" && email == "" && pass == "" && confirmPass == "") {
        error.innerHTML = "<i class='fa-regular fa-face-sad-tear'></i> please enter data";
        return false;
    }

    else if (user.length < 5 || user.length > 15) {
        error.innerHTML = "<i class='fa-regular fa-face-sad-tear'></i> please enter at least 5-15 character in username";
        return false;
    }
    else if (email.indexOf("@") == "-1") {
        error.innerHTML = "<i class='fa-regular fa-face-sad-tear'></i> please enter valid e-mail"
        return false
    }
    else if (pass.length < 8 ) {
        error.innerHTML = "<i class='fa-regular fa-face-sad-tear'></i> please enter at least 8 character in password";
        return false;
    }
    else if (pass != confirmPass) {
        error.innerHTML = "<i class='fa-regular fa-face-sad-tear'></i> please matched password";
        return false;
    }
}