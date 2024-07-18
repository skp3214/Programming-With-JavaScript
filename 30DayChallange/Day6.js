// Activity 1

// Task 1
let numbers=[1,2,3,4,5];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

// Task 2
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);

// Activity 2

// Task 3
numbers.push(6);
console.log(numbers);
// Task 4
numbers.pop();
console.log(numbers);
// Task 5
numbers.shift();
console.log(numbers);
// Task 6
numbers.unshift(1);
console.log(numbers);

// Activity 3

// Task 7
let doubleNumbers=numbers.map((n)=>(2*n));
console.log(doubleNumbers);
// Task 8
let evenNumber=numbers.filter((n)=>(n%2==0));
console.log(evenNumber);
// Task 9
let sum=numbers.reduce((a,b)=>(a+b));
console.log(sum);

// Activity 4

// Task 10
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
// Task 11
numbers.forEach((n)=>{
    console.log(n);
})

// Activity 5
// Task 12
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
matrix.forEach((row)=>{
    let rowValue="";
    row.forEach((col)=>{
        rowValue+=col+" ";
    })
    console.log(rowValue);
})

// Task 13
console.log(matrix[2][0])

