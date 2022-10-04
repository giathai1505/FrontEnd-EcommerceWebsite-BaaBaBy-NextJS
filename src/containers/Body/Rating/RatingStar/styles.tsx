import styled from "styled-components";
import tw from "twin.macro";

export const RatingStarWrap = styled.div`
  ${tw`py-[8px] pl-2 phone:p-4 bg-[#FDEDF2] phone:mt-4 phone:mb-[28px] my-[16px] flex items-center`}
`;

export const RatingNumWrap = styled.div`
  ${tw`flex items-end mr-2 phone:mr-[76px]`}
`;

export const RatingNum = styled.p`
  ${tw`flex text-[40px] font-normal text-primary-1`}
`;

export const MaxRatingNum = styled.p`
  ${tw`flex text-primary-1 relative bottom-[8px]`}
`;

export const NumFilterList = styled.ul`
  ${tw` gap-[12px] flex-wrap inline-flex phone:flex`}
`;

export const NumFilterItem = styled.li`
  ${tw`bg-[#ffffff] px-[8px]  laptop:px-[16px] py-[4px] phone:py-[8px] rounded-lg text-xs laptop:text-md text-[#300F19] cursor-pointer hover:text-white-color hover:bg-primary-1`}
`;
