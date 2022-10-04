import styled from "styled-components";
import tw from "twin.macro";

export const EmptyCartWrap = styled.div`
  ${tw`flex flex-direction[column] justify-center items-center pt-10`}
`;

export const EmptyCarImg = styled.img`
  ${tw`w-[300px] mb-1`}
`;

export const EmptyCarText = styled.p`
  ${tw`mb-2 font-sans`}
`;
