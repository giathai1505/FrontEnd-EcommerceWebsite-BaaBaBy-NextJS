import styled from "styled-components";
import tw from "twin.macro";

export const CartContainer = styled.div`
  ${tw`grid grid-cols-12 gap-2 max-w-[1120px] pb-[16px] mx-1.5  pt-4 laptop:mx-auto min-h-[1000px]`}
`;

export const CartWrap = styled.div`
  ${tw`w-full bg-[#FAFAFA]`}
`;

export const CartSubWrap = styled.div`
  ${tw`laptop:col-span-3 col-span-12`}
`;
