import styled from "styled-components";
import tw from "twin.macro";

export const NotFoundContainer = styled.div`
  ${tw`w-full`}
`;

export const HeroBox = styled.div`
  background-image: linear-gradient(#000000ad, #000000ad),
    url("https://cdn.childrensalon.com/images/catalog/search/noresult/dest/banner/2022/main/1@1x.webp");
  background-size: cover;
  ${tw`h-60 flex flex-col gap-4 items-center justify-center`}
`;

export const Title = styled.h1`
  ${tw`max-w-[50%] leading-[1.2] text-4xl text-white-color font-semibold text-center`}
`;

export const InputController = styled.div`
  ${tw`relative w-full max-w-[465px] bg-transparent`}
`;

export const InputStyled = styled.input`
  background-color: rgb(255 255 255 / 30%);
  ${tw`py-1 pr-5 pl-2 w-full outline-none border-none shadow-[none] rounded-[2px] 
  text-white-color placeholder:text-white-color`}
`;

export const ButtonSearch = styled.button`
  aspect-ratio: 1;
  ${tw`absolute top-0 right-0 h-full flex items-center justify-center`}
`;
