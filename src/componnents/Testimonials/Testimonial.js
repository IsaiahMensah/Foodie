import React from 'react';
import Card from "../../componnents/card/Card"
import Navbar from '../navbar/Navbar';
import "./Testimonial.css"


function Testimonials(){
    <Navbar/>
    return(
        
        <div className='testimonial'>
               <div className='testimonial-heading'> 
            <h1>What Our Coustomer Say</h1>
            <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
            </div>
            <div className='t-wrapper'>
            <Card/>
            <Card/>
            <Card/>
            </div>
           </div>
    )
}
export default Testimonials;