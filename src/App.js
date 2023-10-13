import React from "react";
import './css/App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Header from "./Components/Header.js";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";



function App () {
  return (<Router basename={process.env.PUBLIC_URL}>
   <Navbar />
   <Header />
   <About />
   <Projects />
   <Skills />
   <Contact />
   <Footer />
  </Router>
  );
};


export default App;
