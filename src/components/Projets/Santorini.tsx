import React from 'react';
import "./Projets.css";
import imageProjet from '../../assets/projets/santorini.png';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Reacticon } from '../../assets/techno/React.svg';
import { ReactComponent as Firebase } from '../../assets/techno/Firebase.svg';
import { ReactComponent as NodeJS } from '../../assets/techno/NodeJS.svg';
import { ReactComponent as Expo } from '../../assets/techno/Expo.svg';

const Santorini = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <img src={imageProjet} alt="Image du projet" />
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2023</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Jeu mobile Santorini</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Recréation"/> du boardgame Santorini,</h1> 
                    <h1><YBoldText text="développement"/> d’un système de</h1> 
                    <h1><YBoldText text="multijoueur"/> en ligne en <YBoldText text="temps réel"/></h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="React Native">
                      <Reacticon className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Firebase">
                      <Firebase className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="NodeJS">
                      <NodeJS className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Expo">
                      <Expo className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Santorini;
