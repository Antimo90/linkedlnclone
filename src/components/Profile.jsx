import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { BsPencilFill, BsCameraFill, BsX } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../components/FetchUser";
import imagetop from "../assets/image.png";
import ExperienceSection from "./ExperienceSection";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <>
      <Container className="mt-4 mb-3">
        <Row>
          <Col>
            <Card>
              <div className="position-relative">
                <Card.Img variant="top" src={imagetop} />
                <BsCameraFill
                  className="position-absolute text-primary bg-white rounded-circle p-2"
                  style={{
                    top: "1rem",
                    right: "1rem",
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    opacity: 0.8,
                  }}
                />
                {user.image && (
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
                    }}
                  />
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
                          <h6 className="mb-0 fw-bold">
                            Disponibile a lavorare
                          </h6>
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
                          <strong>
                            Fai sapere che stai facendo selezione{" "}
                          </strong>{" "}
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
        
        {/* Sezione Esperienza */}
        <Row className="mt-3">
          <Col>
            <ExperienceSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
