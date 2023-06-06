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

//Play a five round game.//
function game() {

    getComputerChoice(); //Computer throws its hand.//
    playRound(playerSelection, computerSelection); //See who wins.//
    
    //Add to winner's score.//
    if (roundResult.includes('win')) {
        return playerScore += 1;
    } else if (roundResult.includes('lose')) {
        return computerScore += 1;
    }

}

const playerSelection = 'ROCK'; //Player throws rock.//

//Create variable to go into winner check that accepts computer's throw.//
let computerSelection = getComputerChoice();

/*Create variable that receives the result of the round 
and checks the string to pass who won into an operation.*/
let roundResult = playRound(playerSelection, computerSelection);

let playerScore = 0; //Create variable to hold player's score.//
let computerScore = 0; //Create variable to hold computer's score.//

game(); //Call the function that plays a multi-round game.//
console.log(computerSelection); //Show what the computer threw.//

//Show the round's result to the user.//
console.log(playRound(playerSelection, computerSelection)); 