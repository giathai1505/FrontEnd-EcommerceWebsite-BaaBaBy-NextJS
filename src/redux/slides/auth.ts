import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeUserCookies } from "@common/utils/auth";
import { IAccount, IUser } from "@typings";

export interface IAuthStates {
  currentUser: IAccount | null;
  accountProfile: IUser | null;
  isLogoutAction: boolean;
}

const initialState: IAuthStates = {
  currentUser: null,
  accountProfile: null,
  isLogoutAction: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeCurrentUser: state => {
      state.currentUser = null;
      state.isLogoutAction = true;
      removeUserCookies();
    },
  },
});

// Actions
export const { removeCurrentUser } = authSlice.actions;

export default authSlice.reducer;
