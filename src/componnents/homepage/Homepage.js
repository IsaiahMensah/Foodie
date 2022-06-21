import { Routes, Route, Link, Outlet } from "react-router-dom";
import "./Homepage.css"
import Navbar from "../../componnents/navbar/Navbar";
import Hero from "../../componnents/hero/hero";
import Offers from "../../componnents/best offers/Offer";
import Smallmenu from "../smallmenu/Smallmenu";
import Book from "../../componnents/booksection/Book"
import Testimonial from "../../componnents/Testimonials/Testimonial"


function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Offers />
      
      <section style={{ height: "90vh"  }} className="section">
       
          <div className="wrapper">
          <div className="intro">
            <div className="text">
              <div>
              <h1>Most Popular Dishes</h1>
              <p>Making Reservations At Delicious Restaurants is East and takes just a couple of minutes.</p>
              </div>
              
            </div>
            <div className="full-menu">
              <button className="full-menu-btn">Full Menu</button>
            </div>
          </div>
          <div className="mini-nav">
            <ul>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
              <li>
               <Link to="/bf">Breakfast</Link> 
              </li>
            </ul>
          </div>
          

        
        <div>
          <Outlet />
        </div>
        </div>
      </section>
      <Book/>
      <Testimonial/>
     
    </div>
  );
}

export default Homepage;
