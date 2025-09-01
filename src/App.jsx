import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import "./components/CustomNavbar.css"
import "bootstrap-icons/font/bootstrap-icons.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
