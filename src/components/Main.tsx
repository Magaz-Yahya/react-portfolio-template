import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="accueil">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="mailto:magazyahya3@gmail.com" title="M'envoyer un email"><EmailIcon/></a>
          </div>
          <h1>Yahya MAGAZ</h1>
          <p className="role">Développeur Full-Stack | Alternant</p>
          <p className="intro">
            Étudiant en BUT 3 Informatique à l'IUT de Blagnac, je suis en alternance 
            chez Agileo Automation. Passionné par la gestion de projet depuis ma 2ème année, 
            je souhaite me spécialiser dans ce domaine tout en développant mes compétences techniques.
          </p>
          <div className="cta-buttons">
            <a href="#projets" className="btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn-secondary">Me contacter</a>
            <a href="/Yahya_MAGAZ_CV.pdf" download className="btn-secondary">Télécharger CV</a>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:magazyahya3@gmail.com"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;