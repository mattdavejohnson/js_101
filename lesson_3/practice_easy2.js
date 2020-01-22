// Question 1: Given a string, return a new string that replaces
// every occurance of the word "important" with "urgent."

let advice =
  'Few things in life are as important as house training your pet dinosaur.';

// This will replace the first occurance
let adviceReplaced = advice.replace('important', 'urgent');

console.log(adviceReplaced);

let something =
  'Few important things in life are as important as house training your important pet dinosaur.';

// This is a way to replace all occurances
console.log(something.split('important').join('urgent'));

// Question 2: Write two distinct ways of reversing the array without
// mutating the original array. Use 'reverse' for the first solution,
// and 'sort' for the second.

let numbers = [1, 2, 3, 4, 5];

// Use 'reverse'
let reverseNumbers = numbers.slice().reverse();
console.log(reverseNumbers);

// Use 'sort'
let sortNumbers = [...numbers].sort((a, b) => b - a);
console.log(sortNumbers);

// Question 3: Given a number and an array, determine whether the number
// is included in the array.

let moreNumbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;
let number2 = 95;

console.log(moreNumbers.includes(number1));
console.log(moreNumbers.includes(number2));

// Question 4: Starting with the string show two different ways to put
// the expected "Four score and" in front of it.

let famousWords = 'seven years ago...';
console.log('Four score and ' + famousWords);

let firstWords = 'Four score and ';
console.log(firstWords.concat(famousWords));

// Question 5: Mutate the array by removing the number at index 2.

let nums = [1, 2, 3, 4, 5];

nums.splice(2, 1);

console.log(nums);

// Question 6: Create a new array that contains all the values, but
// in an un-nested format.

let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

// Using concat and the spread operator
let concatFlintstones = [].concat(...flintstones);
console.log(concatFlintstones);

// Using reduce
let reduceFlintstones = flintstones.reduce((accum, element) => {
  return accum.concat(element);
}, []);
console.log(reduceFlintstones);

// Using forEach
let eachFlintstones = [];
flintstones.forEach(element => {
  eachFlintstones = eachFlintstones.concat(element);
});
console.log(eachFlintstones);

// Question 7: Create an array from this object that contains only
// Barney's name and Barney's number.

let flintstonesNumbers = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5
};

let flintstonesBarney = Object.entries(flintstonesNumbers)
  .filter(element => {
    return element[0] === 'Barney';
  })
  .shift();
console.log(flintstonesBarney);
