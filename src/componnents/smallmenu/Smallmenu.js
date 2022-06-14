import React from 'react';
import "./Smallmenu.css"
import{Routes, Route} from "react-router-dom"
import Breakfast from "../../Pages/Breakfast/Breakfast"

function Smallmenu(){
    return(

        <div>
            <Route>
                <Route path='/breakfast' element={<Breakfast/>}/>
            </Route>

        </div>
    )
      
}
export default Smallmenu;