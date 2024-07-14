# 30 Days JavaScript Challange
[Day 1: Variables and Data Types](#day-1--variables-and-data-types)

[Day 2: Operators](#day-2--operators)
## Day 1 : Variables and Data Types

*Day 1: Task ScreenShot*

![alt text](image.png)

```js
const present=true;
console.log(present);

// type of
console.log(typeof num1);
console.log(typeof city);
console.log(typeof present);

let car={}
console.log(typeof car);

let subjects=[]
console.log(typeof subjects);

let roomNum=56;
roomNum=58;
console.log(roomNum);

const laptop="dell";
laptop="hp";
console.log(laptop);
```

*Output*

![alt text](image-1.png)

- You cannot reassign const variable.It will give error.

## Day 2 : Operators

![alt text](image-2.png)

```js
// Arithmetic operators

let a=15;
let b=6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Assignment operators
a+=b;
console.log(a);
a-=b;
console.log(a);

// Comparison operators
let c='a';
let d='b';
console.log(c>d);
console.log(c<d);
console.log(c<=d);
console.log(c>=d);
let e=5;
let f='5';
console.log(e==f);
console.log(e===f);

// Logical Operators
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(!true)
console.log(true!=false)

// Ternary Operator
let g=10;
let h=20;
console.log(g>h?g:h);
```
![alt text](image-3.png)