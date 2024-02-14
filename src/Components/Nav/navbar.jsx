import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'avoir installé react-router-dom
import './index.css'

function Navbar() { // Nom du composant avec une majuscule
    return (
        <header>
            <div className="nav-container">
                <nav>
                    <Link to="/">Home</Link> {/* Ajoutez l'attribut to="" à vos Link */}
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar; // Exportez avec la majuscule
