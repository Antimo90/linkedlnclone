import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBarDX from "./Components/SideBarDX";
import NavBar from "./Components/NavBar";
import ParteCentrale from "./Components/ParteCentrale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <div className="d-flex">
                <ParteCentrale />
                <SideBarDX />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
