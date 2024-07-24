// Activity 1

// Task 1
function throwError() {
    try {
        throw new Error("This is an intentional error.");
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

throwError();

// Task 2
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

divideNumbers(10, 2); 
divideNumbers(10, 0); 

// Activity 2

// Task 3
function exampleWithFinally() {
    try {
        console.log("In try block.");
        throw new Error("An error occurred.");
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("Finally block executed.");
    }
}

exampleWithFinally();

// Activity 3

// Task 4

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

throwCustomError();

// Task 5

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationError("Input cannot be empty.");
        }
        console.log("Input is valid:", input);
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

validateInput(" "); 
validateInput("Valid Input"); 


// Activity 4

// Task 6

function randomPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Promise resolved successfully.");
        } else {
            reject(new Error("Promise rejected."));
        }
    });
}

randomPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error("Caught an error:", error.message));


// Task 7

async function asyncFunctionWithErrorHandling() {
    try {
        const message = await randomPromise();
        console.log(message);
    } catch (error) {
        console.error("Caught an error in async function:", error.message);
    }
}

asyncFunctionWithErrorHandling();

// Activity 5

// Task 8

function fetchData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("Fetch error:", error.message));
}

fetchData("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchData("https://invalid-url"); // Invalid URL


// Task 9

async function fetchDataWithAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchDataWithAsync("https://jsonplaceholder.typicode.com/posts/1"); // Valid URL
fetchDataWithAsync("https://invalid-url"); // Invalid URL


