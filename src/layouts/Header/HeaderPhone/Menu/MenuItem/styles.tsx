import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
import tw from "twin.macro";

export const LinkStyled = styled.a`
  ${tw`w-full p-1.5 text-md border-b border-solid border-border-color
    cursor-pointer
  `}
`;

export const ButtonStyled = styled.button`
  ${tw`w-full flex items-center justify-between p-1.5 text-md border-b border-solid border-border-color`}
`;

export const ArrowRightIcon = styled(BiChevronRight)`
  ${tw`text-xl`}
`;
