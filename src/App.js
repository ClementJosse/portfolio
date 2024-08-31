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
  const competencesRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-page">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} experiencesRef={experiencesRef} projectsRef={projectsRef} competencesRef={competencesRef} />
      
      <div className="home-container" ref={homeRef}>
        <Canvas className="canvas"/>
        <HomeInfos className="HomeInfos"/>
      </div>

      <div className="experiences-container" ref={experiencesRef}>
        <SectionTitle title={"Mes Éxpériences"}/>
        <Lysoft/>
        <Moss/>
      </div>

      <div className="projects-container" ref={projectsRef}>
        <SectionTitle title={"Mes Projets"}/>
      </div>
      <div className="competences-container" ref={competencesRef}>Competences container</div>
      <div className="contact-footer" >Contact footer</div>
    </div>
  );
}

export default App;
