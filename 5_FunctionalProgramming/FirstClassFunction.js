/** It is often said that function in JavaScript are "first-class citizens". What  does that mean
 * It means that a function in javaScript is just another value that we can:
 *    -> pass to other function.
 *    -> save in a variable.
 *    -> return from other functions.
 * In other words, a function in JavaScript is just a value- from this vantage point, almost no different then a string or a number.
 * 
 */

function addTwoNumber(a,b){
    console.log(a+b)
}

function number1(){
     return 5
}

function number2(){
     return 7
}

addTwoNumber(number1(),number2()) // it will print 12 because the first argument of addTwoNumber is 5 and second is 7.
// above was demonstration that function can be passed as variable.

