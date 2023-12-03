function addTwoNums(){    // funcction declaration
    var a=10
    var b=20
    console.log(a+b)
}

addTwoNums();     // function calling or invokation

function subTwoNums(a,b){
    console.log(a-b)
}
subTwoNums(35,4);     // passing arguments to the function
subTwoNums(3,1);      // passing arguments to the function

function wordMatch(word, match){
    for(var i=0;i<word.length;i++){
        if (word[i]===match){
            console.log("Found at Index: "+i);
            break;
        }
        else console.log("No match Found at index: "+ i)
    }

}

wordMatch("Master","r")
