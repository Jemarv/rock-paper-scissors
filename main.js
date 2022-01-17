const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
let computerScore = document.querySelector('#cscore');
let playerScore = document.querySelector('#pscore');
const restart = document.querySelector('#restart');
let message = document.querySelector('#message');
let p = document.querySelector('p');

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

let computerSelection;
let playerSelection;

computerScore.innerText = 0;
playerScore.innerText = 0;

function gameRound(computerSelection, playerSelection) {
    if (computerScore.innerText == 5) {
        p.textContent = 'The Computer wins..';
    } else if (playerScore.innerText == 5) {
        p.textContent = 'You win!';
    } else {
        computerSelection = computerPlay();
    
        if (computerSelection === playerSelection) {
            p.textContent = 'Tie';
        } else if (computerSelection === 'rock' && playerSelection === 'paper') {
            playerScore.innerText++;
            p.textContent = 'Player +1';
        } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            computerScore.innerText++;
            p.textContent = 'Computer +1';
        } else if (computerSelection === 'paper' && playerSelection === 'rock') {
            computerScore.innerText++;
            p.textContent = 'Computer +1';
        } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
            playerScore.innerText++;
            p.textContent = 'Player +1';
        } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
            playerScore.innerText++;
            p.textContent = 'Player +1';
        } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore.innerText++;
            p.textContent = 'Computer +1';
        }
    } 
}

rockBtn.addEventListener('click', () => {
    gameRound(computerSelection, 'rock');
});

paperBtn.addEventListener('click', () => {
    gameRound(computerSelection, 'paper');
});

scissorsBtn.addEventListener('click', () => {
    gameRound(computerSelection, 'scissors');
});

restart.addEventListener('click', () => {
    computerScore.innerText = 0;
    playerScore.innerText = 0;
    p.textContent = 'Best of 5, select your weapon.';
});
