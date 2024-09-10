import React from 'react';
import imgLysoft from '../../assets/Lysoft.png';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Maven } from '../../assets/techno/Maven.svg';
import { ReactComponent as SonarQube } from '../../assets/techno/SonarQube.svg';
import { ReactComponent as IntelliJ } from '../../assets/techno/IntelliJ.svg';
import { ReactComponent as VSCode } from '../../assets/techno/VSCode.svg';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as Bash } from '../../assets/techno/Bash.svg';
import { ReactComponent as Git } from '../../assets/techno/Git.svg';
import CustomTooltip from '../CustomTooltip.tsx';
import YBoldText from '../YBoldText.tsx';
import "../SectionTitle.css";
import "./Experience.css"

const Lysoft = () => {
    return (
      <div className='experience'>
        <div className='texte-image'>
              <div className="image-entreprise">
                <CustomTooltip title="Voir le site de l'entreprise">
                  <img src={imgLysoft} alt="Image de l'entreprise" onClick={() => window.open("https://lysoft.ch/")}/>
                </CustomTooltip>
              </div> 
          <div className='texte-experience'>
              <div className="date-entreprise">
                <h1>2024 - Lysoft SA - domaine des laboratoires médicaux 🧪</h1>
              </div>
              <div className="poste">
                <h1>Stagiaire Développeur Java</h1>
              </div>
              <div className="lieu">
                <h1>Plan-les-Ouates, Genève 🇨🇭</h1>
              </div>
              <div className="experience-bulletpoints">
                <h1>• Création d’un outil de traduction avec un <YBoldText text="Scanner"/> et un <YBoldText text="Parser"/></h1>
                <h1>• Utilisation de <YBoldText text="linters"/> pour améliorer la <YBoldText text="qualité"/> du code</h1>
                <h1>• <YBoldText text="Amélioration"/> de la <YBoldText text="vitesse"/> de génération des fichiers source</h1>
                <h1>• Utilisation d'outils de <YBoldText text="Data Visualization"/> pour la prise de décision</h1>
                <h1>• Application de la norme <YBoldText text="Conventional Commits"/> pour les commits</h1>
                <h1>• Utilisation approfondie du <YBoldText text="débugger"/> sur IntelliJ </h1>
                <h1>• Écriture de <YBoldText text="tests unitaires"/> et de tests de <YBoldText text="non-régression"/></h1>
              </div>
            </div>
        </div>
        <div className='technos'>
          <div className='row'>
            <CustomTooltip title="Java">
              <Java className="icon" />
            </CustomTooltip>
            <CustomTooltip title="Maven">
              <Maven className="icon" />
            </CustomTooltip>
            <CustomTooltip title="SonarQube">
              <SonarQube className="icon" />
            </CustomTooltip>
            <CustomTooltip title="IntelliJ">
              <IntelliJ className="icon" />
            </CustomTooltip>
            <CustomTooltip title="VSCode">
              <VSCode className="icon" />
            </CustomTooltip>
          </div>
          <div className='row'>
            <CustomTooltip title="Python">
              <Python className="icon" />
            </CustomTooltip>
            <CustomTooltip title="Bash">
              <Bash className="icon" />
            </CustomTooltip>
            <CustomTooltip title="Git">
              <Git className="icon" />
            </CustomTooltip>
          </div>
        </div>
      </div>
    );
};

export default Lysoft;
