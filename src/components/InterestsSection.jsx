import React from 'react';
import './InterestsSection.css';
import epicodeLogo from '../assets/epicodeschool_logo.jpg';

// Componente per la sezione Interessi
const InterestsSection = () => {
  return (
    <div className="interests-section">
      {/* Header della sezione */}
      <div className="interests-header">
        <h2 className="interests-title">Interessi</h2>
      </div>

      {/* Contenuto della sezione */}
      <div className="interests-content">
        {/* Sottosezione Scuola o università */}
        <div className="interests-category">
          <h3 className="category-title">Scuola o università</h3>
          <div className="category-underline"></div>
        </div>

        {/* Card EPICODE Institute of Technology */}
        <div className="institution-card">
          <div className="institution-info">
            {/* Logo EPICODE */}
            <div className="institution-logo">
              <img 
                src={epicodeLogo} 
                alt="EPICODE Institute of Technology Logo" 
                className="logo-image"
              />
            </div>

            {/* Informazioni istituzione */}
            <div className="institution-details">
              <h4 className="institution-name">EPICODE Institute of Technology</h4>
              <p className="follower-count">19.969 follower</p>
            </div>
          </div>

          {/* Pulsante Già segui */}
          <button className="follow-button">
            <span className="checkmark">✓</span>
            <span className="button-text">Già segui</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;