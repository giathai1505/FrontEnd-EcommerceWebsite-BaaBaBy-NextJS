import styled from "styled-components";
import tw from "twin.macro";

export const ProcessBarContainer = styled.div`
  ${tw`w-full h-2 rounded-[20px] flex items-center justify-center bg-secondary relative`}
`;

export const ProcessBarText = styled.span`
  ${tw`absolute z-10 text-xs text-black-color `}
`;

export const ProcessBarFill = styled.div`
  ${tw`absolute top-0 left-0 h-full rounded-[20px] bg-primary-1`}
`;
