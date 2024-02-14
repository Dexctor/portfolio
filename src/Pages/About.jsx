import React from 'react';
import Navbar from '../Components/Nav/navbar';
import '../Components/Hero_logo/index.css'
import './about.css'
import Footer from '../Components/Footer/footer';
import Image from '../Components/Hero_logo/work-men.webp'
function About() {
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
          <div className="homepage-first-area-right-side">
            <div className="homepage-image-container">
              <div className="homepage-image-wrapper">
                <img src={Image }alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}

export default About;
