import { renderPrice } from "@common/functions";
import { useAppSelector } from "@redux/store";
import React from "react";
import { Discount, NewPrice, OldPrice, PriceWrap } from "./styles";

const PriceInfo = () => {
  const { products } = useAppSelector(state => state.product);

  return (
    <PriceWrap>
      <NewPrice>{renderPrice(Math.round(products?.price))}</NewPrice>
      <OldPrice>đ 410,000</OldPrice>
      <Discount>-22%</Discount>
    </PriceWrap>
  );
};

export default PriceInfo;
