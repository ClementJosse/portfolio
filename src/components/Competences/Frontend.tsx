import React from 'react';
import { ReactComponent as Figma } from '../../assets/techno/Figma.svg';
import { ReactComponent as CorelVector } from '../../assets/techno/CorelVector.svg';
import { ReactComponent as JavaScript } from '../../assets/techno/JavaScript.svg';
import { ReactComponent as TypeScript } from '../../assets/techno/TypeScript.svg';
import { ReactComponent as Reactlogo } from '../../assets/techno/React.svg';
import { ReactComponent as Angular } from '../../assets/techno/Angular.svg';
import { ReactComponent as VueJS } from '../../assets/techno/Vue.svg';
import { ReactComponent as Tailwind } from '../../assets/techno/Tailwind.svg';
import { ReactComponent as NodeJS } from '../../assets/techno/NodeJS.svg';
import { ReactComponent as Expo } from '../../assets/techno/Expo.svg';
import CustomTooltip from '../CustomTooltip.tsx';

const Frontend = () => {
    return (
        <div className="competence-box frontend">
            <h1>Design & Frontend</h1>
            <div className='techno-competences'>
                <CustomTooltip title="Figma">
                  <Figma className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Corel Vector">
                  <CorelVector className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="JavaScript">
                  <JavaScript className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="TypeScript">
                  <TypeScript className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="ReactJS">
                  <Reactlogo className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Tailwind">
                  <Tailwind className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Expo">
                  <Expo className="icon"/>
                </CustomTooltip>
            </div>
        </div>
    );
};

export default Frontend;
