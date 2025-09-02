import React from "react";
import { Button } from "react-bootstrap";
import "./SkillsSection.css";
import epicodeLogo from "../assets/epicodeschool_logo.jpg";

/**
 * Componente SkillsSection - Replica la sezione "Competenze" di LinkedIn
 * Mostra le competenze dell'utente con icone e descrizioni
 */
const SkillsSection = () => {
  return (
    <div className="skills-section">
      {/* Header con titolo e pulsanti di azione */}
      <div className="skills-header">
        <h5 className="skills-title">Competenze</h5>
        <div className="skills-actions">
          <Button
            variant="outline-secondary"
            className="action-btn add-btn"
            aria-label="Aggiungi competenza"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6A.5.5 0 0 1 8 1z" />
            </svg>
          </Button>
          <Button
            variant="outline-secondary"
            className="action-btn edit-btn"
            aria-label="Modifica sezione"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L2.939 11.21c-.058.058-.099.126-.119.2L2.04 14.292a.5.5 0 0 0 .588.588l2.883-.78c.074-.02.142-.061.2-.119l8.813-8.813zm-8.563 9.414L3.453 12.075l-.28 1.034 1.034-.28z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Contenuto principale - Lista competenze */}
      <div className="skills-content">
        {/* Competenza HTML5 */}
        <div className="skill-item">
          <div className="skill-icon">
            <img 
              src={epicodeLogo} 
              alt="EPICODE Institute of Technology Logo" 
              width="24" 
              height="24"
              style={{ borderRadius: '4px', objectFit: 'cover' }}
            />
          </div>
          <div className="skill-details">
            <h6 className="skill-name">HTML5</h6>
            <p className="skill-description">
              <span className="skill-source">
                Bootcamp Full-Stack Developer presso EPICODE Institute of Technology
              </span>
            </p>
          </div>
        </div>

        {/* Divisorio orizzontale tra le competenze */}
        <hr className="skills-divider" />

        {/* Competenza JavaScript */}
        <div className="skill-item">
          <div className="skill-icon">
            <img 
              src={epicodeLogo} 
              alt="EPICODE Institute of Technology Logo" 
              width="24" 
              height="24"
              style={{ borderRadius: '4px', objectFit: 'cover' }}
            />
          </div>
          <div className="skill-details">
            <h6 className="skill-name">JavaScript</h6>
            <p className="skill-description">
              <span className="skill-source">
                Bootcamp Full-Stack Developer presso EPICODE Institute of Technology
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Link per mostrare tutte le competenze */}
      <div className="show-all-skills">
        <a href="#" className="show-all-link">
          Mostra tutte le competenze (5)
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="arrow-icon"
          >
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
