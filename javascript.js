// this function lets the computer generate its choice and return it
    function getComputerChoice(){
        const RandomNum = Math.random()
        if (RandomNum < 0.33){
            return "Rock";}
        else if (RandomNum < 0.66){
            return "Scissors";}
        else {return "Paper";};
    }

// this function asks the human to type his choice and returns the result
let humanChoice=""
    function getHumanChoice(){
        const Rock= document.querySelector("#Rock");
        const Paper = document.querySelector("#Paper");
        const Scissors = document.querySelector("#Scissors");
    
       Rock.addEventListener("click", () => {
        humanChoice = "Rock"
        playRound(humanChoice, getComputerChoice)
    })
       Paper.addEventListener("click", ()=> {
        humanChoice = "Paper"
        playRound(humanChoice,getComputerChoice)
    })
       Scissors.addEventListener("click", ()=> {
        humanChoice = "Scissors"
        playRound(humanChoice,getComputerChoice)
    })
    };

    let humanScore = 0;
    let computerScore = 0;

// this function is 1 round of the game, it takes the computer and human choice, trims them and puts them to uppercase so they are always comparable. Then it defines who wins at what condition via if else statements. It also prints the human and computer choice in the console(not required, just a check)
    function playRound(humanChoice,getComputerChoice){
        const human = humanChoice.trim().toUpperCase();
        const computer = getComputerChoice().trim().toUpperCase();

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
        
        scoreCard(humanScore,computerScore)
    }

// make a scorecard and show message when either score reaches 5
function scoreCard(humanScore,computerScore){
    const results= document.querySelector("#results")

    const existingScoreElements = document.querySelectorAll("#humanscore, #computerscore, #congrats, #loser, #draw");
    existingScoreElements.forEach((element) => {
        element.remove();
    });
    
    const humanScoreElement = document.createElement("p")
    humanScoreElement.id = "humanscore"
    humanScoreElement.textContent = `Human Score: ${humanScore}`
    results.appendChild(humanScoreElement);

    const computerScoreElement= document.createElement("p")
    computerScoreElement.id = "computerscore";
    computerScoreElement.textContent = `Computer Score: ${computerScore}`
    results.appendChild(computerScoreElement)


    if (humanScore>= 5){
        const congrats = document.createElement("p")
        congrats.id = "congrats"
        congrats.textContent = 'Congratulations, you win this game!'
        results.appendChild(congrats);
        resetGame();
    }
    else if (computerScore >= 5){
         const loser = document.createElement("p");
         loser.id = "loser"
         loser.textContent = "Wow you kinda suck, you lost this game.";
         results.appendChild(loser)
         resetGame();
    }
    else if (computerScore === 5 && humanScore === 5){
        const draw= document.createElement("p")
        draw.id = "draw"
        draw.textContent = "Its a draw, not great, not bad either!";
        results.appendChild(draw)
        resetGame();
    }


}
// make Reset button appear to reset scores when one score reaches 5
function resetGame(){
    const results= document.querySelector("#results")

    const resetButton= document.createElement("button")
    resetButton.textContent = "Reset Game";
    resetButton.id = "resetButton"
    results.appendChild(resetButton)

    resetButton.addEventListener("click",()=>{
        humanScore= 0
        computerScore = 0
        scoreCard(humanScore, computerScore)

        resetButton.remove();
    })
}

getHumanChoice()

