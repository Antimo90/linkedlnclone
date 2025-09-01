import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const users = useSelector((state) => state.otherUsers.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredUser = users.find(
      (user) =>
        user.name.toLowerCase().includes(query.trim().toLowerCase()) ||
        user.surname.toLowerCase().includes(query.trim().toLowerCase())
    );

    if (filteredUser) {
      navigate(`/user/${filteredUser._id}`);
    } else {
      alert("Utente non ancora iscritto!");
    }
  };

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
