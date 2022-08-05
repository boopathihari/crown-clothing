import { createContext, useEffect, useState } from "react";

const addCartItem = ( cartItems , productToAdd ) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    
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

const removeCartItem = (cartItems,productToRemove) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    console.log(existingItem);

    if(existingItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    
    return cartItems.map((cartItem) => cartItem.id === productToRemove.id ?
         {...cartItem , quantity: cartItem.quantity - 1} 
         : cartItem);
}


const clearCartItem = (cartItems,cartItemToRemove) => cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);




export const CartContext = createContext({
    isCartOpen:false,
    setisCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    removeItemToCart : () => {},
    clearItemToCart : () => {},
    cartCount : 0,
    cartTotal : 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen , setisCartOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const[cartCount,setCartCount] = useState(0);
    const[cartTotal,setCartTotal] = useState(0);

    // To Add / Increase the quantity of the cart items
    const addItemToCart = (productToAdd) => {
        setcartItems(addCartItem(cartItems , productToAdd));
    }

    // To remove / decrease the quantity of the cart items
    const removeItemToCart = (productToRemove) => {
        setcartItems(removeCartItem(cartItems , productToRemove));
    }

    const clearItemToCart = (cartItemToRemove) => {
        setcartItems(clearCartItem(cartItems,cartItemToRemove));
    }

    // To update the Cart icon count
    useEffect( () => {
        const newCartCount = cartItems.reduce((total , cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    } , [cartItems]);

    // To update the Total Price
    useEffect( () => {
        const newCartTotal = cartItems.reduce((total , cartItem) => total + cartItem.quantity * cartItem.price , 0);
        setCartTotal(newCartTotal);
    } , [cartItems]);

    const value = {isCartOpen , setisCartOpen, addItemToCart, cartItems , cartCount, removeItemToCart, clearItemToCart , cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}