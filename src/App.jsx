import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileTest from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< ProfileTest/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
