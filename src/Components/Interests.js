import React from 'react'
import rave from '../Images/rave_image.jpeg'
import bitcoin from '../Images/bitcoin.jpeg'
import sport from '../Images/olympic-image.jpeg'
import Plane from '../Images/plane_over_beach.jpeg'

import '../css/Interests.css'

export default function Interests() {

  return <section id="interests" className="section is-small">
    <h1 className="interestsTitle has-text-centered ">INTERESTS</h1>
    <div className="interestsContainer" >
      <div className="card music column">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={rave} alt="" width="300" height="300">
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            I love music and have an interest in music related tech such as DAW's like logic and fruityloops, as well as Dj software and decks. Due to lockdown I was keeping up with online performances from Continental GT and Boiler Room sets via youtube, but have been happy to get back into clubs and bars since our return.
          </div>
        </div>
      </div>
      <div className="card bitcoin column">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={bitcoin} alt="" width="600" height="300">
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
          I have been involved in crypto currency since 2017 and love the capabilities of blockchain technology and what this holds for the future. I am aiming to build web3 applications, As i believe this is where alot of oppurtunities for new businesses will change the way we currently use the internet.
          </div>
        </div>
      </div>
      <div className="card travelling column">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={Plane} alt="plane">
            </img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            Travelling is something that has became a big passion for me as I have gotten older and I want to be able to see as much of the world as I can. Embracing all the cultures, historical monuments and food that I take in on the way.
          </div>
        </div>
      </div>
      <div className="card sport column">
        <div className="card-image">
          <figure className="image is-5by3">
            <img src={sport} alt="olympic_logo">

            </img>
          </figure>

        </div>
        <div className="card-content">
          <div className="content">
            I love sport and have been involved as an athlete and coached at national level in gymnastics since 1997. Over 12 years of coaching elite gymnastics has given me the ability to break down elemenents to deliver for others.This has also given me many transferable soft skills that allow me deliver information to people across all ages and races.
          </div>
        </div>
      </div>

    </div>
  </section>
}