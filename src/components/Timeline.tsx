import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="parcours">
      <div className="items-container">
        <h1>Mon Parcours</h1>
        <p className="section-intro">
          Mon évolution académique et professionnelle.
        </p>
        <VerticalTimeline>
          {/* Alternance BUT 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Alternance - Développeur</h3>
            <h4 className="vertical-timeline-element-subtitle">Agileo Automation</h4>
            <p>
              Développement logiciel, travail en équipe, méthodologie agile
            </p>
          </VerticalTimelineElement>

          {/* BUT 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2025 - 2026"
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BUT Informatique - 3ème année</h3>
            <h4 className="vertical-timeline-element-subtitle">IUT de Blagnac</h4>
            <p>
              Alternance, projets avancés, préparation à l'insertion professionnelle
            </p>
          </VerticalTimelineElement>

          {/* Alternance BUT 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Alternance - Développeur</h3>
            <h4 className="vertical-timeline-element-subtitle">Agileo Automation</h4>
            <p>
              Première année d'alternance, découverte du monde professionnel
            </p>
          </VerticalTimelineElement>

          {/* BUT 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - 2025"
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BUT Informatique - 2ème année</h3>
            <h4 className="vertical-timeline-element-subtitle">IUT de Blagnac</h4>
            <p>
              Développement avancé, bases de données, POO, projets en équipe
            </p>
          </VerticalTimelineElement>

          {/* BUT 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 2024"
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BUT Informatique - 1ère année</h3>
            <h4 className="vertical-timeline-element-subtitle">IUT de Blagnac</h4>
            <p>
              Fondamentaux : programmation, algorithmique, web, bases de données
            </p>
          </VerticalTimelineElement>

          {/* Bac */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023"
            iconStyle={{ background: '#4CAF50', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Baccalauréat Général - Mention Bien</h3>
            <h4 className="vertical-timeline-element-subtitle">Lycée Antoine Bourdelle, Montauban</h4>
            <p>
              Spécialités : Mathématiques, NSI
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;