import styled from "styled-components";
import tw from "twin.macro";

export const PriceWrap = styled.div`
  ${tw`flex items-center pl-2 py-2 phone:py-2 bg-[#FDEDF2]`}
`;

export const OldPrice = styled.p`
  ${tw`text-[#300F19] text-md font-light`}
`;

export const NewPrice = styled.p`
  ${tw`text-[26px] font-bold mr-[12px] text-primary-1`}
`;

export const Discount = styled.p`
  ${tw`font-thin text-white-color p-1 bg-primary-1 ml-[32px] text-md rounded-lg`}
`;
