import React from 'react'
import { useState } from 'react'
import profilePic from '../Images/geralds_profile.png'
import Skills from '../Components/Skills'
import Interests from './Interests'
import '../css/About.css'

export default function About() {
  const [interests, showInterests] = useState(false)

  return <section id="about" className="section">
    <div /*about section container*/>
      <div>
        <h1 className="has-text-white has-text-centered title is-1">ABOUT</h1>
      </div>
      <div>
      </div>

      <div className="aboutTextImgContainer">
        {/* about: text and image container  */}
        <div className="columns has-text-white is-vcentered is-centered">
          <div className="column is-two-thirds">
            <p>Hi 👋  I'm Gerald. I'm a recent grad from a 0-Mastery Python Bootcamp & A Web Development Bootcamp. I am currently seeking my first junior developer role. </p>
            <br />
            <p >My interest in coding began years ago creating piczo sites, searching for code snippets for shiny titles without knowing I was coding. As time has developed I have seen how tech has progressed and would like to part of the future of these developements.</p>
            <br />
            <p></p>
            <p>With a background in coaching elite gymnastcs, I hope to <span className="keyword">provide value for future clients</span> using a blend of technical and soft skills to deliver <span className="keyword">solutions that count</span>. I’d love to work in a collaborative team where I can learn from others, add value and contribute to exciting projects. </p>
          </div>

          <div className="column is-one-third profileImgContainer">
            <img id="profile" className="profile_img" src={profilePic} alt="profilePic"/>
          </div>
        </div>
      </div>

      <div className="has-text-centered mt-3">
        {/* about: button and interest section container  */}
        <button onClick={() => showInterests(!interests)} className="button has-text-white mb-4" >Tell me more</button>
      </div>
      <div style={{ display: interests ? '' : 'none' }} >
        <Interests />
      </div>
      <Skills />
    </div>
  </section>
}