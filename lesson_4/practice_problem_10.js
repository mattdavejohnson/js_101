// Pick out the minimum age from the Munster family object.

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// Solution One without using built in Math
let minimumAge = 0;
let currentAge = 0;

Object.values(ages).forEach(age => {
  currentAge = age;

  if (minimumAge === 0) {
    minimumAge = age;
  }

  if (currentAge < minimumAge) {
    minimumAge = currentAge;
  }
});

console.log(minimumAge);

// Solution Two using built in Math and spread operator
let allAges = Object.values(ages);
let lowestAge = Math.min(...allAges);

console.log(lowestAge);
