import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";

const JobSearchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = query.trim();

    if (searchQuery) {
      // Naviga alla pagina jobs con il parametro di ricerca
      navigate(`/jobs?search=${encodeURIComponent(searchQuery)}`);
      setQuery(""); // Pulisce il campo di ricerca
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
      <InputGroup>
        <Form.Control
          type="search"
          placeholder="🔍︎ Cerca lavori..."
          aria-label="Cerca lavori"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-start"
          style={{ fontSize: "0.9rem" }}
        />
        <Button
          variant="outline-primary"
          type="submit"
          className="rounded-end"
          style={{ fontSize: "0.9rem" }}
        >
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default JobSearchbar;
