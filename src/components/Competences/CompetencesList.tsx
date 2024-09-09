import React, { ReactElement } from 'react';
import './CompetencesList.css';
import CustomTooltip from '../CustomTooltip.tsx';
import Frontend from './Frontend.tsx';
import Beckend from './Backend.tsx';
import Others from './Others.tsx';
import Certifications from './Certifications.tsx';

export default function CompetencesList(): ReactElement {
  return (
    <div className="competences-list">
      <div className='competence-box'>
        <Frontend/>
      </div>
      <div className='competence-box'>
        <Beckend/>
      </div>
      <div className='competence-box'>
        <Others/>
      </div>
      <div className='competence-box'>
        <Certifications/>
      </div>
    </div>
  );
}
