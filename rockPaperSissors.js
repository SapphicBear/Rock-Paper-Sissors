// Rock paper sissors programm! 
// This code will randomly return "rock", "paper" or "sissors".
// Pseudocode:
// PROMPT user to choose rock paper or sissors and STORE answer in variable humanChoice.
// GET random number between 0 and 2 store number in "randomNumber".
// use that number in a switch statement and apply "rock" to 0, "paper" to 1 and "sissors" to 2 and store the output in "computerChoice". 
// FOR LOOP set roundNumber to 1 and run getComputerChoice, getHumanChoice and playRound for 5 rounds. Stop after 5 rounds and alert the user who the winner is.
// 
// Variables
// 

// stored choice variables
let humanChoice = "";
let computerChoice = "";

// Score variables
let computerScore = 0;
let humanScore = 0;

// Round number
let roundNumber = 0;
let roundTotal = 5;

// 
// Functions
// 
// Function for the computer's choice of "Rock, paper or sissors!"
function getComputerChoice() { 
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            console.log("Computer chose: Rock!");
            computerChoice = "rock";
            break;
        case 1: 
            console.log("Chomputer chose: Paper!");
            computerChoice = "paper";
            break;
        case 2: 
            console.log("Computer chose: Sissors!");
            computerChoice = "sissors";
            break;
    }
}
// Function to get the human choice, prompts user to give an answer between the three options!
function getHumanChoice() {
    let answer = prompt("Rock, paper or sissors?", "");
    answer = answer.toLowerCase();
    switch(answer) {
        case "rock":
            console.log("You chose: Rock!");
            humanChoice = answer;
            break;
        case "paper":
            console.log("You chose: Paper!");
            humanChoice = answer;
            break;
        case "sissors":
            console.log("You chose: Sissors!");
            humanChoice = answer;
            break;
        default:
            console.log("Not a valid response.");
            break;
    }
}

// Round function

function playRound(humanChoice, computerChoice) {
    
        switch(true) {
            case humanChoice === "rock":
            if (computerChoice === "sissors") {
                console.log("Rock beats sissors! You win! One point to team Human!");
                ++humanScore;
            } else if (computerChoice === "paper") {
                console.log("Paper beats rock! You lose! One point to team Computer!");
                ++computerScore;
            } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
            break;

            case humanChoice === "paper":
                if (computerChoice === "rock") {
                    console.log("Paper beats rock! You win! One point to team Human!");
                    ++humanScore;
                } else if (computerChoice === "sissors") {
                    console.log("Sissors beats paper! You lose! One point to team computer!");
                    ++computerScore;
                } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
                break;

            case humanChoice === "sissors":
                if (computerChoice === "rock") {
                    console.log("Rock beats sissors! You lose! One point to team Computer!");
                    ++computerScore;
                } else if (computerChoice === "paper") {
                    console.log("Sissors beats paper! You win! One point to team Human!");
                    ++humanScore;
                } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
                break;
        }
        console.log(`Current score: Human: ${humanScore}, Computer: ${computerScore}`);
        }
// Function for playing the game for 5 rounds.
function playGame() {
    for (roundNumber = 1; roundNumber != 5; roundNumber++) {
        console.log("Perparing game!");
        console.log(`Round ${roundNumber} out of ${roundTotal} begining!`);
        getHumanChoice();
        getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        alert(`Final Score! Human: ${humanScore} Computer: ${computerScore}. You win!`);
    } else if (humanScore < computerScore) {
        alert(`Final Score! Human: ${humanScore} Computer: ${computerScore}. You lose!`);
    } else {
        alert(`Final Score! Human: ${humanScore} Computer: ${computerScore}. The game is a draw!`);
    }

}


// Running area:

playGame();


