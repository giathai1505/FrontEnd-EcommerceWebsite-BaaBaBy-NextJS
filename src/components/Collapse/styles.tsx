import styled, { css } from "styled-components";
import tw from "twin.macro";

export const CollapseContainer = styled.div<{
  smooth: boolean;
  estimateHeight: number;
}>`
  overflow: hidden;
  max-height: 0px;
  height: fit-content;

  &.open {
    display: block;

    ${({ estimateHeight, smooth }) =>
      smooth
        ? css`
            max-height: ${estimateHeight}px;
            transition: max-height 0.3s ease;
          `
        : "max-height: 100%"};
  }
`;
