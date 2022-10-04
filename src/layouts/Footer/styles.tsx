import styled from "styled-components";
import tw from "twin.macro";

export const FooterWrap = styled.div`
  ${tw`max-w-[1120px] px-1.5 phone:px-4 desktop:px-0 mx-auto py-4 grid grid-cols-4 gap-1.5`}
`;

export const FooterContainer = styled.div`
  ${tw`w-full  bg-primary-1`}
`;

export const FooterCol = styled.div`
  ${tw`desktop:col-span-1 phone:col-span-2 col-span-4 text-white-color`}
`;

export const FooterTitle = styled.h3`
  ${tw`col-span-1 font-bold text-lg mb-2.5`}
`;

export const FooterList = styled.ul`
  ${tw`col-span-1`}
`;

export const FooterItem = styled.li`
  ${tw`col-span-1 text-sm font-normal mb-[12px]`}
`;

export const FooterListIcon = styled.ul`
  ${tw`flex gap-1.5 mb-4`}
`;

export const FooterButton = styled.button`
  ${tw`flex items-center gap-[8px] bg-white-color p-1 text-primary-1 rounded-lg`}
`;

export const FooterButtonContent = styled.p`
  ${tw`text-lg font-semibold`}
`;
