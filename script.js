let userAnswer = prompt("Choose rock, paper, or scissors");

let translatedUserAnswer = userAnswer.toUpperCase

console.log(translatedUserAnswer)

let machineAnswer;

let computerPlay = function() {
    let generatedNumber = randomNumber();

    if (generatedNumber == 1) {
        machineAnswer = "Rock";
    } else if (generatedNumber == 2) {
        machineAnswer = "Paper";
    } else {
        machineAnswer = "Scissors - snip snip";
    }
}

console.log(machineAnswer);

let win = "You Have Won!!!";
let lose = "You have lost :(";
let tie = "You Tied! Try again to Win!";

if (userAnswer == "ROCK" && machineAnswer == "Scissors - snip snip") {
    console.log(win);
} else if (userAnswer == "ROCK" && machineAnswer == "Paper") {
    console.log(lose);
} else if (userAnswer == "PAPER" && machineAnswer == "Rock") {
    console.log(win);
} else if (userAnswer == "PAPER" && machineAnswer == "Scissors - snip snip") {
    console.log(lose);
} else if (userAnswer == "SCISSORS" && machineAnswer == "Paper") {
    console.log(win);
} else if (userAnswer == "SCISSORS" && machineAnswer == "Rock") {
    console.log(lose);
} else {
    console.log(tie);
}

let round = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('The Computer Wins!!!')
    }
}

let randomNumber = function() {

    let generatedNumber = Math.floor(Math.random() * 3) + 1;

    console.log(generatedNumber);

}