import React, { ReactElement } from 'react';
import './CompetencesList.css';
import CustomTooltip from '../CustomTooltip.tsx';
import Frontend from './Frontend.tsx';
import Beckend from './Backend.tsx';
import Others from './Others.tsx';
import Certifications from './Certifications.tsx';

export default function CompetencesList(): ReactElement {
  return (
    <div className="competences-list-row">

      <div className='competences-list-colomn'>
          <Frontend/>
          <Beckend/>
          <Others/>
      </div>

      <div className='competences-list-colomn'>
          <Certifications/>
      </div>

    </div>
  );
}
