import React from 'react';
import "./Breakfast.css"
import Card from "../../componnents/card/Card"

function Breakfast(){
    return(
        <div className='breakfast-container'>
         <div className='menu-card'>
            <Card className="card"/>
            <Card className="card"/>
            <Card className="card"/>
            <Card className="card"/>
         </div>
        </div>
    )
}
export default Breakfast;