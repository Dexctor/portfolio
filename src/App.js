import './App.css';
import Footer from './Components/Footer/footer';
import Hero from './Components/Hero_logo/hero';
import Navbar from './Components/Nav/navbar';
import Project from './Components/Projetcs/project';
import Work from './Components/Work/work';


function App() {
  return (
    <div className="App">

      <div className='page-container'>
        <Navbar />
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

export default App;
