import React, { useRef, useState } from 'react';
import "./Projets.css";
import videoProjet from '../../assets/projets/checkfumi.mp4';
import YBoldText from '../YBoldText.tsx';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as AndroidStudio } from '../../assets/techno/AndroidStudio.svg';
import { ReactComponent as PlayStore } from '../../assets/techno/PlayStore.svg';

const Checkfumi = () => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div className="project-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className='image-projet'>
                <video
                    ref={videoRef}
                    src={videoProjet}
                    className={`video-projet ${isHovered ? 'hovered' : ''}`}
                    muted
                    loop
                    preload="metadata"
                    onClick={() => window.open("https://github.com/ClementJosse/Checkfumi")}
                />
            </div>
            <div className='texte-projet'>
                <div className='date-projet'>
                    <h1>2022</h1>
                </div>
                <div className='titre-projet'>
                    <h1>Jeu mobile Checkfumi</h1>
                </div>
                <div className='description-projet'>
                    <h1><YBoldText text="Création du jeu"/> et ses règles, <YBoldText text="design"/></h1> 
                    <h1>et <YBoldText text="développement"/>, <YBoldText text="multijoueur"/></h1> 
                    <h1>local, <YBoldText text="publication"/> sur le Play Store</h1>
                </div>
                <div className='techno-projet'>
                    <CustomTooltip title="Java">
                      <Java className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Android Studio">
                      <AndroidStudio className="icon"/>
                    </CustomTooltip>
                    <CustomTooltip title="Play Store">
                      <PlayStore className="icon"/>
                    </CustomTooltip>
                </div>
            </div>
        </div>
    );
};

export default Checkfumi;
