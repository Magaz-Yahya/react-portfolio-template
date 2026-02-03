import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import photoProfil from '../assets/images/photo-profil.jpg';

function Main() {

  return (
    <div className="container" id="accueil">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={photoProfil} alt="Yahya MAGAZ" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:magazyahya3@gmail.com" title="M'envoyer un email"><EmailIcon/></a>
            <a href="https://github.com/Magaz-Yahya" target="_blank" rel="noopener noreferrer" title="Mon GitHub"><GitHubIcon/></a>
          </div>
          <h1>Yahya MAGAZ</h1>
          <p className="role">Développeur Full-Stack | Alternant chez Agileo Automation</p>
          <p className="intro">
            Étudiant en 3ème année de BUT Informatique à l'IUT de Blagnac, je suis actuellement 
            en alternance chez Agileo Automation. Passionné par la <strong>gestion de projet</strong> depuis 
            ma 2ème année, je souhaite me spécialiser dans ce domaine tout en consolidant 
            mes compétences techniques en développement.
          </p>
          <div className="cta-buttons">
            <a href="#projets" className="btn-primary">Voir mes projets</a>
            <a href="#bilan" className="btn-secondary">Mon évolution</a>
            <a href="/react-portfolio-template/Yahya_MAGAZ_CV.pdf" download className="btn-secondary">Télécharger CV</a>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:magazyahya3@gmail.com"><EmailIcon/></a>
            <a href="https://github.com/Magaz-Yahya" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;