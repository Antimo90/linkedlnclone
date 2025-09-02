import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const OtherUsersTest = () => {
  const { userId } = useParams();
  const users = useSelector((state) => state.otherUsers.users);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (users && users.length > 0) {
      const utenteTrovato = users.find((u) => u._id === userId);
      setUser(utenteTrovato || null);
      setIsLoading(false);
    } else if (users && users.length === 0) {
      setIsLoading(false);
    }
  }, [users, userId]); 

  if (isLoading || !users) {
    return <p>Caricamento utenti in corso...</p>;
  }

  if (!user) {
    return <p>Utente non ancora iscritto!</p>;
  }

  return (
    <>
      <img src={user.image} alt="img" width="150" />
      <p>{user.name} {user.surname}</p>
      <p>{user.username}</p>
      <p>{user.area}</p>
      <p>{user.email}</p>
      <p>{user.title}</p>
    </>
  );
};

export default OtherUsersTest;

