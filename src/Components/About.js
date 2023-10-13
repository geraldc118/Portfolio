import React from 'react'
import { useState } from 'react'
import Skills from '../Components/Skills'
import Interests from './Interests'
import '../css/About.css'

export default function About() {
  const [interests, showInterests] = useState(false)

  return <section id="about" className="section">
    <div /*about section container*/>
      <div>
        <h1 className="has-text-white has-text-centered aboutTitle">ABOUT</h1>
      </div>
      <div>
      </div>

      <div className="aboutTextImgContainer">
        {/* about: text and image container  */}
        <div className="columns has-text-white is-vcentered is-centered">
          <div className="column is-two-thirds">
            <p>Hi 👋  I'm Gerald. I'm a hobby developer seeking a role as a junior developer.</p>
            <br />
            <p>I work with Javascript & Python with knowledge in both front front/back end. And have developed websites for companies and friends.</p>
            <br />
            <p>I'm looking to transition into a into a full time developer. Working in a collaborative team where I can learn from others, add value and create exciting projects.</p>
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