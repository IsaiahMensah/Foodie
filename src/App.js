import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from "./componnents/navbar/Navbar"
import Hero from "./componnents/hero/hero"
import Offers from "./componnents/best offers/Offer"


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
    </div>
  );
}

export default App;
