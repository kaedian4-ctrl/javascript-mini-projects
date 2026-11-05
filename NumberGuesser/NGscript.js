let enterGuess = document.getElementById("enterGuess");
let error = document.getElementById("error");
let attempts = document.getElementById("attempts");
let form = document.querySelector("form");
let restart = document.getElementById("restart");

let gameOver = false;
let gameStarted = false;
let numberGenerated;
let count = 0;

function generateNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

function randomNumber (event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    if (!gameStarted) {
        numberGenerated = generateNumber();
        gameStarted = true;
    }

    let guessEntered = Number(enterGuess.value);

    if (enterGuess.value === "") {
        error.textContent = "Invalid";
        return;
    }

    if (!Number.isInteger(guessEntered)) {
        error.textContent = "Not integer";
        return;
    } else if (guessEntered < 1 || guessEntered > 50) {
        error.textContent = "Enter a whole number from 1 to 50.";
        return;
    } else {
        userProcess(numberGenerated, guessEntered);
        enterGuess.value = "";
    }
}

function userProcess (numberGenerated, guessEntered) {
    count++;

    if (count >= 7) {
        gameOver = true;
    }

    if (numberGenerated === guessEntered) {
        error.textContent = "Correct!";
        attempts.textContent = `Attempts : ${count}/7`;
        gameOver = true;
    } else if (numberGenerated > guessEntered) {
        error.textContent = "Too low! Try again.";
        attempts.textContent = `Attempts : ${count}/7`;
    } else if (numberGenerated < guessEntered) {
        error.textContent = "Too high! Try again.";
        attempts.textContent = `Attempts : ${count}/7`;
    }

    if (gameOver && numberGenerated !== guessEntered) {
        error.textContent = `Game over! The number was ${numberGenerated}.`;
    }
}

function restartGame () {
    count = 0;
    gameOver = false;
    gameStarted = false;
    enterGuess.value = "";
    error.textContent = "";
    attempts.textContent = "";
}

form.addEventListener("submit", randomNumber);
restart.addEventListener("click", restartGame);
