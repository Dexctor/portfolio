import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';

import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
 <div className='page-container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
