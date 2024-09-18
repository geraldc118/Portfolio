import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="container-fluid footerBackground">
            <div className="row">
                <div className="col-12">
                    <div className="footerHolder">
                        <a className="footerLink" href="https://github.com/geraldc118" target="_blank"  rel="noreferrer"><i className="footerIcon fa-brands fa-github"></i></a>
                        <a className="footerLink" href="mailto:geraldcameron118@gmail.com" target="_blank"  rel="noreferrer"><i className="footerIcon fa-regular fa-envelope"></i></a>
                        <a className="footerLink" href="https://www.linkedin.com/in/gerald-cameron118" target="_blank"  rel="noreferrer"><i className="footerIcon fa-brands fa-linkedin-in"></i></a>
                        <p className="subHeading">Copyright Gerald Cameron</p> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer;