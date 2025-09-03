import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import {
  Card,
  Container,
  Spinner,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import UserPost from "./UserPost";
import fetchUser from "./FetchUser";
import "./FeedHome.css";

const FeedHome = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [num, setNum] = useState(30);

  // Carica i dati dell'utente all'avvio del componente
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const aumentaNum = () => {
    setNum((prev) => prev + 30);
  };

  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8";

  // Funzione per ricaricare i post
  const refreshPosts = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error("Errore nel caricamento post", response.status);
      }

      const data = await response.json();
      const arrayPost = data.reverse().slice(0, num);
      setPosts(arrayPost);
    } catch (error) {
      console.error("Errore durante il refresh dei post:", error);
    }
  };

  // Espone la funzione refreshPosts al componente padre
  useImperativeHandle(ref, () => ({
    refreshPosts,
  }));

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento post", response.status);
        }
        return response.json();
      })
      .then((data) => {
        const arrayPost = data.reverse().slice(0, num);
        setPosts(arrayPost);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [num]);

  return (
    <Container className="mt-4">
      {/* Componente per creare nuovi post */}
      <UserPost onPostCreated={refreshPosts} />

      {/* Separatore e titolo per i post degli utenti */}
      <div className="feed-section-title">
        <h4 className="text-center mb-3">Gli ultimi post degli utenti</h4>
        <hr className="feed-divider" />
      </div>

      {/* Feed dei post esistenti */}
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        posts.map((post) => (
          <Row key={post._id} className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <Card className="mb-3 post-card post-fade-in">
                <Card.Body>
                  <div className="d-flex align-items-start">
                    {/* Immagine del profilo dell'utente */}
                    <div className="me-3 flex-shrink-0">
                      {post.user?.image ? (
                        <Image
                          src={post.user.image}
                          roundedCircle
                          width={48}
                          height={48}
                          className="post-profile-img"
                          alt={`Immagine profilo di ${
                            post.user?.name || post.username
                          }`}
                          onError={(e) => {
                            // Fallback in caso di errore nel caricamento dell'immagine
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
                        className={`post-profile-img d-flex align-items-center justify-content-center ${
                          post.user?.image ? "d-none" : "d-flex"
                        }`}
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: "#0a66c2",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "16px",
                          fontWeight: "bold",
                          border: "2px solid #ffffff",
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {post.username
                          ? post.username.charAt(0).toUpperCase()
                          : "U"}
                      </div>
                    </div>

                    {/* Contenuto del post */}
                    <div className="flex-grow-1 post-content">
                      <div className="d-flex align-items-center mb-2">
                        <a
                          href="#"
                          className="post-username text-decoration-none me-2"
                        >
                          @{post.username}
                        </a>
                        <span className="post-timestamp">
                          {new Date(post.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="post-text">{post.text}</div>

                      {/* Immagine del post se presente */}
                      {post.image && (
                        <div className="mt-3">
                          <Image
                            src={post.image}
                            fluid
                            rounded
                            className="post-content-image"
                            alt="Immagine del post"
                            style={{
                              maxHeight: "400px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      )}
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center">
          <Button type="button" className="load-more-btn" onClick={() => aumentaNum()}>
            Carica post precedenti
          </Button>
        </Col>
      </Row>
    </Container>
  );
});

export default FeedHome;
