import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Spinner,
  Image,
} from "react-bootstrap";
import {
  BsImage,
  BsEmojiSmile,
  BsCalendarEvent,
  BsNewspaper,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
import "./UserPost.css";

const UserPost = ({ onPostCreated }) => {
  // Stati per gestire il form e le operazioni
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");

  // Riferimento per l'input file
  const fileInputRef = useRef(null);

  // Ottieni i dati dell'utente dal Redux store
  const user = useSelector((state) => state.user);

  // Token JWT per l'autenticazione (dovrebbe essere ottenuto dal tuo sistema di auth)
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8";

  // Funzione per gestire il click sull'input file
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Funzione per gestire la selezione dell'immagine
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validazione del tipo di file
      if (!file.type.startsWith("image/")) {
        setError("Per favore seleziona un file immagine valido.");
        return;
      }
      // Validazione della dimensione del file (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("L'immagine deve essere inferiore a 5MB.");
        return;
      }
      setSelectedImage(file);
      setError("");
    }
  };

  // Funzione per rimuovere l'immagine selezionata
  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Funzione per gestire l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione del testo
    if (!postText.trim()) {
      setValidationError("Il contenuto del post è obbligatorio.");
      return;
    }

    setIsLoading(true);
    setError("");
    setValidationError("");
    setShowSuccess(false);

    try {
      // Creazione del post
      const postData = {
        text: postText.trim(),
      };

      const response = await axios.post(
        "https://striveschool-api.herokuapp.com/api/posts/",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Se c'è un'immagine, la carichiamo separatamente
      if (selectedImage && response.data._id) {
        const formData = new FormData();
        formData.append("post", selectedImage);

        await axios.post(
          `https://striveschool-api.herokuapp.com/api/posts/${response.data._id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      // Reset del form dopo il successo
      setPostText("");
      setSelectedImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setShowSuccess(true);

      // Aggiorna il feed dei post
      if (onPostCreated) {
        onPostCreated();
      }

      // Nascondere il messaggio di successo dopo 3 secondi
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
      if (error.response?.status === 401) {
        setError(
          "Token di autenticazione non valido. Effettua nuovamente il login."
        );
      } else if (error.response?.status === 400) {
        setError("Dati del post non validi. Controlla il contenuto e riprova.");
      } else {
        setError("Errore durante la creazione del post. Riprova più tardi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="mt-3 mb-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              {/* Header del componente */}
              <div className="d-flex align-items-center mb-3">
                <div className="position-relative">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      roundedCircle
                      width={50}
                      height={50}
                      className="me-3 user-post-profile-img"
                      alt={`Immagine profilo di ${user?.name || "Utente"}`}
                      onError={(e) => {
                        // Nasconde l'immagine se non carica e mostra il fallback
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                      style={{
                        objectFit: "cover",
                        border: "2px solid #ffffff",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  ) : null}
                  {/* Fallback avatar con iniziali */}
                  <div
                    className={`me-3 user-post-profile-img d-flex align-items-center justify-content-center ${
                      user?.image ? "d-none" : "d-flex"
                    }`}
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#0a66c2",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "18px",
                      fontWeight: "bold",
                      border: "2px solid #ffffff",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0 fw-bold user-post-username">
                    {user?.name
                      ? `${user.name} ${user.surname || ""}`.trim()
                      : "Utente"}
                  </h6>
                  <small className="text-muted user-post-subtitle">
                    Condividi un aggiornamento
                  </small>
                </div>
              </div>

              {/* Messaggi di feedback */}
              {showSuccess && (
                <Alert variant="success" className="mb-3">
                  <i className="bi bi-check-circle me-2"></i>
                  Post pubblicato con successo!
                </Alert>
              )}

              {error && (
                <Alert variant="danger" className="mb-3">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {error}
                </Alert>
              )}

              {validationError && (
                <Alert variant="warning" className="mb-3">
                  <i className="bi bi-exclamation-circle me-2"></i>
                  {validationError}
                </Alert>
              )}

              {/* Form per il post */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Di cosa vorresti parlare?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    className="border-0 fs-5"
                    style={{ resize: "none", boxShadow: "none" }}
                    disabled={isLoading}
                  />
                </Form.Group>

                {/* Anteprima immagine selezionata */}
                {selectedImage && (
                  <div className="mb-3 position-relative">
                    <div className="border rounded p-2 bg-light">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <BsImage className="me-2 text-primary" size={20} />
                          <span className="text-truncate">
                            {selectedImage.name}
                          </span>
                        </div>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={removeImage}
                          disabled={isLoading}
                        >
                          <i className="bi bi-x"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Input file nascosto */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />

                {/* Barra degli strumenti */}
                <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                  <div className="d-flex gap-3">
                    <Button
                      variant="link"
                      className="p-0 text-decoration-none d-flex align-items-center"
                      onClick={handleImageClick}
                      disabled={isLoading}
                    >
                      <BsImage className="me-2" size={20} />
                      <span>Foto</span>
                    </Button>

                    <Button
                      variant="link"
                      className="p-0 text-decoration-none d-flex align-items-center"
                      disabled
                    >
                      <BsCalendarEvent className="me-2" size={20} />
                      <span>Evento</span>
                    </Button>

                    <Button
                      variant="link"
                      className="p-0 text-decoration-none d-flex align-items-center"
                      disabled
                    >
                      <BsNewspaper className="me-2" size={20} />
                      <span>Scrivi un articolo</span>
                    </Button>
                  </div>

                  {/* Pulsante di invio */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isLoading || !postText.trim()}
                    className="px-4 rounded-pill"
                  >
                    {isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          className="me-2"
                        />
                        Pubblicazione...
                      </>
                    ) : (
                      "Pubblica"
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserPost;
