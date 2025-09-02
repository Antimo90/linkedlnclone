import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ExperienceSection.css";

/**
 * Componente che riproduce la sezione "Esperienza" di LinkedIn
 * Include titolo, logo aziendale, dettagli del corso, date e competenze
 */
const ExperienceSection = () => {
  return (
    <Card className="experience-section-card">
      <Card.Body className="experience-section-body">
        {/* Header con titolo e pulsanti di azione */}
        <div className="experience-header">
          <h5 className="experience-title">Esperienza</h5>
          <div className="experience-actions">
            <Button
              variant="outline-secondary"
              className="action-btn add-btn"
              aria-label="Aggiungi esperienza"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z" />
              </svg>
            </Button>
            <Button
              variant="outline-secondary"
              className="action-btn edit-btn"
              aria-label="Modifica sezione"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L2.939 11.21c-.058.058-.099.126-.119.2L2.04 14.292a.5.5 0 0 0 .588.588l2.883-.78c.074-.02.142-.061.2-.119l8.813-8.813zm-8.563 9.414L3.453 12.075l-.28 1.034 1.034-.28z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Divisorio orizzontale */}
        <hr className="experience-divider" />

        {/* Contenuto principale - Esperienza lavorativa */}
        <div className="experience-content">
          {/* Logo e dettagli azienda */}
          <div className="experience-item">
            <div className="company-logo">
              <img
                src="/src/assets/epicodeschool_logo.jpg"
                alt="EPICODE Institute of Technology"
                className="logo-img"
              />
            </div>

            <div className="experience-details">
              {/* Titolo del corso/posizione */}
              <h6 className="course-title">Bootcamp Full-Stack Developer</h6>

              {/* Nome dell'azienda */}
              <p className="company-name">EPICODE Institute of Technology</p>

              {/* Date e durata */}
              <p className="experience-dates">mag 2025 - Presente · 5 mesi</p>

              {/* Localizzazione */}
              <p className="experience-location">
                Roma, Lazio, Italia · Da remoto
              </p>

              {/* Ruolo/Specializzazione */}
              <p className="experience-role">Front End | Back End Developer</p>

              {/* Competenze */}
              <div className="experience-skills">
                <span className="skills-icon">🏆</span>
                <span className="skills-text">
                  HTML5, JavaScript e +3 competenze
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExperienceSection;
