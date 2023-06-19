import { createSlice } from "@reduxjs/toolkit";

// Initial login state
const loginState = {
  token: localStorage.getItem("token"),
  isAuth: false,
  error: null,
  logoClick: null,
};

// Login slice
const loginSlice = createSlice({
  name: "login",
  initialState: loginState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token } = action.payload.body || {};
      state.token = token || null;
      state.isAuth = true;
      state.error = null;
    },
    loginFail: (state, action) => {
      const { payload } = action;
      state.token = null;
      state.isAuth = false;
      state.error = payload || null;
    },
    logoutSuccess: (state) => {
      state.token = null;
      state.isAuth = false;
      state.error = null;
    },
    isToken: (state) => {
      state.isAuth = true;
    },
    logoClick: (state) => {
      state.logoClick = true;
    },
  },
});

export const { loginSuccess, loginFail, logoutSuccess, isToken, logoClick } =
  loginSlice.actions;

export const loginReducer = loginSlice.reducer;
