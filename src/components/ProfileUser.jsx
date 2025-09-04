import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"
import imagetop from "../assets/image.png"
import "../components/profileUser.css"

function ProfileUser() {
  const [isMobile, setIsMobile] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const user = {
    _id: "stefano001",
    name: "Stefano Bianchi",
    profession: "Software Engineer",
    location: "Milano, Italia",
    profilePic: "../assets/img/Stefano.png",
  }

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
            <i className="linkedinPremium bi-linkedin"></i>
            Prova Premium per 0 EUR
          </Card.Link>
        </Card.Body>
      </Card>

      <Card className="my-2 shadow-sm" style={{ width: "100%" }}>
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
          src={user.profilePic}
          alt={`${user.name} profile`}
        />
        <Card.Body className="mb-3">
          <Card.Title className="userName">{user.name}</Card.Title>
          <Card.Text>
            <h3 className="profession">{user.profession}</h3>
            <p className="location">{user.location}</p>
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
            Vedi altro <i className="showMoreButtonIcon bi-caret-down-fill"></i>
          </Button>
        </div>
      )}

      {!isMobile || showMore ? renderExtraCards() : null}
    </>
  )
}

export default ProfileUser
