let computerPlay = function() {
    return Math.random() * 10
}

let round = function(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('The Computer Wins!!!')
    }
}