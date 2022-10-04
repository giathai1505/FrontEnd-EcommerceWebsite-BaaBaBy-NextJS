import styled from "styled-components";
import tw from "twin.macro";

export const DetailInfoWrap = styled.div`
  ${tw`phone:col-span-7 phone:col-start-6 col-span-12`}
`;

export const DetailHeader = styled.h3`
  ${tw`font-bold text-xl text-[#300F19] phone:text-3xl laptop:text-3xl`}
`;

export const DetailButton = styled.div`
  ${tw`flex gap-1`}
`;

export const ButtonWrap = styled.div<{ type: string }>`
  ${tw`flex cursor-pointer items-center py-[13px] px-[24px] rounded-md gap-[8px] font-semibold text-lg`}
  ${({ type }) =>
    type === "0"
      ? tw`text-primary-1 border-[1px] border-primary-1 border-solid hover:text-white-color hover:bg-primary-1`
      : tw`bg-primary-1 text-white-color hover:text-primary-1 hover:bg-white-color hover:border-primary-1 border-[1px] hover:border-solid`}
`;

export const ButtonContent = styled.div`
  ${tw`flex items-center`}
`;
