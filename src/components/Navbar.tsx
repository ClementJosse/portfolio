import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({ scrollToSection, homeRef, experiencesRef, projectsRef, skillsRef, contactRef }) {
  const [activeSection, setActiveSection] = useState('home'); // Initialiser avec "home"

  // Utilisez useEffect pour surveiller le scroll et mettre à jour la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: homeRef, name: 'home' },
        { ref: experiencesRef, name: 'experiences' },
        { ref: projectsRef, name: 'projects' },
        { ref: skillsRef, name: 'skills' },
        { ref: contactRef, name: 'contact' }
      ];

      let maxVisibleSection = null;
      let maxVisibleHeight = 0;

      sections.forEach(section => {
        const rect = section.ref.current.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          maxVisibleSection = section.name;
        }
      });

      if (maxVisibleSection && maxVisibleSection !== activeSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Handle resize as well
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [homeRef, experiencesRef, projectsRef, skillsRef, contactRef, activeSection]);

  return (
    <div className='navbar-container'>
      <h1
        className={`navbar-button ${activeSection === 'home' ? 'active' : ''}`}
        onClick={() => scrollToSection(homeRef)}
      >
        Home
      </h1>
      <h1
        className={`navbar-button ${activeSection === 'experiences' ? 'active' : ''}`}
        onClick={() => scrollToSection(experiencesRef)}
      >
        Expériences
      </h1>
      <h1
        className={`navbar-button ${activeSection === 'projects' ? 'active' : ''}`}
        onClick={() => scrollToSection(projectsRef)}
      >
        Projets
      </h1>
      <h1
        className={`navbar-button ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => scrollToSection(skillsRef)}
      >
        Skills
      </h1>
      <h1
        className={`navbar-button ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={() => scrollToSection(contactRef)}
      >
        Contact
      </h1>
    </div>
  );
}

export default Navbar;
