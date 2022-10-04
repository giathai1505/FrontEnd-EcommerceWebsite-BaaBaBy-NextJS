import styled from "styled-components";
import tw from "twin.macro";

export const ImageContainer = styled.div`
  ${tw`w-full overflow-hidden`}
`;

export const ImageStyled = styled.img`
  ${tw`block w-full h-full object-cover`}
`;
