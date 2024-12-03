import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Portafolio de proyectos</div>
            <ul className="navbar-links">
              <li><Link to="/">Página de Inicio</Link></li>
              <li><Link to="/about">Sobre mí</Link></li>
              <li><Link to="/projects">Proyectos</Link></li>
              <li><Link to="/contact">Contáctame</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;