import React from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/links.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';
import { ReactComponent as VueJS } from '../../assets/techno/Vue.svg';
import { ReactComponent as Firebase } from '../../assets/techno/Firebase.svg';
import { ReactComponent as Vite } from '../../assets/techno/Vite.svg';
import { ReactComponent as Tailwind } from '../../assets/techno/Tailwind.svg';

const Links = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="Linktree clone"
                        className={`gif-projet `}
                        onClick={() => window.open("https://github.com/ClementJosse/links")}
                    />
                </CustomTooltip>
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2025</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Linktree clone</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Redirection" /> vers mes projets</h1>
                    <h1>actuellement disponibles <YBoldText text="en ligne" />.</h1>
                    <h1>Ajout d'un <YBoldText text="compteur de visite" /> global.</h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Figma">
                        <Figma className="icon" />
                    </CustomTooltip>
                    <CustomTooltip title="VueJS">
                        <VueJS className="icon" />
                    </CustomTooltip>
                    <CustomTooltip title="Vite">
                        <Vite className="icon" />
                    </CustomTooltip>
                    <CustomTooltip title="Tailwind">
                        <Tailwind className="icon" />
                    </CustomTooltip>
                    <CustomTooltip title="Firebase">
                        <Firebase className="icon" />
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Links;
