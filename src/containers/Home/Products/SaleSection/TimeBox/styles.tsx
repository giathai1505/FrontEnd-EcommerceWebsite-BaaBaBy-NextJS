import styled from "styled-components";
import tw from "twin.macro";

export const TimeBoxContainer = styled.div`
  ${tw`flex items-center gap-[12px]`}
`;

export const TimeItem = styled.span`
  ${tw`inline-flex items-center justify-center text-xs font-medium h-[26px] w-[26px] 
  laptop:text-md laptop:font-semibold rounded-lg bg-[#000] text-white-color`}
`;
