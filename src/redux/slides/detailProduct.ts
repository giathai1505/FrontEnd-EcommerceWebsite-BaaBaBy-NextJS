import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "src/apiCaller";

interface IProductState {
  products: Product | null;
}

const initialState: IProductState = {
  products: null,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDetailProduct: (state, action: PayloadAction<Product>) => {
      state.products = action.payload;
    },
  },
});

// Actions
export const { setDetailProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
