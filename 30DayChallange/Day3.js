// Activity 1
// Task 1
let positive = 5;
let negative = -5;
let zero = 0;
if (positive > 0) {
    console.log("Positive: " + positive)
}
else if (negative < 0) {
    console.log("Negative: " + negative)
}
else if (zero == 0) {
    console.log("Zero: " + zero)
}

// Task 2
let age = 25;
if (age >= 18) {
    console.log("You can vote")
}
else {
    console.log("You can't vote")
}

// Activity 2
// Task 3
let num1 = 2;
let num2 = 5;
let num3 = 1;
if (num1 > num2) {
    if (num1 > num3) {
        console.log("The largest number is: " + num1)
    }
    else {
        console.log("The largest number is: " + num3)
    }
}
else {
    if (num2 > num3) {
        console.log("The largest number is: " + num2)
    }
    else {
        console.log("The largest number is: " + num3)
    }
}

// Activity 3
// Task 4

let num = 5;
switch (num) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        break;
}

// Task 5
let marks = 85;
switch (marks) {
    case marks >= 90 && marks < 100:
        console.log('Grade: A')
        break;
    case marks >= 80 && marks < 90:
        console.log('Grade: B')
        break;
    case marks >= 70 && marks < 80:
        console.log('Grade: C')
        break;
    case marks >= 60 && marks < 70:
        console.log('Grade: D')
        break;
    case marks >= 50 && marks < 60:
        console.log('Grade: F')
        break;
    default:
        break;
}

// Activity 4
// Task 6
let number = 23;
number % 2 == 0 ? console.log('Even Number') : console.log('Odd Number');

// Activity 5
// Task 7
let year = 2026

if 
(
    year % 4 == 0 &&
    year % 100 != 0 ||
    year % 400 == 0
)
{
    console.log("Leap Year")
}
else
{
    console.log("Not a Leap Year")
}


