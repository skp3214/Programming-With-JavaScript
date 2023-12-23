function getData(dataid, getNextData) {
    setTimeout(() => {
        console.log("data", dataid);
        if (getNextData) {
            getNextData();
        }

    }, 2000);
}
// call back hell 
getData(1, () => {
    
    getData(2, () => {
        getData(3,()=>{
            getData(4)
        });
    })
});


