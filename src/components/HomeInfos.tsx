import React, { ReactElement } from 'react';
import profilePicture from '../assets/profile_picture.png';
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as CvIcon } from '../assets/cv.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';
import cvPdf from '../assets/CV - Clément Josse.pdf';
import "./HomeInfos.css"

export default function Canvas(): ReactElement {

    const copyToClipboard = () => {
        navigator.clipboard.writeText("clement.b.josse@gmail.com")
          .then(() => {
            alert("Adresse email copiée dans le presse-papier !");
          })
          .catch((err) => {
            console.error("Erreur lors de la copie dans le presse-papier : ", err);
          });
      };

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
                <div className="construis">
                    <h1>Je construis des applications</h1>
                    <h1>avec <span className="precision">précision</span> et <span className="passion">passion</span> 🔥</h1>
                </div>
            
                <div className="SocialIcons">
                    <LinkedinIcon onClick={() => window.open("https://www.linkedin.com/in/clement-josse")} alt="LinkedIn" className="icon" />
                    <GithubIcon onClick={() => window.open("https://github.com/ClementJosse")} alt="GitHub" className="icon" />
                    <CvIcon onClick={() => window.open(cvPdf)} alt="CV" className="icon" />
                    <EmailIcon onClick={copyToClipboard} alt="Email" className="icon" />
                </div>
            </div>
        </div>
    </div>
  );
}
