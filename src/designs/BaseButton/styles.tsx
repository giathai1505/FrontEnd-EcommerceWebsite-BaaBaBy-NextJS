import styled from "styled-components";
import tw from "twin.macro";

export const ButtonContainer = styled.button`
  &:active,
  &:focus-visible {
    transform: scale(0.97);
    ${tw`outline-none`}
  }
`;
