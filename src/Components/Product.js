import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({ title, price, ratings, image  , id}) {
     const [{user} , dispatch] = useStateValue();

     
    const addToBasket = () => {
        if(user){
        dispatch(
            {
            type : 'ADD_TO_BASKET',
            item : {
           id : id,
           title : title,
           image : image,
           price : price,
           ratings : ratings,
            },
        });
    }
    else {
        alert("please sign in to add to basket");
    }
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

