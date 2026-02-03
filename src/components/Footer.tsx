import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="mailto:magazyahya3@gmail.com" title="Email">
            <EmailIcon/>
          </a>
        </div>
        <p className="copyright">
          © 2026 - MAGAZ Yahya | Développeur Full-Stack
        </p>
        <p className="footer-note">
          Site réalisé avec React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;