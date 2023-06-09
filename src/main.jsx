// react
import React from "react";
import ReactDOM from "react-dom/client";
// Router
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// utils
import ScrollToTop from "./utils/ScrollToTop.jsx";
// style
// import "./style/ArgentBank.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>
);
