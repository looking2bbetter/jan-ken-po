let userAnswer = prompt("Choose rock, paper, or scissors");

let translatedUserAnswer = userAnswer.toUpperCase();

console.log(translatedUserAnswer);

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

computerPlay();

console.log(machineAnswer);

let win = "You Have Won!!!";
let lose = "You have lost :(";
let tie = "You Tied! Try again to Win!";

if (translatedUserAnswer == "ROCK" && machineAnswer == "Scissors - snip snip") {
    console.log(win);
} else if (translatedUserAnswer == "ROCK" && machineAnswer == "Paper") {
    console.log(lose);
} else if (translatedUserAnswer == "PAPER" && machineAnswer == "Rock") {
    console.log(win);
} else if (translatedUserAnswer == "PAPER" && machineAnswer == "Scissors - snip snip") {
    console.log(lose);
} else if (translatedUserAnswer == "SCISSORS" && machineAnswer == "Paper") {
    console.log(win);
} else if (translatedUserAnswer == "SCISSORS" && machineAnswer == "Rock") {
    console.log(lose);
} else {
    console.log(tie);
}
