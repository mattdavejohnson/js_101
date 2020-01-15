const readline = require('readline-sync');

// Build a car loan calculator

// Formula to find monthly payment
// let m = p * (j / (1 - Math.pow((1 + j),(-n))));

// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

// Get loan amount, APR and loan duration
console.log('How much is the loan amount?');
let loanAmount = readline.question();

console.log('How much is the interest rate (APR) in percent');
let apr = readline.question();

console.log('What is the loan duration in months?');
let loanDurationInMonths = readline.question();

// For monthlyInterestRate convert apr to decimal (apr / 100)
// and then divide by 12
let monthlyInterestRate = apr / 100 / 12;

// Formula to find the monthlyPayment
let monthlyPayment =
  loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

console.log(`Your monthly payment is ${monthlyPayment}`);
