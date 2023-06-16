// react
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// reduc
import { useSelector, useDispatch } from "react-redux";
// Auth Service
import auth_service from "../services/authService.jsx";
// components
import UserHeader from "../components/UserHeader.jsx";
import Nav from "../components/nav.jsx";

function Profile() {
  document.title = "Argent Bank - Profile";
  // Search token
  const token = useSelector((state) => {
    const { token } = state.login;
    // Si le token est présent dans le state de Redux
    if (token !== null) {
      return token;
    } else {
      // Si le token n'est pas dans le state de Redux, vérifier le localStorage
      const localStorageToken = localStorage.getItem("token");
      if (localStorageToken !== null) {
        return localStorageToken;
      } else {
        // Si le token n'est pas dans le localStorage, vérifier le sessionStorage
        const sessionStorageToken = sessionStorage.getItem("token");
        return sessionStorageToken !== null ? sessionStorageToken : null;
      }
    }
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // dispatch(auth_service.userProfile(token));

  // redirection if no token (redirection disable for TESTING)
  useEffect(() => {
    if (token === null) {
      // Redirige sur "/" lors du logout
      navigate("/");
      sessionStorage.clear();
      // console.log("error no token ?");
    } else {
      // recup les infos et les place dans le state
      dispatch(auth_service.userProfile(token));
    }
  }, [token, navigate, dispatch]);

  return (
    <>
      {token !== null ? (
        <div className="body">
          <Nav />
          <main className="main bg-dark">
            <UserHeader />
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">
                  Argent Bank Credit Card (x8349)
                </h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">
                  View transactions
                </button>
              </div>
            </section>
          </main>
        </div>
      ) : (
        <main className="main bg-dark"></main>
      )}
    </>
  );
}

export default Profile;
