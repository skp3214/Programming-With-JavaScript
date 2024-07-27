// Activity 1
// Task 1
function OuterFunction() {
    let outerVariable = "Hello from outer variable";
    function Innerfunction() {
        console.log(outerVariable)
    }
    return Innerfunction;
}

let innerFunction = OuterFunction();
innerFunction();

// Task 2
function createCounter() {
    let count = 0;
    function increment() {
        count++;
    }
    function getCount() {
        return count;
    }

    return {
        increment,
        getCount
    }
}

let counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

// Activity 2
// Task 3

function createUniqueIdGenerator() {
    let lastId = 0;

    return function generateUniqueId() {
        lastId++;
        return lastId;
    };
}

const generateId = createUniqueIdGenerator();
console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2

// Task 4

function createGreeter(name) {
    return function greet() {
        console.log("Hello, " + name + "!");
    };
}

const greetUser = createGreeter("Alice");
greetUser(); // Output: "Hello, Alice!"

// Activity 3
// Task 5
function createFunctions() {
    const functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(() => {
            console.log(i);
        });
    }
    return functions;
}

const myFunctions = createFunctions();
myFunctions[0](); // Output: 0
myFunctions[1](); // Output: 1
myFunctions[2](); // Output: 2

// Activity 4
// Task 6
function createItemManager() {
    const items = [];

    return {
        addItem: (item) => {
            items.push(item);
        },
        removeItem: (index) => {
            items.splice(index, 1);
        },
        listItems: () => {
            console.log(items);
        }
    };
}

const itemManager = createItemManager();
itemManager.addItem("apple");
itemManager.addItem("banana");
itemManager.listItems(); // Output: ["apple", "banana"]
itemManager.removeItem(0);
itemManager.listItems(); // Output: ["banana"]

// Activity 5
// Task 7
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
// Task 8
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(6)); 
console.log(memoizedFactorial(6)); 

