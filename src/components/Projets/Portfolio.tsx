import React from 'react';
import "./Projets.css";
import imageProjet from '../../assets/projets/portfolio.png';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';
import { ReactComponent as TypeScript } from '../../assets/techno/TypeScript.svg';
import { ReactComponent as Reactlogo } from '../../assets/techno/React.svg';
import { ReactComponent as Tailwind } from '../../assets/techno/Tailwind.svg';
import { ReactComponent as Hostinger } from '../../assets/techno/Hostinger.svg';

const Portfolio = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <img src={imageProjet} alt="Image du projet" />
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2024</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Site portfolio</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Design"/> et <YBoldText text="maquettage"/> du site,</h1> 
                    <h1><YBoldText text="développement"/> et <YBoldText text="implémentation"/> </h1> 
                    <h1>technique, <YBoldText text="hébergement"/> en ligne</h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Figma">
                      <Figma className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="TypeScript">
                      <TypeScript className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="React">
                      <Reactlogo className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Tailwind">
                      <Tailwind className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Hostinger">
                      <Hostinger className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
