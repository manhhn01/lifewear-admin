import { configureStore } from '@reduxjs/toolkit';

import { baseRtk } from './services';
import { authReducer } from './slices/authSlice';
import { commonReducers } from './slices/commonSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducers,
    [baseRtk.reducerPath]: baseRtk.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseRtk.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
