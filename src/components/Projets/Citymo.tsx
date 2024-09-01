import React from 'react';
import "./Projets.css";
import imageProjet from '../../assets/projets/citymo.png';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as MySQL } from '../../assets/techno/MySQL.svg';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as Docker } from '../../assets/techno/Docker.svg';

const Citymo = () => {
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
                    <h1>Site Immobilier</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Scrapping"/> de données, Création de la</h1> 
                    <h1><YBoldText text="base de donnée"/>, création d’une <YBoldText text="API"/> </h1> 
                    <h1>pour le <YBoldText text="back end"/> et <YBoldText text="conteneurisation"/></h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Python">
                      <Python className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="MySQL">
                      <MySQL className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Java">
                      <Java className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Spring">
                      <Spring className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Docker">
                      <Docker className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Citymo;
