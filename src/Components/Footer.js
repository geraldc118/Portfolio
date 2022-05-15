import React from "react"
import '../css/Footer.css'

const year = new Date().getFullYear();

function Footer(){
return( <section>
    <div className="footer">
    <p className="footer">Copyright Gerald Cameron {year}</p>
    </div>
    </section> 
)
}

export default Footer;