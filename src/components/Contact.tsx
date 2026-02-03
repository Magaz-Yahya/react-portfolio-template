import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      alert('Message envoyé ! Je vous répondrai rapidement.');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        {/* Section CV */}
        <div className="cv-section" id="cv">
          <h1>Mon CV</h1>
          <p>Téléchargez mon CV pour découvrir mon parcours complet.</p>
          <div className="cv-buttons">
            <a href="/Yahya_MAGAZ_CV.pdf" download className="cv-download-btn">
              <DownloadIcon /> Télécharger mon CV (PDF)
            </a>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="contact_wrapper">
          <h1>Me Contacter</h1>
          <p>Vous pouvez me joindre à <strong>magazyahya3@gmail.com</strong> ou via le formulaire ci-dessous.</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Votre Nom"
                placeholder="Comment vous appelez-vous ?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Veuillez entrer votre nom" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Téléphone"
                placeholder="Comment puis-je vous joindre ?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Veuillez entrer un moyen de contact" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Votre Message"
              placeholder="Décrivez votre projet ou votre demande..."
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Veuillez entrer votre message" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Envoyer
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;