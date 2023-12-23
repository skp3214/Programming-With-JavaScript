function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data")
             resolve("hello")
        },4000)
    })
}

function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2")
             resolve("hello 2")
        },4000)
    })
}

console.log("fetching data 1....")
let p1=asyncFunc();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data 2....")
    let p2=asyncFunc2();
    p2.then((res)=>{
        console.log(res);
    })
})

