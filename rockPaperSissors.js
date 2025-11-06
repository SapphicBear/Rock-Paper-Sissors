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

const para = document.querySelector("p");

const divComputer = document.createElement("div");
divComputer.className = "div-computer remove";
const roundArea = document.createElement("div");
roundArea.className = "round-area remove";

const divHuman = document.createElement("div");
divHuman.className = "div-human remove";

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
    const para = document.createElement("p");
    para.className = "computerChoiceP remove";
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
                roundOutputTie();
            }
            break;

            case humanChoice === "paper":
                if (computerChoice === "rock") {
                    roundOutputWin("Paper", "Rock");
                } else if (computerChoice === "sissors") {
                    roundOutputLose("Paper", "Sissors");
                } else {
                roundOutputTie();
            }
                break;

            case humanChoice === "sissors":
                if (computerChoice === "paper") {
                    roundOutputWin("Sissors", "Paper");
                } else if (computerChoice === "rock") {
                    roundOutputLose("Sissors", "Rock");
                } else {
                roundOutputTie();
            }
                break;
        }
        const para = document.createElement("p");
        para.className = "score remove";
        para.textContent = (`Current score: Human: ${humanScore}, Computer: ${computerScore}`);
        output.appendChild(para);
        if (roundNumber === roundTotal) {
            announceWinner(humanScore, computerScore);
            humanScore = 0;
            computerScore = 0;
            roundNumber = 0;
        }
        }


function roundOutputWin(humanChoice, computerChoice) {
    const para = document.createElement("p");
    para.textContent = "";
    document.querySelector(".round-area");
    para.className = "paraRoundWin remove";
    para.textContent = `${humanChoice} beats ${computerChoice}! You win! 1 point to the Human!`;
    roundArea.appendChild(para);
    humanScore++;
    roundNumber++;
}
function roundOutputLose(humanChoice, computerChoice) {
    document.querySelector(".round-area");
    const para = document.createElement("p");
    para.textContent = "";
    para.className = "paraRoundLose remove";
    para.textContent = `${computerChoice} beats ${humanChoice}! You lose! 1 point to the Computer!`;
    roundArea.appendChild(para);
    computerScore++;
    roundNumber++;
}

function roundOutputTie() {
    document.querySelector(".round-area");
    const para = document.createElement("p");
    para.textContent = "";
    document.querySelector("p");
    para.className = "paraRoundTie remove";
    para.textContent = `Round Tied! Both parties recieve 1 point!`;
    roundArea.appendChild(para);
    computerScore++;
    humanScore++;
    roundNumber++;
}

// Create String for humanChoice:

function createPara(string) {
    const para = document.createElement("p");
    output.appendChild(divHuman);
    document.querySelector(".div-human");
    document.querySelector("p");
    para.className = "divHumanPara remove";
    para.textContent = `You chose ${string}`;
    divHuman.appendChild(para);
}
// reset function 
function reset() {
    const content = document.querySelectorAll(".remove");
    if (content) {
        document.querySelectorAll(".remove").forEach(e => e.remove());
    } 
}

function announceWinner(humanScore, computerScore) {
    const div = document.createElement("div");
    div.className = "winner-box remove";
    if (humanScore > computerScore) {
        div.textContent = `You win! Your final score was: Human ${humanScore} Computer ${computerScore}!`;
    } else {
        div.textContent = `You lose! Your final score was: Human ${humanScore} Computer ${computerScore}!`;
    }
    output.appendChild(div);
}

// Get human Choice
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        reset();
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
