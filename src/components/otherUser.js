export const API_URL = "https://striveschool-api.herokuapp.com/api/profile/"
export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGI1NTg2Y2QyOWE0OTAwMTUxZjIwOGYiLCJpYXQiOjE3NTY3MTUxMTYsImV4cCI6MTc1NzkyNDcxNn0.sVCaRIr28GAh-tnXxux6c3bujczEvrkQwyQJvEd5fqE"

//Questa è SOLO una func che restituisce una promise, l'array degli utenti la settiamo nel componente  NaVBAR!!!
const fetchOtherUsers = () => {
  return fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella ricerca degli utenti")
      }
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Errore", error)
      return []
    })
}
export default fetchOtherUsers
