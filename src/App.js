import React from "react";
import { BrowserRouter } from "react-router-dom"
import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js";
import './css/App.css';
import Footer from "./Components/Footer.js";


function App () {
  return (<BrowserRouter>
   <Navbar />
   <Home />
   <About />
   <Footer />


  </BrowserRouter>

     
  
  );
};


export default App;
