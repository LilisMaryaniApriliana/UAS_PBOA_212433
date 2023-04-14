const options = document.querySelectorAll('.options button');
const result = document.querySelector('.result');

let playerChoice = "";
let computerChoice = "";
let score = [0, 0];

options.forEach(option => {
    option.addEventListener('click', function() {
        playerChoice = this.textContent.toLowerCase();
        computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        showResult(winner);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "paper" && computerChoice === "rock" ||
               playerChoice === "scissors" && computerChoice === "paper") {
        score[0]++;
        return "player";
    } else {
        score[1]++;
        return "computer";
    }
}

function showResult(winner) {
    if (winner === "tie") {
        result.textContent = "It's a tie!";
    } else if (winner === "player") {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}`;
    }
}