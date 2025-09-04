import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form, Modal, Button } from "react-bootstrap"
import fetchOtherUsers from "../components/otherUser.js"
import { setUsersArray } from "../redux/actions"

const Searchbar = () => {
  const [query, setQuery] = useState("")
  const users = useSelector((state) => state.otherUsers.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchOtherUsers().then((fetchedUsers) => {
      dispatch(setUsersArray(fetchedUsers))
    })
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = query.trim().toLowerCase()
    cercaUtente(users, input)
  }

  const cercaUtente = (arr, input) => {
    const filteredUser = arr.find(
      (user) =>
        (user.name && user.name.toLowerCase().includes(input)) ||
        (user.surname && user.surname.toLowerCase().includes(input))
    )

    console.log("Utente trovato:", filteredUser)
    if (filteredUser) {
      navigate(`/user/${filteredUser._id}`)
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
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

      {showModal && (
        <Modal show={showModal} centered>
          <Modal.Header className="d-flex justify-content-center">
            <Modal.Title>Utente non ancora iscritto!</Modal.Title>
          </Modal.Header>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant="primary" onClick={() => setShowModal(false)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  )
}

export default Searchbar
