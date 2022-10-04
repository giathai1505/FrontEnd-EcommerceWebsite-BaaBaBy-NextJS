import { combineReducers } from "@reduxjs/toolkit";
import _config from "./_config";
import seo from "./seo";
import auth from "./auth";
import common from "./common";
import forgotPassword from "./forgotPassword";
import product from "./detailProduct";
import searchProduct from "./searchProduct";
import cart from "./cart";

export const rootReducer = combineReducers({
  _config,
  seo,
  auth,
  common,
  forgotPassword,
  product,
  searchProduct,
  cart,
});
