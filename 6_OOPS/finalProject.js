// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (const dish of dishData) {
    let finalPrice;

    if (taxBoolean === true) {
      finalPrice = parseFloat((dish.price * tax).toFixed(2));
    } else if (taxBoolean === false) {
      finalPrice = parseFloat(dish.price.toFixed(2));
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    console.log("Dish: " + dish.name + " Price: $" + finalPrice.toFixed(2));
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  // Step 9
  getPrices(taxBoolean);

  // Step 10
  if (typeof guests === 'number' && guests > 0 && guests < 30) {
    // Step 11
    let discount = 0;

    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }

    console.log('Discount is: $' + discount);
  } else {
    // Step 12
    console.log('The second argument must be a number between 0 and 30');
  }
}

// Examples of function invocation
getDiscount(true, 2);
getDiscount(false, 10);
