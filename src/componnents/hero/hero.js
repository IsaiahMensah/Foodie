import React from 'react';
import "./Hero.css"
import {FiPlay} from "react-icons/fi"

function Hero(params) {
    return(
        <div className='hero'>
            
             <div className="h-left">
                 <div className='text-left'>
                 <h1>Meet,Eat & Enjoy The True Taste<strong>.</strong></h1>
                <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
                <div className='h-btn'>
                    <div className='menu-btn'>
                    <button >Our Menu</button>
                    </div>
                    <div className='watch-btn'>
                    <button ><FiPlay className='w-play'/><label>Watch Video</label></button>
                    </div >
                </div>
                 </div>
                
                
            </div>
            <div className="h-right">
               
                
            </div>
        </div>
    )
}

export default Hero;