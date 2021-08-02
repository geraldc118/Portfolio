import React from "react";
import './css/App.css';
import { BrowserRouter } from "react-router-dom"
import Home from "./Components/Home.js";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";


function App () {
  return (<BrowserRouter>
   <Navbar />
   <Home />
   <About />
   <Projects />
   <Footer />


  </BrowserRouter>

     
  
  );
};


export default App;
