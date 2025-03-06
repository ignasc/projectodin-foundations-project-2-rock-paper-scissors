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

console.log(getComputerInput())
