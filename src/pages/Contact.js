import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <section className="contact">
        <h2>Contáctame</h2>
        <p>Puedes contactarme a mi correo electrónico:</p>
        <h2>emailpersonal@esit.gob.sv</h2>
        <p>También puedes seguirme en mis redes sociales:</p>
        <div className="social-links">
           <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
           </a>
           <a href="https://sv.linkedin.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faLinkedin} size="2x" />
           </a>
           <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faGithub} size="2x" />
           </a>
      </div>
      </section>
    );
}

export default Contact;
