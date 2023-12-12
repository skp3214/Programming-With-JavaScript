/**
 * A useful a ES6 feature allows me to set a default parameter inside a function
 * defination First
 */


function DefaultParam(number1=4,number2=3){
    console.log("The sum is "+ (number1+number2));
}

DefaultParam()  // The sum is 7.
DefaultParam(5,6) // The sum is 11.