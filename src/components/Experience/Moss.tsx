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
import YBoldText from '../YBoldText.tsx';
import ScrollAnimation from '../ScrollAnimation.tsx';
import "../SectionTitle.css";
import "./Experience.css"

const Moss = () => {
    return (
      <div className='experience'>
        <div className='texte-image'>
            <div className="image-entreprise">
          <ScrollAnimation translateX={40} translateY={0} speed="0.3s">
              <CustomTooltip title="Voir le site de l'entreprise">
                <img src={imgLysoft} alt="Image de l'entreprise" onClick={() => window.open("https://www.moss.fr/")}/>
              </CustomTooltip>
            </ScrollAnimation>

            </div>
          <div className='texte-experience'>
            <ScrollAnimation translateX={-100} translateY={0} speed="0.2s">
              <div className="date-entreprise">
                <h1>2023 - MOSS - domaine de l'aérospatial 🛰️</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation translateX={-100} translateY={0} speed="0.25s">
              <div className="poste">
                <h1>Stagiaire Développeur Java Elasticsearch</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation translateX={-100} translateY={0} speed="0.3s">
              <div className="lieu">
                <h1>Issy-les-Moulineaux, Paris 🇫🇷</h1>
              </div>
            </ScrollAnimation>
            <div className="experience-bulletpoints">
              <ScrollAnimation translateX={-100} translateY={0} speed="0.2s">
                <h1>• Écriture d’un outil de génération du <YBoldText text="mapping"/> d’Elasticsearch</h1>
              </ScrollAnimation>
              <ScrollAnimation translateX={-100} translateY={0} speed="0.25s">
                <h1>• Automatisation de scripts via le <YBoldText text="Build Lifecycle"/> de Maven</h1>
              </ScrollAnimation>
              <ScrollAnimation translateX={-100} translateY={0} speed="0.3s">
                <h1>• <YBoldText text="Simulations"/> comparatives de <YBoldText text="requêtes API"/></h1>
              </ScrollAnimation>
              <ScrollAnimation translateX={-100} translateY={0} speed="0.35s">
                <h1>• Paramétrage de <YBoldText text="piplines"/> de build du projet</h1>
              </ScrollAnimation>
              <ScrollAnimation translateX={-100} translateY={0} speed="0.4s">
                <h1>• Prise en charge de <YBoldText text="tickets"/> Jira</h1>
              </ScrollAnimation>
              <ScrollAnimation translateX={-100} translateY={0} speed="0.45s">
                <h1>• Participation active aux réunions de gestion de projet <YBoldText text="Scrum"/></h1>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className='technos'>
          <div className='row'>
            <ScrollAnimation translateX={0} translateY={100} speed="0.2s">
              <CustomTooltip title="Java">
                <Java className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
              <CustomTooltip title="Maven">
                <Maven className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.4s">
              <CustomTooltip title="IntelliJ">
                <IntelliJ className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
              <CustomTooltip title="Bash">
                <Bash className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.6s">
              <CustomTooltip title="Git">
                <Git className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

          </div>
          <div className='row'>
            <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
              <CustomTooltip title="Elasticsearch">
                <Elasticsearch className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.8s">
              <CustomTooltip title="Swagger">
                <Swagger className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>
            
            <ScrollAnimation translateX={0} translateY={100} speed="0.9s">
              <CustomTooltip title="Postman">
                <Postman className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="1s">
              <CustomTooltip title="Jenkins">
                <Jenkins className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="1.1s">
              <CustomTooltip title="Jira">
                <Jira className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
};

export default Moss;
