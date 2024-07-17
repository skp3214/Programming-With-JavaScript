// Activity 1
// Task 1
let number = 6
function evenNumber(number) {
    if (number % 2 == 0) {
        console.log(number + " is an even number");
    }
    else {
        console.log(number + " is an odd number");
    }
}
evenNumber(number);

// Task 2

function square(number) {
    return number * number;
}
console.log(square(5));

// Activity 2
// Task 3

function maxNum(num, num2) {
    if (num > num2) {
        return num;
    }
    else {
        return num2;
    }
}
console.log(maxNum(5, 10));

// Task 4
function stringConcatenation(str1, str2) {
    return str1 + str2;
}
console.log(stringConcatenation("Hello", "World"));

// Activity 3
// Task 5
let sumOfNum = (x, y) => {
    return x + y;
}
console.log(sumOfNum(5, 10));

// Task 6
let CharInString = (char1, str1) => {
    if (str1.includes(char1)) {
        return true;
    }
    else {
        return false;
    }
}

// Activity 4
// Task 7
let Product = (num1, num2 = 5) => {
    return num1 * num2;
}
console.log(Product(5, 10));
console.log(Product(6));

// Task 8
let greetingMessage = (name, age = 18) => {
    return `Hello ${name} you are ${age} years old.`
}
console.log(greetingMessage("John"));

// Activity 5
// Task 9
function HighOrderFunc(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

function sayHello() {
    console.log('Hello');
}

HighOrderFunc(sayHello, 3);

// Task 10
function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

const result = composeFunctions(addOne, square, 2);
console.log(result);



