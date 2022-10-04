import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@typings";

interface ICartState {
  numCart: number;
  listCart: ICartItem[];
}

const initialState: ICartState = {
  numCart: 0,
  listCart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setNumCart: (state, action: PayloadAction<number>) => {
      state.numCart = action.payload;
    },
    setListtCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.listCart = action.payload;
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      state.listCart.push(action.payload);
    },
  },
});

// Actions
export const { setNumCart, setListtCart, addToCart } = CartSlice.actions;

export default CartSlice.reducer;
