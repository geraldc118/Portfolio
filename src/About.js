import React from 'react';
import profilePic from './Images/geralds_profile.png';
import "./About.css";
import Projects from './Projects';

function About(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className='headTitle'>Software Developer</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-12">
                {/* Contact Details */}
                <img src={profilePic} alt="Profile" className="profileImg img-fluid" />
                <h3 className='subHeading'>Contact Details</h3>
                <p> Bexley, London UK</p>
                <i className="fa-regular fa-envelope"></i><a className='contactLink' href='mailto:geraldcameron118@gmail.com'> Geraldcameron118@gmail.com</a>

                {/* About Me */}
                <h3 className='subHeading'>About Me</h3>
                <p>Hello! I'm Gerald Cameron, a passionate software developer with a knack for creating innovative solutions through code.</p>
                <p>My expertise spans various modern technologies, and I'm constantly pushing the boundaries of what software can do.</p>
                <p>I have worked on diverse projects, ranging from dynamic web applications to complex software systems, all driven by my dedication to efficient, 
                user-centered development.</p>
                
                {/* Key Points */}
                <h3 className='subHeading'>Skills</h3>
                <ul className='skillsList'>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Css3</li>
                    <li>Mongo DB</li>
                </ul>
            </div>
            <div className='col-md-8'>
                <Projects />
            </div>
        </div>
    </div>
    )
}

export default About;
