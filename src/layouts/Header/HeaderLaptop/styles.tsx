import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`fixed w-full z-50 duration-300 bg-white-color px-1
  border-b border-solid border-border-color`}
`;

export const InnerHeader = styled.div`
  ${tw`max-w-content h-header-full mx-auto px-1 large-desktop:px-0`}
`;

export const TopHeader = styled.header`
  ${tw`flex items-center justify-between gap-2 pt-2 pb-1`}
`;
