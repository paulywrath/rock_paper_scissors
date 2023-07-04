let playerSelection; //Create variable to take player's throw.

//Create variable to go into winner check that accepts computer's throw.
let computerSelection;

let roundResult; //Create variable that receives the round result.

let playerScore = 0; //Create variable to hold player's score.
let computerScore = 0; //Create variable to hold computer's score.

const computerThrow = document.getElementById("computer-throw"); //Attach node to "computer-throw" div.
const playerThrow = document.getElementById("player-throw"); //Attach node to "player-throw" div.

const showResult = document.getElementById("show-result"); //Attach node to "show-result" div. 

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound();
  });
});

//Call the function that plays a multi-round game. game();

//The computer opponent throws “rock,” “paper,” or “scissors” randomly.
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

//See whose throw wins or if they’re equal.
function seeWhoWins(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'This round is a tie!';
    } else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        return 'You win this round!';
    } else {
        return 'You lose this round!';
    }

  }

//Play a round.
function playRound() {
    getComputerChoice(); //Computer throws its hand.
    computerSelection = getComputerChoice(); //Assign computer throw to argument.
    computerThrow.textContent = computerSelection; //Show what the computer threw.
    playerThrow.textContent = playerSelection; //Show what the player threw.
    seeWhoWins(playerSelection, computerSelection); //See who wins.
    whoWon = seeWhoWins(playerSelection, computerSelection);

    //Show the round's result to the user.
    showResult.textContent = whoWon; 

    //Assign round result to variable for following score counter.
    roundResult = whoWon; 
        
    //Style winner's throw
    playerThrow.style.cssText = 'font-weight: normal; text-decoration: none;';
    computerThrow.style.cssText = 'font-weight: normal; text-decoration: none;';
    if (roundResult.includes('win')) {
        playerThrow.style.cssText = 'color: white; font-weight: bold; text-decoration: underline;'; 
    } else if (roundResult.includes('lose')) {
        computerThrow.style.cssText = 'color: white; font-weight: bold; text-decoration: underline;'; 
    }

    //Add to winner's score.
    if (roundResult.includes('win')) {
        playerScore += 1;
    } else if (roundResult.includes('lose')) {
        computerScore += 1;
    }

    document.getElementById("score").textContent = `The score is: \nYOU: ${playerScore} \nCOMPUTER: ${computerScore}`;
}

  //Play a five round game.
function game() {

    if (playerScore > computerScore) {
        console.log('Congratulations, you won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game. Better luck next time.');
    } else {
        console.log('Kiss your sister, it\'s a tie.');
    }
}