import React, { useState, useEffect } from "react";
import { GiMeal } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
    const [li ,onClick, setLi] =useState(true)

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 130) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
 const changeLi = () => {
    if (onClick )
     setLi(true)
     else(
        setLi(false)
        )
 }
  useEffect(() => window.addEventListener("scroll", changeBackground));
  useEffect(() => window.addEventListener("onClick", changeLi))
  return (
    <div className={navbar ? "nav_active" : "n-wrapper"}>
      <div className="n-left">
        <div className="m-logo">
          <GiMeal className="logo" />
          <span className="n-name">
            Foodie<strong>.</strong>
          </span>
        </div>

        <div className="n-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menupage">Menu</Link>
            </li>
            <li>
              <Link to="/aboutpage">About</Link>
            </li>
            <li>
              <Link to="/blogpage">Blog</Link>
            </li>
            <li>
              <Link to="/contactpage">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="n-right">
        <div className="book-btn">
          <button className=" n-button">Book A Table</button>
          <button className="call-btn ">
            <BsFillTelephoneFill />
            +233 5552610220
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
