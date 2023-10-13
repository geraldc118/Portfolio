import React from 'react'
import '../css/Header.css'
import profilePic from '../Images/geralds_profile.png'


export default function Header() {
  return <main>
    <header className="has-text-centered">
        <div className="">
          <div className="column">
          <div className="is-one-third profileImgContainer">
            <img id="profile" className="profile_img" src={profilePic} alt="profilePic"/>
          </div>
            <h1 id="heroTitle" className="title has-text-white">Gerald Cameron</h1>
            <h2 id="heroSubtitle" className="subtitle hero has-text-light">FULL STACK JUNIOR DEVELOPER</h2>
          </div>
        </div>
    </header>
  </main>
}