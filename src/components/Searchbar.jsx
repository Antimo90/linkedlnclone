import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import fetchOtherUsers from "../components/otherUser.js";
import { setUsersArray } from "../redux/actions";

const Searchbar = () => {
  const [query, setQuery] = useState("");
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

     fetchOtherUsers().then((fetchedUsers) => {
    dispatch(setUsersArray(fetchedUsers));
    const input = query.trim().toLowerCase();

     const filteredUser = fetchedUsers.find(
      (user) =>
        user.name.toLowerCase().includes(input) ||
        user.surname.toLowerCase().includes(input)
    );


    if (filteredUser) {
      navigate(`/user/${filteredUser._id}`);
    } else {
      alert("Utente non ancora iscritto!");
    }
  })};

  return (
  <Form onSubmit={handleSubmit}>
  <Form.Control
    type="search"
    placeholder="🔍︎ Search..."
    aria-label="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="rounded-5"
  />
</Form>
  );
};

export default Searchbar;
