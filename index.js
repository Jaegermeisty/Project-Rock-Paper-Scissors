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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie.`);
    return;
  } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
    humanScore++;
    return;
  } else if (humanChoice === 'Rock' && computerChoice === 'Scissor') {
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
    humanScore++;
    return;
  } else if (humanChoice === 'Scissor' && computerChoice === 'Paper') {
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
    humanScore++;
    return;
  } else {
    console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`);
    computerScore++;
    return;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);