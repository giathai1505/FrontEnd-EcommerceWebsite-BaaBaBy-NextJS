import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.label`
  ${tw`flex flex-row items-center cursor-pointer `}
`;

export const Input = styled.input<{ primary: boolean }>`
  ${tw`
    h-2 w-2 text-primary-1 
    border border-solid border-neutral-1 outline-none 
    rounded
    mr-1
    cursor-pointer
    focus:outline-none
    focus:ring-0
    disabled:text-opacity-60
    
  `}
  &:active,
  &:focus-visible {
    transform: scale(0.97);
    ${tw`outline-none`}
  }
  ${({ primary }) =>
    primary
      ? tw`border-border-color text-primary-1 `
      : tw`border-neutral-1 text-neutral-1`}
`;

export const Label = styled.label`
  ${tw`font-normal cursor-pointer text-md text-neutral-1 `}
`;
