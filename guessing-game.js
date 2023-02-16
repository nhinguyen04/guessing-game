// import readline
const readline = require("node:readline");
// create readline interface
function readlineInterface () {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return rl;
};


/**
 * MAIN
 */
askRange();

let numAttempts = 5;






/**
 * Compares num with global value secretNumber.
 *
 * @param {number} num The number to compare with secretNumber.
 * @returns {boolean} True if equal, false if not equal.
 */
function checkGuess (num) {
    if (numAttempts > 0) {
        // decrement attempts
        numAttempts -= 1;

        // if num > secretNumber, print 'too high' and return false
        if (num > secretNumber) {
            console.log("Too high.");
            //askGuess();
            return false;
        }
        // if num < secretNumber, print 'too low' and return false
        else if (num < secretNumber) {
            console.log("Too low.");
            //askGuess();
            return false;
        }
        // if num = seretNumber, print 'Correct!' and return true
        else {
            console.log("Correct!");
            return true;
        }
    }

    console.log("You Lose");
    return true;
};

/**
 * Call readline to ask for a user guess. Close readline when user guesses correctly.
 */
function askGuess (rl) {
    rl.question("Enter a guess: ", (answer) => {
        // call checkGuess to check user's answer
        let guessIsCorrect = checkGuess(Number(answer));

        // close readline if user guesses corectly
        if (guessIsCorrect) {
            rl.close();
        } else {
            askGuess(rl);
        }
    });
};

/**
 * Returns a random integer specified two values.
 *
 * @param {number} min The mininum to randomize.
 * @param {number} max The maximum to randomize.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    max += 1; //to make the random number inclusive of max
    return Math.floor(Math.random() * (max - min) + min);
};

function askRange () {
    const rl = readlineInterface();

    // ask user to enter min
    let minimum = 0;
    let maximum = 0;
    askMin();

    function askMin() {
        // ask user input minimum
        rl.question("Enter a minimum: ", handleMinimumInput);
    }

    function handleMinimumInput(min) {
        minimum = Number(min);

        // check for valid user input and continue, else call askMin again
        if (Number.isInteger(minimum)) {
            rl.question("Enter a maximum: ", handleMaximumInput);
        } else {
            console.log("Not a valid number.");
            askMin();
        }
    }

    function handleMaximumInput(max) {
        maximum = Number(max);

        // check valid user input and continue, else call handleMinimumInput again
        if (Number.isInteger(maximum)) {
            console.log(`I'm thinking of a number between ${minimum} and ${maximum} ...`);

            secretNumber = randomInRange(minimum, maximum);
            askGuess(rl);
        } else {
            console.log("Not a valid number.");
            handleMinimumInput(minimum);
        }
    }

};
