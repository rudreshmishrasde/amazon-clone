import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({ title, price, ratings, image  , id}) {
     const [{user} , dispatch] = useStateValue();

     const pleaseLogin = () =>{
         
             alert("please login to add to basket");
         

         
     }
    const addToBasket = () => {

        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
           id : id,
           title : title,
           image : image,
           price : price,
           ratings : ratings,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="product__rating">
                    <p>{ratings} star</p>
                </div>
                <div className="product__display">
                <img className="product__image" src={image}></img>
                <button onClick ={addToBasket} className="product__button" >Add To Basket</button>
                </div>
            </div>

        </div>
    )
}

export default Product

