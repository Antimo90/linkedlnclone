import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import { API_URL, TOKEN } from "./otherUser";

const OtherUsersTest = () => {
  const { userId } = useParams();
  const users = useSelector((state) => state.otherUsers.users);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funzione per recuperare un singolo utente dalle API
  const fetchSingleUser = async (id) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`${API_URL}${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Errore ${response.status}: Utente non trovato`);
      }

      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      console.error("Errore nel recupero dell'utente:", err);
      setError(err.message || "Errore nel caricamento del profilo utente");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) {
      setError("ID utente non valido");
      setIsLoading(false);
      return;
    }

    // Prima prova a trovare l'utente nella lista già caricata
    if (users && users.length > 0) {
      const utenteTrovato = users.find((u) => u._id === userId);
      if (utenteTrovato) {
        setUser(utenteTrovato);
        setIsLoading(false);
        setError(null);
        return;
      }
    }

    // Se non è nella lista, prova a recuperarlo dalle API
    fetchSingleUser(userId);
  }, [users, userId]);

  return (
    <UserProfile 
      userData={user} 
      isLoading={isLoading} 
      error={error} 
      isOwnProfile={false} 
    />
  );
};

export default OtherUsersTest;

