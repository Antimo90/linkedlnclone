import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/*DA INSERIRE NELLA NAV
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsersArray } from "./reducers/otherUsersReducer";
import { fetchUsers } from "../components/otherUser.js";

const dispatch = useDispatch();

  useEffect(() => {
    fetchUsers().then((users) => {
      dispatch(setUsersArray(users));
    });
  }, [dispatch]);
*/

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const users = useSelector((state) => state.otherUsers.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredUser = users.find(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.surname.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredUser) {
      navigate(`/user/${filteredUser._id}`);
    } else {
      alert("Utente non ancora iscritto!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cerca..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
