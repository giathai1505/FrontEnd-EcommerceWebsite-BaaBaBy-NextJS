import styled from "styled-components";
import tw from "twin.macro";

export const ResultBox = styled.div`
  ${tw`absolute w-full top-[101%] py-1.5 px-2 bg-white-color 
  z-100 cursor-pointer`}
`;

export const KeywordList = styled.div`
  ${tw`w-full`}
`;

export const Keyword = styled.a`
  ${tw`block w-full py-[9px] text-xs leading-[1]`}
`;

export const Line = styled.div`
  ${tw`w-full border-b border-solid border-[#d1d1d1] my-1.5`}
`;

export const ResultList = styled.ul`
  ${tw`grid grid-cols-2 phone:grid-cols-3 laptop:grid-cols-4 gap-3 items-start`}
`;
