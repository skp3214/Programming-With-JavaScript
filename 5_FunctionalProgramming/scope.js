// there is three type of varibale in javascript let, const and var.
// 1) let: it's block scope variable that means the value of a variable declared with let keyword will be limited to the block in


let color='red'

function tellColor(){
    let color='Blue'
    console.log(color)  
}
tellColor()