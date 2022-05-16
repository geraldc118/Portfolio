import React from 'react'
import { SiGithub } from 'react-icons/si'
import { FaRocket } from 'react-icons/fa'
import Tricknastics from '../Images/TnAcademy_Landingpage_Screenshot.png'
import codingBloggerImage from '../Images/CodingBlogger_Image.png'
import toDoListImage from '../Images/toDoListImage.png'
import pyGen from '../Images/PyGen_logo_img.png';
// import drumKit from '../Images/drum_kit_img';
import '../css/Projects.css'



export default function Projects() {
  return <section id="projects" className="section">
    <div>
      <h1 className="projectsTitle has-text-white has-text-centered">PROJECTS</h1>
    </div>
    {/* Tricknastics */}
    <section id="tricknastics" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="TnAcademy" src={Tricknastics} alt="tricknastis_logo"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle">Tricknastics: Landing Page</h2>
        <hr className="projectRule" />
        <p>Tricknastics is a mobile first, full stack app formed of a React.js frontend and a nodeJs backend talking to a Mailchimp API. Users can sign up to the Tricknastics mailing list where they gain access to more content.</p>
        <br />
        <p>Working across the full stack I used mailchimp Api to capture customers data and use this to create tailored communications between selected groups.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/tricknastics" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://tricknasticsacademy.herokuapp.com/" rel="noreferrer" target="_blank">
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
    {/* Coding Blog */}
    <section id="codingBlogger" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="codingBloggerImage" src={codingBloggerImage} alt="codingBlogImage"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">Coding Blogger: Progress Tracker.</h2>
        <hr className="projectRule" />
        <p>Coding Blogger is a responsive, full stack app formed of a Javascript, EJS frontend and a nodeJs backend talking to a Mongodb Database. Users can view posts from the blog, each post shows a preview and has the function to open the content in another window.</p>
        <br />
        <p>In order to gain experience working across the full stack I built a simple backend model and used jsx for front end, using partials for header and footer.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/BlogPage" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://coding-blogger.herokuapp.com/" rel="noreferrer" target="_blank">
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
     {/* To-Do List */}
     <section id="toDoList" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="toDoListImage" src={toDoListImage} alt="toDoListImage"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">To-Do List App: To-Do List</h2>
        <hr className="projectRule" />
        <p>To-Do List is a responsive, full stack app formed of a Javascript, EJS frontend and a nodeJs backend talking to a Mongodb Database. </p>
        <br />
        <p>This app works like most reminder or todo list applications. It has the functions of adding,deleting tasks from the list, with the ability to create new ones.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/toDoList" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://stormy-brushlands-63997.herokuapp.com/" rel="noreferrer" target="_blank">
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
     
     {/* Password Generator */}
     <section id="password_generator" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="password_generator" src={pyGen} alt="password_generator"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">Password Generator: PassGen</h2>
        <hr className="projectRule" />
        <p>Passgen generates passwords with a users inputted amount of letters, numbers and symbols and then randomizes all the characters.</p>
        <br />
        <p>I created this project with Python, using lists and the random module to generate random places for the characters in the generated password.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/password_generator" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://github.com/geraldc118/password_generator" rel="noreferrer" target="_blank"> 
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
      {/* Trafalgar Enterprises */}
      <section id="trafalgar_enterprises" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="trafalgar_enterprises" src={pyGen} alt="trafalgar_enterprises"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">trafalgar Enterprises</h2>
        <hr className="projectRule" />
        <p>Passgen generates passwords with a users inputted amount of letters, numbers and symbols and then randomizes all the characters.</p>
        <br />
        <p>I created this project with Python, using lists and the random module to generate random places for the characters in the generated password.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://geraldc118.github.io/Portfolio" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://github.com/geraldc118/Portfolio" rel="noreferrer" target="_blank"> 
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>

    {/* Drum Kit */}
    {/* <section id="snakeGame" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="snakeGame" src={} alt="Drum Kit"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">Drum Kit: Drum Kit App</h2>
        <hr className="projectRule" />
        <p>Drum Kit- Is a ui for a drum kit with sounds.</p>
        <br />
        <p>This was created using Javascript, Css3 and Html app that uses the sounds and images from a drum kit.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/DrumKit" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://stormy-brushlands-63997.herokuapp.com/" rel="noreferrer" target="_blank"> 
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section> */}
    
  </section >
}