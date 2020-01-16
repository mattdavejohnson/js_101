const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let humanScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function incrementHuman() {
  humanScore++;
}

function incrementComputer() {
  computerScore++;
}

function humanWins(choice, computerChoice) {
  return (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'scissors' && computerChoice === 'lizard') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'lizard' && computerChoice === 'paper')
  );
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, Computer chose ${computerChoice}`);

  if (humanWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins!');
  }
}

prompt('Welcome to rock, paper, scissors!');
prompt('First to 5 games wins!');
prompt('-------------------------------');

while (humanScore < 5 && computerScore < 5) {
  prompt('Current Score:');
  prompt(`Human: ${humanScore} Computer: ${computerScore}`);
  prompt('-------------------------------');
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if (humanWins(choice, computerChoice)) {
    incrementHuman();
  } else if (humanWins(computerChoice, choice)) {
    incrementComputer();
  }
}

if (humanScore === 5) {
  prompt('You have won 5 games! You are the champion!');
} else {
  prompt('The computer won 5 games! It is the champion!');
}
