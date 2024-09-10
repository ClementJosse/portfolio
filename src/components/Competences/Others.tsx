import React from 'react';
import { ReactComponent as Git } from '../../assets/techno/Git.svg';
import { ReactComponent as NetworkX } from '../../assets/techno/NetworkX.svg';
import { ReactComponent as Docker } from '../../assets/techno/Docker.svg';
import { ReactComponent as Jenkins } from '../../assets/techno/Jenkins.svg';
import { ReactComponent as AndroidStudio } from '../../assets/techno/AndroidStudio.svg';
import { ReactComponent as VSCode } from '../../assets/techno/VSCode.svg';
import { ReactComponent as IntelliJ } from '../../assets/techno/IntelliJ.svg';
import { ReactComponent as NodeJS } from '../../assets/techno/NodeJS.svg';
import { ReactComponent as Jira } from '../../assets/techno/Jira.svg';
import CustomTooltip from '../CustomTooltip.tsx';

const Others = () => {
    return (
        <div className="competence-box others">
            <h1>Autres Technologies/Logiciels</h1>
            <div className='techno-competences'>
                <CustomTooltip title="Git">
                  <Git className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Docker">
                  <Docker className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Jenkins">
                  <Jenkins className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="NodeJS">
                  <NodeJS className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Android Studio">
                  <AndroidStudio className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="VSCode">
                  <VSCode className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="IntelliJ">
                  <IntelliJ className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Jira">
                  <Jira className="icon"/>
                </CustomTooltip>
            </div>
        </div>
    );
};

export default Others;
