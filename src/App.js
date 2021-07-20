import React from "react";
import { BrowserRouter } from "react-router-dom"
import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js";
import './css/App.css';


function App () {
  return (<BrowserRouter>
   <Navbar />
   <Home />
   <About />


  </BrowserRouter>

     
  
  );
};


export default App;
