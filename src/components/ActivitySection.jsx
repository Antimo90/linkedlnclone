import React from "react";
import { Card, Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import "./ActivitySection.css";

/**
 * Componente che riproduce la sezione "Attività" di LinkedIn
 * Include titolo, numero follower, messaggio di stato e pulsante per creare post
 */
const ActivitySection = () => {
  return (
    <Card className="activity-section-card">
      <Card.Body className="activity-section-body">
        {/* Header con titolo e pulsante crea post */}
        <div className="activity-header">
          <div className="activity-title-section">
            <h5 className="activity-title">Attività</h5>
            <p className="follower-count">0 follower</p>
          </div>
          <Button variant="outline-primary" className="create-post-btn">
            <PencilSquare className="me-2" size={16} />
            Crea un post
          </Button>
        </div>

        {/* Contenuto principale - messaggio di stato */}
        <div className="activity-content">
          <h6 className="status-title">Non hai ancora pubblicato nulla</h6>
          <p className="status-description">
            I post che condividi appariranno qui
          </p>
        </div>

        {/* Link per mostrare tutte le attività */}
        <div className="activity-footer">
          <a href="#" className="show-all-link">
            Mostra tutte le attività →
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActivitySection;
