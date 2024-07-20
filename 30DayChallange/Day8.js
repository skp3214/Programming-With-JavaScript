// Activity 1
// Task 1

let pName = "Sachin"
let age = 24

let templateString = `Hii, My Name is ${pName} and I am ${age} year's old`;
console.log(templateString);

// Task 2
let multiline = `
Hello my name is sachin prajapati,
I am 24 years old.
I am from Gujarat.
`
console.log(multiline);

// Activity 2
// Task 3
let numbers = [1, 2, 3, 4, 5, 6];
let [first, second] = numbers
console.log(first + " " + second);

// Task 4

let book = {
    name: "Harry Potter",
    author: "J.K.Rowling",
}
let { name, author } = book;
console.log(name, author);

// Activity 3
// Task 5
let newNumber = [...numbers, 7, 8, 9];
console.log(newNumber);

// Task 6

function Sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(Sum(1, 2, 3, 4, 5,6));

// Activity 4
// Task 7

function DefaultParam(num1,num2=22){
    return num1*num2;
}
console.log(DefaultParam(2,3));
console.log(DefaultParam(2));

//Activity 5
//Task 8

const apkname = 'JobApp';
const version = '1.0.0';

const app = {
  apkname,
  version,
  getInfo() {
    return `App: ${this.name}, Version: ${this.version}`;
  }
};

console.log(app);
console.log(app.getInfo());

// Task 9

function createObject(key, value) {
    return {
      [key]: value
    };
  }
  
  const dynamicObj1 = createObject('city', 'New York');
  const dynamicObj2 = createObject('country', 'USA');
  
  console.log(dynamicObj1); 
  console.log(dynamicObj2); 

  const methodName = 'greet';

const greeter = {
  [methodName]() {
    return 'Hello, World!';
  }
};

console.log(greeter.greet()); 

  
