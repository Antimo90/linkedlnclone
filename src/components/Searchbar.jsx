// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Form, Modal, Button } from "react-bootstrap";
// import fetchOtherUsers from "../components/otherUser.js";
// import { setUsersArray } from "../redux/actions";

// const Searchbar = () => {
//   const [query, setQuery] = useState("");
//   const users = useSelector((state) => state.otherUsers.users);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     fetchOtherUsers().then((fetchedUsers) => {
//       dispatch(setUsersArray(fetchedUsers));
//     });
//   }, [dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const input = query.trim().toLowerCase();
//     cercaUtente(users, input);
//     setQuery("");
//   };

//   const cercaUtente = (arr, input) => {
//     const filteredUser = arr.find(
//       (user) =>
//         (user.name && user.name.toLowerCase().includes(input)) ||
//         (user.surname && user.surname.toLowerCase().includes(input))
//     );

//     console.log("Utente trovato:", filteredUser);
//     if (filteredUser) {
//       navigate(`/user/${filteredUser._id}`);
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Control
//           type="search"
//           placeholder="🔍︎ Search..."
//           aria-label="Search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="rounded-5"
//         />
//       </Form>

//       {showModal && (
//         <Modal show={showModal} centered>
//           <Modal.Header className="d-flex justify-content-center">
//             <Modal.Title>Utente non ancora iscritto!</Modal.Title>
//           </Modal.Header>
//           <Modal.Footer className="d-flex justify-content-center">
//             <Button variant="primary" onClick={() => setShowModal(false)}>
//               OK
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// };

// export default Searchbar;

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Form, Modal, Button } from "react-bootstrap"
import fetchOtherUsers from "../components/otherUser.js"
import { setUsersArray } from "../redux/actions"
import "../components/Searchbar.css"

const Searchbar = () => {
  const [query, setQuery] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  const users = useSelector((state) => state.otherUsers.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetchOtherUsers().then((fetchedUsers) => {
      dispatch(setUsersArray(fetchedUsers))
    })
  }, [dispatch])

  const handleInputChange = (e) => {
    const input = e.target.value
    setQuery(input)

    const lowerInput = input.trim().toLowerCase()
    const matches = users.filter(
      (user) =>
        (user.name && user.name.toLowerCase().includes(lowerInput)) ||
        (user.surname && user.surname.toLowerCase().includes(lowerInput))
    )
    setFilteredUsers(matches)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = query.trim().toLowerCase()
    cercaUtente(users, input)
    setQuery("")
    setFilteredUsers([])
  }

  const cercaUtente = (arr, input) => {
    const filteredUser = arr.find(
      (user) =>
        (user.name && user.name.toLowerCase().includes(input)) ||
        (user.surname && user.surname.toLowerCase().includes(input))
    )

    if (filteredUser) {
      navigate(`/user/${filteredUser._id}`)
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="position-relative">
        <Form.Control
          type="search"
          placeholder="🔍︎ Search..."
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          className="rounded-5"
          autoComplete="off"
        />

        {query && filteredUsers.length > 0 && (
          <ul
            className="searchDropdownList list-group position-absolute mt-2 shadow-lg"
            style={{ zIndex: 1000 }}
          >
            {filteredUsers.map((user) => (
              <li
                key={user._id}
                className="list-group-item list-group-item-action"
                onClick={() => {
                  navigate(`/user/${user._id}`)
                  setQuery("")
                  setFilteredUsers([])
                }}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex flex-row">
                  <div className="searchUserPicContainer">
                    <img
                      className="searchUserPic"
                      src={user.image || "/default-avatar.png"}
                      alt="User image"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    {user.name} {user.surname}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
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
