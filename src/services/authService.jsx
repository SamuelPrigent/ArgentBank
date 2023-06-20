import axios from "axios";
import {
  loginFail,
  loginSuccess,
  logoutSuccess,
  isToken,
} from "../slices/loginSlice";
import {
  userFail,
  userLogout,
  userSuccess,
  userUpdateFail,
  userUpdateSuccess,
} from "../slices/userSlice";

const BASE_URL = "http://localhost:3001/api/v1";

/**
 * Login function
 * @param { String } email
 * @param { String } password
 * @param { Boolean } rememberMe
 * @returns { Object }
 */
const login = (email, password, rememberMe) => (dispatch) => {
  axios
    .post(BASE_URL + "/user/login", { email, password })
    .then((response) => {
      if (rememberMe) {
        // in local storage if checked + session storage
        // si je ferme le navigateur je reste connecté tant que le token n'expire pas
        localStorage.setItem("token", response.data.body.token);
      } else {
        // session storage if not checked
        // lorsque je ferme le navigateur je ne suis plus connecté
        sessionStorage.setItem("token", response.data.body.token);
      }
      dispatch(loginSuccess(response.data));
      return response.data;
    })
    .catch((err) => {
      dispatch(loginFail(err.response.data.message));
    });
};

/**
 * Get user profile
 * @param { String } token
 */
const userProfile = (value_token, navigate) => (dispatch) => {
  const token =
    localStorage.getItem("token") !== null
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token") !== null
      ? sessionStorage.getItem("token")
      : value_token;

  axios
    .post(
      BASE_URL + "/user/profile",
      { token },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((response) => {
      dispatch(userSuccess(response.data));
      dispatch(isToken());
    })
    .catch((err) => {
      dispatch(userFail(err.response));
      if (err.response.data.status === 401) {
        // if 401 error with token we remove it and logout
        localStorage.removeItem("token");
        sessionStorage.clear();
        dispatch(logoutSuccess());
        // redirection
        if (navigate) {
          navigate("/");
        }
      }
    });
};

/**
 * Update user profile
 * @param { String } firstName
 * @param { String } lastName
 * @param { String } token
 */
const updateProfile =
  (firstName, lastName, value_token, navigate) => (dispatch) => {
    const token =
      localStorage.getItem("token") !== null
        ? localStorage.getItem("token")
        : sessionStorage.getItem("token") !== null
        ? sessionStorage.getItem("token")
        : value_token;

    axios
      .put(
        BASE_URL + "/user/profile",
        { firstName: firstName, lastName: lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        dispatch(userUpdateSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userUpdateFail(err.response));
        if (err.response.data.status === 401) {
          // if 401 error with token we remove it and logout
          localStorage.removeItem("token");
          sessionStorage.clear();
          dispatch(logoutSuccess());
          // redirection
          if (navigate) {
            navigate("/");
          }
        }
      });
  };

/**
 * Logout function
 */
const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  sessionStorage.clear();
  dispatch(userLogout());
  dispatch(logoutSuccess());
};

// export auth_service
const auth_service = { login, logout, userProfile, updateProfile };
export default auth_service;
