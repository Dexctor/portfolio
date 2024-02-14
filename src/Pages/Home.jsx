// Dans Home.js
import React from 'react';
import Navbar from '../Components/Nav/navbar';
import Hero from '../Components/Hero_logo/hero';
import  Project from '../Components/Projetcs/project' // Assurez-vous que le nom du dossier est correct
import Work from '../Components/Work/work';
import Footer from '../Components/Footer/footer';
import '../App.css'; // Si nécessaire pour des styles spécifiques à Home

function Home() {
  return (
    <div className="App">
      <div className='page-container'>
        <Navbar />
        <div className='content-wrapper'>
          <Hero />
          <Project />
          <Work />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;