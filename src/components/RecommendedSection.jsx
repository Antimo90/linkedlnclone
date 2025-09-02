import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { EyeSlash, FileText, Eye } from "react-bootstrap-icons";
import "./RecommendedSection.css";

/**
 * Componente che riproduce la sezione "Consigliato per te" di LinkedIn
 * Include titolo con privacy, icona documento, testo descrittivo e pulsante azione
 */
const RecommendedSection = () => {
  // State per controllare la visibilità del componente
  const [isVisible, setIsVisible] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);

  // Funzione per gestire il click sull'icona privacy
  const handleRemoveClick = () => {
    setIsRemoving(true);
    // Dopo l'animazione, nascondi completamente il componente
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Durata dell'animazione CSS
  };

  // Se il componente non è visibile, non renderizzarlo
  if (!isVisible) {
    return null;
  }

  return (
    <Card
      className={`recommended-section-card ${isRemoving ? "removing" : ""}`}
    >
      <Card.Body className="recommended-section-body">
        {/* Header con titolo e icona privacy */}
        <div className="recommended-header">
          <h5 className="recommended-title">Consigliato per te</h5>
          <EyeSlash
            className="privacy-icon"
            onClick={handleRemoveClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleRemoveClick();
              }
            }}
            title="Nascondi questa sezione"
          />
        </div>

        {/* Sottotitolo privacy con icona occhio */}
        <div className="privacy-text-container">
          <Eye className="eye-icon" size={14} />
          <p className="privacy-text">Solo per te</p>
        </div>

        {/* Container con rettangolo arrotondato per contenuto e pulsante */}
        <div className="content-container">
          {/* Contenuto principale con icona e testo */}
          <div className="recommended-content">
            <div className="content-icon">
              <FileText className="document-icon" />
            </div>

            <div className="content-text">
              <h6 className="content-title">
                Scrivi un riepilogo per mettere in evidenza la tua personalità o
                la tua esperienza lavorativa
              </h6>

              <p className="content-description">
                Gli utenti che includono un riepilogo ricevono fino a 3.9 volte
                più visualizzazioni del profilo.
              </p>
            </div>
          </div>

          {/* Pulsante azione */}
          <Button variant="outline-primary" className="add-summary-btn">
            Aggiungi un riepilogo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecommendedSection;
