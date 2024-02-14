import React from 'react'
import './index.css'
import Logo from './homme.webp'
import Space from './space.webp'
function hero_logo() {
  return (
    <div>
      <div className="homepage-logo-container">
        <div >
          <img src={Logo} alt="logo" className="logo" width="80" />
        </div>
      </div>
      <div className='homepage-container'>
        <div className="homepage-first-area">
          <div className="homepage-first-area-left-side">
            <div className="title homepage-title">Développeur d'applications Web et mobiles full-stack et astronaute amateur.</div>
            <div className="subtitle homepage-subtitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus rem a nihil, blanditiis amet distinctio aliquam adipisci officia saepe in quod sequi illo, enim ratione impedit sunt.
              Rerum, dolor nostrum!
            </div>
          </div>
          <div className="homepage-first-area-right-side">
            <div className="homepage-image-container">
              <div className="homepage-image-wrapper">
                <img src={Space} alt="" />
              </div>
            </div>
          </div>
          

        </div>
        
      </div>
    </div>
  )
}

export default hero_logo