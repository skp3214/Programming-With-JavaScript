// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using reduce with an arrow function to calculate the sum
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const product = numbers.reduce((accumulator, currentValue) => accumulator*currentValue, 1);

console.log("Original Array:", numbers);
console.log("Sum of Elements:", sum);
console.log("Product of elements:", product);


const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);

console.log("Original Array of Arrays:", arrays);
console.log("Flattened Array:", flattenedArray);


const values = [10, 5, 8, 20, 15];
const maxValue = values.reduce((max, value) => (value > max ? value : max), values[0]);

console.log("Original Array:", values);
console.log("Maximum Value:", maxValue);


const fruits = ['apple', 'orange', 'banana', 'apple', 'orange'];
const countOccurrences = fruits.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log("Original Array:", fruits);
console.log("Count of Occurrences:", countOccurrences);

