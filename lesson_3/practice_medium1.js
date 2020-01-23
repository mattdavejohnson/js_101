// Question 1: Write a program that creates the following output 10
// times, with each line indented 1 space to the right of the line above.

let saying = 'The Flintstones Rock!';
for (let i = 0; i < 10; i++) {
  console.log(saying);
  saying = ' ' + saying;
}

// using repeat
let newSaying = 'The Flintstones Rock!';
for (let i = 0; i < 10; i++) {
  console.log(' '.repeat(i) + newSaying);
}

// Question 2: Return a new string that swaps the case of all the letters.

let munstersDescription = 'The Munsters are creepy and spooky.';

let munstersSwapped = '';

for (let i = 0; i < munstersDescription.length; i++) {
  if (
    munstersDescription.charAt(i) ===
    munstersDescription.charAt(i).toLowerCase()
  ) {
    munstersSwapped += munstersDescription.charAt(i).toUpperCase();
  } else if (
    munstersDescription.charAt(i) ===
    munstersDescription.charAt(i).toUpperCase()
  ) {
    munstersSwapped += munstersDescription.charAt(i).toLowerCase();
  } else {
    munstersSwapped += munstersDescription.charAt(i);
  }
}

console.log(munstersSwapped);

// Using split, map and join

let sentence = 'The Munsters are creepy and spooky.';

let newSentence = sentence
  .split('')
  .map(function(letter) {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  })
  .join('');

console.log(newSentence);

// Question 3: Fix the function so it doesn't fail when input is 0
// or a negative number.

function factors(number) {
  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor--;
  }
  return factors;
}
