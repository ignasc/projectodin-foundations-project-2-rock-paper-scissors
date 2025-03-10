/*
GET human input
GET computer input
DETERMINE who wins
Return win/lost message
*/

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const WIN = "win"
const LOST = "lost"
const TIE = "tie"

let computerResult = null
let humanResult = null
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
    
    computerResult = getComputerChoice()
    humanResult = getHumanChoice()
    let gameResult = ""
    
    if(humanResult == -1){
        console.log("Incorrect option chosen, please try again.")
    } else {
        gameResult = getGameResults(computerResult, humanResult)
        
        if(gameResult == WIN) {
            humanScore += 1
            console.log("You win this round.")
        }

    }
    
    console.log(humanScore)
    if(humanScore == 3){gameOver = true}

}

/*Run the game*/
playRound()
