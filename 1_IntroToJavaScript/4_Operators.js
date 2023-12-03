// It is used to perform operation on variables.

var a = 10
var b = 5
//Addition
console.log(a + b)  //output: 15
//Subtraction
console.log(a - b)   //output: 5
//Multiplication
console.log(a * b)    //output: 50
//Division
console.log(a / b)     //output: 2
//Modulus
console.log(a % b)      //output: 0
/*Increment and Decrement*/
var c = 3;
c++;            //Post increment operator, it will return the value before incrementing
console.log("post increment : " + c);       //output: 4
c--;             //Pre increment operator, it will return the value after decrementing
console.log("pre increment : " + c);        //output: 3
/*Assignment operators*/
var x = 7;
x += 9;          //adds 9 to x (x becomes 16)
console.log("after addition : " + x);         //output: 16
x -= 6;           //subtracts 6 from x (x becomes 10)
console.log("after subtraction : " + x);       //output: 10
x *= 8;          //multiplies x by 8 (x becomes 80)
console.log("after multiplication : " + x);    //output: 80
x /= 4;          //divides x by 4 (x becomes 20)
console.log("after division : " + x);          //output: 20
x %= 12;         //gets the remainder of dividing x by 12 (x becomes 8)
console.log("after modulus : " + x);           //output: 8


/*Logical Operators: &&, || and ! */
// && (AND)
console.log(true && true) // Output: true
console.log(false && false) // Output: false
console.log(true && false) // Output: false
console.log(false && true) // Output: false
var currentTime=10;
console.log(currentTime>7 && currentTime<16) // Output: true

// || (OR)
console.log(true || true) // Output: true
console.log(false || false) // Output: false
console.log(true || false) // Output: true
console.log(false || true) // Output: true
var currentTime=10
console.log(currentTime>=7||currentTime>=16) // Output: true

// NOT (!)
console.log(!true) // Output: false
console.log(!false) // Output: true
/*Equality Operators*/
console.log(5 == 5) // Output: true
console.log(5 != 5) // Output: false
console.log('hello' === 'hello') // Output: true
console.log('world' !== 'world') // Output: false
console.log(null == undefined) // Output: true
console.log(null === undefined) // Output: false

/*Bitwise Operators*/
var num1 = 10;
var num2 = 6;
//AND
console.log(num1 & num2); // output: 2
//OR
console.log(num1 | num2); // output: 14
//NOT
console.log(~num1); // output: -11
//XOR
console.log(num1 ^ num2); // output: 12
//Left shift
console.log(num1 << 2); // output: 40
//Right Shift
console.log(num1 >> 2); // output: 2
//Unsigned Right Shift
console.log(num1 >>> 2); // output: 2

