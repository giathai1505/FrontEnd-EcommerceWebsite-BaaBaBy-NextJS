import styled from "styled-components";
import tw from "twin.macro";

export const AuthContainer = styled.div`
  ${tw`flex justify-between w-14 flex-shrink-0    `}
`;

export const MenuItem = styled.a<{
  active: boolean;
}>`
  ${tw`relative block pb-[2px] text-md font-bold  border-primary-1 border-solid `}
  ${({ active }) =>
    active ? tw`text-primary-1 border-b-4  ` : tw`text-neutral-2 border-b-0`}
    ${tw`hover:border-b-4 hover:text-primary-1`}
`;

export const Line = styled.div`
  ${tw`absolute w-[2px] h-[16px] bg-neutral-2 top-[4px] -right-1 transform -translate-y-1/2  `};
`;
