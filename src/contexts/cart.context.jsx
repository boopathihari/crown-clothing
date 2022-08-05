import { createContext, useEffect, useState } from "react";

const addCartItem = ( cartItems , productToAdd ) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    console.log('Funtion called');
    console.log(productToAdd);
    console.log(cartItems);

    
    // Check if the new product is existing in cartItems array or not 
    // If the array of object present add the item in the exisiting cartItem object and increase the quantity by 1
    if(existingItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
         {...cartItem , quantity: cartItem.quantity + 1} 
         : cartItem);
    }

    // If the Product is not exist in the cartItem object create a new product object in cartItem object
    return [...cartItems , {...productToAdd , quantity : 1}];
}

export const CartContext = createContext({
    isCartOpen:false,
    setisCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    cartCount : 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen , setisCartOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const[cartCount,setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setcartItems(addCartItem(cartItems , productToAdd));
    }

    useEffect( () => {
        const newCartCount = cartItems.reduce((total , cartItem) => total + cartItem.quantity , 0)
        setCartCount(newCartCount);
    } , [cartItems]);

    const value = {isCartOpen , setisCartOpen, addItemToCart, cartItems , cartCount}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}