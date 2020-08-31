
//Functions

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