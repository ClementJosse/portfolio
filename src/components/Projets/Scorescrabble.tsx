import React, { useState } from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/scorescrabble.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';
import { ReactComponent as VueJS } from '../../assets/techno/Vue.svg';
import { ReactComponent as Capacitor } from '../../assets/techno/Capacitor.svg';
import { ReactComponent as AndroidStudio } from '../../assets/techno/AndroidStudio.svg';

const Scorescrabble = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="Scorescrabble Project"
                        className={`gif-projet `}
                        onClick={() => window.open("https://github.com/ClementJosse/score-scrabble")}
                    />
                </CustomTooltip>
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2023</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Score Scrabble</h1>
                </div>
                <div className='description-projet'>
                    <h1>Dev <YBoldText text="mutliplateformes"/> Web/mobile.</h1> 
                    <h1>Création d'un <YBoldText text="dashboard"/> des scores.</h1> 
                    <h1>Stockage data dans le <YBoldText text="Local storage"/>.</h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Figma">
                      <Figma className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="VueJS">
                      <VueJS className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Firebase">
                      <Capacitor className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Android Studio">
                      <AndroidStudio className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Scorescrabble;
