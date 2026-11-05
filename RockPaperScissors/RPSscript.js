let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let sameResult = document.getElementById("sameResult");
let computerOutput = document.getElementById("computerOutput");
let playerOutput = document.getElementById("playerOutput");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let resetButton = document.getElementById("resetButton");
let playerScore = 0;
let computerScore = 0;

function game (option) {
    let randomDraw = Math.floor(Math.random() * 3 ) + 1;

    sameResult.textContent = ""

    if (randomDraw === 1) {
        computerChoice.textContent = "Rock"
    } else if (randomDraw === 2) {
        computerChoice.textContent = "Paper"
    } else {
        computerChoice.textContent = "Scissors"
    }

    if (randomDraw === 1) {
        if (option === 1) {
            sameResult.textContent = "No points Given, DRAW!"
        } else if (option === 2) {
            playerScore += 1
        } else if (option === 3) {
            computerScore += 1
        } 
    } else if (randomDraw === 2) {
        if (option === 1) {
            computerScore += 1
        } else if (option === 2) {
            sameResult.textContent = "No points Given, DRAW!"
        } else if (option === 3) {
            playerScore += 1
        }
    } else if (randomDraw === 3) {
        if (option === 1) {
            playerScore += 1
        } else if (option === 2) {
            computerScore += 1
        } else if (option === 3) {
            sameResult.textContent = "No points Given, DRAW!"
        }
    }

    playerOutput.textContent = `You: ${playerScore}`
    computerOutput.textContent = `Computer: ${computerScore}`

}

rock.addEventListener("click", function () {
    game(1)
    playerChoice.textContent = "Rock"
});

paper.addEventListener("click", function () {
    game(2)
    playerChoice.textContent = "Paper"
});

scissors.addEventListener("click", function () {
    game(3)
    playerChoice.textContent = "Scissors"
});

resetButton.addEventListener("click", function () {
    playerScore = 0 
    computerScore = 0
    sameResult.textContent = ""
    playerChoice.textContent = "—"
    computerChoice.textContent = "—"
    playerOutput.textContent = `You: ${playerScore}`
    computerOutput.textContent = `Computer: ${computerScore}`
});