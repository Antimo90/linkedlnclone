import React from "react";
import { Button } from "react-bootstrap";
import "./EducationSection.css";
import epicodeLogo from "../assets/epicodeschool_logo.jpg";

/**
 * Componente EducationSection - Replica la sezione "Formazione" di LinkedIn
 * Mostra informazioni educative con logo, dettagli del corso e votazione
 */
const EducationSection = () => {
  return (
    <div className="education-section">
      {/* Header con titolo e pulsanti di azione */}
      <div className="education-header">
        <h5 className="education-title">Formazione</h5>
        <div className="education-actions">
          <Button
            variant="outline-secondary"
            className="action-btn add-btn"
            aria-label="Aggiungi formazione"
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

      {/* Contenuto principale della formazione */}
      <div className="education-content">
        <div className="education-item">
          {/* Logo dell'istituto */}
          <div className="education-logo">
            <img
              src={epicodeLogo}
              alt="EPICODE Institute of Technology Logo"
              className="logo-image"
            />
          </div>

          {/* Dettagli della formazione */}
          <div className="education-details">
            <div className="education-info">
              <h3 className="institution-name">
                EPICODE Institute of Technology
              </h3>
              <p className="course-description">
                Bootcamp Full-Stack Developer, Front End / Back End
              </p>
              <p className="education-date">mag 2025</p>
              <div className="education-grade">
                <span className="grade-text">Votazione: 10/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
