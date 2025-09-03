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
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../components/FetchUser";
import { uploadProfileImage, uploadCoverImage } from "../redux/actions";
import { getCoverImage } from "../services/imageUploadService";
import imagetop from "../assets/image.png";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const fileInputRef = useRef(null);
  const coverImageInputRef = useRef(null);
  const [localCoverImage, setLocalCoverImage] = useState(null);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // Carica l'immagine di copertina salvata localmente quando l'utente è disponibile
  useEffect(() => {
    if (user._id) {
      const savedCoverImage = getCoverImage(user._id);
      if (savedCoverImage) {
        setLocalCoverImage(savedCoverImage);
      }
    }
  }, [user._id]);

  // Funzione per gestire il click sull'immagine del profilo
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Funzione per gestire il click sull'icona camera per l'immagine di copertina
  const handleCoverImageClick = () => {
    coverImageInputRef.current?.click();
  };

  // Funzione per gestire il cambio del file del profilo
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && user._id) {
      try {
        await dispatch(uploadProfileImage(user._id, file));
      } catch (error) {
        console.error("Errore durante l'upload:", error);
      }
    }
  };

  // Funzione per gestire il cambio dell'immagine di copertina
  const handleCoverImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && user._id) {
      try {
        // Utilizzo l'azione Redux per l'upload permanente (ora salva in localStorage)
        const result = await dispatch(uploadCoverImage(user._id, file));
        // Aggiorno lo stato locale con la nuova immagine
        setLocalCoverImage(result.coverImage);
        console.log(
          "Immagine di copertina caricata e salvata localmente:",
          file.name
        );
      } catch (error) {
        console.error(
          "Errore durante il salvataggio dell'immagine di copertina:",
          error
        );
      }
    }
  };

  return (
    <>
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
              {/* Icona camera per cambiare l'immagine di copertina */}
              <BsCameraFill
                className="position-absolute text-primary bg-white rounded-circle p-2"
                style={{
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                  fontSize: "24px",
                  zIndex: 2,
                }}
                onClick={handleCoverImageClick}
                title="Cambia immagine di copertina"
              />

              {/* Input file nascosto per l'upload del profilo */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: "none" }}
              />
              {/* Input file nascosto per l'upload dell'immagine di copertina */}
              <input
                type="file"
                ref={coverImageInputRef}
                onChange={handleCoverImageChange}
                accept="image/*"
                style={{ display: "none" }}
              />

              {user.image ? (
                <div className="position-relative">
                  <Image
                    src={user.image}
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
                      cursor: "pointer",
                    }}
                    onClick={handleImageClick}
                  />
                  {/* Overlay per indicare che è cliccabile */}
                  {user.imageUploadLoading && (
                    <div
                      className="d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded-circle"
                      style={{
                        position: "absolute",
                        bottom: "-70px",
                        left: "30px",
                        width: "150px",
                        height: "150px",
                        zIndex: 2,
                      }}
                    >
                      <Spinner animation="border" variant="light" />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="d-flex align-items-center justify-content-center bg-secondary rounded-circle border border-4 border-white mb-4"
                  style={{
                    position: "absolute",
                    bottom: "-70px",
                    left: "30px",
                    width: "150px",
                    height: "150px",
                    zIndex: 1,
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                >
                  <BsCameraFill className="text-white" size={40} />
                </div>
              )}
            </div>
            <div className="text-end mt-2 me-4">
              <BsPencilFill
                className="text-secondary mt-2"
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
            {/* Messaggio di errore per l'upload */}
            {user.imageUploadError && (
              <Alert variant="danger" className="mt-2 mx-3">
                <small>
                  Errore durante l'upload dell'immagine: {user.imageUploadError}
                </small>
              </Alert>
            )}

            <Card.Body className="mt-5">
              <div className="d-flex align-items-center mb-2">
                <Card.Title>
                  {user.name} {user.surname}
                </Card.Title>
                <Button
                  variant="button"
                  className="btn  btn-sm me-5 text-primary ms-2 fw-bold"
                  style={{
                    borderRadius: "20px",
                    borderStyle: "dashed",
                    borderColor: "#0d6efd",
                    color: "black",
                  }}
                >
                  <span className="me-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                      />
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                    </svg>
                  </span>{" "}
                  Aggiungi badge di verifica
                </Button>
                <span className="ms-5 me-5">
                  <a href="#" className="text-dark text-decoration-none">
                    ISIS Facchinetti
                  </a>
                </span>
              </div>
              <Card.Text className="mb-0">{user.bio}</Card.Text>
              <Card.Text className="text-secondary mb-0">
                {user.area} .{" "}
                <Button variant="link" className="btn btn-link text-primary">
                  Informazioni di contatto
                </Button>
              </Card.Text>
              <div>
                <a href="#" className="btn btn-link text-decoration-none">
                  320 collegamenti
                </a>{" "}
              </div>
              <div>
                <Button variant="btn btn-primary rounded-pill me-2 fw-bold">
                  Disponibile per
                </Button>
                <Button
                  className="rounded-pill me-2 fw-bold"
                  style={{
                    backgroundColor: "transparent",
                    color: "#0d6efd",
                    border: "1px solid #0d6efd",
                  }}
                >
                  Aggiungi sezione del profilo
                </Button>
                <Button
                  className="rounded-pill me-2 fw-bold"
                  style={{
                    backgroundColor: "transparent",
                    color: "#0d6efd",
                    border: "1px solid #0d6efd",
                  }}
                >
                  Migliora profilo
                </Button>
                <Button
                  className="rounded-pill me-2 fw-bold text-secondary"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #6c757d",
                  }}
                >
                  Risorse
                </Button>
              </div>
              <Row className="mt-4">
                <Col>
                  <Card
                    className="h-100 "
                    style={{ backgroundColor: "#E8F0FE" }}
                  >
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0 fw-bold">Disponibile a lavorare</h6>
                        <BsPencilFill
                          className="text-secondary"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <p className="m-0">
                        Ruoli di Sviluppatore, Web developer, Sviluppator...
                      </p>
                      <a href="#" className="text-decoration-none">
                        Mostra dettagli
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="h-100 position-relative">
                    <Card.Body>
                      <BsX
                        className="position-absolute fs-4 text-secondary"
                        style={{
                          top: "0.5rem",
                          right: "0.5rem",
                          cursor: "pointer",
                        }}
                      />
                      <p className="mb-1">
                        <strong>Fai sapere che stai facendo selezione </strong>{" "}
                        e attrai candidati qualificati.
                      </p>
                      <a href="#" className="text-decoration-none">
                        Inizia
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
