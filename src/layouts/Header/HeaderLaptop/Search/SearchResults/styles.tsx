import styled from "styled-components";
import tw from "twin.macro";

export const ResultBox = styled.div`
  ${tw`absolute w-[120%] top-[110%] px-[56px] pt-2 pb-5 bg-white-color 
  z-100 cursor-pointer`}
`;

export const KeywordList = styled.div`
  ${tw`w-full`}
`;

export const Keyword = styled.a`
  ${tw`block w-full py-[9px] text-xs leading-[1] hover:opacity-70`}
  text-align: start;
`;

export const Line = styled.div`
  ${tw`w-full border-b border-solid border-[#d1d1d1] mt-1.5`}
`;

export const ResultList = styled.ul`
  ${tw`grid grid-cols-4 gap-1.5 items-start`}
`;
