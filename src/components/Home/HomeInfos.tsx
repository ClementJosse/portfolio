import React, { useState, ReactElement } from 'react';
import CustomTooltip from '../CustomTooltip.tsx';
import profilePicture from '../../assets/profile_picture.png';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as CvIcon } from '../../assets/cv.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import cvPdf from '../../assets/CV - Clément Josse.pdf';
import "./HomeInfos.css"
import ScrollAnimation from '../ScrollAnimation.tsx';

export default function Canvas(): ReactElement {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("clement.b.josse@gmail.com")
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => {
          setEmailCopied(false);
        }, 1000); // 1 seconde avant de réinitialiser le message
      })
      .catch((err) => {
        console.error("Erreur lors de la copie dans le presse-papier : ", err);
      });
  };

  const handleMouseLeave = () => {
    setEmailCopied(false); // Réinitialiser le tooltip quand la souris quitte l'élément
  };

  return (
    <div className="HomeInfos">
      <div className="Split">
        <div className="ProfilePicture">
          <ScrollAnimation translateX={0} translateY={150} speed="0.5s">
          <img src={profilePicture} alt="Profile" className="profile-img" />
          </ScrollAnimation>
        </div>
        <div className="TextInfos">
          <ScrollAnimation translateX={0} translateY={100} speed="0.3s">
            <h1 className="salut">Salut, je suis</h1>
          </ScrollAnimation>
          <ScrollAnimation translateX={0} translateY={100} speed="0.5s">
            <h1 className="clement">Clément Josse</h1>
          </ScrollAnimation>
          
          <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
            <h1 className="developpeur">Développeur Fullstack</h1>
          </ScrollAnimation>

          <ScrollAnimation translateX={0} translateY={100} speed="0.9s">
            <div className="construis">
              <h1>Je construis des applications</h1>
              <h1>avec <span className="precision">précision</span> et <span className="passion">passion</span> 🔥</h1>
            </div>
          </ScrollAnimation>

          <div className="SocialIcons">
            <ScrollAnimation translateX={0} translateY={100} speed="0.7s">
              <CustomTooltip title="Mon LinkedIn">
                <LinkedinIcon onClick={() => window.open("https://www.linkedin.com/in/clement-josse")} className="icon" />
              </CustomTooltip>
              </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="0.9s">
              <CustomTooltip title="Mon GitHub">
                <GithubIcon onClick={() => window.open("https://github.com/ClementJosse")} className="icon" />
              </CustomTooltip>
            </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="1.1s">
              <CustomTooltip title="Mon CV">
                <CvIcon onClick={() => window.open(cvPdf)} className="icon" />
              </CustomTooltip>
              </ScrollAnimation>

            <ScrollAnimation translateX={0} translateY={100} speed="1.3s">
              <CustomTooltip
                title={emailCopied ? "Email copié!" : "Copier mon Email"}
                onMouseLeave={handleMouseLeave}
              >
                <EmailIcon onClick={copyToClipboard} className="icon" />
              </CustomTooltip>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
