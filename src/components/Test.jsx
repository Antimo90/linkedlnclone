import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../components/FetchUser";

const ProfileTest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); 

  useEffect(() => {
    dispatch(fetchUser()); 
  }, [dispatch]);

  return (
    <>
      {user.name ? (
       <>
          <h2>
            {user.name} {user.surname}
          </h2>
          <p>
            Username: {user.username}
          </p>
          <p>
            Email: {user.email}
          </p>
          <p>
            Bio: {user.bio}
          </p>
          <p>
            Title: {user.title}
          </p>
          <p>
            Area: {user.area}
          </p>
          {user.image && (
            <img
              src={user.image}
              alt="profile"
              width="120"
              style={{ borderRadius: "50%", marginTop: "10px" }}
            />
          )}
   </>
      ) : (
        <p>Caricamento dati utente...</p>
      )}
    </>
  );
};

export default ProfileTest;
