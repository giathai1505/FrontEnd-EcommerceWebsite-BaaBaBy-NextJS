import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommonState {
  isSubmitted: boolean;
  actionSuccess: boolean;
  isLoading: boolean;
  isDialogOpen: boolean;
}

const initialState: ICommonState = {
  isSubmitted: false,
  actionSuccess: false,
  isLoading: true,
  isDialogOpen: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setActionSuccess: state => {
      console.log("actionSuccess");
      state.actionSuccess = true;
    },
    resetAction: state => {
      state.actionSuccess = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      console.log("action:", action);

      state.isLoading = action.payload;
    },
    setExpandAction: (state, action: PayloadAction<boolean>) => {
      state.isDialogOpen = action.payload;
    },
  },
});

// Actions
export const {
  setActionSuccess,
  resetAction,
  setLoading,
  setExpandAction,
} = commonSlice.actions;

export default commonSlice.reducer;
