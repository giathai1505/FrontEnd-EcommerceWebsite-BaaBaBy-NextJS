import styled from "styled-components";
import tw from "twin.macro";

export const DescWrap = styled.div`
  ${tw`max-w-[1120px] mx-auto py-[16px] phone:py-4 px-[16px] phone:px-4 laptop:px-4`}
`;

export const DescBody = styled.div`
  ${tw`grid grid-cols-12 gap-2 mt-2 phone:mt-4`}
`;

export const DescContent = styled.div`
  ${tw`phone:col-span-7 col-span-12`}
`;

export const DescImg = styled.div`
  ${tw`phone:col-span-5 col-span-12`}
`;

export const DescHeader = styled.div`
  ${tw`col-span-5 text-lg font-bold mb-2`}
`;

export const DesPara = styled.p`
  ${tw`col-span-5 text-justify`}
`;

export const DescHeader1 = styled.div`
  ${tw`col-span-5 text-lg font-bold my-2`}
`;
