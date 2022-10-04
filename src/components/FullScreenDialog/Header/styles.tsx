import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.header`
  ${tw`flex flex-row items-center justify-between w-full px-3 py-1.5 border-b border-solid border-neutral-4`}
`;

export const Title = styled.h1`
  ${tw`font-bold text-2xl phone:text-3xl`}
`;

export const Progress = {
  Container: styled.div`
    ${tw`flex flex-row items-center`}
  `,
  Item: styled.div`
    ${tw`flex flex-row items-center gap-1 font-normal text-xxl`}
  `,
  StepIndex: styled.div`
    ${tw`w-3.5 h-3.5 bg-primary-1 flex items-center justify-center rounded-full`}
  `,
};
