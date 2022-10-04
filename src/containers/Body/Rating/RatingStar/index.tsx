import { Start } from "@containers/Body/Detail/DetailInfo/DetailRating/images";
import React from "react";
import { ListRatingFilter } from "./data";
import {
  MaxRatingNum,
  NumFilterItem,
  NumFilterList,
  RatingNum,
  RatingNumWrap,
  RatingStarWrap,
} from "./styles";

const RatingStart = () => {
  return (
    <RatingStarWrap>
      <RatingNumWrap>
        <RatingNum>5.0</RatingNum>
        <MaxRatingNum>
          /5 <Start w="16" h="16" />
        </MaxRatingNum>
      </RatingNumWrap>
      <NumFilterList>
        {ListRatingFilter.map((item, index) => {
          return <NumFilterItem key={index}>{item}</NumFilterItem>;
        })}
      </NumFilterList>
    </RatingStarWrap>
  );
};

export default RatingStart;
