// react
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// Auth Service
import auth_service from "../services/authService.jsx";
// components
import UserHeader from "../components/UserHeader.jsx";
import Nav from "../components/nav.jsx";
// cookie
// import Cookies from "js-cookie";

function Profile() {
  // SEARCH TOKEN COOKIE METHOD
  // const getToken = () => {
  //   // cookie token
  //   const cookieToken = Cookies.get("token");
  //   if (cookieToken !== "undefined") {
  //     // console.log("Cookie token", cookieToken);
  //     console.log("cookieToken");
  //     return cookieToken;
  //   }
  //   // token localStorage
  //   const localStorageToken = localStorage.getItem("token");
  //   if (localStorageToken !== null) {
  //     return localStorageToken;
  //   }
  //   // if token in sessionStorage
  //   const sessionStorageToken = sessionStorage.getItem("token");
  //   if (sessionStorageToken !== null) {
  //     return sessionStorageToken;
  //   }
  //   return null;
  // };
  // // get token via function
  // const token = getToken();

  document.title = "Profile - Argent Bank";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    //  redirection if no token or error 401
    const token = sessionStorage.getItem("token")
      ? null
      : localStorage.getItem("token")
      ? null
      : null;

    // navigate in params allow us to navigate if error 401
    dispatch(auth_service.userProfile(token, navigate));
  }, [navigate, dispatch]);

  return (
    <>
      {/* {token !== null ? ( */}
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
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      </div>
      {/* ) : (
        <main className="main bg-dark"></main>
      )} */}
    </>
  );
}

export default Profile;
