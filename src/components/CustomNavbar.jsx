// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { Button } from "react-bootstrap";
// import Searchbar from "./Searchbar.jsx";
// import { Link } from "react-router-dom";

// function CustomNavbar() {
//   return (
//     <Navbar
//       expand="lg"
//       className="navbarContainer sticky-top"
//       style={{ height: "60px" }}
//     >
{
  /* <Container>
  <div className="d-flex flex-row">
    <div className="logoContainer d-flex align-items-center">
      <Navbar.Brand href="#home">
        <img
          className="navbarLogo img-fluid"
          src="./src/assets/img/Linkedin-logo-3.png"
          alt="Linkedin Logo"
        />
      </Navbar.Brand>
    </div>
    <div className="d-flex align-items-center">
      <Searchbar />
    </div>
  </div>
  <div className="d-flex flex-column ">
    <Navbar.Toggle
      className="navbarCollapseButton"
      aria-controls="basic-navbar-nav"
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/" className="navbarLinks">
          <div className="d-flex flex-column text-center">
            <i className="bi bi-house-door-fill"></i>Home
          </div>
        </Nav.Link>
        <Nav.Link className="navbarLinks" href="#">
          <div className="d-flex flex-column text-center">
            <i className="bi bi-people-fill"></i>
            Rete
          </div>
        </Nav.Link>
        <Nav.Link className="navbarLinks" href="#">
          <div className="d-flex flex-column text-center">
            <i className="bi bi-suitcase-lg-fill"></i>
            Lavoro
          </div>
        </Nav.Link>
        <Nav.Link className="navbarLinks" href="#">
          <div className="d-flex flex-column text-center">
            <i className="bi bi-chat-left-dots-fill"></i>
            Messaggistica
          </div>
        </Nav.Link>
        <Nav.Link className="navbarLinks" href="#">
          <div className="d-flex flex-column text-center">
            <i className="bi bi-bell-fill"></i>
            Notifiche
          </div>
        </Nav.Link>
        <NavDropdown
          drop="start"
          id="dropdown-basic"
          title={
            <span className="navbarLinks d-flex flex-column text-center">
              <div className="navbarProfilePic">
                <img
                  className="profilePic"
                  src="./src/assets/img/Linkedin-logo.png"
                  alt=""
                />
              </div>
              <span>
                Tu <i className="bi-caret-down-fill"></i>
              </span>
            </span>
          }
        >
          <NavDropdown.Item className=".dropdown-item" href="#action/3.1">
            <div>
              <div className="d-flex flex-row">
                <div className="dropdownProfilePic">
                  <img
                    className="dropdownProfilePicImg"
                    src="https://via.placeholder.com/40x40?text=User"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <h2>Nome Utente</h2>
                  <h4>Posizione Lavorativa</h4>
                </div>
              </div>
              <div className="d-flex flex-row mt-3">
                <Button className="dropdownButton1 flex-grow-1">
                  Visualizza <br /> Profilo
                </Button>
                <Button className="dropdownButton2 flex-grow-1">
                  Verifica
                </Button>
              </div>
            </div>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">
            <h2>Account</h2>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="" className="prova">
                  🔓 Prova un mese di Premium a 0 EUR
                </a>
              </li>
              <li className="my-2">
                <a href="" className="yourLinks">
                  Impostazioni e Privacy
                </a>
              </li>
              <li className="my-2">
                <a href="" className="yourLinks">
                  Guida
                </a>
              </li>
              <li className="my-2">
                <a href="" className="yourLinks">
                  Lingua
                </a>
              </li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">
            <h2>Gestisci</h2>
            <ul className="list-unstyled">
              <li className="my-2">
                <a href="" className="yourLinks">
                  Post e attività
                </a>
              </li>
              <li className="my-2">
                <a href="" className="yourLinks">
                  Account per la pubblicazione di offerte lavorative
                </a>
              </li>
            </ul>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
        </NavDropdown>
        <div
          className="navbarSeparator"
          style={{ height: "60px;" }}
        ></div>
        <NavDropdown
          drop="start"
          id="dropdown-basic"
          title={
            <span className="navbarLinks d-flex flex-column text-center">
              <i className="bi bi-grid-3x3-gap-fill me-2"></i>
              <span>
                Per le Aziende <i className="bi-caret-down-fill"></i>
              </span>
            </span>
          }
        >
          <NavDropdown.Item className="dropdown3" href="#action/3.1">
            <div className="d-flex flex-row">
              <div className="me-3">
                <h2 className="dropdown3Title mb-4">Le mie app</h2>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-compass"></i>
                    Trova lead
                  </li>
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-people-fill"></i>
                    Gruppi
                  </li>
                </ul>
                <h5>Talent</h5>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-graph-up"></i>
                    Talent Insights
                  </li>
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-person-workspace"></i>
                    Pubblica un'offerta di lavoro
                  </li>
                </ul>
                <h5>Vendite</h5>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-check2-circle"></i>
                    Marketplace dei servizi
                  </li>
                </ul>
                <h5>Marketing</h5>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-bullseye"></i>
                    Pubblicizza
                  </li>
                </ul>
                <h5>Learning</h5>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4 d-flex flex-row align-items-center">
                    <i className="dropdown3Icons me-3 bi bi-play-btn-fill"></i>
                    Learning
                  </li>
                </ul>
              </div>
              <div className="navbarSeparator"></div>
              <div className="ms-3">
                <h2 className="dropdown3Title">
                  Scopri altro per il business
                </h2>
                <ul className="list-unstyled">
                  <li className="ms-3 my-4">
                    <h3>Assumi su Linkedin</h3>
                    <p>Trova, attrai e assumi</p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Vendi con Linkedin</h3>
                    <p>Sblocca nuove opportunità di vendità</p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Offerta di lavoro gratuita</h3>
                    <p>Ottieni rapidamente candidati qualificati</p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Fai pubblicità su Linkedin</h3>
                    <p>
                      Acquisisci clienti e fai crescere la tua azienda
                    </p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Inizia con Premium</h3>
                    <p>Amplia e sfrutta la tua rete</p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Impara con Linkedin</h3>
                    <p>Corsi per formare i tuoi dipendenti</p>
                  </li>
                  <li className="ms-3 my-4">
                    <h3>Centro per amministratori</h3>
                    <p>Gestisci i dettagli di fatturazione e account</p>
                  </li>
                </ul>
                <h3 className="ms-3 my-4 d-flex flex-row align-items-center">
                  Crea una pagina aziendale{" "}
                  <Button className="dropdownButton3">
                    <i className="addButtonIcon bi-plus-lg"></i>
                  </Button>
                </h3>
              </div>
            </div>
          </NavDropdown.Item>
        </NavDropdown>

        <div className="navbarLinks d-flex align-items-center">
          <a className="navbarPremiumLink text-center" href="">
            Prova Premium per 0 EUR
          </a>
        </div>
      </Nav>
    </Navbar.Collapse>
  </div>
</Container> */
}
//     </Navbar>
//   );
// }

// export default CustomNavbar;

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Button } from "react-bootstrap"
import Searchbar from "./Searchbar.jsx"

import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchUser from "./FetchUser"
import linkedinLogo from "../assets/img/Linkedin-logo-3.png"

function CustomNavbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  // Carica i dati dell'utente quando il componente viene montato
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  return (
    <>
      {/* NAVBAR SUPERIORE */}
      <Navbar
        expand="lg"
        className="navbarContainer sticky-top"
        style={{ height: "60px" }}
      >
        <Container className="d-flex justify-content-between align-items-center w-100">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              className="navbarLogo img-fluid"
              src={linkedinLogo}
              alt="Linkedin Logo"
            />
          </Navbar.Brand>

          {/* Searchbar mobile */}
          <div className="d-block d-md-none flex-grow-1 mx-2">
            <Searchbar />
          </div>

          {/* Icone mobile */}
          <div className="d-flex d-md-none align-items-center ms-2">
            <i className="bi bi-chat-left-dots-fill fs-5 mx-1"></i>
          </div>

          {/* Navbar desktop */}
          <div className="d-none d-md-flex w-100 justify-content-between align-items-center">
            {/* Sinistra: Logo + Searchbars desktop */}
            <div className="d-flex align-items-center">
              <div>
                <Searchbar />
              </div>
            </div>

            {/* Centro: Nav items con icone e testo sotto */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto d-flex flex-row align-items-center">
                <Nav.Link as={Link} to="/" className="navbarLinks">
                  <div className="d-flex flex-column text-center">
                    <i className="bi bi-house-door-fill"></i>
                    Home
                  </div>
                </Nav.Link>
                <Nav.Link className="navbarLinks" href="#">
                  <div className="d-flex flex-column text-center">
                    <i className="bi bi-people-fill"></i>
                    Rete
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/jobs" className="navbarLinks">
                  <div className="d-flex flex-column text-center">
                    <i className="bi bi-suitcase-lg-fill"></i>
                    Lavoro
                  </div>
                </Nav.Link>
                <Nav.Link className="navbarLinks" href="#">
                  <div className="d-flex flex-column text-center">
                    <i className="bi bi-chat-left-dots-fill"></i>
                    Messaggistica
                  </div>
                </Nav.Link>
                <Nav.Link className="navbarLinks" href="#">
                  <div className="d-flex flex-column text-center">
                    <i className="bi bi-bell-fill"></i>
                    Notifiche
                  </div>
                </Nav.Link>

                {/* Dropdown utente */}
                <NavDropdown
                  drop="start"
                  id="dropdown-user"
                  title={
                    <span className="navbarLinks d-flex flex-column text-center">
                      <div className="navbarProfilePic">
                        <img
                          className="profilePic"
                          src={
                            user?.image || "./src/assets/img/Linkedin-logo.png"
                          }
                          alt="Immagine profilo"
                        />
                      </div>
                      <span>
                        Tu <i className="bi-caret-down-fill"></i>
                      </span>
                    </span>
                  }
                >
                  <NavDropdown.Item
                    className=".dropdown-item"
                    href="#action/3.1"
                  >
                    <div>
                      <div className="d-flex flex-row">
                        <div className="dropdownProfilePic">
                          <img
                            className="dropdownProfilePicImg"
                            src={
                              user?.image ||
                              "https://via.placeholder.com/40x40?text=User"
                            }
                            alt="Immagine profilo utente"
                          />
                        </div>
                        <div className="mx-2">
                          <h2>
                            {user?.name && user?.surname
                              ? `${user.name} ${user.surname}`
                              : "Nome Utente"}
                          </h2>
                          <h4>{user?.title || "Posizione Lavorativa"}</h4>
                        </div>
                      </div>
                      <div className="d-flex flex-row mt-3">
                        <Button
                          className="dropdownButton1 flex-grow-1"
                          onClick={() => navigate("/profile")}
                        >
                          Visualizza <br /> Profilo
                        </Button>
                        <Button className="dropdownButton2 flex-grow-1">
                          Verifica
                        </Button>
                      </div>
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>

                {/* Dropdown Aziende */}
                <NavDropdown
                  drop="start"
                  id="dropdown-business"
                  title={
                    <span className="navbarLinks d-flex flex-column text-center">
                      <i className="bi bi-grid-3x3-gap-fill me-2"></i>
                      <span>
                        Per le Aziende <i className="bi-caret-down-fill"></i>
                      </span>
                    </span>
                  }
                >
                  <NavDropdown.Item className="dropdown3" href="#action/3.1">
                    <div className="d-flex flex-row">
                      <div className="me-3">
                        <h2 className="dropdown3Title mb-4">Le mie app</h2>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-compass"></i>
                            Trova lead
                          </li>
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-people-fill"></i>
                            Gruppi
                          </li>
                        </ul>
                        <h5>Talent</h5>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-graph-up"></i>
                            Talent Insights
                          </li>
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-person-workspace"></i>
                            Pubblica un'offerta di lavoro
                          </li>
                        </ul>
                        <h5>Vendite</h5>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-check2-circle"></i>
                            Marketplace dei servizi
                          </li>
                        </ul>
                        <h5>Marketing</h5>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-bullseye"></i>
                            Pubblicizza
                          </li>
                        </ul>
                        <h5>Learning</h5>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4 d-flex flex-row align-items-center">
                            <i className="dropdown3Icons me-3 bi bi-play-btn-fill"></i>
                            Learning
                          </li>
                        </ul>
                      </div>
                      <div className="navbarSeparator"></div>
                      <div className="ms-3">
                        <h2 className="dropdown3Title">
                          Scopri altro per il business
                        </h2>
                        <ul className="list-unstyled">
                          <li className="ms-3 my-4">
                            <h3>Assumi su Linkedin</h3>
                            <p>Trova, attrai e assumi</p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Vendi con Linkedin</h3>
                            <p>Sblocca nuove opportunità di vendità</p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Offerta di lavoro gratuita</h3>
                            <p>Ottieni rapidamente candidati qualificati</p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Fai pubblicità su Linkedin</h3>
                            <p>
                              Acquisisci clienti e fai crescere la tua azienda
                            </p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Inizia con Premium</h3>
                            <p>Amplia e sfrutta la tua rete</p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Impara con Linkedin</h3>
                            <p>Corsi per formare i tuoi dipendenti</p>
                          </li>
                          <li className="ms-3 my-4">
                            <h3>Centro per amministratori</h3>
                            <p>Gestisci i dettagli di fatturazione e account</p>
                          </li>
                        </ul>
                        <h3 className="ms-3 my-4 d-flex flex-row align-items-center">
                          Crea una pagina aziendale{" "}
                          <Button className="dropdownButton3">
                            <i className="addButtonIcon bi-plus-lg"></i>
                          </Button>
                        </h3>
                      </div>
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Link Premium */}
                <div className="navbarLinks d-flex flex-column align-items-center ms-3">
                  <a className="navbarPremiumLink text-center" href="">
                    Prova Premium per 0 <br /> EUR
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

      {/* NAVBAR INFERIORE MOBILE */}
      <div className="mobileBottomNav d-flex d-md-none justify-content-around align-items-center">
        <div className="text-center">
          <i className="bi bi-house-door-fill fs-5"></i>
          <div>Home</div>
        </div>
        <div className="text-center">
          <i className="bi bi-people-fill fs-5"></i>
          <div>Rete</div>
        </div>
        <div className="text-center">
          <i className="bi bi-plus-square-fill fs-5"></i>
          <div>Pubblica</div>
        </div>
        <div className="text-center">
          <i className="bi bi-bell-fill fs-5"></i>
          <div>Notifiche</div>
        </div>
        <div className="text-center">
          <i className="bi bi-briefcase-fill fs-5"></i>
          <div>Lavoro</div>
        </div>
      </div>
    </>
  )
}

export default CustomNavbar
