var counter=3
function counterExample(){
    console.log(counter)
    counter=counter-1;
    if(counter==0) return 1
    counterExample()            // function is calling itself: Recursion
}

counterExample()