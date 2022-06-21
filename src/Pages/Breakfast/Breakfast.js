import React from 'react';
import "./Breakfast.css"
import Card from "../../componnents/card/Card"
import ImageSlider from '../../componnents/imageslider/ImageSlider';
import SliderData from '../../componnents/imageslider/SlideData';

function Breakfast(){
    return(
        <div className='breakfast-container'>
         <div className='menu-card'>
         <ImageSlider slides={SliderData}/>
           {/* <Card className="card"/>
           <Card className="card"/>
           <Card className="card"/> */}
         </div>
        </div>
    )
}
export default Breakfast;