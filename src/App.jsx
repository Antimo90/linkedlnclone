// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import CustomNavbar from "./components/CustomNavbar";
// import "./components/CustomNavbar.css";
// import OtherUsersTest from "./components/OtherUsersTest";
// import Footer from "./components/Footer";
// import SuperContainer from "./Components/SuperContainer";
// import FeedHome from "./components/FeedHome";
// import Jobs from "./components/Jobs";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <CustomNavbar />
//         <Routes>
//           <Route path="/profile" element={<SuperContainer />} />
//           <Route path="/user/:userId" element={<OtherUsersTest />} />
//           <Route path="/jobs" element={<Jobs />} />
//           <Route path="/" element={<FeedHome />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/CustomNavbar";
import "./components/CustomNavbar.css";
import OtherUsersTest from "./components/OtherUsersTest";
import Footer from "./components/Footer";
import SuperContainer from "./Components/SuperContainer";
import FeedHome from "./components/FeedHome";
import Jobs from "./components/Jobs";
import WidgetMessaggi from "./Components/WidgetMessaggi";
function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();

  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/profile" element={<SuperContainer />} />
        <Route path="/user/:userId" element={<OtherUsersTest />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/" element={<FeedHome />} />
      </Routes>
      <Footer />

      {/* Mostra il widget in tutte le pagine tranne /jobs */}
      {location.pathname !== "/jobs" && <WidgetMessaggi />}
    </>
  );
}

export default App;
