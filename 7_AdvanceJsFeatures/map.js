const num=[10,20,30,40,50,60,70]

const single=num.map((a)=>a/10)
console.log(single);

const square=num.map((a)=>a*a)
console.log(square);

// Sample array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using map with an arrow function that takes element and index
const squaredAndIndexed = numbers.map((element, index) => {
  return {
    original: element,
    squared: element * element,
    index: index
  };
});

console.log("Original Array:", numbers);
console.log("Squared and Indexed Elements:", squaredAndIndexed);
console.log("Squared and Indexed Elements:", squaredAndIndexed[0]);
console.log("Squared and Indexed Elements:", squaredAndIndexed[0]['original']);



