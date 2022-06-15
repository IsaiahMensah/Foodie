import React from "react";
import "./Smallmenu.css";
import { Outlet, Link } from "react-router-dom";
import Breakfast from "../../Pages/Breakfast/Breakfast";

function Smallmenu() {
  return (
    
      <div className="small-nav">
        <ul>
          <li>
            <Link to="/sm/bf">Breakfast</Link>
          </li>
          <li>
            <Link to="/Smallmenu/Breakfast">Breakfast</Link>{" "}
          </li>
          <li>
            <Link to="/Smallmenu/Breakfast">Breakfast</Link>{" "}
          </li>
          <li>
            <Link to="/Smallmenu/Breakfast">Breakfast</Link>{" "}
          </li>
          <li>
            <Link to="/Smallmenu/Breakfast">Breakfast</Link>{" "}
          </li>
        </ul>
   
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Smallmenu;
