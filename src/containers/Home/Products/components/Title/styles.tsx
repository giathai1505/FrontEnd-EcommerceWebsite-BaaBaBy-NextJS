import styled from "styled-components";
import tw from "twin.macro";

export const TitleContainer = styled.div`
  ${tw``}
`;

export const Heading = styled.h2`
  ${tw`flex items-center gap-[12px] text-xl laptop:text-xxl font-bold`}
`;

export const Description = styled.p`
  ${tw`mt-[16px] text-xs laptop:text-md text-black-color`}
`;
