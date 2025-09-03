import { useEffect, useState } from 'react';
import { Card, Container, Spinner, Button } from 'react-bootstrap';

const FeedHome = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [num, setNum] = useState(30);


 const aumentaNum = () => {
  setNum(prev => prev + 30);
};

  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/"
  const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8";

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento post', response.status);
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
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        posts.map((post) => (
          <Card key={post._id} className="mb-3">
            <Card.Body>
              <Card.Title>@{post.username}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
              <Card.Subtitle className="text-muted" style={{ fontSize: '0.8rem' }}>
                Creato il: {new Date(post.createdAt).toLocaleString()}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))
      )}
      <Button type="button" onClick={() => aumentaNum()}>Pag</Button>
    </Container>
  );
};

export default FeedHome;
