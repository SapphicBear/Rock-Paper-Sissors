// Rock paper sissors program reworked with UI!
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

// Running area:
const gameArea = document.querySelector(".gameArea");
const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sissors = document.querySelector(".sissors");
const para = document.createElement("p");

function createPara(string) {
    document.querySelector("p");
    para.textContent = `You chose ${string}`;
    output.appendChild(para);
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (para) {
            para.remove();
        }
        switch(button) {
            case rock:
            createPara("Rock!");
            break;
        case paper:
            console.log("paper");
            createPara("Paper!");
            break;
        case sissors:
            console.log("sissors");
            createPara("Sissors!");
            break;
        }
    });
    
});
