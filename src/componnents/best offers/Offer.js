import React from 'react';
import "./Offer.css"
import {GiHamburger  } from "react-icons/gi";
import Card from "../card/Card"


function Offer (){
    return(
        <div className='offers'>
            
            <div className='o-text'>
            
            <h1>Best Way To Eat Healthy Food</h1>
            <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
            </div>
            
            <div className='card-wrapper'>
                
            <div className='card-temp'>
           <Card />
           <Card/>
           <Card/>
           </div>
        
            </div>
            
        </div> 
    )
}

export default Offer;