import styled from "styled-components";
import tw from "twin.macro";
import { RiLoader4Fill } from "react-icons/ri";

export const SearchContainer = styled.div`
  ${tw`flex-1 flex items-center justify-center max-w-[550px] relative`}
`;

export const SearchInput = styled.input`
  ${tw`w-full rounded-lg border-none outline-none shadow-[none] pl-[16px] pr-5 py-[17px] 
  placeholder:text-grey-1 bg-grey-2 text-sm leading-none caret-primary-1`}
`;

export const SearchButton = styled.button`
  transform: translateY(-50%);
  ${tw`absolute right-0 top-1/2 mr-[8px] bg-primary-1 w-[32px] h-[32px] 
  rounded-lg flex items-center justify-center hover:opacity-80`}
`;

export const ButtonClear = styled.button`
  ${tw`absolute right-[65px] text-md text-grey-1`}
`;

export const Loading = styled(RiLoader4Fill)`
  ${tw`absolute right-[65px] animate-spin`}
`;
