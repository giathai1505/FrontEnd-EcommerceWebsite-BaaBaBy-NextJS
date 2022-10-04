import React from "react";
import { FooterContent } from "./data";
import { ArrowIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from "./images";
import {
  FooterButton,
  FooterButtonContent,
  FooterCol,
  FooterContainer,
  FooterItem,
  FooterList,
  FooterListIcon,
  FooterTitle,
  FooterWrap,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        {FooterContent.map((item, index) => {
          return (
            <FooterCol key={index}>
              <FooterTitle>{item.title}</FooterTitle>
              <FooterList>
                {item.listItem.map((item, index) => {
                  return <FooterItem key={index}>{item}</FooterItem>;
                })}
              </FooterList>
            </FooterCol>
          );
        })}

        <FooterCol>
          <FooterTitle>Kết nối với chúng tôi</FooterTitle>
          <FooterListIcon>
            <FacebookIcon />
            <YoutubeIcon />
            <InstagramIcon />
          </FooterListIcon>
          <FooterButton>
            <FooterButtonContent>Hệ thống cửa hàng</FooterButtonContent>
            <ArrowIcon />
          </FooterButton>
        </FooterCol>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
