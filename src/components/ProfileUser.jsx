import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import imagetop from "../assets/image.png"
import "../components/profileUser.css"

function ProfileUser() {
  const [isMobile, setIsMobile] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderExtraCards = () => (
    <>
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

  return (
    <>
      <Card className="shadow-sm" style={{ width: "100%" }}>
        <Card.Img className="cardUserTop" variant="top" src={imagetop} />
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
            <i className="plusButtonIcon bi-plus-lg"></i>
            <p className="m-0">Esperienza</p>
          </Button>
        </Card.Body>
      </Card>

      {isMobile && !showMore && (
        <div className="text-center my-2">
          <Button
            variant="link"
            onClick={() => setShowMore(true)}
            className="showMoreButton"
          >
            Vedi altro <i class="showMoreButtonIcon bi-caret-down-fill"></i>
          </Button>
        </div>
      )}

      {!isMobile || showMore ? renderExtraCards() : null}
    </>
  )
}

export default ProfileUser
