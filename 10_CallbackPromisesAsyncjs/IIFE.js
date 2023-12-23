// IIFE: Immediately INVOKED FUNCTION   eXPRESSION

(function (){
    var privateVariable = "I am a private variable";
    console.log(privateVariable)
})();

function hello(){
    setTimeout(()=>{
       console.log("Hello")
    },2000)
}

(async function(){
   await hello()
})();