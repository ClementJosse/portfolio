import React from 'react';
import "./Projets.css";
import imageProjet from '../../assets/projets/autres.png';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';

const Autres = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <img src={imageProjet} alt="Image du projet" />
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
