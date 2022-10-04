import styled from "styled-components";
import tw from "twin.macro";

export const LayoutContainer = styled.div`
  ${tw`py-2 laptop:py-4`}
`;

export const ProductBox = styled.div`
  ${tw`grid grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-2 mt-[24px]`}
`;
