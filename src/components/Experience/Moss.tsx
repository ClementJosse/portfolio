import React from 'react';
import imgLysoft from '../../assets/Moss.png';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Maven } from '../../assets/techno/Maven.svg';
import { ReactComponent as IntelliJ } from '../../assets/techno/IntelliJ.svg';
import { ReactComponent as Bash } from '../../assets/techno/Bash.svg';
import { ReactComponent as Elasticsearch } from '../../assets/techno/Elasticsearch.svg';
import { ReactComponent as Swagger } from '../../assets/techno/Swagger.svg';
import { ReactComponent as Postman } from '../../assets/techno/Postman.svg';
import { ReactComponent as Jenkins } from '../../assets/techno/Jenkins.svg';
import { ReactComponent as Git } from '../../assets/techno/Git.svg';
import { ReactComponent as Jira } from '../../assets/techno/Jira.svg';
import CustomTooltip from '../CustomTooltip.tsx';
import "../SectionTitle.css";
import "./Experience.css"

const Moss = () => {
    return (
        <div className='experience'>
            <div className='texte-image'>
                <div className='texte-experience'>
                    <div className="date-entreprise">
                        <h1>2023 - MOSS - domaine de l'aérospatial 🛰️</h1>
                    </div>
                    <div className="poste">
                        <h1>Stagiaire Développeur Java Elasticsearch</h1>
                    </div>
                    <div className="lieu">
                        <h1>Issy-les-Moulineaux, Paris 🇫🇷</h1>
                    </div>
                    <div className="experience-bulletpoints">
                        <h1>Écriture d’un outil de génération du mapping d’Elasticsearch</h1>
                        <h1>Automatisation de scripts via le Build Lifecycle de Maven</h1>
                        <h1>Simulations comparatives de requêtes API</h1>
                        <h1>Paramétrage de piplines de build du projet</h1>
                        <h1>Prise en charge de tickets Jira</h1>
                        <h1>Gestion de projet Agile Scrum</h1>
                    </div>
                </div>
                <div className="image-entreprise">
                    <img src={imgLysoft} alt="Image de l'entreprise" />
                </div>
            </div>
            <div className='technos'>
            <CustomTooltip title="Java">
                  <Java className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Maven">
                  <Maven className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="IntelliJ">
                  <IntelliJ className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Bash">
                  <Bash className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Git">
                  <Git className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Elasticsearch">
                  <Elasticsearch className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Swagger">
                  <Swagger className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Postman">
                  <Postman className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Jenkins">
                  <Jenkins className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Jira">
                  <Jira className="icon"/>
                </CustomTooltip>
            </div>
        </div>
    );
};

export default Moss;
