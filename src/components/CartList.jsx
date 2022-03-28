import { useContext } from 'react';
import { ShopContext } from '../context';

import { CartItem } from "./CartItem";

function CartList(props) {

    const { 
        order=[], 
        handleCartShow = Function.prototype
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <div className="cart-list-wrap">
            <ul className="collection cart-list">
                <li className="collection-item active #ff5252 red accent-2">Корзина</li>  
                {
                    order.length ?
                    order.map((item) => 
                        <CartItem 
                            key={item.id}                            
                            {...item}
                        /> 
                    ) :               
                        <li className="collection-item">Корзина пуста</li>
                }          
                <li className="collection-item active #ff5252 red accent-2">
                    Общая стоимость: {totalPrice} руб.
                    <button className="btn secondary-content #b71c1c red darken-4">Оформить</button>
                </li>
                <i 
                    className="material-icons cart-close white-text"
                    onClick={handleCartShow}>close</i>
            </ul>
        </div>
    )
}
export {CartList};
