import { useReducer } from "react";
import { createContext } from "react";

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
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    removeItemToCart : () => {},
    clearItemToCart : () => {},
    cartCount : 0,
    cartTotal : 0
})


const INITIAL_STATE = {
    isCartOpen:false,
    cartItems:[],
    cartCount : 0,
    cartTotal : 0
}

const CART_ACTION_TYPES = {
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_IS_CART_OPEN : 'SET_IS_CART_OPEN'
}

const cartReducer = (state , action) => {
    const { type , payload } = action;
    
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }

        default:
            break;
    }
}

export const CartProvider = ({children}) => {
    const [{isCartOpen , cartItems , cartCount, cartTotal} , dispatch] = useReducer(cartReducer , INITIAL_STATE);


    const updateCartItemsReducer = (newCartItems) => {
        
        // Update cart count
        const newCartCount = newCartItems.reduce((total , cartItem) => total + cartItem.quantity , 0);

        // Update cart total
        const newCartTotal = newCartItems.reduce((total , cartItem) => total + cartItem.quantity * cartItem.price , 0);

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems : newCartItems,
                cartCount : newCartCount, 
                cartTotal : newCartTotal
            }
        })
    }

    // To Add / Increase the quantity of the cart items
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems , productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    // To remove / decrease the quantity of the cart items
    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems , productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemToCart = (cartItemToRemove) => {
        const newCartItems = clearCartItem(cartItems,cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN , payload:bool});
    }


    const value = {isCartOpen , setIsCartOpen, addItemToCart, cartItems , cartCount, removeItemToCart, clearItemToCart , cartTotal};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}