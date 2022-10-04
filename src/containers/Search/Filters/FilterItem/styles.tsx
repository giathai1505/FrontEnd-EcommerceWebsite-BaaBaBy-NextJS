import DownIcon from "@icons/arrow/DownArrow";
import styled from "styled-components";
import tw from "twin.macro";

export const FilterItemContainer = styled.div`
  ${tw`px-1.5 border-b-2 border-solid border-border-color`}
`;

export const TitleWrapper = styled.div`
  ${tw`flex items-center py-1.5`}
`;

export const ContentWrapper = styled.div`
  transition: all 200ms linear;
  ${tw`w-full overflow-hidden`}
`;

export const Icon = styled(DownIcon)<{ isRotate }>`
  ${tw`duration-200`}
  ${({ isRotate }) => isRotate && "transform: rotate(180deg)"}
`;
