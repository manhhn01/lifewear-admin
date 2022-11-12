import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
  drawerOpen: boolean;
  toast?: string;
}

const initialState: CommonState = {
  drawerOpen: false,
};

const toggleDrawer: CaseReducer<
  CommonState,
  PayloadAction<{ open: boolean }>
> = (state, { payload: { open } }) => {
  if (!!open) {
    state.drawerOpen = open;
  } else {
    state.drawerOpen = !state.drawerOpen;
  }
};

const showToast: CaseReducer<CommonState, PayloadAction<{ toast: string }>> = (
  state,
  { payload: { toast } }
) => {
  state.toast = toast;
};

const hideToast: CaseReducer<CommonState> = (state) => {
  delete state.toast;
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleDrawer,

    showToast,
    hideToast,
  },
});

export const commonReducers = commonSlice.reducer;
export const commonActions = commonSlice.actions;
