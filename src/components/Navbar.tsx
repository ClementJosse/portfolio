import React from 'react';
import "./Navbar.css"

function Navbar({ scrollToSection, homeRef, experiencesRef, projectsRef, skillsRef, contactRef }) {
  return (
    <div className='navbar-container'>
        <h1 className='navbar-button' onClick={() => scrollToSection(homeRef)}>Home</h1>
        <h1 className='navbar-button' onClick={() => scrollToSection(experiencesRef)}>Experiences</h1>
        <h1 className='navbar-button' onClick={() => scrollToSection(projectsRef)}>Projets</h1>
        <h1 className='navbar-button' onClick={() => scrollToSection(skillsRef)}>Skills</h1>
        <h1 className='navbar-button' onClick={() => scrollToSection(contactRef)}>Contact</h1>
    </div>
  );
}

export default Navbar;
