import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider.js';


function CheckoutProduct({id , title , ratings ,image , price }) {
    const [{basket} , dispatch] = useStateValue(); 
    const removeFromBasket = () => {
        dispatch ({
            type:'REMOVE_FROM_BASKET',
            id : id,
        });
    };
    return (
        <div className = "CheckoutProduct">
            <img className="CheckoutProduct__image" src = {image} alt = ""></img>
            <div className = "CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className = "CheckProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p>{ratings}</p>
                <div >
                    <button onClick={removeFromBasket} className="CheckoutProduct__button" >Remove from the Basket</button>
                </div>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
