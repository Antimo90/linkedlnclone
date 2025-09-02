import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Spinner, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiences, removeExperience } from "../redux/actions";
import ExperienceModal from "./ExperienceModal";
import "./ExperienceSection.css";

/**
 * Componente che riproduce la sezione "Esperienza" di LinkedIn
 * Include integrazione con API per CRUD delle esperienze
 */
const ExperienceSection = () => {
  const dispatch = useDispatch();
  const { experiences, loading, error } = useSelector((state) => state.experiences);
  const user = useSelector((state) => state.user);
  
  // State per il modal
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Carica le esperienze al mount del componente
  useEffect(() => {
    if (user._id) {
      dispatch(fetchExperiences(user._id));
    }
  }, [dispatch, user._id]);

  // Funzione per aprire il modal per aggiungere esperienza
  const handleAddExperience = () => {
    setSelectedExperience(null);
    setShowModal(true);
  };

  // Funzione per aprire il modal per modificare esperienza
  const handleEditExperience = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  // Funzione per eliminare esperienza
  const handleDeleteExperience = (experienceId) => {
    if (window.confirm("Sei sicuro di voler eliminare questa esperienza?")) {
      dispatch(removeExperience(user._id, experienceId));
    }
  };

  // Funzione per chiudere il modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  // Funzione per formattare le date
  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "short",
    });
  };

  // Funzione per calcolare la durata
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} mes${diffMonths === 1 ? 'e' : 'i'}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      let duration = `${years} ann${years === 1 ? 'o' : 'i'}`;
      if (months > 0) {
        duration += ` ${months} mes${months === 1 ? 'e' : 'i'}`;
      }
      return duration;
    }
  };

  return (
    <>
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
                onClick={handleAddExperience}
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
            </div>
          </div>

          {/* Divisorio orizzontale */}
          <hr className="experience-divider" />

          {/* Gestione stati di caricamento ed errore */}
          {loading && (
            <div className="text-center py-4">
              <Spinner animation="border" size="sm" className="me-2" />
              Caricamento esperienze...
            </div>
          )}

          {error && (
            <Alert variant="danger" className="mb-3">
              {error}
            </Alert>
          )}

          {/* Contenuto principale - Lista esperienze */}
          <div className="experience-content">
            {!loading && !error && experiences.length === 0 && (
              <div className="text-center py-4 text-muted">
                <p>Nessuna esperienza aggiunta.</p>
                <Button variant="outline-primary" onClick={handleAddExperience}>
                  Aggiungi la tua prima esperienza
                </Button>
              </div>
            )}

            {experiences.map((experience, index) => (
              <div key={experience._id} className="experience-item">
                {/* Logo aziendale placeholder */}
                <div className="company-logo">
                  <div className="logo-placeholder">
                    {experience.company.charAt(0).toUpperCase()}
                  </div>
                </div>

                <div className="experience-details">
                  {/* Titolo del ruolo */}
                  <h6 className="course-title">{experience.role}</h6>

                  {/* Nome dell'azienda */}
                  <p className="company-name">{experience.company}</p>

                  {/* Date e durata */}
                  <p className="experience-dates">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)} · {calculateDuration(experience.startDate, experience.endDate)}
                  </p>

                  {/* Localizzazione */}
                  {experience.area && (
                    <p className="experience-location">{experience.area}</p>
                  )}

                  {/* Descrizione */}
                  {experience.description && (
                    <p className="experience-description">{experience.description}</p>
                  )}
                </div>

                {/* Menu azioni per ogni esperienza */}
                <Dropdown className="experience-menu">
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="action-btn menu-btn"
                    id={`dropdown-${experience._id}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEditExperience(experience)}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="me-2">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L2.939 11.21c-.058.058-.099.126-.119.2L2.04 14.292a.5.5 0 0 0 .588.588l2.883-.78c.074-.02.142-.061.2-.119l8.813-8.813zm-8.563 9.414L3.453 12.075l-.28 1.034 1.034-.28z" />
                      </svg>
                      Modifica
                    </Dropdown.Item>
                    <Dropdown.Item 
                      onClick={() => handleDeleteExperience(experience._id)}
                      className="text-danger"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="me-2">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                      Elimina
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Divisorio tra esperienze (tranne l'ultima) */}
                {index < experiences.length - 1 && (
                  <hr className="experience-item-divider" />
                )}
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      {/* Modal per aggiungere/modificare esperienza */}
      <ExperienceModal
        show={showModal}
        onHide={handleCloseModal}
        experience={selectedExperience}
        userId={user._id}
      />
    </>
  );
};

export default ExperienceSection;
