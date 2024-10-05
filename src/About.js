import React from 'react';
import headImage from './Images/Portfolio banner.png';
import profilePic from './Images/cv profile pic .jpeg';
import "./About.css";
import Projects from './Projects';

function About(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-12">
                {/* <h1 className='headTitle'>Software Developer</h1> */}
                <img src={headImage} alt="Profile" className="headImg img-fluid" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-12">
                {/* Contact Details */}
                <div className='containerBackground' id='contact'>
                <img src={profilePic} alt="Profile" className="profileImg" />
                    <h3 className='subHeading'>Contact Details</h3>
                    <p>Bexley, London UK</p>
                    <i className="aboutIcon fa-regular fa-envelope"></i><a className='contactLink' href='mailto:geraldcameron118@gmail.com'> Geraldcameron118@gmail.com</a>
                    <br></br>
                    <i className="aboutIcon fa-brands fa-linkedin-in"></i><a className='contactLink' href='https://www.linkedin.com/in/gerald-cameron118/'> Linkedin</a>
                    <br></br>
                    <i className="aboutIcon fa-brands fa-github"></i><a className='contactLink' href='https://github.com/geraldc118'> Github</a>
                </div>

                {/* About Me */}
                <div className='containerBackground' id='about'>
                    <h3 className='subHeading'>About Me</h3>
                    <p>Hello! I'm Gerald Cameron, a passionate software developer with a focus on both front-end and back-end solutions. I transitioned into software development during lockdown, teaching myself the skills needed to create dynamic and efficient applications.</p>
                    <p>Throughout my journey, I’ve worked on a variety of projects, from interactive web applications to full-stack systems, always aiming to build user-centered solutions with a strong emphasis on clean and scalable code.</p>
                    <p>Prior to my coding career, I coached gymnastics, which has nurtured my love for sports and helping others achieve their potential. Now, I channel that same dedication into building quality software solutions.</p>
                </div>

                
                {/* Work history  */}
                <div className='containerBackground'>
                    <h3 className='subHeading'>Work History </h3>
                    <div className='previousWorkplace'>
                        <h6><i className="fa-solid fa-circle"></i> Dev Tree Digital Solutions Ltd</h6>
                        <p>Software Developer</p>
                        <p>September 2022 - Present</p>
                        <p>London, Remote</p>
                        <p>Creating websites in JavaScript, updating html,css and working with servers and data entry. </p>
                    </div>
                    <div className='previousWorkplace'>
                        <h6><i className="fa-solid fa-circle"></i> Smartr365</h6>
                        <p>Sales Developement Representative</p>
                        <p>June 2022 - May 2023</p>
                        <p>Hammersmith, Onsite</p>
                        <p>Selling a mortgage & protection crm to mortgage brokers.</p>
                    </div>
                    <div className='previousWorkplace'>
                        <h6><i className="fa-solid fa-circle"></i> Freelance</h6>
                        <p>Software Developer</p>
                        <p>June 2020 - Sept 2022</p>
                        <p>London, Remote</p>
                        <p>Creating websites for clients ranging from landing pages to full stack projects.</p>
                    </div>
                    <div className='previousWorkplace'>
                        <h6><i className="fa-solid fa-circle"></i> Europa Gym Centre</h6>
                        <p>Men's Gymnastics Coach </p>
                        <p>March 2007 - April 2022</p>
                        <p>Bexley, Onsite</p>
                        <p>I coached competitive gymnastics to a national level with a range of age groups,
                             leading groups, creating training plans for competitive sucess. </p>
                    </div>

                </div>
                {/* Skills */}
                <div className='containerBackground'>
                    <h3 className='subHeading'>Skills</h3>
                    <ul className='skillsList'>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Css3</li>
                        <li>Mongo DB</li>
                        <li>PostgreSQL</li>
                        <li>Flask</li>
                    </ul>
                </div>
            </div>
            <div className='col-md-8'>
                <Projects />
            </div>
        </div>
    </div>
    )
}

export default About;
