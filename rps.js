const buttons = document.querySelectorAll(".btn");
const output = document.querySelector("#output");

let player = document.querySelector("#player");
let playerScore = 0;

let computer = document.querySelector("#computer");
let compScore = 0;

let whoWon = document.querySelector("#whoWon");

const resetButton = document.querySelector("#resetButton");
const playTo = document.querySelector("#playTo");

let winningScore = 1;

for (let button of buttons) {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = computerPlay();
        playGame();
    });
};

function computerPlay() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        return "rock"
    } else if (choice <= 2) {
        return "paper";
    } else if (choice <= 3) {
        return "scissors";
    }
}

function playRound() {
    if (computerSelection === playerSelection) {
        output.textContent = `It's a tie! You both chose ${computerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")) {
        compScore += 1;
        output.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "paper")
        || (computerSelection === "paper" && playerSelection === "scissors")
        || (computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore += 1;
        output.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function playGame() {
    playRound()
    player.textContent = playerScore;
    computer.textContent = compScore;
    if (playerScore === winningScore) {
        whoWon.textContent = "Congrats, you win!";
        whoWon.classList.add("winner");
        buttons.forEach(elem => {
            elem.disabled = true;
        })
    } else if (compScore === winningScore) {
        whoWon.textContent = "You lost! This time...";
        whoWon.classList.add("loser");
        buttons.forEach(elem => {
            elem.disabled = true;
        })
    }
}

playTo.addEventListener('change', function () {
    winningScore = parseInt(playTo.value)
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    playerScore = 0;
    player.textContent = playerScore;
    compScore = 0;
    computer.textContent = compScore;
    output.textContent = "Choose Your Weapon...";
    whoWon.textContent = "";
    whoWon.classList.remove('winner', 'loser');
    buttons.forEach(elem => {
        elem.disabled = false;
    });
}