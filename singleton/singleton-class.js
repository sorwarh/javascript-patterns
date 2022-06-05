let classInstance, cartItems = [];

//Singleton class creation example
class Cart {
    constructor() {
        if (classInstance) {
            throw new Error("You can only create one cart instance!")
        }

        this.cartItems = cartItems;
        classInstance = this;
    }

    addItemToCart(newItem) {
        return [...this.cartItems, newItem];
    }

    getCartItems() {
        return this.cartItems;
    }
}

const singletonCart = Object.freeze(new Cart());
export default singletonCart;