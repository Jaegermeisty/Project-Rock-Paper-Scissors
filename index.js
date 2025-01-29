function getComputerChoice() {
  let number = Math.random();
  let computerChoice = '';
  
  if (number <= 0.333) {
    computerChoice = 'Rock';
  } else if (number > 0.333 && number <= 0.666) {
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissors';
  }

  return computerChoice;
}

function getHumanChoice() {
  answer = prompt('Choose between Rock, Paper, Scissors');
  let humanChoice = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie.`);
      return;
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
      console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
      humanScore++;
      return;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
      console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
      humanScore++;
      return;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
      console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`);
      humanScore++;
      return;
    } else {
      console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`);
      computerScore++;
      return;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`);
}

playGame();