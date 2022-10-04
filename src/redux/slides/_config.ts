import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISystemConfig {
  loadingTasks: string[];
  isUpdateLocalStorage: boolean;
}

const initialState: ISystemConfig = {
  loadingTasks: [],
  isUpdateLocalStorage: true,
};

export const _configSlice = createSlice({
  name: "_config",
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state.loadingTasks.push(action.payload);
    },
    stopLoading: (state, action: PayloadAction<string>) => {
      state.loadingTasks = state.loadingTasks.filter(
        task => task !== action.payload,
      );
    },
    clearLoadingTasks: state => {
      state.loadingTasks = [];
    },
    setIsUpdateLocalStorage: (state, action: PayloadAction<boolean>) => {
      state.isUpdateLocalStorage = action.payload;
    },
  },
});

// Actions
export const {
  startLoading,
  stopLoading,
  clearLoadingTasks,
  setIsUpdateLocalStorage,
} = _configSlice.actions;

export default _configSlice.reducer;
