import React from 'react'
import '../css/Header.css'


export default function Header() {
  return <main>
    <header>
      <section className="hero is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="">
            <h1 id="heroTitle" className="title has-text-white">Gerald Cameron</h1>
            <h2 id="heroSubtitle" className="subtitle hero has-text-light">FULL STACK JUNIOR DEVELOPER</h2>
          </div>
        </div>
      </section>
    </header>
  </main>
}