// Question 4: Using the following string, create a new string that contains
// all lowercase letters except for the first character, which should be
// capitalized.

let munstersDescription = 'the Munsters are CREEPY and Spooky.';

let munstersFinal =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(munstersFinal);

// Question 6: Add entries for Marilyn and Spot to the object.

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages);

// Question 7: Determine whether the name Dino appears in the strings below.
// Check each string seperately.

let str1 =
  'Few things in life are as important as house training your pet dinosaur.';

let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

const word = 'Dino';

console.log(str1.includes(word));
console.log(str2.includes(word));

// Question 10: Return a new version of this sentence that ends just before
// the word house.

let advice =
  'Few things in life are as important as house training your pet dinosaur.';

console.log(advice.slice(0, advice.indexOf('house')));
