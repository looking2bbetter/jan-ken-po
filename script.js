let computerPlay = function() {
    return Math.random() * 10
}

let round = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('The Computer Wins!!!')
    }
}

let randomMM = function(min, max) {
    let wholeRando = Math.trunc(Math.random() * 10);

    
}