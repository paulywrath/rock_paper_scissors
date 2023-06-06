//The computer opponent throws “rock,” “paper,” or “scissors” randomly.//
function getComputerChoice() {
    
    fist = Math.floor(Math.random() * 3);
    if (fist === 0) {
        return 'ROCK';
    } else if (fist === 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
    
}

getComputerChoice()

//See whose throw wins or if they’re equal.//
function playRound(playerSelection, computerSelection) {
    
    playerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return `Tie! You both threw ${playerSelection}.`;
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }

  }