import styled from "styled-components";
import tw from "twin.macro";

export const SaleContainer = styled.div`
  ${tw`py-2 laptop:py-4`}
`;

export const HeadingContainer = styled.div`
  ${tw`flex items-center gap-[12px] laptop:gap-[12px]`}
`;

export const ProductBox = styled.div`
  ${tw`mt-[24px] overflow-hidden relative`}
`;

export const ProductList = styled.div`
  ${tw`flex duration-500 ease-in-out`}
`;

export const Button = styled.button`
  ${tw`absolute top-1/2 px-[4px] py-[8px] text-xl laptop:text-xxl rounded-md bg-[#ee4c7eb8]`}
`;

export const Discount = styled.span`
  ${tw`inline-flex w-[52px] h-[25px] items-center justify-center rounded-lg text-primary-1 text-md
  border border-solid border-primary-1`}
`;
