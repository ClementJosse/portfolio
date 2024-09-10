import React from 'react';
import "./Projets.css";
import gifProjet from '../../assets/projets/portfolio.gif';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';
import { ReactComponent as NodeJS } from '../../assets/techno/NodeJS.svg';
import { ReactComponent as Reactlogo } from '../../assets/techno/React.svg';
import { ReactComponent as Hostinger } from '../../assets/techno/Hostinger.svg';

const Portfolio = () => {
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="portfolio Project"
                        className={`gif-projet`}
                        onClick={() => window.open("https://github.com/ClementJosse/portfolio")}
                    />
                </CustomTooltip>
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
                    <h1><YBoldText text="développement"/> web <YBoldText text="responsive"/>,</h1> 
                    <h1><YBoldText text="hébergement"/> du site en ligne     </h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Figma">
                      <Figma className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="NodeJS">
                      <NodeJS className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="React">
                      <Reactlogo className="icon"/>
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
