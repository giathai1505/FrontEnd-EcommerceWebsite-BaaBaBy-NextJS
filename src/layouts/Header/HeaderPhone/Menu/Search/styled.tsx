import styled from "styled-components";
import tw from "twin.macro";

export const SearchContainer = styled.div`
  ${tw`absolute w-full left-0 top-[102%] flex justify-center bg-white-color`}
`;

export const SearchContent = styled.div`
  ${tw`w-full flex mx-2 py-[6px] pr-6 text-grey-1 
  border-b-2 border-solid border-black-color`}
`;

export const IconWrapper = styled.div`
  ${tw`absolute h-full aspect-ratio[1] top-0 left-5 flex items-center 
  justify-center `}
`;

export const SearchInput = styled.input`
  ${tw`w-full bg-none outline-none shadow-[none] border-none pl-[25px]
  text-xs `}
`;

export const ButtonHiddenSearch = styled(IconWrapper)`
  ${tw`left-[unset] right-2 cursor-pointer`}
`;
