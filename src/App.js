import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from "./componnents/navbar/Navbar"
import Homepage from "./componnents/homepage/Homepage";
import Menupage from "./Pages/menu/Menupage"
import Aboutpage from "./Pages/aboutpage/Aboutpage" 
import Blogpage from "./Pages/blogpage/Blogpage"
import Contactpage from "./Pages/contactpage/Contactpage"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/menupage" element={<Menupage/>}/>
        <Route path="/aboutpage" element={<Aboutpage/>}/>
        <Route path="/blogpage" element={<Blogpage/>}/>
        <Route path="/contactpage" element={<Contactpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
