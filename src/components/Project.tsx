import React from "react";
import '../assets/styles/Project.scss';
import imgEmailing from '../assets/images/emailing.png';
import imgBomberman from '../assets/images/bomberman.png';
import imgCasseBrique from '../assets/images/casse-brique.png';
import imgTowerDefense from '../assets/images/tower-defense.png';

function Project() {
    return(
    <div className="projects-container" id="projets">
        <h1>Mes Projets</h1>
        <p className="section-intro">
            Projets réalisés durant ma formation et mes expériences professionnelles.
        </p>
        
        <div className="projects-grid">
            {/* Projet 1 - Site Emailing IUT */}
            <div className="project" id="projet-emailing">
                <div className="project-image">
                    <img src={imgEmailing} className="zoom" alt="MailingIUT" width="100%"/>
                </div>
                <h2>MailingIUT - Site d'Emailing</h2>
                <div className="project-context">
                    <p><strong>Contexte :</strong> Projet pour la responsable communication de l'IUT</p>
                    <p><strong>Besoin :</strong> Outil de gestion et d'envoi d'emails professionnels</p>
                    <p><strong>Solution :</strong> Application web avec tableau de bord, gestion des campagnes et statistiques</p>
                    <p><strong>Résultat :</strong> Communication efficace avec étudiants et partenaires</p>
                </div>
                <div className="project-skills">
                    <strong>Compétences :</strong>
                    <a href="#comp-dev-web">Développement Web</a>
                    <a href="#comp-bdd">Bases de Données</a>
                    <a href="#comp-gestion">Gestion de Projet</a>
                </div>
                <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Django</span>
                </div>
            </div>

            {/* Projet 2 - Bomberman 3D */}
            <div className="project" id="projet-bomberman">
                <div className="project-image">
                    <img src={imgBomberman} className="zoom" alt="Bomberman 3D" width="100%"/>
                </div>
                <h2>Bomberman 3D</h2>
                <div className="project-context">
                    <p><strong>Contexte :</strong> Projet personnel de développement de jeux</p>
                    <p><strong>Besoin :</strong> Recréer Bomberman en 3D avec fonctionnalités multijoueur</p>
                    <p><strong>Solution :</strong> Développement complet sur Godot</p>
                    <p><strong>Résultat :</strong> Jeu jouable avec plusieurs niveaux et modes de jeu</p>
                </div>
                <div className="project-skills">
                    <strong>Compétences :</strong>
                    <a href="#comp-jeux">Développement Jeux</a>
                    <a href="#comp-gestion">Gestion de Projet</a>
                </div>
                <div className="project-tech">
                    <span className="tech-tag">Godot Engine</span>
                    <span className="tech-tag">GDScript</span>
                    <span className="tech-tag">3D</span>
                </div>
                <div className="project-links">
                    <a href="https://devugo.itch.io/td2-bomberman?secret=8IpOHi8ZdE8RICh48ctVWM0YYU" target="_blank" rel="noopener noreferrer" className="btn-play">🎮 Jouer sur itch.io</a>
                </div>
            </div>

            {/* Projet 3 - Casse-Brique 2D */}
            <div className="project" id="projet-casse-brique">
                <div className="project-image">
                    <img src={imgCasseBrique} className="zoom" alt="Casse-Brique 2D" width="100%"/>
                </div>
                <h2>Casse-Brique 2D</h2>
                <div className="project-context">
                    <p><strong>Contexte :</strong> Apprentissage du développement de jeux 2D</p>
                    <p><strong>Besoin :</strong> Maîtriser les fondamentaux : physique, collisions, score</p>
                    <p><strong>Solution :</strong> Jeu avec système de niveaux, power-ups et highscores</p>
                    <p><strong>Résultat :</strong> Jeu complet avec progression équilibrée</p>
                </div>
                <div className="project-skills">
                    <strong>Compétences :</strong>
                    <a href="#comp-jeux">Développement Jeux</a>
                </div>
                <div className="project-tech">
                    <span className="tech-tag">Godot Engine</span>
                    <span className="tech-tag">GDScript</span>
                    <span className="tech-tag">2D</span>
                </div>
                <div className="project-links">
                    <a href="https://yahyamagaz.itch.io/mon-premier-casse-brique?secret=XgaZTh8WiP306oBoHuNsV2CidJc" target="_blank" rel="noopener noreferrer" className="btn-play">🎮 Jouer sur itch.io</a>
                </div>
            </div>

            {/* Projet 4 - Tower Defense TDD */}
            <div className="project" id="projet-tower-defense">
                <div className="project-image">
                    <img src={imgTowerDefense} className="zoom" alt="Tower Defense TDD" width="100%"/>
                </div>
                <h2>Tower Defense - TDD</h2>
                <div className="project-context">
                    <p><strong>Contexte :</strong> Projet académique de refactoring</p>
                    <p><strong>Besoin :</strong> Améliorer un jeu existant avec les bonnes pratiques</p>
                    <p><strong>Solution :</strong> Refactoring avec méthodologie TDD et ajout de fonctionnalités</p>
                    <p><strong>Résultat :</strong> Code maintenable et testé à 100%</p>
                </div>
                <div className="project-skills">
                    <strong>Compétences :</strong>
                    <a href="#comp-qualite">Qualité & TDD</a>
                    <a href="#comp-jeux">Développement Jeux</a>
                </div>
                <div className="project-tech">
                    <span className="tech-tag">TDD</span>
                    <span className="tech-tag">Tests unitaires</span>
                    <span className="tech-tag">Refactoring</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;