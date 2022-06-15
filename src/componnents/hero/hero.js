import React, { useState } from 'react';
import "./Hero.css"
import {FiPlay} from "react-icons/fi"
import Sphagetti from "../../images/pngwing.com (2).png"

function Hero(params) {



    return(
        <div className='hero'>
            
             <div className="h-left " >
                 <div className='text-left l-fade-in'>
                 <h1 data-animation="fadeInUp" data-delay=".2s" >Meet,Eat & Enjoy The True Taste<strong>.</strong></h1>
                <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
                <div className='h-btn btn-fade-in-left'>
                    <div className='menu-btn '>
                    <button  className=''>Our Menu</button>
                    </div>
                    <div className='watch-btn'>
                    <button ><FiPlay className='w-play'/><label>Watch Video</label></button>
                    </div >
                </div>
                <div className='png img-fade-in-top'>
                    <img src={Sphagetti} alt='' />
                </div>
                 </div>
                
                
            </div>
            <div className="h-right " >
               <div className='image r-fade-in'>

               </div>
                
            </div>
        </div>
    )
}

export default Hero;