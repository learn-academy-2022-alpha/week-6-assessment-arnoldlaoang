// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" },gi
];

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("namer", () => {
  it("take in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(namer(people)).toEqual([
      "Ford Prefect is a hitchhiker",
      "Zaphod Beeblebrox is president of the galaxy",
      "Arthur Dent is a radio employee",
    ]);
  });
});

//Good Fail
// ● namer › take in an array of objects and returns an array with a sentence about each person with their name capitalized.
//   ReferenceError: namer is not defined


// b) Create the function that makes the test pass.

// Pseudocode
// Create a function that takes in an array of objects
// Use higher order function .map to go through returned array
// Inside the .map method create a new variable calling out the placeholder parameter to itterate through object key names
// Create a new variable calling out the variable that passes through all the names and use built in method .split with a space inside empty string in method to separate into two arrays
// Create a new variable that calls out the first string at the first index which is the first name
// Create a new variable that calls out the second string at the second index which is the last name
// Call first character of the string refering the first name and use uppercase with built in method .toUppercase and use array concatination to combine with first name using .slice to start cutting out anything before the second character
// Repeat the same process above but instead passing last name
// Create a new variable to unite first and last name again
// Return variable with full name and add " is " and then add occupation key objec

const namer = (people) => {
  return people.map((person) => {
    var allname = person.name;
    var names = allname.split(" ");
    var fname = names[0];
    var lname = names[1];
    fname = fname[0].toUpperCase() + fname.slice(1);
    lname = lname[0].toUpperCase() + lname.slice(1);
    var fullname = fname + " " + lname;
    return fullname + " is " + person.occupation;
  });
};


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

describe("remainder", () => {
  it("take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(remainder(hodgepodge2)).toEqual([2, 1, -1]);
  });
});

// Good Fail
//   ● remainder › take in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// ReferenceError: remainder is not defined


// b) Create the function that makes the test pass.

// Pseudocode:
// Create a function that takes in an a mixed data array
// Use a higher order function .filter to filter through the returned array
// Inside the method parameter declare the value as a placeholder
// Go through the mixed data array by using typeof to get number values to placeholder
// Use higher order function .map to go through the new array with only number values
// Inside the method parameter declare the value modulo 3 to the placeholder to get the remainders of the numbers in the array.

const remainder = (array) => {
return array.filter(value => typeof value === 'number').map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4];
// Expected output: 99
const cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

describe("adder", () => {
  it("take in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(adder(cubeAndSum1)).toEqual(99);
    expect(adder(cubeAndSum2)).toEqual(1125);
  });
});

// Good Fail
//   ● adder › take in an array of objects and returns an array with a sentence about each person with their name capitalized.
// ReferenceError: adder is not defined


// b) Create the function that makes the test pass.

// Pseudocode:
//Create a function that takes in an array of numbers
// Use the higher order function .map to go through the returned array
// In the method use the built in method .pow to iterate on all of the numers with the exponent three times passed to placeholder
// Use the built in method .reduce to return a single value out of the sum of everything inside the arrays respectively

const adder = (array) => {
  return array.map((value) => Math.pow(value, 3)).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};