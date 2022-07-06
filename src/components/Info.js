import me from "../images/me.jpg"
import React from "react";

export default function Info() {
  return (
  	<header className = "info-container">
    	<img className = "myself" src = {me} alt="John Matthews" />
    	<h3 className = "info-title">Name</h3>
    	<h4 className = "info-job">Job Title</h4>
    	<h5 classname = "info-portfolio"><a href="#">portfoliowebsite.com</a></h5>
    	<btn className = "info-btn-linkedin">Linked In</btn>
    	<btn className = "info-btn-email">Email</btn>
    </header>
  )
}
