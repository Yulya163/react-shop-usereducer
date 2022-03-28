import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {

    const { 
        id, 
        name, 
        price, 
        quantity
    } = props;

    const { removeFromCart, incQuantity, decQuantity } = useContext(ShopContext);

    return (
        <li className="collection-item">
            <div className="item">
                {name}, {price} руб./шт
            </div>
            {/* <div className="item">
                x
            </div> */}
            <div className="item">                
                <span 
                    className="btn minus #ff5252 red accent-2"
                    onClick={() => decQuantity(id)}
                >-</span>
                <span className="quantity">{quantity}</span>
                <span 
                    className="btn plus #ff5252 red accent-2"
                    onClick={() => incQuantity(id)}
                >+</span>
                = {price * quantity} руб.
            </div>  
            <div className="item">                
                <span 
                    className="secondary-content"
                    onClick={() => removeFromCart(id)}
                >
                    <i className="material-icons">close</i>
                </span>
            </div>
        </li>
    )
}
export {CartItem};