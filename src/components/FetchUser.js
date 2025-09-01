import { setUser } from "../redux/actions";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/me";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NTg2Y2QyOWE0OTAwMTUxZjIwOGYiLCJpYXQiOjE3NTY3MTUxMTYsImV4cCI6MTc1NzkyNDcxNn0.sVCaRIr28GAh-tnXxux6c3bujczEvrkQwyQJvEd5fqE";

const fetchUser = () => {
  return (dispatch) => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento del profilo...");
        }
        return response.json();
      })
      .then((data) => {
        const receivedData = {
          name: data.name,
          surname: data.surname,
          email: data.email,
          username: data.username,
          bio: data.bio,
          title: data.title,
          area: data.area,
          image: data.image,
        };
        dispatch(setUser(receivedData));
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
};
export default fetchUser;
