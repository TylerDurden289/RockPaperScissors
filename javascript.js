// this function lets the computer generate its choice and return it
    function getComputerChoice(){
        const RandomNum = Math.random()
        if (RandomNum < 0.33){
            return("Rock")}
        else if (RandomNum < 0.66){
            return("Scissors")}
        else {return("Paper")};
    }

// this function asks the human to type his choice and returns the result
    function getHumanChoice(){
        let userInput = prompt("Type Rock, Paper or Scissors");
        return (userInput);
    };

    let humanScore = 0;
    let computerScore = 0;

// this function is 1 round of the game, it takes the computer and human choice, trims them and puts them to uppercase so they are always comparable. Then it defines who wins at what condition via if else statements. It also prints the human and computer choice in the console(not required, just a check)
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

// This function is the actual game it calls the computer and human to make a choice 5 times and plays 1 round with every given choice. It then compares scores and says who wins.

    function playGame(){
    for (let round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection);
    }

    console.log("Human final Score:", humanScore)
    console.log("Computer final score:", computerScore)

    if (humanScore > computerScore){
        console.log("Game end, congratulations, you won!")
    }
    else if(humanScore < computerScore){
        console.log("Game end, you lost, better luck next game")}
    
    else{
        console.log("It's a draw")
    }
    }

playGame()
