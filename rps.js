const buttons = document.querySelectorAll(".btn");
const output = document.querySelector("#output");

let player = document.querySelector("#player");
let playerScore = 0;

let computer = document.querySelector("#computer");
let compScore = 0;

let playByPlay = document.querySelector("#playByPlay");

let compImg = document.querySelector("#compImg");

let playImg = document.querySelector("#playImg");

let container = document.querySelector("#container");

const resetButton = document.querySelector("#resetButton");
resetButton.disabled = true;
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
    newContainer();
    if (computerSelection === playerSelection) {
        playByPlay.textContent = `It's a tie! You both chose ${computerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")) {
        compScore += 1;
        playByPlay.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "paper")
        || (computerSelection === "paper" && playerSelection === "scissors")
        || (computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore += 1;
        playByPlay.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

function playGame() {
    playRound()
    player.textContent = playerScore;
    computer.textContent = compScore;
    if (playerScore === winningScore) {
        output.textContent = "Congrats, you win this round!";
        output.classList.add("winner");
        player.classList.add("winner");
        computer.classList.add("loser");
        resetButton.disabled = false;
        buttons.forEach(elem => {
            elem.disabled = true;
        })
    } else if (compScore === winningScore) {
        output.textContent = "You lost! This time...";
        output.classList.add("loser");
        computer.classList.add("winner");
        player.classList.add("loser");
        resetButton.disabled = false;
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
    resetContainer();
    playerScore = 0;
    player.textContent = playerScore;
    compScore = 0;
    computer.textContent = compScore;
    output.textContent = "Choose Your Weapon...";
    output.classList.remove('winner', 'loser');
    player.classList.remove("winner", "loser")
    computer.classList.remove("winner", "loser")
    buttons.forEach(elem => {
        elem.disabled = false;
    });
    resetButton.disabled = true;
}

function newContainer() {
    playByPlay.style.margin = "10px 0px";
    container.style.backgroundColor = "rgb(243, 208, 208)";
    container.style.padding = "5px";
    container.style.width = "300px";
    container.style.margin = "20px auto";
    playImg.src = `images/${playerSelection}.png`;
    playImg.style.width = "75px";
    playImg.style.margin = "0px 20px"
    compImg.style.margin = "0px 20px"
    compImg.src = `images/${computerSelection}.png`;
    compImg.style.width = "75px";

}

function resetContainer() {
    playByPlay.textContent = "";
    playImg.src = "";
    compImg.src = "";
    container.style.margin = "0";
    container.style.width = "0"
    container.style.backgroundColor = "white";
    container.style.padding = "0";
}