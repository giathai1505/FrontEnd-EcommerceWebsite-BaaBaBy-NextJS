import styled from "styled-components";
import tw from "twin.macro";

export const SimilarWrap = styled.div`
  ${tw`max-w-[1120px] mx-auto py-[15px] px-2 phone:py-4  phone:px-4 laptop:px-4`}
`;

export const SimilarContainer = styled.div`
  ${tw`w-full  bg-[#FAFAFA]`}
`;

export const SimilarSubTitle = styled.p`
  ${tw`text-md font-normal text-[#300F19] mt-[16px] mb-3`}
`;

export const SimilarList = styled.div`
  ${tw`flex  gap-2.5 relative duration-75`}
`;

export const SimilarCaroselWrap = styled.div`
  ${tw`w-full overflow-hidden relative`}
`;

export const IconWrapLeft = styled.span`
  ${tw`bg-primary-1 text-white-color absolute left-0 top-[50%] text-xl z-10 p-[8px] rounded-lg cursor-pointer`}
`;

export const IconWrapRight = styled.span`
  ${tw`bg-primary-1 text-white-color absolute right-0 top-[50%] text-xl z-10 p-[8px] rounded-lg cursor-pointer`}
`;
