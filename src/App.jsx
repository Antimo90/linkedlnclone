import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import "./components/CustomNavbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import OtherUsersTest from "./components/OtherUsersTest";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/user/:userId" element={<OtherUsersTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
