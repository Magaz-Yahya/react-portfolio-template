import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad, faUsers, faLightbulb, faDatabase, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Technologies Web
const techWeb = [
    "HTML", "CSS", "PHP", "Symfony", "Python", "Django", "Vue.js", "Angular"
];

// Technologies Jeux Vidéo
const techJeux = [
    "Godot Engine", "GDScript", "C#", "Game Design"
];

// Outils & Méthodologies
const techOutils = [
    "Git", "GitHub", "VS Code", "TDD", "Méthode Agile"
];

// Langages de programmation
const langages = [
    "Python", "Java", "C#", "PHP", "SQL", "GDScript"
];

function Expertise() {
    return (
    <div className="container" id="competences">
        <div className="skills-container">
            <h1>Mes Compétences</h1>
            <p className="section-intro">
                Compétences acquises au cours de ma formation et de mon alternance. 
                Ma passion pour la gestion de projet me pousse à vouloir me spécialiser dans ce domaine.
            </p>
            
            <div className="skills-grid">
                <div className="skill" id="comp-gestion">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Gestion de Projet</h3>
                    <p>
                        Ma passion principale depuis la 2ème année. Organisation, planification, 
                        méthodes agiles et suivi de projets en équipe chez Agileo Automation.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Outils :</span>
                        {techOutils.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" id="comp-dev-web">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Développement Web</h3>
                    <p>
                        Conception d'applications web complètes, du front-end au back-end. 
                        Exemple : <a href="#projet-emailing">site d'emailing</a> pour l'IUT.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies :</span>
                        {techWeb.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" id="comp-jeux">
                    <FontAwesomeIcon icon={faGamepad} size="3x"/>
                    <h3>Développement Jeux Vidéo</h3>
                    <p>
                        Création de jeux 2D/3D avec Godot Engine : <a href="#projet-bomberman">Bomberman 3D</a> et 
                        <a href="#projet-casse-brique"> casse-brique 2D</a>.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies :</span>
                        {techJeux.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" id="comp-qualite">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Qualité & Méthodologie</h3>
                    <p>
                        Application du TDD et des bonnes pratiques. 
                        Exemple : <a href="#projet-tower-defense">refactoring Tower Defense</a>.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Outils :</span>
                        {techOutils.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill" id="comp-communication">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Communication</h3>
                    <p>
                        Vulgarisation technique et adaptation aux besoins clients. 
                        Compétence développée lors de mon alternance.
                    </p>
                </div>

                <div className="skill" id="comp-bdd">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Bases de Données</h3>
                    <p>
                        Conception et administration de BD relationnelles et non relationnelles. 
                        Modélisation et requêtes SQL optimisées.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Langages :</span>
                        {langages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;