import React from 'react'
// import logo from '../images/logo.png'
import { useState } from 'react'
import '../css/Navbar.css'

export default function Navbar() {
  const [isActive, setisActive] = useState(false)
  console.log(isActive)

  return <div>
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a onClick={() => setisActive(!isActive)} role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        

      </div>
      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <a onClick={() => setisActive(!isActive)} id="navItemAbout" className="navbar-item" href={'#about'}>About</a>
          <a onClick={() => setisActive(!isActive)} id="navItemWork" className="navbar-item" href={'#projects'}>Work</a>
          <a onClick={() => setisActive(!isActive)} id="navItemHello" className="navbar-item" href={'#contact'}>Say hello 👋</a>
        </div>
      </div>

    </nav>
  </div >
}