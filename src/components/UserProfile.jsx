import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { BsPencilFill, BsCameraFill, BsX } from "react-icons/bs";
import { useState } from "react";
import imagetop from "../assets/image.png";
import "./Profile.css";

// Componente riutilizzabile per visualizzare il profilo di qualsiasi utente
const UserProfile = ({ userData, isLoading = false, error = null, isOwnProfile = false }) => {
  const [localCoverImage, setLocalCoverImage] = useState(null);

  // Se è in caricamento, mostra lo spinner
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
      </Container>
    );
  }

  // Se c'è un errore, mostra l'alert
  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <Alert.Heading>Errore nel caricamento del profilo</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }

  // Se non ci sono dati utente, mostra messaggio
  if (!userData) {
    return (
      <Container className="mt-4">
        <Alert variant="warning">
          <Alert.Heading>Utente non trovato</Alert.Heading>
          <p>L'utente richiesto non è stato trovato o non è ancora iscritto.</p>
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Row className="mt-4 mb-3">
          <Col>
            <Card>
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={localCoverImage || imagetop}
                  className="cover-image"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                
                {/* Mostra l'icona camera solo se è il proprio profilo */}
                {isOwnProfile && (
                  <BsCameraFill
                    className="position-absolute text-primary bg-white rounded-circle p-2"
                    style={{
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                      fontSize: "24px",
                      zIndex: 2,
                    }}
                    title="Cambia immagine di copertina"
                  />
                )}

                {userData.image ? (
                  <div className="position-relative">
                    <Image
                      src={userData.image}
                      roundedCircle
                      alt="Foto profilo"
                      className="border border-4 border-white mb-4"
                      style={{
                        position: "absolute",
                        bottom: "-70px",
                        left: "30px",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        zIndex: 1,
                        cursor: isOwnProfile ? "pointer" : "default",
                      }}
                    />
                    {/* Mostra l'icona edit solo se è il proprio profilo */}
                    {isOwnProfile && (
                      <BsPencilFill
                        className="position-absolute text-primary bg-white rounded-circle p-2"
                        style={{
                          bottom: "-50px",
                          left: "150px",
                          cursor: "pointer",
                          fontSize: "16px",
                          zIndex: 2,
                        }}
                        title="Modifica foto profilo"
                      />
                    )}
                  </div>
                ) : (
                  // Avatar di fallback con iniziali
                  <div
                    className="position-absolute border border-4 border-white mb-4 bg-secondary text-white d-flex align-items-center justify-content-center"
                    style={{
                      bottom: "-70px",
                      left: "30px",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      fontSize: "48px",
                      fontWeight: "bold",
                      zIndex: 1,
                    }}
                  >
                    {userData.name && userData.surname
                      ? `${userData.name.charAt(0)}${userData.surname.charAt(0)}`
                      : "U"}
                  </div>
                )}
              </div>

              <Card.Body className="pt-5">
                <Row>
                  <Col md={8}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h2 className="mb-1">
                          {userData.name && userData.surname
                            ? `${userData.name} ${userData.surname}`
                            : userData.username || "Nome non disponibile"}
                        </h2>
                        <p className="text-muted mb-2">
                          {userData.title || "Titolo non specificato"}
                        </p>
                        <p className="text-muted small mb-3">
                          {userData.area || "Località non specificata"} •{" "}
                          <a href="#" className="text-primary text-decoration-none">
                            Informazioni di contatto
                          </a>
                        </p>
                        <div className="mb-3">
                          <Button variant="primary" className="me-2">
                            {isOwnProfile ? "Modifica profilo" : "Collegati"}
                          </Button>
                          {!isOwnProfile && (
                            <Button variant="outline-primary" className="me-2">
                              Messaggio
                            </Button>
                          )}
                          <Button variant="outline-secondary">
                            Altro
                          </Button>
                        </div>
                      </div>
                      {isOwnProfile && (
                        <BsPencilFill
                          className="text-muted"
                          style={{ cursor: "pointer", fontSize: "20px" }}
                          title="Modifica profilo"
                        />
                      )}
                    </div>
                  </Col>
                </Row>

                {/* Sezione Bio/Descrizione */}
                {userData.bio && (
                  <Row className="mt-4">
                    <Col>
                      <Card className="border-0 bg-light">
                        <Card.Body>
                          <h5>Informazioni</h5>
                          <p className="mb-0">{userData.bio}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                )}

                {/* Sezione Email (solo se è il proprio profilo o se l'email è pubblica) */}
                {userData.email && (
                  <Row className="mt-3">
                    <Col>
                      <Card className="border-0 bg-light">
                        <Card.Body>
                          <h6>Email</h6>
                          <p className="mb-0">{userData.email}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                )}

                {/* Sezione Attività */}
                <Row className="mt-4">
                  <Col>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Attività</h5>
                      {isOwnProfile && (
                        <Button variant="outline-primary" size="sm">
                          Crea un post
                        </Button>
                      )}
                    </div>
                    <p className="text-muted">
                      {isOwnProfile
                        ? "Non hai ancora pubblicato nulla"
                        : `${userData.name || "Questo utente"} non ha ancora pubblicato nulla`}
                    </p>
                  </Col>
                </Row>

                {/* Sezione Esperienza placeholder */}
                <Row className="mt-4">
                  <Col>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Esperienza</h5>
                      {isOwnProfile && (
                        <BsPencilFill
                          className="text-muted"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                          title="Modifica esperienza"
                        />
                      )}
                    </div>
                    <p className="text-muted">
                      {isOwnProfile
                        ? "Aggiungi la tua esperienza lavorativa"
                        : "Nessuna esperienza lavorativa condivisa"}
                    </p>
                  </Col>
                </Row>

                {/* Sezione Formazione placeholder */}
                <Row className="mt-4">
                  <Col>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5>Formazione</h5>
                      {isOwnProfile && (
                        <BsPencilFill
                          className="text-muted"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                          title="Modifica formazione"
                        />
                      )}
                    </div>
                    <Card className="border-0">
                      <Card.Body className="d-flex align-items-center">
                        <div className="me-3">
                          <div
                            className="bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "4px",
                              fontSize: "20px",
                            }}
                          >
                            🎓
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">EPICODE Institute of Technology</h6>
                          <p className="text-muted mb-0 small">
                            Corso di sviluppo web full-stack
                          </p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;