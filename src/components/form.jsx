import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import regex from "../utils/regex.jsx"; // utils
// redux
import { useDispatch } from "react-redux"; // to call auth_service
import { useSelector } from "react-redux"; // to check the state
// Auth Service
import auth_service from "../services/authService.jsx";
// components
import Alert from "./Alert.jsx";

function Form() {
  // == user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // == alert to show inputs error
  const [alert, setAlert] = useState({});
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlert({
        msg: "All fields are required",
        error: true,
      });
      return;
    }
    // check if email is valid :
    if (!regex(email)) {
      setAlert({
        msg: "Email format is not valid",
        error: true,
      });
      return;
    }
    // no alert
    setAlert({});
    // console.log("Login Success !");
    dispatch(auth_service.login(email, password, rememberMe));
  };

  const { msg } = alert;

  // === Auto log if user checked "Remember me" in previous connexion ===
  const tokenRedux = useSelector((state) => state.login.token);
  const tokenLocal = localStorage.getItem("token");
  const tokenSession = sessionStorage.getItem("token");
  //
  useEffect(() => {
    if (tokenRedux !== null || tokenLocal !== null || tokenSession !== null) {
      navigate("/profile");
    }
  }, [tokenRedux, tokenLocal, tokenSession, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* ====== Alert également en fonction du status si réponse 400 c'est affiché ====== */}
        {/* <button className="sign-in-button">
        {auth.loginStatus === 'pending' ? 'Submitting...' : 'Sign In'}
      </button> */}
        {/* {auth.status === '400' ? <p className="error">{auth.message}</p> : null} */}
        <input className="sign-in-button" type="submit" value="Sign In" />
        {msg !== null ? <Alert alert={alert} /> : ""}
      </form>
    </div>
  );
}

export default Form;
