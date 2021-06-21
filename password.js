// const { rawListeners } = require("process");
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});

console.log("Welcome to the password validator tool!")

reader.question("Can you enter a new password?", function(answer){
    if (answer.length >= 10) {
        console.log('successfully created your new password');
    } else {
        console.log('your password needs to be at least 10 characters long')
    }
    reader.close()
    });
