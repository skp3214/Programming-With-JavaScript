// async await >> Promises chain >> callback hell
// Async-Await: async function always return a promise.
// await pauses the execution of its surrounding asyn function until the promise is settled.


function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data")
             resolve("hello")
        },4000)
    })
}

async function hello(){
    await asyncFunc();
    await asyncFunc();
}
hello();