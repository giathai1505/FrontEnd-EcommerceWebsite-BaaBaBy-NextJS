import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContentWebsite, ISEO } from "@typings";

interface ISEOState {
  contentWebsite: IContentWebsite | null;
  seoData: ISEO | null;
}

const initialState: ISEOState = {
  contentWebsite: null,
  seoData: null,
};

export const seoSlice = createSlice({
  name: "seo",
  initialState,
  reducers: {
    setSEO: (state, action: PayloadAction<ISEO>) => {
      state.seoData = action.payload;
    },
    setContentWebsite: (state, action: PayloadAction<IContentWebsite>) => {
      state.contentWebsite = action.payload;
    },
  },
});

// Actions
export const { setSEO, setContentWebsite } = seoSlice.actions;

export default seoSlice.reducer;
