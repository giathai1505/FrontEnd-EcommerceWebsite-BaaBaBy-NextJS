import styled from "styled-components";
import tw from "twin.macro";

export const ProfileWrap = styled.div`
  ${tw`max-w-[1120px] px-[16px] phone:px-4 large-desktop:px-0 mx-auto py-2 phone:py-5`}
`;

export const Tap = styled.div`
  ${tw``}
`;

export const TapHeader = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${tw` p-0.5 rounded-lg flex gap-2 mb-1`}
`;

export const TapHeaderItem = styled.button<{ active: boolean }>`
  ${tw`px-3 py-1 rounded-lg  font-sans  focus:ring-2 text-primary-1`}

  ${tw`ring-white-color ring-offset-[#f6a5be4d] ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2`}

  ${({ active }) =>
    active ? tw`bg-primary-1 text-white-color font-semibold` : tw``}
`;

export const TapContent = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${tw`h-[500px] rounded-lg p-2`}
`;
