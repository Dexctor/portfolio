import React from 'react'
import Navbar from '../Components/Nav/navbar'
import Footer from '../Components/Footer/footer';
import Project from '../Components/Projetcs/project';

function Projects() {
    return (
        <div>
          <Navbar />
          <div className="homepage-logo-container">
          
          </div>
          <div className='homepage-container'>
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">Je m'appelle John Doe. Je vis à Britz</div>
                <div className="subtitle homepage-subtitle">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus rem a nihil, blanditiis amet distinctio aliquam adipisci officia saepe in quod sequi illo, enim ratione impedit sunt.
                  Rerum, dolor nostrum!
                </div>
              </div>
            
            </div>
            <Project/>
          </div>
          <Footer/>
        </div>
    
      );
}

export default Projects