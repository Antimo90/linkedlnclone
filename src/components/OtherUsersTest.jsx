import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OtherUsersTest = () => {
  const { userId } = useParams(); 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

 const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NTg2Y2QyOWE0OTAwMTUxZjIwOGYiLCJpYXQiOjE3NTY3MTUxMTYsImV4cCI6MTc1NzkyNDcxNn0.sVCaRIr28GAh-tnXxux6c3bujczEvrkQwyQJvEd5fqE";


  useEffect(() => {
    const API_URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
    
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento del profilo utente");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Errore:", error);
        setIsError("Utente non trovato");
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <p>Caricamento...</p>;
  }

  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <>
       {isLoading && <p>Caricamento...</p>}
      {isError && <p>{isError}</p>}
      {!isLoading && !isError && user && (
        <>
          <img src={user.image} alt="img" width="150" />
          <p>{user.name} {user.surname}</p>
          <p>{user.username}</p>
          <p>{user.area}</p>
          <p>{user.email}</p>
          <p>{user.title}</p>
        </>
      )}
    </>
  );
};

export default OtherUsersTest;
