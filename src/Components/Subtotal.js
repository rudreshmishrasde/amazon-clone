import React from 'react'
import './Subtotal.css'
import Currencyformat from 'currency-formatter'
import { useStateValue } from './StateProvider.js';
import { getBasketTotal } from '../reducer.js';


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subTotal">



            <p>
                Subtotal({basket.length} items): ₹<strong>{` ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subTotal__gift">
                <input type="checkbox" />This order contains a gift
            </small>

            <button className = "subTotal__button">Proceed to checkout</button>









        </div>
    )
}

export default Subtotal
