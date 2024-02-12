import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      email: null,
      idToken: null,
      localId: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.email = action.payload.email;
      state.value.idToken = action.payload.idToken;
      state.value.localId = action.payload.localId;
    },
    clearUser: (state) => {
      state.value.email = null;
      state.value.idToken = null;
      state.value.localId;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
