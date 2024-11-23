import React from 'react';
import "./Projects.css";
import aristoski_logo from './Images/aristoski_Logo.jpg'
import wheelLogo from './Images/4 Wheel logo smaller.png'
import pristinehousing from './Images/pristine housing solutions logo.png';
import GetLogo from './Images/GET Logo.JPG';

function Projects() {
  return(
    <div className='projectHolder' id='projects'>
      {/* Project 1  */}
      <div className="col-md-12">
        <div className="card">
          <h3 className="projectTitle">Projects</h3>
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
              <div className="imgHolder">
                <img src={GetLogo} className="projectImg" alt="Project 1" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Get Damp Proofing</h5>
            <p className="card-text">A clean and accessible website for Get Damp Proofing, showcasing professional damp proofing services and offering easy access to contact details and expertise.</p>
            <a href="https://getdampproofing.co.uk/" className="projectBtn btn btn-primary">View Project</a>
            <a href="https://github.com/geraldc118/getdampproofing" className="projectBtn btn btn-primary">View Code</a>
          </div>
        </div>
      </div>


      {/* Project 2  */}
      <div className="col-md-12">
        <div className="card">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="imgHolder">
                <img src={wheelLogo} className="projectImg" alt="Project 2" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">4 Wheel Barbers</h5>
            <p className="card-text">4 Wheel Barbers is a sleek website for a mobile barbershop, 
              offering easy access to services, bookings, and contact details. 
              The responsive design ensures a smooth experience on any device.
            </p>
            <a href="https://4wheelbarbers.co.uk/" className="projectBtn btn btn-primary">View Project</a>
            <a href="https://github.com/geraldc118/4wheelbarbers" className="projectBtn btn btn-primary">View Code</a>
            </div>
        </div>
      </div>

      {/* Project 3  */}
      <div className="col-md-12">
        <div className="card">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="imgHolder">
                <img src={aristoski_logo} className="projectImg" alt="Project 3" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Aristoski Artist Page</h5>
            <p className="card-text">Aristoski.co.uk is a modern website built with React and hosted on Hostinger. 
              It features a sleek design and responsive layout, providing a seamless user experience across all devices.</p>
            <a href="https://aristoski.co.uk/" className="projectBtn btn btn-primary">View Project</a>
            <a href="https://github.com/geraldc118/aristoski-artist" className="projectBtn btn btn-primary">View Code</a>
          </div>
        </div>
      </div>


    
      {/* Project 4*/}
      <div className="col-md-12">
        <div className="card">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
              <div className="imgHolder">
                <img src={pristinehousing} className="projectImg" alt="Project 1" />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">Pristine Housing Solutions</h5>
            <p className="card-text">I created PristineHousingSolutions.uk for my business using React, and it's hosted on Hostinger.</p>
            <a href="https://pristinehousingsolutions.uk/" className="projectBtn btn btn-primary">View Project</a>
            <a href="https://github.com/geraldc118/pristine-housing-solutions" className="projectBtn btn btn-primary">View Code</a>
          </div>
        </div>
      </div>

    </div>
    )
}

export default Projects;