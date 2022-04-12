const choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0

function computerPlay() {
    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose: Rock, Paper or Scissors").toLowerCase()
    computerSelection = computerPlay().toLowerCase()
    if (playerSelection === computerSelection) {
        console.log('Its a Draw')
        return "Draw"
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log('Computer Wins')
        computerScore++
        return "Lost"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log('Player Wins')
        playerScore++
        return "Won"
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
    if (playerScore > computerScore) {
        console.log("you won the game")
    } else if (computerScore > playerScore) {
        console.log('you lost the game')
    }
}

game()





