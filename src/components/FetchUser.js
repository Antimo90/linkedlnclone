import { setUser } from "../redux/actions"

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/me"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NzcxNDE2MjdjNjAwMTVmOGM1NjQiLCJpYXQiOjE3NTY3MjI5NjQsImV4cCI6MTc1NzkzMjU2NH0.N8tIO-J30NgFtgpwTRBWoX-nLnWcJqYp9V738bTZVv8"

const fetchUser = () => {
  return (dispatch) => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento del profilo...")
        }
        return response.json()
      })
      .then((data) => {
        const receivedData = {
          _id: data._id,
          name: data.name,
          surname: data.surname,
          email: data.email,
          username: data.username,
          bio: data.bio,
          title: data.title,
          area: data.area,
          image: data.image,
        }
        dispatch(setUser(receivedData))
      })
      .catch((error) => {
        console.error("Errore:", error)
      })
  }
}
export default fetchUser
