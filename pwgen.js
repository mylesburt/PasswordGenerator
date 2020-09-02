

// Atempted to try and do the first prompt but didn't know how to link it to the next prompt and then record the total values from all prompts to then concatenate the results together for the end result of a password.


function promptLower(){
    var lowerPrompt = prompt("Would you like like to use lowercase letters?");
    alert (lowerPrompt);
return console.log
}


//I found a way to seperate lowercase, uppercase, numbers and symbols into their own functions that will produce a random value.

function randomLowercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol () {
    const symbols = `!"#$%&'()*+,-./`;
    return symbols[Math.floor(Math.random() *symbols.length)];
}

console.log(randomSymbol());