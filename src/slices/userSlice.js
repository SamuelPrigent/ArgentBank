import { createSlice } from "@reduxjs/toolkit";

// Initial user state
const userState = {
  email: null,
  firstName: null,
  lastName: null,
  id: null,
  error: null,
};

// User slice
const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    userSuccess: (state, action) => {
      const { email, firstName, lastName, id } = action.payload.body || {};
      state.email = email || null;
      state.firstName = firstName || null;
      state.lastName = lastName || null;
      state.id = id || null;
      state.error = null;
    },
    userFail: (state, action) => {
      const { message } = action.payload;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.error = message || null;
    },
    userLogout: (state) => {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.id = null;
      state.error = null;
    },
    userUpdateSuccess: (state, action) => {
      const { email, firstName, lastName, id } = action.payload.body || {};
      state.email = email || null;
      state.firstName = firstName || null;
      state.lastName = lastName || null;
      state.id = id || null;
      state.error = null;
    },
    userUpdateFail: (state, action) => {
      const { email, firstName, lastName, id, message } =
        action.payload.body || {};
      state.email = email || null;
      state.firstName = firstName || null;
      state.lastName = lastName || null;
      state.id = id || null;
      state.error = message || null;
    },
  },
});

export const {
  userSuccess,
  userFail,
  userLogout,
  userUpdateSuccess,
  userUpdateFail,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
