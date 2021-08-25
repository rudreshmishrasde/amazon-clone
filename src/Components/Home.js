import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
            
            <div className = "home__row" >
                <Product 
                title = "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)"
                id = "1"
                price = {11999.00}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
                     
                />
                 <Product 
                title = "Lenovo IdeaPad Slim 3 2021 11th Gen Intel Core i3 15.6 FHD Thin & Light Laptop (8GB/256GB SSD/Windows 10/MS Office/2 Year Warranty/Arctic Grey/1.65Kg), 82H801CUIN"
                id = "2"
                price = {41990.00}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/61q6x-ll5FL._SL1000_.jpg"
                     
                />
            </div>
            <div className = "home__row" >
                <Product 
                title = "Fangle Wooden Adjustable Foldable Laptop Table & Drawer/Bed Table/Study Table -Brown DN-04"
                id = "3"
                price = {1389.09}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/31Nn6EkV2GL.jpg"
                     
                />
                 <Product 
                title = "Noise Buds VS103 - Truly Wireless Earbuds with 18-Hour Playtime, HyperSync Technology, Full Touch Controls and Voice Assistant (Pearl White)"
                id = "4"
                price = {1499.00}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/51ly5o5e9HL._SL1500_.jpg"
                     
                />
                <Product 
                title = "
                Noise ColorFit Pro 3 Spo2 Smart Watch with Built-in Oximeter Function (for Blood Oxygen Measurement), 1.55 HD Display with Sleep & Stress Monitor"
                id = "5"
                price = {4499.00}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/61IZd8JAnWL._SL1500_.jpg"
                     
                />
                
            </div>
            <div className = "home__row" >
                <Product 
                title = "LG 34 inch Curved 21:9 Ultrawide Gaming Monitor - 144Hz, 1ms, Full HD, IPS Panel with HDMI, Display Port, USB, Audio Out, Heaphone Ports - 34UC79G (Black)"
                id = "6"
                price = {31400}
                ratings = {5}
                image = "https://m.media-amazon.com/images/I/81fk+cshV-L._SL1500_.jpg"
                     
                />
                </div>
        </div>
    )
}

export default Home
