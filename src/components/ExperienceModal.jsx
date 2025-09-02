import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExperience, editExperience } from "../redux/actions";

/**
 * Modal per aggiungere o modificare un'esperienza
 * @param {Object} props - Props del componente
 * @param {boolean} props.show - Se mostrare il modal
 * @param {Function} props.onHide - Funzione per chiudere il modal
 * @param {Object} props.experience - Esperienza da modificare (null per nuova esperienza)
 * @param {string} props.userId - ID dell'utente
 */
const ExperienceModal = ({ show, onHide, experience, userId }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.experiences);

  // State per il form
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [isCurrentJob, setIsCurrentJob] = useState(false);
  const [validated, setValidated] = useState(false);

  // Popola il form quando si modifica un'esperienza esistente
  useEffect(() => {
    if (experience) {
      setFormData({
        role: experience.role || "",
        company: experience.company || "",
        startDate: experience.startDate || "",
        endDate: experience.endDate || "",
        description: experience.description || "",
        area: experience.area || "",
      });
      setIsCurrentJob(!experience.endDate);
    } else {
      // Reset form per nuova esperienza
      setFormData({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      });
      setIsCurrentJob(false);
    }
    setValidated(false);
  }, [experience, show]);

  // Gestisce i cambiamenti nei campi del form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gestisce il checkbox "Lavoro attuale"
  const handleCurrentJobChange = (e) => {
    const checked = e.target.checked;
    setIsCurrentJob(checked);
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        endDate: "",
      }));
    }
  };

  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Prepara i dati da inviare
    const experienceData = {
      ...formData,
      endDate: isCurrentJob ? null : formData.endDate,
    };

    // Invia i dati
    if (experience) {
      // Modifica esperienza esistente
      dispatch(editExperience(userId, experience._id, experienceData));
    } else {
      // Crea nuova esperienza
      dispatch(createExperience(userId, experienceData));
    }

    // Chiudi il modal dopo l'invio
    if (!error) {
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {experience ? "Modifica esperienza" : "Aggiungi esperienza"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && (
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
        )}

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Ruolo */}
          <Form.Group className="mb-3">
            <Form.Label>Qualifica *</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="Es: Sviluppatore Full Stack"
              required
            />
            <Form.Control.Feedback type="invalid">
              Inserisci la qualifica.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Azienda */}
          <Form.Group className="mb-3">
            <Form.Label>Azienda *</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Es: EPICODE Institute of Technology"
              required
            />
            <Form.Control.Feedback type="invalid">
              Inserisci il nome dell'azienda.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Località */}
          <Form.Group className="mb-3">
            <Form.Label>Località</Form.Label>
            <Form.Control
              type="text"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              placeholder="Es: Milano, Lombardia, Italia"
            />
          </Form.Group>

          {/* Checkbox lavoro attuale */}
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="currentJob"
              label="Attualmente ricopro questa posizione"
              checked={isCurrentJob}
              onChange={handleCurrentJobChange}
            />
          </Form.Group>

          {/* Date */}
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Data di inizio *</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Inserisci la data di inizio.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label>Data di fine</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  disabled={isCurrentJob}
                  required={!isCurrentJob}
                />
                {!isCurrentJob && (
                  <Form.Control.Feedback type="invalid">
                    Inserisci la data di fine o seleziona "Lavoro attuale".
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </div>
          </div>

          {/* Descrizione */}
          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Descrivi le tue responsabilità, competenze acquisite e risultati ottenuti..."
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={loading}>
          Annulla
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading
            ? "Salvataggio..."
            : experience
            ? "Salva modifiche"
            : "Aggiungi esperienza"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;