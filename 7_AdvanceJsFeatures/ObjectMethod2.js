var clothingItem={
    price:50,
    color:'beige',
    material:'cotton',
    season:'autumn'
}

for(var key of Object.keys(clothingItem)){
    console.log(`${key}: ${clothingItem[key]}`);
}