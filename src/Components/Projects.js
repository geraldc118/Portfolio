/*jshint esversion: 6 */
import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaRocket } from 'react-icons/fa';
import Tricknastics from '../Images/TnAcademy_Landingpage_Screenshot.png';
import Trafalgar from "../Images/trafalgar_final_image.png";
import codingBloggerImage from '../Images/CodingBlogger_img.png';
import toDoListImage from '../Images/toDoListImage.png';
import aristoski from '../Images/Logo-01.jpg';
import '../css/Projects.css';


export default function Projects() {
  return <section id="projects" className="section">
      <div>
        <h1 className="projectsTitle has-text-white has-text-centered">PROJECTS</h1>
      </div>
{/* Aristoski Website */}
      <section id="aristoski" className="columns is-vcentered">
      <div className="projectImg column is-one-third">
        <img className="aristoski" src={aristoski} alt="aristoski_logo"/>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle">Aristoski Website</h2>
        <hr className="projectRule"/>
        <p>This is an artist page for rapper Aristoski who wanted a page to display his upcoming release.</p>
        <br />
        <p>This webiste was created with Vanilla JS, HTML & CSS. Hosted on hostinger.</p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://aristoski.co.uk" rel="noreferrer" target="_blank">
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
      <figure class="image is-1by1">
        <img className="trafalgar_img" src={Trafalgar} alt="trafalgar_enterprises"/>
      </figure>
      </div>
      <div className="column card-content is-two-thirds has-text-justified projectSpiel">
        <h2 className="projectsTitle ">Trafalgar Enterprises: Sell & Convert Containers</h2>
        <hr className="projectRule" />
        <p>Trafalgar enterprises is a company selling and converting conatiners for sale.</p>
        <br />
        <p>I created using React, Bulma, react-bootstrap, react-icons for styling, The site is hosted on a heroku server.  </p>
        <br />
        <div className="is-flex-direction-column">
          <div className="is-flex">
            <a href="https://github.com/geraldc118/Trafalgar_Enterprises" rel="noreferrer" target="_blank">
              <SiGithub className="projectLink" />
            </a>
            <p className="linkLabel">See my approach</p>
          </div>
          <br />
          <div className="is-flex">
            <a href="https://trafalgar-enterprises.herokuapp.com/" rel="noreferrer" target="_blank"> 
              <FaRocket className="projectLink" />
            </a>
            <p className="linkLabel">See it live</p>
          </div>
        </div>
      </div>
    </section>
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
        <p>I used mailchimp Api to capture customers data and use this to create tailored communications between selected groups.</p>
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
            <a href="https://tricknasticsacademy-5bee279861a7.herokuapp.com/" rel="noreferrer" target="_blank">
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
        <figure class="image is-1by1">
          <img className="codingBloggerImage" src={codingBloggerImage} alt="codingBlogImage"/>
        </figure>
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
      <figure class="image is-1by1">
        <img className="toDoListImage" src={toDoListImage} alt="toDoListImage"/>
      </figure>
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
     
  </section >
}