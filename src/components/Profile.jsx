import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { BsPencilFill, BsCameraFill } from "react-icons/bs";
import imagetop from "../assets/image.png";

const Profile = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <div className="position-relative">
                <Card.Img variant="top" src={imagetop} />
                <BsCameraFill
                  className="position-absolute text-white bg-dark rounded-circle p-2"
                  style={{
                    top: "1rem",
                    right: "1rem",
                    cursor: "pointer",
                    fontSize: "2.5rem",
                    opacity: 0.8,
                  }}
                />
                <Image
                  src="https://placecats.com/300/300"
                  roundedCircle
                  alt="Foto profilo"
                  className="border border-4 border-white"
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
              </div>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
