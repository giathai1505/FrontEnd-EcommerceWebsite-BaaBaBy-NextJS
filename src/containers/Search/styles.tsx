import styled from "styled-components";
import tw from "twin.macro";

export const PageContainer = styled.div`
  ${tw`max-w-[1120px] mx-auto mb-10`}
`;

export const Title = styled.h1`
  ${tw`text-3xl font-semibold text-center mt-3 pb-1 border-b border-solid border-grey-1`}
`;

export const ActionBox = styled.div`
  ${tw`flex items-center justify-between py-[16px] text-md`}
`;
