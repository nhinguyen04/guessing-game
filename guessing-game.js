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


//rl.close();



askRange();
//askGuess();






/**
 * Compares num with global value secretNumber.
 *
 * @param {number} num The number to compare with secretNumber.
 * @returns {boolean} True if equal, false if not equal.
 */
function checkGuess (num) {
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
    rl.question("Enter a minimum: ", (minimum) => {
        rl.question("Enter a maximum: ", (maximum) => {
            console.log(`I'm thinking of a number between ${minimum} and ${maximum} ...`);

            secretNumber = randomInRange(Number(minimum), Number(maximum));
            askGuess(rl);
        });
    });
};
