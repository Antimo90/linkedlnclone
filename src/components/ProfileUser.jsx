import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import imagetop from "../assets/image.png";
import imagempty from "../assets/profilo-vuoto.png";
import "../components/profileUser.css";

function ProfileUser() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  );

  return (
    <>
      <Card className="shadow-sm" style={{ width: "100%" }}>
        <Card.Img
          className="cardUserTop"
          variant="top"
          src={imagetop || null}
        />
        <div className="specialCardUserPic">
          <img
            className="cardUserPic"
            src={user.image || imagempty}
            alt={`${user.name} profile`}
          />
        </div>
        <Card.Body className="mb-3">
          <Card.Title className="userName">
            {user.name} {user.surname}
          </Card.Title>
          <div>
            <p className="profession">{user.title}</p>
            <p className="location">{user.area}</p>
          </div>
          <Button className="cardButton text-center d-flex flex-row">
            <i className="bi-plus-lg"></i>
            <p className="truncate m-0">Esperienza</p>
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
            Vedi altro <i className="bi-caret-down-fill"></i>
          </Button>
        </div>
      )}

      {!isMobile || showMore ? renderExtraCards() : null}
    </>
  );
}

export default ProfileUser;
