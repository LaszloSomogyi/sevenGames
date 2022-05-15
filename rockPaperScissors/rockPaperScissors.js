const computerChoiceDisplay = window.document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');
const possibleChoices = document.getElementsByClassName("button");
//const possibleChoices = document.querySelectorAll('.button');
let userChoice;
let computerChoice;
let userPoints = 0;
let computerPoints = 0;
let computerGainingAlertCounter = 0;
let userGainingAlertCounter = 0;
const computerPointsDisplay = document.getElementById('computer-points');
const userPointsDisplay = document.getElementById('user-points');

for (let i = 0; i < possibleChoices.length; i++) {
    computerPointsDisplay.innerHTML = computerPoints;
    userPointsDisplay.innerHTML = userPoints;
    possibleChoices[i].addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = '';
        result.innerHTML = '';
        setTimeout(function() {
        generateComputerChoice()
        }, 500);
        setTimeout(function() {
            getResult()
        }, 1000)
        setTimeout(function() {
            computerPointsDisplay.innerHTML = computerPoints;
            userPointsDisplay.innerHTML = userPoints;
            console.log(computerPoints);
        }, 1000)
        setTimeout(function() {
            if(computerPoints == 5 && computerGainingAlertCounter < 1 && userPoints < 5) {
                alert("Poor you, the machine is beating you...");
                computerGainingAlertCounter++;
            }
        }, 1000)
        setTimeout(function() {
            if(userPoints == 5 && userGainingAlertCounter < 1 && computerPoints < 5) {
                alert("You ROCK! Keep going!");
                userGainingAlertCounter++;
            }
        }, 1000)
        if(computerPoints == 7 || userPoints == 7) {
            computerPoints = 0;
            userPoints = 0;
            alert("Time to restart!");
        }
    })
}

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    switch(randomNumber) {
        case 1: computerChoice = 'rock';
        break;
        case 2: computerChoice = 'scissors';
        break;
        case 3: computerChoice = 'paper';
        break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    switch(userChoice) {
        case 'rock': {
            switch(computerChoice) {
                case 'rock': result.innerHTML = "Draw";
                break;
                case 'scissors': result.innerHTML = "You win...";
                userPoints++;
                break;
                case 'paper': result.innerHTML = "You lose...";
                computerPoints++;
                break;
            }
        }
        break;
        case 'scissors': {
            switch(computerChoice) {
                case 'rock': result.innerHTML = "You lose...";
                computerPoints++;
                break;
                case 'scissors': result.innerHTML = "Draw";
                break;
                case 'paper': result.innerHTML = "You win...";
                userPoints++;
                break;
            }
        }
        break;
        case 'paper': {
            switch(computerChoice) {
                case 'rock': result.innerHTML = "You win...";
                userPoints++;
                break;
                case 'scissors': result.innerHTML = "You lose...";
                computerPoints++;
                break;
                case 'paper': result.innerHTML = "Draw"
                break;
            }
        }
        break;
    }
}