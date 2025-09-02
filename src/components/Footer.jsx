import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { QuestionCircle, Gear, Shield } from 'react-bootstrap-icons';
import './Footer.css';

/**
 * Componente Footer che riproduce fedelmente il footer di LinkedIn
 * Include tutte le sezioni: link informativi, domande, selezione lingua e copyright
 */
const Footer = () => {
  return (
    <footer className="linkedin-footer">
      <Container>
        {/* Sezione principale con colonne di link */}
        <Row className="footer-main">
          {/* Prima colonna - Informazioni */}
          <Col lg={2} md={3} sm={6} xs={12} className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Informazioni</a></li>
              <li><a href="#">Informativa sulla comunità professionale</a></li>
              <li><a href="#">Privacy e condizioni</a></li>
              <li><a href="#">Sales Solutions</a></li>
              <li><a href="#">Centro sicurezza</a></li>
            </ul>
          </Col>

          {/* Seconda colonna - Accessibilità */}
          <Col lg={2} md={3} sm={6} xs={12} className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Accessibilità</a></li>
              <li><a href="#">Carriera</a></li>
              <li><a href="#">Opzioni per gli annunci pubblicitari</a></li>
              <li><a href="#">Mobile</a></li>
            </ul>
          </Col>

          {/* Terza colonna - Talent Solutions */}
          <Col lg={2} md={3} sm={6} xs={12} className="footer-column">
            <ul className="footer-links">
              <li><a href="#">Talent Solutions</a></li>
              <li><a href="#">Soluzioni di marketing</a></li>
              <li><a href="#">Pubblicità</a></li>
              <li><a href="#">Piccole imprese</a></li>
            </ul>
          </Col>

          {/* Quarta colonna - Sezione Domande */}
          <Col lg={3} md={3} sm={6} xs={12} className="footer-column questions-section">
            <div className="question-item">
              <QuestionCircle className="question-icon" />
              <div className="question-content">
                <div className="question-title">Domande?</div>
                <div className="question-subtitle">Visita il nostro Centro assistenza.</div>
              </div>
            </div>
            
            <div className="question-item">
              <Gear className="question-icon" />
              <div className="question-content">
                <div className="question-title">Gestisci il tuo account e la tua privacy</div>
                <div className="question-subtitle">Vai alle impostazioni</div>
              </div>
            </div>
            
            <div className="question-item">
              <Shield className="question-icon" />
              <div className="question-content">
                <div className="question-title">Trasparenza sui contenuti consigliati</div>
                <div className="question-subtitle">Scopri di più sui contenuti consigliati.</div>
              </div>
            </div>
          </Col>

          {/* Quinta colonna - Selezione lingua */}
          <Col lg={3} md={12} sm={12} xs={12} className="footer-column language-section">
            <div className="language-selector">
              <label htmlFor="language-select" className="language-label">
                Seleziona lingua
              </label>
              <Form.Select 
                id="language-select" 
                className="language-dropdown"
                defaultValue="it"
              >
                <option value="it">Italiano (Italiano)</option>
                <option value="en">English (English)</option>
                <option value="es">Español (Spanish)</option>
                <option value="fr">Français (French)</option>
                <option value="de">Deutsch (German)</option>
              </Form.Select>
            </div>
          </Col>
        </Row>

        {/* Sezione copyright */}
        <Row className="footer-bottom">
          <Col xs={12}>
            <div className="copyright">
              LinkedIn Corporation © 2025
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;