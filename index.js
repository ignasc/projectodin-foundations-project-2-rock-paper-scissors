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

function getHumanInput(){
    let choice = parseInt(prompt("1 - Rock\n2 - Paper\n3 - Scissors"))
    let result

    console.log("integer: " + choice)
    
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
        }
    } else {
        console.log("Incorrect option chosen, reload page and try again.")
        return -1
    }
    return result

}

console.log(getComputerInput())
console.log("Your choice: " + getHumanInput())
