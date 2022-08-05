import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckOutItem = ({cartItem}) => {
    const { name, imageUrl , price, quantity } = cartItem;


    const { clearItemToCart , removeItemToCart, addItemToCart } = useContext(CartContext);

    const addProductHandler = () => addItemToCart(cartItem);
    const decreaseProductHandler = () => removeItemToCart(cartItem);
    const removeProductHandler = () => clearItemToCart(cartItem);


    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
            <div className='arrow' onClick={decreaseProductHandler}>
                &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={addProductHandler}>
                &#10095;
            </div>
            </div>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={removeProductHandler}>&#10005;</span>
        </div>
    )
}

export default CheckOutItem;