// Transform the numbers based on their position in the array.
// Double the numbers that have odd indices.

let nums = [1, 2, 3, 4, 5, 6];

function doubleOdds(array) {
  let oddsArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 1) {
      oddsArray.push(array[i] * 2);
    } else {
      oddsArray.push(array[i]);
    }
  }

  return oddsArray;
}

let newArray = doubleOdds(nums);

console.log(newArray);
