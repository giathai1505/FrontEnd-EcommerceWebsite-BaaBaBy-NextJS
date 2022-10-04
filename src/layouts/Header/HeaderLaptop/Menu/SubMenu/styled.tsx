import styled from "styled-components";
import tw from "twin.macro";

export const SubMenuContainer = styled.div<{
  isHover: boolean;
  isOverflowX: boolean;
}>`
  ${tw`absolute top-[110%] py-1 max-h-50 flex invisible opacity-0 bg-white-color shadow-md`}
  &::before {
    content: "";
    ${tw`absolute w-full h-1 -top-1`};
  }

  ${({ isHover }) => isHover && tw`visible opacity-100 z-50`}

  ${({ isOverflowX }) => isOverflowX && tw`flex-row-reverse right-0`}
`;

export const SecondaryMenuBox = styled.div`
  ${tw`w-25`}
`;

export const TertiaryMenuBox = styled.div<{ isOverflowX: boolean }>`
  ${tw`w-25 flex flex-col border-l border-solid border-border-color`}
  ${({ isOverflowX }) => isOverflowX && tw`border-r border-l-0`}
`;

export const TertiaryMenu = styled.a<{ isOverflowX: boolean }>`
  ${tw`px-2 py-1.5 hover:bg-grey-2 text-left`}
  ${({ isOverflowX }) => isOverflowX && tw`text-right`}
`;
