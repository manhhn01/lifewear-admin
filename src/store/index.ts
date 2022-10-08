import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { commonReducers } from "./slices/commonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
