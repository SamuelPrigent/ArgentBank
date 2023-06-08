// router
import { Route, Routes } from "react-router-dom";
// style
import "./style/index.css";
import "./style/ArgentBank.css";
// pages
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/profile.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      {/* <Route path="*" element={<Error />} />  */}
    </Routes>
  );
}

export default App;
