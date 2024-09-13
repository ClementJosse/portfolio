import React, { useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import SectionTitle from './components/SectionTitle.tsx';
import NavbarGap from './components/NavbarGap.tsx';
import ScrollAnimation from './components/ScrollAnimation.tsx';

import Canvas from './components/Home/Canvas.tsx';
import HomeInfos from './components/Home/HomeInfos.tsx';

import Lysoft from './components/Experience/Lysoft.tsx';
import Moss from './components/Experience/Moss.tsx';

import Portfolio from './components/Projets/Portfolio.tsx';
import Citymo from './components/Projets/Citymo.tsx';
import Velib from './components/Projets/Velib.tsx';
import Santorini from './components/Projets/Santorini.tsx';
import Checkfumi from './components/Projets/Checkfumi.tsx';
import Autres from './components/Projets/Autres.tsx';

import TechnoTiles from './components/Competences/TechnoTiles.tsx';
import CompetencesList from './components/Competences/CompetencesList.tsx';

import Footer from './components/Footer/Footer.tsx';

import "./App.css"; 
import MultiLayerParallax from './components/Projets/MultiLayerParallax.tsx';

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
        <NavbarGap/>
        <SectionTitle title={"Mes Éxpériences"}/>
        <Lysoft/>
        <Moss/>
      </div>

      <div className="projects-container" ref={projectsRef}>
        <MultiLayerParallax/>
        <NavbarGap/>
        <SectionTitle title={"Mes Projets"}/>
        <div className='projects-list'>
          <ScrollAnimation translateX={0} translateY={100} speed="0.2s">
            <Portfolio/>
          </ScrollAnimation>
          
          <ScrollAnimation translateX={0} translateY={100} speed="0.4s">
            <Citymo/>
          </ScrollAnimation>
        
          <ScrollAnimation translateX={0} translateY={100} speed="0.6s">
            <Velib/>
          </ScrollAnimation>

          <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
            <Santorini/>
          </ScrollAnimation>

          <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
            <Checkfumi/>
          </ScrollAnimation>
          
          <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
            <Autres/>
          </ScrollAnimation>
          
        </div>
      </div>
      <div className="competences-container" ref={competencesRef}>
        <TechnoTiles/>
        <SectionTitle title={"Mes Compétences"}/>
        <CompetencesList/>
        <TechnoTiles/>
      </div>
      <div className="contact-footer" >
        <Footer/>
      </div>
    </div>
  );
}

export default App;
