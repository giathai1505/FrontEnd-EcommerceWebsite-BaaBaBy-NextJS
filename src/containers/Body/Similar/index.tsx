import React, { useEffect, useState } from "react";
import SimilarItem from "./SimilarItem";
import { ListSimilar } from "./SimilarItem/data";
import {
  IconWrapLeft,
  IconWrapRight,
  SimilarCaroselWrap,
  SimilarContainer,
  SimilarList,
  SimilarSubTitle,
  SimilarWrap,
} from "./style";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "@components/SectionHeader";

const ITEM_WITH = 285;

const SimilarProduct = () => {
  const [left, setLeft] = useState(0);

  const handleMoveLeft = () => {
    if (left < 0) {
      setLeft(pre => pre + ITEM_WITH);
    }
  };

  const handleMoveRight = () => {
    if (left > -1710) {
      setLeft(pre => pre - ITEM_WITH);
    }
  };
  return (
    <SimilarContainer>
      <SimilarWrap>
        <SectionTitle name="Sản phẩm tương tự" />
        <SimilarSubTitle>135 khuyến mãi</SimilarSubTitle>
        <SimilarCaroselWrap>
          <IconWrapLeft
            onClick={handleMoveLeft}
            style={{ display: left >= 0 ? "none" : "" }}
          >
            <FaChevronLeft />
          </IconWrapLeft>
          <IconWrapRight
            onClick={handleMoveRight}
            style={{ display: left <= -1710 ? "none" : "" }}
          >
            <FaChevronRight />
          </IconWrapRight>
          <SimilarList style={{ left: left }}>
            {ListSimilar.map((item, index) => {
              return <SimilarItem ima={item} key={index} />;
            })}
          </SimilarList>
        </SimilarCaroselWrap>
      </SimilarWrap>
    </SimilarContainer>
  );
};

export default SimilarProduct;
