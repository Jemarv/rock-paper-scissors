const btn = document.querySelector('#button');
let computerScore = document.querySelector('#cscore');
let playerScore = document.querySelector('#pscore');
const resetBtn = document.querySelector('#resetButton');

function computerPlay() {
    min = Math.ceil(1)
    max = Math.floor(3)
    compResult = Math.floor(Math.random() * (max - min) + min);
    
    if (compResult === 1) {
        return 'rock';
    } else if (compResult === 2) {
        return 'paper';
    } else if (compResult === 3) {
        return 'scissors';
    }
}

function playerInput() {
    min = Math.ceil(1)
    max = Math.floor(3)
    compResult = Math.floor(Math.random() * (max - min) + min);
    
    if (compResult === 1) {
        return 'rock';
    } else if (compResult === 2) {
        return 'paper';
    } else if (compResult === 3) {
        return 'scissors';
    }
}

let computerSelection;
let playerSelection;

computerScore.innerText = 0;
playerScore.innerText = 0;

function gameRound(computerSelection, playerSelection) {
    if (computerScore.innerText == 5) {
        console.log('The Computer wins..');
    } else if (playerScore.innerText == 5) {
        console.log('You win!');
    } else {
        computerSelection = computerPlay();
        playerSelection = playerInput();
    
        if (computerSelection === playerSelection) {
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so there was a tie! Go again.`);
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            playerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so you win!`);
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            computerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so the Computer wins!`);
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            computerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so the Computer wins!`);
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            playerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so you win!`);
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            playerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so you win!`);
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore.innerText++;
            console.log(`The Computer chose ${computerSelection}, and you chose ${playerSelection} so the Computer wins!`);
        }
    } 
}

btn.addEventListener('click', () => {
    console.log(gameRound(computerSelection, playerSelection));
});

resetBtn.addEventListener('click', () => {
    computerScore.innerText = 0;
    playerScore.innerText = 0;
});
