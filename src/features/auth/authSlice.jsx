import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      mail: null,
      idToken: null,
    },
  },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
