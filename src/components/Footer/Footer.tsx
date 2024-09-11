import React, { useState, ReactElement } from 'react';
import CustomTooltip from '../CustomTooltip.tsx';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as CvIcon } from '../../assets/cv.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import cvPdf from '../../assets/CV - Clément Josse.pdf';
import './Footer.css'

const Footer = () => {
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
    <div>
        <div className="footer-SocialIcons">
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
                onMouseLeave={handleMouseLeave}
            >
                <EmailIcon onClick={copyToClipboard} className="icon" />
            </CustomTooltip>
        </div>
        <h1>© 2024 · Site créé avec ❤️ par Clément Josse</h1>
    </div>
  );
}

export default Footer;