let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  let computerChoice = '';
  
  if (number <= 0.333) {
    computerChoice = 'Rock';
  } else if (number > 0.333 && number <= 0.666) {
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissor';
  }

  return computerChoice;
}

function getHumanChoice() {
  answer = prompt('Choose between rock, paper, scissor');
  let humanChoice = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();

  return humanChoice;
}