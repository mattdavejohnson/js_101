// Select the key-value pairs where the value is 'Fruit'

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let fruitObj = {};
  let foodArray = Object.keys(obj);

  for (let index = 0; index < foodArray.length; index++) {
    let currentKey = foodArray[index];
    let currentValue = obj[currentKey];

    if (currentValue === 'Fruit') {
      fruitObj[currentKey] = currentValue;
    }
  }

  return fruitObj;
}

console.log(selectFruit(produce));
