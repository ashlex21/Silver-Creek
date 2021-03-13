export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id);

        if(existingCartItem) {
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
                );
        }

        //Let's use else here
      
            return [...cartItems, {...cartItemToAdd, quantity: 1}]; //giving this base quantity of one ensures that the above block of code doesn't runs because it's bASE value obviously would be greater than 1
        
};