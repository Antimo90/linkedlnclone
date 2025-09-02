import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Eye, BarChart, Search } from 'react-bootstrap-icons';
import './AnalyticsCard.css';

/**
 * Componente che riproduce la sezione "Analisi" di LinkedIn
 * Mostra statistiche del profilo con design fedele all'originale
 */
const AnalyticsCard = () => {
  return (
    <Card className="analytics-card">
      {/* Header della card */}
      <Card.Header className="analytics-header">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="analytics-title mb-1">Analisi</h5>
            <div className="analytics-subtitle d-flex align-items-center">
              <Eye className="me-1" size={14} />
              <span>Solo per te</span>
            </div>
          </div>
        </div>
      </Card.Header>

      {/* Corpo della card con le statistiche */}
      <Card.Body className="analytics-body">
        <Row className="g-0">
          {/* Prima statistica - Visualizzazioni del profilo */}
          <Col md={4} className="analytics-stat">
            <div className="d-flex align-items-start">
              <div className="stat-icon me-3">
                <Eye size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">2</div>
                <div className="stat-label">visualizzazioni del profilo</div>
                <div className="stat-description">
                  Scopri chi ha visitato il tuo profilo.
                </div>
              </div>
            </div>
          </Col>

          {/* Seconda statistica - Impressioni del post */}
          <Col md={4} className="analytics-stat">
            <div className="d-flex align-items-start">
              <div className="stat-icon me-3">
                <BarChart size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">0</div>
                <div className="stat-label">impressioni del post</div>
                <div className="stat-description">
                  Crea un post per aumentare l'interesse.
                </div>
                <div className="stat-period">Ultimi 7 giorni</div>
              </div>
            </div>
          </Col>

          {/* Terza statistica - Comparsa nei motori di ricerca */}
          <Col md={4} className="analytics-stat">
            <div className="d-flex align-items-start">
              <div className="stat-icon me-3">
                <Search size={20} />
              </div>
              <div className="stat-content">
                <div className="stat-number">1</div>
                <div className="stat-label">comparsa nei motori di ricerca</div>
                <div className="stat-description">
                  Vedi quante volte compari nei risultati di ricerca.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>

      {/* Footer con link */}
      <Card.Footer className="analytics-footer">
        <a href="#" className="analytics-link">
          Mostra tutte le analisi →
        </a>
      </Card.Footer>
    </Card>
  );
};

export default AnalyticsCard;