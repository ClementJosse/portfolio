import React from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/dicoscrabble.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as Reacticon } from '../../assets/techno/React.svg';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';

const Dicoscrabble = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="Dico Scrabble Project"
                        className={`gif-projet `}
                        onClick={() => window.open("https://github.com/ClementJosse/dico-scrabble")}
                    />
                </CustomTooltip>
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2024</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Dico Scrabble</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Scrapping"/> des mots & définitions.</h1> 
                    <h1>Dev d’une <YBoldText text="interface réactive"/>.</h1> 
                    <h1><YBoldText text="Moteur de recherche"/> en <YBoldText text="temps réel"/>.</h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Python">
                      <Python className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Figma">
                      <Figma className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="React">
                      <Reacticon className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Dicoscrabble;
