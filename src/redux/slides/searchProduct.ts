import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultSearch } from "src/apiCaller";

interface ISearchProductState {
  searchText: string;
  min: number | null;
  max: number | null;
  results: ResultSearch;
  isLoading: boolean;
  error: string;
}

const initialState: ISearchProductState = {
  searchText: "",
  min: null,
  max: null,
  results: {
    listKeyword: [],
    results: [],
    totalCount: 0,
    minPrice: null,
    maxPrice: null,
  },
  isLoading: false,
  error: "",
};

export const searchProductSlice = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setResults: (state, action: PayloadAction<ResultSearch>) => {
      state.results = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setMin: (state, action: PayloadAction<number>) => {
      state.min = action.payload;
    },
    setMax: (state, action: PayloadAction<number>) => {
      state.max = action.payload;
    },
  },
});

export const {
  setSearchText,
  setResults,
  setIsLoading,
  setError,
  setMin,
  setMax,
} = searchProductSlice.actions;

export default searchProductSlice.reducer;
