const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const scoreDiv = document.querySelector('.score')
const finalScoreDiv = document.querySelector('.final-score')

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

  rockBtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
  });

  paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
  });

  scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
  });


  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {

    if (humanScore >= 5 || computerScore >= 5) {
      finalScoreDiv.innerHTML = `Final Score: You: ${humanScore} | Computer: ${computerScore}. Reload the page to play again.`;
      return;
    }
    
    if (humanChoice === computerChoice) {
      scoreDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. It's a tie.`;
      return;
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
      scoreDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
      humanScore++;
      return;
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
      scoreDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
      humanScore++;
      return;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
      scoreDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. You win!`;
      humanScore++;
      return;
    } else {
      scoreDiv.innerHTML = `You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`;
      computerScore++;
      return;
    }
  }