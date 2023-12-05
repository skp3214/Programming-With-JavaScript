/** 
 * A higher-order function is a function that has either one or both of the following characteristics:
 *    -> It accepts other functions as arguments.
 *    -> it return fucntions when invoked.
 */
// If you look closely First-class and high order function both are different.

function addTwoNumber(a,b){
    console.log(a()+b())
}

function number1(){
     return 5
}

function number2(){
     return 7
}

addTwoNumber(number1,number2)  // accepting other function as arguments.