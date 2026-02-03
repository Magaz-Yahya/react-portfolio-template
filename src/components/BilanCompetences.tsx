import React from "react";
import '../assets/styles/BilanCompetences.scss';

function BilanCompetences() {
    return (
        <div className="bilan-container" id="bilan">
            <h1>Évolution de mes Compétences</h1>
            <p className="section-intro">
                Progression depuis ma 1ère année jusqu'à mon alternance chez Agileo Automation.
            </p>

            <div className="competences-grid">
                {/* Développement */}
                <div className="competence-card">
                    <h3>Développement</h3>
                    <div className="evolution-bar">
                        <div className="year">1ère année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">Fondamentaux</div>
                    </div>
                    <div className="evolution-bar">
                        <div className="year">2ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">Frameworks</div>
                    </div>
                    <div className="evolution-bar current">
                        <div className="year">3ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">Professionnel</div>
                    </div>
                    <p className="proof">→ <a href="#projet-emailing">Projet MailingIUT</a></p>
                </div>

                {/* Gestion de Projet */}
                <div className="competence-card highlight">
                    <h3>Gestion de Projet</h3>
                    <div className="evolution-bar">
                        <div className="year">1ère année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '30%'}}></div>
                        </div>
                        <div className="level">Initiation</div>
                    </div>
                    <div className="evolution-bar">
                        <div className="year">2ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '70%'}}></div>
                        </div>
                        <div className="level">Méthode Agile</div>
                    </div>
                    <div className="evolution-bar current">
                        <div className="year">3ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">Spécialisation</div>
                    </div>
                    <p className="proof">→ Rituels agiles chez Agileo</p>
                </div>

                {/* Qualité */}
                <div className="competence-card">
                    <h3>Qualité Logicielle</h3>
                    <div className="evolution-bar">
                        <div className="year">1ère année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '20%'}}></div>
                        </div>
                        <div className="level">Tests manuels</div>
                    </div>
                    <div className="evolution-bar">
                        <div className="year">2ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '70%'}}></div>
                        </div>
                        <div className="level">TDD</div>
                    </div>
                    <div className="evolution-bar current">
                        <div className="year">3ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">CI/CD</div>
                    </div>
                    <p className="proof">→ <a href="#projet-tower-defense">Projet Tower Defense</a></p>
                </div>

                {/* Communication */}
                <div className="competence-card">
                    <h3>Communication</h3>
                    <div className="evolution-bar">
                        <div className="year">2ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '40%'}}></div>
                        </div>
                        <div className="level">Présentations</div>
                    </div>
                    <div className="evolution-bar current">
                        <div className="year">3ème année</div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{width: '100%'}}></div>
                        </div>
                        <div className="level">Relation client</div>
                    </div>
                    <p className="proof">→ Réunions clients chez Agileo</p>
                </div>
            </div>

            {/* Objectif */}
            <div className="bilan-objectif">
                <h3>Mon objectif</h3>
                <p>
                    Me spécialiser en <strong>gestion de projet IT</strong> après mon diplôme, 
                    en poursuivant vers un Master ou une école d'ingénieur.
                </p>
            </div>
        </div>
    );
}

export default BilanCompetences;
