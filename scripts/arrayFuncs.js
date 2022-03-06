// Map Filter Reduce

const numbers = [1, 2, 3, 4, 5];

// Map applies to each one of the elements of an array
// It creates a new array from an existing one
const quadrupled = numbers.map(num => num * 4);
console.log(quadrupled);

// Filter applies a conditional statement to each element of an array
// If it's true, the element is added to a new array
const evenOnly = numbers.filter(num => num % 2 == 0);
console.log(evenOnly);

// Reduce reduces an array down to only one value
// It needs a reducer function
const sumNum = numbers.reduce((result, num) => result + num);
console.log(sumNum);