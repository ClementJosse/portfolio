import React, { useRef } from 'react';
import Canvas from './components/Home/Canvas.tsx';
import HomeInfos from './components/Home/HomeInfos.tsx';
import Navbar from './components/Navbar.tsx';
import SectionTitle from './components/SectionTitle.tsx';
import Lysoft from './components/Experience/Lysoft.tsx';
import Moss from './components/Experience/Moss.tsx';

import "./App.css"; 

function App() {
  const homeRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-page">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} experiencesRef={experiencesRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} />
      
      <div className="home-container" ref={homeRef}>
        <Canvas className="canvas"/>
        <HomeInfos className="HomeInfos"/>
      </div>

      <div className="experiences-container" ref={experiencesRef}>
        <SectionTitle title={"Mes Éxpériences"}/>
        <Lysoft/>
        <Moss/>
      </div>

      <div className="projects-container" ref={projectsRef}>Projects container</div>
      <div className="skills-container" ref={skillsRef}>Skills container</div>
      <div className="contact-container" ref={contactRef}>Contact container</div>
    </div>
  );
}

export default App;
