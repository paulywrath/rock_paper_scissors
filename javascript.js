let playerSelection; //Create variable to take player's throw.

//Create variable to go into winner check that accepts computer's throw.
let computerSelection;

let roundResult; //Create variable that receives the round result.

let playerScore = 0; //Create variable to hold player's score.
let computerScore = 0; //Create variable to hold computer's score.

const intro = document.getElementById("intro"); //Attach node to "intro" div.

const game = document.getElementById("game"); //Attach node to "game" div.

const playerThrow = document.getElementById("player-throw"); //Attach node to "player-throw" div.
const computerThrow = document.getElementById("computer-throw"); //Attach node to "computer-throw" div.

const showResult = document.getElementById("show-result"); //Attach node to "show-result" div. 

const score = document.getElementById("score"); //Attach node to "score" div.

// Attach node to buttons element. It is a node list of the buttons, which acts much like an array.
const buttons = document.querySelectorAll('button');

// When you click on a button, this event listener goes into action.
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id; //Assign button pressed to player selection variable.
    intro.textContent = ''; //Remove intro text when player starts the game.
    playRound(); //Play a round.
  });
});

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

// Display "game over" message when someone reaches 5 points.
function gameover() {

    if (playerScore === 5) {
        intro.textContent = '\r\nYou win the match! Unbelievable! \
You are the new Rock, Paper, Scissors world champion!';
    } else if (playerScore < 4 && computerScore === 5) {
        intro.textContent = '\r\nYou lose the match. You\'re brave but you never had a chance.';
    } else if (playerScore === 4 && computerScore === 5) {
        intro.textContent = '\r\nYou lose the match. Will you brag that you came close \
to anyone who will listen, or will you try again?';
    }
    
    if (playerScore === 5 || computerScore === 5) {
        intro.setAttribute('style', 'white-space: pre; color: white;');
        game.setAttribute('style', 'white-space: pre; color: white;');
        game.textContent = '\r\nRefresh the page to play again.';
    }
}
 
//Play a round.
function playRound() {    
        getComputerChoice(); //Computer throws its hand.
        computerSelection = getComputerChoice(); //Assign computer throw to argument.
        computerThrow.textContent = computerSelection; //Show what the computer threw.
        playerThrow.textContent = playerSelection; //Show what the player threw.
        seeWhoWins(playerSelection, computerSelection); //See who wins.
            //Assign round result to variable for following score counter.
        roundResult = seeWhoWins(playerSelection, computerSelection); 

        //Show the round's result to the user.
        showResult.textContent = roundResult; 
            
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

        //Display running score.    
        score.setAttribute('style', 'white-space: pre;');
        score.textContent = 'The score is...\r\n' 
        score.textContent += `You: ${playerScore}\r\n` 
        score.textContent += `Omniscient Fist®: ${computerScore}`;

        // Check if anyone has 5 points.
        gameover();
}