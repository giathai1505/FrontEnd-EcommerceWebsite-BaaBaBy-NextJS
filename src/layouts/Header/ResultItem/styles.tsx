import ImageElement from "@designs/Image";
import styled from "styled-components";
import tw from "twin.macro";

export const ItemContainer = styled.a`
  ${tw`flex-col justify-center gap-1.5 py-1 hover:opacity-70`}
`;

export const ImageContainer = styled.div`
  ${tw`overflow-hidden w-full aspect-ratio[1]`}
`;

export const ImageStyled = styled(ImageElement)`
  ${tw`block w-full `}
  aspect-ratio: 1;
`;

export const ContentBox = styled.div`
  ${tw`flex flex-col justify-between text-lg font-medium mt-1`}
`;

export const Name = styled.p`
  ${tw`text-sm text-center`}
`;

export const Price = styled.span<{ isDiscount: boolean }>`
  ${tw`text-sm text-center`}
  ${({ isDiscount }) =>
    isDiscount && tw`line-through text-decoration-thickness[3px]`}
`;

export const DiscountPrice = styled.span`
  ${tw`text-center text-sm text-primary-1`}
`;
