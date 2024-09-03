import React, { useState } from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/autres.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';

const Autres = () => {
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
                    onClick={() => window.open("https://github.com/ClementJosse")}
                    alt="Image du projet"
                />
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
