# PasswordGenerator
A random and customisable password generator, focusing on JavaScript code.

I was not able to create a password generator using display windows to collect values for a password generator.

Instead I decided to at least make a basic and working password generator instead of being dealt a did not submit for the Password Generator Wk3 Homework.

The result can be found at https://mylesburt.github.io/PasswordGenerator/

"simplepwgen.js" is the source code used for "index.html", pwgen.js was a more advanced attempt.

I've choosen to provide some pseudo coding to try and explain what I wanted to achieve. 

PSEUDO CODE

User clicks "generator" button.
Prompt or display box shows asking "Would you like to include lowercase?"
    if true, then result would be placed in an array.
    else, not sure if they clicked cancel, but it would need to lead to the next display window.
        
        This would then happen three more times for uppercase, numbers and symbols.

Then a Window prompt would appear asking for the user to enter a number value for the length of their desired password.

After this the password would be generated via the input array multilpied by the length value eg. ((lower + upper + numbers + symbols) * length) = password.

    During this process the order and amout of each value would be randomised with the constraints of the length.

The password result would then be printed into the placeholder of the text box.

If the user wishes to produce another password, the code would then go through a loop to again randomise the password result.