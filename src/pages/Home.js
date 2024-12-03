import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faLinkedin , faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
        <section className="home">
        <div>
           <h1>Soy Luis Mo</h1>
        <p>Soy backend developer y me especializo en scraping, automatización y APIs.</p>
        <div className="social-links">
           <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faFacebook} size="2x" />
           </a>
           <a href="https://sv.linkedin.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faLinkedin} size="2x" />
           </a>
           <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
           <FontAwesomeIcon icon={faGithub} size="2x" />
           </a>
        </div>
        </div>
      </section>
    );
}

export default Home;
