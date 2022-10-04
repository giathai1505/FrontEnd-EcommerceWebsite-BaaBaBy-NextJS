import styled from "styled-components";
import tw from "twin.macro";

export const SimilarItemWrap = styled.div`
  ${tw`min-w-[200px] phone:min-w-[265px] p-[8px] bg-white-color flex-wrap `}
`;

export const SimilarItemImgWrap = styled.div`
  ${tw``}
`;

export const SimilarItemName = styled.p`
  ${tw`font-semibold text-[#300F19] text-md mt-3 mb-[16px]`}
`;

export const SimilarItemPriceWrap = styled.div`
  ${tw`flex justify-between`}
`;

export const SimilarItemPrice = styled.p`
  ${tw`text-primary-1 text-lg font-bold`}
`;
