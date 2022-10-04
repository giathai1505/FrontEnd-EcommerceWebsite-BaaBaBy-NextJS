import { BiChevronLeft } from "react-icons/bi";
import styled from "styled-components";
import tw from "twin.macro";

export const SlidingDoorContainer = styled.div<{ visible: boolean }>`
  transform: translateX(100%);
  ${tw`flex flex-col fixed z-50 top-0 right-0 w-[60%] 
  bg-white-color shadow-md duration-300`}
  ${({ visible }) => visible && "transform: translateX(0);"};
`;

export const SlidingDoorInner = styled.div`
  ${tw`flex flex-col flex-1 relative`}
`;

export const SlidingDoorHeader = styled.div`
  ${tw`p-1.5 border-b border-solid border-border-color`}
`;

export const SlidingDoorHeading = styled.h4`
  ${tw`text-lg mb-[4px]`}
`;

export const ActionContainer = styled.div`
  ${tw`flex gap-1.5 items-center text-md`}
`;

export const MenuWrapper = styled.div`
  ${tw`overflow-y-auto w-full flex flex-col`}
`;

export const TopMenu = styled.div`
  ${tw`flex flex-col`}
`;

export const LineSeparate = styled.span`
  ${tw`block w-[1px] h-[12px] bg-grey-1`}
`;

export const SecondaryMenuContainer = styled.div`
  transform: translateX(-100%);
  ${tw`absolute w-full h-full z-50 bg-white-color duration-300`}
`;

export const TertiaryMenuContainer = styled(SecondaryMenuContainer)`
  transform: translateX(100%);
  ${tw`bg-white-color`}
`;

export const ButtonBack = styled.button`
  ${tw`flex w-full items-center p-1.5 text-md font-semibold`}
`;

export const ArrowLeftIcon = styled(BiChevronLeft)`
  ${tw`text-xl`}
`;
