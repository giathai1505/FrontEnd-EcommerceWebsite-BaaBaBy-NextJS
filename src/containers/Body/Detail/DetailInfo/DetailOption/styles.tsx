import styled from "styled-components";
import tw from "twin.macro";

export const DetailOptionWrap = styled.div`
  ${tw`my-[16px] phone:my-4`}
`;

export const OptionWrap = styled.div`
  ${tw`grid grid-cols-12  mb-[32px]`}
`;

export const OptionTitle = styled.p`
  ${tw`phone:col-span-2 col-span-12 text-md font-normal mb-[12px] phone:mb-0`}
`;

export const DealList = styled.ul`
  ${tw`phone:col-span-9 gap-1 phone:col-start-4 col-span-12 flex flex-wrap w-full`}
`;

export const DealItem = styled.li<{ type: string }>`
  ${tw` px-2 py-[4px] text-md phone:text-lg inline-block rounded-lg border-[1px] cursor-pointer border-solid`}
  ${({ type }) =>
    type === "1"
      ? tw`text-primary-1 font-semibold  border-[#ee4c7e] hover:text-white-color hover:bg-primary-1`
      : tw`font-normal text-[#300F19] py-[8px] border-[#EEEEEE] hover:text-primary-1`}
`;

export const ShippingOption = styled.div`
  ${tw`phone:col-span-9 phone:col-start-4 col-span-12 flex items-center`}
`;

export const ShippingLabel = styled.p`
  ${tw`col-span-9 col-start-4 text-md ml-2 text-[#300F19] mr-4`}
`;

export const ShippingAddress = styled.p`
  ${tw`col-span-9 col-start-4 text-md text-[#818181]`}
`;

export const QuantityOption = styled.div`
  ${tw`phone:col-span-9 phone:col-start-4 col-span-12 flex items-center`}
`;

export const QuantityButton = styled.div`
  background: rgba(228, 228, 228, 0.3);
  ${tw` p-[6px] flex gap-[12px] mr-1 rounded-lg`}
`;

export const QuantityButtonItem = styled.p<{ type: boolean }>`
  ${tw`px-1 py-[4px]  rounded-lg w-3 select-none text-xl font-semibold cursor-pointer`}
  ${({ type }) =>
    type === false ? tw`text-primary-1` : tw`bg-primary-1 text-white-color`}
`;

export const QuantityLabel = styled.p`
  ${tw`font-normal text-[#818181] text-lg`}
`;
