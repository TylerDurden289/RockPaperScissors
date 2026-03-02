
function getComputerChoice(){
    const RandomNum = Math.random()
    if (RandomNum < 0.33){
    return("Rock")}
    else if (RandomNum < 0.66){
        return("Scissors")}
    else {return("Paper")};
    }

function getHumanChoice(){
    let userInput = prompt("Type Rock, Paper or Scissors");
    return (userInput);
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    const human = humanChoice.trim().toUpperCase();
    const computer = computerChoice.trim().toUpperCase();

    if ((human === "ROCK" && computer === "SCISSORS") || (human === "SCISSORS" && computer === "PAPER") || (human === "PAPER" && computer === "ROCK") ){
        console.log("Congrats, you win this round!");
        humanScore++

    }
    else if (human === computer){
        console.log("It's a draw, go again.")
    }
    else {
        console.log("You lose this round, better luck next time.");
        computerScore++;
    }
console.log("Human:",human);
console.log("Computer:",computer);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);