import TopArrow from "@icons/arrow/TopArrow";
import styled from "styled-components";
import tw from "twin.macro";

export const AuthContainer = styled.div`
  ${tw`flex gap-[24px] justify-between items-center flex-shrink-0    `}
`;

export const LinkStyled = styled.p`
  ${tw`text-lg p-1 rounded-[50%] cursor-pointer relative text-primary-1 hover:bg-primary-1 hover:text-white-color duration-100`}
`;

export const NumCart = styled.span`
  ${tw`absolute bg-[red] text-white-color p-[4px] rounded-[50%] w-1.5 h-1.5 leading-[6px] text-center top-[12%] left-[50%] text-[10px]`}
`;

export const AccountContainer = styled.div`
  ${tw`w-3.5 rounded-full relative`}
`;

export const ImageStyled = styled.img`
  ${tw`block w-full rounded-full`}
`;

export const ActionContainer = styled.div`
  ${tw`absolute top-[140%] right-[-20%] w-max py-1 bg-white-color hidden flex-col items-center rounded-lg shadow-lg`}
  &::before {
    content: "";
    ${tw`absolute block w-full h-2 -top-2`}
  }
`;

export const TopArrowStyled = styled(TopArrow)`
  ${tw`absolute top-[-15px] right-[12px] text-primary-1`}
`;

export const ActionItem = styled.a`
  ${tw`flex items-center gap-1 w-full px-2 py-[8px] cursor-pointer hover:bg-grey-2`}
`;

export const ButtonStyled = styled.button`
  ${tw`flex items-center gap-1 w-full px-2 py-[8px] border-t border-solid border-border-color hover:bg-grey-2`}
`;
