import { Button, Card } from "react-bootstrap"
import imagetop from "../assets/image.png"
import "../components/profileUser.css"

function ProfileUser() {
  return (
    <>
      <Card className="shadow-sm" style={{ width: "100%" }}>
        <Card.Img variant="top" src={imagetop} />
        <img
          className="cardUserPic"
          src="../src/assets/img/Stefano.png"
          alt=""
        />
        <Card.Body className="mb-3">
          <Card.Title className="userName">Nome utente</Card.Title>
          <Card.Text>
            <h3 className="profession">Professione</h3>
            <p className="location">Location</p>
          </Card.Text>
          <Button className="cardButton text-center d-flex flex-row">
            <i class="plusButtonIcon bi-plus-lg"></i>
            <p className="m-0">Esperienza</p>
          </Button>
        </Card.Body>
      </Card>

      <Card className="mt-2 shadow-sm" style={{ width: "100%" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Link
            className="cardLink d-flex flex-row justify-content-between"
            href="#"
          >
            <div>Visitatori del profilo</div>
            <div className="visitorsNumber">4</div>
          </Card.Link>
          <Card.Link className="cardLink ms-0" href="#">
            Visualizza tutte le analisi
          </Card.Link>
        </Card.Body>
      </Card>

      <Card className="mt-2 shadow-sm" style={{ width: "100%" }}>
        <Card.Body>
          <Card.Text className="linkedinPremiumText">
            Sblocca strumenti e informazioni Premium
          </Card.Text>
          <Card.Link className="linkedinPremiumText2" href="#">
            <img
              className="linkedinPremium"
              src="../src/assets/img/LinkedIn-Premium-Badge.png"
              alt=""
            />
            Prova Premium per 0 EUR
          </Card.Link>
        </Card.Body>
      </Card>

      <Card className="mt-2 shadow-sm" style={{ width: "100%" }}>
        <Card.Body className="d-flex flex-column">
          <Card.Link className="userExtLink m-0 my-2" href="#">
            <i className="userExtLinkI me-2 bi-bookmark-fill"></i>Elementi
            salvati
          </Card.Link>
          <Card.Link className="userExtLink m-0 my-2" href="#">
            <i className="userExtLinkI me-2 bi-people-fill"></i>Gruppi
          </Card.Link>
          <Card.Link className="userExtLink m-0 my-2" href="#">
            <i className="userExtLinkI me-2 bi-newspaper"></i>Newsletter
          </Card.Link>
          <Card.Link className="userExtLink m-0 my-2" href="#">
            <i className="userExtLinkI me-2 bi-calendar2-event"></i>Eventi
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProfileUser
