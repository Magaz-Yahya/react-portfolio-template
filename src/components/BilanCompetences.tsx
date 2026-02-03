import React from "react";
import '../assets/styles/BilanCompetences.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faStar } from '@fortawesome/free-solid-svg-icons';

function BilanCompetences() {
    return (
        <div className="bilan-container" id="bilan">
            <h1>Évolution de mes Compétences</h1>
            <p className="section-intro">
                Progression de mes compétences depuis la 1ère année jusqu'à aujourd'hui, 
                illustrée par des projets concrets et mon expérience en alternance.
            </p>

            {/* Compétence 1 : Développement Web */}
            <div className="competence-evolution">
                <h2><FontAwesomeIcon icon={faStar} className="icon-star" /> Développement d'Applications</h2>
                
                <div className="evolution-timeline">
                    <div className="evolution-step">
                        <div className="step-header but1">
                            <span className="year-badge">1ère année</span>
                            <h3>Découverte</h3>
                        </div>
                        <div className="step-content">
                            <p>Apprentissage des <strong>fondamentaux</strong> : HTML, CSS, JavaScript, PHP.</p>
                            <p>Premiers sites web statiques et dynamiques simples.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Réalisation de pages web basiques en TP
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but2">
                            <span className="year-badge">2ème année</span>
                            <h3>Consolidation</h3>
                        </div>
                        <div className="step-content">
                            <p>Maîtrise des <strong>frameworks</strong> : Vue.js, Django, Symfony.</p>
                            <p>Développement d'applications complètes avec base de données.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> <a href="#projet-emailing">Projet MailingIUT</a> : application web complète pour l'IUT
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but3">
                            <span className="year-badge">3ème année</span>
                            <h3>Expertise</h3>
                        </div>
                        <div className="step-content">
                            <p>Développement <strong>professionnel</strong> en alternance chez Agileo Automation.</p>
                            <p>Applications industrielles, bonnes pratiques et travail en équipe.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Développement logiciel en contexte professionnel
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compétence 2 : Gestion de Projet */}
            <div className="competence-evolution">
                <h2><FontAwesomeIcon icon={faStar} className="icon-star" /> Gestion de Projet</h2>
                
                <div className="evolution-timeline">
                    <div className="evolution-step">
                        <div className="step-header but1">
                            <span className="year-badge">1ère année</span>
                            <h3>Initiation</h3>
                        </div>
                        <div className="step-content">
                            <p>Découverte du <strong>travail en équipe</strong> et des outils collaboratifs.</p>
                            <p>Premiers projets en binôme avec Git.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Projets de TP réalisés en équipe
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but2">
                            <span className="year-badge">2ème année</span>
                            <h3>Passion naissante</h3>
                        </div>
                        <div className="step-content">
                            <p>Découverte de la <strong>méthode Agile</strong> : sprints, daily meetings, rétrospectives.</p>
                            <p>Rôle de chef de projet sur plusieurs projets académiques.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Coordination d'équipe sur le projet <a href="#projet-bomberman">Bomberman</a>
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but3">
                            <span className="year-badge">3ème année</span>
                            <h3>Spécialisation</h3>
                        </div>
                        <div className="step-content">
                            <p><strong>Application professionnelle</strong> des méthodes agiles chez Agileo.</p>
                            <p>Objectif : me spécialiser dans ce domaine après le diplôme.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Participation aux rituels agiles en entreprise
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compétence 3 : Qualité & Tests */}
            <div className="competence-evolution">
                <h2><FontAwesomeIcon icon={faStar} className="icon-star" /> Qualité Logicielle</h2>
                
                <div className="evolution-timeline">
                    <div className="evolution-step">
                        <div className="step-header but1">
                            <span className="year-badge">1ère année</span>
                            <h3>Sensibilisation</h3>
                        </div>
                        <div className="step-content">
                            <p>Notion de <strong>code propre</strong> et bonnes pratiques de base.</p>
                            <p>Premiers tests manuels sur les programmes.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Vérification manuelle des résultats en TP
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but2">
                            <span className="year-badge">2ème année</span>
                            <h3>Méthodologie TDD</h3>
                        </div>
                        <div className="step-content">
                            <p>Apprentissage du <strong>Test Driven Development</strong> et des tests unitaires.</p>
                            <p>Refactoring de code existant avec couverture de tests.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> <a href="#projet-tower-defense">Projet Tower Defense</a> : refactoring TDD complet
                            </div>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but3">
                            <span className="year-badge">3ème année</span>
                            <h3>Intégration Continue</h3>
                        </div>
                        <div className="step-content">
                            <p>Mise en place de <strong>pipelines CI/CD</strong> en entreprise.</p>
                            <p>Tests automatisés et revue de code systématique.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Pratiques DevOps chez Agileo Automation
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compétence nouvelle : Communication */}
            <div className="competence-evolution nouvelle">
                <h2><FontAwesomeIcon icon={faStar} className="icon-star" /> Communication Professionnelle</h2>
                <p className="competence-note">
                    <em>Compétence développée principalement grâce à mon alternance, moins présente dans la formation initiale.</em>
                </p>
                
                <div className="evolution-timeline">
                    <div className="evolution-step">
                        <div className="step-header but2">
                            <span className="year-badge">2ème année</span>
                            <h3>Premiers échanges</h3>
                        </div>
                        <div className="step-content">
                            <p>Présentations orales de projets devant la classe.</p>
                            <p>Début de la <strong>vulgarisation technique</strong>.</p>
                        </div>
                    </div>

                    <div className="evolution-arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                    <div className="evolution-step">
                        <div className="step-header but3">
                            <span className="year-badge">3ème année</span>
                            <h3>Communication client</h3>
                        </div>
                        <div className="step-content">
                            <p><strong>Échanges réguliers</strong> avec les clients et collègues chez Agileo.</p>
                            <p>Adaptation du discours technique selon l'interlocuteur.</p>
                            <div className="proof">
                                <FontAwesomeIcon icon={faCheck} /> Réunions clients et présentations en entreprise
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion / Bilan */}
            <div className="bilan-conclusion">
                <h2>Bilan et Perspectives</h2>
                <div className="conclusion-content">
                    <p>
                        Mon parcours m'a permis de développer un profil <strong>polyvalent</strong> alliant 
                        compétences techniques et relationnelles. La découverte de la gestion de projet 
                        en 2ème année a été un tournant décisif dans mon orientation.
                    </p>
                    <p>
                        <strong>Mon objectif :</strong> Poursuivre vers un Master ou une école d'ingénieur 
                        orienté gestion de projet IT / Product Management, tout en consolidant mes 
                        compétences techniques acquises en développement.
                    </p>
                    <p>
                        L'alternance chez Agileo Automation m'a conforté dans ce choix en me montrant 
                        l'importance de la coordination et de la communication dans la réussite des projets.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BilanCompetences;
