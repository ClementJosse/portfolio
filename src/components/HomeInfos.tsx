import React, { ReactElement } from 'react';
import profilePicture from '../assets/profile_picture.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import cv from '../assets/cv.svg';
import email from '../assets/email.svg';
import "./HomeInfos.css"

export default function Canvas(): ReactElement {
  return (
    <div className="HomeInfos">
        <div className="Split">
            <div className="ProfilePicture">
                <img src={profilePicture} alt="Profile" style={{ width: '350px', height: 'auto', borderRadius: '50%' }} />
            </div>
            <div className="TextInfos">
                <h1 className="salut">Salut, je suis</h1>
                <h1 className="clement">Clément Josse</h1>
                <h1 className="developpeur">Développeur Full-Stack</h1>
                <h1 className="construis">Je construis des applications</h1>
                <div className="avec">
                    <h1>avec</h1>
                    <h1 className="precision">précision</h1>
                    <h1>et</h1>
                    <h1 className="passion">passion</h1>
                    <h1>🔥</h1>
                </div>
                <div className="SocialIcons">
                    <img src={linkedin} alt="LinkedIn" className="icon" />
                    <img src={github} alt="GitHub" className="icon" />
                    <img src={cv} alt="CV" className="icon" />
                    <img src={email} alt="Email" className="icon" />
                </div>
            </div>
        </div>
    </div>
  );
}
