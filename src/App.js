
import "./App.css";
import React, { useState } from 'react'
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contactus from "./Contactus";
import Navbarr from "./Navbarr";
import Backtop from "./component/backtop";
import Footer from "./component/Footer";
import Footersecond from "./component/footersecond";
import Footerthree from "./component/Footerthree";
import Sidewala from "./Sidewala";
import {Transition} from "react-transition-group"
import Backdrop  from "./Backdrop";

function App() {
  const [navopen,setNavOpen]=useState(false);

  const openbar=()=>{

    setNavOpen((prevstate)=>!prevstate)
  }
  
  
  return (
    
        <div className="App">
          
      <BrowserRouter>
      <Navbar />
      <Navbarr open={openbar} />
      <Sidewala navopen={navopen}/>
      <Backdrop navopen={navopen} closebar={openbar}/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/contact" element={<Contactus/>}></Route>
        </Routes>
       <Backtop />
       <Footer/>
       <Footersecond/>
       <Footerthree/>
      </BrowserRouter>
    </div>
  );
}

export default App;