// Add up all of the ages from the Munster family object.

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let values = Object.values(ages);

let totalAges = values.reduce(function(accumulator, value) {
  return accumulator + value;
});

console.log(totalAges);
