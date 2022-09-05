let getComputerChoice=Math.floor(Math.random()*3+1)
let playerChoice=prompt("Enter Rock, Paper, or Scissors")

function playRound(playerSelection, computerSelection) {
function playerSelection() {
return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase
}

function computerSelection() {
if (getComputerChoice == 1) {
    let computerSelection="Rock";
} else if (getComputerChoice == 2) {
    let computerSelection="Paper";
} else if (getComputerChoice == 3) {
    let computerSelection="Scissors";
}
}

if (playerSelection=="Rock") {
} if (computerSelection=="Rock") {
    return displayResult("Rock ties Rock! You Draw!");
   } else if (computerSelection=="Paper") {
    return displayResult("Paper beats Rock! You Lose!");
   } else if (computerSelection=="Scissors") {
    return displayResult("Rock beats Scissors! You Win!");
   }

if (playerSelection=="Paper") {
} if (computerSelection=="Paper") {
    return displayResult("Paper ties Paper! You Draw!");
   } else if (computerSelection=="Scissors") {
    return displayResult("Scissors beats Paper! You Lose!");
   } else if (computerSelection=="Rock") {
    return displayResult("Paper beats Rock! You Win!");
   }

   if (playerSelection=="Scissors") {
} if (computerSelection=="Scissors") {
    return displayResult("Scissors ties Scissors! You Draw!");
   } else if (computerSelection=="Rock") {
    return displayResult("Rock beats Scissors! You Lose!");
   } else if (computerSelection=="Paper") {
    return displayResult("Scissors beats Paper! You Win!");
   }
}