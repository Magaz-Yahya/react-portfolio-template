import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:magazyahya3@gmail.com" title="Email">
            <EmailIcon/>
          </a>
          <a href="https://github.com/Magaz-Yahya" target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitHubIcon/>
          </a>
        </div>
        <p className="github-repo">
          <a href="https://github.com/Magaz-Yahya/react-portfolio-template" target="_blank" rel="noopener noreferrer">
            Voir le code source sur GitHub
          </a>
        </p>
        <p className="copyright">
          © 2026 - Yahya MAGAZ | Développeur Full-Stack
        </p>
        <p className="footer-note">
          Site réalisé avec React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;