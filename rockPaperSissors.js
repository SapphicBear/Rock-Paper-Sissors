// Rock paper sissors program reworked with UI!
// 
// Variables
// 
// DOM variables
const gameArea = document.querySelector(".gameArea");
const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const sissors = document.querySelector(".sissors");

const para = document.createElement("p");
const divComputer = document.createElement("div");
divComputer.className = "div-computer";
const roundArea = document.createElement("div");
roundArea.className = "round-area";

const divHuman = document.createElement("div");
divHuman.className = "div-human";

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
    document.querySelector(".div-computer");
    output.appendChild(divComputer);
    switch(randomNumber) {
        case 0:
            console.log("Computer chose: Rock!");
            para.textContent = "Computer chose: Rock!";
            divComputer.appendChild(para);
            computerChoice = "rock";
            break;
        case 1: 
            console.log("Chomputer chose: Paper!");
            para.textContent = "Computer chose: Paper!";
            divComputer.appendChild(para);
            computerChoice = "paper";
            break;
        case 2: 
            console.log("Computer chose: Sissors!");
            para.textContent = "Computer chose: Sissors!";
            divComputer.appendChild(para);
            computerChoice = "sissors";
            break;
    }
}


// Round function

function playRound(humanChoice, computerChoice) {
    document.querySelector(".round-area");
    output.appendChild(roundArea);
        switch(true) {
            case humanChoice === "rock":
            if (computerChoice === "sissors") {
                roundOutputWin("Rock", "Sissors");
            } else if (computerChoice === "paper") {
                roundOutputLose("Rock", "Paper");
            } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
            break;

            case humanChoice === "paper":
                if (computerChoice === "rock") {
                    roundOutputWin("Paper", "Rock");
                } else if (computerChoice === "sissors") {
                    roundOutputLose("Paper", "Sissors");
                } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
                break;

            case humanChoice === "sissors":
                if (computerChoice === "paper") {
                    console.log("Sissors beats paper! You win! One point to team Human!");
                    roundOutputWin("Sissors", "Paper");
                } else if (computerChoice === "rock") {
                    roundOutputLose("Sissors", "Rock");
                } else {
                console.log("The round is tied! Both get a point!");
                ++computerScore;
                ++humanScore;
            }
                break;
        }
        console.log(`Current score: Human: ${humanScore}, Computer: ${computerScore}`);
        }


function roundOutputWin(humanChoice, computerChoice) {
    document.querySelector(".round-area");
    document.querySelector("p");
    para.textContent = `${humanChoice} beats ${computerChoice}! You win! 1 point to the Human!`;
    roundArea.appendChild(para);
    humanScore++;
}
function roundOutputLose(humanChoice, computerChoice) {
    document.querySelector(".round-area");
    document.querySelector("p");
    para.textContent = `${computerChoice} beats ${humanChoice}! You lose! 1 point to the Computer!`;
    roundArea.appendChild(para);
    computerScore++;
}

// Running area:


function createPara(string) {
    output.appendChild(divHuman);
    document.querySelector(".div-human");
    document.querySelector("p");
    para.textContent = `You chose ${string}`;
    divHuman.appendChild(para);
}


// Get human Choice
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        switch(button) {
            case rock:
            createPara("Rock!");
            humanChoice = "rock";
            getComputerChoice();
            playRound(humanChoice, computerChoice);
            break;
        case paper:
            console.log("paper");
            createPara("Paper!");
            getComputerChoice();
            humanChoice = "paper";
            playRound(humanChoice, computerChoice);
            break;
        case sissors:
            console.log("sissors");
            createPara("Sissors!");
            getComputerChoice();
            humanChoice = "sissors";
            playRound(humanChoice, computerChoice);
            break;
        }
    });
    
});
