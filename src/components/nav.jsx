// router link
import { Link, useNavigate } from "react-router-dom";
// assets
import argentBankLogo from "../assets/argentBankLogo.png";
//
import { useDispatch, useSelector } from "react-redux";
import auth_service from "../services/authService.jsx";
import { logoClick } from "../slices/loginSlice";

function Nav() {
  const user = useSelector((state) => state.user);
  const isAuth = useSelector((state) => state.login.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(auth_service.logout());
    navigate("/");
  };

  const onLogoClick = () => {
    dispatch(logoClick());
  };

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" onClick={onLogoClick} to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuth === false ? (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              {" Sign In "}
            </Link>
          </div>
        ) : isAuth === true ? (
          <div className="main-nav-items">
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {` ${user.firstName} `}
            </Link>
            <div className="main-nav-item" onClick={onLogout}>
              <i className="fa fa-sign-out"></i>
              {" Sign Out "}
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Nav;
