import styled from "styled-components";
import tw from "twin.macro";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const ItemContainer = styled.a<{
  isActive: boolean;
  isOverflowX: boolean;
}>`
  ${tw`flex items-center relative justify-between pl-2 pr-2.5 py-1.5 hover:bg-grey-2`}
  ${({ isActive }) => isActive && tw`bg-grey-2`}
  ${({ isOverflowX }) => isOverflowX && tw`flex-row-reverse`}
`;

export const RightArrowIconStyled = styled(BiChevronRight)`
  ${tw`duration-300 text-grey-1 text-lg`}
`;

export const LeftArrowIconStyled = styled(BiChevronLeft)`
  ${tw`duration-300 text-grey-1 text-lg`}
`;
