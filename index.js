const ROCK = "rock"
const PAPER = "paper"
const SCISSORS = "scissors"
const RESTARTGAME = "restartgame";
const WIN = "win"
const LOST = "lost"
const TIE = "tie"

let computerChoice = null;
let humanChoice = null;
let computerScore = 0;
let humanScore = 0;
let gameOver = false;
let maxNumberOfWins = 5;

const gameApp = document.querySelector("#root");

const btnRock = document.createElement("button");
btnRock.setAttribute("id","btn-" + ROCK);
btnRock.setAttribute("value",ROCK);
btnRock.textContent = "Rock";

const btnPaper = document.createElement("button");
btnPaper.setAttribute("id","btn-" + PAPER);btnPaper.setAttribute("value",PAPER);
btnPaper.textContent = "Paper";

const btnScissors = document.createElement("button");
btnScissors.setAttribute("id","btn-" + SCISSORS);
btnScissors.setAttribute("value",SCISSORS);
btnScissors.textContent = "Scissors";

const btnRestart = document.createElement("button");
btnRestart.disabled = true;
btnRestart.setAttribute("id","btn-" + RESTARTGAME);
btnRestart.textContent = "Restart Game";

const gameMessage = document.createElement("div");
gameMessage.setAttribute("id", "game-message");gameMessage.textContent = "To start, just pick your choice from above.";

const scoreTable = document.createElement("div");
scoreTable.setAttribute("id", "score-table");scoreTable.textContent = "You (" + humanScore + ") : (" + computerScore + ") Computer";

gameApp.appendChild(btnRock);
gameApp.appendChild(btnPaper);
gameApp.appendChild(btnScissors);
gameApp.appendChild(btnRestart);

gameApp.appendChild(gameMessage);
gameApp.appendChild(scoreTable);

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button)=>{
    if(button.id != ("btn-" + RESTARTGAME)){
        button.addEventListener("click", (e)=>{
            
            playRound(e.target.value);
        });
    };
});

document.querySelector("#btn-" + RESTARTGAME).addEventListener("click", (e)=>{
    restartGame();
});

function getComputerChoice(){
    /*computer chooses rock paper or scissors with 33% chance to pick each one.*/
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
    /*player promted to pick rock paper or scissors using numbers 1-3*/
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

function playRound(playerChoice){
    /*function that runs a single game game*/
    
    computerChoice = getComputerChoice()
    humanChoice = playerChoice
    let gameResult = ""
    
    if(humanChoice == -1){
        console.log("Incorrect option chosen, please try again.")
    } else {
        gameResult = getGameResults(computerChoice, humanChoice)
        
        switch (gameResult) {
            case WIN:
                humanScore += 1
                updateGameMessage("You win this round! " + humanChoice + " beats " + computerChoice + ".");
                break;
            case LOST:
                computerScore += 1
                updateGameMessage("You lost this round! " + humanChoice + " doesn't beat " + computerChoice + ".");
                break;
            case TIE:
                updateGameMessage("It's a tie! You both picked " + humanChoice + ".");
                break;
            default:
                break;
        };

    };

    updateGameScore(humanScore, computerScore);
    checkEndGameConditions();
}

function updateGameMessage(message){
    gameMessage.textContent = message;
};

function updateGameScore(humanScore = 0, computerScore = 0){
    scoreTable.textContent = "You (" + humanScore + ") : (" + computerScore + ") Computer";
};

function checkEndGameConditions(){
    if(humanScore == maxNumberOfWins || computerScore == maxNumberOfWins){

        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnRestart.disabled = false;

        if(humanScore == 5){
            updateGameMessage("Game over. You win!");
        } else{
            updateGameMessage("Game over. Computer wins!");
        };
    };
};

function restartGame(){

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    humanScore = 0;
    computerScore = 0;
    updateGameScore();

};
