import styled from "styled-components";
import tw from "twin.macro";

export const FilterWrap = styled.div`
  ${tw`col-span-3`}
`;

export const FilterItem = styled.div`
  ${tw`py-2`}
`;

export const FilterItemHeader = styled.h3`
  ${tw`font-semibold text-primary-1 text-lg mb-2`}
`;

export const FilterListPrice = styled.ul`
  ${tw``}
`;

export const FilterPriceItem = styled.li`
  ${tw`text-[10px] border-[1px] border-solid border-primary-1 rounded-3xl p-[8px] w-fit mt-[4px] hover:bg-primary-1 hover:text-white-color hover:cursor-pointer`}
`;

export const FilterPriceLabel = styled.p`
  ${tw`text-[12px] text-[gray] my-1`}
`;

export const FilterPriceWrap = styled.div`
  ${tw`flex gap-1 w-full items-center `}
`;

export const FilterPriceInput = styled.input`
  ${tw`w-10 p-0.5 outline-none rounded-lg text-[12px]`}
`;
export const FilterPriceButton = styled.button`
  ${tw`bg-primary-1 rounded-lg text-white-color mt-2 px-5 py-1 text-[12px]`}
`;
