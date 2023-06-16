import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// assets
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
// components
import Nav from "../components/nav.jsx";
// REFRESH NAV without redirection
import { useDispatch } from "react-redux";
import { isToken } from "../slices/loginSlice.js";
import auth_service from "../services/authService.jsx";

function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const logoClick = useSelector((state) => state.login.logoClick);
  const dispatch = useDispatch(); // REFRESH NAV without redirection
  useEffect(() => {
    if (
      (token !== null ||
        (localStorage.getItem("token") !== null && logoClick !== true) ||
        sessionStorage.getItem("token") !== null) &&
      logoClick !== true
    ) {
      // navigate("/profile"); // (comment) for REFRESH NAV without redirection
    } else if (logoClick === true) {
      navigate("/");
    }
    // REFRESH NAV without redirection
    if (
      token !== null ||
      localStorage.getItem("token") !== null ||
      sessionStorage.getItem("token") !== null
    ) {
      dispatch(isToken());
      dispatch(auth_service.userProfile(token));
    }
    //
  }, [token, navigate, logoClick, dispatch]);

  return (
    <div className="body">
      <Nav />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <h2 className="subtitle">No fees.</h2>
            <h2 className="subtitle">No minimum deposit.</h2>
            <h2 className="subtitle">High interest rates.</h2>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <div className="feature-item">
            <img src={iconChat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img src={iconMoney} alt="Money Icon" className="feature-icon" />
            <h3 className="feature-item-title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="feature-item">
            <img
              src={iconSecurity}
              alt="Security Icon"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
