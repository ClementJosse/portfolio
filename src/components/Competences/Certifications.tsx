import React from 'react';
import ScrollAnimation from '../ScrollAnimation.tsx';

import { ReactComponent as JavaScript } from '../../assets/techno/JavaScript.svg';
import { ReactComponent as Freecodecamp } from '../../assets/techno/freecodecamp.svg';

import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as OpenClassrooms } from '../../assets/techno/OpenClassrooms.svg';

import { ReactComponent as Line } from '../../assets/techno/line.svg';

import { ReactComponent as Diplome } from '../../assets/techno/Diplome.svg';
import { ReactComponent as Esiea } from '../../assets/techno/Esiea.svg';
import diplome from '../../assets/Diplome.pdf';
import CustomTooltip from '../CustomTooltip.tsx';
import './CompetencesList.css';

const Certifications = () => {
    return (
        <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
            <div className="competence-box certifications">
                <h1>Certifications</h1>
                <ScrollAnimation translateX={0} translateY={100} speed="0.4s">
                    <div className="certification-item">
                        <CustomTooltip title="JavaScript">
                            <JavaScript className="icon cert-icon" />
                        </CustomTooltip>
                        <div className="certification-content" onClick={() => window.open("https://www.freecodecamp.org/certification/fcc9e3967d0-405d-43d2-914b-7300e6cb6090/javascript-algorithms-and-data-structures")}>
                            <CustomTooltip title="freecodecamp.org">
                                <Freecodecamp className="icon cert-icon" />
                            </CustomTooltip>
                            <CustomTooltip title="Voir la certification">
                                <div className="certification-text">JavaScript Algorithms and Data Structures</div>
                            </CustomTooltip>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
                    <div className="certification-item">
                        <CustomTooltip title="Spring">
                            <Spring className="icon cert-icon" />
                        </CustomTooltip>
                        <div className="certification-content" onClick={() => window.open("https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot")}>
                            <CustomTooltip title="OpenClassrooms">
                                <OpenClassrooms className="icon cert-icon" />
                            </CustomTooltip>
                            <CustomTooltip title="Voir la certification">
                                <div className="certification-text">Créez une application Java avec Spring</div>
                            </CustomTooltip>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation translateX={0} translateY={100} speed="0.6s">
                    <div className="certification-item">
                        <Line/>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
                    <div className="certification-item">
                        <CustomTooltip title="Master diplôme d'ingénieur">
                            <Diplome className="icon cert-icon" />
                        </CustomTooltip>
                        <div className="certification-content" onClick={() => window.open(diplome)}>
                            <CustomTooltip title="ESIEA">
                                <Esiea className="icon cert-icon" />
                            </CustomTooltip>
                            <CustomTooltip title="Voir le diplôme">
                                <div className="certification-text">Master ingénieur en informatique ESIEA</div>
                            </CustomTooltip>
                        </div>
                    </div>
                </ScrollAnimation>

            </div>
        </ScrollAnimation>
    );
};

export default Certifications;
