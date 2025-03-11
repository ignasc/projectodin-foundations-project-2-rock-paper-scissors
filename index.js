/*
GET human input
GET computer input
DETERMINE who wins
Return win/lost message
*/

const ROCK = "Rock"
const PAPER = "Paper"
const SCISSORS = "Scissors"
const WIN = "Win"
const LOST = "Lost"
const TIE = "Tie"

let computerChoice = null
let humanChoice = null
let computerScore = 0
let humanScore = 0
let gameOver = false
let gameMessage = ""

function getComputerChoice(){
    /*function that generates a choice for computer with rock paper or scissors*/
    let choice = Math.random()
    let result = ""
    if( choice <= 0.33){
        result = ROCK
    } else if (choice > 0.66){
        result = SCISSORS
    } else {
        result = PAPER
    }
    return result
}

function getHumanChoice(){
    /*function that lets player select the choice for rock paper or scissors*/
    let choice = parseInt(prompt("1 - Rock\n2 - Paper\n3 - Scissors"))
    let result
    
    if(choice > 0 && choice < 4){
        switch(parseInt(choice)){
            case 1:
                result = ROCK
                break;
            case 2:
                result = PAPER
                break;
            case 3:
                result = SCISSORS
                break;
            default:
                result = -1
                break;
        }
    }

    return result

}

function getGameResults(computerChoice, playerChoice){
    /*function that returns the result of the game*/
    switch(computerChoice){
        case ROCK:
            if(playerChoice == SCISSORS){
                return LOST
            } else if(playerChoice == PAPER){
                return WIN
            } else {
                return TIE
            }
        case PAPER:
            if(playerChoice == ROCK){
                return LOST
            } else if(playerChoice == SCISSORS){
                return WIN
            } else {
                return TIE
            }
        case SCISSORS:
            if(playerChoice == PAPER){
                return LOST
            } else if(playerChoice == ROCK){
                return WIN
            } else {
                return TIE
            }
    }

}

function playRound(){
    /*function that runs a single game game*/
    
    computerChoice = getComputerChoice()
    humanChoice = getHumanChoice()
    let gameResult = ""
    
    if(humanChoice == -1){
        console.log("Incorrect option chosen, please try again.")
    } else {
        gameResult = getGameResults(computerChoice, humanChoice)
        
        if(gameResult == WIN) {
        }
        
        switch (gameResult) {
            case WIN:
                humanScore += 1
                console.log("You win this round! " + humanChoice + " beats " + computerChoice + ".")
                break;
            case LOST:
                computerScore += 1
                console.log("You lost this round! " + humanChoice + " doesn't beat " + computerChoice + ".")
                break;
            case TIE:
                console.log("It's a tie! You both picked " + humanChoice + ".")
                break;
            default:
                break;
        }

    }

}

function playGame(){
    humanScore = 0
    computerScore = 0
    let numberOfRounds = 5

    while(numberOfRounds != 0){
        playRound()
        numberOfRounds -= 1
    }

    console.log("Game is over. Final Score:")
    console.log("Score:\nYou: " + humanScore + "\nComputer: " + computerScore)

    if(humanScore > computerScore){
        console.log("You won the game!")
    } else if(humanScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It is a tie!")
    }

}
/*Run the game*/
playGame()
