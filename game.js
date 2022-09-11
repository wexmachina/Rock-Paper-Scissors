const choices = ['rock','paper','scissors'];
const winners = [];

function game() {
    for (i=1; i<=5; i++)
    playRound(i);
    findFinalResults();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = findWinner(playerSelection,computerSelection);
    winners.push(winner);
    console.log('player:',playerSelection);
    console.log('computer:',computerSelection);
    console.log('result:',winner);
    console.log('------------------------')
}

function computerChoice() {
        return choices[Math.floor(Math.random()*choices.length)]
    }

function playerChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    while (input == null) {
        input = prompt("You must choose Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
        while (check == false) {
            input = prompt('You can only choose Rock, Paper, or Scissors');
        while (input == null) {
            input = prompt("You must choose Rock, Paper, or Scissors")
        }
        input = input.toLowerCase();
        check = validateInput(input);
        }
        return input;
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function findWinner(choiceP,choiceC) {
    if (choiceP == choiceC) {
        return 'Tie';
    } else if ((choiceP == 'rock' && choiceC == 'paper') ||
        (choiceP == 'paper' && choiceC == 'scissors') ||
        (choiceP == 'scissors' && choiceC == 'rock')) {
        return 'Computer';
    } else {
        return 'Player';
    }
}
function findFinalResults() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('results:');
    console.log('player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}