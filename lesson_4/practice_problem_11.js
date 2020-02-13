// Create an object that expresses the frequency with which each
// letter occurs in this string.

let statement = 'The Flintstones Rock';
let letterCount = {};

let statementArray = statement.split('');

for (let index = 0; index < statementArray.length; index++) {
  if (statementArray[index] === ' ') {
    continue;
  }

  if (letterCount.hasOwnProperty(statementArray[index])) {
    letterCount[statementArray[index]] += 1;
  } else if (!letterCount.hasOwnProperty(statementArray[index])) {
    letterCount[statementArray[index]] = 1;
  }
}

console.log(letterCount);
