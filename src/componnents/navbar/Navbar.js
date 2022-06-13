import React from 'react';
import {GiMeal} from "react-icons/gi"
import {BsFillTelephoneFill} from "react-icons/bs"
import "./Navbar.css"

function Navbar() {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className='m-logo'>
                <GiMeal className='logo'/>
                <span className="n-name">Foodie<strong>.</strong></span> 
                </div>
                
                <div className="n-list">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                           Menu
                        </li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="n-right">
               <div className='book-btn'>
                   <button className=' n-button'>
                    Book A Table 
                </button>
                <button className='call-btn '>
                     <BsFillTelephoneFill/> 
                     +233 5552610220
                </button>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar;