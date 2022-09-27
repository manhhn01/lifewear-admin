import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  logged: boolean;
}

const initialState: AuthState = {
  logged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
