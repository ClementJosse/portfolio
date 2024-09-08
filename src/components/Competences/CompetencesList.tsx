import React, { ReactElement } from 'react';
import './CompetencesList.css';

export default function CompetencesList(): ReactElement {
  return (
    <div className="competences-list">
      <div className="competence-box backend">
        <h3>Backend</h3>
        <p>I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.</p>
        {/* Add relevant icons here */}
      </div>
      <div className="competence-box frontend">
        <h3>Frontend & Design</h3>
        <p>I’m passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences.</p>
        {/* Add relevant icons here */}
      </div>
      <div className="competence-box cloud">
        <h3>Cloud & DevOps</h3>
        <p>I have managed AWS, GCP, and various other cloud services for multiple start-ups and my own projects.</p>
        {/* Add relevant icons here */}
      </div>
      <div className="competence-box management">
        <h3>Management</h3>
        <p>I have worked with multiple clients and stakeholders to define projects that suit their needs and managed these projects from start to finish.</p>
        {/* Add relevant icons here */}
      </div>
    </div>
  );
}
