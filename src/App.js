// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Skills from './containers/skills';
// import Contact from './containers/contact';
// import Home from './containers/home';
// import Resume from './containers/resume';
// import Portfolio from './containers/portfolio';
// import About from './containers/about';
// import Navbar from './components/navbar';
// import Particles from 'react-tsparticles';
// import Partical from './Partical';
// import { loadFull } from 'tsparticles';
// import React, { useCallback } from 'react';

// function App() {
//   const handleInit = useCallback(async (engine) => {
//     await loadFull(engine);
// }, []);

//   return (
//     <div className="App">
//       <Particles id="tsparticles" init={handleInit} options={Partical} />
//       <Navbar />
//       <Routes>
//         <Route index path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/resume' element={<Resume />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/skills' element={<Skills />} />
//         <Route path='/portfolio' element={<Portfolio />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { Route, Routes ,useLocation} from "react-router-dom";
import "./App.css";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import About from "./containers/about";
import Navbar from "./components/navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Import the slim loader
import Partical from "./Partical";

const App = () => {

  const loction=useLocation();
  const renderParticalInHomePage=loction.pathname==="/";
  const [init, setInit] = useState(false);

  // Use useEffect to initialize the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsparticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true); // Set the initialization state to true
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <div className="App">
        <Navbar />
        {
          renderParticalInHomePage && <Particles
          id="tsparticles"
          options={Partical} // Pass in your Partical config
          particlesLoaded={particlesLoaded} // Callback when particles are loaded
        />
        }
        
        <div className="app_Dr">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </div>
      </div>
    );
  }

  return <></>; // Return an empty fragment while initializing
};

export default App;
