import React from "react";
import { CartIcon } from "./images";
import { CardProductWrap } from "./styles";

const ProductItem = () => {
  return (
    <CardProductWrap.Container>
      <CardProductWrap.Img src="/ingredient/images/detail0.png" />
      <CardProductWrap.Name>
        Sữa Vinamilk ColosGold số 3 800g
      </CardProductWrap.Name>
      <CardProductWrap.PriceWrap>
        <CardProductWrap.Price>đ 200,000</CardProductWrap.Price>
        <CartIcon />
      </CardProductWrap.PriceWrap>
    </CardProductWrap.Container>
  );
};

export default ProductItem;
