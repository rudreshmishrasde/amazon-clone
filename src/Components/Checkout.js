import React from 'react';
import {useStateValue} from './StateProvider.js';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal.js'

function Checkout() {
    const [{basket}] = useStateValue(); 
    return (
        <div className = "checkout">
           <div className = "checkout__left"> 
            <img className = "checkout__ad" src = "https://blogs-images.forbes.com/eladnatanson/files/2019/03/amazon2-e1553774022915.png" alt="" ></img>

            {basket?.length === 0 ? (
                <div className ="checkout__title">
                <h2 >The Shopping Basket is Empty</h2>
                <p>please enter products to the Basket</p>
                </div>
            ) : (
                <div >
                   <h2 className ="checkout__title">The Basket contains</h2>
                   {
                       basket?.map((item) =>
                       {
                           console.log(item);
                           return(
                               <CheckoutProduct
                               id = {item.id}
                               title = {item.title}
                               price = {item.price}
                               image = {item.image}
                               ratings = {item.ratings}
                               />
                           )
                       })  

                       
                   }

                </div>
                
                
            )}
            </div>
            {basket.length > 0 && (
                <div className = "checkout__right">
                  <Subtotal />
                    </div>
            )}
            
        </div>
    )
}

export default Checkout
