import React from "react";
import { Start, StartDisable } from "./images";
import { RatingContent, RatingInfoWrap } from "./styles";

const RatingInfo = () => {
  return (
    <RatingInfoWrap>
      <RatingContent.StarRating>
        <Start w="20" h="20" />
        <Start w="20" h="20" />
        <Start w="20" h="20" />
        <Start w="20" h="20" />
        <StartDisable w="20" h="20" />
      </RatingContent.StarRating>
      |<RatingContent.NumRating>Xem 21 đánh giá</RatingContent.NumRating>|
      <RatingContent.SelledNum>Đã bán 76</RatingContent.SelledNum>
    </RatingInfoWrap>
  );
};

export default RatingInfo;
