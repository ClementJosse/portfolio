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
import "../SectionTitle.css";
import "./Experience.css"

const Lysoft = () => {
    return (
        <div className='experience'>
            <div className='texte-image'>
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
                        <h1>• Création d’un outil de traduction avec un Scanner et un Parseur</h1>
                        <h1>• Utilisation de linters pour améliorer la qualité du code</h1>
                        <h1>• Utilisation approfondie du débogueur sur IntelliJ</h1>
                        <h1>• Écriture de scripts automatisant la compilation du projet</h1>
                        <h1>• Amélioration de la vitesse de génération des fichiers source</h1>
                        <h1>• Visualisation dans une interface web des données du projet</h1>
                        <h1>• Écriture de tests unitaires et de tests de non-régression</h1>
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
                <CustomTooltip title="SonarQube">
                  <SonarQube className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="IntelliJ">
                  <IntelliJ className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="VSCode">
                  <VSCode className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Python">
                  <Python className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Bash">
                  <Bash className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Git">
                  <Git className="icon"/>
                </CustomTooltip>
            </div>
        </div>
    );
};

export default Lysoft;
