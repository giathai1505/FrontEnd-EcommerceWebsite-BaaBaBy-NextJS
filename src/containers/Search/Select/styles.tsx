import DownIcon from "@icons/arrow/DownArrow";
import styled from "styled-components";
import tw from "twin.macro";

export const SelectContainer = styled.div`
  ${tw`flex items-center justify-center p-1.5 relative text-md select-none`}
`;

export const OptionList = styled.ul<{ visible: boolean }>`
  ${tw`absolute top-full w-[120%] list-none bg-white-color shadow-lg
  border border-solid border-[#e8e8e8] hidden z-50`}

  ${({ visible }) => visible && tw`block`}
`;

export const Placeholder = styled.p`
  ${tw`p-1.5 opacity-60 cursor-not-allowed`}
`;

export const OptionItem = styled.li<{ active: boolean }>`
  ${tw`p-1.5 cursor-pointer hover:bg-grey-3`}
  ${({ active }) => active && tw`bg-grey-3`}
`;
