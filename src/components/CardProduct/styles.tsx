import ImageElement from "@designs/Image";
import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.a`
  ${tw`block w-full rounded-lg bg-white-color cursor-pointer hover:shadow-md`}
`;

export const CardContent = styled.div`
  ${tw`p-[16px]`}
`;

export const ImageStyled = styled(ImageElement)`
  ${tw`rounded-lg`}
  aspect-ratio: 4/3;
`;

export const TitleProduct = styled.h5`
  ${tw`text-xs laptop:text-md font-semibold mt-[24px] mb-0.5`}
`;

export const PriceContainer = styled.div`
  ${tw`flex justify-between items-center`}
`;

export const Price = styled.p`
  ${tw`text-primary-1 font-bold`}
`;

export const ButtonStyled = styled.button`
  ${tw`rounded-full p-1 hover:bg-primary-1 hover:text-white-color`}
`;
