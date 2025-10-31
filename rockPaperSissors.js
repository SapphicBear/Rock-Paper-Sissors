// Rock paper sissors programm! 
// This code will randomly return "rock", "paper" or "sissors".
// Pseudocode:
// PROMPT user to choose rock paper or sissors and STORE answer in variable humanChoice.
// GET random number between 0 and 2 store number in "randomNumber".
// use that number in a switch statement and apply "rock" to 0, "paper" to 1 and "sissors" to 2 and store the output in "computerChoice". 
// 
// 
// Variables
// 

// stored choice variables
let humanChoice = "";
let computerChoice = "";

// Score variables
let computerScore = "0";
let humanScore = "0";

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



