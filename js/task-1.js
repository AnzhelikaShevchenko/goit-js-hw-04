function isEnoughCapacity(products, containerSize){
  let totalProducts = 0;
  const totalProductsValue = Object.values(products);
  for (let val of totalProductsValue) {
    totalProducts += val;
  }
    if ( totalProducts < containerSize) {
      console.log(true);
    } else{
      console.log(false)
    }
  
}

  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8); // true

  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12); // false

  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14); // true

  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7); // false