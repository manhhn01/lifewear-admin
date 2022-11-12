import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token?: string;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || undefined,
};

const setToken: CaseReducer<AuthState, PayloadAction<{ token: string }>> = (
  state,
  { payload: { token } }
) => {
  state.token = token;
  localStorage.setItem("token", token);
};

const clearToken: CaseReducer<AuthState> = (state) => {
  delete state.token;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken,
    clearToken,
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
