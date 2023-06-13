let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        return "rock"
    } else if (choice <= 2) {
        return "paper";
    } else if (choice <= 3) {
        return "scissors";
    }
}

function rps(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("RPS!").toLowerCase();
    if (computerSelection === playerSelection) {
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
        return `It's a tie! You both chose ${computerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "scissors")
        || (computerSelection === "paper" && playerSelection === "rock")
        || (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore = ++computerScore
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((computerSelection === "rock" && playerSelection === "paper")
        || (computerSelection === "paper" && playerSelection === "scissors")
        || (computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore = ++playerScore
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`);
        return `Try again. Your entry, "${playerSelection}", was invalid. Please choose rock, paper, or scissors`;
    }
}
