import React from 'react';
import { ReactComponent as JavaScript } from '../../assets/techno/JavaScript.svg';
import { ReactComponent as Freecodecamp } from '../../assets/techno/freecodecamp.svg';

import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as OpenClassrooms } from '../../assets/techno/OpenClassrooms.svg';

import { ReactComponent as Line } from '../../assets/techno/line.svg';

import { ReactComponent as Diplome } from '../../assets/techno/Diplome.svg';
import { ReactComponent as Esiea } from '../../assets/techno/Esiea.svg';
import CustomTooltip from '../CustomTooltip.tsx';
import './CompetencesList.css';

const Certifications = () => {
    return (
        <div className="competence-box certifications">
            <h1>Certifications</h1>
            
            <div className="certification-item">
                <CustomTooltip title="JavaScript">
                    <JavaScript className="icon cert-icon" />
                </CustomTooltip>
                <div className="certification-text">
                    <CustomTooltip title="freecodecamp.org">
                        <Freecodecamp className="icon cert-icon" />
                    </CustomTooltip>
                    <h1>JavaScript Algorithms and Data Structures</h1>
                </div>
            </div>

            <div className="certification-item">
                <CustomTooltip title="Spring">
                    <Spring className="icon cert-icon" />
                </CustomTooltip>
                <div className="certification-text">
                    <CustomTooltip title="OpenClassrooms">
                        <OpenClassrooms className="icon cert-icon" />
                    </CustomTooltip>
                    <h1>Créez une application Java avec Spring</h1>
                </div>
            </div>

            <div className="certification-item">
                <Line className="icon cert-icon" />
            </div>

            <div className="certification-item">
                <CustomTooltip title="Master diplôme d'ingénieur">
                    <Diplome className="icon cert-icon" />
                </CustomTooltip>
                <div className="certification-text">
                    <CustomTooltip title="ESIEA">
                        <Esiea className="icon cert-icon" />
                    </CustomTooltip>
                    <h1>Master ingénieur en informatique ESIEA</h1>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
