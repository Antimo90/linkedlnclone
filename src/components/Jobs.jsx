import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
  Alert,
  InputGroup,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import "./Jobs.css";

const Jobs = () => {
  // Hook per gestire i parametri URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Stati per gestire i dati e i filtri
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const [companyFilter, setCompanyFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [limit, setLimit] = useState(10);

  // URL base dell'API
  const API_BASE_URL = "https://strive-benchmark.herokuapp.com/api/jobs";

  // Funzione per recuperare i lavori dall'API
  const fetchJobs = async (queryParams = "") => {
    try {
      setLoading(true);
      setError(null);

      const url = queryParams ? `${API_BASE_URL}${queryParams}` : API_BASE_URL;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
      }

      const data = await response.json();
      setJobs(data.data || []);
    } catch (err) {
      setError(err.message);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  // Carica i lavori al mount del componente e quando cambiano i parametri URL
  useEffect(() => {
    const searchParam = searchParams.get("search");
    if (searchParam) {
      setSearchQuery(searchParam);
      fetchJobs(`?search=${encodeURIComponent(searchParam)}`);
    } else {
      fetchJobs();
    }
  }, [searchParams]);

  // Gestione della ricerca per query
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchJobs(`?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      fetchJobs();
    }
  };

  // Gestione del filtro per azienda
  const handleCompanyFilter = (e) => {
    e.preventDefault();
    if (companyFilter.trim()) {
      fetchJobs(`?company=${encodeURIComponent(companyFilter.trim())}`);
    } else {
      fetchJobs();
    }
  };

  // Gestione del filtro per categoria
  const handleCategoryFilter = (e) => {
    e.preventDefault();
    if (categoryFilter.trim()) {
      fetchJobs(
        `?category=${encodeURIComponent(categoryFilter.trim())}&limit=${limit}`
      );
    } else {
      fetchJobs();
    }
  };

  // Reset di tutti i filtri
  const resetFilters = () => {
    setSearchQuery("");
    setCompanyFilter("");
    setCategoryFilter("");
    setLimit(10);
    fetchJobs();
  };

  // Funzione per formattare la data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container fluid className="jobs-container py-4">
      <Row>
        <Col>
          <h1 className="jobs-title mb-4">
            Le principali offerte di lavoro per te
          </h1>

          {/* Sezione Filtri */}
          <Card className="mb-4 filters-card">
            <Card.Header>
              <h5 className="mb-0">Filtri di Ricerca</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {/* Ricerca per query */}
                <Col md={4} className="mb-3">
                  <Form onSubmit={handleSearch}>
                    <Form.Label>Cerca per parola chiave</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Es: developer, manager..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Button variant="primary" type="submit">
                        <i className="bi bi-search"></i>
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>

                {/* Filtro per azienda */}
                <Col md={4} className="mb-3">
                  <Form onSubmit={handleCompanyFilter}>
                    <Form.Label>Filtra per azienda</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Es: Google, Microsoft..."
                        value={companyFilter}
                        onChange={(e) => setCompanyFilter(e.target.value)}
                      />
                      <Button variant="success" type="submit">
                        <i className="bi bi-building"></i>
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>

                {/* Filtro per categoria */}
                <Col md={4} className="mb-3">
                  <Form onSubmit={handleCategoryFilter}>
                    <Form.Label>Filtra per categoria</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Es: writing, data..."
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                      />
                      <Form.Control
                        type="number"
                        placeholder="Limite"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        min="1"
                        max="50"
                        style={{ maxWidth: "80px" }}
                      />
                      <Button variant="info" type="submit">
                        <i className="bi bi-funnel"></i>
                      </Button>
                    </InputGroup>
                  </Form>
                </Col>
              </Row>

              {/* Pulsante Reset */}
              <Row>
                <Col>
                  <Button variant="outline-secondary" onClick={resetFilters}>
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Reset Filtri
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Stato di caricamento */}
          {loading && (
            <div className="text-center py-5">
              <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">Caricamento...</span>
              </Spinner>
              <p className="mt-2">Caricamento opportunità di lavoro...</p>
            </div>
          )}

          {/* Gestione errori */}
          {error && (
            <Alert variant="danger" className="mb-4">
              <Alert.Heading>Errore nel caricamento</Alert.Heading>
              <p>{error}</p>
              <Button variant="outline-danger" onClick={() => fetchJobs()}>
                Riprova
              </Button>
            </Alert>
          )}

          {/* Lista dei lavori */}
          {!loading && !error && (
            <>
              <div className="mb-3">
                <h5>Risultati trovati: {jobs.length}</h5>
              </div>

              {jobs.length === 0 ? (
                <Alert variant="info">
                  <Alert.Heading>Nessun risultato</Alert.Heading>
                  <p>
                    Non sono stati trovati annunci di lavoro con i criteri di
                    ricerca specificati.
                  </p>
                </Alert>
              ) : (
                <Row>
                  {jobs.map((job) => (
                    <Col key={job._id} lg={6} className="mb-4">
                      <Card className="job-card h-100 shadow-sm">
                        <Card.Header className="d-flex justify-content-between align-items-start">
                          <div>
                            <h6 className="company-name mb-1">
                              {job.company_name}
                            </h6>
                            <small className="text-muted">
                              {job.publication_date &&
                                formatDate(job.publication_date)}
                            </small>
                          </div>
                          {job.job_type && (
                            <span
                              className={`badge ${
                                job.job_type === "full_time"
                                  ? "bg-success"
                                  : job.job_type === "contract"
                                  ? "bg-warning"
                                  : "bg-info"
                              }`}
                            >
                              {job.job_type.replace("_", " ").toUpperCase()}
                            </span>
                          )}
                        </Card.Header>

                        <Card.Body>
                          <Card.Title className="job-title">
                            {job.title}
                          </Card.Title>

                          <div className="job-details mb-3">
                            {job.category && (
                              <p className="mb-1">
                                <i className="bi bi-tag me-2"></i>
                                <strong>Categoria:</strong> {job.category}
                              </p>
                            )}

                            {job.candidate_required_location && (
                              <p className="mb-1">
                                <i className="bi bi-geo-alt me-2"></i>
                                <strong>Località:</strong>{" "}
                                {job.candidate_required_location}
                              </p>
                            )}

                            {job.salary && (
                              <p className="mb-1">
                                <i className="bi bi-currency-dollar me-2"></i>
                                <strong>Stipendio:</strong> {job.salary}
                              </p>
                            )}
                          </div>

                          {job.description && (
                            <div className="job-description">
                              <p
                                className="text-muted"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    job.description.length > 200
                                      ? job.description.substring(0, 200) +
                                        "..."
                                      : job.description,
                                }}
                              ></p>
                            </div>
                          )}
                        </Card.Body>

                        <Card.Footer className="bg-transparent">
                          {job.url && (
                            <Button
                              variant="primary"
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-100"
                            >
                              <i className="bi bi-box-arrow-up-right me-2"></i>
                              Visualizza Annuncio
                            </Button>
                          )}
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
