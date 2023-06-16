// router
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// utils
import ScrollToTop from "./utils/ScrollToTop.jsx";
// pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
// components
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="*" element={<Error />} />  */}
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
