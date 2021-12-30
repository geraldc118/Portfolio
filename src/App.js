import React from "react";
import './css/App.css';
import { HashRouter as Router } from "react-router-dom"
import Header from "./Components/Header.js";
import Navbar from "./Components/Navbar.js"
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact";



function App () {
  return (<Router basename={process.env.PUBLIC_URL}>
   <Navbar />
   <Header />
   <About />
   <Projects />
   <Contact />
   <Footer />
  </Router>
  );
};


export default App;
