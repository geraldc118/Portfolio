import React from 'react'
import { useState } from 'react'
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
        <div className="columns has-text-white is-vcentered is-centered">
          <div className="column is-two-thirds">
            <p>Hi 👋  I'm Gerald. I'm a hobby developer seeking a role as a junior developer.</p>
            <br />
            <p>I work with Javascript & Python with knowledge in both front/back end.</p>
            <br />
            <p>I'm looking to transition into a full stack role. Working in a collaborative team where I can learn from others, add value and create exciting projects.</p>
            <br />
            <p>Have a look at the projects I have developed and visit my github to see how I did it. </p>
          </div>
        </div>
      </div>

      {/* <div className="has-text-centered mt-3">
        <button onClick={() => showInterests(!interests)} className="button has-text-white mb-4" >Tell me more</button>
      </div> */}
      <div style={{ display: interests ? '' : 'none' }} >
        <Interests />
      </div>
    </div>
  </section>
}