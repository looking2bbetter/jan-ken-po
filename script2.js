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

let win = "You Have Won!!!";
let lose = "You have lost :(";
let tie = "You Tied! Try again to Win!";
let winLose;
let translatedUserAnswer;

// let userChoice;

function determineUserAnswer() {
    let userAnswer = prompt("Choose rock, paper, or scissors");
    translatedUserAnswer = userAnswer.toUpperCase(); 
}

let playerScore = 0;
let computerScore = 0;

function playRound(userChoice) {
    // let userAnswer = prompt("Choose rock, paper, or scissors");
    // let translatedUserAnswer = userAnswer.toUpperCase();    
    
    // determineUserAnswer();
    computerPlay();

    if (userChoice == "rock" && machineAnswer == "Scissors - snip snip") {
        console.log(win);
        winLose = 'win';
    } else if (userChoice == "rock" && machineAnswer == "Paper") {
        console.log(lose);
        winLose = 'lose';
    } else if (userChoice == "paper" && machineAnswer == "Rock") {
        console.log(win);
        winLose = 'win';
    } else if (userChoice == "paper" && machineAnswer == "Scissors - snip snip") {
        console.log(lose);
        winLose = 'lose';
    } else if (userChoice == "scissors" && machineAnswer == "Paper") {
        console.log(win);
        winLose = 'win';
    } else if (userChoice == "scissors" && machineAnswer == "Rock") {
        console.log(lose);
        winLose = 'lose';
    } else {
        console.log(tie);
        winLose = 'tie';
    }
    
    if (winLose == 'win') {
        playerScore += 1;
    } else {
        computerScore += 1;
    }
}

// playRound();

// function game() {
//     playRound(determineUserAnswer, machineAnswer);
//     playRound(determineUserAnswer, machineAnswer);
//     playRound(determineUserAnswer, machineAnswer);
//     playRound(determineUserAnswer, machineAnswer);
//     playRound(determineUserAnswer, machineAnswer);
// }

// game();

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.setAttribute('type', 'button');
paperBtn.setAttribute('type', 'button');
scissorsBtn.setAttribute('type', 'button');

rockBtn.style.height = '300px';
rockBtn.style.width = '300px';

paperBtn.style.height = '300px';
paperBtn.style.width = '300px';

scissorsBtn.style.height = '300px';
scissorsBtn.style.width = '300px';

rockBtn.style.background = "url('rock.png')";
rockBtn.style.backgroundSize = 'contain';
rockBtn.style.backgroundPosition = 'center';
rockBtn.style.backgroundRepeat = 'no-repeat';

paperBtn.style.background = "url('paper.jpeg')";
paperBtn.style.backgroundSize = 'contain';
paperBtn.style.backgroundPosition = 'center';
paperBtn.style.backgroundRepeat = 'no-repeat';

scissorsBtn.style.background = "url('scissors.png')";
scissorsBtn.style.backgroundSize = 'contain';
scissorsBtn.style.backgroundPosition = 'center';
scissorsBtn.style.backgroundRepeat = 'no-repeat';

content.appendChild(rockBtn);
content.appendChild(paperBtn);
content.appendChild(scissorsBtn);

const scoreDiv = document.createElement('div');

function whoWon(plScore, pcScore) {
    if (plScore == 5) {
        alert("The player has won!!!!!!!!");
        playerScore = 0;
        computerScore = 0;
        scoreDiv.textContent = "Your score is " + playerScore + " The computer's score is " + computerScore;
    } else if (pcScore == 5) {
        alert("The player has lost.. and the pc has won!");
        playerScore = 0;
        computerScore = 0;
        scoreDiv.textContent = "Your score is " + playerScore + " The computer's score is " + computerScore;
    } 
};

rockBtn.addEventListener('click', function() {
    playRound('rock');
    scoreDiv.textContent = "Your score is " + playerScore + " The computer's score is " + computerScore;
    whoWon(playerScore, computerScore);
});

paperBtn.addEventListener('click', function() {
    playRound('paper');
    scoreDiv.textContent = "Your score is " + playerScore + " The computer's score is " + computerScore;
    whoWon(playerScore, computerScore);
});

scissorsBtn.addEventListener('click', function() {
    playRound('scissors');
    scoreDiv.textContent = "Your score is " + playerScore + " The computer's score is " + computerScore;
    whoWon(playerScore, computerScore);
});

container.appendChild(content);

container.appendChild(scoreDiv);


