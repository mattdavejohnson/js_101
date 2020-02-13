// Create a function that takes an array of numbers and a number
// to multiply each array element by.

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(array, multiplier) {
  let newNumbers = [];

  for (let index = 0; index < array.length; index++) {
    newNumbers.push(array[index] * multiplier);
  }

  return newNumbers;
}

let quadNumbers = multiply(myNumbers, 4);

console.log(quadNumbers);
