/*
GET human input
GET computer input
DETERMINE who wins
Return win/lost message
*/

const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"

function getComputerInput(){
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

function getHumanInput(){
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
                return "You lost!"
            } else if(playerChoice == PAPER){
                return "You win!"
            } else {
                return "It is a tie!"
            }
        case PAPER:
            if(playerChoice == ROCK){
                return "You lost!"
            } else if(playerChoice == SCISSORS){
                return "You win!"
            } else {
                return "It is a tie!"
            }
        case SCISSORS:
            if(playerChoice == PAPER){
                return "You lost!"
            } else if(playerChoice == ROCK){
                return "You win!"
            } else {
                return "It is a tie!"
            }
    }

}

function runGame(){
    /*function that runs the game*/
    let computerResult = getComputerInput()
    let humanResult = getHumanInput()
    if(humanResult == -1){
        console.log("Incorrect option chosen, reload page and try again.")
    } else {
        console.log("You (" + humanResult + ") vs Computer (" + computerResult + ")\n\n" + getGameResults(computerResult, humanResult))
    }
}

/*Run the game*/
runGame()
