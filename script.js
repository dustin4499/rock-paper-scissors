//make variable to hold Math.random
//make if else statement to determine what to throw
//if var is <= 0.3 throw rock
//if var is >0.3 && var is <= 0.6 throw paper
//if var is > 0.6 && var is <= 0.9 throw scissors

function getComputerChoice(){
    let choice = Math.random();
    if(choice <= 0.3){
        choice = "rock";
        return choice;
    }else if(choice > 0.3 && choice <= 0.6){
        choice = "paper";
        return choice;
    }else{
        choice = "scissors";
        return choice;
    }
}

//promp user to give you input
//input = what the user inputs

function getHumanChoice(){
    let human = prompt("rock paper or scissors").toLowerCase();
    
    return human;
}

 //determines the winner of around and returns roundWinner

 function playRound(humanChoice, computerChoice){
    let roundWinner;
    

    if(humanChoice==="rock" && computerChoice==="scissors"){
        console.log("you win! Rock beats Scissors!");
        roundWinner="human";
        return roundWinner;
        
    }else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log("You win! Paper beats Rock!");
         roundWinner="human";
         return roundWinner;
        
    }else if(humanChoice==="scissors" && computerChoice==="paper"){
        console.log("You win! Scissors beats paper!")
         roundWinner="human";
         return roundWinner;
        
    }else if(humanChoice==="rock" && computerChoice==="rock"){
        console.log("tie!");
        return;
    }else if(humanChoice==="paper" && computerChoice==="paper"){
        console.log("tie!");
        return;
    }else if(humanChoice==="scissors" && computerChoice==="scissors"){
        console.log("tie!");
        return;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
         roundWinner="computer";
         return roundWinner;
        
        
        

    }
    

 }
 //determines a winner
 function winner(a,b){
    if(a > b){
        console.log(`You win with a score of ${a} to ${b}`);
        return;
    }else{
        console.log(`You lose with a score of ${b} to ${a}`);
        return;
    }
    
 }
//plays a game of 5 rounds tracks the score displays a winner

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
        
    let i = 0;
    while(i < 5){
        const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
       let round= playRound(humanSelection, computerSelection);
        if(round==="human"){
            humanScore++;
        }else if(round==="computer"){
            computerScore++}


        console.log(`The score is: ${humanScore} to ${computerScore}`);
        i++;

    }
    winner(humanScore,computerScore);
}

playGame();