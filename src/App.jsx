import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import "./components/CustomNavbar.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import ProfileTest from "./components/Test"
import OtherUsersTest from "./components/OtherUsersTest"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<ProfileTest />} />
          <Route path="/user/:userId" element={<OtherUsersTest />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
