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
    return (
        <div className="project-card">
            <div className='image-projet'>
                <CustomTooltip title="Voir le projet sur GitHub">
                    <img
                        src={gifProjet}
                        alt="Velib Project"
                        className={`gif-projet`}
                        onClick={() => window.open("https://github.com/ClementJosse/Velib")}
                    />
                </CustomTooltip>
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
