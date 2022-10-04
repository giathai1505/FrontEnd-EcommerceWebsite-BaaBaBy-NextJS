import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IForgotPasswordState {
  step: number;
  phoneNumber: string;
}

const initialState: IForgotPasswordState = {
  step: 1,
  phoneNumber: "",
};

export const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
  },
});

// Actions
export const { setStep, setPhoneNumber } = forgotPasswordSlice.actions;

export default forgotPasswordSlice.reducer;
