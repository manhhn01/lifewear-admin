import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommonState {
  drawerOpen: boolean;
}

const initialState: CommonState = {
  drawerOpen: false,
};

const toggleDrawer: CaseReducer<CommonState, PayloadAction<boolean>> = (
  state,
  { payload: open }
) => {
  if (!!open) {
    state.drawerOpen = open;
  } else {
    state.drawerOpen = !state.drawerOpen;
  }
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleDrawer,
  },
});

export const commonReducers = commonSlice.reducer;
export const commonActions = commonSlice.actions;
