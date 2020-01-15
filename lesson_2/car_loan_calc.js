// Build a car loan calculator

// Formula to find monthly payment
// let m = p * (j / (1 - Math.pow((1 + j),(-n))));

// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months
const readline = require('readline-sync');

function invalidNumber(number) {
  return (
    number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

console.log('Welcome to Car Loan Calculator');
console.log('-------------------------------');

// Get loan amount
console.log('How much is the loan amount?');
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  console.log('Please enter a positive number');
  loanAmount = readline.question();
}

// Get APR
console.log(
  'How much is the interest rate (APR) in percent?\nExample: 5 for 5% or 3.5 for 3.5%'
);
let apr = readline.question();

while (invalidNumber(apr)) {
  console.log('Please enter a positive number');
  apr = readline.question();
}

// Get loan duration
console.log('What is the loan duration in months?');
let loanDurationInMonths = readline.question();

while (invalidNumber(loanDurationInMonths)) {
  console.log('Please enter a positive number');
  loanDurationInMonths = readline.question();
}

// For monthlyInterestRate convert apr to decimal (apr / 100)
// and then divide by 12
let monthlyInterestRate = Number(apr) / 100 / 12;

// Formula to find the monthlyPayment
let monthlyPayment =
  Number(loanAmount) *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -Number(loanDurationInMonths))));

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
