import { useState, useEffect } from "react"
import {
  Card, Form, Button, Spinner, Image, Collapse, Dropdown
} from "react-bootstrap"
import { BsChat, BsPencil, BsTrash, BsThreeDotsVertical } from "react-icons/bs"
import { useSelector } from "react-redux"


const Commento = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [newRating, setNewRating] = useState("5")
const [isLoading, setIsLoading] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [editing, setEditing] = useState(null) 
  const [deleting, setDeleting] = useState(null)

  const user = useSelector((state) => state.user)

  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGJhYWFjMjkxMjgyMTAwMTU0NGRiNDIiLCJpYXQiOjE3NTcwNjc0NzcsImV4cCI6MTc1ODI3NzA3N30.b6S32jWuKg0ikR0Yd2yLPB6KvkLZyq5bfER-VX93btw"
  const API_URL = "https://striveschool-api.herokuapp.com/api/comments/"

  useEffect(() => {
    if (showComments && postId) fetchComments()
  }, [showComments, postId])

const fetchComments = () => {
  setIsLoading(true)
  fetch(`${API_URL}`, { headers: { Authorization: `Bearer ${TOKEN}` } })
    .then(res => {
      if (!res.ok) throw new Error("Errore nel caricamento")
      return res.json()
    })
    .then(data => {
      const filteredComments = data.filter(c => c.elementId === postId)
      setComments(filteredComments)
    })
    .catch(console.error)
    .finally(() => setIsLoading(false))
}



  const postComm = (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: newComment.trim(), rate: newRating, elementId: postId }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nell'aggiunta")
        setNewComment("")
        setNewRating("5")
        return fetchComments()
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  const modComm = (id) => {
    setIsLoading(true)
    fetch(`${API_URL}${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: editing.text.trim(), rate: editing.rate, elementId: postId }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore aggiornamento")
        return fetchComments()
      })
      .then(() => setEditing(null))
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  const delComm = (id) => {
    if (!window.confirm("Vuoi eliminare questo commento?")) return
    setDeleting(id)
    fetch(`${API_URL}${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${TOKEN}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore eliminazione")
        return fetchComments()
      })
      .catch(console.error)
      .finally(() => setDeleting(null))
  }

  return (
    <section className="comment-section mt-3">
      <Button
        variant="link"
        className="p-0 d-flex align-items-center"
        onClick={() => setShowComments(!showComments)}
      >
        <BsChat className="me-2" size={16} />
        <span>{showComments ? "Nascondi" : "Mostra"} commenti</span>
        {comments.length > 0 && (
          <span className="badge bg-secondary ms-2">{comments.length}</span>
        )}
      </Button>

      <Collapse in={showComments}>
        <Card className="comment-card mt-3">
          <Card.Body className="p-3">
            {/* FORM */}
            <Form onSubmit={postComm} className="mb-4 d-flex align-items-start">
              {user?.image ? (
                <Image src={user.image} roundedCircle width={32} height={32} className="me-3" />
              ) : (
                <span className="user-placeholder me-3">
                  {user?.name ? user.name[0].toUpperCase() : "U"}
                </span>
              )}

              <div className="flex-grow-1">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Scrivi un commento..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-2"
                />
                <div className="d-flex justify-content-between align-items-center">
                  <Form.Select
                    size="sm"
                    value={newRating}
                    onChange={(e) => setNewRating(e.target.value)}
                    style={{ width: "auto" }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} ★</option>
                    ))}
                  </Form.Select>
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    disabled={ !newComment.trim()}
                  >
                    { isLoading ? <Spinner as="span" size="sm" /> : "Commenta"}
                  </Button>
                </div>
              </div>
            </Form>

            {/* COMMENTI */}
            {isLoading ? (
              <div className="text-center py-3"><Spinner animation="border" /></div>
            ) : comments.length ? (
              comments.map((c) => (
                <article key={c._id} className="comment-item mb-3 pb-3 border-bottom d-flex align-items-start">
                  {c.author?.image ? (
                    <Image src={c.author.image} roundedCircle width={32} height={32} className="me-3" />
                  ) : (
                    <span className="user-placeholder me-3">
                      {c.author?.name ? c.author.name[0].toUpperCase() : "U"}
                    </span>
                  )}

                  <div className="flex-grow-1">
                    <header className="d-flex justify-content-between">
                      <strong>{c.author?.name || "Utente"}</strong>
                      {c.author?._id === user?._id && (
                        <Dropdown>
                          <Dropdown.Toggle variant="link" size="sm" className="p-0">
                            <BsThreeDotsVertical />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setEditing({ id: c._id, text: c.comment, rate: c.rate })}>
                              <BsPencil className="me-2" size={14} /> Modifica
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => delComm(c._id)}
                              disabled={deleting === c._id}
                              className="text-danger"
                            >
                              {deleting === c._id ? (
                                <Spinner as="span" size="sm" />
                              ) : (
                                <>
                                  <BsTrash className="me-2" size={14} /> Elimina
                                </>
                              )}
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      )}
                    </header>

                    {editing?.id === c._id ? (
                      <>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          value={editing.text}
                          onChange={(e) => setEditing({ ...editing, text: e.target.value })}
                          className="mt-2"
                        />
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <Form.Select
                            size="sm"
                            value={editing.rate}
                            onChange={(e) => setEditing({ ...editing, rate: e.target.value })}
                            style={{ width: "auto" }}
                          >
                            {[1, 2, 3, 4, 5].map((n) => (
                              <option key={n} value={n}>{n}</option>
                            ))}
                          </Form.Select>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => modComm(c._id)}
                            disabled={ !editing.text.trim()}
                          >
                            {isLoading ? <Spinner as="span" size="sm" /> : "Salva"}
                          </Button>
                        </div>
                      </>
                    ) : (
                      <p className="mt-2 mb-0">{c.comment}</p>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <p className="text-center text-muted py-3 m-0">Nessun commento presente.</p>
            )}
          </Card.Body>
        </Card>
      </Collapse>
    </section>
  )
}

export default Commento
