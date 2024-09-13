import React from 'react';
import ScrollAnimation from '../ScrollAnimation.tsx';
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
      <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
        <div className="competence-box others">
          <h1>Autres Technologies/Logiciels</h1>
          <div className='techno-competences'>
            <ScrollAnimation translateX={0} translateY={100} speed="0.35s">
              <CustomTooltip title="Git">
                <Git className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>
            
            <ScrollAnimation translateX={0} translateY={100} speed="0.4s">
              <CustomTooltip title="Docker">
                <Docker className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>
            
            <ScrollAnimation translateX={0} translateY={100} speed="0.45s">
              <CustomTooltip title="Jenkins">
                <Jenkins className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
              <CustomTooltip title="NodeJS">
                <NodeJS className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.55s">
              <CustomTooltip title="Android Studio">
                <AndroidStudio className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.6s">
              <CustomTooltip title="VSCode">
                <VSCode className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.65s">
              <CustomTooltip title="IntelliJ">
                <IntelliJ className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
              <CustomTooltip title="Jira">
                <Jira className="icon"/>
              </CustomTooltip>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    );
};

export default Others;
