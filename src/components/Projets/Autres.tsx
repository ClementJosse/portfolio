import React, { useState } from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/autres.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';

const Autres = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir d'autres projets sur GitHub">
                    <img
                        src={gifProjet}
                        onClick={() => window.open("https://github.com/ClementJosse")}
                        alt="Image du projet"
                    />
                </CustomTooltip>
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1> </h1>
                </div>
                <div className='titre-projet'>
                    <h1>Voir d'autres projets</h1>
                </div>
                <div className='dots'>
                    <h1>• • •</h1>
                </div>

            </div>
        </div>
    );
};

export default Autres;
