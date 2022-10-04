import SectionTitle from "@components/SectionHeader";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Start, StartDisable } from "../Detail/DetailInfo/DetailRating/images";
import { listRating } from "./data";
import RatingStart from "./RatingStar";
import {
  ListRating,
  RatingContainer,
  RatingItem,
  RatingItemAvatar,
  RatingItemBody,
  RatingItemContent,
  RatingItemDesc,
  RatingItemDescTime,
  RatingItemDescType,
  RatingItemImg,
  RatingItemListImg,
  RatingItemName,
  RatingItemStar,
} from "./styles";

const Rating = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <RatingContainer>
      <SectionTitle name="Đánh giá sản phẩm" />
      <RatingStart />
      <ListRating>
        {listRating.map((item, index) => {
          return (
            <RatingItem key={index}>
              <RatingItemAvatar>
                <Image src={item.avatar} />
              </RatingItemAvatar>
              <RatingItemBody>
                <RatingItemName>{item.name}</RatingItemName>
                <RatingItemStar>
                  <Start w="12" h="12" />
                  <Start w="12" h="12" />
                  <Start w="12" h="12" />
                  <Start w="12" h="12" />
                  <StartDisable w="12" h="12" />
                </RatingItemStar>
                <RatingItemDesc>
                  <RatingItemDescTime>2022-03-15 01:06</RatingItemDescTime>
                  {isMobile ? "" : "|"}
                  <RatingItemDescType>
                    Phân loại hàng: xe posche vàng
                  </RatingItemDescType>
                </RatingItemDesc>
                <RatingItemContent>
                  Giao hàng nhanh, đẹp, bé nhà mình thích lắm
                </RatingItemContent>
                <RatingItemListImg>
                  {item.listImg.map((item, index) => {
                    return (
                      <RatingItemImg key={index}>
                        <Image width={60} height={60} src={item} />
                      </RatingItemImg>
                    );
                  })}
                </RatingItemListImg>
              </RatingItemBody>
            </RatingItem>
          );
        })}
      </ListRating>
    </RatingContainer>
  );
};

export default Rating;
