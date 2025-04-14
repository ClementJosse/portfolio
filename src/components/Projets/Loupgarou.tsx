import React from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/loupsgarous.gif';  // Changement de l'import pour un GIF
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as VueJS } from '../../assets/techno/Vue.svg';
import { ReactComponent as Firebase } from '../../assets/techno/Firebase.svg';
import { ReactComponent as Vite } from '../../assets/techno/Vite.svg';
import { ReactComponent as Tailwind } from '../../assets/techno/Tailwind.svg';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';

const Loupgarou = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="Loups-garous sans cartes"
                        className={`gif-projet `}
                        onClick={() => window.open("https://github.com/ClementJosse/loupsgarous")}
                    />
                </CustomTooltip>
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2025</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Loups-garous sans cartes</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Design" /> de l'interface, <YBoldText text="UI/UX" /> & <YBoldText text="dev" />.</h1>
                    <h1><YBoldText text="Multijoueurs en ligne" /> en <YBoldText text="temps réel" />.</h1>
                    <h1><YBoldText text="Distribution des cartes" /> et des pouvoirs.</h1>
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

export default Loupgarou;
