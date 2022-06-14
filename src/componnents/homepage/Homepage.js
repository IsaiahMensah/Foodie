import {Routes,Route} from "react-router-dom"
import '../../App.css';
import Navbar from "../../componnents/navbar/Navbar"
import Hero from "../../componnents/hero/hero"
import Offers from "../../componnents/best offers/Offer"
import Smallmenu from "../smallmenu/Smallmenu";


function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
      {/* <Smallmenu/> */}
    </div>
  );
}

export default Homepage;
