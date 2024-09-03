import React, { useState } from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/velib.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as MySQL } from '../../assets/techno/MySQL.svg';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as Docker } from '../../assets/techno/Docker.svg';

const Velib = () => {
    const [gifSrc, setGifSrc] = useState(gifProjet);

    const handleMouseEnter = () => {
        setGifSrc('');  // Réinitialise la source pour "rejouer" le GIF
        setTimeout(() => {
            setGifSrc(gifProjet);  // Remet la source du GIF après un court délai
        }, 0);
    };

    const handleMouseLeave = () => {
        setGifSrc(gifProjet);  // Réinitialise la source si besoin
    };

    return (
        <div className="project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='image-projet'>
                <img
                    src={gifSrc}
                    alt="Velib Project"
                    className={`gif-projet ${gifSrc ? 'hovered' : ''}`}
                    onClick={() => window.open("https://github.com/ClementJosse/Velib")}
                />
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2024</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Velib Dashboard Web</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Automatisation"/> de <YBoldText text="requêtes"/> à <YBoldText text="l’API"/></h1> 
                    <h1>Vélib, <YBoldText text="affichage"/> des données dans</h1> 
                    <h1>l'<YBoldText text="interface web"/> et <YBoldText text="conteneurisation"/></h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Python">
                      <Python className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Docker">
                      <Docker className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Velib;
