import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/CustomNavbar";
import "./components/CustomNavbar.css";
import OtherUsersTest from "./components/OtherUsersTest";
import Footer from "./components/Footer";
import SuperContainer from "./components/SuperContainer";

function App() {
  return (
    <>
       <BrowserRouter>
       <CustomNavbar />
                <Routes>
                  <Route path="/" element={<SuperContainer /> } />
                  <Route path="/user/:userId" element={<OtherUsersTest />} />
                </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
