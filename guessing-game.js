// import readline
const readline = require("node:readline");
// create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 0;

function checkGuess (num) {
    // if num > secretNumber, print 'too high' and return false
    if (num > secretNumber) {
        console.log("Too high.");
        return false;
    }
    // if num < secretNumber, print 'too low' and return false
    else if (num < secretNumber) {
        console.log("Too low.");
        return false;
    }
    // if num = seretNumber, print 'Correct!' and return true
    else {
        console.log("Correct!");
        return true;
    }
};

function askGuess () {
    rl.question("Enter a guess: ", (answer) => {
        // call checkGuess to check user's answer
        checkGuess(Number(answer));
        rl.close();
    });
};
