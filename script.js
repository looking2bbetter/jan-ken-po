// let userAnswer = prompt("Choose rock, paper, or scissors");

// let translatedUserAnswer = userAnswer.toUpperCase();

let machineAnswer;

let computerPlay = function() {

    let randomNumber = function() {

        return generatedNumber = Math.floor(Math.random() * 3) + 1;
    
    }

    let computerNumber = randomNumber();

    if (computerNumber == 1) {
        return machineAnswer = "Rock";
    } else if (computerNumber == 2) {
        return machineAnswer = "Paper";
    } else {
        return machineAnswer = "Scissors - snip snip";
    }
}

console.log(machineAnswer);

let win = "You Have Won!!!";
let lose = "You have lost :(";
let tie = "You Tied! Try again to Win!";
let winLose;
let translatedUserAnswer;

function determineUserAnswer() {
    let userAnswer = prompt("Choose rock, paper, or scissors");
    translatedUserAnswer = userAnswer.toUpperCase(); 
}

function playRound(determineUserAnswer, machineAnswer) {
    // let userAnswer = prompt("Choose rock, paper, or scissors");
    // let translatedUserAnswer = userAnswer.toUpperCase();    
    
    determineUserAnswer();
    computerPlay();

    if (translatedUserAnswer == "ROCK" && machineAnswer == "Scissors - snip snip") {
        console.log(win);
        winLose = 'win';
    } else if (translatedUserAnswer == "ROCK" && machineAnswer == "Paper") {
        console.log(lose);
        winLose = 'lose';
    } else if (translatedUserAnswer == "PAPER" && machineAnswer == "Rock") {
        console.log(win);
        winLose = 'win';
    } else if (translatedUserAnswer == "PAPER" && machineAnswer == "Scissors - snip snip") {
        console.log(lose);
        winLose = 'lose';
    } else if (translatedUserAnswer == "SCISSORS" && machineAnswer == "Paper") {
        console.log(win);
        winLose = 'win';
    } else if (translatedUserAnswer == "SCISSORS" && machineAnswer == "Rock") {
        console.log(lose);
        winLose = 'lose';
    } else {
        console.log(tie);
    }
    
    if (winLose == 'win') {
        playerScore += 1;
    } else {
        computerScore += 1;
    }
}

// playRound();

    let playerScore = 0;
    let computerScore = 0;

function game() {
    playRound(determineUserAnswer, machineAnswer);
    playRound(determineUserAnswer, machineAnswer);
    playRound(determineUserAnswer, machineAnswer);
    playRound(determineUserAnswer, machineAnswer);
    playRound(determineUserAnswer, machineAnswer);
}

game();
// console.log(playerScore);
// console.log(computerScore);
