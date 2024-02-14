import React from 'react';

import Hero from '../Components/Hero_logo/hero';
import Project from '../Components/Projetcs/project';
import Work from '../Components/Work/work';
import Footer from '../Components/Footer/footer';




function Home() {
  return (
    <div className="App">
    <div className='page-container'>
 
    <div className='content-wrapper'>
            <Hero/>
            <Project/>
            <Work/>
            <Footer/>
        </div>
    </div>
  </div>
  );
}

export default Home;
