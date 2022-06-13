import React, { useState } from "react";
import {GiHamburger} from "react-icons/gi"
import "./Card.css";



const Card = (item) => {
//   const [showModal, setShowModal] = useState(false);
//   const product = item.item;
  // console.log(product);
  // console.log(item.item);
  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };
  return (
    <div className="card">
        <div className="c-icon">
        <GiHamburger className="icon"/>
        </div>
      
        <div className="card-body">
          <h1 className="card-title">Delicious Hambuger</h1>
          <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
          
       
      </div>
    </div>
  );
};

export default Card;