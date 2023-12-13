const veggies=['onion','garlic','potato'];

veggies.forEach((veggie,index)=>{
    console.log(`${index+1}. ${veggie}`);
})

// second way to use forEach

const printItem=(veggie,index)=>{
    console.log(`${index+1}. ${veggie}`);
}

veggies.forEach(printItem)