import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {ShoppingIcon,CartIconContainer,ItemCount} from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen , setisCartOpen , cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => setisCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;