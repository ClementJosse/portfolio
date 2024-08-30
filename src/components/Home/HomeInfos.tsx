import React, { useState, ReactElement } from 'react';
import CustomTooltip from '../CustomTooltip.tsx';
import profilePicture from '../../assets/profile_picture.png';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as CvIcon } from '../../assets/cv.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import cvPdf from '../../assets/CV - Clément Josse.pdf';
import "./HomeInfos.css"

export default function Canvas(): ReactElement {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("clement.b.josse@gmail.com")
      .then(() => {
        setEmailCopied(true);
        // Réinitialiser le message après un délai
        setTimeout(() => {
          setEmailCopied(false);
        }, 1000); // 2 secondes avant de réinitialiser le message
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
          <img src={profilePicture} alt="Profile" style={{ width: '450px', height: 'auto', borderRadius: '50%' }} />
        </div>
        <div className="TextInfos">
          <h1 className="salut">Salut, je suis</h1>
          <h1 className="clement">Clément Josse</h1>
          <h1 className="developpeur">Développeur Full-Stack</h1>
          <div className="construis">
            <h1>Je construis des applications</h1>
            <h1>avec <span className="precision">précision</span> et <span className="passion">passion</span> 🔥</h1>
          </div>

          <div className="SocialIcons">
            <CustomTooltip title="Mon LinkedIn">
              <LinkedinIcon onClick={() => window.open("https://www.linkedin.com/in/clement-josse")} className="icon" />
            </CustomTooltip>
            <CustomTooltip title="Mon GitHub">
              <GithubIcon onClick={() => window.open("https://github.com/ClementJosse")} className="icon" />
            </CustomTooltip>
            <CustomTooltip title="Mon CV">
              <CvIcon onClick={() => window.open(cvPdf)} className="icon" />
            </CustomTooltip>
            <CustomTooltip
              title={emailCopied ? "Email copié!" : "Copier mon Email"}
              onMouseLeave={handleMouseLeave} // Réinitialiser après hover
            >
              <EmailIcon onClick={copyToClipboard} className="icon" />
            </CustomTooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
