import styled from "styled-components";
import tw from "twin.macro";

export const BreadcrumbContainer = styled.div`
  ${tw`w-full pb-1`}
`;

export const ListItems = styled.div`
  ${tw`flex flex-row flex-wrap items-center gap-0.5`}
`;

export const Item = styled.div<{ isLast: boolean }>`
  ${tw`font-normal phone:text-lg text-md`}
  ${({ isLast }) =>
    isLast ? tw`font-bold text-neutral-1 ` : tw`text-neutral-2 hover:underline`}
`;
