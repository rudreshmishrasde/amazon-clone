import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {auth} from '../firebase.js'
import { useStateValue } from './StateProvider'

function Header() {
    const [{basket , user}] = useStateValue();

    const login = () =>{
        if(user){
            auth.signOut();
        }

    }
    return (
        <div className = "header">
            <Link to = "/">
            <img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>
            <div className = "header__search">
            <input type = "text" className = "header__searchInput" ></input>
            <SearchIcon className = "header__searchIcon"></SearchIcon>
            </div>
            <div className = "header__nav">
            <Link to={!user && "/login"} className = "header__link">
                <div onClick = {login} className = "header__option" >
                    <span className ="header__optionLineOne">Hello {user?.email}</span>
                    <span className ="header__optionLineTwo">{user?"Sign out":"Sign in" }</span>
                </div>
            </Link>
            <Link to= "/login" className = "header__link">
                <div className = "header__option" >
                    <span className ="header__optionLineOne">Returns</span>
                    <span className ="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            <Link to="/login" className = "header__link">
                <div className = "header__option" >
                    <span className ="header__optionLineOne">Yours</span>
                    <span className ="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className = "header__link">
                <div className = "header__optionBasket" >
                    <ShoppingBasketIcon />
                    <span className="header__basketCount">{basket?.length}</span>
                    
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header


