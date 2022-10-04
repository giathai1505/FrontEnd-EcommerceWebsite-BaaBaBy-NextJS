import styled from "styled-components";
import tw from "twin.macro";

export const CartCouponWrap = styled.div`
  border: 1px solid #eeeeee;
  ${tw`bg-white-color p-2 rounded-lg`}
`;

export const CouponHeader = styled.h4`
  ${tw`text-md font-semibold mb-[24px]`}
`;

export const CouponInput = styled.input`
  ${tw``}
`;

export const CouponButton = styled.button`
  ${tw`bg-[#FDEDF2] rounded-lg text-primary-1 w-full text-md font-bold py-[6px] mb-[24px]`}
`;

export const SumaryItem = styled.div`
  ${tw`flex gap-[24px] justify-between mb-2`}
`;

export const SumaryTitle = styled.p`
  ${tw`text-md font-normal`}
`;

export const SumaryContent = styled.p`
  ${tw`text-md font-semibold flex-none `}
`;

export const ContinuteButton = styled.button`
  ${tw`bg-primary-1 text-white-color text-md rounded-lg inline-block w-full py-1.5`}
`;
