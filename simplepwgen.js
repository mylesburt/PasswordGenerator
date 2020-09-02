
function generatePassword () {

// variables.

    var chars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&'()*+,-./`;
    var passwordLength = 16;
    var password = "";

// loop and new string creation.

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }

// print.

    document.getElementById("password").value = password
}

