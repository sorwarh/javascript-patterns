import singletonCart from './singleton-class.js';


singletonCart.addItemToCart([{
    "sku": "asasas",
    "price": "12.75",
    "currency": "GBP"
}]);

console.log(singletonCart.getCartItems());
singletonCart.addItemToCart([{
    "sku": "asasas",
    "price": "12.75",
    "currency": "GBP"
}]);

console.log(singletonCart.getCartItems());
singletonCart.addItemToCart([{
    "sku": "asasas",
    "price": "12.75",
    "currency": "GBP"
}]);

console.log(singletonCart.getCartItems());