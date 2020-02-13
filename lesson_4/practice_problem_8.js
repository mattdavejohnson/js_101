// Write a program that uses the provided array to create an object where
// the names are the keys and the values are the positions in the array.

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];

// Solution One using a for loop
let flintstonesObject = {};

for (let index = 0; index < flintstones.length; index++) {
  flintstonesObject[flintstones[index]] = index;
}

console.log(flintstonesObject);

// Solution Two using forEach
let flintstonesObject2 = {};

flintstones.forEach(function(element, index) {
  flintstonesObject2[element] = index;
});

console.log(flintstonesObject2);
