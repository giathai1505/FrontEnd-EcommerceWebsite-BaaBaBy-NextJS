import React, { useState } from "react";
import {
  DetailImageWrap,
  MainImage,
  MainImageWrap,
  ShareContent,
  ShareIconWrap,
  SocialIconWrap,
  SubImage,
  SubImageItem,
  SubImageWrap,
} from "./styles";
import { ListSubImage } from "./data";
import {
  FacebookIcon,
  MessengerIcon,
  PinterestIcon,
  TwitterIcon,
} from "./images";
import { useAppSelector } from "@redux/store";

const DetailImage = () => {
  const { products } = useAppSelector(state => state.product);

  const [isActive, setIsActive] = useState<number>(0);

  const [activeImg, setActiveImg] = useState<any>(ListSubImage[0]);

  const handleActiveImg = (item, index) => {
    setIsActive(index);
    setActiveImg(item);
  };

  return (
    <DetailImageWrap>
      <MainImageWrap>
        <MainImage className="rounded-lg" src={products?.imgUrl[0]} />
      </MainImageWrap>
      <SubImageWrap>
        {ListSubImage.map((item, index) => {
          return (
            <SubImageItem
              Active={isActive === index}
              key={index}
              onClick={() => handleActiveImg(item, index)}
            >
              <SubImage src={item.src}></SubImage>
            </SubImageItem>
          );
        })}
      </SubImageWrap>
      <SocialIconWrap>
        <ShareContent>Chia sẻ</ShareContent>
        <ShareIconWrap>
          <MessengerIcon />
          <FacebookIcon />
          <PinterestIcon />
          <TwitterIcon />
        </ShareIconWrap>
      </SocialIconWrap>
    </DetailImageWrap>
  );
};

export default DetailImage;
