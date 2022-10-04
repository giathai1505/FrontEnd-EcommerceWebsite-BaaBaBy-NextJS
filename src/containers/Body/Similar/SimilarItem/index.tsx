import Image from "next/image";
import React from "react";
import { AddToCartIcon } from "./images";
import {
  SimilarItemImgWrap,
  SimilarItemName,
  SimilarItemPrice,
  SimilarItemPriceWrap,
  SimilarItemWrap,
} from "./styles";

const SimilarItem = ({ ima }) => {
  return (
    <SimilarItemWrap>
      <SimilarItemImgWrap>
        <Image src={ima} />
      </SimilarItemImgWrap>
      <SimilarItemName>Sữa Vinamilk ColosGold số 3 800g</SimilarItemName>
      <SimilarItemPriceWrap>
        <SimilarItemPrice>đ 200,000</SimilarItemPrice>
        <AddToCartIcon />
      </SimilarItemPriceWrap>
    </SimilarItemWrap>
  );
};

export default SimilarItem;
