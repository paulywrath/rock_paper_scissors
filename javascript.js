let playerSelection; //Create variable to take player's throw.//

//Create variable to go into winner check that accepts computer's throw.//
let computerSelection;

let roundResult; //Create variable that receives the round result.//

let playerScore = 0; //Create variable to hold player's score.//
let computerScore = 0; //Create variable to hold computer's score.//

game(); //Call the function that plays a multi-round game.//

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

    playerSelection = playerSelection.toUpperCase();

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

    //1st Round//
        //Take player's throw. playerSelection = prompt('Round 1: Rock, Paper, Scissors...', 'Type "rock," "paper," or "scissors" here!');
    getComputerChoice(); //Computer throws its hand.//
    computerSelection = getComputerChoice(); //Assign computer throw to argument.//
    console.log(computerSelection); //Show what the computer threw.//
    playRound(playerSelection, computerSelection); //See who wins.//

    //Show the round's result to the user.//
    console.log(playRound(playerSelection, computerSelection)); 

    //Assign round result to variable for following score counter.//
    roundResult = playRound(playerSelection, computerSelection); 
        
    //Add to winner's score.//
    if (roundResult.includes('win')) {
        playerScore += 1;
    } else if (roundResult.includes('lose')) {
        computerScore += 1;
    }

    console.log(`The score is \nYOU: ${playerScore} \nCOMPUTER: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Congratulations, you won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game. Better luck next time.');
    } else {
        console.log('Kiss your sister, it\'s a tie.');
    }
}