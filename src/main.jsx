// react
import React from "react";
import ReactDOM from "react-dom/client";
// Router
import App from "./App.jsx";
// redux state gestion
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
